import { useRef, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './Hero.module.css'

interface BlockConfig {
  size: string
  top: string
  left: string
  fromY: number
  fromRotate: number
  toRotate: number
  start: number
  end: number
}

// 5 rows × 9 cols = 45 blocks for desktop
function makeDesktopBlocks(): BlockConfig[] {
  const rowTops = ['-8vh', '18vh', '42vh', '62vh', '82vh']
  const sizes =   [9, 11, 10, 13, 9, 12, 10, 11, 9]
  const rotates = [-14, 9, -6, 16, -10, 7, -13, 11, -8]
  const endBase = [0, 0.05, 0.02, 0.06, 0.01, 0.05, 0.02, 0.06, 0.01]

  return rowTops.flatMap((top, row) =>
    Array.from({ length: 9 }, (_, col) => {
      const leftBase = (col / 9) * 100
      const leftJitter = ((row * 5 + col * 3) % 7) - 3
      const fromRotate = rotates[col] * (row % 2 === 0 ? 1 : -1)
      return {
        size: `${sizes[col]}vw`,
        top,
        left: `${(leftBase + leftJitter).toFixed(1)}vw`,
        fromY: 2200 + row * 180 + col * 25,
        fromRotate,
        toRotate: fromRotate * 0.55,
        start: 0,
        end: 0.88 + endBase[col],
      }
    })
  )
}

// 6 rows × 6 cols = 36 blocks for mobile — scattered with top + left jitter
function makeMobileBlocks(): BlockConfig[] {
  const rowTops = ['-10vh', '12vh', '30vh', '48vh', '65vh', '82vh']
  const sizes =   [22, 28, 18, 26, 20, 24]
  const rotates = [-14, 9, -8, 16, -11, 7]
  const endBase = [0, 0.04, 0.02, 0.05, 0.01, 0.03]

  return rowTops.flatMap((top, row) =>
    Array.from({ length: 6 }, (_, col) => {
      const leftBase = (col / 6) * 100
      // pseudo-random but deterministic jitter for left and top
      const leftJitter = ((row * 13 + col * 7) % 19) - 9   // –9 to +9 vw
      const topJitter  = ((row * 11 + col * 5) % 13) - 6   // –6 to +6 vh
      const fromRotate = rotates[col] * (row % 2 === 0 ? 1 : -1)
      return {
        size: `${sizes[col]}vw`,
        top: `calc(${top} + ${topJitter}vh)`,
        left: `${(leftBase + leftJitter).toFixed(1)}vw`,
        fromY: 1600 + row * 130 + col * 20,
        fromRotate,
        toRotate: fromRotate * 0.55,
        start: 0,
        end: 0.88 + endBase[col],
      }
    })
  )
}

function BackgroundFill({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const y = useTransform(scrollYProgress, [0, 0.95], [2800, 0])
  return (
    <motion.div
      style={{ position: 'absolute', inset: 0, backgroundColor: '#232323', y }}
    />
  )
}

function AnimatedBlock({
  cfg,
  scrollYProgress,
}: {
  cfg: BlockConfig
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const y = useTransform(scrollYProgress, [cfg.start, cfg.end], [cfg.fromY, 0])
  const rotate = useTransform(scrollYProgress, [cfg.start, cfg.end], [cfg.fromRotate, cfg.toRotate])
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: cfg.size,
        height: cfg.size,
        top: cfg.top,
        left: cfg.left,
        backgroundColor: '#232323',
        borderRadius: '12px',
        y,
        rotate,
      }}
    />
  )
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const blocks = useMemo(
    () => (window.innerWidth < 800 ? makeMobileBlocks() : makeDesktopBlocks()),
    []
  )

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const smoothProgress = useTransform(scrollYProgress, (v) => Math.pow(v, 0.55))

  return (
    <section ref={heroRef} className={styles.hero}>
      <picture>
        <source media="(max-width: 799px)" srcSet="/assets/hero-mobile.png" />
        <img src="/assets/hero-desktop.png" alt="" className={styles.bgImage} />
      </picture>

      <div className={styles.blocksContainer}>
        <BackgroundFill scrollYProgress={smoothProgress} />
        {blocks.map((cfg, i) => (
          <AnimatedBlock key={i} cfg={cfg} scrollYProgress={smoothProgress} />
        ))}
      </div>

      <div className={styles.content}>
        <p className={styles.greeting}>Hi, I am</p>
        <p className={styles.name}>Matti Liikala</p>
      </div>
    </section>
  )
}
