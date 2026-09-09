import { Link } from 'react-router-dom'
import { useState, type CSSProperties } from 'react'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  slug: string
  title: string
  image: string
  role?: string[]
  imageStyle?: 'cover' | 'contain'
  imagePosition?: string
  index?: number
}

const MIN_ROTATION = 3
const MAX_ROTATION = 6

function randomRotation() {
  return MIN_ROTATION + Math.random() * (MAX_ROTATION - MIN_ROTATION)
}

export default function ProjectCard({
  slug,
  title,
  image,
  role,
  imageStyle = 'cover',
  imagePosition,
  index = 0,
}: ProjectCardProps) {
  // Alternate the tilt direction card-by-card so a row of cards fans left/right/left/right.
  // Picked once per mount so the tilt doesn't jitter on re-render. Only the backdrop
  // rotates — the image stays straight.
  const [bgRotation] = useState(() => {
    const sign = index % 2 === 0 ? -1 : 1
    return sign * randomRotation()
  })

  const cardStyle = {
    '--bg-rotation': `${bgRotation}deg`,
  } as CSSProperties

  return (
    <Link to={`/${slug}`} className={styles.card} style={cardStyle}>
      <div className={styles.bgRect} />
      <div className={styles.imageBox}>
        <div className={styles.imageBackdrop} />
        <img
          src={image}
          alt=""
          loading="lazy"
          className={styles.image}
          style={{
            objectFit: imageStyle,
            objectPosition: imagePosition,
          }}
        />
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        {role && role.length > 0 && (
          <p className={styles.role}>
            Role: <span className={styles.roleBold}>{role.join(', ')}</span>
          </p>
        )}
      </div>
    </Link>
  )
}
