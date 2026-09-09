import { motion } from 'framer-motion'
import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'
import { projects, type ProjectData } from '../data/projects'

interface ProjectsProps {
  heading?: string
  subHeading?: string
  projects?: ProjectData[]
  compact?: boolean
}

export default function Projects({ heading = 'Projects', subHeading, projects: projectList = projects, compact = false }: ProjectsProps) {
  const contentClass = [styles.content, compact ? styles.compact : ''].filter(Boolean).join(' ')

  return (
    <section className={styles.projects}>
      <div className={contentClass}>
        <div>
          <p className={styles.heading}>{heading}</p>
          <p className={styles.subHeading}>{subHeading}</p>
        </div>
        <div className={styles.grid}>
          {projectList.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <ProjectCard
                slug={project.slug}
                title={project.title}
                image={project.cardImage}
                role={project.role}
                imageStyle={project.imageStyle}
                imagePosition={project.imagePosition}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
