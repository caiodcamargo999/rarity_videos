"use client";

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
    contactTitle: "Work with Me",
    instagram: "Instagram",
    linkedin: "LinkedIn",
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
    contactTitle: "Trabalhe Comigo",
    instagram: "Instagram",
    linkedin: "LinkedIn",
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
    contactTitle: "Trabaja Conmigo",
    instagram: "Instagram",
    linkedin: "LinkedIn",
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
      "أنا كارولينا دي أبريو، خبيرة استراتيجيات وسائل التواصل الاجتماعي بخبرة تزيد عن أربع سنوات في مساعدة العلامات التجارية في البرازيل وإندونيسيا على النمو في مجالات مثل المجوهرات والضيافة والعقارات ومدارس ركوب الأمواج. أتميّز بتخطيط جداول تحريرية، وتحرير فيديوهات جذابة، وبناء استراتيجيات سرد قصصي تحقق نتائج ملموسة. من تيك توك إلى إنستغرام ويوتيوب، أصنع محتوى يجذب الانتباه، يبني تواصلًا أصيلًا، ويزيد من ظهور العلامة.",
    videosTitle: "فيديوهات",
    loadingVideos: "جاري تحميل الفيديوهات...",
    noVideosFound: "لم يتم العثور على فيديوهات.",
    noVideosMessage: "يرجى التحقق من أن ملفات الفيديو موجودة في مجلد الفيديوهات.",
    videosDescription: "استكشف أحدث أعمالي في الفيديو والمشاريع الإبداعية",
    clickToPlay: "انقر للعب",
    reelsTitle: "ريلز إنستغرام",
    reelsDescription: "انقر على زر التشغيل لمشاهدة الريلز مباشرة على الموقع.",
    clickToWatchOnInstagram: "انقر لمشاهدة على إنستغرام",
    contactTitle: "اعمل معي",
    instagram: "إنستغرام",
    linkedin: "لينكدإن",
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


