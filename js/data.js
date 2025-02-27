// Historical events data structure
const historicalEvents = [
  {
    id: 1,
    title: {
      en: "Fall of the Roman Empire",
      fr: "Chute de l'Empire Romain",
    },
    date: "476 CE",
    era: "ancient",
    description: {
      en: "The fall of the Western Roman Empire, marking the end of Ancient Rome and the beginning of the Middle Ages in Europe.",
      fr: "La chute de l'Empire romain d'Occident, marquant la fin de la Rome antique et le début du Moyen Âge en Europe.",
    },
    consequences: [
      {
        en: "Power vacuum in Western Europe",
        fr: "Vide du pouvoir en Europe occidentale",
      },
      {
        en: "Rise of feudalism",
        fr: "Montée du féodalisme",
      },
      {
        en: "Decentralization of political power",
        fr: "Décentralisation du pouvoir politique",
      },
    ],
    causes: [
      {
        en: "Economic troubles",
        fr: "Difficultés économiques",
      },
      {
        en: "Overreliance on slave labor",
        fr: "Dépendance excessive au travail des esclaves",
      },
      {
        en: "Military overspending",
        fr: "Dépenses militaires excessives",
      },
      {
        en: "Government corruption",
        fr: "Corruption gouvernementale",
      },
      {
        en: "Germanic invasions",
        fr: "Invasions germaniques",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Roman Technological Revolution",
          fr: "Révolution Technologique Romaine",
        },
        description: {
          en: "If Rome had undergone an industrial revolution, its economic and military power might have sustained the empire for centuries longer.",
          fr: "Si Rome avait connu une révolution industrielle, sa puissance économique et militaire aurait pu maintenir l'empire pendant plusieurs siècles supplémentaires.",
        },
        probability: 0.2,
      },
      {
        title: {
          en: "Eastern Reclamation",
          fr: "Reconquête par l'Orient",
        },
        description: {
          en: "If the Eastern Roman Empire (Byzantine) had successfully reclaimed and held the Western territories, a unified Roman state might have persisted.",
          fr: "Si l'Empire romain d'Orient (Byzantin) avait réussi à reconquérir et à conserver les territoires occidentaux, un État romain unifié aurait pu persister.",
        },
        probability: 0.4,
      },
    ],
    connections: [2, 3, 7, 14, 15, 16, 17, 18],
    coordinates: { x: 0.2, y: 0.3 },
    importance: 0.9,
  },
  {
    id: 14,
    title: {
      en: "Construction of the Great Pyramid",
      fr: "Construction de la Grande Pyramide",
    },
    date: "2560 BCE",
    era: "ancient",
    description: {
      en: "The completion of the Great Pyramid of Giza, the oldest and largest of the three pyramids in the Giza pyramid complex, built as a tomb for Fourth Dynasty Egyptian pharaoh Khufu.",
      fr: "L'achèvement de la Grande Pyramide de Gizeh, la plus ancienne et la plus grande des trois pyramides du complexe pyramidal de Gizeh, construite comme tombeau pour le pharaon égyptien de la Quatrième Dynastie, Khéops.",
    },
    consequences: [
      {
        en: "Demonstration of Egyptian engineering prowess",
        fr: "Démonstration du savoir-faire technique égyptien",
      },
      {
        en: "Symbol of pharaonic power and afterlife beliefs",
        fr: "Symbole du pouvoir pharaonique et des croyances sur l'au-delà",
      },
      {
        en: "Creation of an enduring wonder of the ancient world",
        fr: "Création d'une merveille durable du monde antique",
      },
      {
        en: "Economic impact of massive public works",
        fr: "Impact économique des travaux publics massifs",
      },
    ],
    causes: [
      {
        en: "Egyptian religious beliefs about the afterlife",
        fr: "Croyances religieuses égyptiennes sur l'au-delà",
      },
      {
        en: "Pharaoh Khufu's desire for an impressive tomb",
        fr: "Désir du pharaon Khéops d'avoir un tombeau impressionnant",
      },
      {
        en: "Advanced Egyptian mathematical and engineering knowledge",
        fr: "Connaissances mathématiques et techniques avancées des Égyptiens",
      },
      {
        en: "Availability of massive workforce and resources",
        fr: "Disponibilité d'une main-d'œuvre et de ressources massives",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Different Construction Techniques",
          fr: "Techniques de Construction Différentes",
        },
        description: {
          en: "If the Egyptians had developed different construction methods, pyramid building might have continued longer or taken different forms.",
          fr: "Si les Égyptiens avaient développé différentes méthodes de construction, la construction de pyramides aurait pu se poursuivre plus longtemps ou prendre des formes différentes.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Knowledge Preservation",
          fr: "Préservation du Savoir",
        },
        description: {
          en: "If the exact methods of pyramid construction had been better preserved, it might have influenced later architectural developments worldwide.",
          fr: "Si les méthodes exactes de construction des pyramides avaient été mieux préservées, cela aurait pu influencer les développements architecturaux ultérieurs dans le monde entier.",
        },
        probability: 0.4,
      },
    ],
    connections: [15, 18],
    coordinates: { x: 0.05, y: 0.15 },
    importance: 0.85,
  },
  {
    id: 15,
    title: {
      en: "Code of Hammurabi",
      fr: "Code d'Hammurabi",
    },
    date: "1754 BCE",
    era: "ancient",
    description: {
      en: "One of the earliest and most complete written legal codes, established by the Babylonian king Hammurabi, featuring 282 laws with scaled punishments and the presumption of innocence.",
      fr: "L'un des codes juridiques écrits les plus anciens et les plus complets, établi par le roi babylonien Hammurabi, comportant 282 lois avec des punitions graduées et la présomption d'innocence.",
    },
    consequences: [
      {
        en: "Standardization of laws across the Babylonian Empire",
        fr: "Standardisation des lois dans tout l'Empire babylonien",
      },
      {
        en: "Establishment of the presumption of innocence principle",
        fr: "Établissement du principe de présomption d'innocence",
      },
      {
        en: "Creation of a model for future legal systems",
        fr: "Création d'un modèle pour les futurs systèmes juridiques",
      },
      {
        en: "Documentation of Babylonian social hierarchy and values",
        fr: "Documentation de la hiérarchie sociale et des valeurs babyloniennes",
      },
    ],
    causes: [
      {
        en: "Expansion of the Babylonian Empire under Hammurabi",
        fr: "Expansion de l'Empire babylonien sous Hammurabi",
      },
      {
        en: "Need for consistent governance across diverse territories",
        fr: "Besoin d'une gouvernance cohérente sur des territoires divers",
      },
      {
        en: "Development of writing systems capable of recording complex information",
        fr: "Développement de systèmes d'écriture capables d'enregistrer des informations complexes",
      },
      {
        en: "Evolution of earlier Sumerian legal traditions",
        fr: "Évolution des traditions juridiques sumériennes antérieures",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Earlier Legal Equality",
          fr: "Égalité Juridique Précoce",
        },
        description: {
          en: "If the Code had established more equal treatment regardless of social class, it might have accelerated social equality concepts by millennia.",
          fr: "Si le Code avait établi un traitement plus égalitaire indépendamment de la classe sociale, il aurait pu accélérer les concepts d'égalité sociale de plusieurs millénaires.",
        },
        probability: 0.2,
      },
      {
        title: {
          en: "Lost to History",
          fr: "Perdu pour l'Histoire",
        },
        description: {
          en: "If the stele containing the Code had been destroyed rather than preserved, our understanding of ancient legal systems would be significantly diminished.",
          fr: "Si la stèle contenant le Code avait été détruite plutôt que préservée, notre compréhension des systèmes juridiques anciens aurait été considérablement réduite.",
        },
        probability: 0.5,
      },
    ],
    connections: [1, 14, 16, 18],
    coordinates: { x: 0.08, y: 0.25 },
    importance: 0.8,
  },
  {
    id: 16,
    title: {
      en: "Birth of Democracy in Athens",
      fr: "Naissance de la Démocratie à Athènes",
    },
    date: "508 BCE",
    era: "ancient",
    description: {
      en: "The reforms of Cleisthenes in Athens that established the world's first democratic system of government, giving citizens direct voting rights on legislation and executive bills.",
      fr: "Les réformes de Clisthène à Athènes qui ont établi le premier système démocratique de gouvernement au monde, donnant aux citoyens des droits de vote directs sur la législation et les projets exécutifs.",
    },
    consequences: [
      {
        en: "Creation of the world's first democratic political system",
        fr: "Création du premier système politique démocratique au monde",
      },
      {
        en: "Establishment of citizenship as a political concept",
        fr: "Établissement de la citoyenneté comme concept politique",
      },
      {
        en: "Development of civic participation traditions",
        fr: "Développement des traditions de participation civique",
      },
      {
        en: "Inspiration for later democratic movements worldwide",
        fr: "Inspiration pour les mouvements démocratiques ultérieurs dans le monde entier",
      },
    ],
    causes: [
      {
        en: "Reaction against tyranny and oligarchy",
        fr: "Réaction contre la tyrannie et l'oligarchie",
      },
      {
        en: "Growing merchant class demanding political representation",
        fr: "Classe marchande croissante exigeant une représentation politique",
      },
      {
        en: "Intellectual environment of philosophical inquiry",
        fr: "Environnement intellectuel d'enquête philosophique",
      },
      {
        en: "Military needs requiring broader citizen participation",
        fr: "Besoins militaires nécessitant une participation citoyenne plus large",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Expanded Franchise",
          fr: "Franchise Élargie",
        },
        description: {
          en: "If Athenian democracy had extended voting rights to women and non-landowners, modern democratic development might have accelerated by centuries.",
          fr: "Si la démocratie athénienne avait étendu le droit de vote aux femmes et aux non-propriétaires, le développement démocratique moderne aurait pu être accéléré de plusieurs siècles.",
        },
        probability: 0.1,
      },
      {
        title: {
          en: "Democratic Failure",
          fr: "Échec Démocratique",
        },
        description: {
          en: "If the democratic experiment had failed quickly, autocratic rule might have dominated political theory for much longer.",
          fr: "Si l'expérience démocratique avait rapidement échoué, le règne autocratique aurait pu dominer la théorie politique beaucoup plus longtemps.",
        },
        probability: 0.4,
      },
    ],
    connections: [1, 3, 17, 18],
    coordinates: { x: 0.12, y: 0.2 },
    importance: 0.9,
  },
  {
    id: 17,
    title: {
      en: "Alexander's Conquests",
      fr: "Conquêtes d'Alexandre",
    },
    date: "336-323 BCE",
    era: "ancient",
    description: {
      en: "Alexander the Great's military campaigns that created one of history's largest empires, stretching from Greece to northwestern India, spreading Hellenistic culture throughout the known world.",
      fr: "Les campagnes militaires d'Alexandre le Grand qui ont créé l'un des plus grands empires de l'histoire, s'étendant de la Grèce au nord-ouest de l'Inde, répandant la culture hellénistique dans tout le monde connu.",
    },
    consequences: [
      {
        en: "Spread of Greek culture, language and ideas across three continents",
        fr: "Diffusion de la culture, de la langue et des idées grecques sur trois continents",
      },
      {
        en: "Cultural fusion between East and West (Hellenistic civilization)",
        fr: "Fusion culturelle entre l'Est et l'Ouest (civilisation hellénistique)",
      },
      {
        en: "Establishment of new trade routes and cities",
        fr: "Établissement de nouvelles routes commerciales et villes",
      },
      {
        en: "Scientific and philosophical exchange between civilizations",
        fr: "Échange scientifique et philosophique entre les civilisations",
      },
    ],
    causes: [
      {
        en: "Philip II's military reforms and Alexander's military genius",
        fr: "Réformes militaires de Philippe II et génie militaire d'Alexandre",
      },
      {
        en: "Political instability in the Persian Empire",
        fr: "Instabilité politique dans l'Empire perse",
      },
      {
        en: "Greek economic and demographic pressures",
        fr: "Pressions économiques et démographiques grecques",
      },
      {
        en: "Alexander's personal ambition and Hellenistic vision",
        fr: "Ambition personnelle d'Alexandre et vision hellénistique",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Longer-Lived Alexander",
          fr: "Alexandre à Vie Plus Longue",
        },
        description: {
          en: "If Alexander had lived longer, his empire might have consolidated and potentially rivaled Rome as the dominant Mediterranean power.",
          fr: "Si Alexandre avait vécu plus longtemps, son empire aurait pu se consolider et potentiellement rivaliser avec Rome en tant que puissance méditerranéenne dominante.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Eastern Focus",
          fr: "Orientation vers l'Est",
        },
        description: {
          en: "If Alexander had continued eastward into China rather than turning back at India, Eurasian history might have taken a dramatically different course with earlier East-West exchange.",
          fr: "Si Alexandre avait continué vers l'est jusqu'en Chine plutôt que de faire demi-tour en Inde, l'histoire eurasienne aurait pu prendre un cours radicalement différent avec des échanges Est-Ouest plus précoces.",
        },
        probability: 0.2,
      },
    ],
    connections: [1, 16, 18],
    coordinates: { x: 0.15, y: 0.28 },
    importance: 0.85,
  },
  {
    id: 18,
    title: {
      en: "Rise of the Roman Republic",
      fr: "Montée de la République Romaine",
    },
    date: "509 BCE",
    era: "ancient",
    description: {
      en: "The overthrow of the Roman monarchy and establishment of the Roman Republic, which would develop complex political institutions including the Senate, consuls, and assemblies.",
      fr: "Le renversement de la monarchie romaine et l'établissement de la République romaine, qui développerait des institutions politiques complexes comprenant le Sénat, les consuls et les assemblées.",
    },
    consequences: [
      {
        en: "Development of republican political theory and institutions",
        fr: "Développement de la théorie politique républicaine et des institutions",
      },
      {
        en: "Creation of a constitutional system with checks and balances",
        fr: "Création d'un système constitutionnel avec des freins et contrepoids",
      },
      {
        en: "Expansion of Roman territory through republican military organization",
        fr: "Expansion du territoire romain grâce à l'organisation militaire républicaine",
      },
      {
        en: "Establishment of legal principles that would influence Western law",
        fr: "Établissement de principes juridiques qui influenceraient le droit occidental",
      },
    ],
    causes: [
      {
        en: "Tyrannical rule of the last Roman king, Tarquin the Proud",
        fr: "Règne tyrannique du dernier roi romain, Tarquin le Superbe",
      },
      {
        en: "Influence of surrounding Etruscan and Greek political systems",
        fr: "Influence des systèmes politiques étrusques et grecs environnants",
      },
      {
        en: "Growing power of patrician families",
        fr: "Pouvoir croissant des familles patriciennes",
      },
      {
        en: "Economic and social changes in early Roman society",
        fr: "Changements économiques et sociaux dans la société romaine primitive",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Enduring Republic",
          fr: "République Durable",
        },
        description: {
          en: "If the Republic had reformed successfully rather than transforming into an empire, republican rather than imperial models might have dominated Western political development.",
          fr: "Si la République s'était réformée avec succès plutôt que de se transformer en empire, des modèles républicains plutôt qu'impériaux auraient pu dominer le développement politique occidental.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Early Collapse",
          fr: "Effondrement Précoce",
        },
        description: {
          en: "If the early Republic had collapsed, Rome might have remained a minor Italian power rather than becoming a Mediterranean empire.",
          fr: "Si la République primitive s'était effondrée, Rome aurait pu rester une puissance italienne mineure plutôt que de devenir un empire méditerranéen.",
        },
        probability: 0.4,
      },
    ],
    connections: [1, 14, 15, 16, 17],
    coordinates: { x: 0.18, y: 0.22 },
    importance: 0.85,
  },
  {
    id: 2,
    title: {
      en: "Rise of Islam",
      fr: "Montée de l'Islam",
    },
    date: "622 CE",
    era: "medieval",
    description: {
      en: "The founding and rapid expansion of Islam across the Middle East, North Africa, and parts of Europe.",
      fr: "La fondation et l'expansion rapide de l'Islam à travers le Moyen-Orient, l'Afrique du Nord et certaines parties de l'Europe.",
    },
    consequences: [
      {
        en: "New political and religious power in the Middle East",
        fr: "Nouveau pouvoir politique et religieux au Moyen-Orient",
      },
      {
        en: "Preservation and advancement of classical knowledge",
        fr: "Préservation et avancement des connaissances classiques",
      },
      {
        en: "Cultural and scientific golden age",
        fr: "Âge d'or culturel et scientifique",
      },
    ],
    causes: [
      {
        en: "Religious revelation of Muhammad",
        fr: "Révélation religieuse de Mahomet",
      },
      {
        en: "Political unification of Arabian Peninsula",
        fr: "Unification politique de la péninsule arabique",
      },
      {
        en: "Weakness of Byzantine and Sassanid empires",
        fr: "Faiblesse des empires byzantin et sassanide",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Limited Arabian Influence",
          fr: "Influence Arabe Limitée",
        },
        description: {
          en: "Without Islam's unifying force, the Arabian Peninsula might have remained fragmented and less influential in world history.",
          fr: "Sans la force unificatrice de l'Islam, la péninsule arabique serait peut-être restée fragmentée et moins influente dans l'histoire mondiale.",
        },
        probability: 0.3,
      },
    ],
    connections: [1, 3, 4, 17, 19, 20, 21],
    coordinates: { x: 0.3, y: 0.4 },
    importance: 0.85,
  },
  {
    id: 3,
    title: {
      en: "Magna Carta",
      fr: "Magna Carta",
    },
    date: "1215 CE",
    era: "medieval",
    description: {
      en: "A charter of rights agreed to by King John of England, establishing the principle that everyone, including the king, was subject to the law.",
      fr: "Une charte des droits acceptée par le roi Jean d'Angleterre, établissant le principe que tout le monde, y compris le roi, était soumis à la loi.",
    },
    consequences: [
      {
        en: "Limitation of monarchical power",
        fr: "Limitation du pouvoir monarchique",
      },
      {
        en: "Foundation for constitutional governance",
        fr: "Fondement de la gouvernance constitutionnelle",
      },
      {
        en: "Establishment of legal rights for citizens",
        fr: "Établissement de droits légaux pour les citoyens",
      },
    ],
    causes: [
      {
        en: "Tyrannical rule of King John",
        fr: "Règne tyrannique du roi Jean",
      },
      {
        en: "Baronial opposition",
        fr: "Opposition des barons",
      },
      {
        en: "Financial crisis from failed military campaigns",
        fr: "Crise financière due à des campagnes militaires échouées",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Absolute Monarchy Prevails",
          fr: "Monarchie Absolue Prévaut",
        },
        description: {
          en: "Without this check on royal power, England might have developed as an absolute monarchy similar to France.",
          fr: "Sans ce frein au pouvoir royal, l'Angleterre aurait pu se développer comme une monarchie absolue similaire à la France.",
        },
        probability: 0.5,
      },
    ],
    connections: [5, 8, 16, 18, 19, 22, 23],
    coordinates: { x: 0.4, y: 0.25 },
    importance: 0.8,
  },
  {
    id: 4,
    title: {
      en: "Black Death",
      fr: "Peste Noire",
    },
    date: "1347-1351 CE",
    era: "medieval",
    description: {
      en: "A devastating global pandemic that killed 30-60% of Europe's population and had profound economic and social effects.",
      fr: "Une pandémie mondiale dévastatrice qui a tué 30 à 60% de la population européenne et a eu de profonds effets économiques et sociaux.",
    },
    consequences: [
      {
        en: "Labor shortages leading to higher wages",
        fr: "Pénuries de main-d'œuvre entraînant des salaires plus élevés",
      },
      {
        en: "End of feudalism",
        fr: "Fin du féodalisme",
      },
      {
        en: "Technological innovation to replace labor",
        fr: "Innovation technologique pour remplacer la main-d'œuvre",
      },
      {
        en: "Religious questioning",
        fr: "Questionnement religieux",
      },
    ],
    causes: [
      {
        en: "Spread of Yersinia pestis bacteria",
        fr: "Propagation de la bactérie Yersinia pestis",
      },
      {
        en: "Trade routes connecting Europe and Asia",
        fr: "Routes commerciales reliant l'Europe et l'Asie",
      },
      {
        en: "Poor sanitation and medical knowledge",
        fr: "Mauvaise hygiène et connaissances médicales limitées",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Contained Outbreak",
          fr: "Épidémie Contenue",
        },
        description: {
          en: "If the plague had been contained to smaller regions, feudalism might have persisted longer and delayed the Renaissance.",
          fr: "Si la peste avait été contenue dans des régions plus petites, le féodalisme aurait pu persister plus longtemps et retarder la Renaissance.",
        },
        probability: 0.3,
      },
    ],
    connections: [5, 6, 21, 22, 23],
    coordinates: { x: 0.45, y: 0.5 },
    importance: 0.85,
  },
  {
    id: 5,
    title: {
      en: "Renaissance",
      fr: "Renaissance",
    },
    date: "14th-17th century",
    era: "renaissance",
    description: {
      en: "A period of cultural, artistic, political, and economic rebirth following the Middle Ages, marked by renewed interest in classical learning.",
      fr: "Une période de renaissance culturelle, artistique, politique et économique suivant le Moyen Âge, marquée par un intérêt renouvelé pour l'apprentissage classique.",
    },
    consequences: [
      {
        en: "Scientific revolution",
        fr: "Révolution scientifique",
      },
      {
        en: "Artistic masterpieces",
        fr: "Chefs-d'œuvre artistiques",
      },
      {
        en: "Humanism and individualism",
        fr: "Humanisme et individualisme",
      },
      {
        en: "Weakening of religious authority",
        fr: "Affaiblissement de l'autorité religieuse",
      },
    ],
    causes: [
      {
        en: "Wealth from trade",
        fr: "Richesse issue du commerce",
      },
      {
        en: "Fall of Constantinople bringing Greek scholars west",
        fr: "Chute de Constantinople amenant des savants grecs à l'ouest",
      },
      {
        en: "Patronage of the arts",
        fr: "Mécénat des arts",
      },
      {
        en: "Invention of the printing press",
        fr: "Invention de l'imprimerie",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Continued Medieval Thought",
          fr: "Pensée Médiévale Continue",
        },
        description: {
          en: "Without the Renaissance, Europe might have continued with medieval scholasticism, delaying scientific and cultural advancement.",
          fr: "Sans la Renaissance, l'Europe aurait pu continuer avec la scolastique médiévale, retardant les avancées scientifiques et culturelles.",
        },
        probability: 0.2,
      },
    ],
    connections: [3, 4, 6, 8, 22, 23, 24, 25, 26, 27, 28],
    coordinates: { x: 0.5, y: 0.35 },
    importance: 0.9,
  },
  {
    id: 6,
    title: {
      en: "Industrial Revolution",
      fr: "Révolution Industrielle",
    },
    date: "1760-1840",
    era: "industrial",
    description: {
      en: "The transition to new manufacturing processes in Europe and the United States, moving from hand production to machines and factories.",
      fr: "La transition vers de nouveaux processus de fabrication en Europe et aux États-Unis, passant de la production manuelle aux machines et aux usines.",
    },
    consequences: [
      {
        en: "Mass production of goods",
        fr: "Production de masse de biens",
      },
      {
        en: "Urbanization",
        fr: "Urbanisation",
      },
      {
        en: "Rise of capitalism",
        fr: "Montée du capitalisme",
      },
      {
        en: "Environmental impact",
        fr: "Impact environnemental",
      },
      {
        en: "Working class formation",
        fr: "Formation de la classe ouvrière",
      },
    ],
    causes: [
      {
        en: "Scientific discoveries",
        fr: "Découvertes scientifiques",
      },
      {
        en: "Availability of capital",
        fr: "Disponibilité du capital",
      },
      {
        en: "Agricultural revolution freeing labor",
        fr: "Révolution agricole libérant la main-d'œuvre",
      },
      {
        en: "Coal and steam power",
        fr: "Énergie du charbon et de la vapeur",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Delayed Industrialization",
          fr: "Industrialisation Retardée",
        },
        description: {
          en: "Without key innovations like the steam engine, industrialization might have been delayed by centuries.",
          fr: "Sans innovations clés comme la machine à vapeur, l'industrialisation aurait pu être retardée de plusieurs siècles.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Alternative Energy Path",
          fr: "Voie Énergétique Alternative",
        },
        description: {
          en: "If water or wind power had been more effectively harnessed instead of coal, industrial development might have taken a more environmentally sustainable path.",
          fr: "Si l'énergie hydraulique ou éolienne avait été exploitée plus efficacement au lieu du charbon, le développement industriel aurait pu prendre une voie plus durable sur le plan environnemental.",
        },
        probability: 0.4,
      },
    ],
    connections: [
      5, 8, 9, 10, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    ],
    coordinates: { x: 0.65, y: 0.4 },
    importance: 0.95,
  },
  {
    id: 7,
    title: {
      en: "Byzantine Empire Falls",
      fr: "Chute de l'Empire Byzantin",
    },
    date: "1453 CE",
    era: "medieval",
    description: {
      en: "The fall of Constantinople to the Ottoman Turks, ending the Byzantine Empire and the last remnant of the Roman Empire.",
      fr: "La chute de Constantinople aux mains des Turcs ottomans, mettant fin à l'Empire byzantin et au dernier vestige de l'Empire romain.",
    },
    consequences: [
      {
        en: "End of the Roman imperial tradition",
        fr: "Fin de la tradition impériale romaine",
      },
      {
        en: "Ottoman control of trade routes to Asia",
        fr: "Contrôle ottoman des routes commerciales vers l'Asie",
      },
      {
        en: "Exodus of Greek scholars to Western Europe",
        fr: "Exode des savants grecs vers l'Europe occidentale",
      },
    ],
    causes: [
      {
        en: "Ottoman military expansion",
        fr: "Expansion militaire ottomane",
      },
      {
        en: "Weakened Byzantine state",
        fr: "État byzantin affaibli",
      },
      {
        en: "Fourth Crusade's damage to the city",
        fr: "Dommages causés à la ville par la quatrième croisade",
      },
      {
        en: "Lack of Western support",
        fr: "Manque de soutien occidental",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Byzantine Survival",
          fr: "Survie Byzantine",
        },
        description: {
          en: "A surviving Byzantine Empire might have served as a buffer between Europe and the Middle East, potentially preventing later conflicts.",
          fr: "Un Empire byzantin survivant aurait pu servir de tampon entre l'Europe et le Moyen-Orient, empêchant potentiellement des conflits ultérieurs.",
        },
        probability: 0.3,
      },
    ],
    connections: [1, 5, 17, 19, 20, 21, 22, 23],
    coordinates: { x: 0.45, y: 0.2 },
    importance: 0.75,
  },
  {
    id: 8,
    title: {
      en: "American Revolution",
      fr: "Révolution Américaine",
    },
    date: "1775-1783",
    era: "industrial",
    description: {
      en: "The successful rebellion of thirteen North American colonies against British rule, establishing the United States of America.",
      fr: "La rébellion réussie de treize colonies nord-américaines contre la domination britannique, établissant les États-Unis d'Amérique.",
    },
    consequences: [
      {
        en: "First modern democratic republic",
        fr: "Première république démocratique moderne",
      },
      {
        en: "Inspiration for other independence movements",
        fr: "Inspiration pour d'autres mouvements d'indépendance",
      },
      {
        en: "New model of government with checks and balances",
        fr: "Nouveau modèle de gouvernement avec des freins et contrepoids",
      },
      {
        en: "Expansion of voting rights",
        fr: "Expansion des droits de vote",
      },
    ],
    causes: [
      {
        en: "Taxation without representation",
        fr: "Taxation sans représentation",
      },
      {
        en: "Enlightenment ideals",
        fr: "Idéaux des Lumières",
      },
      {
        en: "Colonial self-governance tradition",
        fr: "Tradition d'autonomie coloniale",
      },
      {
        en: "British debt from Seven Years' War",
        fr: "Dette britannique de la guerre de Sept Ans",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "British North America",
          fr: "Amérique du Nord Britannique",
        },
        description: {
          en: "If the revolution had failed, North America might have developed like Canada or Australia as part of the British Commonwealth.",
          fr: "Si la révolution avait échoué, l'Amérique du Nord aurait pu se développer comme le Canada ou l'Australie dans le cadre du Commonwealth britannique.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Fragmented States",
          fr: "États Fragmentés",
        },
        description: {
          en: "Without a strong federal constitution, the United States might have fragmented into multiple smaller nations.",
          fr: "Sans une constitution fédérale forte, les États-Unis auraient pu se fragmenter en plusieurs petites nations.",
        },
        probability: 0.5,
      },
    ],
    connections: [3, 5, 9, 25, 27, 29, 30, 31, 33, 34, 37],
    coordinates: { x: 0.7, y: 0.25 },
    importance: 0.85,
  },
  {
    id: 9,
    title: {
      en: "World War I",
      fr: "Première Guerre Mondiale",
    },
    date: "1914-1918",
    era: "modern",
    description: {
      en: "A global war originating in Europe that led to the mobilization of more than 70 million military personnel and resulted in over 9 million combatant deaths.",
      fr: "Une guerre mondiale originaire d'Europe qui a conduit à la mobilisation de plus de 70 millions de militaires et a entraîné plus de 9 millions de morts au combat.",
    },
    consequences: [
      {
        en: "Collapse of four empires",
        fr: "Effondrement de quatre empires",
      },
      {
        en: "Russian Revolution",
        fr: "Révolution russe",
      },
      {
        en: "Redrawing of national boundaries",
        fr: "Redéfinition des frontières nationales",
      },
      {
        en: "League of Nations",
        fr: "Société des Nations",
      },
      {
        en: "Conditions leading to World War II",
        fr: "Conditions menant à la Seconde Guerre mondiale",
      },
    ],
    causes: [
      {
        en: "Militarism and arms race",
        fr: "Militarisme et course aux armements",
      },
      {
        en: "Alliance systems",
        fr: "Systèmes d'alliances",
      },
      {
        en: "Imperialism",
        fr: "Impérialisme",
      },
      {
        en: "Nationalism",
        fr: "Nationalisme",
      },
      {
        en: "Assassination of Archduke Franz Ferdinand",
        fr: "Assassinat de l'archiduc François-Ferdinand",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Diplomatic Resolution",
          fr: "Résolution Diplomatique",
        },
        description: {
          en: "If the July Crisis had been resolved diplomatically, the 20th century might have avoided its two most devastating conflicts.",
          fr: "Si la crise de juillet avait été résolue diplomatiquement, le 20e siècle aurait pu éviter ses deux conflits les plus dévastateurs.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Limited Regional Conflict",
          fr: "Conflit Régional Limité",
        },
        description: {
          en: "The war might have remained a limited Balkan conflict without global involvement.",
          fr: "La guerre aurait pu rester un conflit balkanique limité sans implication mondiale.",
        },
        probability: 0.2,
      },
    ],
    connections: [6, 8, 10, 11, 30, 33, 36, 38, 39, 40, 43],
    coordinates: { x: 0.75, y: 0.5 },
    importance: 0.9,
  },
  {
    id: 10,
    title: {
      en: "World War II",
      fr: "Seconde Guerre Mondiale",
    },
    date: "1939-1945",
    era: "modern",
    description: {
      en: "A global war that involved the vast majority of the world's nations, including all of the great powers, forming two opposing military alliances.",
      fr: "Une guerre mondiale qui a impliqué la grande majorité des nations du monde, y compris toutes les grandes puissances, formant deux alliances militaires opposées.",
    },
    consequences: [
      {
        en: "United Nations formation",
        fr: "Formation des Nations Unies",
      },
      {
        en: "Cold War",
        fr: "Guerre froide",
      },
      {
        en: "Decolonization",
        fr: "Décolonisation",
      },
      {
        en: "Nuclear weapons",
        fr: "Armes nucléaires",
      },
      {
        en: "European integration",
        fr: "Intégration européenne",
      },
    ],
    causes: [
      {
        en: "Treaty of Versailles",
        fr: "Traité de Versailles",
      },
      {
        en: "Great Depression",
        fr: "Grande Dépression",
      },
      {
        en: "Rise of fascism",
        fr: "Montée du fascisme",
      },
      {
        en: "Failure of appeasement",
        fr: "Échec de l'apaisement",
      },
      {
        en: "Japanese imperialism",
        fr: "Impérialisme japonais",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Axis Victory",
          fr: "Victoire de l'Axe",
        },
        description: {
          en: "An Axis victory would have dramatically altered global politics, with authoritarian regimes dominating Europe and Asia.",
          fr: "Une victoire de l'Axe aurait considérablement modifié la politique mondiale, avec des régimes autoritaires dominant l'Europe et l'Asie.",
        },
        probability: 0.2,
      },
      {
        title: {
          en: "No Pacific War",
          fr: "Pas de Guerre du Pacifique",
        },
        description: {
          en: "Without Japanese attack on Pearl Harbor, the war might have remained primarily European in focus.",
          fr: "Sans l'attaque japonaise sur Pearl Harbor, la guerre serait peut-être restée principalement centrée sur l'Europe.",
        },
        probability: 0.3,
      },
    ],
    connections: [9, 11, 12, 39, 40, 41, 42, 43],
    coordinates: { x: 0.8, y: 0.4 },
    importance: 0.95,
  },
  {
    id: 11,
    title: {
      en: "Cold War",
      fr: "Guerre Froide",
    },
    date: "1947-1991",
    era: "modern",
    description: {
      en: "A period of geopolitical tension between the Soviet Union and the United States and their respective allies.",
      fr: "Une période de tension géopolitique entre l'Union soviétique et les États-Unis et leurs alliés respectifs.",
    },
    consequences: [
      {
        en: "Arms race and nuclear proliferation",
        fr: "Course aux armements et prolifération nucléaire",
      },
      {
        en: "Space race",
        fr: "Course à l'espace",
      },
      {
        en: "Proxy wars",
        fr: "Guerres par procuration",
      },
      {
        en: "Military-industrial complex",
        fr: "Complexe militaro-industriel",
      },
      {
        en: "Divided global order",
        fr: "Ordre mondial divisé",
      },
    ],
    causes: [
      {
        en: "Ideological differences",
        fr: "Différences idéologiques",
      },
      {
        en: "Power vacuum after World War II",
        fr: "Vide de pouvoir après la Seconde Guerre mondiale",
      },
      {
        en: "Nuclear weapons development",
        fr: "Développement d'armes nucléaires",
      },
      {
        en: "Expansionist Soviet policy",
        fr: "Politique expansionniste soviétique",
      },
      {
        en: "Containment American policy",
        fr: "Politique américaine d'endiguement",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Hot War",
          fr: "Guerre Chaude",
        },
        description: {
          en: "Direct military conflict between superpowers could have led to nuclear war and global devastation.",
          fr: "Un conflit militaire direct entre les superpuissances aurait pu conduire à une guerre nucléaire et à une dévastation mondiale.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Early Soviet Collapse",
          fr: "Effondrement Soviétique Précoce",
        },
        description: {
          en: "An earlier collapse of the Soviet system might have led to a more stable transition and less authoritarian Russia today.",
          fr: "Un effondrement plus précoce du système soviétique aurait pu conduire à une transition plus stable et à une Russie moins autoritaire aujourd'hui.",
        },
        probability: 0.4,
      },
    ],
    connections: [10, 12, 13, 33, 39, 40, 41, 42, 43],
    coordinates: { x: 0.85, y: 0.3 },
    importance: 0.85,
  },
  {
    id: 12,
    title: {
      en: "Digital Revolution",
      fr: "Révolution Numérique",
    },
    date: "1980s-Present",
    era: "contemporary",
    description: {
      en: "The shift from analog electronic and mechanical devices to digital technology, fundamentally changing how humans communicate and work.",
      fr: "Le passage des dispositifs électroniques et mécaniques analogiques à la technologie numérique, changeant fondamentalement la façon dont les humains communiquent et travaillent.",
    },
    consequences: [
      {
        en: "Internet and global connectivity",
        fr: "Internet et connectivité mondiale",
      },
      {
        en: "Information economy",
        fr: "Économie de l'information",
      },
      {
        en: "Social media",
        fr: "Médias sociaux",
      },
      {
        en: "Automation and AI",
        fr: "Automatisation et IA",
      },
      {
        en: "Privacy concerns",
        fr: "Préoccupations liées à la vie privée",
      },
    ],
    causes: [
      {
        en: "Semiconductor development",
        fr: "Développement des semi-conducteurs",
      },
      {
        en: "Military and academic research",
        fr: "Recherche militaire et académique",
      },
      {
        en: "Personal computer innovation",
        fr: "Innovation en matière d'ordinateurs personnels",
      },
      {
        en: "Telecommunications advances",
        fr: "Avancées en télécommunications",
      },
      {
        en: "Software development",
        fr: "Développement de logiciels",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Regulated Development",
          fr: "Développement Réglementé",
        },
        description: {
          en: "With stronger early regulation, digital technologies might have developed with greater privacy protections and less monopolization.",
          fr: "Avec une réglementation précoce plus forte, les technologies numériques auraient pu se développer avec une meilleure protection de la vie privée et moins de monopolisation.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Delayed Adoption",
          fr: "Adoption Retardée",
        },
        description: {
          en: "Without key innovations or with greater resistance, digital technology might have spread more slowly and less pervasively.",
          fr: "Sans innovations clés ou avec une plus grande résistance, la technologie numérique aurait pu se répandre plus lentement et de manière moins généralisée.",
        },
        probability: 0.3,
      },
    ],
    connections: [10, 11, 13, 41, 43],
    coordinates: { x: 0.9, y: 0.5 },
    importance: 0.9,
  },
  {
    id: 13,
    title: {
      en: "Climate Change Recognition",
      fr: "Reconnaissance du Changement Climatique",
    },
    date: "1990s-Present",
    era: "contemporary",
    description: {
      en: "The growing scientific consensus and public awareness about human-caused climate change and its potential impacts.",
      fr: "Le consensus scientifique croissant et la sensibilisation du public au changement climatique d'origine humaine et à ses impacts potentiels.",
    },
    consequences: [
      {
        en: "International climate agreements",
        fr: "Accords internationaux sur le climat",
      },
      {
        en: "Renewable energy development",
        fr: "Développement des énergies renouvelables",
      },
      {
        en: "Environmental activism",
        fr: "Activisme environnemental",
      },
      {
        en: "Corporate sustainability initiatives",
        fr: "Initiatives de durabilité des entreprises",
      },
      {
        en: "Climate migration",
        fr: "Migration climatique",
      },
    ],
    causes: [
      {
        en: "Industrial emissions",
        fr: "Émissions industrielles",
      },
      {
        en: "Scientific research and evidence",
        fr: "Recherche scientifique et preuves",
      },
      {
        en: "Environmental movement",
        fr: "Mouvement environnemental",
      },
      {
        en: "Extreme weather events",
        fr: "Événements météorologiques extrêmes",
      },
      {
        en: "International cooperation",
        fr: "Coopération internationale",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Earlier Action",
          fr: "Action Plus Précoce",
        },
        description: {
          en: "If serious climate action had begun in the 1980s when the science became clear, global warming might have been significantly mitigated.",
          fr: "Si une action climatique sérieuse avait commencé dans les années 1980, lorsque la science est devenue claire, le réchauffement climatique aurait pu être considérablement atténué.",
        },
        probability: 0.5,
      },
      {
        title: {
          en: "Technology Solution",
          fr: "Solution Technologique",
        },
        description: {
          en: "Breakthrough technologies might still enable carbon capture and climate stabilization without major economic disruption.",
          fr: "Des technologies révolutionnaires pourraient encore permettre la capture du carbone et la stabilisation du climat sans perturbation économique majeure.",
        },
        probability: 0.3,
      },
    ],
    connections: [6, 12, 43],
    coordinates: { x: 0.95, y: 0.4 },
    importance: 0.85,
  },
  {
    id: 19,
    title: {
      en: "Charlemagne Crowned Emperor",
      fr: "Couronnement de Charlemagne",
    },
    date: "800 CE",
    era: "medieval",
    description: {
      en: "Charlemagne (Charles the Great) was crowned Emperor of the Romans by Pope Leo III, reviving the concept of a Western Roman Empire and establishing the Carolingian Empire.",
      fr: "Charlemagne (Charles le Grand) a été couronné Empereur des Romains par le Pape Léon III, ravivant le concept d'un Empire romain d'Occident et établissant l'Empire carolingien.",
    },
    consequences: [
      {
        en: "Revival of the concept of a Western Roman Empire",
        fr: "Renaissance du concept d'Empire romain d'Occident",
      },
      {
        en: "Strengthening of papal authority and church-state relations",
        fr: "Renforcement de l'autorité papale et des relations église-état",
      },
      {
        en: "Carolingian Renaissance of art, culture and learning",
        fr: "Renaissance carolingienne de l'art, de la culture et du savoir",
      },
      {
        en: "Establishment of feudal governance model across Europe",
        fr: "Établissement du modèle de gouvernance féodale à travers l'Europe",
      },
    ],
    causes: [
      {
        en: "Power vacuum in Western Europe after Roman collapse",
        fr: "Vide de pouvoir en Europe occidentale après l'effondrement romain",
      },
      {
        en: "Frankish military successes against neighboring peoples",
        fr: "Succès militaires francs contre les peuples voisins",
      },
      {
        en: "Alliance between Frankish rulers and the Catholic Church",
        fr: "Alliance entre les dirigeants francs et l'Église catholique",
      },
      {
        en: "Charlemagne's personal ambition and administrative skill",
        fr: "Ambition personnelle et compétence administrative de Charlemagne",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Enduring Carolingian Empire",
          fr: "Empire Carolingien Durable",
        },
        description: {
          en: "If the Carolingian Empire had not fragmented after Charlemagne's death, a unified Western Europe might have developed centuries earlier.",
          fr: "Si l'Empire carolingien ne s'était pas fragmenté après la mort de Charlemagne, une Europe occidentale unifiée aurait pu se développer des siècles plus tôt.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Eastern-Western Reconciliation",
          fr: "Réconciliation Orient-Occident",
        },
        description: {
          en: "If Charlemagne's imperial coronation had led to reconciliation rather than competition with the Byzantine Empire, a unified Christian world might have emerged.",
          fr: "Si le couronnement impérial de Charlemagne avait conduit à une réconciliation plutôt qu'à une compétition avec l'Empire byzantin, un monde chrétien unifié aurait pu émerger.",
        },
        probability: 0.2,
      },
    ],
    connections: [1, 2, 3, 7, 20],
    coordinates: { x: 0.25, y: 0.35 },
    importance: 0.85,
  },
  {
    id: 20,
    title: {
      en: "First Crusade",
      fr: "Première Croisade",
    },
    date: "1096-1099 CE",
    era: "medieval",
    description: {
      en: "A military expedition called by Pope Urban II to recapture Jerusalem and the Holy Land from Muslim control, resulting in the establishment of Crusader states in the Levant.",
      fr: "Une expédition militaire appelée par le pape Urbain II pour reconquérir Jérusalem et la Terre Sainte du contrôle musulman, aboutissant à l'établissement d'États croisés dans le Levant.",
    },
    consequences: [
      {
        en: "Establishment of Crusader states in the Middle East",
        fr: "Établissement d'États croisés au Moyen-Orient",
      },
      {
        en: "Increased trade and cultural exchange between Europe and the East",
        fr: "Augmentation des échanges commerciaux et culturels entre l'Europe et l'Orient",
      },
      {
        en: "Strengthening of papal authority and religious fervor",
        fr: "Renforcement de l'autorité papale et de la ferveur religieuse",
      },
      {
        en: "Deterioration of relations between Christianity and Islam",
        fr: "Détérioration des relations entre christianisme et islam",
      },
      {
        en: "Persecution of Jewish communities in Europe",
        fr: "Persécution des communautés juives en Europe",
      },
    ],
    causes: [
      {
        en: "Byzantine Emperor's request for military assistance",
        fr: "Demande d'assistance militaire de l'empereur byzantin",
      },
      {
        en: "Religious fervor and desire to secure access to holy sites",
        fr: "Ferveur religieuse et désir de sécuriser l'accès aux lieux saints",
      },
      {
        en: "Papal desire to assert authority over secular rulers",
        fr: "Désir papal d'affirmer son autorité sur les dirigeants séculiers",
      },
      {
        en: "Economic and social pressures in Europe",
        fr: "Pressions économiques et sociales en Europe",
      },
      {
        en: "Opportunity for land acquisition by European nobles",
        fr: "Opportunité d'acquisition de terres par les nobles européens",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Failed First Crusade",
          fr: "Échec de la Première Croisade",
        },
        description: {
          en: "If the First Crusade had failed, subsequent crusades might never have occurred, potentially leading to different Christian-Muslim relations.",
          fr: "Si la Première Croisade avait échoué, les croisades suivantes n'auraient peut-être jamais eu lieu, conduisant potentiellement à des relations différentes entre chrétiens et musulmans.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Permanent Crusader States",
          fr: "États Croisés Permanents",
        },
        description: {
          en: "If the Crusader states had been better established and defended, they might have become permanent European outposts in the Middle East.",
          fr: "Si les États croisés avaient été mieux établis et défendus, ils auraient pu devenir des avant-postes européens permanents au Moyen-Orient.",
        },
        probability: 0.2,
      },
    ],
    connections: [2, 7, 19, 21, 22],
    coordinates: { x: 0.35, y: 0.3 },
    importance: 0.8,
  },
  {
    id: 21,
    title: {
      en: "Mongol Empire Expansion",
      fr: "Expansion de l'Empire Mongol",
    },
    date: "1206-1368 CE",
    era: "medieval",
    description: {
      en: "The rapid expansion of the Mongol Empire under Genghis Khan and his successors, creating the largest contiguous land empire in history and connecting East Asia with Europe.",
      fr: "L'expansion rapide de l'Empire mongol sous Gengis Khan et ses successeurs, créant le plus grand empire terrestre contigu de l'histoire et reliant l'Asie de l'Est à l'Europe.",
    },
    consequences: [
      {
        en: "Creation of the largest contiguous land empire in history",
        fr: "Création du plus grand empire terrestre contigu de l'histoire",
      },
      {
        en: "Pax Mongolica enabling safe trade along the Silk Road",
        fr: "Pax Mongolica permettant un commerce sûr le long de la Route de la Soie",
      },
      {
        en: "Devastation of numerous cities and populations",
        fr: "Dévastation de nombreuses villes et populations",
      },
      {
        en: "Cultural and technological exchange across Eurasia",
        fr: "Échange culturel et technologique à travers l'Eurasie",
      },
      {
        en: "Spread of the Black Death along trade routes",
        fr: "Propagation de la Peste Noire le long des routes commerciales",
      },
    ],
    causes: [
      {
        en: "Unification of Mongol tribes under Genghis Khan",
        fr: "Unification des tribus mongoles sous Gengis Khan",
      },
      {
        en: "Superior military tactics and mobility",
        fr: "Tactiques militaires et mobilité supérieures",
      },
      {
        en: "Effective incorporation of conquered peoples and technologies",
        fr: "Incorporation efficace des peuples et technologies conquis",
      },
      {
        en: "Political fragmentation of target regions",
        fr: "Fragmentation politique des régions ciblées",
      },
      {
        en: "Climate changes affecting traditional Mongol pastoralism",
        fr: "Changements climatiques affectant le pastoralisme mongol traditionnel",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Conquest of Europe",
          fr: "Conquête de l'Europe",
        },
        description: {
          en: "If the Mongols had continued their western expansion into Europe rather than withdrawing, European development might have been dramatically altered.",
          fr: "Si les Mongols avaient poursuivi leur expansion occidentale en Europe plutôt que de se retirer, le développement européen aurait pu être radicalement modifié.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Longer-Lasting Empire",
          fr: "Empire Plus Durable",
        },
        description: {
          en: "If the Mongol Empire had developed more stable succession mechanisms, it might have endured as a unified entity for centuries longer.",
          fr: "Si l'Empire mongol avait développé des mécanismes de succession plus stables, il aurait pu perdurer en tant qu'entité unifiée pendant des siècles supplémentaires.",
        },
        probability: 0.2,
      },
    ],
    connections: [2, 4, 7, 20, 22],
    coordinates: { x: 0.32, y: 0.45 },
    importance: 0.9,
  },
  {
    id: 22,
    title: {
      en: "Invention of Printing Press",
      fr: "Invention de l'Imprimerie",
    },
    date: "c. 1440 CE",
    era: "medieval",
    description: {
      en: "Johannes Gutenberg's development of movable-type printing in Europe, revolutionizing the spread of information and dramatically reducing the cost and time of book production.",
      fr: "Le développement de l'imprimerie à caractères mobiles par Johannes Gutenberg en Europe, révolutionnant la diffusion de l'information et réduisant considérablement le coût et le temps de production des livres.",
    },
    consequences: [
      {
        en: "Democratization of knowledge and increased literacy",
        fr: "Démocratisation du savoir et augmentation de l'alphabétisation",
      },
      {
        en: "Rapid spread of Renaissance ideas and religious reformation",
        fr: "Diffusion rapide des idées de la Renaissance et de la réforme religieuse",
      },
      {
        en: "Standardization of languages and texts",
        fr: "Standardisation des langues et des textes",
      },
      {
        en: "Development of early mass media and public opinion",
        fr: "Développement des premiers médias de masse et de l'opinion publique",
      },
      {
        en: "Scientific revolution through wider dissemination of ideas",
        fr: "Révolution scientifique grâce à une plus large diffusion des idées",
      },
    ],
    causes: [
      {
        en: "Earlier printing technologies from China and Korea",
        fr: "Technologies d'impression antérieures de Chine et de Corée",
      },
      {
        en: "European paper manufacturing techniques",
        fr: "Techniques européennes de fabrication du papier",
      },
      {
        en: "Growing demand for books from universities and merchants",
        fr: "Demande croissante de livres par les universités et les marchands",
      },
      {
        en: "Gutenberg's technical innovations in metallurgy and ink",
        fr: "Innovations techniques de Gutenberg en métallurgie et en encre",
      },
      {
        en: "Economic incentives for faster book production",
        fr: "Incitations économiques pour une production de livres plus rapide",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Delayed Printing Revolution",
          fr: "Révolution de l'Imprimerie Retardée",
        },
        description: {
          en: "If movable type printing had been delayed by a century, the Renaissance and Reformation might have progressed much more slowly.",
          fr: "Si l'imprimerie à caractères mobiles avait été retardée d'un siècle, la Renaissance et la Réforme auraient pu progresser beaucoup plus lentement.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Church Control of Printing",
          fr: "Contrôle de l'Imprimerie par l'Église",
        },
        description: {
          en: "If the Church had established early control over printing technology, religious and intellectual history might have followed a more controlled path.",
          fr: "Si l'Église avait établi un contrôle précoce sur la technologie de l'imprimerie, l'histoire religieuse et intellectuelle aurait pu suivre une voie plus contrôlée.",
        },
        probability: 0.3,
      },
    ],
    connections: [3, 4, 5, 7, 21],
    coordinates: { x: 0.42, y: 0.35 },
    importance: 0.9,
  },
  {
    id: 23,
    title: {
      en: "Hundred Years' War",
      fr: "Guerre de Cent Ans",
    },
    date: "1337-1453 CE",
    era: "medieval",
    description: {
      en: "A series of conflicts between England and France over succession to the French throne, territorial disputes, and control of trade, fundamentally altering European military tactics and national identities.",
      fr: "Une série de conflits entre l'Angleterre et la France concernant la succession au trône français, les disputes territoriales et le contrôle du commerce, modifiant fondamentalement les tactiques militaires européennes et les identités nationales.",
    },
    consequences: [
      {
        en: "Development of national identities in England and France",
        fr: "Développement des identités nationales en Angleterre et en France",
      },
      {
        en: "Military innovations including longbow tactics and artillery",
        fr: "Innovations militaires incluant les tactiques d'arc long et l'artillerie",
      },
      {
        en: "Decline of feudal cavalry and rise of professional armies",
        fr: "Déclin de la cavalerie féodale et montée des armées professionnelles",
      },
      {
        en: "Economic disruption and population decline in France",
        fr: "Perturbation économique et déclin de la population en France",
      },
      {
        en: "Strengthening of monarchical authority",
        fr: "Renforcement de l'autorité monarchique",
      },
    ],
    causes: [
      {
        en: "Disputed succession to the French throne",
        fr: "Succession contestée au trône français",
      },
      {
        en: "English territorial claims in France",
        fr: "Revendications territoriales anglaises en France",
      },
      {
        en: "Economic competition over Flanders wool trade",
        fr: "Concurrence économique pour le commerce de la laine des Flandres",
      },
      {
        en: "Evolving concepts of national sovereignty",
        fr: "Évolution des concepts de souveraineté nationale",
      },
      {
        en: "Dynastic ambitions of ruling families",
        fr: "Ambitions dynastiques des familles régnantes",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "English Victory",
          fr: "Victoire Anglaise",
        },
        description: {
          en: "If England had secured the French crown permanently, a united Anglo-French state might have dominated European history.",
          fr: "Si l'Angleterre avait obtenu définitivement la couronne française, un État anglo-français uni aurait pu dominer l'histoire européenne.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Earlier Resolution",
          fr: "Résolution Plus Précoce",
        },
        description: {
          en: "An earlier end to the conflict might have preserved feudal structures longer and delayed the development of nation-states.",
          fr: "Une fin plus précoce du conflit aurait pu préserver plus longtemps les structures féodales et retarder le développement des États-nations.",
        },
        probability: 0.4,
      },
    ],
    connections: [3, 4, 7, 20, 22],
    coordinates: { x: 0.38, y: 0.4 },
    importance: 0.75,
  },
  {
    id: 24,
    title: {
      en: "Leonardo da Vinci's Works",
      fr: "Œuvres de Léonard de Vinci",
    },
    date: "1452-1519",
    era: "renaissance",
    description: {
      en: "The artistic and scientific contributions of Leonardo da Vinci, whose paintings, anatomical studies, engineering designs, and scientific observations epitomized Renaissance ideals of humanism and scientific inquiry.",
      fr: "Les contributions artistiques et scientifiques de Léonard de Vinci, dont les peintures, les études anatomiques, les conceptions d'ingénierie et les observations scientifiques incarnaient les idéaux de la Renaissance en matière d'humanisme et de recherche scientifique.",
    },
    consequences: [
      {
        en: "Revolutionary artistic techniques including sfumato and chiaroscuro",
        fr: "Techniques artistiques révolutionnaires, notamment le sfumato et le clair-obscur",
      },
      {
        en: "Advancements in anatomical understanding through human dissection",
        fr: "Avancées dans la compréhension anatomique grâce à la dissection humaine",
      },
      {
        en: "Visionary engineering concepts centuries ahead of their time",
        fr: "Concepts d'ingénierie visionnaires des siècles en avance sur leur temps",
      },
      {
        en: "Integration of art and science as complementary pursuits",
        fr: "Intégration de l'art et de la science comme activités complémentaires",
      },
      {
        en: "Establishment of the Renaissance ideal of the 'Universal Man'",
        fr: "Établissement de l'idéal de la Renaissance de 'l'Homme universel'",
      },
    ],
    causes: [
      {
        en: "Florentine artistic tradition and patronage system",
        fr: "Tradition artistique florentine et système de mécénat",
      },
      {
        en: "Revival of classical learning and observation",
        fr: "Renaissance de l'apprentissage et de l'observation classiques",
      },
      {
        en: "Access to wealthy patrons including the Medici and Sforza families",
        fr: "Accès à de riches mécènes, notamment les familles Médicis et Sforza",
      },
      {
        en: "Intellectual freedom of Renaissance city-states",
        fr: "Liberté intellectuelle des cités-États de la Renaissance",
      },
      {
        en: "Personal curiosity and observational genius",
        fr: "Curiosité personnelle et génie de l'observation",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Completed Projects",
          fr: "Projets Achevés",
        },
        description: {
          en: "If Leonardo had completed more of his ambitious projects and publications, scientific and technological development might have accelerated by decades or centuries.",
          fr: "Si Léonard avait achevé davantage de ses projets et publications ambitieux, le développement scientifique et technologique aurait pu être accéléré de plusieurs décennies ou siècles.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Preserved Notebooks",
          fr: "Carnets Préservés",
        },
        description: {
          en: "If all of Leonardo's notebooks had been preserved and widely published during his lifetime, his scientific impact would have been far greater.",
          fr: "Si tous les carnets de Léonard avaient été préservés et largement publiés de son vivant, son impact scientifique aurait été bien plus important.",
        },
        probability: 0.4,
      },
    ],
    connections: [5, 22, 25, 26, 28],
    coordinates: { x: 0.48, y: 0.28 },
    importance: 0.9,
  },
  {
    id: 25,
    title: {
      en: "Protestant Reformation",
      fr: "Réforme Protestante",
    },
    date: "1517",
    era: "renaissance",
    description: {
      en: "Martin Luther's challenge to Catholic Church practices, beginning with his Ninety-Five Theses, which sparked religious reform movements across Europe and fundamentally altered Western Christianity.",
      fr: "La contestation des pratiques de l'Église catholique par Martin Luther, commençant par ses Quatre-vingt-quinze thèses, qui a déclenché des mouvements de réforme religieuse à travers l'Europe et a fondamentalement modifié le christianisme occidental.",
    },
    consequences: [
      {
        en: "Fragmentation of Western Christianity into Catholic and Protestant denominations",
        fr: "Fragmentation du christianisme occidental en confessions catholiques et protestantes",
      },
      {
        en: "Religious wars across Europe",
        fr: "Guerres de religion à travers l'Europe",
      },
      {
        en: "Increased literacy and vernacular Bible translations",
        fr: "Augmentation de l'alphabétisation et traductions de la Bible en langues vernaculaires",
      },
      {
        en: "Reduction of Church political power",
        fr: "Réduction du pouvoir politique de l'Église",
      },
      {
        en: "Development of religious pluralism and eventually tolerance",
        fr: "Développement du pluralisme religieux et finalement de la tolérance",
      },
    ],
    causes: [
      {
        en: "Corruption within the Catholic Church including the sale of indulgences",
        fr: "Corruption au sein de l'Église catholique, y compris la vente d'indulgences",
      },
      {
        en: "Renaissance humanism encouraging critical examination of texts",
        fr: "Humanisme de la Renaissance encourageant l'examen critique des textes",
      },
      {
        en: "Political tensions between German princes and the Holy Roman Emperor",
        fr: "Tensions politiques entre les princes allemands et l'empereur du Saint-Empire romain",
      },
      {
        en: "Printing press enabling rapid spread of ideas",
        fr: "Imprimerie permettant la diffusion rapide des idées",
      },
      {
        en: "Growing nationalism and resistance to papal authority",
        fr: "Nationalisme croissant et résistance à l'autorité papale",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Catholic Reform Without Schism",
          fr: "Réforme Catholique Sans Schisme",
        },
        description: {
          en: "If the Catholic Church had embraced internal reform earlier, the Protestant break might have been avoided, maintaining religious unity in Western Europe.",
          fr: "Si l'Église catholique avait adopté une réforme interne plus tôt, la rupture protestante aurait pu être évitée, maintenant l'unité religieuse en Europe occidentale.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Suppressed Reformation",
          fr: "Réforme Réprimée",
        },
        description: {
          en: "If early Protestant movements had been effectively suppressed, religious uniformity might have persisted longer but with greater social tensions.",
          fr: "Si les premiers mouvements protestants avaient été efficacement réprimés, l'uniformité religieuse aurait pu persister plus longtemps mais avec des tensions sociales plus importantes.",
        },
        probability: 0.4,
      },
    ],
    connections: [5, 22, 26, 27, 28],
    coordinates: { x: 0.52, y: 0.32 },
    importance: 0.95,
  },
  {
    id: 26,
    title: {
      en: "Copernican Revolution",
      fr: "Révolution Copernicienne",
    },
    date: "1543",
    era: "renaissance",
    description: {
      en: "Nicolaus Copernicus's publication of 'On the Revolutions of the Celestial Spheres,' proposing a heliocentric model of the universe that challenged the Earth-centered Ptolemaic system accepted for over a millennium.",
      fr: "Publication par Nicolas Copernic de 'Des révolutions des sphères célestes', proposant un modèle héliocentrique de l'univers qui remettait en question le système ptolémaïque géocentrique accepté depuis plus d'un millénaire.",
    },
    consequences: [
      {
        en: "Fundamental shift in humanity's cosmic perspective",
        fr: "Changement fondamental dans la perspective cosmique de l'humanité",
      },
      {
        en: "Foundation for the Scientific Revolution",
        fr: "Fondement de la Révolution scientifique",
      },
      {
        en: "Challenge to religious cosmology and authority",
        fr: "Remise en question de la cosmologie religieuse et de son autorité",
      },
      {
        en: "Development of modern astronomy",
        fr: "Développement de l'astronomie moderne",
      },
      {
        en: "Methodological revolution emphasizing mathematical models over sensory observation",
        fr: "Révolution méthodologique privilégiant les modèles mathématiques à l'observation sensorielle",
      },
    ],
    causes: [
      {
        en: "Mathematical inconsistencies in the Ptolemaic system",
        fr: "Incohérences mathématiques dans le système ptolémaïque",
      },
      {
        en: "Renaissance recovery of ancient Greek astronomical texts",
        fr: "Redécouverte pendant la Renaissance de textes astronomiques grecs anciens",
      },
      {
        en: "Improved observational instruments and techniques",
        fr: "Amélioration des instruments et techniques d'observation",
      },
      {
        en: "Intellectual climate encouraging questioning of ancient authorities",
        fr: "Climat intellectuel encourageant la remise en question des autorités anciennes",
      },
      {
        en: "Copernicus's mathematical genius and observational skills",
        fr: "Génie mathématique et compétences d'observation de Copernic",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Earlier Acceptance",
          fr: "Acceptation Plus Précoce",
        },
        description: {
          en: "If Copernicus's model had been immediately accepted rather than taking decades to gain traction, scientific progress might have accelerated significantly.",
          fr: "Si le modèle de Copernic avait été immédiatement accepté plutôt que de mettre des décennies à s'imposer, le progrès scientifique aurait pu s'accélérer considérablement.",
        },
        probability: 0.2,
      },
      {
        title: {
          en: "Delayed Discovery",
          fr: "Découverte Retardée",
        },
        description: {
          en: "Without Copernicus, the heliocentric model might have been delayed by generations, potentially slowing the Scientific Revolution.",
          fr: "Sans Copernic, le modèle héliocentrique aurait pu être retardé de plusieurs générations, ralentissant potentiellement la Révolution scientifique.",
        },
        probability: 0.4,
      },
    ],
    connections: [5, 24, 25, 27, 28],
    coordinates: { x: 0.55, y: 0.25 },
    importance: 0.9,
  },
  {
    id: 27,
    title: {
      en: "Voyages of Columbus",
      fr: "Voyages de Colomb",
    },
    date: "1492-1504",
    era: "renaissance",
    description: {
      en: "Christopher Columbus's four transatlantic voyages that initiated sustained European contact with the Americas, beginning the Columbian Exchange and the Age of Exploration.",
      fr: "Les quatre voyages transatlantiques de Christophe Colomb qui ont initié un contact européen soutenu avec les Amériques, marquant le début de l'échange colombien et de l'ère des explorations.",
    },
    consequences: [
      {
        en: "European colonization of the Americas",
        fr: "Colonisation européenne des Amériques",
      },
      {
        en: "Columbian Exchange of plants, animals, diseases, and cultures",
        fr: "Échange colombien de plantes, d'animaux, de maladies et de cultures",
      },
      {
        en: "Demographic collapse of indigenous American populations",
        fr: "Effondrement démographique des populations autochtones américaines",
      },
      {
        en: "Transformation of global trade patterns and wealth distribution",
        fr: "Transformation des modèles commerciaux mondiaux et de la répartition des richesses",
      },
      {
        en: "Shift in European power toward Atlantic-facing nations",
        fr: "Déplacement du pouvoir européen vers les nations tournées vers l'Atlantique",
      },
    ],
    causes: [
      {
        en: "European desire for direct trade routes to Asia",
        fr: "Désir européen de routes commerciales directes vers l'Asie",
      },
      {
        en: "Ottoman control of eastern Mediterranean trade routes",
        fr: "Contrôle ottoman des routes commerciales de la Méditerranée orientale",
      },
      {
        en: "Advances in shipbuilding and navigation technology",
        fr: "Avancées dans la construction navale et la technologie de navigation",
      },
      {
        en: "Spanish completion of the Reconquista freeing resources",
        fr: "Achèvement espagnol de la Reconquista libérant des ressources",
      },
      {
        en: "Competition between European powers for trade and territory",
        fr: "Concurrence entre les puissances européennes pour le commerce et le territoire",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Failed Expedition",
          fr: "Expédition Échouée",
        },
        description: {
          en: "If Columbus had failed to reach the Americas or return, European discovery might have been delayed by decades, potentially allowing indigenous societies more time to develop resistance to European diseases.",
          fr: "Si Colomb n'avait pas réussi à atteindre les Amériques ou à revenir, la découverte européenne aurait pu être retardée de plusieurs décennies, permettant potentiellement aux sociétés autochtones de développer une résistance aux maladies européennes.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Portuguese America",
          fr: "Amérique Portugaise",
        },
        description: {
          en: "If Portugal rather than Spain had sponsored the first successful transatlantic voyages, the colonial history of the Americas might have followed a different pattern.",
          fr: "Si le Portugal plutôt que l'Espagne avait financé les premiers voyages transatlantiques réussis, l'histoire coloniale des Amériques aurait pu suivre un schéma différent.",
        },
        probability: 0.4,
      },
    ],
    connections: [5, 6, 25, 26, 28],
    coordinates: { x: 0.47, y: 0.42 },
    importance: 0.95,
  },
  {
    id: 28,
    title: {
      en: "Medici Banking Innovations",
      fr: "Innovations Bancaires des Médicis",
    },
    date: "15th Century",
    era: "renaissance",
    description: {
      en: "The Medici family's revolutionary banking practices in Florence, including double-entry bookkeeping, branch banking, and holding companies, which helped finance the Renaissance and develop modern capitalism.",
      fr: "Les pratiques bancaires révolutionnaires de la famille Médicis à Florence, comprenant la comptabilité en partie double, les succursales bancaires et les sociétés holding, qui ont contribué à financer la Renaissance et à développer le capitalisme moderne.",
    },
    consequences: [
      {
        en: "Development of modern banking and accounting practices",
        fr: "Développement des pratiques bancaires et comptables modernes",
      },
      {
        en: "Financing of Renaissance art and architecture",
        fr: "Financement de l'art et de l'architecture de la Renaissance",
      },
      {
        en: "Creation of the first multinational banking system",
        fr: "Création du premier système bancaire multinational",
      },
      {
        en: "Rise of merchant banking families as political powers",
        fr: "Montée des familles bancaires marchandes en tant que puissances politiques",
      },
      {
        en: "Establishment of patron-client relationships in the arts",
        fr: "Établissement de relations patron-client dans les arts",
      },
    ],
    causes: [
      {
        en: "Growth of international trade requiring financial services",
        fr: "Croissance du commerce international nécessitant des services financiers",
      },
      {
        en: "Relaxation of religious prohibitions on usury",
        fr: "Assouplissement des interdictions religieuses sur l'usure",
      },
      {
        en: "Political stability in Italian city-states",
        fr: "Stabilité politique dans les cités-États italiennes",
      },
      {
        en: "Competition among banking families",
        fr: "Concurrence entre les familles bancaires",
      },
      {
        en: "Mathematical innovations enabling complex accounting",
        fr: "Innovations mathématiques permettant une comptabilité complexe",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Church Banking Dominance",
          fr: "Domination Bancaire de l'Église",
        },
        description: {
          en: "If religious institutions had maintained control of banking, economic development might have followed a more centralized and conservative path.",
          fr: "Si les institutions religieuses avaient maintenu le contrôle des activités bancaires, le développement économique aurait pu suivre une voie plus centralisée et conservatrice.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Earlier Banking Collapse",
          fr: "Effondrement Bancaire Précoce",
        },
        description: {
          en: "If the Medici bank had collapsed earlier, Renaissance art and culture might have been significantly diminished without their patronage.",
          fr: "Si la banque Médicis s'était effondrée plus tôt, l'art et la culture de la Renaissance auraient pu être considérablement diminués sans leur mécénat.",
        },
        probability: 0.4,
      },
    ],
    connections: [5, 24, 25, 26, 27],
    coordinates: { x: 0.51, y: 0.38 },
    importance: 0.8,
  },
  {
    id: 29,
    title: {
      en: "Invention of the Steam Engine",
      fr: "Invention de la Machine à Vapeur",
    },
    date: "1712-1781",
    era: "industrial",
    description: {
      en: "The development of practical steam engines by Thomas Newcomen and James Watt, providing unprecedented power for industrial machinery and transportation, fundamentally transforming manufacturing and mobility.",
      fr: "Le développement de machines à vapeur pratiques par Thomas Newcomen et James Watt, fournissant une puissance sans précédent pour les machines industrielles et les transports, transformant fondamentalement la fabrication et la mobilité.",
    },
    consequences: [
      {
        en: "Mechanization of manufacturing processes",
        fr: "Mécanisation des processus de fabrication",
      },
      {
        en: "Development of factory system and mass production",
        fr: "Développement du système d'usine et de la production de masse",
      },
      {
        en: "Creation of steam-powered transportation (railways and ships)",
        fr: "Création de transports à vapeur (chemins de fer et navires)",
      },
      {
        en: "Dramatic increase in production capacity and economic output",
        fr: "Augmentation spectaculaire de la capacité de production et de la production économique",
      },
      {
        en: "Shift from water power to coal as primary energy source",
        fr: "Passage de l'énergie hydraulique au charbon comme source d'énergie principale",
      },
    ],
    causes: [
      {
        en: "Need for efficient water pumping in mines",
        fr: "Besoin de pompage d'eau efficace dans les mines",
      },
      {
        en: "Scientific understanding of atmospheric pressure and vacuums",
        fr: "Compréhension scientifique de la pression atmosphérique et des vides",
      },
      {
        en: "Availability of coal as fuel source",
        fr: "Disponibilité du charbon comme source de combustible",
      },
      {
        en: "Engineering innovations in metallurgy and precision manufacturing",
        fr: "Innovations en ingénierie dans la métallurgie et la fabrication de précision",
      },
      {
        en: "Economic incentives for more efficient power sources",
        fr: "Incitations économiques pour des sources d'énergie plus efficaces",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Delayed Steam Technology",
          fr: "Technologie à Vapeur Retardée",
        },
        description: {
          en: "Without Watt's improvements to Newcomen's engine, industrial development might have progressed much more slowly, delaying global industrialization by decades.",
          fr: "Sans les améliorations de Watt au moteur de Newcomen, le développement industriel aurait pu progresser beaucoup plus lentement, retardant l'industrialisation mondiale de plusieurs décennies.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Alternative Power Sources",
          fr: "Sources d'Énergie Alternatives",
        },
        description: {
          en: "If water power had been more extensively developed instead of steam, industrial centers might have remained more decentralized along rivers rather than concentrated in coal regions.",
          fr: "Si l'énergie hydraulique avait été développée plus largement au lieu de la vapeur, les centres industriels seraient peut-être restés plus décentralisés le long des rivières plutôt que concentrés dans les régions charbonnières.",
        },
        probability: 0.3,
      },
    ],
    connections: [6, 8, 30, 31, 32],
    coordinates: { x: 0.6, y: 0.35 },
    importance: 0.95,
  },
  {
    id: 30,
    title: {
      en: "French Revolution",
      fr: "Révolution Française",
    },
    date: "1789-1799",
    era: "industrial",
    description: {
      en: "A period of radical social and political upheaval in France that overthrew the monarchy, established a republic, and significantly transformed French society with ideas of citizenship, nationalism, and secular society.",
      fr: "Une période de bouleversements sociaux et politiques radicaux en France qui a renversé la monarchie, établi une république et transformé considérablement la société française avec des idées de citoyenneté, de nationalisme et de société laïque.",
    },
    consequences: [
      {
        en: "End of feudalism and absolute monarchy in France",
        fr: "Fin du féodalisme et de la monarchie absolue en France",
      },
      {
        en: "Spread of republican and democratic ideals across Europe",
        fr: "Diffusion des idéaux républicains et démocratiques à travers l'Europe",
      },
      {
        en: "Development of modern nationalism and citizenship concepts",
        fr: "Développement des concepts modernes de nationalisme et de citoyenneté",
      },
      {
        en: "Secularization of government and society",
        fr: "Laïcisation du gouvernement et de la société",
      },
      {
        en: "Napoleonic Wars reshaping European political landscape",
        fr: "Guerres napoléoniennes reconfigurant le paysage politique européen",
      },
    ],
    causes: [
      {
        en: "Financial crisis exacerbated by French involvement in American Revolution",
        fr: "Crise financière aggravée par l'implication française dans la Révolution américaine",
      },
      {
        en: "Inequitable tax system burdening the Third Estate",
        fr: "Système fiscal inéquitable pesant sur le Tiers État",
      },
      {
        en: "Influence of Enlightenment ideas challenging traditional authority",
        fr: "Influence des idées des Lumières remettant en question l'autorité traditionnelle",
      },
      {
        en: "Food shortages and economic hardship",
        fr: "Pénuries alimentaires et difficultés économiques",
      },
      {
        en: "Ineffective leadership of Louis XVI",
        fr: "Leadership inefficace de Louis XVI",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Constitutional Monarchy",
          fr: "Monarchie Constitutionnelle",
        },
        description: {
          en: "If moderate reforms had succeeded and France had stabilized as a constitutional monarchy, European history might have avoided the radical phase of the Revolution and subsequent Napoleonic Wars.",
          fr: "Si des réformes modérées avaient réussi et que la France s'était stabilisée en tant que monarchie constitutionnelle, l'histoire européenne aurait pu éviter la phase radicale de la Révolution et les guerres napoléoniennes qui ont suivi.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Contained Revolution",
          fr: "Révolution Contenue",
        },
        description: {
          en: "If the revolutionary ideas had remained contained within France rather than spreading across Europe, the development of nationalism and democratic movements might have followed a different trajectory.",
          fr: "Si les idées révolutionnaires étaient restées contenues en France plutôt que de se répandre à travers l'Europe, le développement du nationalisme et des mouvements démocratiques aurait pu suivre une trajectoire différente.",
        },
        probability: 0.3,
      },
    ],
    connections: [6, 8, 25, 29, 31, 33],
    coordinates: { x: 0.62, y: 0.28 },
    importance: 0.9,
  },
  {
    id: 31,
    title: {
      en: "First Railway Boom",
      fr: "Premier Essor Ferroviaire",
    },
    date: "1830-1850",
    era: "industrial",
    description: {
      en: "The rapid expansion of railway networks across Europe and North America, revolutionizing transportation, commerce, and communication while dramatically reducing travel times and freight costs.",
      fr: "L'expansion rapide des réseaux ferroviaires à travers l'Europe et l'Amérique du Nord, révolutionnant les transports, le commerce et la communication tout en réduisant considérablement les temps de voyage et les coûts de fret.",
    },
    consequences: [
      {
        en: "Creation of national and international transportation networks",
        fr: "Création de réseaux de transport nationaux et internationaux",
      },
      {
        en: "Standardization of time zones and schedules",
        fr: "Standardisation des fuseaux horaires et des horaires",
      },
      {
        en: "Acceleration of urbanization and industrialization",
        fr: "Accélération de l'urbanisation et de l'industrialisation",
      },
      {
        en: "Development of mass tourism and commuting",
        fr: "Développement du tourisme de masse et des déplacements pendulaires",
      },
      {
        en: "Expansion of markets and economic integration",
        fr: "Expansion des marchés et intégration économique",
      },
    ],
    causes: [
      {
        en: "Invention of reliable steam locomotives",
        fr: "Invention de locomotives à vapeur fiables",
      },
      {
        en: "Availability of investment capital",
        fr: "Disponibilité de capital d'investissement",
      },
      {
        en: "Growing industrial output requiring efficient transportation",
        fr: "Production industrielle croissante nécessitant un transport efficace",
      },
      {
        en: "Competition between cities and nations",
        fr: "Concurrence entre villes et nations",
      },
      {
        en: "Technical innovations in civil engineering and metallurgy",
        fr: "Innovations techniques en génie civil et en métallurgie",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Delayed Railway Development",
          fr: "Développement Ferroviaire Retardé",
        },
        description: {
          en: "If railway technology had developed more slowly, industrialization might have remained more localized and urbanization patterns would have differed significantly.",
          fr: "Si la technologie ferroviaire s'était développée plus lentement, l'industrialisation serait peut-être restée plus localisée et les modèles d'urbanisation auraient été considérablement différents.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "State-Controlled Development",
          fr: "Développement Contrôlé par l'État",
        },
        description: {
          en: "If railways had been developed primarily as state enterprises rather than private ventures, their expansion patterns and economic impacts might have followed different priorities.",
          fr: "Si les chemins de fer avaient été développés principalement comme des entreprises d'État plutôt que des entreprises privées, leurs modèles d'expansion et leurs impacts économiques auraient pu suivre des priorités différentes.",
        },
        probability: 0.5,
      },
    ],
    connections: [6, 8, 29, 30, 32, 33],
    coordinates: { x: 0.64, y: 0.32 },
    importance: 0.85,
  },
  {
    id: 32,
    title: {
      en: "Great Exhibition of 1851",
      fr: "Grande Exposition de 1851",
    },
    date: "1851",
    era: "industrial",
    description: {
      en: "The first international exhibition of manufactured products, held in London's Crystal Palace, showcasing industrial and technological innovations from around the world and symbolizing Britain's industrial leadership.",
      fr: "La première exposition internationale de produits manufacturés, tenue au Crystal Palace de Londres, présentant des innovations industrielles et technologiques du monde entier et symbolisant le leadership industriel britannique.",
    },
    consequences: [
      {
        en: "Popularization of new technologies and industrial products",
        fr: "Popularisation de nouvelles technologies et produits industriels",
      },
      {
        en: "Promotion of international trade and cultural exchange",
        fr: "Promotion du commerce international et des échanges culturels",
      },
      {
        en: "Establishment of world's fair tradition",
        fr: "Établissement de la tradition des expositions universelles",
      },
      {
        en: "Celebration of industrial progress as cultural achievement",
        fr: "Célébration du progrès industriel comme réalisation culturelle",
      },
      {
        en: "Architectural innovation through the Crystal Palace design",
        fr: "Innovation architecturale à travers la conception du Crystal Palace",
      },
    ],
    causes: [
      {
        en: "British industrial supremacy seeking showcase",
        fr: "Suprématie industrielle britannique cherchant une vitrine",
      },
      {
        en: "Prince Albert's vision of promoting arts, science and industry",
        fr: "Vision du Prince Albert de promouvoir les arts, la science et l'industrie",
      },
      {
        en: "Competition between nations for technological prestige",
        fr: "Concurrence entre nations pour le prestige technologique",
      },
      {
        en: "Growing middle class consumer market",
        fr: "Marché de consommation de la classe moyenne en croissance",
      },
      {
        en: "Innovations in glass and iron construction techniques",
        fr: "Innovations dans les techniques de construction en verre et en fer",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Failed Exhibition",
          fr: "Exposition Échouée",
        },
        description: {
          en: "If the Exhibition had failed commercially or logistically, the subsequent world's fair tradition might never have developed, reducing international technological exchange.",
          fr: "Si l'Exposition avait échoué commercialement ou logistiquement, la tradition ultérieure des expositions universelles ne se serait peut-être jamais développée, réduisant les échanges technologiques internationaux.",
        },
        probability: 0.2,
      },
      {
        title: {
          en: "Different Host Nation",
          fr: "Nation Hôte Différente",
        },
        description: {
          en: "If another nation had pioneered the international exhibition concept, Britain's cultural influence might have been diminished and different technological priorities might have been emphasized.",
          fr: "Si une autre nation avait été pionnière dans le concept d'exposition internationale, l'influence culturelle de la Grande-Bretagne aurait pu être diminuée et différentes priorités technologiques auraient pu être mises en avant.",
        },
        probability: 0.4,
      },
    ],
    connections: [6, 29, 31, 33],
    coordinates: { x: 0.66, y: 0.36 },
    importance: 0.75,
  },
  {
    id: 33,
    title: {
      en: "Communist Manifesto Publication",
      fr: "Publication du Manifeste Communiste",
    },
    date: "1848",
    era: "industrial",
    description: {
      en: "The publication of Karl Marx and Friedrich Engels' political pamphlet outlining communist theory and class struggle, which would become one of history's most influential political documents and inspire revolutionary movements worldwide.",
      fr: "La publication du pamphlet politique de Karl Marx et Friedrich Engels exposant la théorie communiste et la lutte des classes, qui deviendrait l'un des documents politiques les plus influents de l'histoire et inspirerait des mouvements révolutionnaires dans le monde entier.",
    },
    consequences: [
      {
        en: "Theoretical foundation for communist movements worldwide",
        fr: "Fondement théorique des mouvements communistes dans le monde entier",
      },
      {
        en: "Development of class-based political analysis",
        fr: "Développement de l'analyse politique basée sur les classes",
      },
      {
        en: "Inspiration for socialist and communist revolutions",
        fr: "Inspiration pour les révolutions socialistes et communistes",
      },
      {
        en: "Formation of labor movements and unions",
        fr: "Formation de mouvements ouvriers et de syndicats",
      },
      {
        en: "Ideological framework challenging capitalism",
        fr: "Cadre idéologique remettant en question le capitalisme",
      },
    ],
    causes: [
      {
        en: "Industrial working class suffering poor conditions",
        fr: "Classe ouvrière industrielle souffrant de mauvaises conditions",
      },
      {
        en: "Extreme wealth inequality during early industrialization",
        fr: "Inégalité de richesse extrême pendant les débuts de l'industrialisation",
      },
      {
        en: "Philosophical developments in German idealism",
        fr: "Développements philosophiques dans l'idéalisme allemand",
      },
      {
        en: "1848 revolutionary movements across Europe",
        fr: "Mouvements révolutionnaires de 1848 à travers l'Europe",
      },
      {
        en: "Marx and Engels' observations of industrial Manchester",
        fr: "Observations de Marx et Engels sur Manchester industrielle",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Limited Influence",
          fr: "Influence Limitée",
        },
        description: {
          en: "If the Manifesto had remained an obscure philosophical text rather than becoming a revolutionary handbook, 20th century political development might have avoided Cold War ideological divisions.",
          fr: "Si le Manifeste était resté un texte philosophique obscur plutôt que de devenir un manuel révolutionnaire, le développement politique du 20e siècle aurait pu éviter les divisions idéologiques de la Guerre froide.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Reformed Capitalism",
          fr: "Capitalisme Réformé",
        },
        description: {
          en: "If capitalist societies had responded to Marx's critiques with more substantial reforms earlier, the appeal of revolutionary communism might have been significantly diminished.",
          fr: "Si les sociétés capitalistes avaient répondu aux critiques de Marx par des réformes plus substantielles plus tôt, l'attrait du communisme révolutionnaire aurait pu être considérablement diminué.",
        },
        probability: 0.4,
      },
    ],
    connections: [6, 8, 9, 11, 30, 31, 32, 38],
    coordinates: { x: 0.68, y: 0.3 },
    importance: 0.9,
  },
  {
    id: 34,
    title: {
      en: "Telegraph Revolution",
      fr: "Révolution du Télégraphe",
    },
    date: "1844-1866",
    era: "industrial",
    description: {
      en: "The development and global expansion of telegraph networks, beginning with Samuel Morse's first public transmission and culminating in the first successful transatlantic cable, creating near-instantaneous communication across vast distances for the first time in human history.",
      fr: "Le développement et l'expansion mondiale des réseaux télégraphiques, commençant par la première transmission publique de Samuel Morse et culminant avec le premier câble transatlantique réussi, créant une communication quasi instantanée sur de vastes distances pour la première fois dans l'histoire humaine.",
    },
    consequences: [
      {
        en: "First global telecommunications network",
        fr: "Premier réseau de télécommunications mondial",
      },
      {
        en: "Separation of communication from physical transportation",
        fr: "Séparation de la communication du transport physique",
      },
      {
        en: "Transformation of business, journalism, and diplomacy",
        fr: "Transformation des affaires, du journalisme et de la diplomatie",
      },
      {
        en: "Standardization of time zones",
        fr: "Standardisation des fuseaux horaires",
      },
      {
        en: "Military command and control at a distance",
        fr: "Commandement et contrôle militaires à distance",
      },
    ],
    causes: [
      {
        en: "Scientific discoveries about electricity and magnetism",
        fr: "Découvertes scientifiques sur l'électricité et le magnétisme",
      },
      {
        en: "Commercial demand for faster information transmission",
        fr: "Demande commerciale pour une transmission d'information plus rapide",
      },
      {
        en: "Railway expansion creating rights-of-way for telegraph lines",
        fr: "Expansion ferroviaire créant des droits de passage pour les lignes télégraphiques",
      },
      {
        en: "Government interest in rapid communication for military purposes",
        fr: "Intérêt gouvernemental pour une communication rapide à des fins militaires",
      },
      {
        en: "Technical innovations in cable insulation and signal amplification",
        fr: "Innovations techniques dans l'isolation des câbles et l'amplification des signaux",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Delayed Global Communications",
          fr: "Communications Mondiales Retardées",
        },
        description: {
          en: "Without the telegraph, global information exchange would have remained tied to physical transportation speeds for decades longer, significantly altering economic and political development.",
          fr: "Sans le télégraphe, l'échange d'informations mondial serait resté lié aux vitesses de transport physique pendant des décennies supplémentaires, modifiant considérablement le développement économique et politique.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Government Monopoly",
          fr: "Monopole Gouvernemental",
        },
        description: {
          en: "If telegraph systems had remained exclusively under government control rather than commercial development, information flow might have been more restricted but potentially more equitable.",
          fr: "Si les systèmes télégraphiques étaient restés exclusivement sous contrôle gouvernemental plutôt que de connaître un développement commercial, le flux d'informations aurait pu être plus restreint mais potentiellement plus équitable.",
        },
        probability: 0.4,
      },
    ],
    connections: [6, 8, 29, 31, 32, 35, 36],
    coordinates: { x: 0.67, y: 0.38 },
    importance: 0.85,
  },
  {
    id: 35,
    title: {
      en: "Bessemer Process Invention",
      fr: "Invention du Procédé Bessemer",
    },
    date: "1856",
    era: "industrial",
    description: {
      en: "Henry Bessemer's development of a process to inexpensively mass-produce steel by removing impurities from pig iron through oxidation, dramatically reducing steel production costs and enabling its widespread use in construction, transportation, and manufacturing.",
      fr: "Le développement par Henry Bessemer d'un procédé pour produire en masse de l'acier à bas coût en éliminant les impuretés de la fonte brute par oxydation, réduisant considérablement les coûts de production d'acier et permettant son utilisation généralisée dans la construction, les transports et la fabrication.",
    },
    consequences: [
      {
        en: "Affordable steel for railways, ships, and buildings",
        fr: "Acier abordable pour les chemins de fer, les navires et les bâtiments",
      },
      {
        en: "Skyscraper construction and modern urban landscapes",
        fr: "Construction de gratte-ciel et paysages urbains modernes",
      },
      {
        en: "Stronger machinery enabling advanced manufacturing",
        fr: "Machines plus robustes permettant une fabrication avancée",
      },
      {
        en: "Transformation of transportation infrastructure",
        fr: "Transformation des infrastructures de transport",
      },
      {
        en: "Military applications including naval vessels and weapons",
        fr: "Applications militaires, notamment les navires et les armes",
      },
    ],
    causes: [
      {
        en: "Growing demand for stronger, more durable metal than cast iron",
        fr: "Demande croissante d'un métal plus résistant et plus durable que la fonte",
      },
      {
        en: "Railway expansion requiring better rails",
        fr: "Expansion ferroviaire nécessitant de meilleurs rails",
      },
      {
        en: "Industrial competition driving search for cost reductions",
        fr: "Concurrence industrielle motivant la recherche de réductions de coûts",
      },
      {
        en: "Scientific understanding of metallurgical processes",
        fr: "Compréhension scientifique des processus métallurgiques",
      },
      {
        en: "Previous incremental improvements in iron production",
        fr: "Améliorations progressives antérieures dans la production de fer",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Delayed Steel Revolution",
          fr: "Révolution de l'Acier Retardée",
        },
        description: {
          en: "Without the Bessemer process, steel might have remained a premium material for decades longer, significantly slowing infrastructure development and industrialization.",
          fr: "Sans le procédé Bessemer, l'acier serait peut-être resté un matériau haut de gamme pendant des décennies supplémentaires, ralentissant considérablement le développement des infrastructures et l'industrialisation.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Alternative Materials Focus",
          fr: "Concentration sur des Matériaux Alternatifs",
        },
        description: {
          en: "If steel production had remained expensive, greater emphasis might have been placed on developing alternative materials and construction techniques.",
          fr: "Si la production d'acier était restée coûteuse, l'accent aurait pu être mis davantage sur le développement de matériaux et de techniques de construction alternatifs.",
        },
        probability: 0.4,
      },
    ],
    connections: [6, 29, 31, 32, 34, 36, 37],
    coordinates: { x: 0.69, y: 0.42 },
    importance: 0.8,
  },
  {
    id: 36,
    title: {
      en: "Opening of Suez Canal",
      fr: "Ouverture du Canal de Suez",
    },
    date: "1869",
    era: "industrial",
    description: {
      en: "The completion of the Suez Canal connecting the Mediterranean Sea to the Red Sea, dramatically shortening the maritime route between Europe and Asia and transforming global trade patterns and imperial strategies.",
      fr: "L'achèvement du canal de Suez reliant la mer Méditerranée à la mer Rouge, raccourcissant considérablement la route maritime entre l'Europe et l'Asie et transformant les modèles de commerce mondial et les stratégies impériales.",
    },
    consequences: [
      {
        en: "Reduced shipping times between Europe and Asia by weeks",
        fr: "Réduction de plusieurs semaines des temps de navigation entre l'Europe et l'Asie",
      },
      {
        en: "Shift in global trade patterns favoring maritime powers",
        fr: "Changement dans les modèles de commerce mondial favorisant les puissances maritimes",
      },
      {
        en: "Strategic importance of Egypt and the Middle East",
        fr: "Importance stratégique de l'Égypte et du Moyen-Orient",
      },
      {
        en: "Decline of overland trade routes",
        fr: "Déclin des routes commerciales terrestres",
      },
      {
        en: "European imperial expansion in Africa and Asia",
        fr: "Expansion impériale européenne en Afrique et en Asie",
      },
    ],
    causes: [
      {
        en: "Growing trade between Europe and Asia",
        fr: "Commerce croissant entre l'Europe et l'Asie",
      },
      {
        en: "Steam-powered shipping making canal transit practical",
        fr: "Navigation à vapeur rendant le transit par canal pratique",
      },
      {
        en: "European imperial competition",
        fr: "Concurrence impériale européenne",
      },
      {
        en: "French engineering expertise and investment",
        fr: "Expertise et investissement français en ingénierie",
      },
      {
        en: "Egyptian modernization efforts under Muhammad Ali's dynasty",
        fr: "Efforts de modernisation égyptienne sous la dynastie de Muhammad Ali",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "British-Controlled Project",
          fr: "Projet Contrôlé par les Britanniques",
        },
        description: {
          en: "If Britain rather than France had led the canal's construction, the subsequent history of Egypt and European imperial competition might have followed a different course.",
          fr: "Si la Grande-Bretagne plutôt que la France avait dirigé la construction du canal, l'histoire ultérieure de l'Égypte et la concurrence impériale européenne auraient pu suivre un cours différent.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Failed or Delayed Construction",
          fr: "Construction Échouée ou Retardée",
        },
        description: {
          en: "If the canal had failed technically or financially, alternative trade routes might have developed, potentially including earlier transcontinental railways.",
          fr: "Si le canal avait échoué techniquement ou financièrement, des routes commerciales alternatives auraient pu se développer, incluant potentiellement des chemins de fer transcontinentaux plus précoces.",
        },
        probability: 0.3,
      },
    ],
    connections: [6, 9, 27, 31, 34, 35, 37, 38],
    coordinates: { x: 0.71, y: 0.35 },
    importance: 0.85,
  },
  {
    id: 37,
    title: {
      en: "Edison's Electric Light",
      fr: "Lampe Électrique d'Edison",
    },
    date: "1879",
    era: "industrial",
    description: {
      en: "Thomas Edison's development of a practical, long-lasting incandescent light bulb and subsequent creation of electrical distribution systems, beginning the electrification of homes, businesses, and cities worldwide.",
      fr: "Le développement par Thomas Edison d'une ampoule à incandescence pratique et durable et la création subséquente de systèmes de distribution électrique, marquant le début de l'électrification des maisons, des entreprises et des villes dans le monde entier.",
    },
    consequences: [
      {
        en: "Extension of productive and leisure hours beyond daylight",
        fr: "Extension des heures productives et de loisirs au-delà de la lumière du jour",
      },
      {
        en: "Transformation of urban landscapes and architecture",
        fr: "Transformation des paysages urbains et de l'architecture",
      },
      {
        en: "Development of electrical grid infrastructure",
        fr: "Développement de l'infrastructure du réseau électrique",
      },
      {
        en: "Creation of new industries and consumer products",
        fr: "Création de nouvelles industries et produits de consommation",
      },
      {
        en: "Shift from gas to electricity for lighting and power",
        fr: "Passage du gaz à l'électricité pour l'éclairage et l'énergie",
      },
    ],
    causes: [
      {
        en: "Previous scientific work on electricity and illumination",
        fr: "Travaux scientifiques antérieurs sur l'électricité et l'illumination",
      },
      {
        en: "Commercial competition to replace gas lighting",
        fr: "Concurrence commerciale pour remplacer l'éclairage au gaz",
      },
      {
        en: "Edison's systematic approach to invention",
        fr: "Approche systématique d'Edison en matière d'invention",
      },
      {
        en: "Availability of investment capital for research",
        fr: "Disponibilité de capital d'investissement pour la recherche",
      },
      {
        en: "Growing urban populations creating market demand",
        fr: "Populations urbaines croissantes créant une demande du marché",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "AC Dominance from Start",
          fr: "Domination du Courant Alternatif dès le Début",
        },
        description: {
          en: "If Tesla and Westinghouse's alternating current had dominated from the beginning without the 'War of Currents', electrical standardization might have occurred earlier.",
          fr: "Si le courant alternatif de Tesla et Westinghouse avait dominé dès le début sans la 'Guerre des courants', la standardisation électrique aurait pu se produire plus tôt.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Decentralized Power Generation",
          fr: "Production d'Énergie Décentralisée",
        },
        description: {
          en: "Without Edison's centralized power station model, electricity might have developed as a more localized resource with different distribution patterns.",
          fr: "Sans le modèle de centrale électrique centralisée d'Edison, l'électricité aurait pu se développer comme une ressource plus localisée avec différents modèles de distribution.",
        },
        probability: 0.3,
      },
    ],
    connections: [6, 29, 32, 34, 35, 36, 38],
    coordinates: { x: 0.72, y: 0.4 },
    importance: 0.9,
  },
  {
    id: 38,
    title: {
      en: "Berlin Conference",
      fr: "Conférence de Berlin",
    },
    date: "1884-1885",
    era: "industrial",
    description: {
      en: "A diplomatic summit where European powers negotiated and formalized guidelines for the colonization of Africa, accelerating the 'Scramble for Africa' and the division of the continent among European imperial powers.",
      fr: "Un sommet diplomatique où les puissances européennes ont négocié et formalisé des directives pour la colonisation de l'Afrique, accélérant la 'Ruée vers l'Afrique' et la division du continent entre les puissances impériales européennes.",
    },
    consequences: [
      {
        en: "Rapid colonization of African territories by European powers",
        fr: "Colonisation rapide des territoires africains par les puissances européennes",
      },
      {
        en: "Arbitrary borders disregarding ethnic and cultural boundaries",
        fr: "Frontières arbitraires ne tenant pas compte des limites ethniques et culturelles",
      },
      {
        en: "Exploitation of African resources for industrial development",
        fr: "Exploitation des ressources africaines pour le développement industriel",
      },
      {
        en: "Destruction of indigenous governance systems",
        fr: "Destruction des systèmes de gouvernance autochtones",
      },
      {
        en: "Legacy of conflict and underdevelopment in post-colonial Africa",
        fr: "Héritage de conflits et de sous-développement dans l'Afrique post-coloniale",
      },
    ],
    causes: [
      {
        en: "European imperial competition",
        fr: "Concurrence impériale européenne",
      },
      {
        en: "Industrial demand for raw materials",
        fr: "Demande industrielle de matières premières",
      },
      {
        en: "Nationalist prestige associated with colonial possessions",
        fr: "Prestige nationaliste associé aux possessions coloniales",
      },
      {
        en: "Technological advantages enabling European control",
        fr: "Avantages technologiques permettant le contrôle européen",
      },
      {
        en: "Racist ideologies justifying colonization",
        fr: "Idéologies racistes justifiant la colonisation",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Limited Colonization",
          fr: "Colonisation Limitée",
        },
        description: {
          en: "If European powers had agreed to limit colonization to coastal trading posts, much of Africa might have developed along different political trajectories.",
          fr: "Si les puissances européennes avaient convenu de limiter la colonisation aux comptoirs commerciaux côtiers, une grande partie de l'Afrique aurait pu se développer selon des trajectoires politiques différentes.",
        },
        probability: 0.2,
      },
      {
        title: {
          en: "Indigenous Representation",
          fr: "Représentation Autochtone",
        },
        description: {
          en: "If African leaders had been included in the negotiations, resulting borders and governance structures might have better reflected existing cultural and political realities.",
          fr: "Si les dirigeants africains avaient été inclus dans les négociations, les frontières et les structures de gouvernance qui en résultent auraient pu mieux refléter les réalités culturelles et politiques existantes.",
        },
        probability: 0.1,
      },
    ],
    connections: [6, 9, 27, 30, 33, 36, 37],
    coordinates: { x: 0.73, y: 0.32 },
    importance: 0.85,
  },
  {
    id: 39,
    title: {
      en: "Russian Revolution",
      fr: "Révolution Russe",
    },
    date: "1917",
    era: "modern",
    description: {
      en: "The overthrow of the Russian Tsarist autocracy and subsequent Bolshevik seizure of power, establishing the world's first communist state and fundamentally altering global politics for the remainder of the 20th century.",
      fr: "Le renversement de l'autocratie tsariste russe et la prise de pouvoir bolchevique subséquente, établissant le premier État communiste du monde et modifiant fondamentalement la politique mondiale pour le reste du 20e siècle.",
    },
    consequences: [
      {
        en: "Establishment of the Soviet Union as the world's first communist state",
        fr: "Établissement de l'Union soviétique comme le premier État communiste du monde",
      },
      {
        en: "Creation of an ideological counterweight to Western capitalism",
        fr: "Création d'un contrepoids idéologique au capitalisme occidental",
      },
      {
        en: "Transformation of Russia from agrarian empire to industrial power",
        fr: "Transformation de la Russie d'un empire agraire en une puissance industrielle",
      },
      {
        en: "Development of state-planned economic model",
        fr: "Développement d'un modèle économique planifié par l'État",
      },
      {
        en: "Inspiration for revolutionary movements worldwide",
        fr: "Inspiration pour les mouvements révolutionnaires dans le monde entier",
      },
    ],
    causes: [
      {
        en: "Russian military failures in World War I",
        fr: "Échecs militaires russes lors de la Première Guerre mondiale",
      },
      {
        en: "Economic hardship and food shortages",
        fr: "Difficultés économiques et pénuries alimentaires",
      },
      {
        en: "Autocratic rule and resistance to democratic reforms",
        fr: "Règle autocratique et résistance aux réformes démocratiques",
      },
      {
        en: "Marxist revolutionary ideology and Bolshevik organization",
        fr: "Idéologie révolutionnaire marxiste et organisation bolchevique",
      },
      {
        en: "Collapse of Tsarist authority following February Revolution",
        fr: "Effondrement de l'autorité tsariste suite à la Révolution de février",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Democratic Russia",
          fr: "Russie Démocratique",
        },
        description: {
          en: "If the Provisional Government had successfully established a stable democratic system, Russia might have developed as a constitutional democracy rather than a communist state.",
          fr: "Si le gouvernement provisoire avait réussi à établir un système démocratique stable, la Russie aurait pu se développer en tant que démocratie constitutionnelle plutôt qu'en tant qu'État communiste.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Failed Bolshevik Coup",
          fr: "Coup d'État Bolchevique Raté",
        },
        description: {
          en: "If the Bolsheviks had failed to seize power in October 1917, communism might have remained a marginal political ideology rather than governing a superpower.",
          fr: "Si les bolcheviks n'avaient pas réussi à prendre le pouvoir en octobre 1917, le communisme aurait pu rester une idéologie politique marginale plutôt que de gouverner une superpuissance.",
        },
        probability: 0.4,
      },
    ],
    connections: [9, 10, 11, 33, 40, 41, 42],
    coordinates: {
      x: 0.76,
      y: 0.45,
    },
    importance: 0.9,
  },
  {
    id: 40,
    title: {
      en: "Great Depression",
      fr: "Grande Dépression",
    },
    date: "1929-1939",
    era: "modern",
    description: {
      en: "A severe worldwide economic depression that began with the U.S. stock market crash of 1929 and spread globally, causing mass unemployment, poverty, political instability, and contributing to the rise of extremist ideologies.",
      fr: "Une grave dépression économique mondiale qui a débuté avec le krach boursier américain de 1929 et s'est propagée à l'échelle mondiale, provoquant un chômage de masse, la pauvreté, l'instabilité politique et contribuant à la montée des idéologies extrémistes.",
    },
    consequences: [
      {
        en: "Widespread unemployment and economic hardship",
        fr: "Chômage généralisé et difficultés économiques",
      },
      {
        en: "Rise of fascism and extremist political movements",
        fr: "Montée du fascisme et des mouvements politiques extrémistes",
      },
      {
        en: "Implementation of Keynesian economic policies",
        fr: "Mise en œuvre des politiques économiques keynésiennes",
      },
      {
        en: "Expansion of government economic intervention and social programs",
        fr: "Expansion de l'intervention économique gouvernementale et des programmes sociaux",
      },
      {
        en: "Banking and financial market regulations",
        fr: "Réglementations bancaires et des marchés financiers",
      },
    ],
    causes: [
      {
        en: "Stock market speculation and crash",
        fr: "Spéculation boursière et krach",
      },
      {
        en: "Banking system weaknesses and failures",
        fr: "Faiblesses et défaillances du système bancaire",
      },
      {
        en: "Contractionary monetary policy",
        fr: "Politique monétaire restrictive",
      },
      {
        en: "International debt structure following World War I",
        fr: "Structure de la dette internationale après la Première Guerre mondiale",
      },
      {
        en: "Structural weaknesses in the global economy",
        fr: "Faiblesses structurelles de l'économie mondiale",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Milder Economic Downturn",
          fr: "Ralentissement Économique Moins Grave",
        },
        description: {
          en: "With different monetary policies and international cooperation, the depression might have been shorter and less severe, potentially preventing the rise of extremist regimes.",
          fr: "Avec des politiques monétaires différentes et une coopération internationale, la dépression aurait pu être plus courte et moins grave, empêchant potentiellement la montée des régimes extrémistes.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Earlier Recovery",
          fr: "Reprise Plus Précoce",
        },
        description: {
          en: "If New Deal-style policies had been implemented earlier and more aggressively, recovery might have occurred faster, changing the political landscape of the 1930s.",
          fr: "Si les politiques de type New Deal avaient été mises en œuvre plus tôt et de manière plus agressive, la reprise aurait pu se produire plus rapidement, modifiant le paysage politique des années 1930.",
        },
        probability: 0.3,
      },
    ],
    connections: [9, 10, 11, 33, 39, 41, 43],
    coordinates: {
      x: 0.78,
      y: 0.35,
    },
    importance: 0.9,
  },
  {
    id: 41,
    title: {
      en: "Atomic Bombing of Hiroshima and Nagasaki",
      fr: "Bombardements Atomiques d'Hiroshima et Nagasaki",
    },
    date: "1945",
    era: "modern",
    description: {
      en: "The United States' deployment of nuclear weapons against the Japanese cities of Hiroshima and Nagasaki, killing over 200,000 people, demonstrating the devastating power of atomic weapons, and ushering in the nuclear age.",
      fr: "Le déploiement par les États-Unis d'armes nucléaires contre les villes japonaises d'Hiroshima et de Nagasaki, tuant plus de 200 000 personnes, démontrant le pouvoir dévastateur des armes atomiques et inaugurant l'ère nucléaire.",
    },
    consequences: [
      {
        en: "End of World War II in the Pacific",
        fr: "Fin de la Seconde Guerre mondiale dans le Pacifique",
      },
      {
        en: "Beginning of the nuclear age and atomic diplomacy",
        fr: "Début de l'ère nucléaire et de la diplomatie atomique",
      },
      {
        en: "Nuclear arms race between superpowers",
        fr: "Course aux armements nucléaires entre les superpuissances",
      },
      {
        en: "Development of nuclear deterrence theory",
        fr: "Développement de la théorie de la dissuasion nucléaire",
      },
      {
        en: "Global anti-nuclear movement",
        fr: "Mouvement anti-nucléaire mondial",
      },
    ],
    causes: [
      {
        en: "Development of nuclear weapons through the Manhattan Project",
        fr: "Développement d'armes nucléaires grâce au projet Manhattan",
      },
      {
        en: "Japanese refusal to surrender unconditionally",
        fr: "Refus du Japon de se rendre sans condition",
      },
      {
        en: "U.S. desire to avoid costly invasion of Japanese mainland",
        fr: "Désir des États-Unis d'éviter une invasion coûteuse du territoire japonais",
      },
      {
        en: "Demonstration of power to Soviet Union",
        fr: "Démonstration de puissance à l'Union soviétique",
      },
      {
        en: "Momentum of wartime decision-making process",
        fr: "Dynamique du processus décisionnel en temps de guerre",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Demonstration Bombing",
          fr: "Bombardement de Démonstration",
        },
        description: {
          en: "If the U.S. had conducted a demonstration bombing in an uninhabited area, Japan might still have surrendered while establishing different norms about nuclear weapons use.",
          fr: "Si les États-Unis avaient effectué un bombardement de démonstration dans une zone inhabitée, le Japon aurait pu se rendre tout en établissant des normes différentes concernant l'utilisation des armes nucléaires.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Conventional War Conclusion",
          fr: "Conclusion de la Guerre Conventionnelle",
        },
        description: {
          en: "Without nuclear weapons, the Pacific War might have ended through Soviet invasion, conventional bombing, or negotiated peace, potentially altering Cold War dynamics.",
          fr: "Sans armes nucléaires, la guerre du Pacifique aurait pu se terminer par une invasion soviétique, des bombardements conventionnels ou une paix négociée, modifiant potentiellement la dynamique de la Guerre froide.",
        },
        probability: 0.4,
      },
    ],
    connections: [10, 11, 39, 40, 42, 43],
    coordinates: {
      x: 0.8,
      y: 0.3,
    },
    importance: 0.95,
  },
  {
    id: 42,
    title: {
      en: "Decolonization Movement",
      fr: "Mouvement de Décolonisation",
    },
    date: "1945-1975",
    era: "modern",
    description: {
      en: "The process by which colonies gained independence from European imperial powers following World War II, dramatically reshaping global politics, creating dozens of new nations, and ending centuries of European colonial dominance.",
      fr: "Le processus par lequel les colonies ont obtenu leur indépendance des puissances impériales européennes après la Seconde Guerre mondiale, remodelant radicalement la politique mondiale, créant des dizaines de nouvelles nations et mettant fin à des siècles de domination coloniale européenne.",
    },
    consequences: [
      {
        en: "Creation of over 100 newly independent nations",
        fr: "Création de plus de 100 nations nouvellement indépendantes",
      },
      {
        en: "End of European colonial empires",
        fr: "Fin des empires coloniaux européens",
      },
      {
        en: "Development of the Non-Aligned Movement",
        fr: "Développement du Mouvement des non-alignés",
      },
      {
        en: "Postcolonial economic and political challenges",
        fr: "Défis économiques et politiques postcoloniaux",
      },
      {
        en: "Redefinition of international relations and global governance",
        fr: "Redéfinition des relations internationales et de la gouvernance mondiale",
      },
    ],
    causes: [
      {
        en: "Weakening of European powers after World War II",
        fr: "Affaiblissement des puissances européennes après la Seconde Guerre mondiale",
      },
      {
        en: "Rising nationalist movements in colonized territories",
        fr: "Montée des mouvements nationalistes dans les territoires colonisés",
      },
      {
        en: "Anti-colonial ideologies including socialism and liberalism",
        fr: "Idéologies anticoloniales, y compris le socialisme et le libéralisme",
      },
      {
        en: "United Nations support for self-determination",
        fr: "Soutien des Nations Unies à l'autodétermination",
      },
      {
        en: "Superpower competition for influence in newly independent states",
        fr: "Compétition des superpuissances pour l'influence dans les États nouvellement indépendants",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Gradual Transition",
          fr: "Transition Graduelle",
        },
        description: {
          en: "If decolonization had proceeded more gradually with better preparation for independence, many postcolonial states might have avoided political instability and economic challenges.",
          fr: "Si la décolonisation avait procédé plus graduellement avec une meilleure préparation à l'indépendance, de nombreux États postcoloniaux auraient pu éviter l'instabilité politique et les défis économiques.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Neo-Colonial Framework",
          fr: "Cadre Néo-Colonial",
        },
        description: {
          en: "Without genuine independence movements, European powers might have maintained more formal control through neo-colonial arrangements rather than granting full sovereignty.",
          fr: "Sans mouvements d'indépendance authentiques, les puissances européennes auraient pu maintenir un contrôle plus formel par le biais d'arrangements néo-coloniaux plutôt que d'accorder la pleine souveraineté.",
        },
        probability: 0.4,
      },
    ],
    connections: [10, 11, 33, 38, 39, 41, 43],
    coordinates: {
      x: 0.82,
      y: 0.45,
    },
    importance: 0.85,
  },
  {
    id: 43,
    title: {
      en: "Formation of the United Nations",
      fr: "Formation des Nations Unies",
    },
    date: "1945",
    era: "modern",
    description: {
      en: "The establishment of an international organization designed to promote international cooperation, maintain peace and security, develop friendly relations among nations, and achieve international cooperation in solving global problems.",
      fr: "L'établissement d'une organisation internationale conçue pour promouvoir la coopération internationale, maintenir la paix et la sécurité, développer des relations amicales entre les nations et réaliser la coopération internationale dans la résolution des problèmes mondiaux.",
    },
    consequences: [
      {
        en: "Creation of global forum for international diplomacy",
        fr: "Création d'un forum mondial pour la diplomatie internationale",
      },
      {
        en: "Development of international law and human rights frameworks",
        fr: "Développement du droit international et des cadres relatifs aux droits de l'homme",
      },
      {
        en: "Peacekeeping operations in conflict zones",
        fr: "Opérations de maintien de la paix dans les zones de conflit",
      },
      {
        en: "Humanitarian and development assistance programs",
        fr: "Programmes d'aide humanitaire et de développement",
      },
      {
        en: "International cooperation on global challenges",
        fr: "Coopération internationale sur les défis mondiaux",
      },
    ],
    causes: [
      {
        en: "Desire to prevent another world war after WWII",
        fr: "Désir de prévenir une autre guerre mondiale après la Seconde Guerre mondiale",
      },
      {
        en: "Failure of the League of Nations",
        fr: "Échec de la Société des Nations",
      },
      {
        en: "Allied cooperation during World War II",
        fr: "Coopération alliée pendant la Seconde Guerre mondiale",
      },
      {
        en: "American leadership in postwar international order",
        fr: "Leadership américain dans l'ordre international d'après-guerre",
      },
      {
        en: "Recognition of need for collective security mechanisms",
        fr: "Reconnaissance de la nécessité de mécanismes de sécurité collective",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "More Powerful UN",
          fr: "ONU Plus Puissante",
        },
        description: {
          en: "If the UN had been given stronger enforcement powers and less constrained by the Security Council veto, it might have been more effective at preventing conflicts and addressing global challenges.",
          fr: "Si l'ONU avait reçu des pouvoirs d'exécution plus forts et était moins contrainte par le veto du Conseil de sécurité, elle aurait pu être plus efficace pour prévenir les conflits et relever les défis mondiaux.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Regional Organizations Dominance",
          fr: "Domination des Organisations Régionales",
        },
        description: {
          en: "Without a strong UN, regional organizations might have become the primary venues for international cooperation, creating a more fragmented international system.",
          fr: "Sans une ONU forte, les organisations régionales auraient pu devenir les principaux lieux de coopération internationale, créant un système international plus fragmenté.",
        },
        probability: 0.4,
      },
    ],
    connections: [10, 11, 13, 39, 40, 41, 42],
    coordinates: {
      x: 0.81,
      y: 0.38,
    },
    importance: 0.85,
  },
];

