import styles from './PhoneFrame.module.css'

interface PhoneFrameProps {
  src?: string
  alt?: string
}

/** Wraps a mobile screenshot in a simple Google Pixel 8-style device frame. */
export default function PhoneFrame({ src, alt = '' }: PhoneFrameProps) {
  return (
    <div className={styles.frame}>
      <div className={styles.screen}>
        {src ? (
          <img src={src} alt={alt} loading="lazy" />
        ) : (
          <div className={styles.placeholder}>Screenshot coming soon</div>
        )}
        <div className={styles.camera} />
      </div>
    </div>
  )
}
