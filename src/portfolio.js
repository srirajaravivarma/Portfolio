export const portfolio = {
  site: {
    titleSuffix: 'Professional Portfolio',
    description: 'A short search and browser description of your professional work.',
    mobileMenuLabel: 'Open site navigation',
    talkButtonLabel: 'Let’s talk',
    backToTopLabel: 'Go to top',
    backToTopText: 'Go Top',
    navigation: [
      { label: 'About', href: '#about' },
      { label: 'Expertise', href: '#expertise' },
      { label: 'Work', href: '#work' },
      { label: 'Experience', href: '#experience' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  person: {
    name: 'Your Name',
    role: 'Your role',
    specialties: ['Your specialties', 'Your industry', 'Your tools', 'Your approach', 'Your impact'],
    focusLine: 'Your specialties · Your craft · Your impact',
    email: 'your.email@example.com',
    linkedinUrl: 'https://www.linkedin.com/in/your-profile/',
    portrait: {
      src: '/profile-placeholder.svg',
      alt: 'Portrait placeholder for Your Name',
    },
  },
  hero: {
    emphasis: 'Your impact.',
    introduction: 'Introduce yourself, the work you do, and the people or problems you focus on.',
    focusLabel: 'FOCUS',
    workButton: 'Explore my work',
    linkedinButton: 'LinkedIn',
  },
  about: {
    sectionNumber: '01',
    sectionLabel: 'ABOUT',
    heading: ['Thoughtful work.', 'Meaningful outcomes.'],
    lead: 'Introduce your background, areas of focus, and the experience you bring to your work.',
    body: 'Share your approach, strengths, and the kinds of outcomes you help create. Keep this introduction concise and personal to your work.',
  },
  expertise: {
    sectionNumber: '02',
    sectionLabel: 'EXPERTISE',
    accessibleLabel: 'Areas of expertise',
    heading: 'What I work with',
    introduction: 'Highlight the capabilities and tools that are most relevant to your work.',
    viewExperienceLabel: 'View experience',
    items: [
      { title: 'Domain expertise', summary: 'Add your industries, methods and strengths', symbol: '✦', experience: 'Describe a relevant example, your role, and the result.' },
      { title: 'Product & delivery', summary: 'Planning · collaboration · execution', symbol: '◇', experience: 'Describe how you plan work, coordinate people, and deliver outcomes.' },
      { title: 'Automation', summary: 'Add tools and workflows you use', symbol: '↻', experience: 'Describe an automation workflow and the problem it solved.' },
      { title: 'APIs & integration', summary: 'Add platforms, protocols or services', symbol: '{}', experience: 'Describe an integration or API project and your contribution.' },
      { title: 'Data & platforms', summary: 'Add databases, cloud or analytics tools', symbol: '◧', experience: 'Describe how you used data or platforms to support a decision or result.' },
      { title: 'Emerging technology', summary: 'Add AI, research or specialist capabilities', symbol: '✧', experience: 'Describe a recent tool or approach and how you applied it.' },
    ],
  },
  work: {
    sectionNumber: '03',
    sectionLabel: 'WORK',
    heading: 'Selected work',
    introduction: 'Projects that show your process, strengths, and measurable impact.',
    projects: [
      {
        number: '01',
        title: 'Project or initiative name',
        tag: 'Project category',
        description: 'Summarize the challenge, your contribution, the approach, and the outcome. Replace this sample with your own project details.',
        metrics: [
          { value: 'XX+', label: 'Add a measurable result' },
          { value: 'XX%', label: 'Add a second result' },
          { value: 'X to Y', label: 'Describe the improvement' },
        ],
      },
      {
        number: '02',
        title: 'Process improvement',
        tag: 'Operations',
        description: 'Describe a process you improved, who it helped, and how you measured the change.',
        metrics: [
          { value: 'XX+', label: 'People or items reached' },
          { value: 'XX%', label: 'Time or quality change' },
          { value: 'X to Y', label: 'Before and after' },
        ],
      },
      {
        number: '03',
        title: 'Technical delivery',
        tag: 'Technology',
        description: 'Describe a technical project, the decisions you made, and its impact.',
        metrics: [
          { value: 'XX+', label: 'Add a measurable result' },
          { value: 'XX%', label: 'Add a second result' },
          { value: 'X to Y', label: 'Describe the improvement' },
        ],
      },
    ],
  },
  experience: {
    sectionNumber: '04',
    sectionLabel: 'EXPERIENCE',
    entries: [
      {
        period: '20XX - Present',
        role: 'Your current role',
        company: 'Organization name · City',
        bullets: [
          'Describe a responsibility or achievement.',
          'Describe a project, method, or tool you used.',
          'Describe the outcome or value of your work.',
        ],
      },
      {
        period: '20XX - 20XX',
        role: 'Previous role',
        company: 'Previous organization · City',
        bullets: [
          'Describe a responsibility or achievement.',
          'Describe a project, method, or tool you used.',
          'Describe the outcome or value of your work.',
        ],
      },
    ],
  },
  metrics: {
    accessibleLabel: 'Career metrics',
    items: [
      { value: 'XX+', label: 'Years in your field' },
      { value: 'XX+', label: 'Projects or clients' },
      { value: 'XX%', label: 'Improvement you delivered' },
      { value: 'XX', label: 'Another meaningful result' },
    ],
  },
  contact: {
    sectionNumber: '05',
    sectionLabel: 'CONTACT',
    heading: 'Let’s build something',
    emphasis: 'reliable.',
    introduction: 'Write a short invitation to connect about your work, services, or next opportunity.',
  },
};


