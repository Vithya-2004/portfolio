import { PORTFOLIO_DATA } from '../data/portfolioData';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  action?: {
    type: 'open_resume' | 'download_resume' | 'view_projects' | 'contact';
    label: string;
  };
}

export const QUICK_PROMPTS = [
  'Who is Vithya?',
  'What internships has she done?',
  'What skills does she have?',
  'What projects has she worked on?',
  'What is her education?',
  'Can I see her resume?',
  'How do I contact Vithya?'
];

export function answerPortfolioQuery(query: string): { text: string; action?: ChatMessage['action'] } {
  const q = query.trim().toLowerCase();

  // 1. Who is Vithya / Background / Intro
  if (
    q.includes('who is vithya') ||
    q.includes('who are you') ||
    q.includes('tell me about vithya') ||
    q.includes('about vithya') ||
    q.includes('about yourself') ||
    q.includes('introduction') ||
    q.includes('bio')
  ) {
    return {
      text: `Vithya S is an MCA student at Holy Cross College (2025 – 2027) and an aspiring Software Developer. She completed her B.Sc. in Computer Science from Cauvery College for Women with a CGPA of 8.68 / 10. She is passionate about software engineering, backend systems, cloud technologies, and data analytics.`
    };
  }

  // 2. Internships
  if (
    q.includes('internship') ||
    q.includes('experience') ||
    q.includes('isquare') ||
    q.includes('t4teq') ||
    q.includes('innovation')
  ) {
    return {
      text: `Vithya has completed the following internships:\n1. iSquare Data Systems (P) Ltd. – Real-Time Project Assessment (2023)\n2. T4TEQ Software Solutions – Data Analytics, Advanced Excel, Power BI, Python & Libraries (2026)\n3. Innovation & Incubation Hub – Sensor Technology (2025)`
    };
  }

  // 2. Preferred Interests (Exact Match / Variations)
  if (
    q.includes('preferred interest') ||
    q.includes('preferred') ||
    q.includes('ui/ux') ||
    q.includes('prompt engineering') ||
    q.includes('editing')
  ) {
    return {
      text: `Vithya's preferred interests are:\n1. UI/UX Design – User-centered digital interfaces and responsive prototyping.\n2. Prompt Engineering – Context structuring and generative AI workflows.\n3. Editing – Digital media polish and technical documentation structuring.`
    };
  }

  // 3. General Interests
  if (
    q.includes('interest') ||
    q.includes('what is she interested in') ||
    q.includes('passionate') ||
    q.includes('hobbies')
  ) {
    return {
      text: `Vithya is interested in Software Development, Backend Engineering, Data Analytics, Cloud Technologies, and ERP systems, alongside her Preferred Interests in UI/UX Design, Prompt Engineering, and Editing.`
    };
  }

  // 4. Skills & Technologies
  if (
    q.includes('skill') ||
    q.includes('technolog') ||
    q.includes('programming') ||
    q.includes('tools') ||
    q.includes('language') ||
    q.includes('java') ||
    q.includes('python') ||
    q.includes('know')
  ) {
    return {
      text: `Vithya's technical skills include:\n• Programming: Java, Python, C, JavaScript, PHP\n• Tools & Platforms: Power BI, Microsoft Excel, GitHub, MySQL, MS Word, PowerPoint\n• Domains: Relational Databases, Cloud fundamentals, and Data Analytics.`
    };
  }

  // 5. Projects
  if (
    q.includes('project') ||
    q.includes('fuel delivery') ||
    q.includes('citizen connect') ||
    q.includes('work') ||
    q.includes('portfolio work')
  ) {
    return {
      text: `Vithya has developed two featured projects:\n1. Fuel Delivery Management System (PHP, MySQL) – An on-demand logistics portal for fuel order tracking and inventory ledger management.\n2. Citizen Connect (HTML, CSS, JavaScript) – A civic portal for submitting and tracking municipality public service requests.`,
      action: {
        type: 'view_projects',
        label: 'Explore Projects Section'
      }
    };
  }

  // 6. Education / College / Degree / Marks / CGPA
  if (
    q.includes('education') ||
    q.includes('college') ||
    q.includes('degree') ||
    q.includes('cgpa') ||
    q.includes('marks') ||
    q.includes('holy cross') ||
    q.includes('cauvery') ||
    q.includes('mca') ||
    q.includes('b.sc') ||
    q.includes('bsc')
  ) {
    return {
      text: `Vithya's educational details:\n• Postgraduate: Master of Computer Applications (MCA), Holy Cross College (2025 – 2027, Currently Pursuing)\n• Undergraduate: Bachelor of Science in Computer Science (B.Sc. Computer Science), Cauvery College for Women (2022 – 2025, CGPA: 8.68 / 10).`
    };
  }

  // 7. Resume / CV
  if (
    q.includes('resume') ||
    q.includes('cv') ||
    q.includes('download resume') ||
    q.includes('curriculum vitae') ||
    q.includes('see her resume')
  ) {
    return {
      text: `You can view Vithya's complete Curriculum Vitae right here or download it directly as a formatted PDF.`,
      action: {
        type: 'open_resume',
        label: 'Open & Download Resume'
      }
    };
  }

  // 8. Contact & Social Links
  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('phone') ||
    q.includes('reach') ||
    q.includes('hire') ||
    q.includes('github') ||
    q.includes('linkedin') ||
    q.includes('call')
  ) {
    return {
      text: `You can contact Vithya directly via:\n• Email: ${PORTFOLIO_DATA.contact.email}\n• Phone: +91 ${PORTFOLIO_DATA.contact.phone}\n• LinkedIn: linkedin.com/in/${PORTFOLIO_DATA.contact.linkedin}\n• GitHub: github.com/${PORTFOLIO_DATA.contact.github}\n• Location: ${PORTFOLIO_DATA.contact.location}`,
      action: {
        type: 'contact',
        label: 'Go to Contact Section'
      }
    };
  }

  // 9. About the Portfolio / Live Link
  if (
    q.includes('tell me about her portfolio') ||
    q.includes('portfolio') ||
    q.includes('website') ||
    q.includes('deployed') ||
    q.includes('live link')
  ) {
    return {
      text: `This portfolio showcases Vithya S's academic achievements, technical skills, projects, preferred interests (UI/UX Design, Prompt Engineering, Editing), and interactive simulation demos. It is deployed and publicly accessible.`
    };
  }

  // 10. Greetings
  if (q.startsWith('hi') || q.startsWith('hello') || q.startsWith('hey') || q === 'greetings') {
    return {
      text: `Hello! I am Ask Vithya AI, Vithya S's portfolio assistant. I can answer questions about her education, technical skills, internships, projects, resume, or contact details. How can I help you today?`
    };
  }

  // Default Fallback: STRICT requirement
  // "If information is not available, clearly say: “I don't have that information in my portfolio.”"
  return {
    text: `I don't have that information in my portfolio. I can only answer questions regarding Vithya's personal background, education, technical skills, internships, projects, resume, or contact details.`
  };
}
