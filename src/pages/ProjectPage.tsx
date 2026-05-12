import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects, type ProjectSection } from '../data/projects'
import styles from './ProjectPage.module.css'

const fadeIn = (x: number) => ({
  initial: { opacity: 0, x },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
  viewport: { once: true, margin: '-60px' },
})

function SectionContent({ section }: { section: ProjectSection }) {
  const paragraphs = section.body.split('\n\n')

  const imageBlock = section.image && section.imageWidth && section.imageHeight && (
    <div
      className={styles.sectionImageBlock}
      style={{
        width: `${(section.imageWidth / 1280) * 100}%`,
        aspectRatio: `${section.imageWidth} / ${section.imageHeight}`,
      }}
    >
      <img src={section.image} alt="" loading="lazy" />
    </div>
  )

  if (!imageBlock) {
    return (
      <motion.div className={styles.sectionText} {...fadeIn(-40)}>
        {section.heading && (
          <h2 className={styles.sectionHeading}>{section.heading}</h2>
        )}
        <div className={styles.sectionBody}>
          {paragraphs.map((para, i) => (
            <p key={i} className={styles.paragraph}>{para}</p>
          ))}
        </div>
      </motion.div>
    )
  }

  const isImageLeft = section.imageLayout === 'left'

  const textBlock = (
    <motion.div className={styles.sectionTextBlock} {...fadeIn(isImageLeft ? 40 : -40)}>
      {section.heading && (
        <h2 className={styles.sectionHeading}>{section.heading}</h2>
      )}
      <div className={styles.sectionBody}>
        {paragraphs.map((para, i) => (
          <p key={i} className={styles.paragraph}>{para}</p>
        ))}
      </div>
    </motion.div>
  )

  const animatedImage = (
    <motion.div
      className={styles.sectionImageBlock}
      style={{
        width: `${(section.imageWidth! / 1280) * 100}%`,
        aspectRatio: `${section.imageWidth} / ${section.imageHeight}`,
      }}
      {...fadeIn(isImageLeft ? -40 : 40)}
    >
      <img src={section.image} alt="" loading="lazy" />
    </motion.div>
  )

  return (
    <div className={`${styles.sectionRow} ${isImageLeft ? styles.imageFirst : ''}`}>
      {isImageLeft ? (
        <>{animatedImage}{textBlock}</>
      ) : (
        <>{textBlock}{animatedImage}</>
      )}
    </div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!project) return <Navigate to="/" replace />

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <Link to="/" className={styles.backLink}>
          ← Back to front page
        </Link>
        <h1 className={styles.title}>{project.title}</h1>
        {project.description && (
          <p className={styles.heroText}>{project.description}</p>
        )}
        {project.role && (
          <p className={styles.heroText}>{project.role}</p>
        )}
        <div className={styles.timestamp}>
          <span className={styles.year}>{project.year}</span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              {project.linkLabel ?? project.link}
            </a>
          )}
        </div>
      </div>

      {/* Full-width image after hero */}
      {project.heroImage && (
        <motion.img
          src={project.heroImage}
          alt=""
          loading="lazy"
          className={styles.heroImage}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      )}

      {/* Content sections */}
      {project.sections.map((section, i) => (
        <SectionContent key={i} section={section} />
      ))}

      {/* Bottom back link */}
      <div className={styles.bottomNav}>
        <Link to="/" className={styles.backLink}>
          ← Back to front page
        </Link>
      </div>
    </div>
  )
}
