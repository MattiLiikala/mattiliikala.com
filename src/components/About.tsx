import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.text}>
        <p className={styles.line}>I am a designer and developer from Turku.   </p>
        <p className={styles.spacer}> </p>
        <p className={styles.line}>
          Currently I work on design systems, and I'm testing and researching different approaches to use AI in design systems and design work. I have broad knowledge on all areas of design work (service design, UX, UI , accessibility). My focus on development work has always been on front-end development.
        </p>
        <p className={styles.spacer}> </p>
        <p className={styles.line}>
          I am constantly challenging myself in learning new things. I believe that wide knowledge in technology also makes me a better designer.
        </p>
      </div>
    </section>
  )
}
