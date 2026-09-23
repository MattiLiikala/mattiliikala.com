export interface ProjectSection {
  heading?: string
  body: string
  image?: string
  imageAlt?: string  // alt text for `image`; leave unset only when the image is purely decorative
  imageLayout?: 'right' | 'left'
  imageWidth?: number  // Figma px at 1280 content width
  imageHeight?: number
  imageUncontained?: boolean  // renders image without rounded container/shadow
  imagePadding?: boolean  // adds whitespace around the image inside its container
  imagePreserveAspect?: boolean  // on mobile, keep the image's true aspect ratio (height-capped, centered) instead of cropping it to the full content width — use for tall/portrait images like phone screenshots
  phoneImages?: string[]  // mobile screenshots, each rendered wrapped in an iPhone frame
  phoneImageAlts?: string[]  // alt text for `phoneImages`, matched by index
  diagram?: 'mds-library-map'  // renders an animated foundations/library-hub diagram below the body text
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
  heroImageAlt?: string  // alt text for `heroImage`; leave unset only when the image is purely decorative
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
        body: 'The design system project was born from the needs of designers and developers. Mehiläinen had allready lot of different applications, each having the same brand to follow, but were separated, as every component was hand made for the project. First it was created as a side project by me and my developer colleague. When the project was proven to be worth investing more resources, first I started as a full time Design system lead and later on we got one full time developer to the team.',
      },
      {
        heading: 'Strong foundations',
        body: "Everything starts from strong foundations. MDS started with creating primitive tokens (Typography, colors, radius, space etc.). In the beginning, Mehiläinen didn't have a strict semantic tokenisation to follow and all the different applications were designed as a single product. For that reason, the first iteration of design system only relied on the primitive tokens.",
        image: '/assets/project-mds-strong-foundations.png',
        imageAlt: 'Figma variables panel showing the primitive design tokens: a green Mehiläinen Primary ramp, a Gray scale, and three Accent color ramps, each listed with hex and RGB values.',
        imageLayout: 'right',
        imageWidth: 487,
        imageHeight: 402,
      },
      {
        heading: 'Community driven',
        body: 'From the beginning it was important that every team was involved in the development of the design system. Transparency was provided by keeping weekly status reports in the Slack community, and every question and new feature were discussed in the same channel so all the decission making was always visible.\n\nWhen developing new key features, important factors were always involved in the workshops and architecture plannings. The project had always two separate development roadmaps, MDS team roadmap for core feature development and contribution roadmap for creating new components and features. Contribution follows strict review process that involves design reviews, development reviews and accessibility reviews.',
      },
      {
        heading: 'Multi themed',
        body: 'Mehiläinen provides both professional tools and customer applications. As both usages differ so much, two main themes were needed for Mehiläinen design system. Where patient information system needs to be compact and fit a lot in a single view, customer design requires more spacing and clear elements.',
        image: '/assets/project-mds-multi-themed.gif',
        imageAlt: "Component-library demo switching a Button component between Mehiläinen's compact professional theme and its more spacious customer theme, shown in a Storybook-style properties panel.",
        imageLayout: 'left',
        imageWidth: 644,
        imageHeight: 402,
      },
      {
        heading: 'Semantics',
        body: 'At some point it was clear that the semantic tokenisation was required. The tokenisation was then created workshopping with designers and developers from the whole company.\n\nThe semantic tokenisation was kept light weight, but followed a robust and scalable naming logic.\n\nThe end result was three level tokenization:\n\nCore tokens — The primitive values (primary.500, alert.200...)\nSemantic tokens — Tokens that tell the purpose of the token (color-text-action-hover, color-icon-brand...)\nComponent tokens — every component is fully tokenised, to help distribute the components to different environments (tech stacks or devices)',
        image: '/assets/project-mds-semantics.png',
        imageAlt: 'Figma variables collection listing semantic tokens grouped by purpose — for example color/text/action and color/text/warning — each with separate light and dark theme values.',
        imageLayout: 'right',
        imageWidth: 487,
        imageHeight: 402,
      },
      {
        heading: 'Scalable future',
        body: 'As the component tokens were established, it now allowed to create multiple component libraries. Most of the Mehiläinen products were built using react, so the first version was purely react components and other environments got only the tokens. Now with the component tokens, in the future, most of the component changes are made on the token level, so when the tokens are changed, multiple component libraries could get the changes without updates.',
        diagram: 'mds-library-map',
        imageLayout: 'left',
      },
      {
        heading: 'Learnings',
        body: "As a whole, design system building is a great way to connect people, and make the all around user experience consistent, not only because the resources are the same, but it makes it easier for developers to communicate between teams, as the connections are already made when building the creator community. For the community part, I'm truly happy how it worked. I learned a lot how much pushing these kind of changes need, constant mentioning and teaching is required for not only the creators, but product owners, managers, business and so on. \n\n I also would change the tokens usage, starting with only the core tokens created a lot of painpoints and refactoring. Building a great foundation structure from the start really is essential.",
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
    heroImageAlt: "Mehiläinen's appointment booking homepage, showing search fields for service and location, a date picker, and a list of bookable appointment slots with clinician photos and times.",
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
        imageAlt: 'The redesigned service search screen, listing the most-used specialties and services — general practitioner, dental care, orthopedics and more — so patients can find a service without knowing its exact name.',
        imageLayout: 'left',
        imageWidth: 487,
        imageHeight: 402,
      },
      {
        heading: 'Frontend update',
        body: 'Frontend was updated to follow modern standards, follow company design principles and implement Mehiläinen design system.',
        image: '/assets/project-booking-frontend.png',
        imageAlt: 'The redesigned booking calendar and appointment list shown side by side on a laptop and a phone, following the updated visual design.',
        imageLayout: 'right',
        imageWidth: 690,
        imageHeight: 538,
        imageUncontained: true,
      },
      {
        heading: 'User paths validated',
        body: 'Different user profiles and personas were created and validated. Analytics data was used to find different user behaviour. We also analysed different pain points in the old model to avoid repeating old mistakes.\n\nWhen new user paths and features were ready, we used user testing, feedback and A/B testing in to validate and iterate new models.',
        image: '/assets/project-booking-user-paths.png',
        imageAlt: 'A booking confirmation screen showing the chosen clinician, appointment time, estimated price, and a button to sign in and continue.',
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
        imageAlt: 'Sticky notes arranged on a wall from a design sprint ideation session.',
        imageLayout: 'left',
        imageWidth: 394,
        imageHeight: 345,
      },
      {
        heading: 'Implementation',
        body: 'As a result an interactive mobile game was created. End product was multi-platform game to be played in the classroom. Teacher starts the game in the big screen in front of the classroom and students join the game using the room code.\n\nIn the mobile service, the teacher acts as both the facilitator of the group activity—guiding the app forward—and as a group leader who encourages students to participate in discussion. From a range of topics, the teacher can choose one that best suits their group.\n\nStudents take part using their own phones or school devices. Participants gathered in the same space can follow the session on a classroom screen or projector, while influencing their team\'s progress and results in real time through their mobile devices.',
        image: '/assets/project-opintokamu-implementation.png',
        imageAlt: "The mobile game's join screen, where students enter the room code shown on the classroom's shared screen to join the session.",
        imageLayout: 'right',
        imageWidth: 487,
        imageHeight: 402,
      },
      {
        heading: 'Challenges',
        body: 'As the game requires all students to use mobile devices in the classroom, how does it help them start discussions? Result was to add different topics and hints to each team member. In the end to get best points, students were required to discuss what was found in their device. This resulted to be good icebreaker for young students to start discussing difficult topics.',
        image: '/assets/project-opintokamu-challenges.jpg',
        imageAlt: 'A screen from the mobile game showing a discussion topic or hint given to a student during gameplay.',
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
    role: ['Designer'],
      usage: [
      { value: '2180', label: 'student cruisers yearly' },
    ],
    year: '2018',
    heroImage: '/assets/project-jouluristeily-cover.png',
    heroImageAlt: 'A banner featuring the Luonnontieteilijöiden Jouluristeily logo — a red, black and yellow angled ribbon mark — with confetti graphics and the event\'s sponsor logos.',
    cardImage: '/assets/project-jouluristeily.png',
    imageStyle: 'contain',
    imagePosition: 'center 30%',
    sections: [
      {
        heading: 'Brand',
        body: 'The brand had no strict guidelines beforehand and we wanted to not have too strict guidelines to start with. So the brandguide basically had the new color palette, logos and fonts to be used.\n\nBrand wanted to be "festive" and "whimsical" so that in mind its good to have freedom for designer to try something new each year.',
        image: '/assets/project-jouluristeily-brand.png',
        imageAlt: 'The brand guide sheet: the logo in its light and dark color variants, the red/black/yellow/cream color palette with hex codes, and the three typefaces used.',
        imageLayout: 'left',
        imageWidth: 400,
        imageHeight: 489,
        imagePadding: true,
      },
      {
        heading: 'Brand graphic',
        body: 'Different brand graphic includes social media images, posters, flyers, event program, overalls badges and crew clothing.',
        image: '/assets/project-jouluristeily-poster.png',
        imageAlt: "An event poster featuring the cruise dates, ticket price, sign-up website, the logo, and sponsor logos.",
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
        imageAlt: 'An animated demo of the shopping list screen — adding items, organizing them into sections, and reordering them by drag and drop.',
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
        phoneImageAlts: [
          'The household sign-in screen, with fields to join an existing household or create a new one.',
          "A shared grocery list grouped into sections like \"From the bakery\" and \"From the dairy\", with a saved-items sheet open showing a reusable \"Weekly\" item set.",
          'A cheesecake recipe screen showing numbered preparation steps, prep time and serving size.',
          "The same recipe's ingredients tab, with a checklist of ingredients and a button to add the unchecked ones to a shopping list.",
          'A screen for adding the selected ingredients to a chosen list, with "Grocery list" and "Todo" as the destination options.',
        ],
      },
      {
        heading: 'Learnings',
        body: 'AI: \n\nDuring this project I learned alot about good prompting, how to set restrictions and rules for agents. I also learned that the code review can be overwhelming and it is important to split tasks to small chuncks, It is too easy to end up creating massive commits.\n\nAI design tools: \n\n I tested the Claude design for the first time. I believe it will mature to be a good tool for prototyping. It is also important to start with a good plan and research. What I also learned is to leave time for the "slow work" cause sometimes human brain needs a pause and pen & paper will remain my best friends for those tasks. I will continue researching these tools and find the balance between the two.',
      },
    ],
  },
  {
    slug: 'this-portfolio',
    title: 'This portfolio',
    description:
      "As I needed a new portfolio, I also wanted to learn something on the road. I created and published first iteration with Figma Sites, then moved to creating React Vite app using different AI tools to my aid, mostly Claude code and Figma agents.",
    role: ['Designer', 'Developer'],
    year: '2026',
    githubLink: 'https://github.com/MattiLiikala/mattiliikala.com',
    cardImage: '/assets/project-portfolio-card.png',
    imageStyle: 'cover',
    sections: [
      {
        heading: 'Background',
        body: "I needed a new portfolio page and instead of just building this site, I treated it as its own small case study — a place to learn how to utilize different AI tools, how to build guidelines and restrictions, when and where to work with AI and when to make your own adjustments.",
      },
      {
        heading: 'Figma first',
        body: "The first version was built entirely inside Figma, published as a Figma Site — no code yet, just Figma's own publishing. It was a fast way to create something that works pretty well, and it actually handles responsive design good enough.\n\nMy plan was to always create an actual site, but for the MVP it was a great tool. Figma Sites is solid for structure and layout, but animation and interaction are still limited — fine for hover states and simple transitions, but nothing else at the moment. That's when I transitioned the project into code.",
        image: "/assets/project-portfolio-figma-sites.png",
        imageAlt: "The Figma Sites file for the portfolio's first iteration, showing the desktop, tablet and mobile frames for the home page side by side, plus the site's page list in the left sidebar.",
        imageLayout: 'left',
        imageWidth: 500,
        imageHeight: 350,
        imagePreserveAspect: true,
      },
      {
        heading: 'From Figma to code',
        body: "Once the structure and content held up, I rebuilt the site as a React app with Vite, working with Claude Code for the implementation. It was pretty fast to build with a reference site up and running. Fast I learned what kind of prompting is good, so there is no unnecessary rewriting. I also started to create styling and code guidelines into .md files and as skills. First the code review was a load of work, but when dividing work to smaller tasks and having strict guidelines, it became faster.\n\nWhen starting to create separate smaller tasks, I started to optimize the workflow. Figma's MCP for Claude is a great tool to move the developed project to Figma to work on. When working on a new feature, I'd draft a new section or component using Figma Agent to generate some versions, then I might add some iterations or own designs (no need to prompt everything when it's faster). When the feature is good enough, I'd move it to code. If something changes on the development process, it's easy to use MCP server to sync up the designs and move forward.\n\nI switched between working with Claude on MCP and testing Figma's own AI agent, there are some differences, and depending on the task, there might be reasons to switch between models. Figma's AI agent uses foundational models from major providers including Anthropic (Claude), OpenAI (GPT), and Google (Gemini) via the Figma Sub-processors list, and as it's still free to use in beta, it's worth using.",
      },
      {
        heading: 'Motion with a light touch',
        body: "I wanted the site to use motion to make it little more personal. I wanted the design to represent me as a person but also as a designer, playful design but never at a cost of readability. The hero especially plays with scroll to feel more alive than a static page — but the motion stops when stopping to read something. Motion has to support the content, not fight it: nothing should make text harder to read, and nothing should just keep animating forever with no way to look away from it.\n\nAI tools ended up saving the most time here. Describing a scroll effect in words and iterating on its easing and timing with Claude Code was a lot faster than hand-tuning every keyframe myself.",
      },
      {
        heading: 'Learnings',
        body: "When to draft something myself first versus prompting an agent straight away — for anything about tone or visual character, giving an agent my own rough draft gets a much better result than describing it from scratch.\n\nHow fast motion design gets once you can describe a feeling in words and iterate live, instead of hand-tuning every keyframe.\n\nWriting restrictions, guidelines and small skills for the agents I use, so results stay consistent instead of reinventing the same pattern every time — a habit I now reach for on other projects too.\n\nLeaning on plugins to catch what I'd otherwise miss, like running an accessibility audit against the finished site instead of relying only on my own eye.",
      },
    ],
  },
]

// Combined list, used for slug lookups on the project detail page.
export const allProjects: ProjectData[] = [...projects, ...ownProjects]