// Function to get events by era
function getEventsByEra(era) {
  if (era === "all") {
    return historicalEvents;
  }
  return historicalEvents.filter((event) => event.era === era);
}

// Function to get event by ID
function getEventById(id) {
  return historicalEvents.find((event) => event.id === id);
}

// Function to search events
function searchEvents(query) {
  query = query.toLowerCase();
  return historicalEvents.filter((event) => {
    // Get title and description based on structure
    const title =
      typeof event.title === "object"
        ? currentLanguage === "en"
          ? event.title.en
          : event.title.fr
        : event.title;

    const description =
      typeof event.description === "object"
        ? currentLanguage === "en"
          ? event.description.en
          : event.description.fr
        : event.description;

    // Check if query matches any of the fields
    return (
      (title && title.toLowerCase().includes(query)) ||
      (description && description.toLowerCase().includes(query)) ||
      (event.date && event.date.toLowerCase().includes(query)) ||
      (event.era && event.era.toLowerCase().includes(query))
    );
  });
}

// Function to get connected events
function getConnectedEvents(eventId) {
  const event = getEventById(eventId);
  if (!event) return [];

  return event.connections.map((id) => getEventById(id));
}

// Adding Modern Era Events
historicalEvents.push(
  {
    id: 84,
    title: {
      en: "Moon Landing",
      fr: "Alunissage",
    },
    date: "July 20, 1969",
    era: "modern",
    description: {
      en: "The Apollo 11 mission, during which American astronauts Neil Armstrong and Buzz Aldrin became the first humans to land on the Moon, while Michael Collins orbited above in the command module.",
      fr: "La mission Apollo 11, au cours de laquelle les astronautes américains Neil Armstrong et Buzz Aldrin sont devenus les premiers humains à atterrir sur la Lune, tandis que Michael Collins orbitait au-dessus dans le module de commande.",
    },
    consequences: [
      {
        en: "Culmination of the Space Race with American victory",
        fr: "Aboutissement de la course à l'espace avec la victoire américaine",
      },
      {
        en: "Advancement of satellite technology and telecommunications",
        fr: "Avancement de la technologie satellitaire et des télécommunications",
      },
      {
        en: "Inspiration for a generation of scientists and engineers",
        fr: "Inspiration pour une génération de scientifiques et d'ingénieurs",
      },
      {
        en: "Development of numerous technologies with everyday applications",
        fr: "Développement de nombreuses technologies avec des applications quotidiennes",
      },
      {
        en: "Shift in global perception of human potential and achievement",
        fr: "Changement dans la perception mondiale du potentiel et des réalisations humaines",
      },
    ],
    causes: [
      {
        en: "Cold War competition between the US and USSR",
        fr: "Compétition de la Guerre froide entre les États-Unis et l'URSS",
      },
      {
        en: "President Kennedy's 1961 commitment to land on the Moon",
        fr: "Engagement du président Kennedy en 1961 d'atterrir sur la Lune",
      },
      {
        en: "Massive government funding for NASA",
        fr: "Financement gouvernemental massif pour la NASA",
      },
      {
        en: "Technological innovations in rocketry and computing",
        fr: "Innovations technologiques en matière de fusées et d'informatique",
      },
      {
        en: "Public support for space exploration",
        fr: "Soutien public à l'exploration spatiale",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Failed Moon Landing",
          fr: "Échec de l'Alunissage",
        },
        description: {
          en: "If the Apollo 11 mission had failed catastrophically, public support for space exploration might have collapsed, potentially delaying human space exploration for decades.",
          fr: "Si la mission Apollo 11 avait échoué de façon catastrophique, le soutien du public à l'exploration spatiale aurait pu s'effondrer, retardant potentiellement l'exploration spatiale humaine pendant des décennies.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Continued Lunar Exploration",
          fr: "Exploration Lunaire Continue",
        },
        description: {
          en: "If funding for Apollo had continued at peak levels, permanent Moon bases might have been established by the 1980s, potentially serving as stepping stones to Mars.",
          fr: "Si le financement d'Apollo s'était maintenu à des niveaux élevés, des bases lunaires permanentes auraient pu être établies dans les années 1980, servant potentiellement de tremplins vers Mars.",
        },
        probability: 0.4,
      },
    ],
    connections: [10, 11, 79],
    coordinates: { x: 0.83, y: 0.38 },
    importance: 0.9,
  },
  {
    id: 85,
    title: {
      en: "Cuban Missile Crisis",
      fr: "Crise des Missiles de Cuba",
    },
    date: "October 1962",
    era: "modern",
    description: {
      en: "A 13-day confrontation between the United States and the Soviet Union initiated by the American discovery of Soviet ballistic missile deployment in Cuba, which brought the two superpowers to the brink of nuclear war.",
      fr: "Une confrontation de 13 jours entre les États-Unis et l'Union soviétique, déclenchée par la découverte américaine du déploiement de missiles balistiques soviétiques à Cuba, qui a amené les deux superpuissances au bord de la guerre nucléaire.",
    },
    consequences: [
      {
        en: "Establishment of the Moscow–Washington hotline",
        fr: "Établissement du téléphone rouge entre Moscou et Washington",
      },
      {
        en: "Increased caution in US-Soviet relations",
        fr: "Prudence accrue dans les relations américano-soviétiques",
      },
      {
        en: "Nuclear Test Ban Treaty of 1963",
        fr: "Traité d'interdiction des essais nucléaires de 1963",
      },
      {
        en: "Beginning of détente between superpowers",
        fr: "Début de la détente entre les superpuissances",
      },
      {
        en: "Strengthened position of Kennedy domestically",
        fr: "Renforcement de la position de Kennedy sur le plan intérieur",
      },
    ],
    causes: [
      {
        en: "Soviet attempt to counter US Jupiter missiles in Turkey",
        fr: "Tentative soviétique de contrer les missiles Jupiter américains en Turquie",
      },
      {
        en: "Cuban alliance with USSR after the Bay of Pigs invasion",
        fr: "Alliance cubaine avec l'URSS après l'invasion de la Baie des Cochons",
      },
      {
        en: "Khrushchev's desire to protect the Cuban Revolution",
        fr: "Désir de Khrouchtchev de protéger la Révolution cubaine",
      },
      {
        en: "Strategic missile imbalance favoring the US",
        fr: "Déséquilibre stratégique des missiles en faveur des États-Unis",
      },
      {
        en: "Cold War tensions and nuclear arms race",
        fr: "Tensions de la Guerre froide et course aux armements nucléaires",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Nuclear Exchange",
          fr: "Échange Nucléaire",
        },
        description: {
          en: "If either Kennedy or Khrushchev had been less restrained, or if local commanders had acted independently, a limited or full-scale nuclear war might have occurred with catastrophic global consequences.",
          fr: "Si Kennedy ou Khrouchtchev avaient été moins modérés, ou si des commandants locaux avaient agi indépendamment, une guerre nucléaire limitée ou à grande échelle aurait pu se produire avec des conséquences mondiales catastrophiques.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "US Invasion of Cuba",
          fr: "Invasion Américaine de Cuba",
        },
        description: {
          en: "If diplomatic resolution had failed, a US invasion of Cuba might have triggered Soviet military response, potentially escalating to a broader conflict.",
          fr: "Si la résolution diplomatique avait échoué, une invasion américaine de Cuba aurait pu déclencher une réponse militaire soviétique, pouvant potentiellement s'étendre à un conflit plus large.",
        },
        probability: 0.4,
      },
    ],
    connections: [10, 11, 41, 79, 81],
    coordinates: { x: 0.82, y: 0.32 },
    importance: 0.9,
  },
  {
    id: 86,
    title: {
      en: "Fall of the Soviet Union",
      fr: "Chute de l'Union Soviétique",
    },
    date: "December 26, 1991",
    era: "modern",
    description: {
      en: "The dissolution of the Soviet Union, which marked the end of the Cold War, the breakup of the world's largest communist state, and the emergence of fifteen independent post-Soviet states.",
      fr: "La dissolution de l'Union soviétique, qui a marqué la fin de la Guerre froide, l'éclatement du plus grand État communiste du monde et l'émergence de quinze États post-soviétiques indépendants.",
    },
    consequences: [
      {
        en: "End of the Cold War and bipolar world order",
        fr: "Fin de la Guerre froide et de l'ordre mondial bipolaire",
      },
      {
        en: "Creation of 15 independent post-Soviet states",
        fr: "Création de 15 États post-soviétiques indépendants",
      },
      {
        en: "Economic collapse and privatization in former Soviet republics",
        fr: "Effondrement économique et privatisation dans les anciennes républiques soviétiques",
      },
      {
        en: "NATO expansion into Eastern Europe",
        fr: "Expansion de l'OTAN en Europe de l'Est",
      },
      {
        en: "Rise of the United States as the sole superpower",
        fr: "Montée des États-Unis comme seule superpuissance",
      },
    ],
    causes: [
      {
        en: "Economic stagnation and inefficiency of the Soviet system",
        fr: "Stagnation économique et inefficacité du système soviétique",
      },
      {
        en: "Gorbachev's reforms of glasnost and perestroika",
        fr: "Réformes de Gorbatchev : glasnost et perestroïka",
      },
      {
        en: "Rising nationalism in Soviet republics",
        fr: "Montée du nationalisme dans les républiques soviétiques",
      },
      {
        en: "Failed August 1991 coup attempt",
        fr: "Échec de la tentative de coup d'État d'août 1991",
      },
      {
        en: "Arms race economic pressure",
        fr: "Pression économique de la course aux armements",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Preserved Soviet Union",
          fr: "Union Soviétique Préservée",
        },
        description: {
          en: "If the August 1991 coup had succeeded, or if Gorbachev had implemented Chinese-style economic reforms while maintaining political control, the Soviet Union might have survived in a reformed state.",
          fr: "Si le coup d'État d'août 1991 avait réussi, ou si Gorbatchev avait mis en œuvre des réformes économiques de style chinois tout en maintenant le contrôle politique, l'Union soviétique aurait pu survivre dans un état réformé.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Violent Dissolution",
          fr: "Dissolution Violente",
        },
        description: {
          en: "Without Gorbachev's willingness to accept peaceful dissolution, the Soviet breakup might have resembled Yugoslavia's violent disintegration, with civil wars and ethnic conflicts across the region.",
          fr: "Sans la volonté de Gorbatchev d'accepter une dissolution pacifique, l'éclatement soviétique aurait pu ressembler à la désintégration violente de la Yougoslavie, avec des guerres civiles et des conflits ethniques dans toute la région.",
        },
        probability: 0.4,
      },
    ],
    connections: [11, 39, 44, 79],
    coordinates: { x: 0.86, y: 0.28 },
    importance: 0.95,
  },
  {
    id: 87,
    title: {
      en: "Chernobyl Nuclear Disaster",
      fr: "Catastrophe Nucléaire de Tchernobyl",
    },
    date: "April 26, 1986",
    era: "modern",
    description: {
      en: "A catastrophic nuclear accident at the Chernobyl Nuclear Power Plant in Ukraine (then part of the Soviet Union), considered the worst nuclear disaster in history both in terms of cost and casualties.",
      fr: "Un accident nucléaire catastrophique à la centrale nucléaire de Tchernobyl en Ukraine (alors partie de l'Union soviétique), considéré comme la pire catastrophe nucléaire de l'histoire tant en termes de coût que de victimes.",
    },
    consequences: [
      {
        en: "Immediate deaths and long-term health effects from radiation",
        fr: "Décès immédiats et effets à long terme sur la santé dus aux radiations",
      },
      {
        en: "Evacuation and abandonment of Pripyat and surrounding areas",
        fr: "Évacuation et abandon de Pripyat et des zones environnantes",
      },
      {
        en: "International reassessment of nuclear safety standards",
        fr: "Réévaluation internationale des normes de sécurité nucléaire",
      },
      {
        en: "Strengthening of anti-nuclear movements worldwide",
        fr: "Renforcement des mouvements antinucléaires dans le monde entier",
      },
      {
        en: "Contribution to glasnost and Soviet political openness",
        fr: "Contribution à la glasnost et à l'ouverture politique soviétique",
      },
    ],
    causes: [
      {
        en: "Flawed reactor design with inherent safety issues",
        fr: "Conception défectueuse du réacteur avec des problèmes de sécurité inhérents",
      },
      {
        en: "Inadequately trained personnel conducting a safety test",
        fr: "Personnel insuffisamment formé effectuant un test de sécurité",
      },
      {
        en: "Violation of safety protocols during the test",
        fr: "Violation des protocoles de sécurité pendant le test",
      },
      {
        en: "Soviet culture of secrecy and poor safety culture",
        fr: "Culture soviétique du secret et mauvaise culture de la sécurité",
      },
      {
        en: "Lack of containment structure around the reactor",
        fr: "Absence de structure de confinement autour du réacteur",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Prevented Disaster",
          fr: "Catastrophe Évitée",
        },
        description: {
          en: "If safety protocols had been followed or if the reactor had included Western-style containment structures, the accident might have been prevented or its effects significantly limited.",
          fr: "Si les protocoles de sécurité avaient été suivis ou si le réacteur avait inclus des structures de confinement de style occidental, l'accident aurait pu être évité ou ses effets considérablement limités.",
        },
        probability: 0.5,
      },
      {
        title: {
          en: "Greater Catastrophe",
          fr: "Catastrophe Plus Grande",
        },
        description: {
          en: "Without the heroic efforts of first responders and liquidators, the disaster could have been far worse, potentially contaminating the water supply for millions and rendering vast areas of Eastern Europe uninhabitable.",
          fr: "Sans les efforts héroïques des premiers intervenants et des liquidateurs, la catastrophe aurait pu être bien pire, contaminant potentiellement l'approvisionnement en eau de millions de personnes et rendant de vastes zones d'Europe de l'Est inhabitables.",
        },
        probability: 0.3,
      },
    ],
    connections: [11, 13, 39, 86],
    coordinates: { x: 0.85, y: 0.34 },
    importance: 0.85,
  },
  {
    id: 88,
    title: {
      en: "Creation of the Internet",
      fr: "Création de l'Internet",
    },
    date: "1969-1991",
    era: "modern",
    description: {
      en: "The development of the global system of interconnected computer networks, from the creation of ARPANET in 1969 to the release of the World Wide Web to the public in 1991, fundamentally transforming communication, commerce, and access to information.",
      fr: "Le développement du système mondial de réseaux informatiques interconnectés, depuis la création d'ARPANET en 1969 jusqu'à la diffusion du World Wide Web au public en 1991, transformant fondamentalement la communication, le commerce et l'accès à l'information.",
    },
    consequences: [
      {
        en: "Global instant communication and information sharing",
        fr: "Communication instantanée mondiale et partage d'informations",
      },
      {
        en: "Creation of the digital economy and e-commerce",
        fr: "Création de l'économie numérique et du commerce électronique",
      },
      {
        en: "Democratization of knowledge and media creation",
        fr: "Démocratisation du savoir et de la création médiatique",
      },
      {
        en: "New forms of social interaction and community building",
        fr: "Nouvelles formes d'interaction sociale et de construction communautaire",
      },
      {
        en: "Digital divide between connected and unconnected populations",
        fr: "Fracture numérique entre les populations connectées et non connectées",
      },
    ],
    causes: [
      {
        en: "Cold War military research funding through DARPA",
        fr: "Financement de la recherche militaire pendant la Guerre froide via DARPA",
      },
      {
        en: "Academic desire for distributed information sharing",
        fr: "Désir académique de partage d'informations distribué",
      },
      {
        en: "Development of packet switching technology",
        fr: "Développement de la technologie de commutation de paquets",
      },
      {
        en: "Tim Berners-Lee's creation of HTTP and HTML",
        fr: "Création du HTTP et du HTML par Tim Berners-Lee",
      },
      {
        en: "Commercialization of personal computers",
        fr: "Commercialisation des ordinateurs personnels",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Proprietary Networks",
          fr: "Réseaux Propriétaires",
        },
        description: {
          en: "Without open protocols and academic sharing, the internet might have developed as competing proprietary networks like CompuServe or AOL, limiting its universality and innovation.",
          fr: "Sans protocoles ouverts et partage académique, l'internet aurait pu se développer comme des réseaux propriétaires concurrents comme CompuServe ou AOL, limitant son universalité et son innovation.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Earlier Mainstream Adoption",
          fr: "Adoption Grand Public Plus Précoce",
        },
        description: {
          en: "With different policy decisions or technological developments, widespread internet adoption might have occurred years earlier, potentially accelerating digital transformation across society.",
          fr: "Avec différentes décisions politiques ou développements technologiques, l'adoption généralisée d'internet aurait pu se produire des années plus tôt, accélérant potentiellement la transformation numérique dans toute la société.",
        },
        probability: 0.3,
      },
    ],
    connections: [11, 12, 50, 55],
    coordinates: { x: 0.84, y: 0.4 },
    importance: 0.95,
  },
  {
    id: 79,
    title: {
      en: "The Space Race",
      fr: "La Course à l'Espace",
    },
    date: "1957-1969",
    era: "modern",
    description: {
      en: "The competition between the United States and the Soviet Union for supremacy in spaceflight capability, which began with the Soviet launch of Sputnik and culminated in the US Apollo 11 Moon landing.",
      fr: "La compétition entre les États-Unis et l'Union soviétique pour la suprématie dans le domaine spatial, qui a commencé avec le lancement soviétique de Spoutnik et culminé avec l'alunissage américain d'Apollo 11.",
    },
    consequences: [
      {
        en: "Rapid advancement in rocket and computer technology",
        fr: "Avancement rapide de la technologie des fusées et de l'informatique",
      },
      {
        en: "Development of satellite communications and GPS",
        fr: "Développement des communications par satellite et du GPS",
      },
      {
        en: "Spinoff technologies benefiting everyday life",
        fr: "Technologies dérivées bénéficiant à la vie quotidienne",
      },
      {
        en: "Inspiration for scientific education and careers",
        fr: "Inspiration pour l'éducation scientifique et les carrières",
      },
      {
        en: "Demonstration of ideological superiority through technological achievement",
        fr: "Démonstration de la supériorité idéologique par les prouesses technologiques",
      },
    ],
    causes: [
      {
        en: "Cold War competition between superpowers",
        fr: "Compétition de la Guerre froide entre les superpuissances",
      },
      {
        en: "Military missile technology adapted for space exploration",
        fr: "Technologie des missiles militaires adaptée à l'exploration spatiale",
      },
      {
        en: "National prestige tied to technological achievement",
        fr: "Prestige national lié aux réalisations technologiques",
      },
      {
        en: "Scientific curiosity about space exploration",
        fr: "Curiosité scientifique pour l'exploration spatiale",
      },
      {
        en: "German rocket scientists recruited after World War II",
        fr: "Scientifiques allemands spécialistes des fusées recrutés après la Seconde Guerre mondiale",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Soviet Moon Landing",
          fr: "Alunissage Soviétique",
        },
        description: {
          en: "If the Soviet Union had reached the Moon first, the Cold War might have taken a different course with increased Soviet prestige and influence.",
          fr: "Si l'Union soviétique avait atteint la Lune en premier, la Guerre froide aurait pu prendre un cours différent avec un prestige et une influence soviétiques accrus.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Collaborative Space Program",
          fr: "Programme Spatial Collaboratif",
        },
        description: {
          en: "If the US and USSR had collaborated on space exploration from the beginning, more ambitious missions might have been possible with combined resources.",
          fr: "Si les États-Unis et l'URSS avaient collaboré sur l'exploration spatiale dès le début, des missions plus ambitieuses auraient pu être possibles avec des ressources combinées.",
        },
        probability: 0.2,
      },
    ],
    connections: [10, 11, 41, 43, 58],
    coordinates: { x: 0.83, y: 0.42 },
    importance: 0.85,
  },
  {
    id: 80,
    title: {
      en: "Civil Rights Movement",
      fr: "Mouvement des Droits Civiques",
    },
    date: "1954-1968",
    era: "modern",
    description: {
      en: "A decades-long struggle by African Americans and their allies to end institutionalized racial discrimination, disenfranchisement, and segregation in the United States, marked by nonviolent protest, civil disobedience, and landmark legislation.",
      fr: "Une lutte de plusieurs décennies menée par les Afro-Américains et leurs alliés pour mettre fin à la discrimination raciale institutionnalisée, à la privation du droit de vote et à la ségrégation aux États-Unis, marquée par des manifestations non violentes, la désobéissance civile et une législation historique.",
    },
    consequences: [
      {
        en: "Civil Rights Act of 1964 and Voting Rights Act of 1965",
        fr: "Civil Rights Act de 1964 et Voting Rights Act de 1965",
      },
      {
        en: "Dismantling of legal segregation in the United States",
        fr: "Démantèlement de la ségrégation légale aux États-Unis",
      },
      {
        en: "Expansion of democratic participation for minorities",
        fr: "Expansion de la participation démocratique pour les minorités",
      },
      {
        en: "Model for other social justice movements worldwide",
        fr: "Modèle pour d'autres mouvements de justice sociale dans le monde entier",
      },
      {
        en: "Cultural shifts in racial attitudes and representation",
        fr: "Changements culturels dans les attitudes et la représentation raciales",
      },
    ],
    causes: [
      {
        en: "Centuries of racial discrimination and segregation",
        fr: "Siècles de discrimination raciale et de ségrégation",
      },
      {
        en: "Post-WWII activism by returning African American veterans",
        fr: "Activisme d'après-guerre des vétérans afro-américains de retour",
      },
      {
        en: "Urbanization and the Great Migration of Black Americans",
        fr: "Urbanisation et Grande Migration des Noirs américains",
      },
      {
        en: "Strategic organization by civil rights groups like NAACP and SCLC",
        fr: "Organisation stratégique par des groupes de droits civiques comme la NAACP et la SCLC",
      },
      {
        en: "Media coverage bringing racial injustice to national attention",
        fr: "Couverture médiatique portant l'injustice raciale à l'attention nationale",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "More Radical Turn",
          fr: "Tournant Plus Radical",
        },
        description: {
          en: "Without successful nonviolent achievements, the movement might have shifted more completely to militant approaches, potentially delaying legislative victories.",
          fr: "Sans réalisations non violentes réussies, le mouvement aurait pu se tourner plus complètement vers des approches militantes, retardant potentiellement les victoires législatives.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Earlier Federal Intervention",
          fr: "Intervention Fédérale Plus Précoce",
        },
        description: {
          en: "If the federal government had more forcefully supported civil rights earlier, progress might have been faster with less violence and resistance.",
          fr: "Si le gouvernement fédéral avait soutenu plus énergiquement les droits civiques plus tôt, les progrès auraient pu être plus rapides avec moins de violence et de résistance.",
        },
        probability: 0.3,
      },
    ],
    connections: [8, 10, 11, 42, 43],
    coordinates: {
      x: 0.82,
      y: 0.48,
    },
    importance: 0.9,
  },
  {
    id: 81,
    title: {
      en: "Vietnam War",
      fr: "Guerre du Vietnam",
    },
    date: "1955-1975",
    era: "modern",
    description: {
      en: "A protracted conflict between North Vietnam and South Vietnam, with the United States supporting South Vietnam, that became a proxy war in the Cold War and the first major military defeat for the United States.",
      fr: "Un conflit prolongé entre le Vietnam du Nord et le Vietnam du Sud, avec les États-Unis soutenant le Vietnam du Sud, qui est devenu une guerre par procuration pendant la Guerre froide et la première défaite militaire majeure pour les États-Unis.",
    },
    consequences: [
      {
        en: "Unification of Vietnam under communist rule",
        fr: "Unification du Vietnam sous un régime communiste",
      },
      {
        en: "Over 3 million Vietnamese and 58,000 American deaths",
        fr: "Plus de 3 millions de morts vietnamiens et 58 000 morts américains",
      },
      {
        en: "Refugee crisis with millions of Vietnamese displaced",
        fr: "Crise des réfugiés avec des millions de Vietnamiens déplacés",
      },
      {
        en: "Anti-war movement and political divisions in the US",
        fr: "Mouvement anti-guerre et divisions politiques aux États-Unis",
      },
      {
        en: "Reassessment of US military interventionism ('Vietnam Syndrome')",
        fr: "Réévaluation de l'interventionnisme militaire américain ('Syndrome du Vietnam')",
      },
    ],
    causes: [
      {
        en: "Cold War containment policy against communism",
        fr: "Politique d'endiguement de la Guerre froide contre le communisme",
      },
      {
        en: "French colonial withdrawal from Indochina",
        fr: "Retrait colonial français d'Indochine",
      },
      {
        en: "North Vietnamese goal of national unification",
        fr: "Objectif nord-vietnamien d'unification nationale",
      },
      {
        en: "Domino theory fears of spreading communism in Southeast Asia",
        fr: "Craintes de la théorie des dominos concernant la propagation du communisme en Asie du Sud-Est",
      },
      {
        en: "Gulf of Tonkin incident escalating US involvement",
        fr: "Incident du golfe du Tonkin intensifiant l'implication américaine",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "US Non-Intervention",
          fr: "Non-Intervention Américaine",
        },
        description: {
          en: "Without US military involvement, Vietnam might have unified under communist rule much earlier, potentially altering the Cold War in Southeast Asia.",
          fr: "Sans l'implication militaire américaine, le Vietnam aurait pu s'unifier sous un régime communiste beaucoup plus tôt, modifiant potentiellement la Guerre froide en Asie du Sud-Est.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Negotiated Settlement",
          fr: "Règlement Négocié",
        },
        description: {
          en: "An earlier negotiated settlement might have created a permanently divided Vietnam similar to Korea, with different political systems in each part.",
          fr: "Un règlement négocié plus tôt aurait pu créer un Vietnam divisé de manière permanente similaire à la Corée, avec des systèmes politiques différents dans chaque partie.",
        },
        probability: 0.3,
      },
    ],
    connections: [10, 11, 39, 42, 43],
    coordinates: {
      x: 0.84,
      y: 0.36,
    },
    importance: 0.85,
  },
  {
    id: 82,
    title: {
      en: "Green Revolution",
      fr: "Révolution Verte",
    },
    date: "1950-1970",
    era: "modern",
    description: {
      en: "A series of agricultural research, technology transfer, and development initiatives that dramatically increased agricultural production worldwide, particularly in developing countries, through high-yielding crop varieties, irrigation infrastructure, and modern farming methods.",
      fr: "Une série de recherches agricoles, de transferts de technologie et d'initiatives de développement qui ont considérablement augmenté la production agricole mondiale, en particulier dans les pays en développement, grâce à des variétés de cultures à haut rendement, des infrastructures d'irrigation et des méthodes agricoles modernes.",
    },
    consequences: [
      {
        en: "Dramatic increase in global food production",
        fr: "Augmentation spectaculaire de la production alimentaire mondiale",
      },
      {
        en: "Prevention of predicted mass famines in developing world",
        fr: "Prévention des famines de masse prévues dans le monde en développement",
      },
      {
        en: "Transformation of traditional farming practices",
        fr: "Transformation des pratiques agricoles traditionnelles",
      },
      {
        en: "Environmental impacts from chemical fertilizers and pesticides",
        fr: "Impacts environnementaux des engrais chimiques et des pesticides",
      },
      {
        en: "Reduced agricultural workforce and rural-urban migration",
        fr: "Réduction de la main-d'œuvre agricole et migration rurale-urbaine",
      },
    ],
    causes: [
      {
        en: "Population growth creating food security concerns",
        fr: "Croissance démographique créant des préoccupations de sécurité alimentaire",
      },
      {
        en: "Scientific advances in plant breeding and agronomy",
        fr: "Avancées scientifiques en sélection végétale et agronomie",
      },
      {
        en: "Cold War competition for influence in developing nations",
        fr: "Compétition de la Guerre froide pour l'influence dans les nations en développement",
      },
      {
        en: "Philanthropic foundation funding for agricultural research",
        fr: "Financement des fondations philanthropiques pour la recherche agricole",
      },
      {
        en: "Government policies promoting agricultural modernization",
        fr: "Politiques gouvernementales promouvant la modernisation agricole",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Organic Focus",
          fr: "Concentration sur le Biologique",
        },
        description: {
          en: "If the Green Revolution had emphasized organic methods rather than chemical inputs, agricultural development might have been slower but more environmentally sustainable.",
          fr: "Si la Révolution Verte avait mis l'accent sur les méthodes biologiques plutôt que sur les intrants chimiques, le développement agricole aurait pu être plus lent mais plus durable sur le plan environnemental.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Failed Implementation",
          fr: "Échec de la Mise en Œuvre",
        },
        description: {
          en: "Without successful crop yield increases, many developing countries might have faced severe famines, potentially altering global development and population patterns.",
          fr: "Sans augmentation réussie du rendement des cultures, de nombreux pays en développement auraient pu être confrontés à de graves famines, modifiant potentiellement les modèles de développement mondial et de population.",
        },
        probability: 0.4,
      },
    ],
    connections: [10, 11, 13, 42, 43],
    coordinates: {
      x: 0.81,
      y: 0.52,
    },
    importance: 0.85,
  },
  {
    id: 83,
    title: {
      en: "Decolonization of Africa",
      fr: "Décolonisation de l'Afrique",
    },
    date: "1945-1975",
    era: "modern",
    description: {
      en: "The process by which African nations gained independence from European colonial powers, transforming the political map of Africa from a continent largely controlled by European empires to one of independent nation-states.",
      fr: "Le processus par lequel les nations africaines ont obtenu leur indépendance des puissances coloniales européennes, transformant la carte politique de l'Afrique d'un continent largement contrôlé par les empires européens en un continent d'États-nations indépendants.",
    },
    consequences: [
      {
        en: "Creation of dozens of new independent African nations",
        fr: "Création de dizaines de nouvelles nations africaines indépendantes",
      },
      {
        en: "End of direct European colonial rule in Africa",
        fr: "Fin de la domination coloniale européenne directe en Afrique",
      },
      {
        en: "Post-colonial challenges including border disputes and civil conflicts",
        fr: "Défis post-coloniaux, y compris les différends frontaliers et les conflits civils",
      },
      {
        en: "Formation of the Organization of African Unity (later African Union)",
        fr: "Formation de l'Organisation de l'unité africaine (plus tard Union africaine)",
      },
      {
        en: "Economic and political realignments during the Cold War",
        fr: "Réalignements économiques et politiques pendant la Guerre froide",
      },
    ],
    causes: [
      {
        en: "African nationalist movements and independence leaders",
        fr: "Mouvements nationalistes africains et leaders de l'indépendance",
      },
      {
        en: "Weakening of European powers after World War II",
        fr: "Affaiblissement des puissances européennes après la Seconde Guerre mondiale",
      },
      {
        en: "United Nations support for self-determination",
        fr: "Soutien des Nations Unies à l'autodétermination",
      },
      {
        en: "Cold War competition for influence in newly independent states",
        fr: "Compétition de la Guerre froide pour l'influence dans les États nouvellement indépendants",
      },
      {
        en: "Economic burden of maintaining colonial administrations",
        fr: "Charge économique du maintien des administrations coloniales",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Gradual Transition",
          fr: "Transition Graduelle",
        },
        description: {
          en: "A more gradual decolonization process with longer preparation might have created more stable post-colonial states with stronger institutions.",
          fr: "Un processus de décolonisation plus graduel avec une préparation plus longue aurait pu créer des États post-coloniaux plus stables avec des institutions plus fortes.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Pan-African Federation",
          fr: "Fédération Panafricaine",
        },
        description: {
          en: "If pan-African unity movements had succeeded, larger regional federations might have formed instead of numerous smaller states based on colonial boundaries.",
          fr: "Si les mouvements d'unité panafricaine avaient réussi, de plus grandes fédérations régionales auraient pu se former au lieu de nombreux petits États basés sur les frontières coloniales.",
        },
        probability: 0.2,
      },
    ],
    connections: [10, 11, 38, 42, 43],
    coordinates: {
      x: 0.79,
      y: 0.44,
    },
    importance: 0.85,
  }
);

