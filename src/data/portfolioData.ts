export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  architecture: string[];
  metrics: { label: string; value: string }[];
  demoType: 'fuel' | 'citizen';
  githubUrl?: string;
  liveUrl?: string;
}

export interface Internship {
  id: string;
  company: string;
  domain: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  iconName: 'code' | 'wrench' | 'lightbulb';
  skills: { name: string; level?: string; description?: string }[];
}

export interface PreferredInterest {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: 'palette' | 'sparkles' | 'film' | 'pen-tool';
  highlights: string[];
  tools: string[];
}

export const PORTFOLIO_DATA = {
  name: 'Vithya S',
  role: 'MCA Student | Aspiring Software Developer',
  tagline: '"Passionate about learning new technologies and building innovative software solutions."',
  profileImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2kiGHsaGTz1h7vY325C_570HYJ9st5faQ9PoewI4ir_sJpnec7O2Z-zj_nOtuLsVJ9bS8qha7C8k1iU2AkZ3mCf8zKNmnrR9ElNSa973ww4Wobqr59SAe9yVvlFGJHAMNHkJhKG3Tkpr6fK8sGZ7DtMhmlgq1EsOZVyIeFt57cyU11Dpp_-C6TrA_gF0QUGD5hVHn-vQaAEQmazHIx7Gf6xKONbpmhp3WjGVyLdUgEhimDEgEE3khtkkFCzRfpZ0GHKc',
  deployedUrl: 'https://ais-pre-hm4o4tlw72nljrllq7qgln-61434937023.asia-east1.run.app',
  about: 'I am Vithya S, an MCA student at Holy Cross College (2025 – 2027). I completed my B.Sc. Computer Science at Cauvery College for Women with a CGPA of 8.68 / 10. I am interested in software development, backend development, cloud technologies and data analytics. I enjoy learning new technologies and applying my skills through real-world projects.',
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Holy Cross College',
      period: '2025 – 2027',
      status: 'Currently Pursuing',
      highlights: ['Advanced Database Management', 'Cloud Computing & DevOps', 'Software Engineering & Architecture', 'Full Stack Development']
    },
    {
      degree: 'Bachelor of Science in Computer Science (B.Sc. Computer Science)',
      institution: 'Cauvery College for Women',
      period: '2022 – 2025',
      status: 'Completed',
      grade: '8.68 / 10 CGPA',
      highlights: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Web Technologies', 'Relational Database Systems']
    }
  ],
  preferredInterests: [
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      category: 'Design & Experience',
      icon: 'palette',
      description: 'Designing intuitive, user-centered digital interfaces with clean typographic hierarchy, accessible color schemes, and seamless interaction flows.',
      highlights: [
        'User-centered interface layout and wireframing',
        'Design systems and component modularity',
        'Responsive prototyping for mobile and desktop screens',
        'WCAG accessibility & contrast standards'
      ],
      tools: ['Figma', 'Prototyping', 'Responsive Design', 'Color Theory']
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering',
      category: 'AI & Generative Tech',
      icon: 'sparkles',
      description: 'Crafting precise, structured instructions and context pipelines for generative AI models to extract accurate, deterministic code and domain outputs.',
      highlights: [
        'Structured context engineering and zero/few-shot prompting',
        'System instructions and guardrail enforcement',
        'Automated workflow augmentation and synthesis',
        'Model behavior optimization and evaluation'
      ],
      tools: ['Gemini', 'LLM Prompting', 'Few-Shot Chaining', 'Context Structuring']
    },
    {
      id: 'editing',
      title: 'Editing',
      category: 'Media & Technical Content',
      icon: 'film',
      description: 'Precision editing of digital media, visual graphics, and technical documentation to convey complex computer science concepts with clarity and impact.',
      highlights: [
        'Technical report drafting and visual structuring',
        'Digital media composition and presentation polish',
        'Asset optimization for web performance',
        'Clear documentation for software repositories'
      ],
      tools: ['MS PowerPoint', 'Visual Media Tools', 'Technical Copyediting', 'Asset Optimization']
    }
  ] as PreferredInterest[],
  skillsCategories: [
    {
      title: 'Programming',
      iconName: 'code',
      skills: [
        { name: 'Java', level: 'Advanced', description: 'OOP, Collections framework, Exception handling, Multi-threading' },
        { name: 'Python', level: 'Intermediate', description: 'Scripting, Data processing, Automation, Pandas/NumPy' },
        { name: 'C', level: 'Intermediate', description: 'Procedural programming, Pointers, Memory management' }
      ]
    },
    {
      title: 'Tools',
      iconName: 'wrench',
      skills: [
        { name: 'Excel', level: 'Advanced', description: 'Formulas, Pivot Tables, VLOOKUP, Data Visualization' },
        { name: 'Power BI', level: 'Intermediate', description: 'Interactive Dashboards, DAX queries, Data Modeling' },
        { name: 'GitHub', level: 'Proficient', description: 'Version control, Git workflows, Repository management' },
        { name: 'MS Word', level: 'Advanced', description: 'Documentation, Technical Reports, Formatting' },
        { name: 'PowerPoint', level: 'Advanced', description: 'Presentations, Flowcharts, System Architecture visuals' }
      ]
    },
    {
      title: 'Interests',
      iconName: 'lightbulb',
      skills: [
        { name: 'Data Analytics', level: 'Core Interest', description: 'Exploratory data analysis, KPI visualization, Trend forecasting' },
        { name: 'Cloud', level: 'Core Interest', description: 'Cloud deployment, Serverless concepts, Distributed architectures' },
        { name: 'ERP', level: 'Core Interest', description: 'Enterprise Resource Planning systems, Workflow automation' },
        { name: 'Python Libraries', level: 'Active Learning', description: 'NumPy, Pandas, Matplotlib, Scikit-learn basics' }
      ]
    }
  ] as SkillCategory[],
  internships: [
    {
      id: 'isquare',
      company: 'iSquare Data Systems (P) Ltd.',
      domain: 'Real-Time Project Assessment',
      year: '2023'
    },
    {
      id: 't4teq',
      company: 'T4TEQ Software Solutions',
      domain: 'Data Analytics, Advanced Excel, Power BI, Python & Libraries',
      year: '2026'
    },
    {
      id: 'innovation-hub',
      company: 'Innovation & Incubation Hub',
      domain: 'Sensor Technology',
      year: '2025'
    }
  ] as Internship[],
  projects: [
    {
      id: 'fuel-delivery',
      title: 'Fuel Delivery Management System',
      subtitle: 'Web-based system using PHP and MySQL to manage fuel orders and tracking.',
      description: 'Web-based system using PHP and MySQL to manage fuel orders and tracking.',
      longDescription: 'A comprehensive full-stack enterprise web portal designed to streamline on-demand fuel distribution logistics. The application provides dynamic order dispatching, driver route coordination, customer booking management, real-time inventory ledger updates, and automated billing calculation.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbN1ZIVbTs6yAiGNFF5WxycW0RlWBHZPpB2DgO3Xc6C_WKSOY4IJurZ8z-xYQCmkdBmPki-SIzWMmUhArij7dbl38O3PYSHzQj3kU2GZBwEud0ahvBLNVuUTFBRZCwBJtWQP6u_8MzDGmUrK4wpYwFOwBgZeW-24KzdKWhXLIFia6nspbz3BgCqkdMq8xr5pey_UGx5PYnw1jW_rw_VTXk4Qq9kljCINwB4YImpFho9UdiideucpzHIA',
      tags: ['PHP', 'MySQL', 'JavaScript', 'CSS3', 'Apache'],
      features: [
        'Real-time Fuel Order Tracking & Dispatch Status',
        'Fleet & Tanker Capacity Management Ledger',
        'Customer Billing, Invoice Generation & Receipts',
        'Admin Analytics Dashboard for Daily Volume & Revenue',
        'Driver Assignment and Route Verification'
      ],
      architecture: [
        'Model-View-Controller (MVC) modular design pattern',
        'MySQL relational schema with foreign key integrity & ACID transactions',
        'Session-based authentication with role-based access control (Admin, Driver, Customer)',
        'Prepared statements for SQL Injection prevention and sanitized form inputs'
      ],
      metrics: [
        { label: 'Database Tables', value: '8 Schema entities' },
        { label: 'Query Performance', value: '< 45ms average' },
        { label: 'Order Processing', value: '100% automated' }
      ],
      demoType: 'fuel',
      githubUrl: 'https://github.com/Vithya-2004/fuel-delivery-management-system'
    },
    {
      id: 'citizen-connect',
      title: 'Citizen Connect',
      subtitle: 'Digital platform for connecting citizens with services and tracking requests.',
      description: 'Digital platform for connecting citizens with services and tracking requests.',
      longDescription: 'A modern, responsive civic engagement web portal empowering municipality residents to log grievances, request public works (streetlight repair, waste disposal, road maintenance), and monitor resolution lifecycles in real time with end-to-end transparency.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsi53XM-7JsQA6UKfGBWIQOdYFdnkZgj8RdUttbtI69gaFXnqTg_W7JEo_nwXCtIVVdyY2_blT-nAk6-Z3bhIu4IDen-IykfGFGoBAQU0RgSL05kHs0zkEXrbmMjJAWNim7xhKTWBkhc3f9kGICGuhSSQaClBedCtt7OPTuEF9nlZSxf3jZW5yW8oUdVGNwFlQNleh2-TcnJmDWhYzKLagf26UpiA3hI7h6QUrDjiCIpc8zN_CuUm71w',
      tags: ['HTML', 'CSS', 'JavaScript', 'DOM API', 'Local Storage'],
      features: [
        'Interactive Civic Service Catalog & Categorized Filing',
        'Live Ticket Status Tracker with Step Progress Bar',
        'Community Notice Board with Department Updates',
        'Accessible, High-Contrast Responsive Layout for Mobile & Desktop',
        'Instant Form Validation with Feedback'
      ],
      architecture: [
        'Pure Vanilla JavaScript dynamic DOM manipulation with modular components',
        'Semantic HTML5 structure following WCAG accessibility guidelines',
        'Custom CSS layout engine using Flexbox & Grid without external heavy runtimes',
        'Client-side state management with persistent storage synchronization'
      ],
      metrics: [
        { label: 'Page Load Speed', value: '99+ Lighthouse score' },
        { label: 'Accessibility', value: '100% Semantic' },
        { label: 'Supported Categories', value: '6 Civic Depts' }
      ],
      demoType: 'citizen',
      githubUrl: 'https://github.com/Vithya-2004/citizen-connect'
    }
  ] as Project[],
  contact: {
    email: 'vithya102004@gmail.com',
    github: 'Vithya-2004',
    githubUrl: 'https://github.com/Vithya-2004',
    linkedin: 'vithya-s-5363b1417',
    linkedinUrl: 'https://linkedin.com/in/vithya-s-5363b1417',
    phone: '8610603808',
    location: 'Tiruchirappalli, Tamil Nadu, India'
  }
};
