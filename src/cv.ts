export enum ContactType {
  WhatsApp,
  Email,
  LinkedIn,
  GitHub,
}

type Contact = {
  type: ContactType;
  title: string;
  logo: string;
  url: string;
};

export enum Language {
  ptBr = 'pt-br',
  enUs = 'en-us',
}

type Experience = {
  startedAt: string;
  finishedAt?: string;
  locatedAt?: Record<Language, string>;
  country: string;
  company: Record<Language, string>;
  role: Record<Language, string>;
  description: Record<Language, string>;
};

type Certification = {
  name: string;
  finishedAt: string;
  country: string;
  issuedBy: string;
  link: string;
  description: Record<Language, string>;
};

type Education = {
  startedAt: string;
  finishedAt: string;
  country: string;
  title: Record<Language, string>;
  issuedBy: string;
  description: Record<Language, string>;
};

type Tech = string;

export type CurriculumVitae = {
  name: string;
  intro: Record<Language, string>;
  role: Record<Language, string>;
  avatarUrl: string;
  contacts: Contact[];
  experiences: Experience[];
  certifications: Certification[];
  education: Education[];
  techs: Tech[];
};

const hightlights = [
  { title: 'First Symfony 4 certificate in Brazil' },
  { title: '16+ years of experience' },
  { title: 'Security & DevOps knowledge' },
];

