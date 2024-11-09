import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Haris Samingan",
  logo: "/my-face.png",
  email: "haris@edugrow.org",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "YouTube",
    url: "https://www.youtube.com/@haris.samingan",
    icon: "mdi:youtube",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/haris-samingan",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/haris.samingan",
    icon: "mdi:instagram",
    external: true,
  },
];


// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Haris Samingan",
    description:
    "I’m Haris Samingan, an entrepreneur in Singapore building a 6 figure business by end of 2025. Currently running EduGrow, where we help scale tuition and education businesses.",
    image: identity.logo,
  },
  role: "Entrepreneur",
  description:
    "I’m Haris Samingan, an entrepreneur in Singapore 🇸🇬 building a 6 figure business by end of 2025. Currently running EduGrow, where we help scale tuition and education businesses.",
  socialLinks: socialLinks,
  links: [
    {
      title: "About Me",
      url: "/about",
    },
    {
      title: "EduGrow",
      url: "https://edugrow.org",
      external: true
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Haris Samingan",
    description:
      "I’m Haris Samingan, an entrepreneur in Singapore 🇸🇬 building a 6 figure business by end of 2025. Currently running EduGrow, where we help scale tuition and education businesses.",
    image: identity.logo,
  },
  subtitle: "Minimising regrets every day",
  about: {
    description: `I’m Haris Samingan, an entrepreneur in Singapore 🇸🇬 building a 6 figure business by end of 2025. Currently running EduGrow, where we help scale tuition and education businesses.`, // Markdown is supported
    image_l: {
      url: "/stock-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/stock-2.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `Here is my career`, // Markdown is supported
    items: [
      {
        title: "Founder",
        company: {
          name: "EduGrow.org",
          image: "https://sg.getblood.com/cdn/shop/files/Red_Blood_Logo_280_x_80px_160x.png?v=1646192355",
          url: "https://edugrow.org",
        },
        date: "2024 - Present",
      },
      {
        title: "Head of Operations",
        company: {
          name: "Sigma School",
          image: "https://sg.getblood.com/cdn/shop/files/Red_Blood_Logo_280_x_80px_160x.png?v=1646192355",
          url: "#home",
        },
        date: "2023 - 2024",
      },
      {
        title: "Founder",
        company: {
          name: "Next Level Academy (Failed)",
          image: "https://sg.getblood.com/cdn/shop/files/Red_Blood_Logo_280_x_80px_160x.png?v=1646192355",
          url: "#home",
        },
        date: "2022 - 2023",
      },
      {
        title: "Co-Founder",
        company: {
          name: "Zenith Coding Academy (Failed)",
          image: "https://sg.getblood.com/cdn/shop/files/Red_Blood_Logo_280_x_80px_160x.png?v=1646192355",
          url: "#home",
        },
        date: "2021 - 2022",
      },
      {
        title: "Founder",
        company: {
          name: "Learn Flutter Code (Failed)",
          image: "https://sg.getblood.com/cdn/shop/files/Red_Blood_Logo_280_x_80px_160x.png?v=1646192355",
          url: "#home",
        },
        date: "2019 - 2021",
      },
      {
        title: "Software Developer",
        company: {
          name: "Blood",
          image: "https://sg.getblood.com/cdn/shop/files/Red_Blood_Logo_280_x_80px_160x.png?v=1646192355",
          url: "https://sg.getblood.com/",
        },
        date: "2018 - 2019",
      },
    ],
  },    
  connect: {
    description: `Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Haris Samingan",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Haris Samingan",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
