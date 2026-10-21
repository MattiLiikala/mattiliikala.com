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
  // On mobile, keep the image's true aspect ratio (height-capped, centered) instead of cropping it
  // to the full content width — use for tall/portrait images like phone screenshots
  imagePreserveAspect?: boolean
  phoneImages?: string[]  // mobile screenshots, each rendered wrapped in an iPhone frame
  phoneImageAlts?: string[]  // alt text for `phoneImages`, matched by index
  diagram?: 'mds-library-map' | 'booking-steps' | 'kala-token-flow'  // renders an animated diagram beside the body text, in place of an image
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

// Tag for long text written as a template literal: line breaks and indentation collapse into single spaces,
// a blank line is a paragraph break, and an explicit \n at the end of a line keeps a single line break.
function prose(strings: TemplateStringsArray): string {
  return strings.raw[0]
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim().replace(/\s*\n\s*/g, ' ').replace(/\\n ?/g, '\n'))
    .join('\n\n')
}

export const projects: ProjectData[] = [
  {
    slug: 'mehilainen-design-system',
    title: 'Mehiläinen Design System',
    description: prose`
      This multi themed design system is used by both professional users and customers of Mehiläinen. It provides both Design & Developer
      utilities and complete styleguide to be used.
    `,
    role: ['Design System Lead', 'Designer', 'Developer'],
    roleDescription: prose`
      My role in this project was Design System Lead. Since the team was small I was also the designer and contributed in development
      tasks.
    `,
    usage: [
      { value: '10+', label: 'applications' },
      { value: '7', label: 'designers' },
      { value: '15+', label: 'contributors' },
      { value: '30+', label: 'active users' },
    ],
    year: '2023–2026',
    cardImage: '/assets/project-mehi-ds.png',
    imageStyle: 'contain',
    imagePosition: 'center 10%',
    sections: [
      {
        heading: 'Beginning',
        body: prose`
          The design system project was born from the needs of designers and developers. Mehiläinen had allready lot of different
          applications, each having the same brand to follow, but were separated, as every component was hand made for the project. First
          it was created as a side project by me and my developer colleague. When the project was proven to be worth investing more
          resources, first I started as a full time Design system lead and later on we got one full time developer to the team.
        `,
      },
      {
        heading: 'Strong foundations',
        body: prose`
          Everything starts from strong foundations. MDS started with creating primitive tokens (Typography, colors, radius, space etc.).
          In the beginning, Mehiläinen didn't have a strict semantic tokenisation to follow and all the different applications were
          designed as a single product. For that reason, the first iteration of design system only relied on the primitive tokens.
        `,
        image: '/assets/project-mds-strong-foundations.png',
        imageAlt: prose`
          Figma variables panel showing the primitive design tokens: a green Mehiläinen Primary ramp, a Gray scale, and three Accent color
          ramps, each listed with hex and RGB values.
        `,
        imageLayout: 'right',
        imageWidth: 487,
        imageHeight: 402,
      },
      {
        heading: 'Community driven',
        body: prose`
          From the beginning it was important that every team was involved in the development of the design system. Transparency was
          provided by keeping weekly status reports in the Slack community, and every question and new feature were discussed in the same
          channel so all the decission making was always visible.

          When developing new key features, important factors were always involved in the workshops and architecture plannings. The
          project had always two separate development roadmaps, MDS team roadmap for core feature development and contribution roadmap for
          creating new components and features. Contribution follows strict review process that involves design reviews, development
          reviews and accessibility reviews.
        `,
      },
      {
        heading: 'Multi themed',
        body: prose`
          Mehiläinen provides both professional tools and customer applications. As both usages differ so much, two main themes were
          needed for Mehiläinen design system. Where patient information system needs to be compact and fit a lot in a single view,
          customer design requires more spacing and clear elements.
        `,
        image: '/assets/project-mds-multi-themed.gif',
        imageAlt: prose`
          Component-library demo switching a Button component between Mehiläinen's compact professional theme and its more spacious
          customer theme, shown in a Storybook-style properties panel.
        `,
        imageLayout: 'left',
        imageWidth: 644,
        imageHeight: 402,
      },
      {
        heading: 'Semantics',
        body: prose`
          At some point it was clear that the semantic tokenisation was required. The tokenisation was then created workshopping with
          designers and developers from the whole company.

          The semantic tokenisation was kept light weight, but followed a robust and scalable naming logic.

          The end result was three level tokenization:

          Core tokens — The primitive values (primary.500, alert.200...)\n
          Semantic tokens — Tokens that tell the purpose of the token (color-text-action-hover, color-icon-brand...)\n
          Component tokens — every component is fully tokenised, to help distribute the components to different environments (tech stacks
          or devices)
        `,
        image: '/assets/project-mds-semantics.png',
        imageAlt: prose`
          Figma variables collection listing semantic tokens grouped by purpose — for example color/text/action and color/text/warning —
          each with separate light and dark theme values.
        `,
        imageLayout: 'right',
        imageWidth: 487,
        imageHeight: 402,
      },
      {
        heading: 'Scalable future',
        body: prose`
          As the component tokens were established, it now allowed to create multiple component libraries. Most of the Mehiläinen products
          were built using react, so the first version was purely react components and other environments got only the tokens. Now with
          the component tokens, in the future, most of the component changes are made on the token level, so when the tokens are changed,
          multiple component libraries could get the changes without updates.
        `,
        diagram: 'mds-library-map',
        imageLayout: 'left',
      },
      {
        heading: 'AI in the workflow',
        body: prose`
          During the last year of development, I added more and more AI usage to project workflow. The benefits have been evident,
          particularly in maintaining design system; AI tools played a significant role in tasks such as creating and maintaining
          documentation, managing tokens, handling component variants, and synchronizing development between Figma and the coded product.
        `
      },
      {
        heading: 'Learnings',
        body: prose`
          As a whole, design system building is a great way to connect people, and make the all around user experience consistent, not
          only because the resources are the same, but it makes it easier for developers to communicate between teams, as the connections
          are already made when building the creator community. For the community part, I'm truly happy how it worked. I learned a lot how
          much pushing these kind of changes need, constant mentioning and teaching is required for not only the creators, but product
          owners, managers, business and so on.

          I also would change the tokens usage, starting with only the core tokens created a lot of painpoints and refactoring. Building a
          great foundation structure from the start really is essential.
        `,
      },
    ],
  },
  {
    slug: 'appointment-booking-system-update',
    title: 'Mehiläinen appointment booking system update',
    role: ['Designer'],
    roleDescription: prose`
      My role in the project was designer. I worked in service design process as well as UX and UI design for both admin and customer UI.
    `,
    year: '2021–2023',
    link: 'https://ajanvaraus.mehilainen.fi',
    linkLabel: 'ajanvaraus.mehilainen.fi',
    heroImage: '/assets/project-booking-hero.png',
    heroImageAlt: prose`
      Mehiläinen's appointment booking homepage, showing search fields for service and location, a date picker, and a list of bookable
      appointment slots with clinician photos and times.
    `,
    cardImage: '/assets/project-mehi-booking.png',
    sections: [
      {
        heading: 'Background',
        body: prose`
          Old Mehiläinen booking system was outdated and needed to be updated. In the process the technology stack was updated, backend
          restructured and the frontend was completely redesigned.
        `,
      },
      {
        heading: 'Goal',
        body: prose`
          In the new system, goal was to create a search engine for appointment booking system where every service could be found easily,
          using different paths. We also wanted to treat the user paths company wide, so no matter if the user arrived from website,
          search engine or mobile app, user experience should feel uniform.

          Logged in user experience was also redesigned, providing more customized view, have access to old visits and book appointments
          based on past visits and have access to occupational health information.

          Accessability was also taken to consideration from the beginning and it needed to reach the AA requirements.

          Different metrix were set to ensure the goals were met.
        `,
        diagram: 'booking-steps',
        imageLayout: 'left',
      },
      {
        heading: 'Service backend update',
        body: prose`
          In the project the whole service backend structure was rebuilt and an optimal structure to help customers find the correct
          health services was created.

          The services were restructured to follow node-structure, meaning that services could have child services. This structure was
          designed to help users when searching correct service and appointment type.
        `,
      },
      {
        heading: 'Search engine redesign',
        body: prose`
          Service node structure was then implemented in the search engine. We implemented different search paths for users. Using aliases
          for services we tried to provide better way to find help for customer needs. Patients should not be required to know the correct
          name for health services.

          We also implemented most used services to be shown to the user, and also "all services" list view to search for correct service.
        `,
        image: '/assets/project-booking-search.png',
        imageAlt: prose`
          The redesigned service search screen, listing the most-used specialties and services — general practitioner, dental care,
          orthopedics and more — so patients can find a service without knowing its exact name.
        `,
        imageLayout: 'left',
        imageWidth: 487,
        imageHeight: 402,
      },
      {
        heading: 'Frontend update',
        body: 'Frontend was updated to follow modern standards, follow company design principles and implement Mehiläinen design system.',
        image: '/assets/project-booking-frontend.png',
        imageAlt: prose`
          The redesigned booking calendar and appointment list shown side by side on a laptop and a phone, following the updated visual
          design.
        `,
        imageLayout: 'right',
        imageWidth: 690,
        imageHeight: 538,
        imageUncontained: true,
      },
      {
        heading: 'User paths validated',
        body: prose`
          Different user profiles and personas were created and validated. Analytics data was used to find different user behaviour. We
          also analysed different pain points in the old model to avoid repeating old mistakes.

          When new user paths and features were ready, we used user testing, feedback and A/B testing in to validate and iterate new
          models.
        `,
        image: '/assets/project-booking-user-paths.png',
        imageAlt: prose`
          A booking confirmation screen showing the chosen clinician, appointment time, estimated price, and a button to sign in and
          continue.
        `,
        imageLayout: 'left',
        imageWidth: 406,
        imageHeight: 411,
      },
      {
        heading: 'Challenges',
        body: prose`
          Making it natural for the user to select the "lane" to follow was something that I took a lot of time to finessing. Lot of
          consideration and testing was done to determine the words being used. Basically biggest selection was changing between asking
          "what kind of customer are you?" or "who is paying?". After the testing and research it was clear that the latter was more
          important for the user. Sometimes the smallest changes can be very important.

          One other big challenge was with the multi-level search engine and its accessibility. We wanted to make it intuitive for all the
          users, but because of the complexity of the component, we spent a lot of design hours to create the path intuitive for all the
          different users. In the end, some compromises were needed for the first release, but the component was evolved during years, and
          still keeps getting changes.
        `
      },
      {
        heading: 'Results',
        body: prose`
          In the end, all the goal metrix mentioned in the beginning were met. The number of online booking kept rising and different user
          groups started to use online booking instead of calling.
        `
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
        body: prose`
          The University of Turku's Opintokamu® program offers web-based tools to promote student well-being for upper secondary
          institutions. An essential part of the service package includes, among other things, the Opintokamu course, which consists of
          learning materials related to studying, social relationships, and emotional life, as well as associated exercises.

          As part of the Opintokamu program, there was a need to find an approachable, trust-inspiring, and safe way to get students to
          discuss challenges faced by young people in a way that feels meaningful to them. Originally, the program used a discussion game
          designed for a completely different purpose, but adapting it to the needs of the Opintokamu program was not successful.
        `,
      },
      {
        heading: 'Approach',
        body: prose`
          The current state and user insights were gathered through interviews with teachers and students, along with observing gameplay
          in both upper secondary schools and vocational institutions.

          During the design phase, we organized two five-day Google Design Sprints, each involving experts, students, and teachers. The
          hypothesis was that teachers were hesitant to use the game because facilitating it was too difficult for them. It was also
          observed that students found the gameplay slow and monotonous.

          Thanks to the Design Sprints, it was possible to quickly validate a game experience that would engage both teachers and
          students. Due to efficient definition work, the actual coding phase was approximately 30% faster. At the end of the sprints, the
          game's level of engagement and overall experience were tested using prototypes.
        `,
        image: '/assets/project-opintokamu-approach.jpg',
        imageAlt: 'Sticky notes arranged on a wall from a design sprint ideation session.',
        imageLayout: 'left',
        imageWidth: 394,
        imageHeight: 345,
      },
      {
        heading: 'Implementation',
        body: prose`
          As a result an interactive mobile game was created. End product was multi-platform game to be played in the classroom. Teacher
          starts the game in the big screen in front of the classroom and students join the game using the room code.

          In the mobile service, the teacher acts as both the facilitator of the group activity—guiding the app forward—and as a group
          leader who encourages students to participate in discussion. From a range of topics, the teacher can choose one that best suits
          their group.

          Students take part using their own phones or school devices. Participants gathered in the same space can follow the session on a
          classroom screen or projector, while influencing their team's progress and results in real time through their mobile devices.
        `,
        image: '/assets/project-opintokamu-implementation.png',
        imageAlt:
          "The mobile game's join screen, where students enter the room code shown on the classroom's shared screen to join the session.",
        imageLayout: 'right',
        imageWidth: 487,
        imageHeight: 402,
      },
      {
        heading: 'Challenges',
        body: prose`
          As the game requires all students to use mobile devices in the classroom, how does it help them start discussions? Result was to
          add different topics and hints to each team member. In the end to get best points, students were required to discuss what was
          found in their device. This resulted to be good icebreaker for young students to start discussing difficult topics.
        `,
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
    description: prose`
      As an active member of different student organisations during my studies in university, I did graphic design for different events
      and groups. For Luonnontietelijöiden jouluristeily I did a complete rebranding in 2018.
    `,
    role: ['Designer'],
      usage: [
      { value: '2180', label: 'student cruisers yearly' },
    ],
    year: '2018',
    heroImage: '/assets/project-jouluristeily-cover.png',
    heroImageAlt: prose`
      A banner featuring the Luonnontieteilijöiden Jouluristeily logo — a red, black and yellow angled ribbon mark — with confetti
      graphics and the event's sponsor logos.
    `,
    cardImage: '/assets/project-jouluristeily.png',
    imageStyle: 'contain',
    imagePosition: 'center 30%',
    sections: [
      {
        heading: 'Brand',
        body: prose`
          The brand had no strict guidelines beforehand and we wanted to not have too strict guidelines to start with. So the brandguide
          basically had the new color palette, logos and fonts to be used.

          Brand wanted to be "festive" and "whimsical" so that in mind its good to have freedom for designer to try something new each
          year.
        `,
        image: '/assets/project-jouluristeily-brand.png',
        imageAlt: prose`
          The brand guide sheet: the logo in its light and dark color variants, the red/black/yellow/cream color palette with hex codes,
          and the three typefaces used.
        `,
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
    slug: 'kalads',
    title: 'Kala - Design System',
    description:
      'Kala Design System is a multiplatform design system, built with a strong three level tokenization and documented to be used by agents.',
    role: ['Designer', 'Developer', 'Architect'],
    roleDescription: 'I designed Kala Design System to learn good practices for multiplatform design system and how to document in agentic development era.',
    year: '2026',
    link: 'https://kalads.netlify.app',
    linkLabel: 'kalads.netlify.app',
    githubLink: 'https://github.com/MattiLiikala/KalaDS',
    cardImage: '/assets/project-kalads-card.png',
    imageStyle: 'cover',
    sections: [
      {
        heading: 'Background',
        body: prose`
          In many cases, design systems are required for multiple platforms, and in many cases this is handled with multiple component 
          libraries. I wanted to create a system that leans on a strong foundation, so managing multiple libraries would be little easier.
          From building Mehiläinen Design System I also learned how much a weak token foundation costs later, when the tokens have to be 
          refactored.

          At the same time, more and more of the code is written with coding agents. An agent only follows a design system if it can find
          and read the rules, so I wanted to make sure that everyone using the system would get the same set of rules easily.
        `,
      },
      {
        heading: 'Tokens first',
        body: prose`
          The tokens come in three layers. Core tokens (primitives) hold the raw values like palettes and sizes. Semantic tokens tell what a value is for
          (bg.subtle, bg.interactive). Component tokens (button.primary.bg-hover) point only at semantic tokens. The dark theme only
          swaps the semantic colours, and the build checks that every component token points at a semantic token with the matching meaning.

          Because the component level of the tokenization is strong, the component libraries are thin layers on top of the same tokens.
          Currently KalaDS implements web components, React and React Native. The web components are the reference: their attributes
          generate the shared component API, and tests check that all three libraries have the same props, variants and defaults.
        `,
        diagram: 'kala-token-flow',
        imageLayout: 'left',
      },
      {
        heading: 'Written for agents',
        body: prose`
          The documentation is written to be easily read by agents as well as people. Every component page in Storybook has the code for
          all three libraries, and the guidelines include their own page for AI agents.

          Every component package also distributes its own agent skill with the components, tokens and usage rules. In an app, one command
          links the skill for the platform in use, so the agent follows the strict guidelines of the design system instead of guessing.
        `,
      },
      {
        heading: 'In action',
        body: prose`
          I wanted the library to be easy to use, so for testing purposes, I made very simple prompt that only points the agent to storybook 
          documentation page, and check if it actually installs the skills correctly and follows them.

          This simple test was succesful, and the agent noticed the skills to be installed and followed. The components and tokens were used 
          correctly in this particular situation.
        `,
        image: '/assets/project-kalads-agent-example.jpg',
        imageAlt: "Screenshot of commandline where agent is given a task to create a landing page using only kalads components.",
        imageLayout: 'left',
        imageWidth: 500,
        imageHeight: 320,
      },
      {
        heading: 'Learnings',
        body: prose`
          As this project is still in it's early stage, there are still things to be optimized. However, this simple POC already proved to me 
          that this kind of system works, and I'm happy with the results. I'm still working on how to make better "single source of truth" as 
          there are now multiple places where documentation is handled.

          The multiplatform design system part was something I already knew that would work, but this was a good study to test different token 
          structures.
        `,
      },
    ],
  },
  {
    slug: 'nippu',
    title: 'Nippu',
    description:
      'Nippu is a mobile-first PWA that lets households manage shared lists and recipes together in real time.',
    role: ['Designer', 'Developer'],
    roleDescription: 'I designed and built the whole app end to end, from concept to a deployed PWA.',
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
        body: prose`
          Yes, yet another list app. Nippu started from a very ordinary problem: shopping lists, todos, packing lists living in three
          different apps and recipes scattered across screenshots and bookmarks. There are lots of these shared list apps, but none did
          the excact things that we needed in our household. We also shop the same items weekly, and have a rotating weekly menu, so place
          for saving item sets was needed. I wanted one shared, real-time list that everyone in the household could use — installable like
          a native app, but with no app store friction.

          This was also my first whole development project learning AI assisted development.
        `,
      },
      {
        heading: 'What it does',
        body: prose`
          Households share a single account and password, and every member sees the same lists update live. Lists support drag-and-drop
          reordering and categorisation, and reusable "saved items" (like a standard weekly shop) can be added back in one tap.

          Recipes live in their own tab. Recipes use very basic template ingredients, instructions, time and serving sizes. The items in
          the ingredients can be dropped straight into a shopping list. The app works offline and installs to the home screen on both iOS
          and Android, with light and dark themes.
        `,
        image: '/assets/list-usage.gif',
        imageAlt: prose`
          An animated demo of the shopping list screen — adding items, organizing them into sections, and reordering them by drag and
          drop.
        `,
        imageLayout: 'left',
        imageWidth: 270,
        imageHeight: 600,
        imagePreserveAspect: true,
      },
      {
        heading: 'Tech stack',
        body: prose`
          Frontend is React 18 with Vite and Zustand for state, React Router for navigation and a drag-and-drop kit for list reordering.
          The backend is Express 5 with a PostgreSQL database and JWT-based auth.
        `,
      },
      {
        heading: 'Screens',
        body: 'A few screens from the mobile PWA.',
        phoneImages: [
          '/assets/project-nippu-login.png',
          '/assets/project-nippu-list.png',
          '/assets/project-nippu-cheesecake-recipe.png',
          '/assets/project-nippu-cheesecake-ingredients.png',
          '/assets/project-nippu-cheesecake-ingredients-add.png',
        ],
        phoneImageAlts: [
          'The household sign-in screen, with fields to join an existing household or create a new one.',
          prose`
            A shared grocery list grouped into sections like "From the bakery" and "From the dairy", with a saved-items sheet open showing
            a reusable "Weekly" item set.
          `,
          'A cheesecake recipe screen showing numbered preparation steps, prep time and serving size.',
          "The same recipe's ingredients tab, with a checklist of ingredients and a button to add the unchecked ones to a shopping list.",
          'A screen for adding the selected ingredients to a chosen list, with "Grocery list" and "Todo" as the destination options.',
        ],
      },
      {
        heading: 'Learnings',
        body: prose`
          AI:

          During this project I learned alot about good prompting, how to set restrictions and rules for agents. I also learned that the
          code review can be overwhelming and it is important to split tasks to small chuncks, It is too easy to end up creating massive
          commits.

          AI design tools:

          I tested the Claude design for the first time. I believe it will mature to be a good tool for prototyping. It is also important
          to start with a good plan and research. What I also learned is to leave time for the "slow work" cause sometimes human brain
          needs a pause and pen & paper will remain my best friends for those tasks. I will continue researching these tools and find the
          balance between the two.
        `,
      },
    ],
  },
  {
    slug: 'this-portfolio',
    title: 'This portfolio',
    description: prose`
      As I needed a new portfolio, I also wanted to learn something on the road. I created and published first iteration with Figma Sites,
      then moved to creating React Vite app using different AI tools to my aid, mostly Claude code and Figma agents.
    `,
    role: ['Designer', 'Developer'],
    year: '2026',
    githubLink: 'https://github.com/MattiLiikala/mattiliikala.com',
    cardImage: '/assets/project-portfolio-card.png',
    imageStyle: 'cover',
    sections: [
      {
        heading: 'Background',
        body: prose`
          I needed a new portfolio page and instead of just building this site, I treated it as its own small case study — a place to
          learn how to utilize different AI tools, how to build guidelines and restrictions, when and where to work with AI and when to
          make your own adjustments.
        `,
      },
      {
        heading: 'Figma first',
        body: prose`
          The first version was built entirely inside Figma, published as a Figma Site — no code yet, just Figma's own publishing. It was
          a fast way to create something that works pretty well, and it actually handles responsive design good enough.

          My plan was to always create an actual site, but for the MVP it was a great tool. Figma Sites is solid for structure and layout,
          but animation and interaction are still limited — fine for hover states and simple transitions, but nothing else at the moment.
          That's when I transitioned the project into code.
        `,
        image: "/assets/project-portfolio-figma-sites.png",
        imageAlt: prose`
          The Figma Sites file for the portfolio's first iteration, showing the desktop, tablet and mobile frames for the home page side
          by side, plus the site's page list in the left sidebar.
        `,
        imageLayout: 'left',
        imageWidth: 500,
        imageHeight: 350,
        imagePreserveAspect: true,
      },
      {
        heading: 'From Figma to code',
        body: prose`
          Once the structure and content held up, I rebuilt the site as a React app with Vite, working with Claude Code for the
          implementation. It was pretty fast to build with a reference site up and running. Fast I learned what kind of prompting is good,
          so there is no unnecessary rewriting. I also started to create styling and code guidelines into .md files and as skills. First
          the code review was a load of work, but when dividing work to smaller tasks and having strict guidelines, it became faster.

          When starting to create separate smaller tasks, I started to optimize the workflow. Figma's MCP for Claude is a great tool to
          move the developed project to Figma to work on. When working on a new feature, I'd draft a new section or component using Figma
          Agent to generate some versions, then I might add some iterations or own designs (no need to prompt everything when it's
          faster). When the feature is good enough, I'd move it to code. If something changes on the development process, it's easy to use
          MCP server to sync up the designs and move forward.

          I switched between working with Claude on MCP and testing Figma's own AI agent, there are some differences, and depending on the
          task, there might be reasons to switch between models. Figma's AI agent uses foundational models from major providers including
          Anthropic (Claude), OpenAI (GPT), and Google (Gemini) via the Figma Sub-processors list, and as it's still free to use in beta,
          it's worth using.
        `,
      },
      {
        heading: 'Motion with a light touch',
        body: prose`
          I wanted the site to use motion to make it little more personal. I wanted the design to represent me as a person but also as a
          designer, playful design but never at a cost of readability. The hero especially plays with scroll to feel more alive than a
          static page — but the motion stops when stopping to read something. Motion has to support the content, not fight it: nothing
          should make text harder to read, and nothing should just keep animating forever with no way to look away from it.

          AI tools ended up saving the most time here. Describing a scroll effect in words and iterating on its easing and timing with
          Claude Code was a lot faster than hand-tuning every keyframe myself.
        `,
      },
      {
        heading: 'Learnings',
        body: prose`
          When to draft something myself first versus prompting an agent straight away — for anything about tone or visual character,
          giving an agent my own rough draft gets a much better result than describing it from scratch.

          How fast motion design gets once you can describe a feeling in words and iterate live, instead of hand-tuning every keyframe.

          Writing restrictions, guidelines and small skills for the agents I use, so results stay consistent instead of reinventing the
          same pattern every time — a habit I now reach for on other projects too.

          Leaning on plugins to catch what I'd otherwise miss, like running an accessibility audit against the finished site instead of
          relying only on my own eye.
        `,
      },
    ],
  },
]

// Combined list, used for slug lookups on the project detail page.
export const allProjects: ProjectData[] = [...projects, ...ownProjects]
