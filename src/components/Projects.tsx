import styles from './Projects.module.css'

interface Project {
  title: string
  image: string
  titleColor: 'white' | 'light'
  imageStyle?: 'contain' | 'cover'
  imagePosition?: string
}

const projects: Project[] = [
  {
    title: 'Mehiläinen Design System',
    image: '/assets/project-mehi-ds.png',
    titleColor: 'white',
    imageStyle: 'contain',
    imagePosition: 'center 1.26%',
  },
  {
    title: 'Mehiläinen appointment booking system update',
    image: '/assets/project-mehi-booking.png',
    titleColor: 'white',
    imageStyle: 'cover',
  },
  {
    title: 'Opintokamu - game',
    image: '/assets/project-opintokamu.png',
    titleColor: 'white',
    imageStyle: 'cover',
  },
  {
    title: 'Luonnontieteilijöiden \njouluristeily  -rebrand',
    image: '/assets/project-jouluristeily.png',
    titleColor: 'light',
    imageStyle: 'contain',
    imagePosition: '2.88% 25.17%',
  },
]

export default function Projects() {
  return (
    <section className={styles.projects}>
      <p className={styles.heading}>Projects</p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.title} className={styles.card} tabIndex={0} role="link">
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt=""
                loading="lazy"
                className={styles.image}
                style={{
                  objectFit: project.imageStyle ?? 'cover',
                  objectPosition: project.imagePosition ?? 'center center',
                }}
              />
            </div>
            <div className={styles.overlay} />
            <div className={styles.titleWrapper}>
              <p
                className={styles.title}
                style={{
                  WebkitTextFillColor: project.titleColor === 'white' ? '#fff' : '#f2f2f2',
                  color: project.titleColor === 'white' ? '#fff' : '#f2f2f2',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {project.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
