import type { Blog, Career, Service } from "../types";

export const mockBlogs: Blog[] = [
  {
    id: "1",
    title: "Understanding Modern Web Development",
    content: "Modern web development is constantly evolving. In this article, we explore the latest trends including React Server Components, Edge computing, and the move towards simpler state management solutions like Zustand. \\n\\n As we move forward, the emphasis on performance and developer experience becomes paramount...",
    author: "Jane Doe",
    date: "2023-10-01",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Web", "React", "Trends"],
  },
  {
    id: "2",
    title: "The Future of AI in Software Engineering",
    content: "AI is reshaping how we write code. From intelligent code completion to automated testing, the tools available to developers are becoming incredibly sophisticated. However, the role of the software engineer is not disappearing; it is transforming into more of a system architect role.",
    author: "John Smith",
    date: "2023-10-15",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    tags: ["AI", "Engineering"],
  },
];

export const mockCareers: Career[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    description: "We are looking for an experienced Frontend Engineer to join our core product team. You will be responsible for building beautiful, highly interactive user interfaces.",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    requirements: [
      "5+ years of experience with React",
      "Deep understanding of modern CSS",
      "Experience with TypeScript",
      "Strong communication skills",
    ],
  },
  {
    id: "2",
    title: "Product Designer",
    description: "Join us to shape the future of our digital products. You will work closely with engineering and product management to deliver stunning user experiences.",
    location: "New York, NY",
    type: "Full-time",
    department: "Design",
    requirements: [
      "Portfolio showcasing web and mobile apps",
      "Proficiency in Figma",
      "Experience with design systems",
    ],
  },
];

export const mockServices: Service[] = [
  {
    id: "1",
    title: "Web Application Development",
    description: "We build fast, scalable, and secure web applications tailored to your business needs.",
    features: [
      "Custom Frontend Architecture",
      "Responsive Design",
      "Performance Optimization",
      "SEO Best Practices",
    ],
    detailedContent: "Our web application development service focuses on creating modern solutions that drive your business forward. We utilize cutting-edge technologies like React, Next.js, and Node.js to ensure your application is built for the future.",
  },
  {
    id: "2",
    title: "Cloud Infrastructure Setup",
    description: "Optimize your infrastructure with our cloud solutions, ensuring maximum uptime and efficiency.",
    features: [
      "AWS/GCP/Azure Migration",
      "Serverless Architecture",
      "CI/CD Pipeline Setup",
      "Security Audits",
    ],
    detailedContent: "Migrating to the cloud or optimizing existing infrastructure requires deep expertise. We help you design and implement scalable cloud architectures that reduce costs and improve reliability.",
  },
];
