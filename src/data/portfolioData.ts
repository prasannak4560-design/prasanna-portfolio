export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  technologies: string[];
  description: string;
  highlights: string[];
  metrics: string;
  demoType: 'phishing' | 'parking' | 'housing';
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
  scoreType: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  category: 'Security' | 'Machine Learning' | 'Cloud' | 'Computer Vision' | 'Networking';
}

export interface PortfolioData {
  name: {
    first: string;
    last: string;
    fullName: string;
  };
  headline: {
    line1: string;
    line2Pixel: string;
    line3: string;
    line4Pixel: string;
  };
  roleCategory: {
    line1: string;
    line2Pixel: string;
  };
  asteriskNote: string;
  brandBlurb: string[];
  whatIDo: {
    label: string;
    content: string;
  };
  services: {
    label: string;
    items: string[];
  };
  awardsOrMetrics: {
    title: string;
    count: string;
    subtitle?: string;
  }[];
  footerLeft: {
    text: string;
    ctaText: string;
  };
  footerRight: string;
  contacts: {
    email: string;
    altEmail: string;
    phone: string;
    location: string;
    github: string;
    activeGithub: string;
    linkedin: string;
  };
  education: EducationItem[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: Project[];
  certifications: Certification[];
  responsibilities: {
    role: string;
    organization: string;
    year: string;
    description: string;
  }[];
}

export const prasannaData: PortfolioData = {
  name: {
    first: "PRASANNA",
    last: "KUMAR",
    fullName: "Bitragunta Prasanna Kumar",
  },
  headline: {
    line1: "I BRING THE",
    line2Pixel: "UNEXPECTED TO",
    line3: "INTELLIGENT & DIGITAL",
    line4Pixel: "EXPERIENCES",
  },
  roleCategory: {
    line1: "AI &",
    line2Pixel: "ENGINEERING",
  },
  asteriskNote: "*",
  brandBlurb: [
    "AI/ML Engineer & CSE Undergrad @ SRMIST.",
    "Specialized in deep learning, computer vision &",
    "real-time security detection systems.",
    "Driven by analytical rigor and reliable code."
  ],
  whatIDo: {
    label: "What I Do",
    content: "I create top-tier intelligent systems, computer vision models, and full-stack web applications for real-world impact.",
  },
  services: {
    label: "Expertise",
    items: [
      "Machine Learning & AI",
      "Computer Vision (OpenCV)",
      "Threat & Phishing Detection",
      "Full-Stack Web (React/Flask)",
      "Data Analysis & Statistical Modeling",
      "Data Structures & Algorithms"
    ],
  },
  awardsOrMetrics: [
    { title: "CGPA", count: "8.12", subtitle: "SRMIST B.Tech" },
    { title: "PROJECTS", count: "3+", subtitle: "AI/ML Systems" },
    { title: "CERTS", count: "x6", subtitle: "NPTEL & AWS" },
  ],
  footerLeft: {
    text: "Open to Software Development, AI/ML & Data Science roles. ",
    ctaText: "Schedule a call / Contact",
  },
  footerRight: "3 featured ML systems • 6 verified certs • SRMIST KTR '26",
  contacts: {
    email: "prasannak4560@gmail.com",
    altEmail: "pb8204@srmist.edu.in",
    phone: "+91 9100423070",
    location: "Chennai, Tamil Nadu, India",
    github: "https://github.com/bprasanna2004",
    activeGithub: "https://github.com/prasannak4560-design",
    linkedin: "https://www.linkedin.com/in/prasanna-kumar-bitragunta/",
  },
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering (AIML)",
      institution: "SRM Institute of Science and Technology, KTR Campus",
      period: "06/2022 – 05/2026",
      location: "Chennai, India",
      score: "8.12 / 10",
      scoreType: "CGPA",
    },
    {
      degree: "Senior Secondary Education (Class XII - Science)",
      institution: "Narayana Junior College",
      period: "2020 – 2022",
      location: "Guntur, Andhra Pradesh",
      score: "96.0%",
      scoreType: "Score",
    },
    {
      degree: "Secondary School Certificate (Class X)",
      institution: "Sri Chaitanya School",
      period: "2020",
      location: "Guntur, Andhra Pradesh",
      score: "10.0 / 10",
      scoreType: "CGPA",
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "C++", "C", "SQL", "JavaScript"],
    },
    {
      category: "Machine Learning & AI",
      items: [
        "ML Algorithms",
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "Feature Engineering",
        "Scikit-learn",
        "OpenCV",
        "Pandas",
        "NumPy",
      ],
    },
    {
      category: "Web & Databases",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Flask", "Django", "MySQL", "MongoDB"],
    },
    {
      category: "Core Computer Science",
      items: [
        "Data Structures & Algorithms (DSA)",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Computer Networks",
        "Operating Systems (OS)",
      ],
    },
    {
      category: "Software Engineering & Tools",
      items: [
        "SDLC",
        "Software Testing",
        "Risk Management",
        "Project Planning",
        "Cost Estimation (COCOMO)",
        "SQA",
        "Git & GitHub",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Leadership",
        "Time Management",
        "Effective Communication",
        "Teamwork",
        "Analytical Problem Solving",
      ],
    },
  ],
  projects: [
    {
      id: "phishing-detector",
      title: "Intelligent Security Model for Real-Time App & URL Phishing Detection",
      year: "2026",
      category: "Cybersecurity & Machine Learning",
      technologies: ["Python", "Scikit-learn", "Random Forest", "Pandas", "NumPy", "HTML", "CSS", "JavaScript", "SQL", "Chrome Extension"],
      description: "Designed and engineered an automated Chrome Extension powered by machine learning for real-time phishing URL detection. Employs advanced feature extraction, behavioral heuristic analysis, and Random Forest classification to distinguish legitimate web destinations from deceptive phishing vectors before sensitive data is exposed.",
      highlights: [
        "Constructed a high-accuracy Random Forest model trained on multi-dimensional lexical and structural URL parameters.",
        "Engineered real-time browser notifications and contextual threat severity alerts.",
        "Integrated client-side lightweight inspection with backend ML inference for sub-100ms response times.",
        "Safeguards users against typosquatting, credential harvesting, and suspicious domain patterns."
      ],
      metrics: "Sub-100ms URL Feature Extraction & Real-time Alerting",
      demoType: "phishing"
    },
    {
      id: "smart-parking",
      title: "Smart Parking Slot Checker",
      year: "2025",
      category: "Computer Vision & IoT Dashboard",
      technologies: ["Python", "OpenCV", "Computer Vision", "Image Processing", "NumPy", "Contour Detection", "HTML", "CSS", "JavaScript", "Flask"],
      description: "Developed a computer vision system for real-time parking spot occupancy detection without expensive hardware sensors. Utilizes camera feeds, adaptive background segmentation, and contour detection algorithms to monitor parking bays and stream live statuses to a responsive Flask web dashboard.",
      highlights: [
        "Implemented OpenCV morphological transformations and thresholding for environmental noise reduction.",
        "Built dynamic slot bounding-box tracking capable of handling shadows and vehicle variations.",
        "Engineered a real-time web dashboard displaying available vs occupied capacity metrics.",
        "Enables automated parking facility monitoring and optimized space utilization."
      ],
      metrics: "Accurate Real-Time Occupancy Classification via Video Feed",
      demoType: "parking"
    },
    {
      id: "house-price",
      title: "House Price Prediction System",
      year: "2024",
      category: "Machine Learning & Predictive Analytics",
      technologies: ["Python", "SQL", "Linear Regression", "Scikit-learn", "Pandas", "NumPy"],
      description: "Engineered a predictive regression model to estimate residential real estate valuation based on geographical, structural, and property metrics. Conducted thorough exploratory data analysis (EDA), multi-collinearity checks, feature scaling, and statistical evaluation.",
      highlights: [
        "Cleaned and preprocessed complex housing datasets, handling missing values and outlier anomalies.",
        "Performed correlation matrices and feature engineering to isolate primary price drivers (square footage, location, rooms).",
        "Trained and evaluated regression models, benchmarking RMSE and R² scores.",
        "Generated statistical insights to support informed data-driven decision making."
      ],
      metrics: "Optimized R² Performance & Multi-variable Correlation Analysis",
      demoType: "housing"
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      category: "Security"
    },
    {
      id: "cert-2",
      title: "Data Mining (Python)",
      issuer: "NPTEL",
      category: "Machine Learning"
    },
    {
      id: "cert-3",
      title: "Introduction to Machine Learning",
      issuer: "NPTEL",
      category: "Machine Learning"
    },
    {
      id: "cert-4",
      title: "Machine Learning Foundations",
      issuer: "AWS Academy",
      category: "Cloud"
    },
    {
      id: "cert-5",
      title: "Digital Image Processing (MATLAB Onramp)",
      issuer: "MathWorks",
      category: "Computer Vision"
    },
    {
      id: "cert-6",
      title: "Computer Networking Basics",
      issuer: "CISCO",
      category: "Networking"
    }
  ],
  responsibilities: [
    {
      role: "Volunteer Teacher / Technical Mentor",
      organization: "ZPHS (Zilla Parishad High School)",
      year: "2025",
      description: "Delivered structured instruction in Computer Science fundamentals and Artificial Intelligence concepts through interactive sessions and hands-on activities, fostering computational thinking among young students."
    },
    {
      role: "College Disciplinary Committee Member",
      organization: "Aaruush (National Techno-Management Fest, SRMIST)",
      year: "2024",
      description: "Coordinated multiple events, workshops, and hackathons; contributed to organizational planning, logistics, crowd flow control, and campus discipline enforcement."
    }
  ]
};

