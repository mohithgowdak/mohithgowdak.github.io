import { Project, Experience, Education, BlogPost } from '../types';

export const personalInfo = {
  name: "Mohith Gowda K",
  title: "AI/ML Engineer and Data Scientist",
  email: "mohithgowdak.kote@gmail.com",
  phone: "+91 8050251260", // Added phone number
  location: "Bengaluru, Karnataka, India",
  linkedin: "https://linkedin.com/in/mohith-gowda-k",
  github: "https://github.com/mohithgowdak",
  medium: "https://medium.com/@wintersoldie",
  summary: "Computer Science graduate (BE, 2025) with a strong foundation in AI, Computer Vision, and behavior-aware systems. Seeking an AI/ML or Computer Vision Projects to apply deep learning, pose tracking, and real-time recognition to impactful products. Passionate about translating research into real-world systems."
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Micro-Expression Recognition based on TV-L1 based Hierarchical Transformer Network",
    description: "Aimed to explore the application of Hierarchical Transformer Networks (HTNet) in micro-expression recognition by combining TV-L1 optical flow for extracting subtle facial motion dynamics with HTNet for deep spatial-temporal feature learning. Achieved a UF1 score of 0.9722 and ECE of 0.1131 on CASME II, SAMM, and SMIC datasets. Enabled real-time, high-accuracy emotion recognition for use cases in security, mental health diagnostics, and human-computer interaction.",
    technologies: ["Python", "PyTorch", "OpenCV", "MediaPipe", "MTCNN", "NumPy", "Matplotlib", "TV-L1 Optical Flow Algorithm", "Hierarchical Transformer Network (HTNet)"],
    imageUrl: "/Images/microexpression.jpg",
    //githubUrl: "https://github.com/Mohith johnson/ecommerce-platform",
    //liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true
  },
  {
    id: "2",
    title: "SignLearn: A sign language learning platform",
    description: " Developed a full-stack web application using React, Redux, JavaScript, MediaPipe, and Firebase that converts real-time sign language gestures into text with 91% accuracy using a custom-built machine learning model trained on a self-curated dataset of 100K images; contributed to both frontend and backend, implemented Firebase Firestore for database and authentication, and enabled seamless, AI-powered gesture recognition for interactive learning.",
    technologies: [ "React - Redux", "JavaScript", "Media pipe", "Firebase" ],
    imageUrl: "/Images/signlearn.png",
    githubUrl: "https://github.com/mohithgowdak/SIGNLEARN-FRONTEND-BACKEND",
    liveUrl: "https://signlearn-frontend-backend.vercel.app",
    featured: true
  },
  {
    id: "3",
    title: "AgriConnect - AI-Powered Agri-Trade Platform",
    description: "A full-stack mobile-first platform connecting farmers, global buyers, and logistics partners using React Native and Supabase. Features include real-time chat, crop management, role-based onboarding, document verification, and marketplace discovery — designed to eliminate middlemen and empower direct trade. [Work Under Progress]",
    technologies: ["React Native", "Expo Router", "Supabase", "PostgreSQL", "JavaScript", "TypeScript", "Lucide", "OTP Auth"],
    imageUrl: "/Images/agriconnect.png", // Replace with your project banner path
    githubUrl: "https://github.com/mohithgowdak/agricuture_platform", // Update if private or hosted elsewhere
    liveUrl: "", // Optional: Add if you deploy as a PWA or mobile demo
    featured: false
  },
  {
    id: "4",
    title: "Ninexta AI - AI Agent Explorer",
    description: "A React-based platform powered by Gemini 2.0 Flash that allows users to discover AI tools using natural language queries instead of rigid tags or filters. Features intelligent query mapping, responsive UI, and individual agent pages with mock capabilities, pricing, and examples.[Work Under Progress]",
    technologies: ["React", "JavaScript", "Gemini 2.0 Flash", "HTML", "CSS", "Vite", "TailwindCSS"],
    imageUrl: "/Images/pexels-thisisengineering-3913025.jpg",
    githubUrl: "https://github.com/mohithgowdak/Ninexta",
    liveUrl: "https://ninexta-ai.netlify.app",
    featured: false
  },
  {
    id: "5",
    title: "Digital Legacy Platform",
    description: "An in-progress secure platform to manage and transfer digital assets after death. Includes MetaMask wallet login, JWT authentication, categorized asset uploads, Ethereum-based wallet integration, and transfer instructions. [Work Under Progress]",
    technologies: ["FastAPI", "Python", "MetaMask", "Ethereum", "JWT", "HTML", "CSS", "JavaScript"],
    imageUrl: "/Images/pexels-sevval-724207784-18334305.jpg",
    githubUrl: "https://github.com/mohithgowdak/Projectk",
    liveUrl: "", // Live demo coming soon
    featured: false
  },
  {
    id: "6",
    title: "MindMend – Mental Health Support Platform",
    description: "A Flask-based mental health support platform with appointment booking, real-time chat via Socket.IO, email notifications using Flask-Mail, and emotion analysis with text2emotion for personalized content recommendations, built with a clean UI for both users and counselors.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite", "Socket.IO", "Flask-Mail", "text2emotion"],
    imageUrl: "/Images/image.png",
    githubUrl: "https://github.com/mohithgowdak/MindMend_development_mode",
    //liveUrl: "https://mindmend-platform.netlify.app",
    featured: false
  },
  {
    id: "7",
    title: "DocuShare Hub",
    description: "A Django-based online notes-sharing platform with responsive design, admin-managed content, and streamlined interfaces for users and administrators. Built using Python, Django, SQLite3, HTML, and CSS to ensure accessibility and a smooth user experience across devices.",
    technologies: ["Python", "Django", "SQLite3", "HTML", "CSS"],
    imageUrl: "/Images/pexels-rdne-7821684.jpg", // Add or update with actual image path
    githubUrl: "https://github.com/mohithgowdak/NewNotesSharing", // Replace with your real GitHub link
    liveUrl: "", // Add live deployment link if available
    featured: false
  },
  {
    "id": "8",
    "title": "MCP GitHub Project Manager",
    "description": "A comprehensive Model Context Protocol (MCP) server built in Python that provides advanced GitHub project management capabilities through GitHub's GraphQL API. Implements 47+ MCP tools for managing projects, issues, milestones, sprints, labels, comments, custom fields, and advanced search/filtering. Built with Clean Architecture principles, featuring async/await patterns, comprehensive error handling with retry mechanisms, in-memory caching with TTL support, and an event system for tracking resource changes. Enables seamless integration with AI assistants like Cursor, Claude Desktop, and VS Code for automated project management workflows.",
    "technologies": [
      "Python",
      "Model Context Protocol (MCP)",
      "GitHub GraphQL API",
      "Pydantic",
      "PyGithub",
      "httpx",
      "aiohttp",
      "Click",
      "Python-dotenv",
      "Async/Await",
      "Clean Architecture",
      "Type Hints",
      "Pytest",
      "Black",
      "Ruff",
      "MyPy"
    ],
    "imageUrl": "/Images/mcp_git.png",
    "githubUrl": "https://github.com/mohithgowdak/git_proj_manger_mcp",
    liveUrl: "https://www.linkedin.com/pulse/building-mcp-server-github-project-management-journey-mohith-gowda-k-2lvgc/?trackingId=bqJuzvFRQm6WC0tIGAMMhg%3D%3D",
    "featured": true
  }
  
  
  
    
];

