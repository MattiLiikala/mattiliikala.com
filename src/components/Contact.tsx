import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <p className={styles.label}>Contact</p>
        <h2 className={styles.heading}>
          Let's work<br />together
        </h2>
        <p className={styles.sub}>
          Have a project in mind or want to explore what's possible?
          I'm open to new opportunities and collaborations.
        </p>
        <div className={styles.actions}>
          <a href="mailto:matti.m.liikala@gmail.com" className={styles.primary}>
            Say hello
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mattiliikala"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
