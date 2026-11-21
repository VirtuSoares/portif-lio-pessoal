export type Project = {
  title: string;
  subtitle: string;
  description: string;
  difficulty: "FÁCIL" | "MÉDIO" | "DIFÍCIL" | "ÉPICO";
  stack: string[];
  status: "CONCLUÍDA" | "EM PROGRESSO";
  github?: string;
  deploy?: string;
};

export type SkillCategory = {
  title: string;
  level: number;
  skills: string[];
};

export type Achievement = {
  title: string;
  institution: string;
  year: string;
  type: "formação" | "certificado";
};

export type Hobby = {
  title: string;
  description: string;
};

export const profile = {
  name: "Victor Hugo dos Santos Soares",
  nickname: "VirtuSoares",
  age: 21,
  role: "Desenvolvedor Front-End & Entusiasta de Automação",
  education: [
    "Análise e Desenvolvimento de Sistemas",
    "Engenharia de Software",
  ],
  university: "Universidade CEUMA",
  city: "São Luís, MA",
  work: "Jovem Aprendiz em RH",
};

export const projects: Project[] = [
  {
    title: "Pokédex SPA",
    subtitle: "MISSÃO 001",
    description:
      "Aplicação responsiva para explorar Pokémon, consumir dados da PokéAPI e apresentar informações em uma interface rápida e acessível.",
    difficulty: "MÉDIO",
    stack: ["React 18", "Vite", "Tailwind CSS", "PokéAPI", "Vercel"],
    status: "CONCLUÍDA",
  },
  {
    title: "ILoveRh",
    subtitle: "MISSÃO 002",
    description:
      "Ferramenta client-side para automatizar o merge de PDFs no RH, construída com pdf-lib e uma proposta de uso alinhada à LGPD.",
    difficulty: "DIFÍCIL",
    stack: ["JavaScript", "pdf-lib", "LGPD", "Automação"],
    status: "EM PROGRESSO",
  },
  {
    title: "Conecta Artesanato",
    subtitle: "MISSÃO 003",
    description:
      "Protótipo de startup desenvolvido para o Sebrae Supernova, conectando artesãos locais a oportunidades digitais e consumidores.",
    difficulty: "ÉPICO",
    stack: ["UI/UX", "Figma", "Prototipação", "Sebrae Supernova"],
    status: "CONCLUÍDA",
  },
  {
    title: "Automação Multi-Agente n8n",
    subtitle: "MISSÃO 004",
    description:
      "Pipeline de automação com agentes especializados para processamento de OCR, validação de dados e consolidação de resultados.",
    difficulty: "ÉPICO",
    stack: ["n8n", "OCR", "APIs", "Validação", "Automação"],
    status: "EM PROGRESSO",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-End",
    level: 86,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Back-End & Automação",
    level: 72,
    skills: ["Python", "n8n", "APIs REST", "Git", "GitHub"],
  },
  {
    title: "Design & Ferramentas",
    level: 78,
    skills: ["Figma", "GIMP", "Canva", "Excel"],
  },
];

export const achievements: Achievement[] = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade CEUMA",
    year: "Em andamento",
    type: "formação",
  },
  {
    title: "Engenharia de Software",
    institution: "Universidade CEUMA",
    year: "Em andamento",
    type: "formação",
  },
  {
    title: "Introduction to Data Analytics",
    institution: "IBM / Coursera",
    year: "Concluído",
    type: "certificado",
  },
  {
    title: "The Nuts and Bolts of Machine Learning",
    institution: "Google / Coursera",
    year: "Concluído",
    type: "certificado",
  },
  {
    title: "Build Intelligent Agents Using DeepSeek & N8N",
    institution: "Board Infinity / Coursera",
    year: "Concluído",
    type: "certificado",
  },
  {
    title: "HTML5 e CSS3",
    institution: "Curso em Vídeo",
    year: "Concluído",
    type: "certificado",
  },
];

export const hobbies: Hobby[] = [
  {
    title: "Competitivo & Co-op",
    description:
      "Valorant, League of Legends, Dead by Daylight, Marvel Rivals e Tibia.",
  },
  {
    title: "Jiu-Jitsu Brasileiro",
    description: "Treino e evolução constante pela ZR Team.",
  },
  {
    title: "Leitura",
    description: "Livros físicos, fantasia, ficção científica e desenvolvimento pessoal.",
  },
  {
    title: "Cinema & Cultura Pop",
    description: "Filmes, séries, animações e universos de animes.",
  },
];
