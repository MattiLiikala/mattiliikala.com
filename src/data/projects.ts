export interface ProjectSection {
  heading?: string
  body: string
  image?: string
  imageLayout?: 'right' | 'left'
  imageWidth?: number  // Figma px at 1280 content width
  imageHeight?: number
  imageUncontained?: boolean  // renders image without rounded container/shadow
}

export interface ProjectData {
  slug: string
  title: string
  description?: string
  role?: string
  year: string
  link?: string
  linkLabel?: string
  heroImage?: string  // full-width image right after hero
  cardImage: string
  imageStyle?: 'cover' | 'contain'
  imagePosition?: string
  sections: ProjectSection[]
}

export const projects: ProjectData[] = [
  {
    slug: 'mehilainen-design-system',
    title: 'Mehiläinen Design System',
    description:
      'This multi themed design system is used by both professional users and customers of Mehiläinen. It provides both Design & Developer utilities and complete styleguide to be used.',
    role: 'My role in this project was Design System Lead. Since the team was small I was also the designer and contributed in development tasks.',
    year: '2023–2026',
    cardImage: '/assets/project-mehi-ds.png',
    imageStyle: 'contain',
    imagePosition: 'center 10%',
    sections: [
      {
        heading: 'Beginning',
        body: 'The design system project was born from the needs of designers and developers. First it was created as a side project by me and my developer colleague. When the project was proven to be worth investing more resources, first I started as a full time Design system lead and later on we got one full time developer to the team.',
      },
      {
        heading: 'Strong foundations',
        body: "Everything starts from strong foundations. MDS started with creating primitive tokens (Typography, colors, radius, space etc.). In the beginning, Mehiläinen didn't have a strict semantic tokenisation to follow and all the different applications were designed as a single product. For that reason, the first iteration of design system only relied on the core tokens.",
        image: '/assets/project-mds-strong-foundations.png',
        imageLayout: 'right',
        imageWidth: 487,
        imageHeight: 402,
      },
      {
        heading: 'Multi themed',
        body: 'Mehiläinen provides both professional tools and customer applications. As both usages differ so much, two main themes were needed for Mehiläinen design system. Where patient information system needs to be compact and fit a lot in a single view, customer design requires more spacing and clear elements.',
        image: '/assets/project-mds-multi-themed.gif',
        imageLayout: 'left',
        imageWidth: 644,
        imageHeight: 402,
      },
      {
        heading: 'Semantics',
        body: 'At some point it was clear that the semantic tokenisation was required. The tokenisation was then created workshopping with designers and developers from the whole company.\n\nThe semantic tokenisation was kept light weight, but followed a robust and scalable naming logic.\n\nThe end result was three level tokenization:\n\nCore tokens — The primitive values (primary.500, alert.200...)\nSemantic tokens — Tokens that tell the purpose of the token (color-text-action-hover, color-icon-brand...)\nComponent tokens — every component is fully tokenised, to help distribute the components to different environments (tech stacks or devices)',
        image: '/assets/project-mds-semantics.png',
        imageLayout: 'right',
        imageWidth: 487,
        imageHeight: 402,
      },
      {
        heading: 'Community driven',
        body: 'From the beginning it was important that every team was involved in the development of the design system. Transparency was provided by keeping weekly status reports in the Slack community.\n\nWhen developing new key features, important factors were always involved in the workshops and architecture plannings. The project had always two separate development roadmaps, MDS team roadmap for core feature development and contribution roadmap for creating new components and features. Contribution follows strict review process that involves design reviews, development reviews and accessibility reviews.',
      },
    ],
  },
  {
    slug: 'appointment-booking-system-update',
    title: 'Mehiläinen appointment booking system update',
    role: 'My role in the project was designer. I worked in service design process as well as UX and UI design for both admin and customer UI.',
    year: '2021–2023',
    link: 'https://ajanvaraus.mehilainen.fi',
    linkLabel: 'ajanvaraus.mehilainen.fi',
    heroImage: '/assets/project-booking-hero.png',
    cardImage: '/assets/project-mehi-booking.png',
    sections: [
      {
        heading: 'Background',
        body: 'Old Mehiläinen booking system was outdated and needed to be updated. In the process the technology stack was updated, backend restructured and the frontend was completely redesigned.',
      },
      {
        heading: 'Service backend update',
        body: 'In the project the whole service backend structure was rebuilt and an optimal structure to help customers find the correct health services was created.\n\nThe services were restructured to follow node-structure, meaning that services could have child services. This structure was designed to help users when searching correct service and appointment type.',
      },
      {
        heading: 'Search engine redesign',
        body: 'Service node structure was then implemented in the search engine. We implemented different search paths for users. Using aliases for services we tried to provide better way to find help for customer needs. Patients should not be required to know the correct name for health services.\n\nWe also implemented most used services to be shown to the user, and also "all services" list view to search for correct service.',
        image: '/assets/project-booking-search.png',
        imageLayout: 'left',
        imageWidth: 487,
        imageHeight: 402,
      },
      {
        heading: 'Frontend update',
        body: 'Frontend was updated to follow modern standards, follow company design principles and implement Mehiläinen design system.',
        image: '/assets/project-booking-frontend.png',
        imageLayout: 'right',
        imageWidth: 690,
        imageHeight: 538,
        imageUncontained: true,
      },
      {
        heading: 'User paths validated',
        body: 'Different user profiles and personas were created and validated. Analytics data was used to find different user behaviour. We also analysed different pain points in the old model to avoid repeating old mistakes.\n\nWhen new user paths and features were ready, we used user testing, feedback and A/B testing in to validate and iterate new models.',
        image: '/assets/project-booking-user-paths.png',
        imageLayout: 'left',
        imageWidth: 406,
        imageHeight: 411,
      },
    ],
  },
  {
    slug: 'opintokamu',
    title: 'Opintokamu mobile game',
    description:
      'This project was created to help students discuss difficult topics, such as time management, performance anxiety and bullying.',
    role: 'My role in this project was service designer and UI designer.',
    year: '2018',
    cardImage: '/assets/project-opintokamu.png',
    sections: [
      {
        heading: 'Background',
        body: "The University of Turku's Opintokamu® program offers web-based tools to promote student well-being for upper secondary institutions. An essential part of the service package includes, among other things, the Opintokamu course, which consists of learning materials related to studying, social relationships, and emotional life, as well as associated exercises.\n\nAs part of the Opintokamu program, there was a need to find an approachable, trust-inspiring, and safe way to get students to discuss challenges faced by young people in a way that feels meaningful to them. Originally, the program used a discussion game designed for a completely different purpose, but adapting it to the needs of the Opintokamu program was not successful.",
      },
      {
        heading: 'Approach',
        body: "The current state and user insights were gathered through interviews with teachers and students, along with observing gameplay in both upper secondary schools and vocational institutions.\n\nDuring the design phase, we organized two five-day Google Design Sprints, each involving experts, students, and teachers. The hypothesis was that teachers were hesitant to use the game because facilitating it was too difficult for them. It was also observed that students found the gameplay slow and monotonous.\n\nThanks to the Design Sprints, it was possible to quickly validate a game experience that would engage both teachers and students. Due to efficient definition work, the actual coding phase was approximately 30% faster. At the end of the sprints, the game's level of engagement and overall experience were tested using prototypes.",
        image: '/assets/project-opintokamu-approach.jpg',
        imageLayout: 'left',
        imageWidth: 394,
        imageHeight: 345,
      },
      {
        heading: 'Implementation',
        body: 'As a result an interactive mobile game was created. End product was multi-platform game to be played in the classroom. Teacher starts the game in the big screen in front of the classroom and students join the game using the room code.\n\nIn the mobile service, the teacher acts as both the facilitator of the group activity—guiding the app forward—and as a group leader who encourages students to participate in discussion. From a range of topics, the teacher can choose one that best suits their group.\n\nStudents take part using their own phones or school devices. Participants gathered in the same space can follow the session on a classroom screen or projector, while influencing their team\'s progress and results in real time through their mobile devices.',
        image: '/assets/project-opintokamu-implementation.png',
        imageLayout: 'right',
        imageWidth: 487,
        imageHeight: 402,
      },
      {
        heading: 'Challenges',
        body: 'As the game requires all students to use mobile devices in the classroom, how does it help them start discussions? Result was to add different topics and hints to each team member. In the end to get best points, students were required to discuss what was found in their device. This resulted to be good icebreaker for young students to start discussing difficult topics.',
        image: '/assets/project-opintokamu-challenges.jpg',
        imageLayout: 'left',
        imageWidth: 487,
        imageHeight: 402,
      },
    ],
  },
  {
    slug: 'jouluristeily',
    title: 'Luonnontieteilijöiden jouluristeily rebrand',
    description:
      'As an active member of different student organisations during my studies in university, I did graphic design for different events and groups. For Luonnontietelijöiden jouluristeily I did a complete rebranding in 2018.',
    year: '2018',
    heroImage: '/assets/project-jouluristeily-cover.png',
    cardImage: '/assets/project-jouluristeily.png',
    imageStyle: 'contain',
    imagePosition: 'center 30%',
    sections: [
      {
        heading: 'Brand',
        body: 'The brand had no strict guidelines beforehand and we wanted to not have too strict guidelines to start with. So the brandguide basically had the new color palette, logos and fonts to be used.\n\nBrand wanted to be "festive" and "whimsical" so that in mind its good to have freedom for designer to try something new each year.',
        image: '/assets/project-jouluristeily-brand.png',
        imageLayout: 'left',
        imageWidth: 400,
        imageHeight: 489,
      },
      {
        heading: 'Brand graphic',
        body: 'Different brand graphic includes social media images, posters, flyers, event program, overalls badges and crew clothing.',
        image: '/assets/project-jouluristeily-poster.png',
        imageLayout: 'right',
        imageWidth: 521,
        imageHeight: 736,
      },
    ],
  },
]
