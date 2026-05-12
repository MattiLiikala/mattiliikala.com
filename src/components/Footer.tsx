import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/mattiliikala"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn profile"
          >
            <span className={styles.icon} style={{ maskImage: 'url(/assets/linkedin.svg)', WebkitMaskImage: 'url(/assets/linkedin.svg)' }} />
          </a>
          <a
            href="mailto:matti.m.liikala@gmail.com"
            className={styles.iconLink}
            aria-label="Email"
          >
            <span className={styles.iconEmail} style={{ maskImage: 'url(/assets/email.svg)', WebkitMaskImage: 'url(/assets/email.svg)' }} />
          </a>
        </div>
        <p className={styles.copyright}>Matti Liikala 2026</p>
      </div>
    </footer>
  )
}
