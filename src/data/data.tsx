import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import odoo from '../images/portfolio/Odoo.png';
import sae302 from '../images/portfolio/sae302.png';
import vbbox from '../images/portfolio/virtualbox.jpg';
import element from '../images/portfolio/element.png';
import adista from '../images/portfolio/adista.jpg';
import entrepreneur from '../images/portfolio/Entrepreneur-01.jpg';
import profilepic from '../images/photo_sacha.jpg';
import testimonialImage from '../images/portfolio/bg-6.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Portfolio de Sacha Bouton',
  description: "Mon portfolio, pour ma 3ème année de BUT Informatique",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'Introduction',
  About: 'A propos',
  Contact: 'Me contacter',
  Portfolio: 'Mes projets',
  Resume: 'Expérience',
  Skills: 'Mes compétences',
  Stats: 'stats',
  Testimonials: 'Mes compétences',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Je suis Sacha Bouton.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Je m'appelle Sacha, <strong className="text-stone-100">je suis à la recherche d'une alternance de 3 ans </strong> dans le cadre de mon cursus en école d'ingénieur, je suis actuellement étudiant en
        <strong className="text-stone-100"> BUT Informatique</strong> : parcours déploiement d'applications communicantes et sécurisées. Pour appuyer ma démarche, vous pouvez parcourir mon site pour trouver certains projets que j'ai effectué durant mon cursus scolaire.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Actuellement en alternance chez <strong className="text-stone-100">Adista</strong> en tant que <strong className='text-stone-100'>Technicien IT</strong> pour l'année scolaire 2023-2024, j'ai acquis des connaissances fondamentales basées sur le réseau tel que <strong className="text-stone-100">DHCP, BGP, IP/TCP</strong>. Et plus particulièrement dans le monde des opérateurs de services.
        Adista m'a aussi permis de travailler en <strong className="text-stone-100">équipe </strong>, et de me former à la <strong className="text-stone-100"> gestion de projet</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '../assets/cv_fini_ingé.pdf',
      text: 'Mon CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Me contacter',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Je suis autonome, curieux et ambitieux. Durant mon temps libre j'aime lire, écouter de la musique et jouer aux jeux vidéos. Du côté de la pratique sportive j'aime le badminton ainsi que la corde à sauter.`,
  aboutItems: [
    {label: 'Localisation', text: 'Lille / Neuville-en-Ferrain', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationalité', text: 'Français', Icon: FlagIcon},
    {label: 'Intérêts', text: 'Lecture, Musique, Sport, Jeux-vidéo', Icon: SparklesIcon},
    {label: 'Etude', text: 'Université de Lille, IUT-A de Lille', Icon: AcademicCapIcon},
    {label: 'Emploi', text: 'Alternant chez Adista en tant que Technicien IT', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Application de classification',
    description: 'Une application en Java qui se base sur plusieurs algorithmes mathématiques afin de classer différents types de données. La problématique professionnelle est de mettre en place l\'organisation du projet et de créer, en équipe, une application en suivant une démarche de développement itérative et incrémentale. En partant d\'un besoin décrit de manière imprécise ou incomplète par un client, l\'objectif est de clarifier, compléter, collecter et formaliser le besoin, puis de développer une application communicante intégrant la manipulation des données et respectant les paradigmes de qualité (ergonomie des IHM, qualité logicielle…).',
    url: 'https://github.com/Amakatus/classification',
    image: sae302,
  },
  {
    title: 'Déploiement d\'une application',
    description: 'Utilisation de Synapse sur des machines de virtualisation afin d\'y configurer un réseau pour mettre en place Element, un système de chat en ligne',
    url: 'https://github.com/Amakatus/element',
    image: element,
  },
  {
    title: 'Projet d\'entrepreunariat',
    description: 'A partir d\'une idée, le but était d\'entreprendre et créer sa société, en faisant des études de marché, des rapports financiers...',
    url: 'https://documentcloud.wondershare.com/clientShare/review/bpcFVoayn8Msp0rtjRcN4S45NsOxiL4aTf8TEk2Z3M-CkHLO7gENF4oPJxmubKhIhSlnV7jHxGd3jDySaDISiA',
    image: entrepreneur,
  },
  {
    title: 'Mon expérience chez Adista',
    description: 'En tant que Technicien j\'ai pu réaliser des tâches assez importantes tel que l\'automatisation d\'un réseau client grâce à du multi-threading. Ou encore faire des interventions clients afin de réparer leurs équipements réseaux.',
    url: 'https://documentcloud.wondershare.com/clientShare/review/bpcFVoayn8Msp0rtjRcN4U_6Td0k85LSJw14wVHgPJRzBQfEnxmh5rd6ElYSUHIUtmrywahBhH0gZ1ae1A6glA',
    image: adista,
  },
  {
    title: 'Installation de services réseaux',
    description: 'Création de plusieurs machines virtuelles, avec système d\'exploitation au choix. Nous avons choisi d\'utiliser Ubuntu. Cela était un de nos premiers projets, très basique.',
    url: 'https://doc.ubuntu-fr.org/virtualbox',
    image: vbbox,
  },
  {
    title: 'Déployer et sécuriser des services dans un réseau',
    description: 'Mise en place d\'une infrastructure permettant de réaliser l\'hébergement de différents serveurs Odoo pour des clients',
    url: 'https://github.com/Amakatus/odoo-S6',
    image: odoo,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '01/09/2021 - Présent',
    location: 'IUT A de Lille - Site de Villeneuve d\'Ascq',
    title: 'BUT Informatique',
    content: <p>Configuration de systèmes Linux (Debian / Ubuntu). <br />
Gestion des utilisateurs et des droits, partitionnement, configuration des services réseaux (DNS, DHCP..). <br />
Notions de virtualisation et de cloud computing (Ansible, Azure,Terraform, Docker). <br />
Notions d'entreprises (méthode agile, management, gestion de projet). <br />
</p>,
  },
  {
    date: '01/09/2018 - 24/06/2021',
    location: 'EIC - Tourcoing',
    title: 'Baccalauréat',
    content: <p> Mention européenne Assez Bien <br />
    Spécialités Mathématiques et Numérique et Sciences Informatiques<br />
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '17 avril 2023 - 31 août 2024',
    location: 'Adista, Agence de Lille',
    title: 'Apprenti Technicien IT',
    content: (
      <p>
        Préparer et configurer des équipements réseau (routeur, switch,
firewall, équipement de VoIP …). <br />
Participer au déploiement et à la recette des services dans le cadre
de projets. <br />
Intervenir en clientèle dans le cadre de déploiements de services et
accompagner les clients dans la prise en main du matériel. <br />
Élaborer des diagnostiques et résoudre des pannes sur les
équipements clients et cœur de réseau. <br />
Mettre à jour et participer à la rédaction des documents
d’exploitation des services installés en clientèle (outils de
supervision, dossiers clients) <br />
Automatisation des réseaux, en utilisant des scripts (en Python). <br />
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Appris durant mon alternance chez Adista et durant mon BUT Informatique',
      text: 'Je connais différents protocoles de routage, tel que BGP, DHCP, IP/TCP ainsi que RIP. Au long de mon apprentissage, j\'ai pu manipulé différents types d\'équipements réseaux. (Routeur, Switch, Firewall)',
      image: 'https://cdn.pixabay.com/photo/2018/05/08/18/25/internet-3383600_1280.png',
    },
    {
      name: 'Réalisé durant mon cursus en BUT Informatique (3ème année)',
      text: 'Je maitrise plusieurs outils d\'automatisation comme Terraform et Ansible. Je les utilise afin de gagner du temps pour l\'installation de plusieurs machines dans le cadre de mes travaux pratiques.',
      image: 'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/541/formation-terraform.png',
    },
    {
      name: 'Etudié durant mon cursus en BUT Informatique (2ème et 3ème année)',
      text: 'Je sais me servir de plusieurs outils de virtualisation tel que Vagrant et docker suite à la réalisation de projets nécessitant ces outils.',
      image: 'https://gitlab.adullact.net/uploads/-/system/project/avatar/649/Logo-vagrant.png',
    },
    {
      name: 'Mis en oeuvre durant mon cursus en BUT Informatique (3ème année)',
      text: 'Microsoft Azure et Google Cloud Computing sont aussi des services de cloud computing que je maîtrise grâce aux travaux pratiques effectuées en classe',
      image: 'https://academy.qwerio.net/wp-content/uploads/2022/10/Microsoft-Azure.png',
    },
    {
      name: 'Acquis tout au long de ma scolarité',
      text: 'J\'ai acquis certaines compétences transervales durant mon cursus et mon apprentissage tel que la gestion de projet, l\'autonomie. Je possède également un esprit logique qui me permets de m\'adapter et de réagir de façon cohérente aux situations innatendues',
      image: 'https://sms.hypotheses.org/files/2020/03/kjen-fkjnkjnjknj-2-500x437.png',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Me contacter',
  description: 'Si vous avez la moindre question ou si vous êtes intéressé par mon profil, n\'hésitez pas à me joindre :',
  items: [
    {
      type: ContactType.Email,
      text: 'sachabouton@gmail.com',
      href: 'mailto:sachabouton@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Sacha Bouton',
      href: 'https://www.linkedin.com/in/sacha-bouton-09b31a22b/'
    },
    {
      type: ContactType.Location,
      text: 'Neuville-en-Ferrain, France',
      href: 'https://www.google.fr/maps/place/3+Rue+Honor%C3%A9+de+Balzac,+59960+Neuville-en-Ferrain/@50.7518012,3.155858,17z/data=!3m1!4b1!4m6!3m5!1s0x47c32efd24df5aaf:0xbcc3b5fa765fa2!8m2!3d50.7517978!4d3.1584329!16s%2Fg%2F11s66rfdwq?entry=ttu',
    },
    {
      type: ContactType.Github,
      text: 'Amakatus',
      href: 'https://github.com/Amakatus',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Amakatus'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sacha-bouton-09b31a22b/'},
];