export const experience: Experience[] = [
  {
    id: "1",
    title: "Cloud Support Engineer - SAP S/4 HANA Public Cloud",
    company: "SAP Labs India Pvt Ltd",
    duration: "Jan 2025 – Present",
    description: [
      "Provided support for SAP S/4 HANA Public Cloud Sourcing and Procurement modules, ensuring smooth system performance.",
      "Diagnosed and resolved complex technical issues, maintaining service continuity for enterprise clients.",
      "Collaborated with cross-functional teams to improve system stability and user experience.",
      "Delivered proactive client support by optimizing workflows and enhancing SAP S/4 HANA features."
    ],
    technologies: ["SAP S/4 HANA", "Public Cloud", "ERP","sourcing & procurement", "Communication", "Technical Support"]
  }
 , 
  {
    id: "2",
    title: "Apprenticeship - IDM Application Development",
    company: "OpenText Corporation India Pvt Ltd",
    duration: "Oct 2024 – Dec 2024",
  
    description: [
      "Worked on the Identity Management Driver project as a backend developer.",
      "Developed drivers for IDM software using Java and SQL, enhancing system functionality.",
      "Gained hands-on experience with JDBC, REST APIs, backend server development, and networking.",
      "Contributed to the REST driver development for the GWS application.",
      "Analyzed and integrated external APIs from platforms like Box, GitLab, and GWS to enhance compatibility and connectivity.",
      "Collaborated with industry experts to ensure robust backend solutions and timely project delivery."
    ],
    technologies: ["Java", "SQL", "JDBC", "REST APIs", "Backend Development", "Networking"]
  },
  {
    id: "4",
    title: "Freelance Prompt Tester",
    company: "Soul AI",
    duration: "Aug 2024 – Oct 2024",
    
    description: [
      "Evaluated and optimized AI-generated prompts to enhance model performance and user engagement.",
      "Provided structured feedback to improve prompt clarity, contextual relevance, and adaptability across use cases.",
      "Tested AI systems rigorously to ensure response accuracy and alignment with product goals.",
      "Contributed to iterative refinement of prompt-engineering practices in real-world scenarios."
    ],
    technologies: ["Prompt Engineering", "AI Testing", "LLMs", "NLP", "Human-in-the-loop Evaluation"]
  }
  
  
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Sri Jayachamarajendra College of Engineering",
    duration: "2021 – 2025",
    gpa: "9.0/10.0",
    achievements: [
      "Completed specialized coursework in AI, Networks, and Cybersecurity",
      "Final year project on Application of Text Based Transformer Models for image classification",
      "Active participant in coding contests and project exhibitions"
    ],
    url: "https://www.jssstuniv.in/#/"
  }
  
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "From Bananas to Bots: How ChatGPT, Gemini, and Image Generators Really Work",
    excerpt: "This is the first part of our journey into AI/ML Learning, where we'll pull back the curtain on these incredible technologies, starting with how your whimsical banana prompt or philosophical pirate query actually goes from your brain to a breathtaking (or hilarious) result.",
    publishedDate: "2025-09-21",
    readTime: "10 min read",
    tags: ["AI", "LLM", "Generative AI"],
    url: "https://www.linkedin.com/pulse/from-bananas-bots-how-chatgpt-gemini-image-generators-mohith-gowda-k-iw3zc/?trackingId=r278xq5IRfyTbM%2BJk26M5g%3D%3D",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: "2",
    title: "Building AI Agent Explorer — A Student Project to Help You Discover the Right AI Tools",
    excerpt: "AI Agent Explorer is a platform that lets users explore the world of AI agents/tools ",
    publishedDate: "2024-04-19",
    readTime: "4 min read",
    tags: ["Python", "JavaScript", "Agentic AI", "Prototype"],
    url: "https://medium.com/@wintersoldie/building-ai-agent-explorer-a-student-project-to-help-you-discover-the-right-ai-tools-smarter-a04fca60a494",
    imageUrl: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: "3",
    title: "Gen Z, AI & The Prompt Revolution: Why Prompt Engineering is India’s Superpower",
    excerpt: "Imagine a world where a single sentence can launch the next billion-dollar startup, automate entire workflows, or rewrite the careers of a whole generation. That world is already here—powered by prompt engineering, the skill rapidly redefining who leads in the AI-first era. For India’s ambitious professionals, students, and tech visionaries, knowing how to “talk to AI” isn’t just futuristic, it’s the passport to relevance and success in the next decade.",
    publishedDate: "2025-07-20",
    readTime: "4 min read",
    tags: ["Career", "Prompt Engineering", "Software Engineering", "Student Life"],
    url: "https://www.linkedin.com/pulse/gen-z-ai-prompt-revolution-why-engineering-indias-mohith-gowda-k-4h38c/?trackingId=r278xq5IRfyTbM%2BJk26M5g%3D%3D",
    imageUrl: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: "4",
    title: "The Future of Remote Work: Is It a Dream or a Disaster? ",
    excerpt: "Let’s dive into the pros and cons of working from anywhere!",
    publishedDate: "2025-01-22",
    readTime: "3 min read",
    tags: ["Hybrid", "Work from home", "AI", "Work Life Balance"],
    url: "https://medium.com/@wintersoldie/the-future-of-remote-work-is-it-a-dream-or-a-disaster-7ab009408c95",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  }
];

