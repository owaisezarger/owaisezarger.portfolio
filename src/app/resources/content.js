import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Owaise",
  lastName: "Zarger",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Web Developer",
  avatar: "/images/avatar.jpeg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Marathi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/owaisezarger",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/owaisezarger",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/OwaiseZarger",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:owaisezarger@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Web Developer</>,
  subline: (
    <>
      I'm Owaise, a Full Stack Developer at{" "}
      <InlineCode>Oxcytech Technologies</InlineCode>, where I craft efficient
      and secure APIs using Express and Design interactive and user friendly UI
      using React and Nextjs.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Owaise is a skilled Full Stack Developer specializing in the MERN stack,
        Next.js, and PostgreSQL. With over a year of experience, he’s passionate
        about building high-quality, scalable applications and continuously
        expanding his expertise. Owaise is driven to deliver solutions that
        blend functionality with exceptional user experiences, making him a
        valuable asset for any development team.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Oxcytech Technologies",
        timeframe: "2023 - Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            Lead development of full-stack web applications using MERN stack.
          </>,
          <>
            Collaborated with teams to gather requirements and design effective
            technical solutions.
          </>,
          <>
            Provided mentorship to interns, ensuring their growth by assigning
            tasks and evaluating performance.
          </>,
          <>
            Developed a full-featured blog platform with user authentication,
            admin and author roles, and approval workflows using Next.js,
            Prisma, and PostgreSQL. Managed publishing states, automated
            approval processes, and maintained seamless UI/UX for readers and
            administrators.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          //   {
          //     src: "/images/projects/project-01/cover-01.jpg",
          //     alt: "Once UI Project",
          //     width: 16,
          //     height: 9,
          //   },
        ],
      },
      {
        company: "Mphasis Limited",
        timeframe: "2021 - 2022",
        role: "Technical Support Engineer",
        achievements: [
          <>
            Delivered high-quality technical support, resolving complex issues
            through calls and emails.
          </>,
          <>
            Utilized ticketing systems to manage and resolve customer issues
            efficiently, ensuring high satisfaction.
          </>,
          <>
            Developed problem-solving and communication skills in a fast-paced
            environment.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "B.tech CSE",
        description: <>Maharashtra Institute of Technology.</>,
      },
      {
        name: "Full Stack Development",
        description: <>Masai School</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "React",
        description: (
          <>
            Proficient in building dynamic, responsive UI components with React,
            using hooks, context, and state management to create seamless user
            experiences.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Express",
        description: (
          <>
            Experienced in building RESTful APIs with Express, implementing
            secure routing, authentication, and middleware for backend services.
          </>
        ),
        images: [],
      },
      {
        title: "Node.js",
        description: (
          <>
            Skilled in server-side JavaScript development using Node.js,
            optimizing performance and scalability for full-stack applications.
          </>
        ),
        images: [],
      },
      {
        title: "MongoDB",
        description: (
          <>
            Proficient in managing and querying non-relational databases with
            MongoDB, including schema design and data indexing for performance.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "PostgreSQL",
        description: (
          <>
            Experienced with relational database management and SQL queries in
            PostgreSQL, focusing on data integrity and complex relationships.
          </>
        ),
        images: [],
      },
      {
        title: "Prisma ORM",
        description: (
          <>
            Efficient in data modeling and handling complex database operations
            with Prisma ORM, ensuring seamless integration with PostgreSQL.
          </>
        ),
        images: [],
      },
      {
        title: "Next.js",
        description: (
          <>
            Building high-performance, SEO-friendly applications using Next.js,
            with server-side rendering and API routes for full-stack
            development.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
