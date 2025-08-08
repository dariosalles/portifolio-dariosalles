import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Dario",
  lastName: "Salles",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer | PHP Laravel | ReactJS | Typescript | Javascript | HTML | CSS | Flutter | Docker | GIT",
  avatar: "/images/avatar.jpg",
  email: "dariosalles@gmail.com",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Português", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Inscreva-se na Newsletter de {person.firstName}</>,
  description: (
    <>
      Eu ocasionalmente escrevo sobre design, tecnologia e compartilho pensamentos sobre a interseção de
      criatividade e engenharia.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Whatsapp",
    icon: "whatsapp",
    link: "https://api.whatsapp.com/send/?phone=5512988262312&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+reuni%C3%A3o+com+voc%C3%AA.&app_absent=0",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dariosalles",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/dariosalles",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dariosalles",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfólio mostrando meu trabalho como ${person.role}`,
  headline: <>Construindo pontes entre design e código</>,
  featured: {
    display: true,
    title: <>Projeto Recente: <strong className="ml-4">Aplicativo Flutter</strong></>,
    href: "/work/aplicativo-agrovivaz",
  },
  subline: (
    <>
      Sou Dario, um desenvolvedor full stack, onde crio experiências de usuário intuitivas e impactantes.
    </>
  ),
};

const about = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Conheça ${person.name}, ${person.role} de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://api.whatsapp.com/send/?phone=5512988262312&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+reuni%C3%A3o+com+voc%C3%AA.&app_absent=0",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Dario Salles é um desenvolvedor full stack apaixonado por construir soluções robustas e escaláveis que conectam a experiência do usuário ao desempenho técnico. Com experiência em tecnologias front-end e back-end, ele cria produtos digitais integrados, tão intuitivos quanto poderosos.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiência Profissional",
    experiences: [
      {
        company: "Apus Soluções em TI",
        timeframe: "2021 - 2025",
        role: "Full Stack Developer",
        achievements: [
          <>
            Projeto EAD - Focado em entregar soluções digitais impactantes por meio da criação de novos recursos e do suporte contínuo aos existentes, ele combina um profundo conhecimento de tecnologias modernas com um compromisso com a estabilidade do código, garantindo que os produtos evoluam sem perder a confiabilidade.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/apus/project-apus01.png",
            alt: "Apus Educacional Home Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/apus/project-apus02.png",
            alt: "Módulo EAD - Tela Inicial do Professor",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/apus/project-apus03.png",
            alt: "Módulo Avaliações",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/apus/project-apus04.png",
            alt: "Módulo Diário do Professor",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "DSXWEB",
        timeframe: "2018 - 2021",
        role: "CEO",
        achievements: [
          <>
            Desenvolvimento de sites, aplicativos, sistemas e gerenciamento de mídias sociais.
          </>,
        ],
        images: [
          {
            src: "/images/projects/dsxweb/project-dsxweb01.png",
            alt: "Website DSXWEB",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/dsxweb/project-dsxweb02.png",
            alt: "Aplicativo Agrovivaz - Flutter",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/dsxweb/project-dsxweb03.png",
            alt: "Aplicativo Gorgonzola Burger - Flutter",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/dsxweb/project-dsxweb06.png",
            alt: "Website Agrovivaz",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Agrocultivo",
        timeframe: "2011 - 2018",
        role: "Full Stack Developer | Marketing | Aux. Administrativo",
        achievements: [
          <>
            Responsável pela criação de toda a identidade visual, gestão das redes sociais e do website.
          </>,
          <>
            Gestão de CRM (emissão de notas fiscais, controle de estoque, etc.).
          </>
        ],
        images: [
          {
            src: "/images/projects/agrocultivo/project-agrocultivo01.png",
            alt: "Agrocultivo",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Estudos e Formação",
    institutions: [
      {
        name: "Etec João Carlos de Araújo - Pindamonhangaba/SP",
        description: <>Análise e Desenvolvimento de Sistemas</>,
      },
      {
        name: "Anhanguera — Taubaté/SP",
        description: <>Ciência da Computação</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas - Top Skills",
    skills: [
      {
        title: "PHP Laravel",
        description: <>Experiência em construir aplicações web escaláveis e APIs RESTful usando a sintaxe elegante e o poderoso ecossistema do Laravel.</>,
        //optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/laravel.png",
            alt: "Laravel",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "React js",
        description: <>Construindo interfaces de usuário dinâmicas e responsivas com React.js, integrando componentes e ferramentas modernas.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/reactjs.png",
            alt: "React JS",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: ".Net (Adquirindo Conhecimento)",
        description: <>Estudando - ecossistema .NET.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/dotnet.jpg",
            alt: ".Net",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Portfólio",
  title: `Projetos – ${person.name}`,
  description: `Projetos de design e desenvolvimento por ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
