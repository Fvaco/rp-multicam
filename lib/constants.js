const JOBS = {
  DOCTOR: 'doctor',
  FARMER: 'farmer',
  POLICE: 'police',
  BIKER: 'biker',
  WAITER: 'waiter',
  BODYGUARD: 'bodyguard',
  ENTREPRENEUR: 'entrepreneur',
  DEALER: 'dealer',
  PRIEST: 'priest',
  UNEMPLOYED: 'unemployed'
};

const JOB_KEYWORDS = {
  [JOBS.DOCTOR]: [
    'médico',
    'médica',
    'doctor',
    'hospital',
    'doctor',
    'doctora'
  ],
  [JOBS.FARMER]: ['farmer', 'granjero', 'granjera', 'granja', 'farm'],
  [JOBS.POLICE]: ['policía', 'police', 'policeman', 'sheriff', 'lspd', 'poli'],
  [JOBS.BIKER]: ['moto', 'motero', 'biker', 'motera', 'motorista', 'banda'],
  [JOBS.WAITER]: ['camarero', 'camarera', 'waiter', 'restaurante'],
  [JOBS.BODYGUARD]: [
    'guardaespaldas',
    'seguridad',
    'segurita',
    'matón',
    'thug'
  ],
  [JOBS.ENTREPRENEUR]: ['empresario', 'empresaria', 'eventos'],
  [JOBS.DEALER]: ['traficante', 'droga', 'dealer', 'banda'],
  [JOBS.PRIEST]: [
    'cura',
    'sacerdote',
    'sacerdotisa',
    'pastor',
    'iglesia',
    'ciervo',
    'religión',
    'religioso',
    'religiosa'
  ],
  [JOBS.UNEMPLOYED]: ['desempleado', 'desempleada', 'parado', 'empleo']
};

