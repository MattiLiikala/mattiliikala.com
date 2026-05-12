import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './About.module.css'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'end start'],
  })
  // percentage so the curtain is always exactly one section-height below at start
  const curtainY = useTransform(scrollYProgress, (v) => `${(1 - Math.pow(v, 0.55)) * 100}%`)

  return (
    <section ref={sectionRef} className={styles.about}>
      <div className={styles.sticky}>
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
            Currently I work on design systems, and I'm testing and researching different approaches to use AI in design systems and design work. I have broad knowledge on all areas of design work (service design, UX, UI , accessibility). My focus on development work has always been on front-end development.
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

      {/* Curtain is in its own overflow:hidden wrapper so sticky above is unaffected */}
      <div className={styles.curtainWrapper}>
        <motion.div className={styles.curtain} style={{ y: curtainY }} />
      </div>
    </section>
  )
}
