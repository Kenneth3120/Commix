import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  yourlogo1,
  yourlogo2,
  // yourlogo2,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Our Services",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  // {
  //   id: "3",
  //   title: "Roadmap",
  //   url: "#roadmap",
  // },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo1, yourlogo2];


export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

// export const benefits = [
//   {
//     id: "0",
//     title: "Brand Development",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "./src/assets/benefits/card-1.svg",
//     iconUrl: benefitIcon1,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "1",
//     title: "Content Creation",
//     text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
//     backgroundUrl: "./src/assets/benefits/card-2.svg",
//     iconUrl: benefitIcon2,
//     imageUrl: benefitImage2,
//     light: true,
//   },
//   {
//     id: "2",
//     title: "SEO",
//     text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
//     backgroundUrl: "./src/assets/benefits/card-3.svg",
//     iconUrl: benefitIcon3,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "3",
//     title: "Paid Ads",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "./src/assets/benefits/card-4.svg",
//     iconUrl: benefitIcon4,
//     imageUrl: benefitImage2,
//     light: true,
//   },
//   {
//     id: "4",
//     title: "Social Media Management",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "./src/assets/benefits/card-5.svg",
//     iconUrl: benefitIcon1,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "5",
//     title: "Media Buying",
//     text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
//     backgroundUrl: "./src/assets/benefits/card-6.svg",
//     iconUrl: benefitIcon2,
//     imageUrl: benefitImage2,
//   },

//   {
//     id: "0",
//     title: "Brand Development",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "./src/assets/benefits/card-1.svg",
//     iconUrl: benefitIcon1,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "1",
//     title: "Content Creation",
//     text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
//     backgroundUrl: "./src/assets/benefits/card-2.svg",
//     iconUrl: benefitIcon2,
//     imageUrl: benefitImage2,
//     light: true,
//   },
//   {
//     id: "2",
//     title: "SEO",
//     text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
//     backgroundUrl: "./src/assets/benefits/card-3.svg",
//     iconUrl: benefitIcon3,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "3",
//     title: "Paid Ads",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "./src/assets/benefits/card-4.svg",
//     iconUrl: benefitIcon4,
//     imageUrl: benefitImage2,
//     light: true,
//   },
//   {
//     id: "4",
//     title: "Social Media Management",
//     text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     backgroundUrl: "./src/assets/benefits/card-5.svg",
//     iconUrl: benefitIcon1,
//     imageUrl: benefitImage2,
//   },
//   {
//     id: "5",
//     title: "Media Buying",
//     text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
//     backgroundUrl: "./src/assets/benefits/card-6.svg",
//     iconUrl: benefitIcon2,
//     imageUrl: benefitImage2,
//   },
// ];

export const benefits = [
  {
    id: "0",
    title: "Brand Strategy",
    text: "We craft tailored brand strategies that define your identity, resonate with your audience, and set you apart from competitors.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    category: "Branding And Design",
  },
  {
    id: "1",
    title: "Brand Identity",
    text: "We design unique brand identities, including logos, colors, and visuals, to ensure your business leaves a lasting impression everywhere.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    category: "Branding And Design",
  },
  {
    id: "2",
    title: "Logo Suite",
    text: "We create versatile logo suites, offering variations and formats to ensure your brand looks perfect across all platforms and materials.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    category: "Branding And Design",
  },
  {
    id: "3",
    title: "Print Collaterals",
    text: "We design impactful print collaterals, such as brochures, flyers, and business cards, to effectively communicate your brand's message offline.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    category: "Branding And Design",
  },
  {
    id: "4",
    title: "Package Design",
    text: "We craft eye-catching package designs that showcase your product's value, attract customers, and elevate your brand's market presence.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    category: "Branding And Design",
  },
  {
    id: "5",
    title: "Rebranding",
    text: "We revitalize your brand with innovative rebranding strategies, modern designs, and fresh messaging to better connect with your audience.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    category: "Branding And Design",
  },
  {
    id: "6",
    title: "Content Strategy",
    text: "We develop engaging content strategies that align with your goals, captivate your audience, and drive meaningful connections with your brand.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    category: "Social Media & Digital Marketing",
  },
  {
    id: "7",
    title: "Content Creation",
    text: "We create compelling content, including visuals and copy, tailored to your brand's voice to engage and inspire your audience.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    category: "Social Media & Digital Marketing",
  },
  {
    id: "8",
    title: "Social Media Marketing",
    text: "We manage targeted social media campaigns to boost brand visibility, engage audiences, and drive conversions across various platforms.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    category: "Social Media & Digital Marketing",
  },
  {
    id: "9",
    title: "Paid Ads",
    text: "We optimize paid advertising campaigns to maximize ROI, reaching your target audience through strategic placements on Google, social media, and more.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    category: "Social Media & Digital Marketing",
  },
  {
    id: "10",
    title: "Influencer Marketing",
    text: "We connect your brand with influential voices to enhance credibility, expand reach, and foster authentic relationships with your target audience.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    category: "Social Media & Digital Marketing",
  },

  {
    id: "11",
    title: "Custom Website Design",
    text: "We create custom websites tailored to your brand, offering seamless user experiences, responsive designs, and engaging interfaces that drive results.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    category: "Website Development",
  },

  {
    id: "12",
    title: "UI  UX Design",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    category: "Website Development",
  },

  {
    id: "13",
    title: "Blogs",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    category: "Website Development",
  },

  {
    id: "14",
    title: "Search Engine Optimization",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    category: "Website Development",
  },

  {
    id: "15",
    title: "E-commerce Marketing",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    category: "Website Development",
  },

  {
    id: "16",
    title: "Content Shooting",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    category: "Production",
  },
  {
    id: "17",
    title: "Podcast Production",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    category: "Production",
  },

  {
    id: "18",
    title: "Video Editing",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    category: "Production",
  },

  {
    id: "19",
    title: "Scriptimg",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    category: "Production",
  },

  {
    id: "20",
    title: "Personal Branding",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    category: "Production",
  },
];



export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