export const FORASTEROS_RP_CHARACTERS = [
  {
    name: 'Jackie Chan',
    channel: 'coolifegame',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'chino', 'chan']
  },
  {
    name: 'Unai Ondulado',
    channel: 'ibai',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'unai', 'pipita', 'pelopocho']
  },
  {
    name: 'Anthony',
    channel: 'reventz',
    job: JOBS.UNEMPLOYED,
    keywords: [
      ...JOB_KEYWORDS[JOBS.UNEMPLOYED],
      'pelo',
      'fluta',
      'fruta',
      'ibai',
      'unai'
    ]
  },
  {
    name: 'Nathalie',
    channel: 'daeneryss98',
    job: JOBS.DEALER,
    keywords: [...JOB_KEYWORDS[JOBS.DEALER], 'colombiana', 'verdes', 'banda']
  },
  {
    name: 'Xin Zhao',
    channel: 'agentemaxo',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'chino', 'amigo']
  },
  {
    name: 'Selene',
    channel: 'selis13',
    job: JOBS.WAITER,
    keywords: [...JOB_KEYWORDS[JOBS.WAITER], 'chino']
  },
  {
    name: 'Ariadna Luna',
    channel: 'ladyahriadna',
    job: JOBS.WAITER,
    keywords: [...JOB_KEYWORDS[JOBS.WAITER], 'ari', 'ariadna', 'ibai']
  },
  {
    name: 'Nick Furia',
    channel: 'fenozr',
    job: JOBS.DEALER,
    keywords: [...JOB_KEYWORDS[JOBS.DEALER], 'banda', 'verdes']
  },
  {
    name: 'Sidney',
    channel: 'albii_prz',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'niña', 'niño', 'morado']
  },
  {
    name: 'Khalifa',
    channel: 'badplayerbutsexy',
    job: JOBS.BODYGUARD,
    keywords: [
      ...JOB_KEYWORDS[JOBS.BODYGUARD],
      'destru',
      'seguridad',
      'afesa',
      'kalifa'
    ]
  },
  {
    name: 'Ángel Destru',
    channel: 'bronzafamily',
    job: JOBS.ENTREPRENEUR,
    keywords: [
      ...JOB_KEYWORDS[JOBS.ENTREPRENEUR],
      'destru',
      'seguridad',
      'chino',
      'afesa'
    ]
  },
  {
    name: 'Jay Jefferson',
    channel: 'rubius',
    job: JOBS.UNEMPLOYED,
    keywords: [
      ...JOB_KEYWORDS[JOBS.UNEMPLOYED],
      'rubius',
      'rap',
      'rapero',
      'verde'
    ]
  },
  {
    name: 'Susi Callahan',
    channel: 'keyshae_esp',
    job: JOBS.FARMER,
    keywords: [...JOB_KEYWORDS[JOBS.FARMER], 'susi', 'calamelo']
  },
  {
    name: 'Juan Extremo',
    channel: 'mrqus',
    job: JOBS.PRIEST,
    keywords: [...JOB_KEYWORDS[JOBS.PRIEST], 'ciervista']
  },
  {
    name: 'Nicomedes Whitaker',
    channel: 'presidentefox',
    job: JOBS.FARMER,
    keywords: [...JOB_KEYWORDS[JOBS.FARMER], 'stan', 'lee']
  },
  {
    name: 'Isabella',
    channel: 'beikka',
    job: JOBS.WAITER,
    keywords: [...JOB_KEYWORDS[JOBS.WAITER], 'isabella', 'dami', 'isa']
  },
  {
    name: 'Tig Tiford',
    channel: 'goes_x',
    job: JOBS.BIKER,
    keywords: [...JOB_KEYWORDS[JOBS.BIKER], 'chino']
  },
  {
    name: '8LU4',
    channel: 'blue_galaxy6',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE], 'androide', 'robot']
  },
  {
    name: 'Espinosa',
    channel: 'jordiespinosa',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE], 'espinosa']
  },
  {
    name: 'Dami',
    channel: 'lakshartnia',
    job: JOBS.WAITER,
    keywords: [
      ...JOB_KEYWORDS[JOBS.WAITER],
      'lami',
      'dami',
      'roberto',
      'lobelto'
    ]
  },
  {
    name: 'Roberto',
    channel: 'folagorlives',
    job: JOBS.UNEMPLOYED,
    keywords: [
      ...JOB_KEYWORDS[JOBS.UNEMPLOYED],
      'lami',
      'dami',
      'roberto',
      'lobelto'
    ]
  },
  {
    name: 'Zoe',
    channel: 'sukuua',
    job: JOBS.DOCTOR,
    keywords: [...JOB_KEYWORDS[JOBS.DOCTOR]]
  },
  {
    name: 'Romualdo Guevara',
    channel: 'farrocha',
    job: JOBS.DOCTOR,
    keywords: [...JOB_KEYWORDS[JOBS.DOCTOR]]
  },
  {
    name: 'África Wamai',
    channel: 'rebeccamt',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE]]
  },
  {
    name: 'Keel',
    channel: 'golfyy',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED]]
  },
  {
    name: 'Gamali Benrhadi',
    channel: 'davilintv',
    job: JOBS.UNEMPLOYED,
    keywords: [
      ...JOB_KEYWORDS[JOBS.UNEMPLOYED],
      'atraco',
      'atracador',
      'atracadora'
    ]
  },
  {
    name: 'Génesis',
    channel: 'gtv_genesis',
    job: JOBS.BODYGUARD,
    keywords: [...JOB_KEYWORDS[JOBS.BODYGUARD], 'afesa']
  },
  {
    name: 'R. Parker',
    channel: 'zackwell',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE]]
  },
  {
    name: 'Giovanni',
    channel: 'romen_gio',
    job: JOBS.ENTREPRENEUR,
    keywords: [
      ...JOB_KEYWORDS[JOBS.ENTREPRENEUR],
      'coche',
      'coches',
      'compraventa'
    ]
  },
  {
    name: 'Agente Gordon',
    channel: 'megaomg',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE], 'internos', 'asuntos']
  }
];

export const DEFAULT_MAX_WIDTH = 1000;
export const DEFAULT_MIN_WIDTH = 200;