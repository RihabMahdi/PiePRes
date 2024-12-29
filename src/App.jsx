import { useState } from 'react';
import React from 'react';
// Import the icon components
import { Cpu, Building, Users, Rocket, Lightbulb,CreditCard,CircleUserRound,Handshake,HandCoins  } from 'lucide-react'; // Import specific icons
import './index.css'

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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl">
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
          </div>
        </div>
      )}
    </div>
  );
}  

export default App;