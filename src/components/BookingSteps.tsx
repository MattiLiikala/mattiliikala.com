import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './BookingSteps.module.css'

// A staircase of booking steps. Plays once when scrolled into view: the steps
// are drawn one by one, then a dot hops up from step to step, painting each
// one as it lands, until it reaches the last step (the goal).
const STEPS = ['search', 'service', 'time-slot', 'goal']  // keys only, not rendered

// Same palette as MdsLibraryMap
const ACCENT = '#f0ebd1'
const PAGE_BG = '#f2f2f2'
// #121212 (ink) at 25% over the page background, as a solid colour so fills and
// overlapping strokes don't double up
const LIGHT = '#bababa'
const DARK = 'var(--color-dark)'

const VIEW_W = 440
const VIEW_H = 336
const BASE_Y = 316
const STEP_W = 92
const STEP_GAP = 12
const STEP_X0 = (VIEW_W - (STEPS.length * STEP_W + (STEPS.length - 1) * STEP_GAP)) / 2
const STEP_H0 = 70
const STEP_RISE = 60
const STEP_RX = 14
const DOT_R = 12
const HOP_HEIGHT = 40

function stepRect(i: number) {
  const h = STEP_H0 + i * STEP_RISE
  return { x: STEP_X0 + i * (STEP_W + STEP_GAP), y: BASE_Y - h, w: STEP_W, h }
}

// Where the dot rests on top of step i
function dotRest(i: number) {
  const r = stepRect(i)
  return { x: r.x + r.w / 2, y: r.y - DOT_R }
}

/* ── Timeline (seconds) ─────────────────────────────────────────────── */
const DRAW_START = 0.2
const DRAW_STAGGER = 0.25
const DRAW_DURATION = 0.6
const DOT_START = DRAW_START + (STEPS.length - 1) * DRAW_STAGGER + DRAW_DURATION + 0.1
const PAUSE = 0.35
const HOP = 0.5
const PAINT_DURATION = 0.3

function landTime(i: number) {
  return DOT_START + i * (PAUSE + HOP)
}

const GOAL = STEPS.length - 1
const GOAL_TIME = landTime(GOAL)

// Dot keyframes: rest on a step, then arc up and over onto the next one.
const dotCx: number[] = []
const dotCy: number[] = []
const dotTimes: number[] = []
const dotEase: ('linear' | 'easeOut' | 'easeIn')[] = []
const HOPS_TOTAL = GOAL_TIME - DOT_START

STEPS.forEach((_, i) => {
  const p = dotRest(i)
  const t = landTime(i) - DOT_START
  if (i > 0) {
    const prev = dotRest(i - 1)
    dotCx.push((prev.x + p.x) / 2)
    dotCy.push(Math.min(prev.y, p.y) - HOP_HEIGHT)
    dotTimes.push(t - HOP / 2)
    dotEase.push('easeOut', 'easeIn')
  }
  dotCx.push(p.x)
  dotCy.push(p.y)
  dotTimes.push(t)
  if (i < GOAL) {
    // hold on the step before hopping on
    dotCx.push(p.x)
    dotCy.push(p.y)
    dotTimes.push(t + PAUSE)
    dotEase.push('linear')
  }
})

const goalRect = stepRect(GOAL)
const FLAG_X = goalRect.x + goalRect.w - 20
const FLAG_BASE = goalRect.y
const FLAG_TOP = goalRect.y - 50

export default function BookingSteps() {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div className={styles.wrap}>
      <svg
        ref={ref}
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className={styles.svg}
        role="img"
        aria-label="Animated staircase of booking steps — search, service, time slot — leading up to the goal, with a dot climbing from step to step until it reaches the goal."
      >
        {STEPS.map((step, i) => {
          const r = stepRect(i)
          const isGoal = i === GOAL
          const paint = { delay: landTime(i), duration: PAINT_DURATION, ease: 'easeOut' as const }
          return (
            <motion.rect
              key={step}
              x={r.x}
              y={r.y}
              width={r.w}
              height={r.h}
              rx={STEP_RX}
              stroke={LIGHT}
              strokeWidth={1.5}
              initial={{ pathLength: 0, fill: PAGE_BG }}
              animate={inView ? { pathLength: 1, fill: isGoal ? DARK : ACCENT } : undefined}
              transition={{
                pathLength: { delay: DRAW_START + i * DRAW_STAGGER, duration: DRAW_DURATION, ease: 'easeInOut' },
                fill: paint,
              }}
            />
          )
        })}

        {/* Flag planted on the goal once the dot reaches it */}
        <motion.g
          initial={{ opacity: 0, scaleY: 0 }}
          animate={inView ? { opacity: 1, scaleY: 1 } : undefined}
          transition={{ delay: GOAL_TIME + 0.1, duration: 0.4, ease: 'backOut' }}
          style={{ transformOrigin: `${FLAG_X}px ${FLAG_BASE}px` }}
        >
          <line x1={FLAG_X} y1={FLAG_BASE} x2={FLAG_X} y2={FLAG_TOP} strokeWidth={2.5} strokeLinecap="round" style={{ stroke: DARK }} />
          <path d={`M ${FLAG_X} ${FLAG_TOP} L ${FLAG_X - 28} ${FLAG_TOP + 9} L ${FLAG_X} ${FLAG_TOP + 18} Z`} style={{ fill: DARK }} />
        </motion.g>

        <motion.circle
          r={DOT_R}
          style={{ fill: DARK }}
          initial={{ cx: dotCx[0], cy: dotCy[0], opacity: 0 }}
          animate={inView ? { cx: dotCx, cy: dotCy, opacity: 1 } : undefined}
          transition={{
            cx: { delay: DOT_START, duration: HOPS_TOTAL, times: dotTimes.map((t) => t / HOPS_TOTAL), ease: 'linear' },
            cy: { delay: DOT_START, duration: HOPS_TOTAL, times: dotTimes.map((t) => t / HOPS_TOTAL), ease: dotEase },
            opacity: { delay: DOT_START - 0.2, duration: 0.2 },
          }}
        />
      </svg>
    </div>
  )
}
