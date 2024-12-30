import { useState } from 'react';
import React from 'react';
// Import the icon components
import { Cpu, Building, Users, Rocket, Lightbulb,CreditCard,CircleUserRound,Handshake,HandCoins  } from 'lucide-react'; // Import specific icons
import './index.css'
import { jsPDF } from 'jspdf';

const cardsData = [
  {
    title: "ADD (Agence de Développement Digital)",
    Catégorie: "Digitalisation",
    Services: "Accompagnement numérique, formation, financement",
    Type: "Agence publique",
    Cibles: "Startups, PME, entrepreneurs",
    Couverture: "Nationale",
    Siteweb: "https://www.add.gov.ma",
    content: "Soutient l'entrepreneuriat au Maroc en promouvant la transformation numérique des entreprises, notamment des startups et des PME.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    icon: Cpu,
    Contributions: {
      "Accompagnement des entrepreneurs :": [
        "Programmes pour intégrer les outils numériques dans leurs projets.",
        "Appui technique pour développer des solutions digitales."
      ],
      "Formation et sensibilisation :": [
        "Ateliers et formations sur la transformation digitale et les technologies émergentes."
      ],
      "Incubation et innovation :": [
        "Soutien aux startups technologiques via des partenariats avec des incubateurs et accélérateurs."
      ],
      "Soutien financier :": [
        "Aide à mobiliser des financements pour les projets numériques et innovants."
      ]
    },
    Avantages: [
      "Formation gratuite sur les outils numériques",
      "Accès à des appels d'offres publics liés à la transformation numérique",
      "Focalisé sur la digitalisation",
      "Soutien technique et financier",
      "Programmes adaptés aux tendances numériques actuelles",
      "Accès à des formations en compétences numériques avancées"
    ],
    Inconvénients: [
      "Limité aux entreprises prêtes pour la transformation numérique",
      "Processus administratifs complexes",
      "Faible visibilité pour les entreprises situées en zones rurales",
      "Les résultats dépendent fortement de la volonté d'adopter le numérique"
    ],
    CommentPostuler: [
      "Créer un compte sur le site officiel : https://www.add.gov.ma",
      "Consulter les appels à projets disponibles pour sélectionner ceux alignés avec vos objectifs",
      "Télécharger et remplir le dossier de candidature avec tous les documents requis, comme les statuts de l’entreprise et le business plan",
      "Participer aux sessions d’information pour mieux comprendre les critères de sélection",
      "Suivre le processus via le tableau de bord personnel"
    ]
  },
  {
    title: "Maroc PME",
    Catégorie: "Développement des PME",
    Services: "Le déploiement des programmes se fait à travers la consultance locale et les associations spécialisées. Appui technique à la croissance et développement des TPMEs...",
    Type: "Technique , Financier",
    Cibles: "TPE et PME en phase d'amorçage et développement du secteur industriel ,Auto-entrepreneurs",
    Couverture: "Nationale",
    Siteweb: "https://www.marocpme.gov.ma",
    content: "Une agence nationale marocaine dédiée au développement des Petites et Moyennes Entreprises (PME).",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    icon: Building,
    Contributions: {
      "Accompagnement à la croissance industrielle :": [
        "Support pour l'amélioration des processus industriels.",
        "Programmes dédiés à la mise en place de solutions technologiques."
      ],
      "Consultance locale et formation :": [
        "Accompagnement des entrepreneurs pour renforcer leurs compétences techniques et managériales.",
        "Formations sur la gestion des finances et la structuration d'entreprises."
      ],
      "Soutien à l'innovation :": [
        "Aide à l'innovation dans les processus de production et dans le développement de nouveaux produits."
      ]
    },
    Avantages: [
      "Appui financier généreux",
      "Encadrement pour les entrepreneurs",
      "Forte expertise dans l'accompagnement de la croissance industrielle",
      "Accès à des consultants locaux expérimentés",
      "Subventions pour l'amélioration des processus et l'innovation"
    ],
    Inconvénients: [
      "Critères d'éligibilité stricts",
      "Concurrence élevée pour les subventions",
      "Délais d'approbation des projets parfois longs",
      "Ressources limitées pour les auto-entrepreneurs hors secteurs industriels"
    ],
    CommentPostuler: [
      "Créer un compte utilisateur sur : https://www.marocpme.gov.ma",
      "Préparer un plan stratégique clair avec des projections financières",
      "Soumettre un dossier complet contenant des preuves de votre éligibilité, comme des états financiers récents ou un extrait du registre de commerce",
      "Attendre la confirmation de l’éligibilité par email",
      "Travailler avec un consultant dédié pour affiner votre projet avant sa validation"
    ]
  },
  {
    title: "ANAPEC",
    Catégorie: "Emploi et entrepreneuriat",
    Services: "Orientation entrepreneuriale, accompagnement à l'élaboration de business plan...",
    Type: "Technique",
    Cibles: "Tout porteur de projets",
    Couverture: "Nationale",
    Siteweb: "https://www.anapec.org",
    content: "Agence Nationale de Promotion de l'Emploi et des Compétences.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    icon: Users,
    Contributions: {
      "Accompagnement à l'emploi :": [
        "Conseils et orientation vers des opportunités d'emploi.",
        "Aide pour l'élaboration du business plan et la recherche de financement."
      ],
      "Formation pour l'insertion professionnelle :": [
        "Programmes pour améliorer l'employabilité des jeunes diplômés.",
        "Formations professionnelles ciblées pour les demandeurs d'emploi."
      ]
    },
    Avantages: [
      "Accompagnement administratif",
      "Réseau national développé",
      "Programmes diversifiés pour l'emploi et l'entrepreneuriat",
      "Accès à un large réseau d'entreprises partenaires",
      "Accès à des stages pour les jeunes diplômés",
      "Assistance pour établir des liens avec des investisseurs"
    ],
    Inconvénients: [
      "Orienté principalement vers l'emploi",
      "Moins de soutien financier direct",
      "Processus bureaucratiques parfois longs",
      "Manque de suivi personnalisé après l'accompagnement initial",
      "Moins de ressources pour les porteurs de projets sans expérience professionnelle",
      "Certaines formations sont payantes ou nécessitent un financement personnel"
    ],
    CommentPostuler: [
      "Créer un compte candidat via https://www.anapec.org",
      "Assurez-vous d’avoir un CV actualisé et des documents comme une carte d’identité",
      "Inscrivez-vous aux formations en ligne disponibles sur leur plateforme",
      "Prenez rendez-vous avec un conseiller pour un suivi individualisé de votre dossier",
      "Présentez un business plan structuré, accompagné de données de marché pour valider votre projet"
    ]
  },
  {
    title: "212 Founders",
    Catégorie: "Startups",
    Services: "Financement, mentorat, ressources",
    Type: "Programme d'accompagnement",
    Cibles: "Startups marocaines",
    Couverture: "Nationale",
    Siteweb: "https://www.212founders.ma",
    content: "Programme d'accompagnement pour les startups marocaines.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
    icon: Rocket,
    Contributions: {
      "Mentorat pour startups :": [
        "Accompagnement stratégique et technique pour les entrepreneurs.",
        "Soutien dans le développement de produits et la structuration d'équipe."
      ],
      "Accès à des financements :": [
        "Mise en relation avec des investisseurs nationaux et internationaux.",
        "Conseils sur la levée de fonds et la gestion des financements."
      ],
      "Formation et développement des compétences :": [
        "Séances de formation sur la gestion d'entreprise, le marketing digital, et la finance."
      ]
    },
    Avantages: [
      "Financement accessible",
      "Mentorat de qualité",
      "Accès à un réseau international d'investisseurs",
      "Focus sur l'innovation technologique",
      "Accès à des espaces de coworking modernes",
      "Formation spécialisée pour optimiser la levée de fonds"
    ],
    Inconvénients: [
      "Limité aux startups",
      "Compétition forte pour l'admission",
      "Processus de candidature exigeant",
      "Programmes intensifs nécessitant une forte implication",
      "Durée du programme parfois trop courte pour certains projets",
      "Forte pression pour atteindre des objectifs en un temps limité"
    ],
    CommentPostuler: [
      "Créez un compte sur : https://www.212founders.ma",
      "Téléchargez un template de business plan fourni sur le site",
      "Préparez une vidéo de présentation pour expliquer votre idée",
      "Participez aux sessions d'évaluation préliminaires organisées par l’équipe",
      "En cas de présélection, suivez les ateliers préparatoires avant la phase finale de sélection"
    ]
  },
  {
    title: "Intelaka",
    Catégorie: "Programme d'appui financier et entrepreneurial",
    Services: "Financement des projets, accompagnement des entrepreneurs, formations",
    Type: "Programme gouvernemental",
    Cibles: "Jeunes entrepreneurs, porteurs de projets, TPE (Très Petites Entreprises)",
    Couverture: "Maroc",
    Siteweb: "https://www.intelaka.ma",
    content: "Intelaka est une initiative marocaine visant à promouvoir l'entrepreneuriat, en offrant des solutions de financement adaptées, des formations et un accompagnement personnalisé pour la création et le développement des entreprises.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    icon: CreditCard,
    Contributions: {
      "Financement": [
        "Prêts à taux préférentiels",
        "Subventions pour les jeunes entrepreneurs"
      ],
      "Accompagnement": [
        "Suivi personnalisé",
        "Sessions de formation et de coaching"
      ]
    },
    Avantages: [
        "Accès à des prêts avec des taux d'intérêt réduits",
        "Soutien personnalisé pour les porteurs de projets",
        "Renforcement des compétences entrepreneuriales"
    ],
    Inconvénients: [
        "Critères d'éligibilité parfois restrictifs",
        "Difficulté d'accès pour certains secteurs spécifiques"
    ],
    CommentPostuler: [
        "Préparer un business plan détaillé",
        "Se rendre auprès d'une agence partenaire (banques, institutions affiliées)",
        "Soumettre une demande via le site officiel ou en agence"
    ]
}
,
  {
    title: "FORSA",
    Catégorie: "Entrepreneuriat et financement",
    Services: "Soutien financier, accompagnement, financement de projets",
    Type: "Programme public",
    Cibles: "Jeunes entrepreneurs, porteurs de projets",
    Couverture: "Nationale",
    Siteweb: "https://www.forsa.ma",
    content: "Programme de financement pour les jeunes entrepreneurs et porteurs de projets au Maroc.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80",
    icon: Handshake,
    Contributions: {
      "Soutien financier direct :": [
        "Financement pour la création de projets innovants.",
        "Aide au financement de projets via des prêts à taux avantageux."
      ],
      "Accompagnement au développement de projets :": [
        "Mentorat et coaching pour le développement des projets.",
        "Aide à la structuration du business plan et à la mise en œuvre."
      ],
      "Accès à des partenaires financiers :": [
        "Mise en relation avec des investisseurs nationaux et internationaux."
      ]
    },
    Avantages: [
      "Financement à taux réduit",
      "Accompagnement personnalisé",
      "Accès à un réseau d'experts et d'investisseurs",
      "Subventions pour les jeunes porteurs de projets",
      "Soutien à l'innovation et à la création d'emplois"
    ],
    Inconvénients: [
      "Processus de sélection compétitif",
      "Durée des financements limitée à certains projets",
      "Critères stricts d'éligibilité",
      "Délais administratifs pour le décaissement des fonds"
    ],
    CommentPostuler: [
      "Visitez le site : https://www.forsa.ma",
      "Créez un compte et soumettez votre dossier de candidature",
      "Assurez-vous de respecter les critères d'éligibilité et préparez un business plan solide",
      "Attendez la sélection et la validation de votre dossier",
      "Participez à des sessions d'accompagnement proposées par FORSA"
    ]
  },
  {
    title: "INDH (Initiative Nationale pour le Développement Humain)",
    Catégorie: "Développement local",
    Services: "Soutien à l'entrepreneuriat, développement local, aide sociale",
    Type: "Programme public",
    Cibles: "Communautés locales, jeunes, femmes, entrepreneurs",
    Couverture: "Nationale",
    Siteweb: "https://www.indh.ma",
    content: "L'Initiative Nationale pour le Développement Humain soutient les projets sociaux et économiques pour le développement des communautés locales.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    icon: CircleUserRound,
    Contributions: {
      "Soutien aux initiatives locales :": [
        "Financement et soutien aux projets de développement communautaire.",
        "Accompagnement à la création d'entreprises sociales et solidaires."
      ],
      "Formation et développement des compétences :": [
        "Programmes de formation pour les jeunes et les femmes.",
        "Ateliers de renforcement des compétences en gestion de projets."
      ],
      "Soutien à l'insertion professionnelle :": [
        "Aide à l'insertion des jeunes et des femmes dans le marché du travail."
      ]
    },
    Avantages: [
      "Soutien à la création d'entreprises sociales",
      "Financement pour des projets d'impact social et économique",
      "Formation et développement des compétences pour les jeunes et les femmes",
      "Programmes d'insertion professionnelle",
      "Large couverture géographique, incluant les zones rurales"
    ],
    Inconvénients: [
      "Processus administratif parfois complexe",
      "Critères de sélection stricts pour certains programmes",
      "Moins d'impact dans les zones urbaines",
      "Disponibilité limitée de financements dans certaines régions"
    ],
    CommentPostuler: [
      "Visitez le site : https://www.indh.ma",
      "Préparez un dossier de candidature pour votre projet local",
      "Soumettez le dossier via la plateforme en ligne de l'INDH",
      "Participez à des sessions d'information et de formation proposées",
      "Suivez l'évolution de votre projet avec l'accompagnement de l'INDH"
    ]
  },
  {
    title: "PIAFE (Programme Intégré d’Appui et de Financement des Entreprises)",
    Catégorie: "Entrepreneuriat et financement des entreprises",
    Services: "Appui financier, garantie de prêts, accompagnement entrepreneurial",
    Type: "Programme gouvernemental",
    Cibles: "Jeunes entrepreneurs, TPE, PME, startups innovantes",
    Couverture: "Nationale",
    Siteweb: "https://www.tamwilcom.ma",
    content: "Le Programme Intégré d’Appui et de Financement des Entreprises (PIAFE) est une initiative gouvernementale visant à soutenir les entrepreneurs et entreprises à travers des solutions de financement accessibles, des garanties de prêts, et un accompagnement pour le développement des projets.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
    icon: Lightbulb,
    Contributions: {
      "Soutien financier :": [
        "Prêts à taux préférentiels pour les entreprises.",
        "Subventions pour les projets innovants ou à fort potentiel."
      ],
      "Garantie de prêts :": [
        "Couverture des risques liés aux emprunts grâce à Tamwilcom.",
        "Facilitation de l'accès au financement bancaire."
      ],
      "Accompagnement entrepreneurial :": [
        "Support technique pour la gestion et le développement des entreprises.",
        "Conseils sur les aspects administratifs et financiers."
      ]
    },
    Avantages: [
      "Accès facilité au financement pour les jeunes entreprises",
      "Soutien aux projets innovants",
      "Garantie des prêts, réduisant les risques pour les entrepreneurs",
      "Couverture nationale avec un accompagnement régional"
    ],
    Inconvénients: [
      "Critères d'éligibilité pouvant limiter l'accès à certains projets",
      "Complexité dans la préparation des dossiers de candidature",
      "Dépendance aux partenaires financiers pour l'octroi des prêts"
    ],
    CommentPostuler: [
      "Consultez les conditions et documents nécessaires sur le site officiel : https://www.tamwilcom.ma",
      "Contactez les banques partenaires pour demander un financement.",
      "Préparez un business plan détaillé et les justificatifs requis.",
      "Soumettez votre dossier auprès des agences Tamwilcom ou des partenaires bancaires.",
      "Attendez la validation de votre dossier et commencez votre projet après obtention du financement."
    ]
}
,{
  title: "CRI (Centres Régionaux d’Investissement)",
  Catégorie: "Entrepreneuriat et investissements",
  Services: "Accompagnement administratif, facilitation de la création d’entreprises, conseils sur les opportunités d’investissement",
  Type: "Service public",
  Cibles: "Porteurs de projets, entrepreneurs, investisseurs",
  Couverture: "Régionale (présent dans toutes les régions du Maroc)",
  Siteweb: "https://www.cri.ma",
  content: "Les Centres Régionaux d’Investissement (CRI) jouent un rôle clé dans le soutien à l’entrepreneuriat et à l’investissement au Maroc. Ils accompagnent les entrepreneurs dans la création d’entreprises, facilitent les démarches administratives, et offrent des conseils sur la faisabilité et le développement des projets.",
  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  icon: HandCoins,
  Contributions: {
    "Facilitation administrative :": [
      "Aide à la création d'entreprises en simplifiant les démarches.",
      "Traitement rapide des dossiers de création et d'investissement."
    ],
    "Accompagnement personnalisé :": [
      "Conseils sur les opportunités d’investissement régionales.",
      "Assistance technique pour le développement des projets."
    ],
    "Médiation et partenariats :": [
      "Mise en relation avec des partenaires financiers et techniques.",
      "Soutien pour surmonter les obstacles liés à l’investissement."
    ]
  },
  Avantages: [
    "Présence dans toutes les régions pour un service de proximité",
    "Facilitation des démarches administratives",
    "Accompagnement gratuit et personnalisé",
    "Conseils sur les opportunités économiques locales",
    "Mise en relation avec des partenaires financiers et techniques"
  ],
  Inconvénients: [
    "Variabilité de la qualité du service selon la région",
    "Délais parfois longs pour certains types de projets complexes",
    "Peu adapté aux entrepreneurs ayant déjà une grande expérience"
  ],
  CommentPostuler: [
    "Visitez le site officiel : https://www.cri.ma",
    "Sélectionnez votre région pour accéder au CRI local.",
    "Prenez rendez-vous avec un conseiller pour discuter de votre projet.",
    "Préparez les documents nécessaires pour la création d’entreprise ou l’investissement.",
    "Suivez les étapes d'accompagnement proposées par le CRI pour finaliser votre projet."
  ]
},{
  "title": "Dar Al Moukawil (Attijariwafa Bank)",
  "Catégorie": "Entrepreneuriat et accompagnement",
  "Services": "Formation en entrepreneuriat, soutien au développement des projets, mise en réseau, conseils en gestion d’entreprise",
  "Type": "Service public/privé",
  "Cibles": "Entrepreneurs débutants, PME, startups",
  "Couverture": "Nationale",
  "Siteweb": "https://www.daralmoukawil.com",
  "content": "Dar Al Moukawil, une initiative de la Banque Attijariwafa, soutient les entrepreneurs marocains en leur offrant des formations, des conseils en gestion et un accompagnement dans la création et le développement de leur entreprise.",
  "image": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  "icon": "Lightbulb",
  "Contributions": {
    "Formation et accompagnement :": [
      "Formation gratuite en gestion d’entreprise et création de projets.",
      "Accompagnement personnalisé pour la mise en œuvre des projets.",
      "Séminaires et ateliers pratiques sur le marketing, la gestion financière, et le développement des affaires."
    ],
    "Soutien au financement :": [
      "Conseils sur l'accès au financement pour les projets innovants.",
      "Mise en relation avec des investisseurs potentiels."
    ],
    "Mise en réseau :": [
      "Réseautage avec des entrepreneurs, mentors et experts du secteur.",
      "Opportunités de partenariats avec d'autres entreprises."
    ]
  },
  "Avantages": [
    "Accompagnement gratuit et complet.",
    "Formations pratiques et adaptées aux besoins des entrepreneurs.",
    "Accès à un large réseau de professionnels et d’investisseurs.",
    "Conseils en gestion d’entreprise pour assurer la pérennité des projets."
  ],
  "Inconvénients": [
    "Accès limité aux entrepreneurs ayant déjà une certaine idée de leur projet.",
    "Capacité d’accompagnement limitée pour les projets de grande envergure.",
    "Peu adapté aux entreprises déjà bien établies."
  ],
  "CommentPostuler": [
    "Visitez le site officiel : https://www.daralmoukawil.com",
    "Créez un compte sur la plateforme et remplissez votre dossier de projet.",
    "Participez aux formations proposées en ligne ou en présentiel.",
    "Recevez un accompagnement personnalisé et accédez aux opportunités de financement."
  ]
},
{
  "title": "AMEE (Agence Marocaine pour l’Efficacité Énergétique)",
  "Catégorie": "Environnement et énergie",
  "Services": "Conseils en efficacité énergétique, formation, soutien aux projets d'énergie renouvelable et d'efficacité énergétique",
  "Type": "Service public",
  "Cibles": "Entrepreneurs, entreprises, collectivités locales, porteurs de projets dans les énergies renouvelables",
  "Couverture": "Nationale",
  "Siteweb": "https://www.amee.ma",
  "content": "L'AMEE accompagne les entreprises et les porteurs de projets dans la mise en œuvre de solutions d'efficacité énergétique et de développement des énergies renouvelables. L'agence fournit des conseils techniques, des formations, et soutient l'accès à des financements pour les projets écologiques.",
  "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  "icon": "Leaf",
  "Contributions": {
    "Soutien technique :": [
      "Conseils sur les solutions d'efficacité énergétique pour les entreprises.",
      "Audit énergétique pour identifier les opportunités de réduction des consommations d'énergie."
    ],
    "Formation et sensibilisation :": [
      "Programmes de formation pour sensibiliser aux bonnes pratiques énergétiques.",
      "Ateliers et séminaires pour les entreprises et les collectivités locales sur les enjeux de l'efficacité énergétique."
    ],
    "Accès au financement :": [
      "Assistance dans la recherche de financements pour les projets d’efficacité énergétique.",
      "Mise en relation avec des partenaires financiers pour soutenir les projets d'énergie verte."
    ]
  },
  "Avantages": [
    "Accompagnement gratuit pour les projets d'efficacité énergétique.",
    "Accès à des ressources et outils techniques pour améliorer la performance énergétique.",
    "Sensibilisation et formation sur les enjeux écologiques et énergétiques.",
    "Aide à l'accès aux financements pour les projets d'énergie renouvelable."
  ],
  "Inconvénients": [
    "Programmes souvent limités aux secteurs industriels et grandes entreprises.",
    "Disponibilité des ressources et des financements limités pour les petites entreprises.",
    "Processus administratif pouvant être complexe pour certaines démarches."
  ],
  "CommentPostuler": [
    "Visitez le site officiel : https://www.amee.ma",
    "Créez un compte sur la plateforme et soumettez votre projet.",
    "Participez aux programmes de formation et aux ateliers proposés par l'AMEE.",
    "Recevez un accompagnement technique et accédez aux financements disponibles."
  ]
},
{
  "title": "Réseau Entreprendre Maroc",
  "Catégorie": "Entrepreneuriat et accompagnement",
  "Services": "Accompagnement de créateurs d'entreprises, mentorat, soutien à la croissance des PME",
  "Type": "Organisation privée",
  "Cibles": "Créateurs d'entreprises, dirigeants de PME, startups",
  "Couverture": "Nationale",
  "Siteweb": "https://www.reseau-entreprendre.org/maroc",
  "content": "Réseau Entreprendre Maroc est une organisation qui soutient les créateurs d'entreprises et les PME à travers du mentorat, des conseils en gestion, et un accompagnement personnalisé pour assurer la pérennité et la croissance des projets.",
  "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  "icon": "Users",
  "Contributions": {
    "Mentorat et accompagnement :": [
      "Aide à la création et au développement des entreprises.",
      "Mentorat avec des entrepreneurs expérimentés pour guider les créateurs d'entreprises."
    ],
    "Financement et partenariats :": [
      "Accès à un réseau d'investisseurs pour le financement des projets.",
      "Partenariats avec des entreprises et institutions pour favoriser la croissance."
    ]
  },
  "Avantages": [
    "Accompagnement gratuit et personnalisé par des mentors expérimentés.",
    "Réseautage avec d'autres entrepreneurs et investisseurs.",
    "Soutien aux entrepreneurs dans la gestion et la stratégie de croissance."
  ],
  "Inconvénients": [
    "Accès limité aux projets sélectionnés par le réseau.",
    "Certains types de projets peuvent ne pas correspondre aux critères du réseau."
  ],
  "CommentPostuler": [
    "Visitez le site officiel : https://www.reseau-entreprendre.org/maroc",
    "Créez un compte et soumettez votre projet.",
    "Rencontrez un mentor pour une première session d’accompagnement.",
    "Participez aux événements et ateliers organisés par le réseau."
  ]
},
{
  "title": "Tamwilcom",
  "Catégorie": "Financement et entrepreneuriat",
  "Services": "Financement de projets, garantie de crédits, soutien aux PME et startups",
  "Type": "Service public",
  "Cibles": "Entrepreneurs, startups, PME, porteurs de projets",
  "Couverture": "Nationale",
  "Siteweb": "https://www.tamwilcom.ma",
  "content": "Tamwilcom est un organisme public marocain dédié à l'accompagnement des porteurs de projets à travers des financements, des garanties de crédits, et des solutions adaptées pour les entreprises de toute taille, en particulier les PME et les startups.",
  "image": "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  "icon": "Banknote",
  "Contributions": {
    "Financement :": [
      "Prêts pour les créateurs d’entreprises et les PME.",
      "Prêts à faible taux d'intérêt pour les projets innovants."
    ],
    "Garanties de crédits :": [
      "Garanties pour faciliter l’obtention de crédits bancaires pour les projets.",
      "Assurance des risques financiers pour les institutions financières."
    ],
    "Soutien aux PME et startups :": [
      "Accompagnement dans l’obtention de financements adaptés.",
      "Assistance dans la préparation des dossiers de financement."
    ]
  },
  "Avantages": [
    "Financement à taux compétitifs pour les projets en démarrage.",
    "Facilité d’accès au crédit grâce aux garanties proposées.",
    "Accompagnement personnalisé pour le développement des projets."
  ],
  "Inconvénients": [
    "Critères de sélection pouvant être restrictifs.",
    "Délai de traitement des demandes parfois long.",
    "Peu adapté aux entreprises déjà bien établies ou de grande envergure."
  ],
  "CommentPostuler": [
    "Visitez le site officiel : https://www.tamwilcom.ma",
    "Soumettez votre dossier de financement en ligne.",
    "Préparez un business plan détaillé et les documents nécessaires.",
    "Attendez la validation de votre demande avant de recevoir le financement."
  ]
},
{
  "title": "AMDI (Agence Marocaine de Développement des Investissements)",
  "Catégorie": "Investissement et développement économique",
  "Services": "Promotion des investissements, accompagnement des investisseurs, soutien à l'implantation d'entreprises",
  "Type": "Service public",
  "Cibles": "Investisseurs nationaux et étrangers, entreprises souhaitant s'implanter au Maroc",
  "Couverture": "Nationale et internationale",
  "Siteweb": "https://www.amdi.ma",
  "content": "L'AMDI soutient le développement des investissements au Maroc en offrant des services d'accompagnement aux investisseurs nationaux et étrangers, en facilitant les démarches administratives et en offrant des conseils pour les projets d'implantation d'entreprises.",
  "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  "icon": "Building",
  "Contributions": {
    "Promotion des investissements :": [
      "Mise en place de campagnes de promotion pour attirer les investisseurs.",
      "Identification des secteurs d'investissement à fort potentiel.",
      "Organisation de rencontres et de salons pour mettre en relation investisseurs et porteurs de projets."
    ],
    "Accompagnement personnalisé :": [
      "Assistance dans les démarches administratives et juridiques pour l'implantation d'entreprises.",
      "Conseils sur les opportunités économiques et les conditions d'investissement au Maroc."
    ],
    "Soutien à l'implantation :": [
      "Aide à la recherche de sites d'implantation pour les entreprises.",
      "Assistance dans l'obtention de financements et de partenariats."
    ]
  },
  "Avantages": [
    "Accompagnement complet pour les investisseurs nationaux et étrangers.",
    "Facilitation des démarches administratives et juridiques.",
    "Conseils stratégiques pour le choix des secteurs d'investissement.",
    "Accès à des informations sur les opportunités d'investissement locales."
  ],
  "Inconvénients": [
    "Peut être complexe pour les investisseurs novices dans le marché marocain.",
    "Services et accompagnements souvent centrés sur les projets à fort potentiel économique.",
    "Accès limité aux informations spécifiques à certains secteurs pour les petites entreprises."
  ],
  "CommentPostuler": [
    "Visitez le site officiel : https://www.amdi.ma",
    "Soumettez votre demande d'accompagnement en ligne.",
    "Participez aux événements organisés par l'AMDI pour découvrir les opportunités d'investissement.",
    "Recevez un accompagnement personnalisé et des conseils sur l'implantation de votre entreprise."
  ]
},
{
  "title": "SwitchMed",
  "Catégorie": "Environnement et développement durable",
  "Services": "Soutien aux entreprises vertes, financement, développement de solutions durables",
  "Type": "Programme international",
  "Cibles": "Entrepreneurs, startups, entreprises dans le domaine de l'économie verte et durable",
  "Couverture": "Régionale (Méditerranée et Afrique du Nord)",
  "Siteweb": "https://www.switchmed.eu",
  "content": "SwitchMed est un programme qui soutient les entreprises et startups dans la région Méditerranéenne et Afrique du Nord en développant des solutions durables, notamment dans les domaines de l’économie circulaire et des énergies renouvelables. Il offre des services de financement, de formation et d'accompagnement pour favoriser la transition vers des modèles économiques plus verts.",
  "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  "icon": "Recycle",
  "Contributions": {
    "Soutien à l'entrepreneuriat durable :": [
      "Accompagnement des startups et PME pour adopter des solutions durables.",
      "Aide à la mise en œuvre de projets dans l'économie circulaire et les énergies renouvelables."
    ],
    "Financement et accès à des ressources :": [
      "Mise en relation avec des investisseurs et des partenaires financiers.",
      "Accès à des fonds pour des projets d'entreprises écologiques."
    ],
    "Formation et développement des compétences :": [
      "Programmes de formation pour les entrepreneurs sur la durabilité et l'innovation verte.",
      "Ateliers pratiques sur la gestion des projets écologiques et l'économie circulaire."
    ]
  },
  "Avantages": [
    "Accès à des financements pour des projets écologiques.",
    "Soutien dans le développement de solutions durables pour les entreprises.",
    "Réseautage avec d'autres entrepreneurs et investisseurs dans le domaine de la durabilité.",
    "Formations et ressources adaptées aux besoins des entreprises vertes."
  ],
  "Inconvénients": [
    "Disponible principalement pour les projets dans la région Méditerranéenne et Afrique du Nord.",
    "Accès aux financements peut être compétitif en fonction des projets.",
    "Certaines conditions d'éligibilité peuvent exclure des projets plus petits ou en phase de démarrage."
  ],
  "CommentPostuler": [
    "Visitez le site officiel : https://www.switchmed.eu",
    "Créez un profil sur la plateforme pour soumettre votre projet.",
    "Participez aux événements et programmes de formation proposés par SwitchMed.",
    "Recevez un accompagnement et accédez à des financements pour développer des solutions durables."
  ]
},
{
  "title": "Caisse de Dépôt et de Gestion (CDG)",
  "Catégorie": "Financement et gestion des investissements",
  "Services": "Gestion des fonds de retraite, financement de projets publics, investissements immobiliers",
  "Type": "Institution publique",
  "Cibles": "Particuliers, entreprises, investisseurs, collectivités publiques",
  "Couverture": "Nationale",
  "Siteweb": "https://www.cdg.ma",
  "content": "La Caisse de Dépôt et de Gestion (CDG) est une institution publique marocaine qui gère des fonds de retraite et des investissements dans divers secteurs, notamment l'immobilier, les infrastructures, et les projets de développement économique. Elle joue un rôle crucial dans la gestion des épargnes nationales et le financement de projets d'envergure.",
  "image": "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  "icon": "Building",
  "Contributions": {
    "Gestion des fonds de retraite :": [
      "Sécurisation des épargnes des particuliers et des entreprises.",
      "Mise en place de solutions d'investissement pour les fonds de retraite."
    ],
    "Financement des projets publics :": [
      "Soutien au financement des projets d'infrastructure et de développement économique.",
      "Partenariats avec des institutions publiques et privées pour la réalisation de projets nationaux."
    ],
    "Investissements immobiliers :": [
      "Gestion et développement de projets immobiliers pour le secteur public.",
      "Investissements dans des projets immobiliers à vocation sociale et économique."
    ]
  },
  "Avantages": [
    "Rôle clé dans le financement des projets publics et privés au Maroc.",
    "Gestion professionnelle des fonds de retraite pour une sécurité accrue.",
    "Engagement dans des projets à fort impact économique et social.",
    "Accès à des financements pour les projets d'infrastructure à long terme."
  ],
  "Inconvénients": [
    "Peut être difficile d'accès pour les petites entreprises à la recherche de financements.",
    "Processus de demande de financement parfois complexe et long.",
    "Accès limité pour les projets en dehors des secteurs traditionnels soutenus par la CDG."
  ],
  "CommentPostuler": [
    "Visitez le site officiel : https://www.cdg.ma",
    "Soumettez votre projet via la plateforme dédiée.",
    "Prenez contact avec un conseiller pour discuter des opportunités de financement.",
    "Préparez les documents nécessaires pour la demande de financement ou d'investissement."
  ]
},
{
  "title": "Maroc Innovation",
  "Catégorie": "Innovation et soutien à l'entrepreneuriat",
  "Services": "Soutien à l'innovation, financement de projets de recherche et développement, accompagnement des startups innovantes",
  "Type": "Institution publique",
  "Cibles": "Entrepreneurs, startups, entreprises innovantes, chercheurs",
  "Couverture": "Nationale",
  "Siteweb": "http://www.marocinnovation.ma",
  "content": "Maroc Innovation est une initiative publique dédiée à promouvoir l'innovation et la recherche-développement au Maroc. Elle soutient les entrepreneurs et les entreprises innovantes par le biais de financements, de subventions, et d'accompagnement pour le développement de nouvelles technologies et solutions innovantes.",
  "image": "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80",
  "icon": "Innovation",
  "Contributions": {
    "Soutien à l'innovation :": [
      "Aide à la conception et au développement de nouveaux produits et technologies.",
      "Financement pour les projets de recherche et d'innovation."
    ],
    "Accompagnement des startups :": [
      "Soutien personnalisé pour le développement de projets innovants.",
      "Accès à des ressources et à un réseau d'experts dans le domaine de l'innovation."
    ],
    "Financement et subventions :": [
      "Accès à des subventions et des prêts pour financer les projets de R&D.",
      "Partenariats avec des institutions financières et des investisseurs pour soutenir l'innovation."
    ]
  },
  "Avantages": [
    "Soutien financier pour les projets de recherche et d'innovation.",
    "Accompagnement personnalisé pour les startups et les entreprises innovantes.",
    "Accès à un réseau de partenaires et d'experts dans le domaine de l'innovation.",
    "Facilitation de la création et du développement de nouvelles technologies."
  ],
  "Inconvénients": [
    "Processus de sélection des projets assez compétitif.",
    "Peu adapté aux projets qui ne sont pas orientés vers l'innovation technologique.",
    "Certaines démarches administratives peuvent être complexes."
  ],
  "CommentPostuler": [
    "Visitez le site officiel : http://www.marocinnovation.ma",
    "Soumettez votre projet d'innovation ou de R&D en ligne.",
    "Participez aux événements et programmes organisés pour découvrir les opportunités de financement.",
    "Recevez un accompagnement personnalisé pour faire avancer votre projet innovant."
  ]
},
{
  "title": "Bidaya",
  "Catégorie": "Entrepreneuriat et financement",
  "Services": "Soutien aux startups et aux projets entrepreneuriaux, financement, accompagnement au développement",
  "Type": "Organisation privée-public",
  "Cibles": "Entrepreneurs, startups, entreprises en démarrage",
  "Couverture": "Nationale",
  "Siteweb": "https://www.bidaya.ma",
  "content": "Bidaya est une initiative visant à soutenir les jeunes entrepreneurs au Maroc, en leur o  ffrant des solutions de financement et un accompagnement personnalisé pour la création et le développement de leurs entreprises. Le programme se concentre sur le financement d'idées innovantes et la création de nouvelles entreprises.",
  "image": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
  "icon": "Rocket",
  "Contributions": {
    "Accompagnement entrepreneurial :": [
      "Mentorat et conseils personnalisés pour le développement des projets.",
      "Ateliers et formations pour renforcer les compétences entrepreneuriales."
    ],
    "Financement des projets :": [
      "Accès à des prêts et subventions pour le financement des startups.",
      "Partenariats avec des investisseurs pour soutenir la croissance des projets."
    ],
    "Mise en réseau :": [
      "Mise en relation avec un réseau d'entrepreneurs et de partenaires financiers.",
      "Opportunités de collaboration avec des entreprises locales et internationales."
    ]
  },
  "Avantages": [
    "Soutien personnalisé pour les projets entrepreneuriaux.",
    "Financement adapté aux besoins des jeunes entrepreneurs.",
    "Accompagnement au développement des compétences et du réseau.",
    "Facilitation de l'accès aux ressources et aux partenariats."
  ],
  "Inconvénients": [
    "Critères de sélection pouvant limiter l'accès à certains projets.",
    "Le processus de demande de financement peut être long.",
    "Moins d'impact pour les projets déjà bien établis ou de grande envergure."
  ],
  "CommentPostuler": [
    "Visitez le site officiel : https://www.bidaya.ma",
    "Créez un compte et soumettez votre projet.",
    "Participez aux événements et formations proposées.",
    "Recevez un accompagnement personnalisé pour développer votre entreprise."
  ]
},
{
  "title": "The Moroccan Association of Business Angels (AMBA)",
  "Catégorie": "Investissement et soutien aux startups",
  "Services": "Investissement dans des startups innovantes, mise en relation entre entrepreneurs et investisseurs, mentorat",
  "Type": "Organisation privée",
  "Cibles": "Entrepreneurs, startups, investisseurs",
  "Couverture": "Nationale",
  "Siteweb": "https://www.amba.ma",
  "content": "L'Association Marocaine des Business Angels (AMBA) est une organisation qui facilite les investissements dans des startups innovantes en mettant en relation des entrepreneurs et des investisseurs privés. AMBA soutient les jeunes entreprises par des financements, des conseils, et un accompagnement pour leur développement.",
  "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  "icon": "Handshake",
  "Contributions": {
    "Investissement dans les startups :": [
      "Financement de projets innovants en échange d'une participation au capital.",
      "Aide à la levée de fonds pour les entreprises en démarrage."
    ],
    "Mentorat et accompagnement :": [
      "Conseils et soutien stratégique pour le développement des startups.",
      "Mise à disposition d'un réseau d'experts et de professionnels."
    ],
    "Mise en réseau :": [
      "Mise en relation entre entrepreneurs et investisseurs.",
      "Accès à des événements, conférences et opportunités de collaboration."
    ]
  },
  "Avantages": [
    "Accès à un réseau d'investisseurs et d'experts dans le domaine entrepreneurial.",
    "Financement pour les startups en phase de démarrage.",
    "Soutien stratégique et opérationnel pour le développement des projets.",
    "Accès à des opportunités de partenariats et de collaborations."
  ],
  "Inconvénients": [
    "Critères de sélection stricts pour les projets d'investissement.",
    "Processus de financement compétitif et parfois long.",
    "Peu adapté aux projets en phase avancée ou déjà bien établis."
  ],
  "CommentPostuler": [
    "Visitez le site officiel : https://www.amba.ma",
    "Créez un compte et soumettez votre projet ou idée.",
    "Participez aux événements et rencontres organisés par AMBA.",
    "Recevez un accompagnement et des conseils sur le processus d'investissement."
  ]
}

];

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  const exportContentAsPDF = () => {
    const doc = new jsPDF();
    
    // Define padding and margins (adjustable)
    const padding = 5; // Padding for text inside content box
    const margin = 5;  // Margin for the document (space from the edges)
    const maxWidth = doc.internal.pageSize.width - margin * 2 - padding * 2; // Max width for text
    let yOffset = margin + padding; // Start position for the content
    
    // Set font styles (match your modal)
    doc.setFont('Helvetica', 'normal');  // Use the font you have in the modal
    doc.setFontSize(15);  // Title size
    doc.setTextColor(0, 102, 204); // Blue color for the title
    
    // Title
    doc.text(selectedCard.title, margin, yOffset, { maxWidth: maxWidth });
    yOffset += 20;
    
    // Content
    doc.setFontSize(11);  // Content text size
    doc.setTextColor(0, 0, 0); // Black color for content
    doc.text(selectedCard.content, margin, yOffset, { maxWidth: maxWidth });
    yOffset += 20;
    
    // Contributions Section
    doc.setFontSize(11);  // Section header size
    doc.setTextColor(0, 51, 102); // Dark blue for section headers
    doc.text("Contributions à l'entrepreneuriat:", margin, yOffset, { maxWidth: maxWidth });
    yOffset += 10;
  
    if (selectedCard.Contributions) {
      Object.keys(selectedCard.Contributions).forEach((category) => {
        doc.setFontSize(12);
        doc.setTextColor(0, 102, 204); // Blue for category
        doc.text(category, margin, yOffset, { maxWidth: maxWidth });
        yOffset += 10;
  
        selectedCard.Contributions[category].forEach((contribution) => {
          doc.setTextColor(0, 0, 0); // Black for each contribution
          doc.text(`+ ${contribution}`, margin + 10, yOffset, { maxWidth: maxWidth - 10 });  // Indented text
          yOffset += 10;
        });
      });
    }
  
    // Avantages Section
    doc.setFontSize(11);
    doc.setTextColor(34, 139, 34); // Green for advantages
    doc.text("Avantages:", margin, yOffset, { maxWidth: maxWidth });
    yOffset += 10;
    selectedCard.Avantages.forEach((adv) => {
      doc.setTextColor(34, 139, 34); // Green for each advantage
      doc.text(`• ${adv}`, margin + 10, yOffset, { maxWidth: maxWidth - 10 });  // Indented text
      yOffset += 10;
    });
  
    // Inconvénients Section
    doc.setFontSize(11);
    doc.setTextColor(255, 0, 0); // Red for disadvantages
    doc.text("Inconvénients:", margin, yOffset, { maxWidth: maxWidth });
    yOffset += 10;
    selectedCard.Inconvénients.forEach((inc) => {
      doc.setTextColor(255, 0, 0); // Red for each disadvantage
      doc.text(`• ${inc}`, margin + 10, yOffset, { maxWidth: maxWidth - 10 });  // Indented text
      yOffset += 10;
    });
  
    // Comment Postuler Section
    doc.setFontSize(11);
    doc.setTextColor(0, 102, 204); // Blue for instructions
    doc.text("Comment Postuler:", margin, yOffset, { maxWidth: maxWidth });
    yOffset += 10;
    selectedCard.CommentPostuler.forEach((step, index) => {
      doc.setTextColor(0, 0, 0); // Black for each step
      doc.text(`${index + 1}. ${step}`, margin + 10, yOffset, { maxWidth: maxWidth - 10 });  // Indented text
      yOffset += 10;
    });
    
    // Save the PDF with the same title as the selected card
    doc.save(selectedCard.title + ".pdf");
  };
  
  
  
  

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            onClick={() => handleCardClick(card)}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 rounded-xl" />
              <img
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
                src={card.image}
                alt={card.title}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded-full">
                  {card.Catégorie}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-blue-500">
                <card.icon className="w-6 h-6 mr-2" />
                <span className="text-base font-medium">{card.Type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      {showModal && selectedCard && (
        <div id="modalContent" className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div   className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl">
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              onClick={handleCloseModal}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
  
            <div className="flex items-center gap-4 mb-6">
              <selectedCard.icon className="w-10 h-10 text-blue-600" />
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">{selectedCard.title}</h2>
                <span className="inline-block px-3 py-1 mt-2 text-sm font-medium bg-blue-600 text-white rounded-full">
                  {selectedCard.Catégorie}
                </span>
              </div>
            </div>
  
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">{selectedCard.content}</p>
  
            <div className="space-y-8">
            <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Contributions à l'entrepreneuriat :</h3>
                <ul className="bg-violet-100 p-4 rounded-lg space-y-2">
                {selectedCard.Contributions && Object.keys(selectedCard.Contributions).length > 0 ? (
  Object.keys(selectedCard.Contributions).map((category, index) => (
    <section key={index}>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{category}</h3>
      <ul className="bg-violet-100 p-4 rounded-lg space-y-2">
        {selectedCard.Contributions[category].map((adv, idx) => (
          <li key={idx} className="flex items-start text-gray-900">
            <span className="text-violet-600 mr-3">+</span>
            {adv}
          </li>
        ))}
      </ul>
    </section>
  ))
) : (
  <p className="text-gray-500">Aucune contribution disponible</p>
)}


                </ul>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Avantages :</h3>
                <ul className="bg-green-100 p-4 rounded-lg space-y-2">
                  {selectedCard.Avantages.map((adv, index) => (
                    <li key={index} className="flex items-start text-gray-900">
                      <span className="text-green-600 mr-3">✓</span>
                      {adv}
                    </li>
                  ))}
                </ul>
              </section>
  
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Inconvénients :</h3>
                <ul className="bg-red-100 p-4 rounded-lg space-y-2">
                  {selectedCard.Inconvénients.map((inc, index) => (
                    <li key={index} className="flex items-start text-gray-900">
                      <span className="text-red-600 mr-3">•</span>
                      {inc}
                    </li>
                  ))}
                </ul>
              </section>
  
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Comment Postuler</h3>
                <ol className="bg-blue-100 p-4 rounded-lg space-y-3">
                  {selectedCard.CommentPostuler.map((step, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-900"
                    >
                      <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-4">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </section>
            </div>
  
            <div className="mt-10 text-center">
              <a
                href={selectedCard.Siteweb}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visiter le site officiel
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-4 text-end">
              <button
                onClick={exportContentAsPDF}
                className="px-6 py-3 bg-green-600 text-white rounded-lg mr-4 hover:bg-blue-700"
              >
                Exporter en PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}  

export default App;