import type React from 'react'
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
            aria-label="linkedin profile"
          >
            <img
              src="/assets/linkedin.svg"
              alt="linkedin logo"
              className={styles.icon}
              style={{ '--fill-0': 'rgba(242, 242, 242, 1)' } as React.CSSProperties}
            />
          </a>
          <a
            href="mailto:matti.m.liikala@gmail.com"
            className={styles.iconLink}
            aria-label="email"
          >
            <img
              src="/assets/email.svg"
              alt="email"
              className={styles.iconEmail}
              style={{ '--fill-0': 'rgba(242, 242, 242, 1)' } as React.CSSProperties}
            />
          </a>
        </div>
        <p className={styles.copyright}>Matti Liikala 2026</p>
      </div>
    </footer>
  )
}
