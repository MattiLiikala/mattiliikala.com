import { motion } from 'framer-motion'
import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.content}>
        <p className={styles.heading}>Projects</p>
        <div className={styles.grid}>
          {projects.map((project, index) => (
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
                imageStyle={project.imageStyle}
                imagePosition={project.imagePosition}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
