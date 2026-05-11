import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <picture>
        <source media="(max-width: 799px)" srcSet="/assets/hero-mobile.png" />
        <img
          src="/assets/hero-desktop.png"
          alt=""
          className={styles.bgImage}
        />
      </picture>
      <div className={styles.content}>
        <p className={styles.greeting}>Hi, I am</p>
        <p className={styles.name}>Matti Liikala</p>
      </div>
    </section>
  )
}
