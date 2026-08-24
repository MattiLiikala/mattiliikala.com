import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { allProjects, type ProjectSection } from '../data/projects'
import PhoneFrame from '../components/PhoneFrame'
import MdsLibraryMap from '../components/MdsLibraryMap'
import styles from './ProjectPage.module.css'

const fadeIn = (x: number) => ({
  initial: { opacity: 0, x },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
  viewport: { once: true, margin: '-60px' },
})

function renderParagraph(text: string) {
  // Single '\n' = line break within the paragraph (no gap); '\n\n' (handled
  // by the caller splitting into separate <p> elements) is the paragraph break.
  return text.split('\n').map((line, i, lines) => (
    <span key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </span>
  ))
}

function SectionContent({ section }: { section: ProjectSection }) {
  const paragraphs = section.body.split('\n\n')

  const imageClass = [
    section.imageUncontained ? styles.sectionImageUncontained : styles.sectionImageBlock,
    section.imagePadding ? styles.sectionImagePadded : '',
    section.imagePreserveAspect ? styles.sectionImagePreserveAspect : '',
  ].filter(Boolean).join(' ')

  const imageBlock = section.image && section.imageWidth && section.imageHeight && (
    <div
      className={imageClass}
      style={{
        width: `${(section.imageWidth / 1280) * 100}%`,
        aspectRatio: `${section.imageWidth} / ${section.imageHeight}`,
      }}
    >
      <img src={section.image} alt="" loading="lazy" />
    </div>
  )

  if (section.phoneImages) {
    // Show placeholders until real screenshots are added, so the intended layout is visible.
    const frames = section.phoneImages.length > 0 ? section.phoneImages : [undefined, undefined, undefined]

    return (
      <motion.div className={styles.sectionText} {...fadeIn(-40)}>
        {section.heading && (
          <h2 className={styles.sectionHeading}>{section.heading}</h2>
        )}
        <div className={styles.sectionBody}>
          {paragraphs.map((para, i) => (
            <p key={i} className={styles.paragraph}>{renderParagraph(para)}</p>
          ))}
        </div>
        <div className={styles.phoneGallery}>
          {frames.map((src, i) => (
            <PhoneFrame key={i} src={src} />
          ))}
        </div>
      </motion.div>
    )
  }

  if (!imageBlock && !section.diagram) {
    return (
      <motion.div className={styles.sectionText} {...fadeIn(-40)}>
        {section.heading && (
          <h2 className={styles.sectionHeading}>{section.heading}</h2>
        )}
        <div className={styles.sectionBody}>
          {paragraphs.map((para, i) => (
            <p key={i} className={styles.paragraph}>{renderParagraph(para)}</p>
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
          <p key={i} className={styles.paragraph}>{renderParagraph(para)}</p>
        ))}
      </div>
    </motion.div>
  )

  // The side content is either a project image, or (for sections with no
  // image, like "Scalable future") an inline diagram — laid out the same way.
  const sideContent = imageBlock ? (
    <motion.div
      className={imageClass}
      style={{
        width: `${(section.imageWidth! / 1280) * 100}%`,
        aspectRatio: `${section.imageWidth} / ${section.imageHeight}`,
      }}
      {...fadeIn(isImageLeft ? -40 : 40)}
    >
      <img src={section.image} alt="" loading="lazy" />
    </motion.div>
  ) : (
    <motion.div className={styles.sectionDiagramBlock} {...fadeIn(isImageLeft ? -40 : 40)}>
      {section.diagram === 'mds-library-map' && <MdsLibraryMap />}
    </motion.div>
  )

  return (
    <div className={`${styles.sectionRow} ${isImageLeft ? styles.imageFirst : ''}`}>
      {isImageLeft ? (
        <>{sideContent}{textBlock}</>
      ) : (
        <>{textBlock}{sideContent}</>
      )}
    </div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = allProjects.find((p) => p.slug === slug)

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
        {project.role && project.role.length > 0 && (
          <p className={styles.subtitle}>
            Role: <span className={styles.subtitleBold}>{project.role.join(', ')}</span>
          </p>
        )}
        {project.description && (
          <p className={styles.heroText}>{project.description}</p>
        )}
        {project.roleDescription && (
          <p className={styles.heroText}>{project.roleDescription}</p>
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
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              GitHub ↗
            </a>
          )}
        </div>
        {project.usage && project.usage.length > 0 && (
          <div className={styles.usageList}>
            {project.usage.map((stat, i) => (
              <div key={i} className={styles.usageStat}>
                <span className={styles.usageValue}>{stat.value}</span>
                <span className={styles.usageLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        )}
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
