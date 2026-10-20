import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './KalaTokenFlow.module.css'

// How KalaDS tokens flow into a component, using the real primary Button
// tokens. Plays once when scrolled into view: the core, semantic and component
// rows appear one by one with lines drawn between them, then only the
// component row connects to the Button, which is built from them. After that,
// dots keep flowing down each column from core value to the Button.
type TierKey = 'core' | 'semantic' | 'component'
interface Column extends Record<TierKey, string> {
  swatch?: string
}

const COLUMNS: Column[] = [
  { core: 'primary.500', semantic: 'interactive.accent', component: 'primary.bg', swatch: '#c50277' },
  { core: 'neutral.100', semantic: 'interactive.on-accent', component: 'primary.text', swatch: '#fef9f5' },
  { core: 'size.400', semantic: 'padding.lg', component: 'primary.padding-x' },
]
const TIERS: { key: TierKey; label: string }[] = [
  { key: 'core', label: 'Core' },
  { key: 'semantic', label: 'Semantic' },
  { key: 'component', label: 'Component · button' },
]

// Mobile: the full names don't fit three across at a readable size, so the
// node labels drop their group prefix (like core drops `color.`), and the
// prefix every component token shares moves up into the tier label.
const COLUMNS_COMPACT: Column[] = [
  { core: 'primary.500', semantic: 'accent', component: 'bg', swatch: '#c50277' },
  { core: 'neutral.100', semantic: 'on-accent', component: 'text', swatch: '#fef9f5' },
  { core: 'size.400', semantic: 'padding.lg', component: 'padding-x' },
]
const TIERS_COMPACT: { key: TierKey; label: string }[] = [
  { key: 'core', label: 'Core' },
  { key: 'semantic', label: 'Semantic' },
  { key: 'component', label: 'Component · button.primary' },
]

// Same palette as MdsLibraryMap
const PAGE_BG = '#f2f2f2'
const INK = '#121212'
// KalaDS primary button colours, so the built component looks like the real one
const KALA_ACCENT = '#c50277'
const KALA_ON_ACCENT = '#fef9f5'

const LAYOUTS = {
  desktop: { viewW: 440, colStep: 146, nodeW: 140, columns: COLUMNS, tiers: TIERS },
  mobile: { viewW: 340, colStep: 116, nodeW: 108, columns: COLUMNS_COMPACT, tiers: TIERS_COMPACT },
}
type Layout = (typeof LAYOUTS)[keyof typeof LAYOUTS]

const VIEW_H = 384
const NODE_H = 36
const ROW_Y0 = 50
const ROW_STEP = 88
const TIER_LABEL_OFFSET = 30
const BUTTON = { cy: 318, w: 140, h: 44 }
const BUTTON_TOP = BUTTON.cy - BUTTON.h / 2
const BUTTON_INLETS = [-40, 0, 40]  // where each column's line meets the Button's top edge
const SWATCH_R = 6

function rowY(r: number) {
  return ROW_Y0 + r * ROW_STEP
}
const COMPONENT_BOTTOM = rowY(2) + NODE_H / 2

/* ── Timeline (seconds) ─────────────────────────────────────────────── */
const ROW_START = 0.2
const ROW_STAGGER = 0.7
const COL_STAGGER = 0.08
const LINE_DURATION = 0.4
const BUTTON_TIME = ROW_START + 3 * ROW_STAGGER
const PULSE_START = BUTTON_TIME + 0.9
const PULSE_DURATION = 2.2

function rowTime(r: number) {
  return ROW_START + r * ROW_STAGGER
}
// Lines below row r draw in just before row r + 1 appears
function lineTime(r: number, i: number) {
  return rowTime(r) + ROW_STAGGER - LINE_DURATION - 0.05 + i * COL_STAGGER
}
function show(delay: number, duration = 0.4) {
  return { delay, duration, ease: 'easeOut' as const }
}
function pulseTransition(i: number) {
  return {
    duration: PULSE_DURATION,
    delay: PULSE_START + i * 0.35,
    repeat: Infinity,
    repeatDelay: COLUMNS.length * 0.35 + 1.4,
    ease: 'easeInOut' as const,
  }
}