// Adding Ancient History Events
historicalEvents.push(
  {
    id: 59,
    title: {
      en: "Invention of Writing in Mesopotamia",
      fr: "Invention de l'Écriture en Mésopotamie",
    },
    date: "c. 3200 BCE",
    era: "ancient",
    description: {
      en: "The development of cuneiform writing by the Sumerians in Mesopotamia, one of the earliest writing systems in the world, which revolutionized record-keeping, communication, and knowledge preservation.",
      fr: "Le développement de l'écriture cunéiforme par les Sumériens en Mésopotamie, l'un des premiers systèmes d'écriture au monde, qui a révolutionné la tenue des registres, la communication et la préservation des connaissances.",
    },
    consequences: [
      {
        en: "Creation of written records for trade, law, and administration",
        fr: "Création de registres écrits pour le commerce, le droit et l'administration",
      },
      {
        en: "Development of literature, mythology, and religious texts",
        fr: "Développement de la littérature, de la mythologie et des textes religieux",
      },
      {
        en: "Ability to preserve and transmit knowledge across generations",
        fr: "Capacité à préserver et à transmettre les connaissances à travers les générations",
      },
      {
        en: "Foundation for mathematics, astronomy, and other sciences",
        fr: "Fondation pour les mathématiques, l'astronomie et d'autres sciences",
      },
      {
        en: "Evolution of increasingly complex social and political structures",
        fr: "Évolution de structures sociales et politiques de plus en plus complexes",
      },
    ],
    causes: [
      {
        en: "Growing complexity of urban societies and economies",
        fr: "Complexité croissante des sociétés et des économies urbaines",
      },
      {
        en: "Need for accurate record-keeping for trade and taxation",
        fr: "Besoin de tenue de registres précis pour le commerce et la taxation",
      },
      {
        en: "Development of specialized administrative classes",
        fr: "Développement de classes administratives spécialisées",
      },
      {
        en: "Agricultural surplus supporting non-food-producing specialists",
        fr: "Excédent agricole soutenant les spécialistes non producteurs de nourriture",
      },
      {
        en: "Earlier development of counting tokens and pictographs",
        fr: "Développement antérieur de jetons de comptage et de pictogrammes",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Delayed Writing Development",
          fr: "Développement Retardé de l'Écriture",
        },
        description: {
          en: "If writing had developed centuries later, early civilizations might have remained more localized with slower technological and cultural advancement.",
          fr: "Si l'écriture s'était développée des siècles plus tard, les premières civilisations auraient pu rester plus localisées avec une progression technologique et culturelle plus lente.",
        },
        probability: 0.2,
      },
      {
        title: {
          en: "Different Writing System",
          fr: "Système d'Écriture Différent",
        },
        description: {
          en: "If a more intuitive or accessible writing system had developed first, literacy might have spread more widely in ancient societies.",
          fr: "Si un système d'écriture plus intuitif ou accessible s'était développé en premier, l'alphabétisation aurait pu se répandre plus largement dans les sociétés anciennes.",
        },
        probability: 0.3,
      },
    ],
    connections: [14, 15, 18],
    coordinates: {
      x: 0.03,
      y: 0.18,
    },
    importance: 0.95,
  },
  {
    id: 60,
    title: {
      en: "Ancient Egyptian Unification",
      fr: "Unification de l'Égypte Antique",
    },
    date: "c. 3100 BCE",
    era: "ancient",
    description: {
      en: "The unification of Upper and Lower Egypt under King Narmer (Menes), creating the world's first large-scale political state and beginning over 3,000 years of Egyptian civilization.",
      fr: "L'unification de la Haute et de la Basse-Égypte sous le roi Narmer (Ménès), créant le premier État politique à grande échelle au monde et marquant le début de plus de 3 000 ans de civilisation égyptienne.",
    },
    consequences: [
      {
        en: "Creation of the world's first nation-state with centralized authority",
        fr: "Création du premier État-nation au monde avec une autorité centralisée",
      },
      {
        en: "Development of complex administrative and religious systems",
        fr: "Développement de systèmes administratifs et religieux complexes",
      },
      {
        en: "Establishment of divine kingship concept (Pharaoh)",
        fr: "Établissement du concept de la royauté divine (Pharaon)",
      },
      {
        en: "Control of Nile resources enabling massive building projects",
        fr: "Contrôle des ressources du Nil permettant des projets de construction massifs",
      },
      {
        en: "Cultural and artistic traditions that would endure for millennia",
        fr: "Traditions culturelles et artistiques qui perdureront pendant des millénaires",
      },
    ],
    causes: [
      {
        en: "Agricultural productivity of the Nile Valley",
        fr: "Productivité agricole de la vallée du Nil",
      },
      {
        en: "Trade networks connecting Upper and Lower Egypt",
        fr: "Réseaux commerciaux reliant la Haute et la Basse-Égypte",
      },
      {
        en: "Military conquests by Upper Egyptian rulers",
        fr: "Conquêtes militaires par les dirigeants de la Haute-Égypte",
      },
      {
        en: "Development of shared religious beliefs and practices",
        fr: "Développement de croyances et de pratiques religieuses communes",
      },
      {
        en: "Irrigation projects requiring larger-scale coordination",
        fr: "Projets d'irrigation nécessitant une coordination à plus grande échelle",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Divided Egypt",
          fr: "Égypte Divisée",
        },
        description: {
          en: "If Egypt had remained divided between Upper and Lower kingdoms, its power and cultural influence might have been significantly diminished.",
          fr: "Si l'Égypte était restée divisée entre les royaumes du Haut et du Bas, sa puissance et son influence culturelle auraient pu être considérablement diminuées.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Earlier Collapse",
          fr: "Effondrement Précoce",
        },
        description: {
          en: "Without strong unification, Egyptian civilization might have collapsed during climate changes or foreign invasions, altering Mediterranean history.",
          fr: "Sans une unification forte, la civilisation égyptienne aurait pu s'effondrer lors de changements climatiques ou d'invasions étrangères, modifiant l'histoire méditerranéenne.",
        },
        probability: 0.4,
      },
    ],
    connections: [14, 15, 17, 18, 59],
    coordinates: {
      x: 0.04,
      y: 0.22,
    },
    importance: 0.9,
  },
  {
    id: 61,
    title: {
      en: "Indus Valley Civilization",
      fr: "Civilisation de la Vallée de l'Indus",
    },
    date: "c. 2600-1900 BCE",
    era: "ancient",
    description: {
      en: "A sophisticated Bronze Age civilization in the northwestern regions of South Asia, featuring advanced urban planning, sanitation systems, standardized weights, and a writing system that remains undeciphered.",
      fr: "Une civilisation sophistiquée de l'âge du bronze dans les régions nord-ouest de l'Asie du Sud, caractérisée par une planification urbaine avancée, des systèmes d'assainissement, des poids standardisés et un système d'écriture qui reste indéchiffré.",
    },
    consequences: [
      {
        en: "Development of planned cities with grid layouts and public infrastructure",
        fr: "Développement de villes planifiées avec des plans en grille et des infrastructures publiques",
      },
      {
        en: "Advanced sanitation systems including covered drains and public baths",
        fr: "Systèmes d'assainissement avancés comprenant des drains couverts et des bains publics",
      },
      {
        en: "Standardized weights and measures facilitating extensive trade networks",
        fr: "Poids et mesures standardisés facilitant les vastes réseaux commerciaux",
      },
      {
        en: "Sophisticated crafts including pottery, metallurgy, and seal carving",
        fr: "Artisanat sophistiqué comprenant la poterie, la métallurgie et la gravure de sceaux",
      },
      {
        en: "Cultural and possibly religious influences on later South Asian civilizations",
        fr: "Influences culturelles et potentiellement religieuses sur les civilisations sud-asiatiques ultérieures",
      },
    ],
    causes: [
      {
        en: "Fertile floodplains of the Indus River system",
        fr: "Plaines inondables fertiles du système fluvial de l'Indus",
      },
      {
        en: "Trade connections with Mesopotamia and Central Asia",
        fr: "Liens commerciaux avec la Mésopotamie et l'Asie centrale",
      },
      {
        en: "Agricultural surplus supporting urban populations",
        fr: "Excédent agricole soutenant les populations urbaines",
      },
      {
        en: "Development of bronze technology",
        fr: "Développement de la technologie du bronze",
      },
      {
        en: "Relative geographic isolation providing stability",
        fr: "Isolation géographique relative assurant la stabilité",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Deciphered Script",
          fr: "Écriture Déchiffrée",
        },
        description: {
          en: "If the Indus script had been deciphered or preserved better, our understanding of this civilization and its influence would be dramatically different.",
          fr: "Si l'écriture de l'Indus avait été déchiffrée ou mieux préservée, notre compréhension de cette civilisation et de son influence serait radicalement différente.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Continued Civilization",
          fr: "Civilisation Continue",
        },
        description: {
          en: "Without the environmental changes and possible invasions that led to its decline, the Indus civilization might have continued and expanded its influence across Asia.",
          fr: "Sans les changements environnementaux et les invasions possibles qui ont conduit à son déclin, la civilisation de l'Indus aurait pu continuer et étendre son influence à travers l'Asie.",
        },
        probability: 0.3,
      },
    ],
    connections: [14, 15, 17, 59, 60],
    coordinates: {
      x: 0.06,
      y: 0.16,
    },
    importance: 0.85,
  },
  {
    id: 62,
    title: {
      en: "Trojan War",
      fr: "Guerre de Troie",
    },
    date: "c. 1200 BCE",
    era: "ancient",
    description: {
      en: "A legendary conflict between the Greeks and the city of Troy, immortalized in Homer's Iliad, which has profoundly influenced Western literature, art, and cultural identity despite debates about its historical reality.",
      fr: "Un conflit légendaire entre les Grecs et la ville de Troie, immortalisé dans l'Iliade d'Homère, qui a profondément influencé la littérature, l'art et l'identité culturelle occidentales malgré les débats sur sa réalité historique.",
    },
    consequences: [
      {
        en: "Foundation of Western literary tradition through Homer's epics",
        fr: "Fondation de la tradition littéraire occidentale à travers les épopées d'Homère",
      },
      {
        en: "Development of Greek cultural identity and heroic ideals",
        fr: "Développement de l'identité culturelle grecque et des idéaux héroïques",
      },
      {
        en: "Inspiration for countless works of art, literature, and drama",
        fr: "Inspiration pour d'innombrables œuvres d'art, de littérature et de théâtre",
      },
      {
        en: "Historical basis for Greek-Persian cultural divisions",
        fr: "Base historique pour les divisions culturelles gréco-persanes",
      },
      {
        en: "Archaeological discoveries driven by search for historical Troy",
        fr: "Découvertes archéologiques motivées par la recherche de la Troie historique",
      },
    ],
    causes: [
      {
        en: "Possible historical conflict over trade routes to Black Sea",
        fr: "Possible conflit historique sur les routes commerciales vers la mer Noire",
      },
      {
        en: "Political rivalries between Mycenaean Greeks and Anatolian powers",
        fr: "Rivalités politiques entre les Grecs mycéniens et les puissances anatoliennes",
      },
      {
        en: "Cultural memory preserved through oral tradition",
        fr: "Mémoire culturelle préservée par la tradition orale",
      },
      {
        en: "Possible abduction of Helen as casus belli (according to legend)",
        fr: "Possible enlèvement d'Hélène comme casus belli (selon la légende)",
      },
      {
        en: "Bronze Age power struggles in the Eastern Mediterranean",
        fr: "Luttes de pouvoir de l'âge du bronze en Méditerranée orientale",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Lost Epic",
          fr: "Épopée Perdue",
        },
        description: {
          en: "If Homer's epics had not been preserved, Western literary tradition might have developed along significantly different lines.",
          fr: "Si les épopées d'Homère n'avaient pas été préservées, la tradition littéraire occidentale aurait pu se développer selon des lignes significativement différentes.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Historical Accuracy",
          fr: "Précision Historique",
        },
        description: {
          en: "If the war occurred exactly as described in the Iliad, our understanding of Bronze Age warfare and politics would be dramatically revised.",
          fr: "Si la guerre s'était déroulée exactement comme décrit dans l'Iliade, notre compréhension de la guerre et de la politique de l'âge du bronze serait radicalement révisée.",
        },
        probability: 0.1,
      },
    ],
    connections: [16, 17, 18],
    coordinates: {
      x: 0.09,
      y: 0.19,
    },
    importance: 0.8,
  },
  {
    id: 63,
    title: {
      en: "First Olympic Games",
      fr: "Premiers Jeux Olympiques",
    },
    date: "776 BCE",
    era: "ancient",
    description: {
      en: "The establishment of athletic competitions at Olympia in Ancient Greece, held every four years and dedicated to Zeus, which united the Greek city-states in peaceful competition and established a tradition that continues in the modern Olympic Games.",
      fr: "L'établissement de compétitions athlétiques à Olympie dans la Grèce antique, organisées tous les quatre ans et dédiées à Zeus, qui ont uni les cités-États grecques dans une compétition pacifique et établi une tradition qui se perpétue dans les Jeux Olympiques modernes.",
    },
    consequences: [
      {
        en: "Creation of Panhellenic identity transcending city-state rivalries",
        fr: "Création d'une identité panhellénique transcendant les rivalités entre cités-États",
      },
      {
        en: "Establishment of the Olympic truce during games",
        fr: "Établissement de la trêve olympique pendant les jeux",
      },
      {
        en: "Development of athletic and competitive traditions",
        fr: "Développement des traditions athlétiques et compétitives",
      },
      {
        en: "Standardization of time reckoning using Olympiads",
        fr: "Standardisation du calcul du temps à l'aide des olympiades",
      },
      {
        en: "Model for modern international sporting competitions",
        fr: "Modèle pour les compétitions sportives internationales modernes",
      },
    ],
    causes: [
      {
        en: "Religious devotion to Zeus and other Greek deities",
        fr: "Dévotion religieuse à Zeus et aux autres divinités grecques",
      },
      {
        en: "Cultural value placed on physical excellence and competition",
        fr: "Valeur culturelle accordée à l'excellence physique et à la compétition",
      },
      {
        en: "Need for peaceful interaction between often-warring city-states",
        fr: "Besoin d'interaction pacifique entre les cités-États souvent en guerre",
      },
      {
        en: "Existing tradition of funeral games and athletic contests",
        fr: "Tradition existante de jeux funéraires et de compétitions athlétiques",
      },
      {
        en: "Geographic centrality of Olympia in the Greek world",
        fr: "Centralité géographique d'Olympie dans le monde grec",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Religious-Only Festival",
          fr: "Festival Uniquement Religieux",
        },
        description: {
          en: "If the Olympic Games had remained purely religious without athletic competitions, the tradition of international sporting events might never have developed.",
          fr: "Si les Jeux Olympiques étaient restés purement religieux sans compétitions athlétiques, la tradition des événements sportifs internationaux n'aurait peut-être jamais vu le jour.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Continuous Tradition",
          fr: "Tradition Continue",
        },
        description: {
          en: "If the Games had never been suppressed by Roman Emperor Theodosius I, they might have continued uninterrupted for over 2,800 years.",
          fr: "Si les Jeux n'avaient jamais été supprimés par l'empereur romain Théodose Ier, ils auraient pu se poursuivre sans interruption pendant plus de 2 800 ans.",
        },
        probability: 0.2,
      },
    ],
    connections: [16, 17, 18, 62],
    coordinates: {
      x: 0.11,
      y: 0.23,
    },
    importance: 0.8,
  }
);

