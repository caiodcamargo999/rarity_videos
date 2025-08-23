import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from "react";

type Locale = "en" | "pt" | "es" | "ar";

type Dictionary = Record<string, string>;

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    name: "Carolina de Abreu",
    heroTitle: "Social Media Content Planner, Video Editor, Copywriting & Storytelling Expert",
    heroSubtitle: "Content that attracts attention, builds connection, and boosts visibility.",
    ctaWatch: "Watch My Work",
    scrollDownToExplore: "Scroll down to explore",
    aboutTitle: "About",
    aboutBody:
      "I am Carolina de Abreu, a social media strategist with 4+ years of experience helping brands in Brazil and Indonesia grow across industries such as jewelry, hospitality, real estate, and surf schools. My expertise lies in planning editorial calendars, editing engaging video content, and building storytelling strategies that drive measurable results. From TikTok to Instagram and YouTube, I create content that attracts attention, builds authentic connections, and increases brand visibility.",
    videosTitle: "Videos",
    loadingVideos: "Loading videos...",
    noVideosFound: "No videos found.",
    noVideosMessage: "Please check that video files are placed in the videos folder.",
    videosDescription: "Explore my latest video work and creative projects",
    clickToPlay: "Click to play",
    reelsTitle: "Instagram Reels",
    reelsDescription: "Click the play button to watch reels directly on the website.",
    clickToWatchOnInstagram: "Click to watch on Instagram",
    clickToPlayReel: "Click to play Instagram reel",
    loadingInstagramReel: "Loading Instagram reel...",
    viewOnInstagram: "View on Instagram",
    contactTitle: "Work with Me",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    // Bio page translations
    bioTitle: "Rarity Agency",
    bioRarityDesc: "Marketing and AI agency to scale your brand and automate operations.",
    bioRealEstate: "Real Estate Business",
    bioTravel: "Travel & Wellness Consulting",
    bioRealEstateDesc: "Interested in real estate business? Contact me right now.",
    bioTravelDesc: "Plan your dream trips and take care of your wellness with specialized consulting.",
    bioMission: "My purpose is transformation! Whether in mindset, brand strengthening, realizing dreams through the real estate market, or sharing tips and experiences as a world traveler. Everything I do has one focus: to inspire you to evolve.",
    bioVisitAgency: "Visit Agency",
    bioContactNow: "Contact Now",
    bioLearnMore: "Learn More",
    // Travel & Wellness Form translations
    travelWellnessTitle: "Travel & Wellness Consultation",
    travelWellnessSubtitle: "Let's plan your dream journey together",
    aspirationsQuestion: "Could you share your main aspirations in life, particularly regarding travel and wellness, so that I can better guide and support you?",
    nameQuestion: "What's your name?",
    emailQuestion: "What's your email address?",
    whatsappQuestion: "What's your WhatsApp number?",
    submitForm: "Submit Consultation Request",
    formSubmitted: "Thank you! Your request has been sent.",
    bioMotto: "Evolving is an act of self-love. Shall we go together?",
    bioCopyright: "All rights reserved.",
  },
  pt: {
    name: "Carolina de Abreu",
    heroTitle:
      "Planner de Conteúdo para Social Media, Editora de Vídeo, Copywriting & Storytelling",
    heroSubtitle:
      "Conteúdo que atrai atenção, cria conexão e aumenta a visibilidade.",
    ctaWatch: "Assista Meu Trabalho",
    scrollDownToExplore: "Role para baixo para explorar",
    aboutTitle: "Sobre",
    aboutBody:
      "Sou Carolina de Abreu, estrategista de social media com mais de 4 anos ajudando marcas no Brasil e na Indonésia a crescer em setores como joias, hospitalidade, imobiliário e escolas de surf. Minha expertise está no planejamento de calendários editoriais, edição de vídeos envolventes e construção de estratégias de storytelling que geram resultados mensuráveis. Do TikTok ao Instagram e YouTube, crio conteúdo que chama atenção, gera conexões autênticas e aumenta a visibilidade da marca.",
    videosTitle: "Vídeos",
    loadingVideos: "Carregando vídeos...",
    noVideosFound: "Nenhum vídeo encontrado.",
    noVideosMessage: "Verifique se os arquivos de vídeo estão na pasta de vídeos.",
    videosDescription: "Explore meus últimos trabalhos em vídeo e projetos criativos",
    clickToPlay: "Clique para reproduzir",
    reelsTitle: "Reels do Instagram",
    reelsDescription: "Clique no botão de reprodução para assistir aos reels diretamente no site.",
    clickToWatchOnInstagram: "Clique para assistir no Instagram",
    clickToPlayReel: "Clique para reproduzir o reel do Instagram",
    loadingInstagramReel: "Carregando reel do Instagram...",
    viewOnInstagram: "Ver no Instagram",
    contactTitle: "Trabalhe Comigo",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    // Bio page translations
    bioTitle: "Agência Rarity",
    bioRarityDesc: "Agência de marketing e IA para escalar sua marca e automatizar operações.",
    bioRealEstate: "Negócios Imobiliários",
    bioTravel: "Consultoria de Viagens e Bem Estar",
    bioRealEstateDesc: "Interessado em fazer negócios imobiliários? Entre em contato comigo agora mesmo.",
    bioTravelDesc: "Planeje suas viagens dos sonhos e cuide do seu bem estar com consultoria especializada.",
    bioMission: "Meu propósito é transformação! Seja no mindset, no fortalecimento de marcas, na realização de sonhos através do mercado imobiliário ou compartilhando dicas e experiências como viajante pelo mundo. Tudo o que eu faço tem um só foco: te inspirar a evoluir.",
    bioVisitAgency: "Visitar Agência",
    bioContactNow: "Contatar Agora",
    bioLearnMore: "Saiba Mais",
    // Travel & Wellness Form translations
    travelWellnessTitle: "Consultoria de Viagens e Bem Estar",
    travelWellnessSubtitle: "Vamos planejar sua jornada dos sonhos juntos",
    aspirationsQuestion: "Você poderia compartilhar suas principais aspirações na vida, especialmente em relação a viagens e bem estar, para que eu possa te guiar e apoiar melhor?",
    nameQuestion: "Qual é o seu nome?",
    emailQuestion: "Qual é o seu endereço de email?",
    whatsappQuestion: "Qual é o seu número de WhatsApp?",
    submitForm: "Enviar Solicitação de Consultoria",
    formSubmitted: "Obrigado! Sua solicitação foi enviada.",
    bioMotto: "Evoluir é um ato de amor próprio. Vamos juntos?",
    bioCopyright: "Todos os direitos reservados.",
  },
  es: {
    name: "Carolina de Abreu",
    heroTitle:
      "Planificadora de Contenido Social Media, Editora de Video, Copywriting & Storytelling",
    heroSubtitle:
      "Contenido que atrae atención, crea conexión y aumenta la visibilidad.",
    ctaWatch: "Mira Mi Trabajo",
    scrollDownToExplore: "Desplázate hacia abajo para explorar",
    aboutTitle: "Sobre mí",
    aboutBody:
      "Soy Carolina de Abreu, estratega de redes sociales con más de 4 años ayudando a marcas en Brasil e Indonesia a crecer en sectores como joyería, hotelería, bienes raíces y escuelas de surf. Mi experiencia se centra en planificar calendarios editoriales, editar videos atractivos y construir estrategias de storytelling que generan resultados medibles. De TikTok a Instagram y YouTube, creo contenido que atrae atención, construye conexiones auténticas y aumenta la visibilidad de la marca.",
    videosTitle: "Videos",
    loadingVideos: "Cargando videos...",
    noVideosFound: "No se encontraron videos.",
    noVideosMessage: "Verifique que los archivos de video estén en la carpeta de videos.",
    videosDescription: "Explora mis últimos trabajos en video y proyectos creativos",
    clickToPlay: "Haz clic para reproducir",
    reelsTitle: "Reels de Instagram",
    reelsDescription: "Haz clic en el botón de reproducción para ver reels directamente en el sitio web.",
    clickToWatchOnInstagram: "Haz clic para ver en Instagram",
    clickToPlayReel: "Haz clic para reproducir el reel de Instagram",
    loadingInstagramReel: "Cargando reel de Instagram...",
    viewOnInstagram: "Ver en Instagram",
    contactTitle: "Trabaja Conmigo",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    // Bio page translations
    bioTitle: "Agencia Rarity",
    bioRarityDesc: "Agencia de marketing e IA para escalar tu marca y automatizar operaciones.",
    bioRealEstate: "Negocios Inmobiliarios",
    bioTravel: "Consultoría de Viajes y Bienestar",
    bioRealEstateDesc: "¿Interesado en hacer negocios inmobiliarios? Contáctame ahora mismo.",
    bioTravelDesc: "Planifica tus viajes de ensueño y cuida tu bienestar con consultoría especializada.",
    bioMission: "¡Mi propósito es la transformación! Ya sea en mentalidad, fortalecimiento de marcas, realización de sueños a través del mercado inmobiliario, o compartiendo consejos y experiencias como viajera del mundo. Todo lo que hago tiene un solo enfoque: inspirarte a evolucionar.",
    bioVisitAgency: "Visitar Agencia",
    bioContactNow: "Contactar Ahora",
    bioLearnMore: "Saber Más",
    // Travel & Wellness Form translations
    travelWellnessTitle: "Consultoría de Viajes y Bienestar",
    travelWellnessSubtitle: "Planifiquemos tu viaje de ensueño juntos",
    aspirationsQuestion: "¿Podrías compartir tus principales aspiraciones en la vida, especialmente en cuanto a viajes y bienestar, para que pueda guiarte y apoyarte mejor?",
    nameQuestion: "¿Cuál es tu nombre?",
    emailQuestion: "¿Cuál es tu dirección de correo electrónico?",
    whatsappQuestion: "¿Cuál es tu número de WhatsApp?",
    submitForm: "Enviar Solicitud de Consultoría",
    formSubmitted: "¡Gracias! Tu solicitud ha sido enviada.",
    bioMotto: "Evolucionar es un acto de amor propio. ¿Vamos juntos?",
    bioCopyright: "Todos los derechos reservados.",
  },
  ar: {
    name: "كارولينا دي أبريو",
    heroTitle:
      "مخططة محتوى لوسائل التواصل الاجتماعي، محررة فيديو، خبيرة كتابة نصوص وسرد قصصي",
    heroSubtitle:
      "محتوى يجذب الانتباه، يبني روابط حقيقية، ويزيد الظهور.",
    ctaWatch: "شاهد أعمالي",
    scrollDownToExplore: "مرر للأسفل لاستكشاف المزيد",
    aboutTitle: "نبذة",
    aboutBody:
      "أنا كارولينا دي أبريو، خبيرة استراتيجيات وسائل التواصل الاجتماعي بخبرة تزيد عن أربع سنوات في مساعدة العلامات التجارية في البرازيل وإندونيسيا على النمو في مجالات مثل المجوهرات والضيافة والعقارات ومدارس ريندينغ الأمواج. أتميّز بتخطيط جداول تحريرية، وتحرير فيديوهات جذابة، وبناء استراتيجيات سرد قصصي تحقق نتائج ملموسة. من تيك توك إلى إنستغرام ويوتيوب، أصنع محتوى يجذب الانتباه، يبني تواصلًا أصيلًا، ويزيد من ظهور العلامة.",
    videosTitle: "فيديوهات",
    loadingVideos: "جاري تحميل الفيديوهات...",
    noVideosFound: "لم يتم العثور على فيديوهات.",
    noVideosMessage: "يرجى التحقق من أن ملفات الفيديو موجودة في مجلد الفيديوهات.",
    videosDescription: "استكشف أحدث أعمالي في الفيديو والمشاريع الإبداعية",
    clickToPlay: "انقر للعب",
    reelsTitle: "ريلز إنستغرام",
    reelsDescription: "انقر على زر التشغيل لمشاهدة الريلز مباشرة على الموقع.",
    clickToWatchOnInstagram: "انقر لمشاهدة على إنستغرام",
    clickToPlayReel: "انقر لتشغيل ريل إنستغرام",
    loadingInstagramReel: "جاري تحميل ريل إنستغرام...",
    viewOnInstagram: "عرض على إنستغرام",
    contactTitle: "اعمل معي",
    instagram: "إنستغرام",
    linkedin: "لينكدإن",
    // Bio page translations
    bioTitle: "وكالة راريتي",
    bioRarityDesc: "وكالة تسويق وذكاء اصطناعي لتطوير علامتك التجارية وأتمتة العمليات.",
    bioRealEstate: "أعمال العقارات",
    bioTravel: "استشارات السفر والعافية",
    bioRealEstateDesc: "مهتم بأعمال العقارات؟ اتصل بي الآن.",
    bioTravelDesc: "خطط لرحلات أحلامك واعتني بعافيتك مع استشارات متخصصة.",
    bioMission: "هدفي هو التحول! سواء في العقلية، أو تعزيز العلامات التجارية، أو تحقيق الأحلام من خلال سوق العقارات، أو مشاركة النصائح والخبرات كمسافرة حول العالم. كل ما أفعله له هدف واحد: إلهامك للتطور.",
    bioVisitAgency: "زيارة الوكالة",
    bioContactNow: "اتصل الآن",
    bioLearnMore: "اعرف المزيد",
    // Travel & Wellness Form translations
    travelWellnessTitle: "استشارات السفر والعافية",
    travelWellnessSubtitle: "دعنا نخطط رحلتك المثالية معاً",
    aspirationsQuestion: "هل يمكنك مشاركة طموحاتك الرئيسية في الحياة، خاصة فيما يتعلق بالسفر والعافية، حتى أتمكن من توجيهك ودعمك بشكل أفضل؟",
    nameQuestion: "ما اسمك؟",
    emailQuestion: "ما هو عنوان بريدك الإلكتروني؟",
    whatsappQuestion: "ما هو رقم واتسابك؟",
    submitForm: "إرسال طلب الاستشارة",
    formSubmitted: "شكراً لك! تم إرسال طلبك.",
    bioMotto: "التطور هو فعل من أفعال حب الذات. هل نذهب معاً؟",
    bioCopyright: "كل الحقوق محفوظة.",
  },
};

type I18nContextValue = {
  locale: Locale;
  t: (key: keyof typeof dictionaries["en"]) => string;
  setLocale: (next: Locale) => void;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getDir(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== "undefined" ? (localStorage.getItem("locale") as Locale | null) : null;
    if (stored && ["en", "pt", "es", "ar"].includes(stored)) {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
      document.documentElement.dir = getDir(locale);
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const value = useMemo<I18nContextValue>(() => {
    const dict = dictionaries[locale];
    return {
      locale,
      dir: getDir(locale),
      setLocale,
      t: (key) => dict[key] ?? String(key),
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}