const cv: CurriculumVitae = {
  name: 'Hallison Boaventura',
  intro: {
    [Language.ptBr]:
      '<p>Um especialista em várias <strong>tecnologias atuais e legadas</strong>, tem <strong>mais de 16 anos</strong> de experiência, trabalhou em <strong>funções relevantes, empresas e agências governamentais</strong> e possui <strong>certificações relevantes</strong>.</p>',
    [Language.enUs]:
      '<p>An expert in various <strong>current and legacy technologies</strong>, has <strong>over 16 years</strong> of experience, has worked in <strong>relevant roles, companies and government agencies</strong> and holds <strong>relevant certifications</strong>.</p>',
  },
  role: {
    [Language.ptBr]: 'Arquiteto de software/dev full cycle',
    [Language.enUs]: 'Software architect/full cycle developer',
  },
  avatarUrl: '/hall.jpeg',
  contacts: [
    {
      type: ContactType.WhatsApp,
      title: '+55 61 9 9431-6006',
      logo: '/whatsapp.svg',
      url: 'https://wa.me/5561994316006',
    },
    {
      type: ContactType.Email,
      title: 'hallisonboaventura@gmail.com',
      logo: '/gmail.svg',
      url: 'mailto:hallisonboaventura@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      title: 'linkedin.com/in/hallboav',
      logo: '/linkedin.svg',
      url: 'https://linkedin.com/in/hallboav',
    },
    {
      type: ContactType.GitHub,
      title: 'github.com/hallboav',
      logo: '/github.svg',
      url: 'https://github.com/hallboav',
    },
  ],
  experiences: [
    {
      startedAt: '2022-01',
      finishedAt: '2023-05',
      country:
        'https://purecatamphetamine.github.io/country-flag-icons/3x2/NL.svg',
      company: {
        [Language.ptBr]: 'Recharge.com',
        [Language.enUs]: 'Recharge.com',
      },
      role: {
        [Language.ptBr]: 'Engenheiro de software',
        [Language.enUs]: 'Software engineer',
      },
      description: {
        [Language.ptBr]: [
          '<p>A Recharge vende cartões virtuais e precisa de páginas modernas para seus sites. Trabalhei na construção da nova arquitetura de frontend e também no desenvolvimento de novas páginas para venda dos produtos virtuais Google Play Card e Apple Gift Card. Recentemente, também reconstruímos a página de checkout.</p>',
          '<p>Além de minhas atribuições iniciais, fiz parte da equipe de recrutamento responsável pela contratação de desenvolvedores frontend seniores com foco em React.js.</p>',
          '<p>Usando as seguintes tecnologias <strong>TypeScript</strong>, <strong>Next.js</strong>, <strong>Datadog</strong>, <strong>Amazon AWS</strong>, <strong>React.js</strong>, <strong>Preact</strong>, <strong>XState</strong>, <strong>Material UI</strong>, <strong>Unleash</strong>, <strong>ahooks</strong>, <strong>Playwright</strong>, <strong>GraphQL</strong>, <strong>React Hook Form</strong>, <strong>Storybook</strong> e outros.</p>',
        ].join(''),
        [Language.enUs]: [
          '<p>Recharge sells virtual cards and needs modern pages for their websites. I worked on the <strong>construction of the new frontend</strong> architecture and also on the development of new pages for selling <strong>Google Play Card</strong> and <strong>Apple Gift Card</strong> virtual products. We recently updated the checkout page as well.</p>',
          '<p>Using the following technologies <strong>TypeScript</strong>, <strong>Next.js</strong>, <strong>React.js</strong>, <strong>XState</strong>, <strong>Material UI</strong>, <strong>Unleash</strong>, <strong>ahooks</strong>, <strong>Playwright</strong>, <strong>GraphQL</strong>, <strong>React Hook Form</strong>, <strong>Storybook</strong>, and others.</p>',
        ].join(''),
      },
    },
    {
      startedAt: '2021-02',
      finishedAt: '2021-12',
      country:
        'https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg',
      locatedAt: {
        [Language.ptBr]: 'Ministério da Cidadania',
        [Language.enUs]: 'Ministry of Citizenship',
      },
      company: {
        [Language.ptBr]: 'Datainfo Soluções em T.I.',
        [Language.enUs]: 'Datainfo Soluções em T.I.',
      },
      role: {
        [Language.ptBr]: 'Arquiteto de software sênior',
        [Language.enUs]: 'Senior software architect',
      },
      description: {
        [Language.ptBr]: [
          '<p>Dois outros arquitetos e eu fazíamos parte da equipe de qualidade. Desenhamos novos sistemas e também mapeamos os sistemas legados e processos de contratos anteriores, para que pudéssemos garantir que tudo estivesse alinhado com nossas expectativas como arquitetos.</p>',
          '<p>Além de minhas atribuições como arquiteto, foi-me confiado a tarefa de desenvolver por completo o sistema <strong>Comida no Prato</strong> do programa Brasil Fraterno; o desenvolvimento demorou pouco mais de um mês e foi um sucesso: 3,8 milhões de pessoas beneficiadas com 73,5 mil toneladas de alimentos.</p>',
          '<p>Lidávamos diariamente com <strong>PHP</strong>, <strong>Java</strong>, <strong>Node.js</strong>, <strong>Laravel</strong>, <strong>Symfony</strong>, <strong>React.js</strong>, <strong>Vue.js</strong>, <strong>Angular</strong>, <strong>OpenShift</strong>, <strong>GitLab</strong>, <strong>Sonatype Nexus</strong>, <strong>Kubernetes</strong>, <strong>SonarQube</strong> e muitas outras tecnologias.</p>',
        ].join(''),
        [Language.enUs]: [
          '<p>Two other architects and I were part of the quality team. We designed new systems and also mapped the legacy systems and processes of previous contracts, so we could ensure everything was aligned with our expectations as architects.</p>',
          '<p>We daily dealt with <strong>PHP</strong>, <strong>Java</strong>, <strong>Node.js</strong>, <strong>Laravel</strong>, <strong>Symfony</strong>, <strong>React.js</strong>, <strong>Vue.js</strong>, <strong>Angular</strong>, <strong>OpenShift</strong>, <strong>GitLab</strong>, <strong>Sonatype Nexus</strong>, <strong>Kubernetes</strong>, <strong>SonarQube</strong>, and a lot of other tech.</p>',
        ].join(''),
      },
    },
    {
      startedAt: '2021-01',
      finishedAt: '2021-02',
      country:
        'https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg',
      locatedAt: {
        [Language.ptBr]: 'Presidência da República Federativa do Brasil',
        [Language.enUs]: 'Presidency of the Federative Republic of Brazil',
      },
      company: {
        [Language.ptBr]: 'Basis Tecnologia da Informação S.A.',
        [Language.enUs]: 'Basis Tecnologia da Informação S.A.',
      },
      role: {
        [Language.ptBr]: 'Desenvolvedor fullstack sênior',
        [Language.enUs]: 'Senior fullstack developer',
      },
      description: {
        [Language.ptBr]: [
          '<p>Elaborei um projeto para melhorar a comunicação entre a Presidência da República e mais de 5.500 municípios. O projeto permite que os municípios solicitem recursos e recebam apoio da Presidência da República, principalmente durante a pandemia da COVID-19.</p>',
          '<p>Usamos <strong>PHP</strong> com <strong>Laravel</strong>, <strong>JavaScript</strong> com <strong>React.js</strong>, <strong>PostgreSQL</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, e outros.</p>',
        ].join(''),
        [Language.enUs]: [
          '<p>I designed a project to improve communication between the Brazilian Presidency and over 5,500 municipalities. The project enables municipalities to request resources and receive support from the Presidency, especially during the COVID-19 pandemic.</p>',
          '<p>We used <strong>PHP</strong> with <strong>Laravel</strong>, <strong>JavaScript</strong> with <strong>React.js</strong>, <strong>PostgreSQL</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, and others.</p>',
        ].join(''),
      },
    },
    {
      startedAt: '2017-12',
      finishedAt: '2020-12',
      country:
        'https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg',
      locatedAt: {
        [Language.ptBr]: 'Ministério das Relações Exteriores do Brasil',
        [Language.enUs]: 'Ministry of Foreign Affairs of Brazil',
      },
      company: {
        [Language.ptBr]: 'Datainfo Soluções em T.I.',
        [Language.enUs]: 'Datainfo Soluções em T.I.',
      },
      role: {
        [Language.ptBr]: 'Analista de sistemas',
        [Language.enUs]: 'Systems analyst',
      },
      description: {
        [Language.ptBr]: [
          '<p>O Itamaraty trabalha com vários sistemas ininterruptos críticos que são acessados por todos os postos e embaixadas brasileiras ao redor do mundo.</p>',
          '<p>Eu estava trabalhando como <strong>arquiteto de software/desenvolvedor</strong> e nós diariamente lidávamos com <strong>PHP</strong>, <strong>Zend Server</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, <strong>Atlassian Bamboo</strong>, <strong>Shell script</strong>, <strong>Selenium</strong>, <strong>JavaScript</strong>, <strong>Symfony</strong>, <strong>Laminas</strong>, <strong>Zend Framework</strong>, <strong>Doctrine</strong>, <strong>PHPUnit</strong>, <strong>PHPStan</strong>, <strong>PostgreSQL</strong>, <strong>Node.js</strong>, <strong>React.js</strong>, <strong>AngularJS</strong>, e outros.</p>',
        ].join(''),
        [Language.enUs]: [
          '<p>The Ministry of Foreign Affairs (Itamaraty) works with several critical nonstop systems that are accessed by all Brazilian posts and embassies around the world.</p>',
          '<p>I was working as a <strong>software architect/developer</strong> and we daily dealt with <strong>PHP</strong>, <strong>Zend Server</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, <strong>Atlassian Bamboo</strong>, <strong>Shell script</strong>, <strong>JavaScript</strong>, <strong>Symfony</strong>, <strong>Laminas</strong>, <strong>Zend Framework</strong>, <strong>Doctrine</strong>, <strong>PHPUnit</strong>, <strong>PHPStan</strong>, <strong>PostgreSQL</strong>, <strong>Node.js</strong>, <strong>React.js</strong>, <strong>AngularJS</strong>, and others.</p>',
        ].join(''),
      },
    },
    {
      startedAt: '2017-11',
      finishedAt: '2017-12',
      country:
        'https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg',
      locatedAt: {
        [Language.ptBr]: 'Tribunal Regional Federal da 1ª Região',
        [Language.enUs]: 'Federal Regional Court from 1st Region',
      },
      company: {
        [Language.ptBr]: 'Engesoftware Tecnologia S.A.',
        [Language.enUs]: 'Engesoftware Tecnologia S.A.',
      },
      role: {
        [Language.ptBr]: 'Engenheiro de software',
        [Language.enUs]: 'Software engineer',
      },
      description: {
        [Language.ptBr]: [
          '<p>Escrevi alguns documentos sobre o novo processo de versionamento de código e CI/CD, realizei algumas reuniões e também ajustei alguns scripts PHP de sistemas legados TRF1. Fiz parte dessa equipe apenas um mês, pois recebi uma proposta para trabalhar no Itamaraty.</p>',
          '<p>Tive contato com bancos de dados <strong>Oracle</strong>, <strong>testes automatizados</strong>, <strong>JavaScript</strong>, <strong>React Native</strong> e <strong>PHP</strong> com <strong>Laravel</strong>, etc.</p>',
          '<br />',
          '<br />',
          '<br />',
          '<br />',
          '<br />',
          '<br />',
          '<br />',
          '<br />',
        ].join(''),
        [Language.enUs]:
          '<p>I wrote some documents about the new code versioning process and CI/CD, held some meetings, and also tweaked some PHP scripts from legacy TRF1 systems. I was part of this team for only a month, as I received a proposal to work at the Ministry of Foreign Affairs (Itamaraty).</p>',
      },
    },
    {
      startedAt: '2015-06',
      finishedAt: '2017-06',
      country:
        'https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg',
      company: {
        [Language.ptBr]: 'OGASEC (Antiga Aker Security Solutions)',
        [Language.enUs]: 'OGASEC (Former Aker Security Solutions)',
      },
      role: {
        [Language.ptBr]: 'Desenvolvedor',
        [Language.enUs]: 'Developer',
      },
      description: {
        [Language.ptBr]: [
          '<p>Desenhei e desenvolvi um software PHP (CLI) com Symfony Console Component e outros componentes Symfony para criar relatórios personalizados de logs do Aker Firewall, recebidos via Syslog e armazenados em MongoDB. Além disso, atuei na manutenção do código, com foco em segurança, desempenho e qualidade, utilizando GitLab para o gerenciamento e Jenkins para integração contínua. Também redigi documentos técnicos e liderei uma equipe de dois estagiários e um desenvolvedor PHP de nível médio por dois meses antes de o projeto ser integrado a outro maior.</p>',
          '<p>Algumas tecnologias que usávamos com frequência <strong>PHP</strong>, <strong>C</strong>, <strong>Zend</strong>, <strong>Symfony</strong>, <strong>AngularJS</strong>, <strong>jQuery</strong>, <strong>Doctrine</strong>, <strong>Propel</strong>, <strong>GitLab</strong>, <strong>Jenkins</strong>, <strong>PHPMD</strong>, <strong>PHPLOC</strong>, <strong>PHPCPD</strong>, <strong>PHPCBF</strong>, <strong>Phing</strong>, <strong>Selenium</strong>, <strong>Apache Ant</strong>, <strong>MongoDB</strong>, <strong>MariaDB</strong>, <strong>SQLite</strong>, <strong>PHPUnit</strong>, <strong>Laravel</strong>, <strong>Node.js</strong>, <strong>expressões regulares</strong>, <strong>Syslog</strong>, <strong>Linux</strong> e muitas outras.</p>',
        ].join(''),
        [Language.enUs]: [
          '<p>I designed the architecture and coded a PHP (CLI) software using the Symfony Console Component and other Symfony components. That software was used to generate highly customizable reports of logs (which were received via Syslog and stored in MongoDB) from Aker Firewall.</p>',
          '<p>I was one of those responsible for maintaining the code (software maintainer/code reviewer), mainly analyzing the security, performance, and quality of the code, besides other not less important details. Everything was managed through GitLab. We used Jenkins for continuous integration.</p>',
          '<p>I wrote technical documents, like project charter, project definition, and project statement. I managed a team of two interns and a mid-level PHP developer for two months, then the project was merged with a larger one, where I stopped managing.</p>',
        ].join(''),
      },
    },
    {
      startedAt: '2011-04',
      finishedAt: '2015-05',
      country:
        'https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg',
      company: {
        [Language.ptBr]: 'Listadaqui (empreendedorismo)',
        [Language.enUs]: 'Listadaqui (entrepreneurship)',
      },
      role: {
        [Language.ptBr]: 'Desenvolvedor',
        [Language.enUs]: 'Developer',
      },
      description: {
        [Language.ptBr]: [
          '<p>O sistema tinha em seu banco de dados o cadastro de todas as pequenas, médias e grandes empresas da cidade, e também dos autônomos, mas quem assinou o diamante, ouro, ou o plano prata pode aparecer em posições melhores na página de resultados de pesquisa do sistema e pode ter páginas personalizadas. O sistema era uma espécie de guia comercial.</p>',
          '<p>As principais tecnologias usadas foram <strong>PHP</strong>, <strong>MySQL</strong> e <strong>AngularJS</strong>.</p>',
        ].join(''),
        [Language.enUs]: [
          '<p>Listadaqui was a system I developed (using PHP, MySQL, and AngularJS) and worked on it for a few years. An adventure in entrepreneurship.</p>',
          "<p>The system had in its database the record of all small, medium, and large companies in the city, and also of the self-employed ones, but those who signed the diamond, gold, or silver plan could appear in better positions on the system's search results page and could have personalized pages. The system was a kind of commercial guide.</p>",
        ].join(''),
      },
    },
    {
      startedAt: '2012-01',
      finishedAt: '2013-01',
      country:
        'https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg',
      company: {
        [Language.ptBr]: 'UNIP - Universidade Paulista',
        [Language.enUs]: 'UNIP - Universidade Paulista',
      },
      role: {
        [Language.ptBr]: 'Aprendiz em ciência da computação',
        [Language.enUs]: 'Apprentice in computer science',
      },
      description: {
        [Language.ptBr]: [
          '<p>Além de todas as disciplinas do curso de informática, eu programava coisas como: páginas PHP usando extensão cURL para fins de crawling/scraping; bot, usando API C e WIN32, para um jogo (Tibia) que eu costumava jogar; keyloggers, trojans, shells PHP e outros softwares relacionados à segurança para fins de aprendizagem; controlar a energia elétrica da minha casa: ligar e desligar tomadas e lâmpadas, etc.</p>',
        ].join(''),
        [Language.enUs]:
          '<p>In addition to all the subjects of the computer science course, I used to program things like:</p><ul><li>PHP pages using cURL extension for crawling purposes</li><li>Bot, using C and WIN32 API, for a game (Tibia) that I used to play</li><li>Keyloggers, Trojans, PHP shells, and other security-related software for learning purposes</li><li>Control the electric energy of my house: turning on and off power plugs and lamps, etc.</li></ul>',
      },
    },
  ],
  certifications: [
    {
      name: 'Symfony 4 certified developer (SF4CE)',
      finishedAt: '2018-06',
      country:
        'https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg',
      issuedBy: 'SensioLabs',
      link: 'https://connect.symfony.com/profile/hallisonboaventura',
      description: {
        [Language.ptBr]:
          '<p>Palestrei no primeiro Symfony Live no Brasil: <a href="https://twitter.com/symfony_live/status/1129092704527441920">https://twitter.com/symfony_live/status/1129092704527441920</a></p>',
        [Language.enUs]:
          '<p>I spoke at the very first Symfony Live in Brazil: <a href="https://twitter.com/symfony_live/status/1129092704527441920">https://twitter.com/symfony_live/status/1129092704527441920</a></p>',
      },
    },
    {
      name: 'Zend certified engineer (ZCE)',
      finishedAt: '2018-11',
      country:
        'https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg',
      issuedBy: 'Rogue Wave Software',
      link: 'https://www.zend-zce.com/en/yellow-pages/ZEND031499',
      description: {
        [Language.ptBr]:
          '<p>Essa certificação me fez querer aprender como o PHP funciona internamente, para depois estudar como funciona o Zend Engine.</p>',
        [Language.enUs]:
          '<p>This certification made me want to learn how PHP works internally, then study how Zend Engine works.</p>',
      },
    },
    {
      name: 'Web developer',
      finishedAt: '2009-11',
      country:
        'https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg',
      issuedBy: 'eibneti',
      link: 'https://eibneti.com.br/cursos-eibneti/php-c-mysql-oo/',
      description: {
        [Language.ptBr]:
          '<p>Meu trabalho de conclusão de curso foi o melhor da turma de aprox. trinta alunos.</p>',
        [Language.enUs]:
          '<p>My course completion work was the best in the class of approximately thirty students.</p>',
      },
    },
  ],
  education: [
    {
      startedAt: '2008',
      finishedAt: '2016',
      country:
        'https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg',
      title: {
        [Language.ptBr]: 'Bacharel em ciência da computação',
        [Language.enUs]: 'Bachelor of computer science',
      },
      issuedBy: 'UNIP - Universidade Paulista',
      description: {
        [Language.ptBr]:
          '<p>Eu queria aprender a manipular dados, trafegá-los, entender algoritmos e como os processadores funcionam, mas aprendi muito mais.</p>',
        [Language.enUs]:
          '<p>I wanted to learn how to manipulate data, traffic it, understand algorithms, and how processors work, but I learned a lot more.</p>',
      },
    },
  ],
  techs: [
    'Amazon (AWS)',
    'Angular',
    'AngularJS',
    'Apache HTTPD',
    'API Platform',
    'API Tools',
    'Apigility',
    'AVR (microcontroller)',
    'Bamboo',
    'C',
    'Composer',
    'Datadog',
    'Docker',
    'Doctrine',
    'ESLint',
    'Expo',
    'Git',
    'GitHub actions',
    'GitLab',
    'Google Lighthouse',
    'GraphQL',
    'HashiCorp Vault',
    'Java',
    'JavaScript',
    'Jest',
    'Jira',
    'Kubernetes',
    'Laminas',
    'Laravel',
    'Linux',
    'MariaDB',
    'Material UI',
    'MongoDB',
    'NativeBase',
    'Next.js',
    'Nginx',
    'Node.js',
    'OpenShift (OKD)',
    'PHP Internals',
    'PHP',
    'PHPStan',
    'PHPUnit',
    'Playwright',
    'PostgreSQL',
    'Preact',
    'Puppeteer',
    'Python',
    'RabbitMQ',
    'React Native',
    'React.js',
    'Redux',
    'Selenium',
    'Sentry',
    'Shell script',
    'SonarQube',
    'Sonatype Nexus',
    'SQLite',
    'Storybook',
    'Symfony',
    'Taiga',
    'Taiga',
    'TypeScript',
    'Unleash',
    'Webpack',
    'XState',
    'Zend Framework',
    'Zigbee',
  ],
};

export default cv;