// Adding Medieval Period Events
historicalEvents.push(
  {
    id: 64,
    title: {
      en: "Viking Age",
      fr: "Âge Viking",
    },
    date: "793-1066 CE",
    era: "medieval",
    description: {
      en: "A period of Scandinavian expansion through trade, colonization, and raids that significantly impacted European development, connected distant regions, and established new settlements from North America to the Middle East.",
      fr: "Une période d'expansion scandinave par le commerce, la colonisation et les raids qui a considérablement influencé le développement européen, connecté des régions éloignées et établi de nouvelles colonies de l'Amérique du Nord au Moyen-Orient.",
    },
    consequences: [
      {
        en: "Settlement of Iceland, Greenland, and brief colonization of North America",
        fr: "Colonisation de l'Islande, du Groenland et brève colonisation de l'Amérique du Nord",
      },
      {
        en: "Formation of Kievan Rus and influence on Eastern European development",
        fr: "Formation de la Rus' de Kiev et influence sur le développement de l'Europe de l'Est",
      },
      {
        en: "Norman conquest of England transforming English culture and language",
        fr: "Conquête normande de l'Angleterre transformant la culture et la langue anglaises",
      },
      {
        en: "Development of advanced shipbuilding and navigation techniques",
        fr: "Développement de techniques avancées de construction navale et de navigation",
      },
      {
        en: "Creation of trade networks connecting Northern Europe to Byzantium and the Islamic world",
        fr: "Création de réseaux commerciaux reliant l'Europe du Nord à Byzance et au monde islamique",
      },
    ],
    causes: [
      {
        en: "Population pressure in Scandinavia",
        fr: "Pression démographique en Scandinavie",
      },
      {
        en: "Development of superior longship technology",
        fr: "Développement de la technologie supérieure des drakkars",
      },
      {
        en: "Political fragmentation in Europe following Charlemagne's death",
        fr: "Fragmentation politique en Europe après la mort de Charlemagne",
      },
      {
        en: "Climate changes opening northern sailing routes",
        fr: "Changements climatiques ouvrant les routes de navigation nordiques",
      },
      {
        en: "Internal competition among Scandinavian leaders",
        fr: "Compétition interne entre les chefs scandinaves",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Permanent North American Settlement",
          fr: "Colonisation Permanente de l'Amérique du Nord",
        },
        description: {
          en: "If Viking settlements in North America had persisted, European contact with the Americas might have occurred centuries earlier, dramatically altering both continents' development.",
          fr: "Si les colonies vikings en Amérique du Nord avaient persisté, le contact européen avec les Amériques aurait pu se produire des siècles plus tôt, modifiant considérablement le développement des deux continents.",
        },
        probability: 0.2,
      },
      {
        title: {
          en: "United Scandinavian Empire",
          fr: "Empire Scandinave Uni",
        },
        description: {
          en: "If Viking leaders had united into a cohesive empire rather than competing kingdoms, Northern Europe might have developed under Scandinavian rather than Frankish/Germanic influence.",
          fr: "Si les chefs vikings s'étaient unis en un empire cohérent plutôt qu'en royaumes concurrents, l'Europe du Nord aurait pu se développer sous l'influence scandinave plutôt que franque/germanique.",
        },
        probability: 0.3,
      },
    ],
    connections: [1, 7, 19, 20, 21, 23],
    coordinates: {
      x: 0.28,
      y: 0.25,
    },
    importance: 0.85,
  },
  {
    id: 65,
    title: {
      en: "Great Schism",
      fr: "Grand Schisme",
    },
    date: "1054 CE",
    era: "medieval",
    description: {
      en: "The formal separation between the Eastern Orthodox and Roman Catholic Churches, resulting from theological, political, and cultural differences that had developed over centuries, permanently dividing Christianity into eastern and western branches.",
      fr: "La séparation formelle entre les Églises orthodoxe orientale et catholique romaine, résultant de différences théologiques, politiques et culturelles qui s'étaient développées au fil des siècles, divisant de manière permanente le christianisme en branches orientale et occidentale.",
    },
    consequences: [
      {
        en: "Permanent division of Christianity into Eastern Orthodox and Roman Catholic traditions",
        fr: "Division permanente du christianisme en traditions orthodoxe orientale et catholique romaine",
      },
      {
        en: "Cultural and political separation between Eastern and Western Europe",
        fr: "Séparation culturelle et politique entre l'Europe de l'Est et l'Europe de l'Ouest",
      },
      {
        en: "Different relationships between church and state in East and West",
        fr: "Différentes relations entre l'Église et l'État à l'Est et à l'Ouest",
      },
      {
        en: "Divergent theological and liturgical developments",
        fr: "Développements théologiques et liturgiques divergents",
      },
      {
        en: "Weakened Christian unity in the face of Islamic expansion",
        fr: "Unité chrétienne affaiblie face à l'expansion islamique",
      },
    ],
    causes: [
      {
        en: "Theological disputes over the Filioque clause in the Nicene Creed",
        fr: "Différends théologiques concernant la clause Filioque dans le Credo de Nicée",
      },
      {
        en: "Competing claims to religious authority between Pope and Patriarch",
        fr: "Revendications concurrentes d'autorité religieuse entre le Pape et le Patriarche",
      },
      {
        en: "Political rivalry between Byzantine Empire and Western powers",
        fr: "Rivalité politique entre l'Empire byzantin et les puissances occidentales",
      },
      {
        en: "Cultural and linguistic differences between Greek East and Latin West",
        fr: "Différences culturelles et linguistiques entre l'Orient grec et l'Occident latin",
      },
      {
        en: "Different approaches to church governance and monasticism",
        fr: "Différentes approches de la gouvernance de l'Église et du monachisme",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Reconciliation and Reunification",
          fr: "Réconciliation et Réunification",
        },
        description: {
          en: "If the churches had reconciled their differences, a unified Christianity might have presented a stronger response to Ottoman expansion and prevented later Protestant splits.",
          fr: "Si les Églises avaient réconcilié leurs différences, un christianisme unifié aurait pu présenter une réponse plus forte à l'expansion ottomane et empêcher les scissions protestantes ultérieures.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Earlier Schism",
          fr: "Schisme Plus Précoce",
        },
        description: {
          en: "If the formal break had occurred centuries earlier when differences first emerged, both traditions might have developed even more distinctly with less shared history.",
          fr: "Si la rupture formelle s'était produite des siècles plus tôt lorsque les différences sont apparues, les deux traditions auraient pu se développer de manière encore plus distincte avec moins d'histoire partagée.",
        },
        probability: 0.4,
      },
    ],
    connections: [1, 2, 7, 19, 20, 25],
    coordinates: {
      x: 0.33,
      y: 0.22,
    },
    importance: 0.8,
  },
  {
    id: 66,
    title: {
      en: "Spread of Islam to Southeast Asia",
      fr: "Propagation de l'Islam en Asie du Sud-Est",
    },
    date: "1200-1500 CE",
    era: "medieval",
    description: {
      en: "The peaceful diffusion of Islam throughout the Indonesian archipelago and Malay Peninsula primarily through trade contacts and Sufi missionaries, creating the world's most populous Muslim region without significant military conquest.",
      fr: "La diffusion pacifique de l'islam dans l'archipel indonésien et la péninsule malaise principalement par le biais de contacts commerciaux et de missionnaires soufis, créant la région musulmane la plus peuplée du monde sans conquête militaire significative.",
    },
    consequences: [
      {
        en: "Establishment of Muslim sultanates across Southeast Asia",
        fr: "Établissement de sultanats musulmans à travers l'Asie du Sud-Est",
      },
      {
        en: "Development of distinctive syncretic Islamic cultures",
        fr: "Développement de cultures islamiques syncrétiques distinctives",
      },
      {
        en: "Creation of trade networks connecting Southeast Asia to the Middle East",
        fr: "Création de réseaux commerciaux reliant l'Asie du Sud-Est au Moyen-Orient",
      },
      {
        en: "Transformation of political and legal systems",
        fr: "Transformation des systèmes politiques et juridiques",
      },
      {
        en: "New cultural and artistic traditions blending Islamic and local elements",
        fr: "Nouvelles traditions culturelles et artistiques mêlant éléments islamiques et locaux",
      },
    ],
    causes: [
      {
        en: "Maritime trade routes connecting Middle East, India, and Southeast Asia",
        fr: "Routes commerciales maritimes reliant le Moyen-Orient, l'Inde et l'Asie du Sud-Est",
      },
      {
        en: "Activities of Muslim merchants and Sufi missionaries",
        fr: "Activités des marchands musulmans et des missionnaires soufis",
      },
      {
        en: "Appeal of Islamic egalitarianism and commercial networks",
        fr: "Attrait de l'égalitarisme islamique et des réseaux commerciaux",
      },
      {
        en: "Decline of Hindu-Buddhist kingdoms in the region",
        fr: "Déclin des royaumes hindou-bouddhistes dans la région",
      },
      {
        en: "Adaptability of Islam to local cultural contexts",
        fr: "Adaptabilité de l'islam aux contextes culturels locaux",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Continued Hindu-Buddhist Dominance",
          fr: "Domination Continue Hindou-Bouddhiste",
        },
        description: {
          en: "Without Islamic influence, Southeast Asia might have remained predominantly Hindu-Buddhist, potentially developing closer cultural ties with India and China.",
          fr: "Sans influence islamique, l'Asie du Sud-Est aurait pu rester majoritairement hindou-bouddhiste, développant potentiellement des liens culturels plus étroits avec l'Inde et la Chine.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "European Christian Conversion",
          fr: "Conversion Chrétienne Européenne",
        },
        description: {
          en: "If European powers had arrived earlier and more extensively, Christianity might have become the dominant religion in parts of Southeast Asia before Islam was firmly established.",
          fr: "Si les puissances européennes étaient arrivées plus tôt et plus largement, le christianisme aurait pu devenir la religion dominante dans certaines parties de l'Asie du Sud-Est avant que l'islam ne soit fermement établi.",
        },
        probability: 0.2,
      },
    ],
    connections: [2, 7, 20, 21],
    coordinates: {
      x: 0.36,
      y: 0.38,
    },
    importance: 0.75,
  },
  {
    id: 67,
    title: {
      en: "Rise of the Samurai",
      fr: "Essor des Samouraïs",
    },
    date: "1185-1333 CE",
    era: "medieval",
    description: {
      en: "The emergence of the samurai warrior class in Japan during the Kamakura period, establishing a feudal system that would dominate Japanese politics, society, and culture for nearly 700 years.",
      fr: "L'émergence de la classe guerrière des samouraïs au Japon pendant la période de Kamakura, établissant un système féodal qui dominerait la politique, la société et la culture japonaises pendant près de 700 ans.",
    },
    consequences: [
      {
        en: "Establishment of the shogunate system of military government",
        fr: "Établissement du système de shogunat de gouvernement militaire",
      },
      {
        en: "Development of bushido warrior code and distinctive martial arts",
        fr: "Développement du code guerrier bushido et des arts martiaux distinctifs",
      },
      {
        en: "Creation of a decentralized feudal system with regional daimyo lords",
        fr: "Création d'un système féodal décentralisé avec des seigneurs daimyo régionaux",
      },
      {
        en: "Influence on Japanese aesthetics, architecture, and cultural values",
        fr: "Influence sur l'esthétique, l'architecture et les valeurs culturelles japonaises",
      },
      {
        en: "Military technology and fortification developments",
        fr: "Développements de la technologie militaire et des fortifications",
      },
    ],
    causes: [
      {
        en: "Weakening of imperial court authority",
        fr: "Affaiblissement de l'autorité de la cour impériale",
      },
      {
        en: "Land disputes requiring military protection",
        fr: "Litiges fonciers nécessitant une protection militaire",
      },
      {
        en: "Rise of provincial warrior families",
        fr: "Essor des familles de guerriers provinciaux",
      },
      {
        en: "Gempei War establishing military government",
        fr: "Guerre de Gempei établissant un gouvernement militaire",
      },
      {
        en: "Mongol invasion attempts strengthening warrior identity",
        fr: "Tentatives d'invasion mongoles renforçant l'identité des guerriers",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Continued Imperial Rule",
          fr: "Domination Impériale Continue",
        },
        description: {
          en: "If the imperial court had maintained central authority, Japan might have developed more like China with a strong bureaucratic state rather than a feudal system.",
          fr: "Si la cour impériale avait maintenu l'autorité centrale, le Japon aurait pu se développer davantage comme la Chine avec un État bureaucratique fort plutôt qu'un système féodal.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Mongol Conquest",
          fr: "Conquête Mongole",
        },
        description: {
          en: "If the Mongol invasions had succeeded, Japan might have been integrated into the broader Mongol Empire, dramatically altering its cultural and political development.",
          fr: "Si les invasions mongoles avaient réussi, le Japon aurait pu être intégré au sein du vaste Empire mongol, modifiant considérablement son développement culturel et politique.",
        },
        probability: 0.2,
      },
    ],
    connections: [7, 21, 23],
    coordinates: {
      x: 0.39,
      y: 0.28,
    },
    importance: 0.75,
  },
  {
    id: 68,
    title: {
      en: "Mali Empire and Mansa Musa",
      fr: "Empire du Mali et Mansa Moussa",
    },
    date: "1235-1670 CE",
    era: "medieval",
    description: {
      en: "The rise of the Mali Empire in West Africa, reaching its peak under Mansa Musa, whose famous pilgrimage to Mecca showcased the empire's extraordinary wealth and established diplomatic connections across the Islamic world.",
      fr: "L'essor de l'Empire du Mali en Afrique de l'Ouest, atteignant son apogée sous Mansa Moussa, dont le célèbre pèlerinage à La Mecque a mis en valeur l'extraordinaire richesse de l'empire et établi des relations diplomatiques à travers le monde islamique.",
    },
    consequences: [
      {
        en: "Control of trans-Saharan trade routes and gold production",
        fr: "Contrôle des routes commerciales transsahariennes et de la production d'or",
      },
      {
        en: "Spread of Islam throughout West Africa",
        fr: "Propagation de l'islam à travers l'Afrique de l'Ouest",
      },
      {
        en: "Development of major learning centers like Timbuktu",
        fr: "Développement de grands centres d'apprentissage comme Tombouctou",
      },
      {
        en: "Architectural innovations including the Great Mosque of Djenné",
        fr: "Innovations architecturales, notamment la Grande Mosquée de Djenné",
      },
      {
        en: "Economic impact on Mediterranean world through gold distribution",
        fr: "Impact économique sur le monde méditerranéen par la distribution d'or",
      },
    ],
    causes: [
      {
        en: "Strategic location controlling trade routes",
        fr: "Position stratégique contrôlant les routes commerciales",
      },
      {
        en: "Gold and salt resources providing economic power",
        fr: "Ressources en or et en sel fournissant une puissance économique",
      },
      {
        en: "Military innovations and cavalry forces",
        fr: "Innovations militaires et forces de cavalerie",
      },
      {
        en: "Islamic religious legitimacy enhancing political authority",
        fr: "Légitimité religieuse islamique renforçant l'autorité politique",
      },
      {
        en: "Agricultural productivity of the Niger River valley",
        fr: "Productivité agricole de la vallée du fleuve Niger",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Earlier European Contact",
          fr: "Contact Européen Plus Précoce",
        },
        description: {
          en: "If European maritime powers had established direct contact with Mali before its decline, West African development and the trajectory of the slave trade might have been significantly different.",
          fr: "Si les puissances maritimes européennes avaient établi un contact direct avec le Mali avant son déclin, le développement de l'Afrique de l'Ouest et la trajectoire de la traite négrière auraient pu être significativement différents.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Continued Expansion",
          fr: "Expansion Continue",
        },
        description: {
          en: "If Mali had continued to expand and consolidate, it might have developed into a persistent continental power comparable to contemporary empires in Eurasia.",
          fr: "Si le Mali avait continué à s'étendre et à se consolider, il aurait pu se développer en une puissance continentale persistante comparable aux empires contemporains d'Eurasie.",
        },
        probability: 0.2,
      },
    ],
    connections: [2, 20, 21, 23],
    coordinates: {
      x: 0.41,
      y: 0.32,
    },
    importance: 0.8,
  }
);

