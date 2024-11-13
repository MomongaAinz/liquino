import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développeur Web Full Stack",
      icon: web,
    },
    {
      title: "Développeur Mobile React Native",
      icon: mobile,
    },
    {
      title: "Développeur Backend Java",
      icon: backend,
    },
    {
      title: "Créateur de Contenus",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Employé Polyvalent en Restauration",
      company_name: "O'dwich",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Été 2024",
      points: [
        "Préparation hebdomadaire des commandes des clients.",
        "Gestion des approvisionnements et entretien des espaces de travail.",
        "Accueil des clients et encaissement des commandes.",
      ],
    },
    {
      title: "Livreur de Repas à Vélo",
      company_name: "Chaskis",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Septembre 2023",
      points: [
        "Récupération des commandes auprès des restaurants.",
        "Optimisation des trajets pour améliorer la rapidité de livraison.",
        "Livraison rapide aux clients à vélo.",
      ],
    },
  ];

  const experiencesT = [
    {
      title: "Développeur Mobile",
      company_name: "Projet Universitaire (L3)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
        "Réalisation d'une application mobile Android en Kotlin.",
        "Priorité donnée à l'optimisation de l'interface utilisateur et à une intégration fonctionnelle efficace.",
      ],
    },
    {
      title: "Chef de Projet Web",
      company_name: "Projet Universitaire (L2)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Récupération des commandes auprès des restaurants.",
        "Optimisation des trajets pour améliorer la rapidité de livraison.",
        "Livraison rapide aux clients à vélo.",
      ],
    },
    {
      title: " Chef de Projet TIPE",
      company_name: "Projet de Fin d'Études en CPGE (MPSI)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Conduite de recherches universitaires pour la gestion et la prévention des feux de forêt à l'aide de modèles mathématiques basés sur des automates cellulaires.",
        "Optimisation des trajets pour améliorer la rapidité de livraison.",
        " Utilisation de Python et implémentation du Jeu de la Vie et de ses variantes pour simuler la propagation des feux et évaluer des stratégies de prévention.",
      ],
    },
  ];


  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
          "Soon",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
      "Soon",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
      "Soon",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences,experiencesT, testimonials, projects };