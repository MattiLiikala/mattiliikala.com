import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  slug: string
  title: string
  image: string
  imageStyle?: 'cover' | 'contain'
  imagePosition?: string
}

export default function ProjectCard({
  slug,
  title,
  image,
  imageStyle = 'cover',
  imagePosition,
}: ProjectCardProps) {
  return (
    <Link to={`/${slug}`} className={styles.card}>
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
      <div className={styles.overlay}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </Link>
  )
}