// Adding Renaissance Period Events
historicalEvents.push(
  {
    id: 69,
    title: {
      en: "Michelangelo and the Sistine Chapel",
      fr: "Michel-Ange et la Chapelle Sixtine",
    },
    date: "1508-1512",
    era: "renaissance",
    description: {
      en: "Michelangelo's painting of the Sistine Chapel ceiling, commissioned by Pope Julius II, which became one of the most significant artistic achievements of the Renaissance and a defining work of Western art history.",
      fr: "La peinture du plafond de la chapelle Sixtine par Michel-Ange, commandée par le pape Jules II, qui est devenue l'une des réalisations artistiques les plus importantes de la Renaissance et une œuvre déterminante de l'histoire de l'art occidental.",
    },
    consequences: [
      {
        en: "Establishment of new standards for monumental painting",
        fr: "Établissement de nouvelles normes pour la peinture monumentale",
      },
      {
        en: "Elevation of the artist's status from craftsman to genius",
        fr: "Élévation du statut de l'artiste de l'artisan au génie",
      },
      {
        en: "Influence on generations of artists and artistic techniques",
        fr: "Influence sur des générations d'artistes et de techniques artistiques",
      },
      {
        en: "Creation of enduring religious and cultural imagery",
        fr: "Création d'imagerie religieuse et culturelle durable",
      },
      {
        en: "Enhancement of Rome's status as a center of Renaissance art",
        fr: "Renforcement du statut de Rome en tant que centre de l'art de la Renaissance",
      },
    ],
    causes: [
      {
        en: "Pope Julius II's ambitious artistic patronage",
        fr: "Le mécénat artistique ambitieux du pape Jules II",
      },
      {
        en: "Competition among Renaissance artists for prestigious commissions",
        fr: "Compétition entre les artistes de la Renaissance pour les commandes prestigieuses",
      },
      {
        en: "Michelangelo's unparalleled skill and artistic vision",
        fr: "Les compétences inégalées et la vision artistique de Michel-Ange",
      },
      {
        en: "Church's desire to reassert its cultural authority",
        fr: "Le désir de l'Église de réaffirmer son autorité culturelle",
      },
      {
        en: "Renaissance interest in human anatomy and classical forms",
        fr: "L'intérêt de la Renaissance pour l'anatomie humaine et les formes classiques",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Raphael's Commission",
          fr: "Commande à Raphaël",
        },
        description: {
          en: "If Raphael rather than Michelangelo had received the Sistine commission, the ceiling might have featured a more harmonious and less dramatic style, altering the trajectory of Western art.",
          fr: "Si Raphaël plutôt que Michel-Ange avait reçu la commande de la Sixtine, le plafond aurait pu présenter un style plus harmonieux et moins dramatique, modifiant la trajectoire de l'art occidental.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Unfinished Masterpiece",
          fr: "Chef-d'œuvre Inachevé",
        },
        description: {
          en: "If Michelangelo had abandoned the project due to his initial reluctance, one of history's greatest artworks might never have existed, diminishing our understanding of Renaissance achievement.",
          fr: "Si Michel-Ange avait abandonné le projet en raison de sa réticence initiale, l'une des plus grandes œuvres d'art de l'histoire n'aurait peut-être jamais existé, diminuant notre compréhension des réalisations de la Renaissance.",
        },
        probability: 0.2,
      },
    ],
    connections: [5, 24, 25, 26, 28],
    coordinates: {
      x: 0.49,
      y: 0.31,
    },
    importance: 0.85,
  },
  {
    id: 70,
    title: {
      en: "Reign of Queen Elizabeth I",
      fr: "Règne de la Reine Elizabeth Ière",
    },
    date: "1558-1603",
    era: "renaissance",
    description: {
      en: "The 45-year reign of Queen Elizabeth I of England, which saw the flourishing of English culture, the defeat of the Spanish Armada, and the establishment of England as a major European power during a period known as the Elizabethan Age.",
      fr: "Le règne de 45 ans de la reine Elizabeth Ière d'Angleterre, qui a vu l'épanouissement de la culture anglaise, la défaite de l'Armada espagnole et l'établissement de l'Angleterre comme une puissance européenne majeure pendant une période connue sous le nom d'ère élisabéthaine.",
    },
    consequences: [
      {
        en: "Golden Age of English literature and theater including Shakespeare",
        fr: "Âge d'or de la littérature et du théâtre anglais, y compris Shakespeare",
      },
      {
        en: "Religious settlement establishing moderate Protestantism in England",
        fr: "Règlement religieux établissant un protestantisme modéré en Angleterre",
      },
      {
        en: "Naval expansion and early English colonization efforts",
        fr: "Expansion navale et premiers efforts de colonisation anglaise",
      },
      {
        en: "Shift in European balance of power away from Spain",
        fr: "Changement dans l'équilibre des pouvoirs européens au détriment de l'Espagne",
      },
      {
        en: "Model of successful female leadership in a patriarchal age",
        fr: "Modèle de leadership féminin réussi dans une époque patriarcale",
      },
    ],
    causes: [
      {
        en: "Tudor succession crisis and religious turmoil",
        fr: "Crise de succession Tudor et troubles religieux",
      },
      {
        en: "Elizabeth's political acumen and education",
        fr: "L'acuité politique et l'éducation d'Elizabeth",
      },
      {
        en: "Growing English national identity",
        fr: "Croissance de l'identité nationale anglaise",
      },
      {
        en: "Economic changes including rise of merchant classes",
        fr: "Changements économiques, y compris l'essor des classes marchandes",
      },
      {
        en: "Competition with Catholic powers, especially Spain",
        fr: "Compétition avec les puissances catholiques, en particulier l'Espagne",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Catholic Restoration",
          fr: "Restauration Catholique",
        },
        description: {
          en: "If Mary Queen of Scots had successfully claimed the English throne, England might have returned to Catholicism, dramatically altering European religious and political development.",
          fr: "Si Marie Stuart avait réussi à revendiquer le trône anglais, l'Angleterre aurait pu revenir au catholicisme, modifiant considérablement le développement religieux et politique européen.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Spanish Victory",
          fr: "Victoire Espagnole",
        },
        description: {
          en: "If the Spanish Armada had succeeded in 1588, Spanish dominance in Europe might have continued longer and English colonial expansion might have been curtailed.",
          fr: "Si l'Armada espagnole avait réussi en 1588, la domination espagnole en Europe aurait pu se prolonger et l'expansion coloniale anglaise aurait pu être réduite.",
        },
        probability: 0.2,
      },
    ],
    connections: [5, 25, 26, 27, 28],
    coordinates: {
      x: 0.53,
      y: 0.29,
    },
    importance: 0.85,
  },
  {
    id: 71,
    title: {
      en: "Machiavelli's Political Philosophy",
      fr: "La Philosophie Politique de Machiavel",
    },
    date: "1513",
    era: "renaissance",
    description: {
      en: "Niccolò Machiavelli's writing of 'The Prince,' a revolutionary political treatise that analyzed power politics with unprecedented realism, separating political effectiveness from traditional Christian morality and laying foundations for modern political science.",
      fr: "L'écriture du 'Prince' par Niccolò Machiavel, un traité politique révolutionnaire qui analysait la politique de pouvoir avec un réalisme sans précédent, séparant l'efficacité politique de la morale chrétienne traditionnelle et jetant les bases de la science politique moderne.",
    },
    consequences: [
      {
        en: "Development of realist political theory focused on power dynamics",
        fr: "Développement de la théorie politique réaliste axée sur la dynamique du pouvoir",
      },
      {
        en: "Separation of politics from religious and moral considerations",
        fr: "Séparation de la politique des considérations religieuses et morales",
      },
      {
        en: "Influence on modern concepts of statecraft and governance",
        fr: "Influence sur les concepts modernes de l'art de gouverner et de la gouvernance",
      },
      {
        en: "Contribution to ideas of republicanism and civic virtue",
        fr: "Contribution aux idées de républicanisme et de vertu civique",
      },
      {
        en: "Enduring impact on political leadership strategies",
        fr: "Impact durable sur les stratégies de leadership politique",
      },
    ],
    causes: [
      {
        en: "Political instability in Renaissance Italian city-states",
        fr: "Instabilité politique dans les cités-états italiennes de la Renaissance",
      },
      {
        en: "Machiavelli's diplomatic experience and political exile",
        fr: "L'expérience diplomatique et l'exil politique de Machiavel",
      },
      {
        en: "Renaissance humanism's critical approach to traditional authorities",
        fr: "L'approche critique de l'humanisme de la Renaissance envers les autorités traditionnelles",
      },
      {
        en: "Observation of successful political leaders like Cesare Borgia",
        fr: "Observation de dirigeants politiques prospères comme Cesare Borgia",
      },
      {
        en: "Need for practical rather than idealistic political guidance",
        fr: "Besoin de conseils politiques pratiques plutôt qu'idéalistes",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Lost Manuscript",
          fr: "Manuscrit Perdu",
        },
        description: {
          en: "If 'The Prince' had never been published, political theory might have remained more idealistic and less pragmatic for centuries longer.",
          fr: "Si 'Le Prince' n'avait jamais été publié, la théorie politique aurait pu rester plus idéaliste et moins pragmatique pendant des siècles.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Positive Reception",
          fr: "Réception Positive",
        },
        description: {
          en: "If Machiavelli's work had been embraced rather than condemned by his contemporaries, political realism might have developed earlier and more openly.",
          fr: "Si l'œuvre de Machiavel avait été acceptée plutôt que condamnée par ses contemporains, le réalisme politique aurait pu se développer plus tôt et plus ouvertement.",
        },
        probability: 0.4,
      },
    ],
    connections: [5, 25, 26, 28],
    coordinates: {
      x: 0.52,
      y: 0.36,
    },
    importance: 0.8,
  },
  {
    id: 72,
    title: {
      en: "Scientific Method Development",
      fr: "Développement de la Méthode Scientifique",
    },
    date: "1550-1620",
    era: "renaissance",
    description: {
      en: "The formulation of systematic approaches to scientific inquiry by figures like Francis Bacon and Galileo Galilei, emphasizing empirical observation, controlled experimentation, and mathematical analysis over traditional authority and speculative reasoning.",
      fr: "La formulation d'approches systématiques à l'enquête scientifique par des figures comme Francis Bacon et Galileo Galilei, mettant l'accent sur l'observation empirique, l'expérimentation contrôlée et l'analyse mathématique plutôt que sur l'autorité traditionnelle et le raisonnement spéculatif.",
    },
    consequences: [
      {
        en: "Foundation for the Scientific Revolution and modern science",
        fr: "Fondation de la Révolution Scientifique et de la science moderne",
      },
      {
        en: "Shift from Aristotelian to empirical approaches to knowledge",
        fr: "Passage des approches aristotéliciennes aux approches empiriques de la connaissance",
      },
      {
        en: "Development of experimental techniques and scientific instruments",
        fr: "Développement de techniques expérimentales et d'instruments scientifiques",
      },
      {
        en: "Challenge to traditional religious and philosophical authorities",
        fr: "Défi aux autorités religieuses et philosophiques traditionnelles",
      },
      {
        en: "Acceleration of technological and medical innovations",
        fr: "Accélération des innovations technologiques et médicales",
      },
    ],
    causes: [
      {
        en: "Renaissance rediscovery of classical scientific texts",
        fr: "Redécouverte à la Renaissance des textes scientifiques classiques",
      },
      {
        en: "Limitations of scholastic approaches to natural philosophy",
        fr: "Limitations des approches scolastiques de la philosophie naturelle",
      },
      {
        en: "New observations challenging ancient authorities",
        fr: "Nouvelles observations contestant les autorités anciennes",
      },
      {
        en: "Development of more precise measuring instruments",
        fr: "Développement d'instruments de mesure plus précis",
      },
      {
        en: "Growing culture of intellectual exchange and academies",
        fr: "Culture croissante d'échanges intellectuels et d'académies",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Delayed Empiricism",
          fr: "Empirisme Retardé",
        },
        description: {
          en: "Without the development of the scientific method, technological and scientific progress might have been significantly slower, delaying the Industrial Revolution by centuries.",
          fr: "Sans le développement de la méthode scientifique, le progrès technologique et scientifique aurait pu être considérablement plus lent, retardant la Révolution Industrielle de plusieurs siècles.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Religious Integration",
          fr: "Intégration Religieuse",
        },
        description: {
          en: "If scientific inquiry had developed more within religious frameworks rather than in tension with them, the relationship between science and religion might have evolved very differently.",
          fr: "Si l'enquête scientifique s'était développée davantage au sein de cadres religieux plutôt qu'en tension avec eux, la relation entre la science et la religion aurait pu évoluer très différemment.",
        },
        probability: 0.4,
      },
    ],
    connections: [5, 24, 26, 28],
    coordinates: {
      x: 0.54,
      y: 0.34,
    },
    importance: 0.9,
  },
  {
    id: 73,
    title: {
      en: "Spanish Inquisition",
      fr: "Inquisition Espagnole",
    },
    date: "1478-1834",
    era: "renaissance",
    description: {
      en: "An ecclesiastical tribunal established by Catholic monarchs Ferdinand and Isabella to maintain Catholic orthodoxy in Spain, known for its use of torture, censorship, and public executions, particularly targeting conversos (converted Jews) and moriscos (converted Muslims).",
      fr: "Un tribunal ecclésiastique établi par les monarques catholiques Ferdinand et Isabelle pour maintenir l'orthodoxie catholique en Espagne, connu pour son utilisation de la torture, de la censure et des exécutions publiques, ciblant particulièrement les conversos (Juifs convertis) et les moriscos (Musulmans convertis).",
    },
    consequences: [
      {
        en: "Enforcement of religious uniformity in Spain",
        fr: "Application de l'uniformité religieuse en Espagne",
      },
      {
        en: "Expulsion of Jews and Muslims from Spain",
        fr: "Expulsion des Juifs et des Musulmans d'Espagne",
      },
      {
        en: "Development of concepts of 'blood purity' (limpieza de sangre)",
        fr: "Développement des concepts de 'pureté du sang' (limpieza de sangre)",
      },
      {
        en: "Censorship of books and suppression of intellectual freedom",
        fr: "Censure des livres et suppression de la liberté intellectuelle",
      },
      {
        en: "Long-term impact on Spanish culture and religious identity",
        fr: "Impact à long terme sur la culture et l'identité religieuse espagnoles",
      },
    ],
    causes: [
      {
        en: "Completion of the Reconquista and desire for religious unity",
        fr: "Achèvement de la Reconquista et désir d'unité religieuse",
      },
      {
        en: "Suspicion of conversos' and moriscos' religious sincerity",
        fr: "Suspicion de la sincérité religieuse des conversos et des moriscos",
      },
      {
        en: "Political centralization under Ferdinand and Isabella",
        fr: "Centralisation politique sous Ferdinand et Isabelle",
      },
      {
        en: "Economic motivations including property confiscation",
        fr: "Motivations économiques, y compris la confiscation de biens",
      },
      {
        en: "Papal authorization through the bull Exigit Sinceras Devotionis",
        fr: "Autorisation papale par la bulle Exigit Sinceras Devotionis",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Religious Tolerance",
          fr: "Tolérance Religieuse",
        },
        description: {
          en: "If Spain had maintained the relative religious tolerance of its medieval period, it might have developed differently economically and culturally, potentially avoiding later decline.",
          fr: "Si l'Espagne avait maintenu la tolérance religieuse relative de sa période médiévale, elle aurait pu se développer différemment économiquement et culturellement, évitant potentiellement un déclin ultérieur.",
        },
        probability: 0.2,
      },
      {
        title: {
          en: "Limited Church Authority",
          fr: "Autorité Ecclésiastique Limitée",
        },
        description: {
          en: "If the Spanish crown had established more control over the Inquisition from the beginning, its excesses might have been curtailed and its focus might have been more political than religious.",
          fr: "Si la couronne espagnole avait établi plus de contrôle sur l'Inquisition dès le début, ses excès auraient pu être réduits et son objectif aurait pu être plus politique que religieux.",
        },
        probability: 0.3,
      },
    ],
    connections: [5, 25, 27, 28],
    coordinates: {
      x: 0.5,
      y: 0.4,
    },
    importance: 0.75,
  }
);