function TokenFlow({ layout, className }: { layout: Layout; className: string }) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { viewW, colStep, nodeW, columns, tiers } = layout
  const colX = (i: number) => viewW / 2 + (i - 1) * colStep
  const buttonCx = viewW / 2

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${viewW} ${VIEW_H}`}
      className={className}
      role="img"
      aria-label="Diagram of KalaDS token layers for the primary Button. Core tokens primary.500, neutral.100 and size.400 map to the semantic tokens interactive.accent, interactive.on-accent and padding.lg, which map to the component tokens button.primary.bg, button.primary.text and button.primary.padding-x. Only the component tokens connect to the Button, which is built from them."
    >
      {/* Lines core → semantic → component, one per column */}
      {[0, 1].map((r) =>
        columns.map((col, i) => (
          <motion.line
            key={`line-${r}-${col.core}`}
            x1={colX(i)}
            y1={rowY(r) + NODE_H / 2}
            x2={colX(i)}
            y2={rowY(r + 1) - NODE_H / 2}
            stroke={INK}
            strokeOpacity={0.25}
            strokeWidth={2}
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : undefined}
            transition={show(lineTime(r, i), LINE_DURATION)}
          />
        )),
      )}

      {/* Only the component tokens connect to the Button */}
      {columns.map((col, i) => (
        <motion.line
          key={`inlet-${col.core}`}
          x1={colX(i)}
          y1={COMPONENT_BOTTOM}
          x2={buttonCx + BUTTON_INLETS[i]}
          y2={BUTTON_TOP}
          stroke={INK}
          strokeOpacity={0.25}
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : undefined}
          transition={show(lineTime(2, i), LINE_DURATION)}
        />
      ))}

      {/* Dots flowing from each core token down to the Button, under the nodes */}
      {columns.map((col, i) => (
        <motion.circle
          key={`pulse-${col.core}`}
          r={4}
          fill={INK}
          initial={{ cx: colX(i), cy: rowY(0), opacity: 0 }}
          animate={
            inView
              ? {
                  cx: [colX(i), colX(i), buttonCx + BUTTON_INLETS[i]],
                  cy: [rowY(0), COMPONENT_BOTTOM, BUTTON_TOP],
                  opacity: [0, 0.7, 0],
                }
              : undefined
          }
          transition={pulseTransition(i)}
        />
      ))}

      {/* Tier labels, haloed in the page colour so the lines pass behind them */}
      {tiers.map((tier, r) => (
        <motion.text
          key={`tier-${tier.key}`}
          x={colX(0) - nodeW / 2 + 4}
          y={rowY(r) - TIER_LABEL_OFFSET}
          dominantBaseline="central"
          className={styles.tierLabel}
          stroke={PAGE_BG}
          strokeWidth={5}
          paintOrder="stroke"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={show(rowTime(r))}
        >
          {tier.label}
        </motion.text>
      ))}

      {tiers.map((tier, r) =>
        columns.map((col, i) => {
          const x = colX(i)
          const y = rowY(r)
          const swatch = tier.key === 'core' ? col.swatch : undefined
          const labelX = swatch ? x + SWATCH_R + 2 : x
          return (
            <motion.g
              key={`node-${tier.key}-${col.core}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : undefined}
              transition={show(rowTime(r) + i * COL_STAGGER, 0.5)}
              style={{ transformOrigin: `${x}px ${y}px` }}
            >
              <rect
                x={x - nodeW / 2}
                y={y - NODE_H / 2}
                width={nodeW}
                height={NODE_H}
                rx={NODE_H / 2}
                fill="#fff"
                stroke={INK}
                strokeWidth={1.5}
              />
              {swatch && (
                <circle
                  cx={x - nodeW / 2 + 18}
                  cy={y}
                  r={SWATCH_R}
                  fill={swatch}
                  stroke={INK}
                  strokeOpacity={0.3}
                  strokeWidth={1}
                />
              )}
              <text x={labelX} y={y} textAnchor="middle" dominantBaseline="central" className={styles.nodeLabel}>
                {col[tier.key]}
              </text>
            </motion.g>
          )
        }),
      )}

      {/* The Button, built from the component tokens only */}
      <motion.g
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 1, scale: 1 } : undefined}
        transition={{ delay: BUTTON_TIME, duration: 0.5, ease: 'backOut' }}
        style={{ transformOrigin: `${buttonCx}px ${BUTTON.cy}px` }}
      >
        <rect
          x={buttonCx - BUTTON.w / 2}
          y={BUTTON_TOP}
          width={BUTTON.w}
          height={BUTTON.h}
          rx={BUTTON.h / 2}
          fill={KALA_ACCENT}
        />
        <text
          x={buttonCx}
          y={BUTTON.cy}
          textAnchor="middle"
          dominantBaseline="central"
          className={styles.buttonLabel}
          fill={KALA_ON_ACCENT}
        >
          Button
        </text>
      </motion.g>

      <motion.text
        x={buttonCx}
        y={BUTTON.cy + BUTTON.h / 2 + 20}
        textAnchor="middle"
        dominantBaseline="central"
        className={styles.caption}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={show(BUTTON_TIME + 0.4)}
      >
        built only from component tokens
      </motion.text>
    </svg>
  )
}

export default function KalaTokenFlow() {
  return (
    <div className={styles.wrap}>
      <TokenFlow layout={LAYOUTS.desktop} className={styles.svgDesktop} />
      <TokenFlow layout={LAYOUTS.mobile} className={styles.svgMobile} />
    </div>
  )
}
