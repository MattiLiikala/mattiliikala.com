import { motion } from 'framer-motion'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about}>
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

    </section>
  )
}