// Adding Industrial Revolution Events
historicalEvents.push(
  {
    id: 74,
    title: {
      en: "Cotton Gin and Textile Revolution",
      fr: "L'Égreneuse de Coton et la Révolution Textile",
    },
    date: "1793-1830",
    era: "industrial",
    description: {
      en: "Eli Whitney's invention of the cotton gin and subsequent mechanization of textile production, which dramatically increased cotton processing efficiency, transformed global textile manufacturing, and reshaped economic and social structures in both America and Europe.",
      fr: "L'invention de l'égreneuse de coton par Eli Whitney et la mécanisation subséquente de la production textile, qui ont considérablement augmenté l'efficacité du traitement du coton, ont transformé la fabrication textile mondiale et ont remodelé les structures économiques et sociales en Amérique et en Europe.",
    },
    consequences: [
      {
        en: "Explosive growth in cotton production and textile manufacturing",
        fr: "Croissance explosive de la production de coton et de la fabrication textile",
      },
      {
        en: "Expansion and entrenchment of slavery in the American South",
        fr: "Expansion et enracinement de l'esclavage dans le sud américain",
      },
      {
        en: "Rise of factory towns and industrial centers in Britain and New England",
        fr: "Essor des villes industrielles et des centres industriels en Grande-Bretagne et en Nouvelle-Angleterre",
      },
      {
        en: "Transformation of global clothing production and consumption",
        fr: "Transformation de la production et de la consommation mondiales de vêtements",
      },
      {
        en: "Development of interchangeable parts manufacturing techniques",
        fr: "Développement de techniques de fabrication de pièces interchangeables",
      },
    ],
    causes: [
      {
        en: "Growing demand for cotton textiles in Europe and America",
        fr: "Demande croissante de textiles en coton en Europe et en Amérique",
      },
      {
        en: "Labor-intensive nature of cotton processing before mechanization",
        fr: "Nature à forte intensité de main-d'œuvre du traitement du coton avant la mécanisation",
      },
      {
        en: "Existing innovations in spinning and weaving technology",
        fr: "Innovations existantes dans la technologie du filage et du tissage",
      },
      {
        en: "Economic incentives for increasing production efficiency",
        fr: "Incitations économiques à l'augmentation de l'efficacité de la production",
      },
      {
        en: "Whitney's mechanical ingenuity and business ambitions",
        fr: "L'ingéniosité mécanique et les ambitions commerciales de Whitney",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Delayed Mechanization",
          fr: "Mécanisation Retardée",
        },
        description: {
          en: "Without the cotton gin, cotton production might have remained limited, potentially weakening the economic case for slavery's expansion and altering the trajectory of American history.",
          fr: "Sans l'égreneuse de coton, la production de coton serait peut-être restée limitée, ce qui aurait pu affaiblir l'argument économique en faveur de l'expansion de l'esclavage et modifier la trajectoire de l'histoire américaine.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Alternative Fiber Focus",
          fr: "Accent sur les Fibres Alternatives",
        },
        description: {
          en: "If technological innovation had focused on other fibers like hemp or flax instead of cotton, different agricultural patterns and labor systems might have developed.",
          fr: "Si l'innovation technologique s'était concentrée sur d'autres fibres comme le chanvre ou le lin au lieu du coton, des modèles agricoles et des systèmes de travail différents auraient pu se développer.",
        },
        probability: 0.2,
      },
    ],
    connections: [6, 8, 29, 31, 33, 35],
    coordinates: {
      x: 0.61,
      y: 0.38,
    },
    importance: 0.85,
  },
  {
    id: 75,
    title: {
      en: "Development of Factory System",
      fr: "Développement du Système d'Usine",
    },
    date: "1770-1830",
    era: "industrial",
    description: {
      en: "The emergence of the modern factory system, particularly in British textile manufacturing, which centralized production in large facilities with specialized machinery, division of labor, and time-disciplined wage work, fundamentally transforming how goods were produced and how people worked.",
      fr: "L'émergence du système d'usine moderne, en particulier dans la fabrication textile britannique, qui a centralisé la production dans de grandes installations avec des machines spécialisées, la division du travail et le travail salarié discipliné par le temps, transformant fondamentalement la façon dont les biens étaient produits et dont les gens travaillaient.",
    },
    consequences: [
      {
        en: "Dramatic increases in manufacturing productivity and output",
        fr: "Augmentation spectaculaire de la productivité et de la production manufacturières",
      },
      {
        en: "Urbanization as workers migrated to factory towns",
        fr: "Urbanisation due à la migration des travailleurs vers les villes industrielles",
      },
      {
        en: "Development of new class structures (industrial workers and capitalists)",
        fr: "Développement de nouvelles structures de classe (travailleurs industriels et capitalistes)",
      },
      {
        en: "Standardization of working hours and wage labor",
        fr: "Standardisation des heures de travail et du travail salarié",
      },
      {
        en: "Environmental impacts from concentrated industrial activity",
        fr: "Impacts environnementaux de l'activité industrielle concentrée",
      },
    ],
    causes: [
      {
        en: "Technological innovations enabling mechanized production",
        fr: "Innovations technologiques permettant la production mécanisée",
      },
      {
        en: "Availability of investment capital from trade and agriculture",
        fr: "Disponibilité de capitaux d'investissement provenant du commerce et de l'agriculture",
      },
      {
        en: "Enclosure movement creating a mobile workforce",
        fr: "Mouvement des enclosures créant une main-d'œuvre mobile",
      },
      {
        en: "Coal power enabling location flexibility for manufacturing",
        fr: "L'énergie du charbon permettant une flexibilité de localisation pour la fabrication",
      },
      {
        en: "Economic advantages of production centralization",
        fr: "Avantages économiques de la centralisation de la production",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Distributed Manufacturing",
          fr: "Fabrication Distribuée",
        },
        description: {
          en: "If technology had developed to support small-scale, distributed manufacturing rather than centralization, industrial society might have evolved with less urbanization and different labor relations.",
          fr: "Si la technologie s'était développée pour soutenir la fabrication distribuée à petite échelle plutôt que la centralisation, la société industrielle aurait pu évoluer avec moins d'urbanisation et des relations de travail différentes.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Worker Ownership",
          fr: "Propriété Ouvrière",
        },
        description: {
          en: "If early factories had developed under cooperative ownership models rather than capitalist ones, industrial development might have produced less inequality and different labor politics.",
          fr: "Si les premières usines s'étaient développées selon des modèles de propriété coopérative plutôt que capitaliste, le développement industriel aurait pu produire moins d'inégalités et des politiques du travail différentes.",
        },
        probability: 0.2,
      },
    ],
    connections: [6, 29, 30, 31, 33, 34, 37],
    coordinates: {
      x: 0.63,
      y: 0.41,
    },
    importance: 0.9,
  },
  {
    id: 76,
    title: {
      en: "First Transcontinental Railroad",
      fr: "Premier Chemin de Fer Transcontinental",
    },
    date: "1863-1869",
    era: "industrial",
    description: {
      en: "The construction of the first railroad connecting the eastern and western United States, completed when the Central Pacific and Union Pacific railroads were joined at Promontory Summit, Utah, creating the first coast-to-coast transportation and communication network in North America.",
      fr: "La construction du premier chemin de fer reliant l'est et l'ouest des États-Unis, achevée lorsque les chemins de fer Central Pacific et Union Pacific ont été joints à Promontory Summit, Utah, créant le premier réseau de transport et de communication côte à côte en Amérique du Nord.",
    },
    consequences: [
      {
        en: "Dramatic reduction in cross-continental travel time (months to days)",
        fr: "Réduction spectaculaire du temps de trajet transcontinental (de mois à jours)",
      },
      {
        en: "Acceleration of western settlement and Native American displacement",
        fr: "Accélération de la colonisation de l'Ouest et du déplacement des Amérindiens",
      },
      {
        en: "Integration of national markets and economic development",
        fr: "Intégration des marchés nationaux et développement économique",
      },
      {
        en: "Standardization of time zones across the continent",
        fr: "Standardisation des fuseaux horaires à travers le continent",
      },
      {
        en: "Technological and engineering innovations in railroad construction",
        fr: "Innovations technologiques et d'ingénierie dans la construction de chemins de fer",
      },
    ],
    causes: [
      {
        en: "Political desire to bind the nation together after Civil War",
        fr: "Désir politique de lier la nation après la guerre civile",
      },
      {
        en: "Economic opportunities in connecting eastern markets with western resources",
        fr: "Opportunités économiques en reliant les marchés de l'Est aux ressources de l'Ouest",
      },
      {
        en: "Government land grants and financial incentives",
        fr: "Subventions foncières et incitations financières du gouvernement",
      },
      {
        en: "Competition between railroad companies",
        fr: "Compétition entre les compagnies de chemin de fer",
      },
      {
        en: "Availability of immigrant and Civil War veteran labor",
        fr: "Disponibilité de la main-d'œuvre immigrante et des vétérans de la guerre civile",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Delayed Construction",
          fr: "Construction Retardée",
        },
        description: {
          en: "Without government subsidies, transcontinental rail might have been delayed by decades, significantly slowing western development and possibly allowing more autonomous Native American territories.",
          fr: "Sans les subventions gouvernementales, le chemin de fer transcontinental aurait pu être retardé de plusieurs décennies, ralentissant considérablement le développement de l'Ouest et permettant éventuellement des territoires amérindiens plus autonomes.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Southern Route",
          fr: "Route du Sud",
        },
        description: {
          en: "If a southern transcontinental route had been built first instead of the central route, different regions would have developed earlier, potentially altering the economic and political balance of the western states.",
          fr: "Si une route transcontinentale du sud avait été construite en premier au lieu de la route centrale, différentes régions se seraient développées plus tôt, modifiant potentiellement l'équilibre économique et politique des États de l'Ouest.",
        },
        probability: 0.3,
      },
    ],
    connections: [6, 8, 29, 31, 34, 35, 36, 37],
    coordinates: {
      x: 0.67,
      y: 0.43,
    },
    importance: 0.85,
  },
  {
    id: 77,
    title: {
      en: "Invention of Photography",
      fr: "Invention de la Photographie",
    },
    date: "1826-1839",
    era: "industrial",
    description: {
      en: "The development of practical photographic processes by Nicéphore Niépce, Louis Daguerre, and William Henry Fox Talbot, creating the first permanent images captured from nature and launching a revolutionary new medium that would transform visual culture, documentation, and communication.",
      fr: "Le développement de procédés photographiques pratiques par Nicéphore Niépce, Louis Daguerre et William Henry Fox Talbot, créant les premières images permanentes capturées de la nature et lançant un nouveau média révolutionnaire qui transformerait la culture visuelle, la documentation et la communication.",
    },
    consequences: [
      {
        en: "Democratization of portraiture beyond the wealthy elite",
        fr: "Démocratisation du portrait au-delà de l'élite fortunée",
      },
      {
        en: "Accurate documentation of people, places, and events",
        fr: "Documentation précise des personnes, des lieux et des événements",
      },
      {
        en: "New forms of artistic and scientific expression",
        fr: "Nouvelles formes d'expression artistique et scientifique",
      },
      {
        en: "Foundation for cinema, television, and digital imaging",
        fr: "Fondation du cinéma, de la télévision et de l'imagerie numérique",
      },
      {
        en: "Transformation of news reporting and historical documentation",
        fr: "Transformation du reportage d'actualités et de la documentation historique",
      },
    ],
    causes: [
      {
        en: "Scientific understanding of light-sensitive chemicals",
        fr: "Compréhension scientifique des produits chimiques photosensibles",
      },
      {
        en: "Camera obscura technology providing optical foundation",
        fr: "La technologie de la chambre noire fournissant une base optique",
      },
      {
        en: "Cultural desire to capture realistic images",
        fr: "Désir culturel de capturer des images réalistes",
      },
      {
        en: "Competition among inventors in France and England",
        fr: "Compétition entre les inventeurs en France et en Angleterre",
      },
      {
        en: "Growing middle class market for affordable portraiture",
        fr: "Marché croissant de la classe moyenne pour le portrait abordable",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Delayed Visual Media",
          fr: "Médias Visuels Retardés",
        },
        description: {
          en: "Without early photography, visual documentation of the 19th century would be limited to drawings and paintings, significantly altering our historical understanding and delaying the development of cinema.",
          fr: "Sans la photographie précoce, la documentation visuelle du 19e siècle serait limitée aux dessins et aux peintures, modifiant considérablement notre compréhension historique et retardant le développement du cinéma.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Different Technical Path",
          fr: "Trajectoire Technique Différente",
        },
        description: {
          en: "If Talbot's paper negative process had dominated instead of Daguerre's metal plate approach, photography might have developed faster toward mass reproduction, accelerating its social impact.",
          fr: "Si le procédé de négatif papier de Talbot avait dominé au lieu de l'approche de la plaque métallique de Daguerre, la photographie aurait pu se développer plus rapidement vers la reproduction de masse, accélérant son impact social.",
        },
        probability: 0.4,
      },
    ],
    connections: [6, 29, 30, 32, 34, 37],
    coordinates: {
      x: 0.65,
      y: 0.36,
    },
    importance: 0.8,
  },
  {
    id: 78,
    title: {
      en: "Public Health Movement",
      fr: "Mouvement de Santé Publique",
    },
    date: "1840-1875",
    era: "industrial",
    description: {
      en: "The emergence of organized public health initiatives in rapidly industrializing cities, particularly in Britain, which identified connections between sanitation, living conditions, and disease, leading to government interventions in urban infrastructure and the beginnings of modern public health systems.",
      fr: "L'émergence d'initiatives de santé publique organisées dans les villes en rapide industrialisation, en particulier en Grande-Bretagne, qui ont identifié les liens entre l'assainissement, les conditions de vie et les maladies, conduisant à des interventions gouvernementales dans les infrastructures urbaines et aux débuts des systèmes de santé publique modernes.",
    },
    consequences: [
      {
        en: "Development of urban sewer systems and clean water supplies",
        fr: "Développement de systèmes d'égouts urbains et d'approvisionnement en eau potable",
      },
      {
        en: "Dramatic reduction in cholera, typhoid, and other waterborne diseases",
        fr: "Réduction spectaculaire du choléra, de la typhoïde et d'autres maladies d'origine hydrique",
      },
      {
        en: "Establishment of public health as a government responsibility",
        fr: "Établissement de la santé publique en tant que responsabilité gouvernementale",
      },
      {
        en: "Increased life expectancy and population growth",
        fr: "Augmentation de l'espérance de vie et croissance démographique",
      },
      {
        en: "Foundations for modern epidemiology and preventive medicine",
        fr: "Fondations de l'épidémiologie moderne et de la médecine préventive",
      },
    ],
    causes: [
      {
        en: "Overcrowding and poor sanitation in industrial cities",
        fr: "Surpeuplement et mauvaises conditions sanitaires dans les villes industrielles",
      },
      {
        en: "Recurring epidemics, particularly cholera outbreaks",
        fr: "Épidémies récurrentes, en particulier les épidémies de choléra",
      },
      {
        en: "Scientific advances in understanding disease transmission",
        fr: "Avancées scientifiques dans la compréhension de la transmission des maladies",
      },
      {
        en: "Social reform movements addressing industrial conditions",
        fr: "Mouvements de réforme sociale abordant les conditions industrielles",
      },
      {
        en: "Statistical methods documenting patterns of illness and mortality",
        fr: "Méthodes statistiques documentant les schémas de maladie et de mortalité",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Delayed Sanitary Reforms",
          fr: "Réformes Sanitaires Retardées",
        },
        description: {
          en: "Without the public health movement, urban mortality might have remained extremely high, potentially slowing industrialization and urbanization by decades.",
          fr: "Sans le mouvement de santé publique, la mortalité urbaine aurait pu rester extrêmement élevée, ralentissant potentiellement l'industrialisation et l'urbanisation de plusieurs décennies.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Private Infrastructure",
          fr: "Infrastructure Privée",
        },
        description: {
          en: "If sanitation had developed through private rather than public investment, access to clean water and sewerage might have been limited by economic class, creating different patterns of urban development.",
          fr: "Si l'assainissement s'était développé par le biais d'investissements privés plutôt que publics, l'accès à l'eau potable et aux égouts aurait pu être limité par la classe économique, créant différents modèles de développement urbain.",
        },
        probability: 0.3,
      },
    ],
    connections: [6, 29, 30, 31, 32, 33, 37],
    coordinates: {
      x: 0.68,
      y: 0.39,
    },
    importance: 0.85,
  }
);

