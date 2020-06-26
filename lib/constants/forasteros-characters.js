import { JOBS, JOB_KEYWORDS } from './jobs';
import { GANGS, GANGS_KEYWORDS } from './gangs';

export const FORASTEROS_RP_CHARACTERS = [
  {
    name: 'Jacky Chan',
    channel: 'coolifegame',
    server: 'ForasterosRP',
    job: JOBS.ENTREPRENEUR,
    keywords: [...JOB_KEYWORDS[JOBS.ENTREPRENEUR], 'chino', 'chan']
  },
  {
    name: 'Unai Ondulado',
    channel: 'ibai',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'pipita', 'pelopocho']
  },
  {
    name: 'Eliott',
    channel: 'yisustm_01',
    server: 'ForasterosRP',
    job: JOBS.DEVELOPER,
    keywords: [...JOB_KEYWORDS[JOBS.DEVELOPER]]
  },
  {
    name: 'Jon Loan',
    channel: 'roitwitch',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED]]
  },
  {
    name: 'Trevor Phillips',
    channel: 'iivanhoe10',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [
      ...JOB_KEYWORDS[JOBS.UNEMPLOYED],
      ...GANGS_KEYWORDS[GANGS.TREVOR_INDUSTRIES]
    ]
  },
  {
    name: 'Ildefonso Dicaprio',
    channel: 'JDriiix',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [
      ...JOB_KEYWORDS[JOBS.UNEMPLOYED],
      ...GANGS_KEYWORDS[GANGS.TREVOR_INDUSTRIES]
    ]
  },
  {
    name: 'Tim Bradford',
    channel: 'djsergiohdyt',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE]]
  },
  {
    name: 'Harvey Specter',
    channel: 'mathiior',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE], 'sheriff']
  },
  {
    name: 'Graddy Davis',
    channel: 'james48953_',
    server: 'ForasterosRP',
    job: JOBS.DEALER,
    keywords: [...JOB_KEYWORDS[JOBS.DEALER], 'morado', 'ballas']
  },
  {
    name: 'Blake Erving',
    channel: 'roncola_a10',
    server: 'ForasterosRP',
    job: JOBS.DEALER,
    keywords: [...JOB_KEYWORDS[JOBS.DEALER], ...GANGS_KEYWORDS[GANGS.PURPLE]]
  },
  {
    name: 'Kane Lamar',
    channel: 'byrober55_',
    server: 'ForasterosRP',
    job: JOBS.DEALER,
    keywords: [...JOB_KEYWORDS[JOBS.DEALER]]
  },
  {
    name: 'Wilson Dassel',
    channel: 'menuito_',
    server: 'ForasterosRP',
    job: JOBS.DEALER,
    keywords: [...JOB_KEYWORDS[JOBS.DEALER], ...GANGS_KEYWORDS[GANGS.PURPLE]]
  },
  {
    name: 'Isaiah Smith',
    channel: 'gerib2016x',
    server: 'ForasterosRP',
    job: JOBS.DEALER,
    keywords: [...JOB_KEYWORDS[JOBS.DEALER], ...GANGS_KEYWORDS[GANGS.BLUE]]
  },
  {
    name: 'Bigfoot',
    channel: 'orsson',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'patxi', 'yeti']
  },
  {
    name: 'Alessio Giovanni',
    channel: 'adriv3r',
    server: 'ForasterosRP',
    job: JOBS.SHOPKEEPER,
    keywords: [...JOB_KEYWORDS[JOBS.SHOPKEEPER]]
  },
  {
    name: 'James Jakov',
    channel: 'imxcross',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE]]
  },
  {
    name: 'Cartel Madrazo',
    channel: 'txaski',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED]]
  },
  {
    name: 'Astrid Parker',
    channel: 'lolalolitapop',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE]]
  },
  {
    name: 'Carlitos',
    channel: 'knoxlove_',
    server: 'ForasterosRP',
    job: JOBS.DEALER,
    keywords: [...JOB_KEYWORDS[JOBS.DEALER], ...GANGS_KEYWORDS[GANGS.GREEN]]
  },
  {
    name: 'Franklin Jones (Sultan)',
    channel: 'sultang4',
    server: 'ForasterosRP',
    job: JOBS.DEALER,
    keywords: [
      ...JOB_KEYWORDS[JOBS.DEALER],
      ...GANGS_KEYWORDS[GANGS.GREEN],
      'sultan'
    ]
  },
  {
    name: 'Jackson Diggle',
    channel: 'baihuga',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE]]
  },
  {
    name: 'Kyle Walker',
    channel: 'itsraikz',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE]]
  },
  {
    name: 'Eva Morales Meyer',
    channel: 'pinguitv',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE]]
  },
  {
    name: 'Anthony',
    channel: 'reventz',
    server: 'ForasterosRP',
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
    name: 'Nathalie Rodríguez',
    channel: 'daeneryss98',
    server: 'ForasterosRP',
    job: JOBS.DEALER,
    keywords: [
      ...JOB_KEYWORDS[JOBS.DEALER],
      ...GANGS_KEYWORDS[GANGS.GREEN],
      'colombiana'
    ]
  },
  {
    name: 'Lyli Rodríguez',
    channel: 'dyablorosa',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'colombiana']
  },
  {
    name: 'Xin Zhao',
    channel: 'agentemaxo',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'cocinero', 'chino', 'amigo']
  },
  {
    name: 'Selene Vega',
    channel: 'selis13',
    server: 'ForasterosRP',
    job: JOBS.WAITER,
    keywords: [...JOB_KEYWORDS[JOBS.WAITER]]
  },
  {
    name: 'Jasminne Watson',
    channel: 'karuchita',
    server: 'ForasterosRP',
    job: JOBS.SINGER,
    keywords: [...JOB_KEYWORDS[JOBS.WAITER], ...JOB_KEYWORDS[JOBS.SINGER]]
  },
  {
    name: 'Alex Vause',
    channel: 'imnama',
    server: 'ForasterosRP',
    job: JOBS.SINGER,
    keywords: [...JOB_KEYWORDS[JOBS.SINGER]]
  },
  {
    name: 'Pete',
    channel: 'silithur',
    server: 'ForasterosRP',
    job: JOBS.SINGER,
    keywords: [...JOB_KEYWORDS[JOBS.WAITER], ...JOB_KEYWORDS[JOBS.SINGER]]
  },
  {
    name: 'Ariadna Luna',
    channel: 'ladyahriadna',
    server: 'ForasterosRP',
    job: JOBS.WAITER,
    keywords: [...JOB_KEYWORDS[JOBS.WAITER], 'ari', 'ali', 'ariadna', 'ibai']
  },
  {
    name: 'Nick Furia',
    channel: 'fenozr',
    server: 'ForasterosRP',
    job: JOBS.DEALER,
    keywords: [...JOB_KEYWORDS[JOBS.DEALER], ...GANGS_KEYWORDS[GANGS.GREEN]]
  },
  {
    name: 'Sidney',
    channel: 'albii_prz',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [
      ...JOB_KEYWORDS[JOBS.UNEMPLOYED],
      ...JOB_KEYWORDS[JOBS.MUSICIAN],
      'niña',
      'niño',
      'morado',
      'ballas'
    ]
  },
  {
    name: 'Sebastián',
    channel: 'darynshadow',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [
      ...JOB_KEYWORDS[JOBS.UNEMPLOYED],
      ...GANGS_KEYWORDS[GANGS.PURPLE]
    ]
  },
  {
    name: 'Khalifa',
    channel: 'badplayerbutsexy',
    server: 'ForasterosRP',
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
    server: 'ForasterosRP',
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
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [
      ...JOB_KEYWORDS[JOBS.UNEMPLOYED],
      ...GANGS_KEYWORDS[GANGS.GREEN],
      'rubius',
      'rap',
      'rapero',
      'jj'
    ]
  },
  {
    name: 'Susi Callahan',
    channel: 'keyshae_esp',
    server: 'ForasterosRP',
    job: JOBS.ENTREPRENEUR,
    keywords: [
      ...JOB_KEYWORDS[JOBS.ENTREPRENEUR],
      ...JOB_KEYWORDS[JOBS.DEALER],
      'susi',
      'calamelo'
    ]
  },
  {
    name: 'Juan Extremo',
    channel: 'mrqus',
    server: 'ForasterosRP',
    job: JOBS.PRIEST,
    keywords: [...JOB_KEYWORDS[JOBS.PRIEST], 'ciervista']
  },
  {
    name: 'Nicomedes Whitaker',
    channel: 'presidentefox',
    server: 'ForasterosRP',
    job: JOBS.FARMER,
    keywords: [...JOB_KEYWORDS[JOBS.FARMER], 'stan', 'lee', 'patrón']
  },
  {
    name: 'Isabella Swan',
    channel: 'beikka',
    server: 'ForasterosRP',
    job: JOBS.WAITER,
    keywords: [...JOB_KEYWORDS[JOBS.WAITER]]
  },
  {
    name: 'Julio Talavera',
    channel: 'og_meikr',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'bz']
  },
  {
    name: 'Suki Adam',
    channel: 'diablitoesp',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'paca']
  },
  {
    name: 'John Malone',
    channel: 'cold_mountain',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED]]
  },
  {
    name: 'Chester Tupper (Vaquilla)',
    channel: 'torete__',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'vaquilla']
  },
  {
    name: 'Pepe',
    channel: 'zunksoyyo',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'chino']
  },
  {
    name: 'Billy Earl Floyd',
    channel: 'coliseogamer',
    server: 'ForasterosRP',
    job: JOBS.FARMER,
    keywords: [...JOB_KEYWORDS[JOBS.FARMER]]
  },
  {
    name: 'Ana Kletus',
    channel: 'el_alemanrp',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [
      ...JOB_KEYWORDS[JOBS.UNEMPLOYED],
      'elaleman',
      'aleman',
      'jimy',
      'yeti'
    ]
  },
  {
    name: 'Eryx Krylov',
    channel: 'morphains',
    server: 'ForasterosRP',
    job: JOBS.BIKER,
    keywords: [
      ...JOB_KEYWORDS[JOBS.BIKER],
      ...GANGS_KEYWORDS[GANGS.THE_LOST_MC],
      'vampira'
    ]
  },
  {
    name: 'Tig Telford',
    channel: 'goes_x',
    server: 'ForasterosRP',
    job: JOBS.BIKER,
    keywords: [
      ...JOB_KEYWORDS[JOBS.BIKER],
      ...GANGS_KEYWORDS[GANGS.THE_LOST_MC]
    ]
  },
  {
    name: '8LU4',
    channel: 'blue_galaxy8',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE], 'androide', 'robot', 'robocop']
  },
  {
    name: 'Cadete Martínez',
    channel: 'martinez12',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE]]
  },
  {
    name: 'Espinosa',
    channel: 'jordiespinosa',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE], 'sheriff']
  },
  {
    name: 'Carlitos',
    channel: 'maarriioo',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE]]
  },
  {
    name: 'Tyler Smith',
    channel: 'dipeerz',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE]]
  },
  {
    name: 'David Ballesta',
    channel: 'daviiddpr',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE]]
  },
  {
    name: 'Rrrroberto Salazar',
    channel: 'folagorlives',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'lobelto']
  },
  {
    name: 'Jorge',
    channel: 'train_9',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED]]
  },
  {
    name: 'Dayana Miller (Dami)',
    channel: 'lakshartnia',
    server: 'ForasterosRP',
    job: JOBS.WAITER,
    keywords: [
      ...JOB_KEYWORDS[JOBS.WAITER],
      ...JOB_KEYWORDS[JOBS.DEALER],
      'lami',
      'dami'
    ]
  },
  {
    name: 'Zoe Smith',
    channel: 'sukuua',
    server: 'ForasterosRP',
    job: JOBS.DOCTOR,
    keywords: [...JOB_KEYWORDS[JOBS.DOCTOR]]
  },
  {
    name: 'Covachy Grey',
    channel: 'samy_love',
    server: 'ForasterosRP',
    job: JOBS.DOCTOR,
    keywords: [...JOB_KEYWORDS[JOBS.DOCTOR], 'cobrachy']
  },
  {
    name: 'Romualdo Guevara',
    channel: 'farrocha',
    server: 'ForasterosRP',
    job: JOBS.DOCTOR,
    keywords: [...JOB_KEYWORDS[JOBS.DOCTOR]]
  },
  {
    name: 'África Wamai',
    channel: 'rebeccamt',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE]]
  },
  {
    name: 'Keel',
    channel: 'golfyy',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED]]
  },
  {
    name: 'Diego Eduardo Santamaría',
    channel: 'nikrro',
    server: 'ForasterosRP',
    job: JOBS.DEALER,
    keywords: [...JOB_KEYWORDS[JOBS.DEALER], ...GANGS_KEYWORDS[GANGS.BLUE]]
  },
  {
    name: 'Javier Eduardo Santamaría',
    channel: 'fransmk',
    server: 'ForasterosRP',
    job: JOBS.DEALER,
    keywords: [...JOB_KEYWORDS[JOBS.DEALER], ...GANGS_KEYWORDS[GANGS.BLUE]]
  },
  {
    name: 'Gael García',
    channel: 'byoristv',
    server: 'ForasterosRP',
    job: JOBS.DEALER,
    keywords: [...JOB_KEYWORDS[JOBS.DEALER]]
  },
  {
    name: 'Zatu',
    channel: 'magiko666',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED]]
  },
  {
    name: 'Joseto Morris',
    channel: 'srcheeto',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED]]
  },
  {
    name: 'Gamali Benrhadi',
    channel: 'davilintv',
    server: 'ForasterosRP',
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
    server: 'ForasterosRP',
    job: JOBS.BODYGUARD,
    keywords: [...JOB_KEYWORDS[JOBS.BODYGUARD], 'afesa']
  },
  {
    name: 'Andresín Morcillo',
    channel: 'thecorvusclan',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'gordo']
  },
  {
    name: 'Jesús Morcillo',
    channel: 'pivitron',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'gordo']
  },
  {
    name: 'Carlitos Morcillo',
    channel: 'pipol_inthenait',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'gordo']
  },
  {
    name: 'Dory Morcillo',
    channel: 'aroyitt',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED], 'niña']
  },
  {
    name: 'R. Parker',
    channel: 'zackwell',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE]]
  },
  {
    name: 'Giovanni',
    channel: 'romen_gio',
    server: 'ForasterosRP',
    job: JOBS.ENTREPRENEUR,
    keywords: [
      ...JOB_KEYWORDS[JOBS.ENTREPRENEUR],
      'coche',
      'coches',
      'compraventa'
    ]
  },
  {
    name: 'Dominic Tigre',
    channel: 'sir_ocelott_',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED]]
  },
  {
    name: 'Agente Gordon',
    channel: 'megaomg',
    server: 'ForasterosRP',
    job: JOBS.POLICE,
    keywords: [...JOB_KEYWORDS[JOBS.POLICE], 'internos', 'asuntos']
  },
  {
    name: 'Giacomo Costacurta',
    channel: 'broncanogamer',
    server: 'ForasterosRP',
    job: JOBS.UNEMPLOYED,
    keywords: [...JOB_KEYWORDS[JOBS.UNEMPLOYED]]
  }
];
