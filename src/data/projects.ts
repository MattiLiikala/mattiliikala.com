export interface ProjectSection {
  heading?: string
  body: string
  image?: string
  imageLayout?: 'right' | 'left'
  imageWidth?: number  // Figma px at 1280 content width
  imageHeight?: number
  imageUncontained?: boolean  // renders image without rounded container/shadow
  imagePadding?: boolean  // adds whitespace around the image inside its container
  imagePreserveAspect?: boolean  // on mobile, keep the image's true aspect ratio (height-capped, centered) instead of cropping it to the full content width — use for tall/portrait images like phone screenshots
  phoneImages?: string[]  // mobile screenshots, each rendered wrapped in an iPhone frame
}

export interface ProjectUsageStat {
  value: string
  label: string
}

export interface ProjectData {
  slug: string
  title: string
  description?: string
  role?: string[]
  roleDescription?: string
  usage?: ProjectUsageStat[]
  year: string
  link?: string
  linkLabel?: string
  githubLink?: string
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
    role: ['Design System Lead', 'Designer', 'Developer'],
    roleDescription: 'My role in this project was Design System Lead. Since the team was small I was also the designer and contributed in development tasks.',
    usage: [
      { value: '10+', label: 'applications' },
      { value: '7', label: 'designers' },
      { value: '15+', label: 'contributors' },
      { value: '50+', label: 'active users' },
    ],
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
    role: ['Designer'],
    roleDescription: 'My role in the project was designer. I worked in service design process as well as UX and UI design for both admin and customer UI.',
    usage: [
      { value: '3000+', label: 'daily reservations' },
    ],
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
        heading: 'Goal',
        body: 'In the new system, goal was to create a search engine for appointment booking system where every service could be found easily, using different paths. We also wanted to treat the user paths company wide, so no matter if the user arrived from website, search engine or mobile app, user experience should feel uniform.\n\nLogged in user experience was also redesigned, providing more customized view, have access to old visits and book appointments based on past visits and have access to occupational health information.\n\n Accessability was also taken to consideration from the beginning and it needed to reach the AA requirements. \n\nDifferent metrix were set to ensure the goals were met.',
        image: '/assets/target.jpg',
        imageLayout: 'left',
        imageWidth: 300,
        imageHeight: 256,
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
      {
        heading: 'Challenges',
        body: 'Making it natural for the user to select the "lane" to follow was something that I took a lot of time to finessing. Lot of consideration and testing was done to determine the words being used. Basically biggest selection was changing between asking "what kind of customer are you?" or "who is paying?". After the testing and research it was clear that the latter was more important for the user. Sometimes the smallest changes can be very important. \n\nOne other big challenge was with the multi-level search engine and its accessibility. We wanted to make it intuitive for all the users, but because of the complexity of the component, we spent a lot of design hours to create the path intuitive for all the different users. In the end, some compromises were needed for the first release, but the component was evolved during years, and still keeps getting changes.'
      },
      {
        heading: 'Results',
        body: "In the end, all the goal metrix mentioned in the beginning were met. The number of online booking kept rising (sorry for not having actual numbers) and different user groups started to use online booking instead of calling. "
      },
    ],
  },
  {
    slug: 'opintokamu',
    title: 'Opintokamu mobile game',
    description:
      'This project was created to help students discuss difficult topics, such as time management, performance anxiety and bullying.',
    role: ['Designer'],
    roleDescription: 'My role in the project was designer. I worked in service design process as well as UX and UI design',
    usage: [
      { value: '30%', label: 'registered secondary education institutions in Finland' },
    ],
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
    usage: [
      { value: '2180', label: 'student cruisers yearly' },
    ],
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
        imagePadding: true,
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

// Personal side projects, built on my own time outside of client/employer work.
export const ownProjects: ProjectData[] = [
  {
    slug: 'nippu',
    title: 'Nippu',
    description:
      'Nippu is a mobile-first PWA that lets households manage shared lists and recipes together in real time.',
    role: ['Designer', 'Developer'],
    roleDescription: 'A solo side project — I designed and built the whole app end to end, from concept to a deployed PWA.',
    year: '2026',
    link: 'https://nippu.app',
    linkLabel: 'nippu.app',
    githubLink: 'https://github.com/MattiLiikala/Nippu',
    // TODO: replace with a real card screenshot/graphic once available
    cardImage: '/assets/project-nippu-card.png',
    imageStyle: 'cover',
    sections: [
      {
        heading: 'Background',
        body: "Yes, yet another list app. Nippu started from a very ordinary problem: shopping lists, todos, packing lists living in three different apps and recipes scattered across screenshots and bookmarks. There are lots of these shared list apps, but none did the excact things that we needed in our household. We also shop the same items weekly, and have a rotating weekly menu, so place for saving item sets was needed. I wanted one shared, real-time list that everyone in the household could use — installable like a native app, but with no app store friction.\n\nThis was also my first whole development project learning AI assisted development.",
      },
      {
        heading: 'What it does',
        body: 'Households share a single account and password, and every member sees the same lists update live. Lists support drag-and-drop reordering and categorisation, and reusable "saved items" (like a standard weekly shop) can be added back in one tap.\n\nRecipes live in their own tab. Recipes use very basic template ingredients, instructions, time and serving sizes. The items in the ingredients can be dropped straight into a shopping list. The app works offline and installs to the home screen on both iOS and Android, with light and dark themes.',
        image: '/assets/list-usage.gif',
        imageLayout: 'left',
        imageWidth: 270,
        imageHeight: 600,
        imagePreserveAspect: true,
      },
      {
        heading: 'Tech stack',
        body: 'Frontend is React 18 with Vite and Zustand for state, React Router for navigation and a drag-and-drop kit for list reordering. The backend is Express 5 with a PostgreSQL database and JWT-based auth.',
      },
      {
        heading: 'Screens',
        body: 'A few screens from the mobile PWA.',
        phoneImages: ['/assets/project-nippu-login.png', '/assets/project-nippu-list.png', '/assets/project-nippu-cheesecake-recipe.png', '/assets/project-nippu-cheesecake-ingredients.png', '/assets/project-nippu-cheesecake-ingredients-add.png'],
      },
      {
        heading: 'Learnings',
        body: 'AI: \n\nDuring this project I learned alot about good prompting, how to set restrictions and rules for agents. I also learned that the code review can be overwhelming and it is important to split tasks to small chuncks, It is too easy to end up creating massive commits.\n\nAI design tools: \n\n I tested the Claude design for the first time. I believe it will mature to be a good tool for prototyping. It is also important to start with a good plan and research. What I also learned is to leave time for the "slow work" cause sometimes human brain needs a pause and pen & paper will remain my best friends for those tasks. I will continue researching these tools and find the balance between the two.',
      },
    ],
  },
]

// Combined list, used for slug lookups on the project detail page.
export const allProjects: ProjectData[] = [...projects, ...ownProjects]
