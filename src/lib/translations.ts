export const translations = {
  // Header
  getStarted: {
    en: 'Get Started',
    es: 'Comenzar'
  },
  switchToSpanish: {
    en: 'Switch to Spanish',
    es: 'Cambiar a Inglés'
  },
  
  // Hero Section (examples for future use)
  transformJobSearch: {
    en: 'Transform Your Job Search',
    es: 'Transforma Tu Búsqueda de Empleo'
  },
  applyLabsDescription: {
    en: 'ApplyLabs applies, optimizes, and tracks—while you plan your next move.',
    es: 'ApplyLabs aplica, optimiza y rastrea—mientras planeas tu próximo movimiento.'
  },
  signUp: {
    en: 'Sign Up',
    es: 'Registrarse'
  },
  learnMore: {
    en: 'Learn More',
    es: 'Saber Más'
  },

  // Footer
  subscribeNewsletter: {
    en: 'Subscribe to our newsletter',
    es: 'Suscríbete a nuestro boletín'
  },
  product: {
    en: 'Product',
    es: 'Producto'
  },
  solutions: {
    en: 'Solutions',
    es: 'Soluciones'
  },
  blog: {
    en: 'Blog',
    es: 'Blog'
  },
  careers: {
    en: 'Careers',
    es: 'Carreras'
  },
  privacyPolicy: {
    en: 'Privacy policy',
    es: 'Política de privacidad'
  },
  termsOfService: {
    en: 'Terms of service',
    es: 'Términos de servicio'
  },

  // FeatureGridSection
  everythingYouNeedHeading: {
    en: "Everything you need and nothing you don't",
    es: 'Todo lo que necesitas y nada que no'
  },
  everythingYouNeedDesc: {
    en: 'Instant access to the right openings. One-click applications, AI-perfected résumés, and real-time tracking. Modern tools that free you from spreadsheets, endless tabs, and copy-paste drudgery.',
    es: 'Acceso instantáneo a las vacantes adecuadas. Solicitudes con un clic, currículums perfeccionados con IA y seguimiento en tiempo real. Herramientas modernas que te liberan de hojas de cálculo, pestañas infinitas y copiar y pegar.'
  },
  getStartedFree: {
    en: 'Get Started Free',
    es: 'Comienza Gratis'
  },
  watchDemo: {
    en: 'Watch 2-min demo',
    es: 'Ver demo de 2 min'
  },
  ctaDescription: {
    en: "Create an account, connect your résumé, and let's start applying in minutes.",
    es: 'Crea una cuenta, conecta tu currículum y comencemos a postular en minutos.'
  },

  // FeatureTilesSection headings
  applyOnAutopilot: {
    en: 'Apply on Autopilot',
    es: 'Aplica en piloto automático'
  },
  documentsThatWin: {
    en: 'Documents That Win',
    es: 'Documentos que ganan'
  },
  seeYourProgress: {
    en: 'See Your Progress',
    es: 'Ve tu progreso'
  },
  // FeatureTiles descriptions
  applyOnAutopilotDesc: {
    en: 'ApplyLabs scouts openings that match your profile, auto-fills every form, and submits—while you sip coffee.',
    es: 'ApplyLabs busca vacantes que coincidan con tu perfil, rellena automáticamente cada formulario y envía—mientras tomas café.'
  },
  documentsThatWinDesc: {
    en: 'Our AI rewrites your CV, quantifies impact, and crafts a bespoke cover letter for each role—ready for any ATS.',
    es: 'Nuestra IA reescribe tu CV, cuantifica impacto y redacta una carta de presentación personalizada para cada rol—lista para cualquier ATS.'
  },
  seeYourProgressDesc: {
    en: "A live dashboard tracks every application, interview, and response time so you know exactly what's working—and what's not.",
    es: 'Un panel en vivo rastrea cada solicitud, entrevista y tiempo de respuesta para que sepas exactamente qué funciona y qué no.'
  },

  // FeatureGrid individual features
  autoApplyTitle: {
    en: 'AutoApply',
    es: 'AutoAplicar'
  },
  autoApplyDesc: {
    en: 'Detects openings, fills forms, hits Submit in under 8 s.',
    es: 'Detecta vacantes, completa formularios y envía en menos de 8 s.'
  },
  autoFillExtensionTitle: {
    en: 'AutoFill Extension',
    es: 'Extensión AutoFill'
  },
  autoFillExtensionDesc: {
    en: 'One Chrome pop-up, every field completed flawlessly.',
    es: 'Una ventana emergente de Chrome, cada campo completado a la perfección.'
  },
  cvOptimizerTitle: {
    en: 'CV Optimizer',
    es: 'Optimizador de CV'
  },
  cvOptimizerDesc: {
    en: 'ATS-tuned rewrite with quantified impact bullets.',
    es: 'Reescritura optimizada para ATS con logros cuantificados.'
  },
  coverLetterAITitle: {
    en: 'Cover Letter AI',
    es: 'Carta de Presentación IA'
  },
  coverLetterAIDesc: {
    en: "Generates tailored letters that mirror the JD's tone.",
    es: 'Genera cartas personalizadas que reflejan el tono de la oferta.'
  },
  smartJobBoardTitle: {
    en: 'Smart Job Board',
    es: 'Bolsa de Trabajo Inteligente'
  },
  smartJobBoardDesc: {
    en: 'Ranked matches with %–fit scores and company insights.',
    es: 'Coincidencias clasificadas con puntuaciones de ajuste y datos de la empresa.'
  },
  trackingDashboardTitle: {
    en: 'Tracking Dashboard',
    es: 'Panel de Seguimiento'
  },
  trackingDashboardDesc: {
    en: 'Live pipeline, success metrics, and interview scheduler.',
    es: 'Pipeline en vivo, métricas de éxito y programador de entrevistas.'
  },

  // Modal
  comingSoonTitle: {
    en: 'Coming Soon',
    es: 'Próximamente'
  },
  comingSoonDescription: {
    en: 'We\'re still busy building something amazing. Stay tuned for updates!',
    es: 'Todavía estamos construyendo algo increíble. ¡Mantente atento a las actualizaciones!'
  },
  gotIt: {
    en: 'Got it',
    es: 'Entendido'
  },
} as const

export type TranslationKey = keyof typeof translations
export type Language = 'en' | 'es'

export function getTranslation(key: TranslationKey, language: Language): string {
  return translations[key][language]
} 