export const skills = {
  "Programming Languages": ["Python", "JavaScript", "C", "Java", "C++", "SQL"],
  "Web Technologies": ["React", "Firebase", "Django", "Flask", "FastAPI", "HTML/CSS", "REST APIs"],
  "Data & AI": [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "MediaPipe",
    "PyTorch",
    "Transformers",
    "OpenCV",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "MCP Server",
    "Prompt Tuning and Engineering",
    "LLMs (Large Language Models)",
    "Generative AI"
  ],
  "Tools & Platforms": [
    "Git",
    "Docker",
    "Linux",
    "Firebase Hosting",
    "MongoDB",
    "PostgreSQL",
    "Google Colab",
    "VS Code"
  ],
  "SAP & Enterprise Tech": [
    "SAP ABAP (basic)",
    "SAP S/4 HANA Public Cloud",
    "SAP Fiori",
    "SAP UI5",
    "Procurement & Sourcing",
    "Intercompany stock transfer process",
    "Enterprise Software Support",
    "SAP Launchpad"
  ],
  "Soft Skills": [
    "Problem Solving",
    "Self-Learning",
    "Analytical Thinking",
    "Project Ownership",
    "Team Collaboration",
    "Growth Mindset",
    "Technical Communication",
    "Adaptability",
    "Time Management"
  ]
};
