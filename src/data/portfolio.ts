export interface Project {
    id: number;
    title: string;
    category: string;
    videoUrl: string;
    color?: string; // Fallback color while video loads or if url is empty
}

// =========================================================================================
// INSTRUÇÕES:
// 1. Siga o guia em documentation/CLOUDFLARE_R2_SETUP.md para obter seus links.
// 2. Cole os links dos vídeos dentro das aspas em 'videoUrl'.
// 3. Você pode mudar o 'title' para o nome real do cliente ou projeto.
// =========================================================================================

export const storymakerProjects: Project[] = [
    {
        id: 1,
        title: "Teaser Evento Tech",
        category: "Storymaker",
        color: "bg-rarity-blue",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/Video%201.mp4",
    },
    {
        id: 2,
        title: "Cobertura Palestra Executiva",
        category: "Storymaker",
        color: "bg-rarity-purple",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/Video%202.MP4",
    },
    {
        id: 3,
        title: "Highlights Seminário",
        category: "Storymaker",
        color: "bg-rarity-pink",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/Video%203.MP4",
    },
    {
        id: 4,
        title: "Entrevistas & Networking",
        category: "Storymaker",
        color: "bg-indigo-500",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/Video%204.mp4",
    },
    {
        id: 5,
        title: "Experiência Imersiva",
        category: "Storymaker",
        color: "bg-violet-500",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/Video%205.mp4",
    },
    {
        id: 6,
        title: "Criminal Trends Experience",
        category: "Storymaker",
        color: "bg-fuchsia-500",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/Video%206.mp4",
    },
];



export const editionProjects: Project[] = [
    {
        id: 101,
        title: "Comercial WF Distribuidora",
        category: "Edição Premium",
        color: "bg-rarity-blue",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/%5BWF%20Distribuidora%5D%20%20Bebidas.mp4",
    },
    {
        id: 102,
        title: "Campanha FOPPA Juntos",
        category: "Edição Premium",
        color: "bg-rarity-purple",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/%5BFOPPA%5D%20An%C3%BAncios%20Produ%C3%A7%C3%A3o%20JUNTOS_1.mp4",
    },
    {
        id: 103,
        title: "Criativo Fábrica da Roça",
        category: "Edição Premium",
        color: "bg-rarity-pink",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/%5BF%C3%A1brica%20da%20Ro%C3%A7a%5D%20Varia%C3%A7%C3%B5es%20criativo%20campe%C3%A3o%2001.mp4",
    },
    {
        id: 104,
        title: "Lançamento Mavi Distribuidora",
        category: "Edição Premium",
        color: "bg-indigo-600",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/%5BMavi%20Distribuidora%5D%20Primeiros%20criativos.mp4",
    },
    {
        id: 105,
        title: "Oregon Controle de Pragas",
        category: "Edição Premium",
        color: "bg-violet-600",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/%5BOregon%5D%20An%C3%BAncios%20Controle%20de%20Pragas%2001.mp4",
    },
    {
        id: 106,
        title: "Parceria Rancho do Bolo",
        category: "Edição Premium",
        color: "bg-fuchsia-600",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/%5BRancho%20do%20Bolo%5D%20An%C3%BAncio%20Paralela%20Influencer.mp4",
    },
    {
        id: 107,
        title: "Institucional VAAPTY",
        category: "Edição Premium",
        color: "bg-purple-600",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/%5BVAAPTY%5D%20V%C3%ADdeos%2002.mp4",
    },
    {
        id: 108,
        title: "Destaques WF Bebidas",
        category: "Edição Premium",
        color: "bg-pink-600",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/%5BWF%20Distribuidora%5D%20%20Bebidas.mp4",
    },
    {
        id: 109,
        title: "Edição Dinâmica APV",
        category: "Edição Premium",
        color: "bg-rose-600",
        videoUrl: "https://pub-16c2712dc3da48989f1715cd08cfe1b1.r2.dev/Alterado%20apv-.mp4",
    },
];
