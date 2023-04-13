type Contact = {
  type: 'whatsapp' | 'email' | 'linkedin' | 'github';
  title: string;
  logo: string;
  url: string;
};

type Experience = {
  startedAt: string;
  finishedAt?: string;
  locatedAt?: string;
  country: string;
  company: string;
  role: string;
  description: string;
};

type Certification = {
  name: string;
  finishedAt: string;
  country: string;
  issuedBy: string;
  link: string;
  description: string;
};

type Education = {
  startedAt: string;
  finishedAt: string;
  country: string;
  title: string;
  issuedBy: string;
  description: string;
};

type Tech = string;

export type CurriculumVitae = {
  name: string;
  intro: string;
  role: string;
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
  intro:
    '<p>An expert in various <strong>current and legacy technologies</strong>, has <strong>over 16 years</strong> of experience, has worked in <strong>relevant roles, companies and government agencies</strong> and holds relevant <strong>certifications</strong>.</p>',
  role: 'Software architect/full cycle developer',
  avatarUrl: '/hall.jpeg',
  contacts: [
    {
      type: 'whatsapp',
      title: '+31 6 26 67 53 53',
      logo: '/whatsapp.svg',
      url: 'https://wa.me/31626675353',
    },
    {
      type: 'email',
      title: 'hallisonboaventura@gmail.com',
      logo: '/gmail.svg',
      url: 'mailto:hallisonboaventura@gmail.com',
    },
    {
      type: 'linkedin',
      title: 'linkedin.com/in/hallboav',
      logo: '/linkedin.svg',
      url: 'https://linkedin.com/in/hallboav',
    },
    {
      type: 'github',
      title: 'github.com/hallboav',
      logo: '/github.svg',
      url: 'https://github.com/hallboav',
    },
  ],
  experiences: [
    {
      startedAt: '2022-01',
      finishedAt: '2023-05',
      country: '🇳🇱',
      company: 'Recharge.com',
      role: 'Software engineer',
      description:
        '<p>Recharge sells virtual cards and needs modern pages for their websites. I worked on the <strong>construction of the new frontend</strong> architecture and also on the development of new pages for selling <strong>Google Play Card</strong> and <strong>Apple Gift Card</strong> virtual products. We recently updated the checkout page as well.</p><p>Using the following technologies <strong>TypeScript</strong>, <strong>Next.js</strong>, <strong>React.js</strong>, <strong>XState</strong>, <strong>Material UI</strong>, <strong>Unleash</strong>, <strong>ahooks</strong>, <strong>Playwright</strong>, <strong>GraphQL</strong>, <strong>React Hook Form</strong>, <strong>Storybook</strong>, and others.</p>',
    },
    {
      startedAt: '2021-02',
      finishedAt: '2021-12',
      country: '🇧🇷',
      locatedAt: 'Ministry of Citizenship',
      company: 'Datainfo Soluções em T.I.',
      role: 'Senior software architect',
      description:
        '<p>Two other architects and I were part of the quality team. We designed new systems and also mapped the legacy systems and processes of previous contracts, so we could ensure everything was aligned with our expectations as architects.</p><p>We daily deal with <strong>PHP</strong>, <strong>Java</strong>, <strong>Node.js</strong>, <strong>Laravel</strong>, <strong>Symfony</strong>, <strong>React.js</strong>, <strong>Vue.js</strong>, <strong>Angular</strong>, <strong>OpenShift</strong>, <strong>GitLab</strong>, <strong>Sonatype Nexus</strong>, <strong>Kubernetes</strong>, <strong>SonarQube</strong>, and a lot of other tech.</p>',
    },
    {
      startedAt: '2021-01',
      finishedAt: '2021-02',
      country: '🇧🇷',
      locatedAt: 'Presidency of the Federative Republic of Brazil',
      company: 'Basis Tecnologia da Informação S.A.',
      role: 'Senior fullstack developer',
      description: [
        '<p>I designed a project to improve communication between the Brazilian Presidency and over 5,500 municipalities. The project enables municipalities to request resources and receive support from the Presidency, especially during the COVID-19 pandemic.</p>',
        '<p>We used <strong>PHP</strong> with <strong>Laravel</strong>, <strong>JavaScript</strong> with <strong>React.js</strong>, <strong>PostgreSQL</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, and others.</p>',
      ].join(''),
    },
    {
      startedAt: '2017-12',
      finishedAt: '2020-12',
      country: '🇧🇷',
      locatedAt: 'Ministry of Foreign Affairs of Brazil',
      company: 'Datainfo Soluções em T.I.',
      role: 'Systems analyst',
      description:
        '<p>The Ministry of Foreign Affairs (Itamaraty) works with several critical nonstop systems that are accessed by all Brazilian posts and embassies around the world.</p><p>I was working as a <strong>software architect/developer</strong> and we daily dealed with <strong>PHP</strong>, <strong>Zend Server</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, <strong>Atlassian Bamboo</strong>, <strong>Shell script</strong>, <strong>JavaScript</strong>, <strong>Symfony</strong>, <strong>Laminas</strong>, <strong>Zend Framework</strong>, <strong>Doctrine</strong>, <strong>PHPUnit</strong>, <strong>PHPStan</strong>, <strong>PostgreSQL</strong>, <strong>Node.js</strong>, <strong>React.js</strong>, <strong>AngularJS</strong>, and others.</p>',
    },
    {
      startedAt: '2017-11',
      finishedAt: '2017-12',
      country: '🇧🇷',
      locatedAt: 'Federal Regional Court from 1st Region',
      company: 'Engesoftware Tecnologia S.A.',
      role: 'Software engineer',
      description:
        '<p>I wrote some documents about the new code versioning process and CI/CD, held some meetings, and also tweaked some PHP scripts from legacy TRF1 systems. I was part of this team for only a month, as I received a proposal to work at the Ministry of Foreign Affairs (Itamaraty).</p>',
    },
    {
      startedAt: '2015-06',
      finishedAt: '2017-06',
      country: '🇧🇷',
      company: 'OGASEC (Former Aker Security Solutions)',
      role: 'Developer',
      description:
        '<p>I designed the architecture and coded a PHP (CLI) software using the Symfony Console Component and other Symfony components. That software was used to generate highly customizable reports of logs (which were received via Syslog and stored in MongoDB) from Aker Firewall.</p><p>I was one of those responsible for maintaining the code (software maintainer/code reviewer), mainly analyzing the security, performance, and quality of the code, besides other not less important details. Everything was managed through GitLab. We used Jenkins for continuous integration.</p><p>I wrote technical documents, like project charter, project definition, and project statement. I managed a team of two interns and a mid-level PHP developer for two months, then the project was merged with a larger one, where I stopped managing.</p>',
    },
    {
      startedAt: '2013-04',
      finishedAt: '2015-05',
      country: '🇧🇷',
      company: 'ListaDaqui (entrepreneurship)',
      role: 'Developer',
      description:
        "<p>Listadaqui was a system I developed (using PHP, MySQL, and AngularJS) and worked on it for a few years. An adventure in entrepreneurship.</p><p>The system had in its database the record of all small, medium, and large companies in the city, and also of the self-employed ones, but those who signed the diamond, gold, or silver plan could appear in better positions on the system's search results page and could have personalized pages. The system was a kind of commercial guide.</p>",
    },
    {
      startedAt: '2012-01',
      finishedAt: '2013-01',
      country: '🇧🇷',
      company: 'UNIP - Universidade Paulista',
      role: 'Apprentice in computer science',
      description:
        '<p>In addition to all the subjects of the computer science course, I used to program things like:</p><ul><li>PHP pages using cURL extension for crawling purposes</li><li>Bot, using C and WIN32 API, for a game (Tibia) that I used to play</li><li>Keyloggers, Trojans, PHP shells, and other security-related software for learning purposes</li><li>Control the electric energy of my house: turning on and off power plugs and lamps, etc.</li></ul>',
    },
  ],
  certifications: [
    {
      name: 'Symfony 4 certified developer (SF4CE)',
      finishedAt: '2018-06',
      country: '🌍',
      issuedBy: 'SensioLabs',
      link: 'https://connect.symfony.com/profile/hallisonboaventura',
      description:
        '<p>I spoke at the very first Symfony Live in Brazil: <a href="https://twitter.com/symfony_live/status/1129092704527441920">https://twitter.com/symfony_live/status/1129092704527441920</a></p>',
    },
    {
      name: 'Zend certified engineer (ZCE)',
      finishedAt: '2018-11',
      country: '🌍',
      issuedBy: 'Rogue Wave Software',
      link: 'https://www.zend-zce.com/en/yellow-pages/ZEND031499',
      description:
        '<p>This certification made me want to learn how PHP works internally, then studied a little how Zend Engine works.</p>',
    },
    {
      name: 'Web developer',
      finishedAt: '2009-11',
      country: '🇧🇷',
      issuedBy: 'eibneti',
      link: 'https://eibneti.com.br/cursos-eibneti/php-c-mysql-oo/',
      description:
        '<p>My course completion work was the best in the class of approximately 30 students.</p>',
    },
  ],
  education: [
    {
      startedAt: '2008',
      finishedAt: '2016',
      country: '🇧🇷',
      title: 'Bachelor of computer science',
      issuedBy: 'UNIP - Universidade Paulista',
      description:
        '<p>I wanted to learn how to manipulate data, traffic it, understand algorithms, and how processors work, but I learned a lot more.</p>',
    },
  ],
  techs: [
    'Amazon',
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
    'Python',
    'RabbitMQ',
    'React Native',
    'React.js',
    'Redux',
    'Sentry',
    'Shell script',
    'SonarQube',
    'Sonatype Nexus',
    'SQLite',
    'Storybook',
    'Symfony',
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