export const adamRobertsTemplateData: PortfolioData = {
  name: {
    first: "ADAM",
    last: "ROBERTS",
    fullName: "Adam Roberts",
  },
  headline: {
    line1: "I BRING THE",
    line2Pixel: "UNEXPECTED TO",
    line3: "BRAND & DIGITAL",
    line4Pixel: "EXPERIENCES",
  },
  roleCategory: {
    line1: "DESIGN &",
    line2Pixel: "ENGINEERING",
  },
  asteriskNote: "*",
  brandBlurb: [
    "Grilled Pixels is my",
    "personal brand - I came up",
    "with it in 2004 based on",
    "\"cooking up ideas\""
  ],
  whatIDo: {
    label: "What I Do",
    content: "I create the top 1% of experiences for brands and digital products",
  },
  services: {
    label: "Services",
    items: [
      "Branding",
      "Creative Direction & Strategy",
      "UX/UI Design",
      "Web Development (React/Nextjs)",
      "3D, WebGL / Photography",
      "Video & Animation"
    ],
  },
  awardsOrMetrics: [
    { title: "FWA", count: "x1" },
    { title: "W.", count: "x7" },
    { title: "CSSDesignAwards", count: "x22" },
  ],
  footerLeft: {
    text: "Open to freelance, contract or full-time. ",
    ctaText: "Schedule a call",
  },
  footerRight: "5 full cases • 82 archive fragments • 22 catalog items",
  contacts: {
    email: "adam@grilledpixels.com",
    altEmail: "",
    phone: "+1 (555) 019-2834",
    location: "London & New York",
    github: "https://github.com",
    activeGithub: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  responsibilities: []
};
