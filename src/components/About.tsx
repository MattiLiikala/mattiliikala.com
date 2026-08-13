import { useRef, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './About.module.css'

// drift = additional rotation (degrees) accumulated while scrolling through Projects
// left positions evenly spaced ~7 vw apart; btm spread across full -1 to -13 range
const BORDER_BLOCKS = [
  { w: 14, h: 14, left: -13, btm:  -1, rot: -15, drift: -36 },
  { w: 10, h: 10, left:  -6, btm:  -8, rot:   8, drift:  33 },
  { w: 12, h: 12, left:   1, btm:  -4, rot: -12, drift: -30 },
  { w: 11, h: 11, left:  15, btm:  -2, rot:  -9, drift: -33 },
  { w: 8,  h: 8,  left:  20, btm:  -18, rot:  -32, drift:  35 },
  { w: 13, h: 13, left:  22, btm:  -9, rot:  14, drift:  30 },
  { w: 10, h: 10, left:  43, btm:  -3, rot: -13, drift: -42 },
  { w: 8,  h: 8,  left:  46, btm:  -18, rot:  12, drift:  35 },
  { w: 13, h: 13, left:  57, btm:  -5, rot:  -7, drift: -30 },
  { w: 10, h: 10, left:  64, btm: -12, rot:  11, drift:  32 },
  { w: 12, h: 12, left:  71, btm:  -7, rot:  -8, drift: -28 },
  { w: 14, h: 14, left:  78, btm:  -2, rot:  12, drift:  35 },
  { w: 11, h: 11, left:  85, btm: -11, rot:  -6, drift: -29 },
  { w: 13, h: 13, left:  92, btm:  -4, rot:  10, drift:  33 },
  { w: 12, h: 12, left:  99, btm:  -6, rot:  -9, drift: -27 },
  { w: 10, h: 10, left: 106, btm:  -3, rot:   7, drift:  30 },
]

const MOBILE_BORDER_BLOCKS = [
  { w: 24, h: 24, left: -10, btm:  -5, rot: -15, drift: -36 },
  { w: 22, h: 22, left:   2, btm: -16, rot: -18, drift:  33 },
  { w: 26, h: 26, left:  30, btm:  -7, rot: -12, drift: -30 },
  { w: 12, h: 12, left:  30, btm: -20, rot: -42, drift: -30 },
  { w: 22, h: 22, left:  38, btm: -15, rot:  46, drift:  39 },
  { w: 24, h: 24, left:  56, btm:  -3, rot:  -9, drift: -33 },
  { w: 22, h: 22, left:  72, btm: -13, rot:  14, drift:  30 },
  { w: 26, h: 26, left:  86, btm:  -8, rot: -11, drift: -36 },
  { w: 22, h: 22, left: 100, btm: -18, rot:   5, drift:  27 },
]

const LAND_OFFSETS = [0, 0.025, 0.01, 0.03, 0.005, 0.025, 0.01, 0.03, 0.005]

function BorderBlock({
  b,
  index,
  scrollYProgress,
}: {
  b: (typeof BORDER_BLOCKS)[0]
  index: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const landEnd = 0.15 + LAND_OFFSETS[index % LAND_OFFSETS.length]
  const fromY = 600 + index * 70

  // Y: eased landing, then holds at 0
  const y = useTransform(scrollYProgress, (v) => {
    const t = Math.pow(Math.min(v / landEnd, 1), 0.75)
    return fromY * (1 - t)
  })

  // Rotation: eased landing phase → slow linear drift through Projects
  const rotate = useTransform(scrollYProgress, (v) => {
    if (v <= landEnd) {
      const t = Math.pow(v / landEnd, 0.75)
      return b.rot * 1.8 + (b.rot - b.rot * 1.8) * t
    }
    const driftT = (v - landEnd) / (1 - landEnd)
    return b.rot + b.drift * driftT
  })

  return (
    <motion.div
      className={styles.borderBlock}
      style={{
        width: `${b.w}vw`,
        height: `${b.h}vw`,
        left: `${b.left}vw`,
        bottom: `${b.btm}vw`,
        y,
        rotate,
      }}
    />
  )
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const blocks = useMemo(
    () => (window.innerWidth < 800 ? MOBILE_BORDER_BLOCKS : BORDER_BLOCKS),
    []
  )
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  return (
    <section ref={sectionRef} className={styles.about}>
      <div className={styles.content}>
        <div className={styles.text}>
          <motion.p
            className={styles.line}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
          >
            I am a designer and developer from Turku.
          </motion.p>
          <p className={styles.spacer}> </p>
          <motion.p
            className={styles.line}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            My latest work has been on design systems. Currently I'm testing and researching different approaches to use AI in design work and how to build best design systems for AI. I have broad knowledge on all areas of design work (service design, UX, UI , accessibility). My focus on development work has always been on front-end development, but I'm currently broadening that expertice so I can work fullstack when building with AI.
          </motion.p>
          <p className={styles.spacer}> </p>
          <motion.p
            className={styles.line}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            I am constantly challenging myself in learning new things. I believe that wide knowledge in technology also makes me a better designer.
          </motion.p>
        </div>
      </div>

      <div className={styles.blockBorder} aria-hidden="true">
        {blocks.map((b, i) => (
          <BorderBlock key={i} b={b} index={i} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </section>
  )
}