// Adding Contemporary History Events
historicalEvents.push(
  {
    id: 44,
    title: {
      en: "Fall of the Berlin Wall",
      fr: "Chute du Mur de Berlin",
    },
    date: "1989",
    era: "contemporary",
    description: {
      en: "The fall of the Berlin Wall, a pivotal event symbolizing the end of the Cold War, the collapse of communist regimes in Eastern Europe, and the reunification of Germany.",
      fr: "La chute du mur de Berlin, un événement charnière symbolisant la fin de la Guerre froide, l'effondrement des régimes communistes en Europe de l'Est et la réunification de l'Allemagne.",
    },
    consequences: [
      {
        en: "Reunification of Germany",
        fr: "Réunification de l'Allemagne",
      },
      {
        en: "Collapse of Soviet-backed regimes across Eastern Europe",
        fr: "Effondrement des régimes soutenus par les Soviétiques à travers l'Europe de l'Est",
      },
      {
        en: "End of the Cold War division of Europe",
        fr: "Fin de la division de l'Europe due à la Guerre froide",
      },
      {
        en: "Expansion of NATO and the European Union eastward",
        fr: "Expansion de l'OTAN et de l'Union européenne vers l'est",
      },
      {
        en: "Transition to market economies in former communist states",
        fr: "Transition vers les économies de marché dans les anciens États communistes",
      },
    ],
    causes: [
      {
        en: "Economic stagnation in Eastern Bloc countries",
        fr: "Stagnation économique dans les pays du bloc de l'Est",
      },
      {
        en: "Gorbachev's policies of glasnost and perestroika",
        fr: "Les politiques de glasnost et de perestroïka de Gorbatchev",
      },
      {
        en: "Growing civil unrest and pro-democracy movements",
        fr: "Mouvements de troubles civils croissants et pro-démocratie",
      },
      {
        en: "Declining Soviet willingness to intervene militarily",
        fr: "Diminution de la volonté soviétique d'intervenir militairement",
      },
      {
        en: "East German government's miscommunication about travel regulations",
        fr: "Mauvaise communication du gouvernement est-allemand concernant les réglementations de voyage",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Violent Suppression",
          fr: "Répression Violente",
        },
        description: {
          en: "If East German or Soviet leadership had chosen violent suppression of protests, the Cold War might have extended for years or decades longer.",
          fr: "Si la direction est-allemande ou soviétique avait choisi la répression violente des manifestations, la Guerre froide aurait pu se prolonger pendant des années ou des décennies.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Gradual Transition",
          fr: "Transition Graduelle",
        },
        description: {
          en: "A more controlled, gradual opening between East and West might have allowed for less economic disruption in former communist countries.",
          fr: "Une ouverture progressive et plus contrôlée entre l'Est et l'Ouest aurait pu permettre une perturbation économique moindre dans les anciens pays communistes.",
        },
        probability: 0.4,
      },
    ],
    connections: [11, 12, 39, 41, 42, 43],
    coordinates: {
      x: 0.87,
      y: 0.35,
    },
    importance: 0.9,
  },
  {
    id: 45,
    title: {
      en: "September 11 Terrorist Attacks",
      fr: "Attaques Terroristes du 11 Septembre",
    },
    date: "2001",
    era: "contemporary",
    description: {
      en: "Coordinated terrorist attacks by al-Qaeda against the United States, killing nearly 3,000 people and triggering the global War on Terror, fundamentally altering international security policies and relations.",
      fr: "Attaques terroristes coordonnées par al-Qaïda contre les États-Unis, tuant près de 3 000 personnes et déclenchant la Guerre mondiale contre le terrorisme, modifiant fondamentalement les politiques et les relations de sécurité internationales.",
    },
    consequences: [
      {
        en: "Launch of the Global War on Terror",
        fr: "Lancement de la Guerre mondiale contre le terrorisme",
      },
      {
        en: "Military interventions in Afghanistan and Iraq",
        fr: "Interventions militaires en Afghanistan et en Irak",
      },
      {
        en: "Enhanced security measures and surveillance worldwide",
        fr: "Mesures de sécurité et surveillance renforcées dans le monde entier",
      },
      {
        en: "Rise in Islamophobia and religious tensions",
        fr: "Montée de l'islamophobie et des tensions religieuses",
      },
      {
        en: "Fundamental shifts in international relations and security policies",
        fr: "Changements fondamentaux dans les relations internationales et les politiques de sécurité",
      },
    ],
    causes: [
      {
        en: "Al-Qaeda's extremist ideology and anti-Western stance",
        fr: "Idéologie extrémiste d'al-Qaïda et position anti-occidentale",
      },
      {
        en: "U.S. military presence in the Middle East",
        fr: "Présence militaire américaine au Moyen-Orient",
      },
      {
        en: "Complex geopolitical tensions in the Middle East",
        fr: "Tensions géopolitiques complexes au Moyen-Orient",
      },
      {
        en: "Intelligence failures and security vulnerabilities",
        fr: "Échecs du renseignement et vulnérabilités de sécurité",
      },
      {
        en: "Globalization enabling international terrorist networks",
        fr: "Mondialisation permettant les réseaux terroristes internationaux",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Prevented Attacks",
          fr: "Attaques Prévenues",
        },
        description: {
          en: "If the attacks had been prevented through better intelligence coordination, U.S. foreign policy might have taken a dramatically different course in the 21st century.",
          fr: "Si les attaques avaient été prévenues grâce à une meilleure coordination du renseignement, la politique étrangère américaine aurait pu prendre une direction radicalement différente au 21e siècle.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Different Response",
          fr: "Réponse Différente",
        },
        description: {
          en: "A more limited, law-enforcement focused response rather than military interventions might have resulted in less regional destabilization.",
          fr: "Une réponse plus limitée, axée sur l'application de la loi plutôt que sur les interventions militaires, aurait pu entraîner moins de déstabilisation régionale.",
        },
        probability: 0.4,
      },
    ],
    connections: [11, 12, 13, 41, 43, 44],
    coordinates: {
      x: 0.89,
      y: 0.45,
    },
    importance: 0.9,
  },
  {
    id: 46,
    title: {
      en: "Global Financial Crisis",
      fr: "Crise Financière Mondiale",
    },
    date: "2008",
    era: "contemporary",
    description: {
      en: "A severe worldwide economic crisis triggered by the U.S. subprime mortgage market collapse, leading to the failure of major financial institutions, government bailouts, and a global recession.",
      fr: "Une crise économique mondiale sévère déclenchée par l'effondrement du marché des prêts hypothécaires à risque aux États-Unis, entraînant la faillite d'institutions financières majeures, des plans de sauvetage gouvernementaux et une récession mondiale.",
    },
    consequences: [
      {
        en: "Worst global recession since the Great Depression",
        fr: "Pire récession mondiale depuis la Grande Dépression",
      },
      {
        en: "Massive government bailouts of financial institutions",
        fr: "Plans de sauvetage gouvernementaux massifs des institutions financières",
      },
      {
        en: "Increased financial regulation and oversight",
        fr: "Réglementation et surveillance financières accrues",
      },
      {
        en: "Rise in economic inequality and political populism",
        fr: "Montée des inégalités économiques et du populisme politique",
      },
      {
        en: "Eurozone debt crisis and austerity measures",
        fr: "Crise de la dette de la zone euro et mesures d'austérité",
      },
    ],
    causes: [
      {
        en: "Deregulation of financial markets",
        fr: "Déréglementation des marchés financiers",
      },
      {
        en: "Subprime mortgage lending practices",
        fr: "Pratiques de prêts hypothécaires à risque",
      },
      {
        en: "Complex financial derivatives and securitization",
        fr: "Dérivés financiers complexes et titrisation",
      },
      {
        en: "Credit rating agencies' failures",
        fr: "Échecs des agences de notation de crédit",
      },
      {
        en: "Excessive risk-taking by financial institutions",
        fr: "Prise de risque excessive par les institutions financières",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Maintained Regulations",
          fr: "Réglementations Maintenues",
        },
        description: {
          en: "If Glass-Steagall and other financial regulations had been maintained, the crisis might have been prevented or significantly mitigated.",
          fr: "Si la loi Glass-Steagall et d'autres réglementations financières avaient été maintenues, la crise aurait pu être évitée ou considérablement atténuée.",
        },
        probability: 0.5,
      },
      {
        title: {
          en: "No Bailouts",
          fr: "Pas de Plans de Sauvetage",
        },
        description: {
          en: "Without government intervention to save financial institutions, a complete collapse of the global financial system might have occurred.",
          fr: "Sans intervention gouvernementale pour sauver les institutions financières, un effondrement complet du système financier mondial aurait pu se produire.",
        },
        probability: 0.4,
      },
    ],
    connections: [12, 13, 40, 43, 44, 45],
    coordinates: {
      x: 0.91,
      y: 0.4,
    },
    importance: 0.85,
  },
  {
    id: 47,
    title: {
      en: "Rise of China as Global Power",
      fr: "Montée de la Chine en tant que Puissance Mondiale",
    },
    date: "2000-Present",
    era: "contemporary",
    description: {
      en: "China's emergence as a global economic, political, and military superpower, challenging U.S. hegemony and reshaping the international order through rapid economic growth and expanding global influence.",
      fr: "L'émergence de la Chine en tant que superpuissance économique, politique et militaire mondiale, défiant l'hégémonie américaine et remodelant l'ordre international par une croissance économique rapide et une influence mondiale croissante.",
    },
    consequences: [
      {
        en: "Shift in global economic center of gravity toward Asia",
        fr: "Déplacement du centre de gravité économique mondial vers l'Asie",
      },
      {
        en: "Creation of alternative international institutions (AIIB, BRI)",
        fr: "Création d'institutions internationales alternatives (AIIB, BRI)",
      },
      {
        en: "Manufacturing transformation and global supply chains",
        fr: "Transformation de la fabrication et des chaînes d'approvisionnement mondiales",
      },
      {
        en: "New geopolitical competition with the United States",
        fr: "Nouvelle compétition géopolitique avec les États-Unis",
      },
      {
        en: "Environmental impacts from rapid industrialization",
        fr: "Impacts environnementaux de l'industrialisation rapide",
      },
    ],
    causes: [
      {
        en: "Economic reforms under Deng Xiaoping",
        fr: "Réformes économiques sous Deng Xiaoping",
      },
      {
        en: "WTO membership and integration into global economy",
        fr: "Adhésion à l'OMC et intégration dans l'économie mondiale",
      },
      {
        en: "Massive infrastructure investments",
        fr: "Investissements massifs dans les infrastructures",
      },
      {
        en: "Strategic industrial and technological policies",
        fr: "Politiques industrielles et technologiques stratégiques",
      },
      {
        en: "Political stability under authoritarian governance",
        fr: "Stabilité politique sous une gouvernance autoritaire",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Democratic Transition",
          fr: "Transition Démocratique",
        },
        description: {
          en: "If China had undergone political liberalization alongside economic reforms, its rise might have created less international tension.",
          fr: "Si la Chine avait connu une libéralisation politique parallèlement aux réformes économiques, sa montée aurait pu créer moins de tensions internationales.",
        },
        probability: 0.2,
      },
      {
        title: {
          en: "Economic Stagnation",
          fr: "Stagnation Économique",
        },
        description: {
          en: "Without successful economic reforms or with major internal instability, China might have remained a regional rather than global power.",
          fr: "Sans réformes économiques réussies ou avec une instabilité interne majeure, la Chine aurait pu rester une puissance régionale plutôt que mondiale.",
        },
        probability: 0.3,
      },
    ],
    connections: [11, 12, 13, 41, 43, 46],
    coordinates: {
      x: 0.93,
      y: 0.35,
    },
    importance: 0.9,
  },
  {
    id: 48,
    title: {
      en: "COVID-19 Pandemic",
      fr: "Pandémie de COVID-19",
    },
    date: "2019-2023",
    era: "contemporary",
    description: {
      en: "A global pandemic caused by the SARS-CoV-2 virus, resulting in millions of deaths, unprecedented public health measures, economic disruption, and accelerated digital transformation across societies worldwide.",
      fr: "Une pandémie mondiale causée par le virus SARS-CoV-2, entraînant des millions de décès, des mesures de santé publique sans précédent, des perturbations économiques et une transformation numérique accélérée dans les sociétés du monde entier.",
    },
    consequences: [
      {
        en: "Millions of deaths and long-term health impacts",
        fr: "Millions de décès et impacts sanitaires à long terme",
      },
      {
        en: "Global economic recession and supply chain disruptions",
        fr: "Récession économique mondiale et perturbations des chaînes d'approvisionnement",
      },
      {
        en: "Acceleration of remote work and digital transformation",
        fr: "Accélération du travail à distance et de la transformation numérique",
      },
      {
        en: "Unprecedented vaccine development speed",
        fr: "Vitesse de développement de vaccins sans précédent",
      },
      {
        en: "Increased government debt and economic intervention",
        fr: "Augmentation de la dette publique et de l'intervention économique",
      },
    ],
    causes: [
      {
        en: "Zoonotic virus transmission to humans",
        fr: "Transmission zoonotique du virus aux humains",
      },
      {
        en: "Global travel enabling rapid spread",
        fr: "Voyages mondiaux permettant une propagation rapide",
      },
      {
        en: "Initial delays in response and containment",
        fr: "Retards initiaux dans la réponse et le confinement",
      },
      {
        en: "Inadequate pandemic preparedness",
        fr: "Préparation inadéquate à la pandémie",
      },
      {
        en: "Interconnected global economy",
        fr: "Économie mondiale interconnectée",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Earlier Containment",
          fr: "Confinement Plus Précoce",
        },
        description: {
          en: "With earlier, coordinated global action, the pandemic might have been contained regionally with far fewer deaths and economic impacts.",
          fr: "Avec une action mondiale coordonnée plus précoce, la pandémie aurait pu être contenue régionalement avec beaucoup moins de décès et d'impacts économiques.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Deadlier Variant",
          fr: "Variant Plus Mortel",
        },
        description: {
          en: "A more lethal variant could have caused significantly higher mortality and more profound societal disruption.",
          fr: "Un variant plus mortel aurait pu causer une mortalité significativement plus élevée et une perturbation sociétale plus profonde.",
        },
        probability: 0.3,
      },
    ],
    connections: [12, 13, 43, 46, 47],
    coordinates: {
      x: 0.95,
      y: 0.45,
    },
    importance: 0.9,
  },
  {
    id: 49,
    title: {
      en: "Arab Spring",
      fr: "Printemps Arabe",
    },
    date: "2010-2012",
    era: "contemporary",
    description: {
      en: "A series of anti-government protests, uprisings, and armed rebellions that spread across much of the Arab world, challenging long-standing authoritarian regimes and calling for democratic reforms, economic opportunities, and human rights.",
      fr: "Une série de manifestations anti-gouvernementales, de soulèvements et de rébellions armées qui se sont propagées dans une grande partie du monde arabe, défiant les régimes autoritaires de longue date et appelant à des réformes démocratiques, à des opportunités économiques et aux droits de l'homme.",
    },
    consequences: [
      {
        en: "Overthrow of authoritarian leaders in Tunisia, Egypt, Libya, and Yemen",
        fr: "Renversement de dirigeants autoritaires en Tunisie, en Égypte, en Libye et au Yémen",
      },
      {
        en: "Civil wars in Syria, Libya, and Yemen",
        fr: "Guerres civiles en Syrie, en Libye et au Yémen",
      },
      {
        en: "Rise of political Islam followed by counter-revolutionary forces",
        fr: "Montée de l'islam politique suivie de forces contre-révolutionnaires",
      },
      {
        en: "Refugee crises affecting Europe and neighboring countries",
        fr: "Crises de réfugiés affectant l'Europe et les pays voisins",
      },
      {
        en: "Reconfiguration of regional power dynamics in the Middle East",
        fr: "Reconfiguration des dynamiques de pouvoir régionales au Moyen-Orient",
      },
    ],
    causes: [
      {
        en: "Long-standing authoritarian governance",
        fr: "Gouvernance autoritaire de longue date",
      },
      {
        en: "High youth unemployment and economic stagnation",
        fr: "Chômage élevé des jeunes et stagnation économique",
      },
      {
        en: "Food price increases and economic inequality",
        fr: "Augmentation des prix alimentaires et inégalités économiques",
      },
      {
        en: "Social media enabling organization and information sharing",
        fr: "Médias sociaux permettant l'organisation et le partage d'informations",
      },
      {
        en: "Inspiration from successful protests in neighboring countries",
        fr: "Inspiration des manifestations réussies dans les pays voisins",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Successful Democratic Transitions",
          fr: "Transitions Démocratiques Réussies",
        },
        description: {
          en: "If more countries had successfully transitioned to stable democracies like Tunisia, the Middle East might have experienced a genuine democratic wave.",
          fr: "Si davantage de pays avaient réussi à passer à des démocraties stables comme la Tunisie, le Moyen-Orient aurait pu connaître une véritable vague démocratique.",
        },
        probability: 0.2,
      },
      {
        title: {
          en: "Earlier Reform",
          fr: "Réforme Plus Précoce",
        },
        description: {
          en: "If authoritarian regimes had implemented meaningful reforms before the uprisings, revolutionary movements might have been prevented or channeled into peaceful transitions.",
          fr: "Si les régimes autoritaires avaient mis en œuvre des réformes significatives avant les soulèvements, les mouvements révolutionnaires auraient pu être évités ou canalisés vers des transitions pacifiques.",
        },
        probability: 0.3,
      },
    ],
    connections: [12, 13, 43, 45, 46, 47, 48],
    coordinates: {
      x: 0.92,
      y: 0.48,
    },
    importance: 0.85,
  },
  {
    id: 50,
    title: {
      en: "Rise of Social Media",
      fr: "Essor des Médias Sociaux",
    },
    date: "2004-Present",
    era: "contemporary",
    description: {
      en: "The emergence and global adoption of social media platforms that fundamentally transformed how people communicate, share information, form communities, and engage politically, creating both unprecedented connectivity and new social challenges.",
      fr: "L'émergence et l'adoption mondiale des plateformes de médias sociaux qui ont fondamentalement transformé la façon dont les gens communiquent, partagent des informations, forment des communautés et s'engagent politiquement, créant à la fois une connectivité sans précédent et de nouveaux défis sociaux.",
    },
    consequences: [
      {
        en: "Democratization of content creation and information sharing",
        fr: "Démocratisation de la création de contenu et du partage d'informations",
      },
      {
        en: "New forms of political mobilization and activism",
        fr: "Nouvelles formes de mobilisation politique et d'activisme",
      },
      {
        en: "Filter bubbles and echo chambers reinforcing polarization",
        fr: "Bulles de filtres et chambres d'écho renforçant la polarisation",
      },
      {
        en: "Privacy concerns and surveillance capitalism",
        fr: "Préoccupations relatives à la vie privée et capitalisme de surveillance",
      },
      {
        en: "Transformation of journalism, marketing, and public discourse",
        fr: "Transformation du journalisme, du marketing et du discours public",
      },
    ],
    causes: [
      {
        en: "Technological advances in web development and mobile computing",
        fr: "Avancées technologiques dans le développement web et l'informatique mobile",
      },
      {
        en: "Widespread internet adoption and smartphone proliferation",
        fr: "Adoption généralisée d'Internet et prolifération des smartphones",
      },
      {
        en: "Human desire for connection and self-expression",
        fr: "Désir humain de connexion et d'expression de soi",
      },
      {
        en: "Venture capital investment in platform business models",
        fr: "Investissement en capital-risque dans les modèles commerciaux de plateformes",
      },
      {
        en: "Network effects driving rapid user growth",
        fr: "Effets de réseau entraînant une croissance rapide des utilisateurs",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Decentralized Social Web",
          fr: "Web Social Décentralisé",
        },
        description: {
          en: "If open protocols rather than proprietary platforms had dominated social media development, a more decentralized and user-controlled social web might have emerged.",
          fr: "Si des protocoles ouverts plutôt que des plateformes propriétaires avaient dominé le développement des médias sociaux, un web social plus décentralisé et contrôlé par l'utilisateur aurait pu émerger.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Early Regulation",
          fr: "Réglementation Précoce",
        },
        description: {
          en: "With earlier and more comprehensive regulation, social media might have developed with stronger privacy protections and less harmful content amplification.",
          fr: "Avec une réglementation plus précoce et plus complète, les médias sociaux auraient pu se développer avec des protections de la vie privée plus fortes et une amplification de contenu moins nuisible.",
        },
        probability: 0.4,
      },
    ],
    connections: [12, 13, 45, 46, 47, 48, 49],
    coordinates: {
      x: 0.94,
      y: 0.52,
    },
    importance: 0.9,
  },
  {
    id: 51,
    title: {
      en: "European Union Expansion",
      fr: "Expansion de l'Union Européenne",
    },
    date: "1993-Present",
    era: "contemporary",
    description: {
      en: "The transformation of the European Economic Community into the European Union and its subsequent expansion from 12 to 27 member states, creating the world's largest single market and a unique supranational political entity.",
      fr: "La transformation de la Communauté économique européenne en Union européenne et son expansion ultérieure de 12 à 27 États membres, créant le plus grand marché unique du monde et une entité politique supranationale unique.",
    },
    consequences: [
      {
        en: "Creation of a unified European market with free movement",
        fr: "Création d'un marché européen unifié avec libre circulation",
      },
      {
        en: "Introduction of the Euro as a common currency",
        fr: "Introduction de l'Euro comme monnaie commune",
      },
      {
        en: "Standardization of regulations across member states",
        fr: "Normalisation des réglementations dans les États membres",
      },
      {
        en: "Peace and stability in formerly conflict-prone regions",
        fr: "Paix et stabilité dans les régions autrefois sujettes aux conflits",
      },
      {
        en: "Growing tensions between national sovereignty and European integration",
        fr: "Tensions croissantes entre la souveraineté nationale et l'intégration européenne",
      },
    ],
    causes: [
      {
        en: "Desire to prevent future European conflicts after World War II",
        fr: "Désir de prévenir de futurs conflits européens après la Seconde Guerre mondiale",
      },
      {
        en: "Economic benefits of market integration",
        fr: "Avantages économiques de l'intégration du marché",
      },
      {
        en: "Fall of communism opening Eastern Europe to membership",
        fr: "Chute du communisme ouvrant l'Europe de l'Est à l'adhésion",
      },
      {
        en: "Democratic transitions in former authoritarian states",
        fr: "Transitions démocratiques dans les anciens États autoritaires",
      },
      {
        en: "Geopolitical advantages of a unified European voice",
        fr: "Avantages géopolitiques d'une voix européenne unifiée",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Slower Expansion",
          fr: "Expansion Plus Lente",
        },
        description: {
          en: "A more gradual expansion with stricter convergence criteria might have created a more cohesive union with fewer internal tensions.",
          fr: "Une expansion plus progressive avec des critères de convergence plus stricts aurait pu créer une union plus cohérente avec moins de tensions internes.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "Federal Europe",
          fr: "Europe Fédérale",
        },
        description: {
          en: "With stronger political integration alongside economic union, the EU might have developed into a more cohesive federal structure similar to the United States.",
          fr: "Avec une intégration politique plus forte parallèlement à l'union économique, l'UE aurait pu se développer en une structure fédérale plus cohérente similaire aux États-Unis.",
        },
        probability: 0.2,
      },
    ],
    connections: [11, 12, 43, 44, 46, 47],
    coordinates: {
      x: 0.88,
      y: 0.38,
    },
    importance: 0.85,
  },
  {
    id: 52,
    title: {
      en: "Human Genome Project Completion",
      fr: "Achèvement du Projet Génome Humain",
    },
    date: "2003",
    era: "contemporary",
    description: {
      en: "The international scientific research project that successfully mapped all the genes of the human genome, providing a complete genetic blueprint for building a human being and revolutionizing our understanding of human biology and disease.",
      fr: "Le projet de recherche scientifique international qui a réussi à cartographier tous les gènes du génome humain, fournissant un plan génétique complet pour la construction d'un être humain et révolutionnant notre compréhension de la biologie humaine et des maladies.",
    },
    consequences: [
      {
        en: "Revolution in understanding genetic contributions to disease",
        fr: "Révolution dans la compréhension des contributions génétiques aux maladies",
      },
      {
        en: "Development of personalized medicine approaches",
        fr: "Développement d'approches de médecine personnalisée",
      },
      {
        en: "Advances in genetic testing and screening",
        fr: "Avancées dans les tests et le dépistage génétiques",
      },
      {
        en: "New ethical questions about genetic privacy and modification",
        fr: "Nouvelles questions éthiques sur la confidentialité et la modification génétiques",
      },
      {
        en: "Acceleration of biotechnology and pharmaceutical research",
        fr: "Accélération de la recherche biotechnologique et pharmaceutique",
      },
    ],
    causes: [
      {
        en: "Advances in DNA sequencing technology",
        fr: "Avancées dans la technologie de séquençage de l'ADN",
      },
      {
        en: "International scientific collaboration",
        fr: "Collaboration scientifique internationale",
      },
      {
        en: "Public and private research funding",
        fr: "Financement de la recherche publique et privée",
      },
      {
        en: "Competition between public project and private efforts",
        fr: "Compétition entre le projet public et les efforts privés",
      },
      {
        en: "Computing advances enabling data analysis",
        fr: "Avancées informatiques permettant l'analyse des données",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Privatized Genome",
          fr: "Génome Privatisé",
        },
        description: {
          en: "If private companies had patented large portions of the genome, medical research might have been significantly hampered by intellectual property restrictions.",
          fr: "Si des entreprises privées avaient breveté de grandes portions du génome, la recherche médicale aurait pu être considérablement entravée par les restrictions de propriété intellectuelle.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Earlier Completion",
          fr: "Achèvement Plus Précoce",
        },
        description: {
          en: "With earlier development of next-generation sequencing, the project might have been completed sooner, accelerating medical advances by years.",
          fr: "Avec le développement plus précoce du séquençage de nouvelle génération, le projet aurait pu être achevé plus tôt, accélérant les progrès médicaux de plusieurs années.",
        },
        probability: 0.4,
      },
    ],
    connections: [12, 13, 43, 48],
    coordinates: {
      x: 0.89,
      y: 0.55,
    },
    importance: 0.8,
  },
  {
    id: 53,
    title: {
      en: "Artificial Intelligence Breakthrough",
      fr: "Percée de l'Intelligence Artificielle",
    },
    date: "2012-Present",
    era: "contemporary",
    description: {
      en: "The rapid advancement of artificial intelligence through deep learning and neural networks, enabling machines to perform tasks that traditionally required human intelligence, from image recognition to natural language processing and beyond.",
      fr: "L'avancement rapide de l'intelligence artificielle grâce à l'apprentissage profond et aux réseaux neuronaux, permettant aux machines d'effectuer des tâches qui nécessitaient traditionnellement l'intelligence humaine, de la reconnaissance d'images au traitement du langage naturel et au-delà.",
    },
    consequences: [
      {
        en: "Automation of cognitive tasks previously requiring human judgment",
        fr: "Automatisation des tâches cognitives nécessitant auparavant un jugement humain",
      },
      {
        en: "New capabilities in data analysis, prediction, and pattern recognition",
        fr: "Nouvelles capacités d'analyse de données, de prédiction et de reconnaissance de formes",
      },
      {
        en: "Economic disruption across industries and job categories",
        fr: "Perturbation économique dans les industries et les catégories d'emplois",
      },
      {
        en: "Ethical concerns about bias, privacy, and autonomous systems",
        fr: "Préoccupations éthiques concernant les biais, la vie privée et les systèmes autonomes",
      },
      {
        en: "Arms race between nations for AI supremacy",
        fr: "Course aux armements entre les nations pour la suprématie de l'IA",
      },
    ],
    causes: [
      {
        en: "Breakthroughs in neural network architectures",
        fr: "Percées dans les architectures de réseaux neuronaux",
      },
      {
        en: "Exponential growth in computing power",
        fr: "Croissance exponentielle de la puissance de calcul",
      },
      {
        en: "Availability of massive training datasets",
        fr: "Disponibilité d'ensembles de données d'entraînement massifs",
      },
      {
        en: "Substantial private and government investment",
        fr: "Investissements privés et gouvernementaux substantiels",
      },
      {
        en: "Open source collaboration in AI research",
        fr: "Collaboration open source dans la recherche sur l'IA",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "AI Winter",
          fr: "Hiver de l'IA",
        },
        description: {
          en: "Without key breakthroughs in deep learning, AI development might have stalled again as it did in previous decades, delaying transformative applications.",
          fr: "Sans percées clés dans l'apprentissage profond, le développement de l'IA aurait pu stagner à nouveau comme il l'a fait dans les décennies précédentes, retardant les applications transformatrices.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Regulated Development",
          fr: "Développement Réglementé",
        },
        description: {
          en: "With stronger international governance frameworks, AI might have developed more slowly but with better safeguards against harmful applications.",
          fr: "Avec des cadres de gouvernance internationale plus solides, l'IA aurait pu se développer plus lentement mais avec de meilleures garanties contre les applications nuisibles.",
        },
        probability: 0.4,
      },
    ],
    connections: [12, 13, 47, 48, 50],
    coordinates: {
      x: 0.96,
      y: 0.5,
    },
    importance: 0.9,
  },
  {
    id: 54,
    title: {
      en: "Brexit",
      fr: "Brexit",
    },
    date: "2016-2020",
    era: "contemporary",
    description: {
      en: "The United Kingdom's withdrawal from the European Union following a referendum, ending 47 years of British membership and marking the first time a member state had left the European project.",
      fr: "Le retrait du Royaume-Uni de l'Union européenne à la suite d'un référendum, mettant fin à 47 ans d'adhésion britannique et marquant la première fois qu'un État membre a quitté le projet européen.",
    },
    consequences: [
      {
        en: "Reconfiguration of UK-EU trade and political relationships",
        fr: "Reconfiguration des relations commerciales et politiques entre le Royaume-Uni et l'UE",
      },
      {
        en: "Challenges to the Northern Ireland peace process",
        fr: "Défis au processus de paix en Irlande du Nord",
      },
      {
        en: "Renewed Scottish independence movement",
        fr: "Renouveau du mouvement d'indépendance écossais",
      },
      {
        en: "Precedent for leaving the European Union",
        fr: "Précédent pour quitter l'Union européenne",
      },
      {
        en: "Shift in European power dynamics",
        fr: "Changement dans la dynamique du pouvoir européen",
      },
    ],
    causes: [
      {
        en: "Euroscepticism in British politics and media",
        fr: "Euroscepticisme dans la politique et les médias britanniques",
      },
      {
        en: "Concerns about immigration and sovereignty",
        fr: "Préoccupations concernant l'immigration et la souveraineté",
      },
      {
        en: "Economic impacts of 2008 financial crisis and austerity",
        fr: "Impacts économiques de la crise financière de 2008 et de l'austérité",
      },
      {
        en: "Populist political movements",
        fr: "Mouvements politiques populistes",
      },
      {
        en: "Miscalculations by political leadership",
        fr: "Erreurs de calcul de la direction politique",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Remain Victory",
          fr: "Victoire du Maintien",
        },
        description: {
          en: "If the referendum had resulted in a Remain victory, the EU might have continued integration without the significant disruption of a major member's departure.",
          fr: "Si le référendum avait abouti à une victoire du maintien, l'UE aurait pu poursuivre l'intégration sans la perturbation significative du départ d'un membre majeur.",
        },
        probability: 0.5,
      },
      {
        title: {
          en: "Soft Brexit",
          fr: "Brexit Doux",
        },
        description: {
          en: "A Brexit that maintained closer alignment with EU regulations and customs union might have caused less economic disruption while still addressing sovereignty concerns.",
          fr: "Un Brexit qui aurait maintenu un alignement plus étroit avec les réglementations et l'union douanière de l'UE aurait pu causer moins de perturbations économiques tout en répondant aux préoccupations de souveraineté.",
        },
        probability: 0.4,
      },
    ],
    connections: [12, 43, 46, 47, 51],
    coordinates: {
      x: 0.93,
      y: 0.42,
    },
    importance: 0.8,
  },
  {
    id: 55,
    title: {
      en: "Smartphone Revolution",
      fr: "Révolution des Smartphones",
    },
    date: "2007-Present",
    era: "contemporary",
    description: {
      en: "The introduction and mass adoption of smartphones, beginning with the iPhone in 2007, that placed powerful computing devices in billions of pockets worldwide, fundamentally changing how people communicate, work, shop, and engage with the world.",
      fr: "L'introduction et l'adoption massive des smartphones, commençant avec l'iPhone en 2007, qui ont placé de puissants appareils informatiques dans des milliards de poches à travers le monde, changeant fondamentalement la façon dont les gens communiquent, travaillent, font leurs achats et interagissent avec le monde.",
    },
    consequences: [
      {
        en: "Ubiquitous internet access and digital services",
        fr: "Accès internet et services numériques omniprésents",
      },
      {
        en: "App economy creating new business models",
        fr: "L'économie des applications créant de nouveaux modèles commerciaux",
      },
      {
        en: "Transformation of photography, navigation, and personal organization",
        fr: "Transformation de la photographie, de la navigation et de l'organisation personnelle",
      },
      {
        en: "Attention economy and screen time concerns",
        fr: "Économie de l'attention et préoccupations relatives au temps d'écran",
      },
      {
        en: "Digital divide between those with and without access",
        fr: "Fracture numérique entre ceux qui ont accès et ceux qui n'en ont pas",
      },
    ],
    causes: [
      {
        en: "Miniaturization of computing components",
        fr: "Miniaturisation des composants informatiques",
      },
      {
        en: "Advances in touchscreen technology",
        fr: "Avancées dans la technologie des écrans tactiles",
      },
      {
        en: "Mobile broadband infrastructure development",
        fr: "Développement de l'infrastructure du haut débit mobile",
      },
      {
        en: "Consumer demand for mobile internet access",
        fr: "Demande des consommateurs pour l'accès à internet mobile",
      },
      {
        en: "Apple's innovative design and business model",
        fr: "Conception innovante et modèle commercial d'Apple",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Slower Adoption",
          fr: "Adoption Plus Lente",
        },
        description: {
          en: "Without the iPhone's breakthrough design, smartphone adoption might have proceeded more gradually, giving societies more time to adapt to their impacts.",
          fr: "Sans la conception révolutionnaire de l'iPhone, l'adoption des smartphones aurait pu se dérouler plus progressivement, donnant aux sociétés plus de temps pour s'adapter à leurs impacts.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Open Ecosystem Dominance",
          fr: "Domination de l'Écosystème Ouvert",
        },
        description: {
          en: "If open source mobile operating systems had dominated instead of the Apple-Google duopoly, a more diverse and possibly more privacy-focused mobile ecosystem might have emerged.",
          fr: "Si les systèmes d'exploitation mobiles open source avaient dominé au lieu du duopole Apple-Google, un écosystème mobile plus diversifié et éventuellement plus axé sur la confidentialité aurait pu émerger.",
        },
        probability: 0.3,
      },
    ],
    connections: [12, 13, 47, 48, 50, 53],
    coordinates: {
      x: 0.92,
      y: 0.53,
    },
    importance: 0.9,
  },
  {
    id: 56,
    title: {
      en: "Russian Invasion of Ukraine",
      fr: "Invasion Russe de l'Ukraine",
    },
    date: "2022-Present",
    era: "contemporary",
    description: {
      en: "Russia's full-scale invasion of Ukraine, the largest conventional military attack in Europe since World War II, triggering a major humanitarian crisis, global economic disruptions, and a fundamental reshaping of European security architecture.",
      fr: "L'invasion à grande échelle de l'Ukraine par la Russie, la plus grande attaque militaire conventionnelle en Europe depuis la Seconde Guerre mondiale, déclenchant une crise humanitaire majeure, des perturbations économiques mondiales et une refonte fondamentale de l'architecture de sécurité européenne.",
    },
    consequences: [
      {
        en: "Thousands of civilian and military casualties",
        fr: "Milliers de victimes civiles et militaires",
      },
      {
        en: "Millions of Ukrainian refugees across Europe",
        fr: "Millions de réfugiés ukrainiens à travers l'Europe",
      },
      {
        en: "Sanctions against Russia and global economic impacts",
        fr: "Sanctions contre la Russie et impacts économiques mondiaux",
      },
      {
        en: "NATO expansion and European military spending increases",
        fr: "Expansion de l'OTAN et augmentation des dépenses militaires européennes",
      },
      {
        en: "Energy security concerns and accelerated green transition in Europe",
        fr: "Préoccupations concernant la sécurité énergétique et accélération de la transition verte en Europe",
      },
    ],
    causes: [
      {
        en: "Russian opposition to NATO expansion eastward",
        fr: "Opposition russe à l'expansion de l'OTAN vers l'est",
      },
      {
        en: "Putin's historical view of Ukraine as part of Russia",
        fr: "Vision historique de Poutine de l'Ukraine comme faisant partie de la Russie",
      },
      {
        en: "Ukrainian moves toward European integration",
        fr: "Mouvements ukrainiens vers l'intégration européenne",
      },
      {
        en: "Russian annexation of Crimea and proxy war in Donbas since 2014",
        fr: "Annexion russe de la Crimée et guerre par procuration dans le Donbass depuis 2014",
      },
      {
        en: "Authoritarian consolidation in Russia",
        fr: "Consolidation autoritaire en Russie",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Limited Operation",
          fr: "Opération Limitée",
        },
        description: {
          en: "If Russia had limited its military action to the Donbas region, international response might have been more muted and the conflict more contained.",
          fr: "Si la Russie avait limité son action militaire à la région du Donbass, la réponse internationale aurait pu être plus discrète et le conflit plus contenu.",
        },
        probability: 0.3,
      },
      {
        title: {
          en: "Diplomatic Resolution",
          fr: "Résolution Diplomatique",
        },
        description: {
          en: "With different security arrangements or neutrality guarantees for Ukraine, the invasion might have been avoided entirely.",
          fr: "Avec des arrangements de sécurité différents ou des garanties de neutralité pour l'Ukraine, l'invasion aurait pu être évitée entièrement.",
        },
        probability: 0.4,
      },
    ],
    connections: [11, 12, 43, 44, 47, 51, 54],
    coordinates: {
      x: 0.97,
      y: 0.43,
    },
    importance: 0.85,
  },
  {
    id: 57,
    title: {
      en: "Climate Change Acceleration",
      fr: "Accélération du Changement Climatique",
    },
    date: "2010-Present",
    era: "contemporary",
    description: {
      en: "The observable acceleration of climate change impacts worldwide, including more frequent extreme weather events, rising sea levels, biodiversity loss, and temperature records, moving the issue from theoretical prediction to lived reality.",
      fr: "L'accélération observable des impacts du changement climatique dans le monde entier, y compris des événements météorologiques extrêmes plus fréquents, l'élévation du niveau de la mer, la perte de biodiversité et les records de température, faisant passer la question de la prédiction théorique à la réalité vécue.",
    },
    consequences: [
      {
        en: "Increased frequency and intensity of natural disasters",
        fr: "Augmentation de la fréquence et de l'intensité des catastrophes naturelles",
      },
      {
        en: "Agricultural disruption and food security challenges",
        fr: "Perturbation agricole et défis de sécurité alimentaire",
      },
      {
        en: "Climate migration and geopolitical tensions",
        fr: "Migration climatique et tensions géopolitiques",
      },
      {
        en: "Rapid growth in renewable energy investment",
        fr: "Croissance rapide des investissements dans les énergies renouvelables",
      },
      {
        en: "Climate activism becoming a major political force",
        fr: "L'activisme climatique devenant une force politique majeure",
      },
    ],
    causes: [
      {
        en: "Continued fossil fuel dependence despite warnings",
        fr: "Dépendance continue aux combustibles fossiles malgré les avertissements",
      },
      {
        en: "Industrialization of developing economies",
        fr: "Industrialisation des économies en développement",
      },
      {
        en: "Deforestation and land use changes",
        fr: "Déforestation et changements d'utilisation des terres",
      },
      {
        en: "Insufficient international climate action",
        fr: "Action climatique internationale insuffisante",
      },
      {
        en: "Feedback loops accelerating warming beyond predictions",
        fr: "Boucles de rétroaction accélérant le réchauffement au-delà des prévisions",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Earlier Action",
          fr: "Action Plus Précoce",
        },
        description: {
          en: "If major emissions reductions had begun in the 1990s when scientific consensus emerged, many severe impacts might have been avoided.",
          fr: "Si des réductions d'émissions majeures avaient commencé dans les années 1990 lorsque le consensus scientifique a émergé, de nombreux impacts graves auraient pu être évités.",
        },
        probability: 0.5,
      },
      {
        title: {
          en: "Technological Breakthrough",
          fr: "Percée Technologique",
        },
        description: {
          en: "A major breakthrough in clean energy, carbon capture, or geoengineering might still mitigate the worst climate impacts despite delayed action.",
          fr: "Une percée majeure dans les énergies propres, la capture du carbone ou la géo-ingénierie pourrait encore atténuer les pires impacts climatiques malgré l'action retardée.",
        },
        probability: 0.3,
      },
    ],
    connections: [12, 13, 43, 46, 47, 48, 53],
    coordinates: {
      x: 0.98,
      y: 0.47,
    },
    importance: 0.95,
  },
  {
    id: 58,
    title: {
      en: "Space Exploration Renaissance",
      fr: "Renaissance de l'Exploration Spatiale",
    },
    date: "2010-Present",
    era: "contemporary",
    description: {
      en: "The revival of ambitious space exploration through private companies like SpaceX, Blue Origin, and Virgin Galactic alongside national space agencies, bringing reduced launch costs, reusable rockets, and renewed missions to the Moon, Mars, and beyond.",
      fr: "La renaissance de l'exploration spatiale ambitieuse grâce à des entreprises privées comme SpaceX, Blue Origin et Virgin Galactic aux côtés des agences spatiales nationales, apportant des coûts de lancement réduits, des fusées réutilisables et des missions renouvelées vers la Lune, Mars et au-delà.",
    },
    consequences: [
      {
        en: "Dramatic reduction in space launch costs",
        fr: "Réduction spectaculaire des coûts de lancement spatial",
      },
      {
        en: "Proliferation of satellite networks for global internet",
        fr: "Prolifération des réseaux satellitaires pour l'internet mondial",
      },
      {
        en: "Plans for lunar bases and Mars missions",
        fr: "Plans pour des bases lunaires et des missions martiennes",
      },
      {
        en: "Space tourism emergence",
        fr: "Émergence du tourisme spatial",
      },
      {
        en: "New questions about space governance and resource rights",
        fr: "Nouvelles questions sur la gouvernance spatiale et les droits sur les ressources",
      },
    ],
    causes: [
      {
        en: "Private sector innovation and competition",
        fr: "Innovation et concurrence du secteur privé",
      },
      {
        en: "Advances in materials science and computing",
        fr: "Avancées dans la science des matériaux et l'informatique",
      },
      {
        en: "Billionaire entrepreneurs with space ambitions",
        fr: "Entrepreneurs milliardaires avec des ambitions spatiales",
      },
      {
        en: "National prestige and strategic considerations",
        fr: "Prestige national et considérations stratégiques",
      },
      {
        en: "Commercial applications of space technology",
        fr: "Applications commerciales de la technologie spatiale",
      },
    ],
    alternativeScenarios: [
      {
        title: {
          en: "Continued Stagnation",
          fr: "Stagnation Continue",
        },
        description: {
          en: "Without private sector disruption, space exploration might have remained limited to government programs with high costs and limited ambition.",
          fr: "Sans la perturbation du secteur privé, l'exploration spatiale aurait pu rester limitée aux programmes gouvernementaux avec des coûts élevés et des ambitions limitées.",
        },
        probability: 0.4,
      },
      {
        title: {
          en: "International Collaboration",
          fr: "Collaboration Internationale",
        },
        description: {
          en: "A more collaborative international approach to space exploration might have produced fewer redundant systems but potentially slower innovation.",
          fr: "Une approche internationale plus collaborative de l'exploration spatiale aurait pu produire moins de systèmes redondants mais potentiellement une innovation plus lente.",
        },
        probability: 0.3,
      },
    ],
    connections: [12, 13, 43, 47, 53, 55],
    coordinates: {
      x: 0.96,
      y: 0.56,
    },
    importance: 0.8,
  }
);
