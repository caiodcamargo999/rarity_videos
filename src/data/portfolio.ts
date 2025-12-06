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
        title: "Storymaker Project 01",
        category: "Storymaker",
        color: "bg-rarity-blue",
        videoUrl: "", // COLE O LINK AQUI
    },
    {
        id: 2,
        title: "Storymaker Project 02",
        category: "Storymaker",
        color: "bg-rarity-purple",
        videoUrl: "", // COLE O LINK AQUI
    },
    {
        id: 3,
        title: "Storymaker Project 03",
        category: "Storymaker",
        color: "bg-rarity-pink",
        videoUrl: "", // COLE O LINK AQUI
    },
    {
        id: 4,
        title: "Storymaker Project 04",
        category: "Storymaker",
        color: "bg-indigo-500",
        videoUrl: "", // COLE O LINK AQUI
    },
    {
        id: 5,
        title: "Storymaker Project 05",
        category: "Storymaker",
        color: "bg-violet-500",
        videoUrl: "", // COLE O LINK AQUI
    },
    {
        id: 6,
        title: "Storymaker Project 06",
        category: "Storymaker",
        color: "bg-fuchsia-500",
        videoUrl: "", // COLE O LINK AQUI
    },
];

export const editionProjects: Project[] = [
    {
        id: 101,
        title: "Edição Project 01",
        category: "Edição Premium",
        color: "bg-rarity-blue",
        videoUrl: "", // COLE O LINK AQUI
    },
    {
        id: 102,
        title: "Edição Project 02",
        category: "Edição Premium",
        color: "bg-rarity-purple",
        videoUrl: "", // COLE O LINK AQUI
    },
    {
        id: 103,
        title: "Edição Project 03",
        category: "Edição Premium",
        color: "bg-rarity-pink",
        videoUrl: "", // COLE O LINK AQUI
    },
    {
        id: 104,
        title: "Edição Project 04",
        category: "Edição Premium",
        color: "bg-indigo-600",
        videoUrl: "", // COLE O LINK AQUI
    },
    {
        id: 105,
        title: "Edição Project 05",
        category: "Edição Premium",
        color: "bg-violet-600",
        videoUrl: "", // COLE O LINK AQUI
    },
    {
        id: 106,
        title: "Edição Project 06",
        category: "Edição Premium",
        color: "bg-fuchsia-600",
        videoUrl: "", // COLE O LINK AQUI
    },
    {
        id: 107,
        title: "Edição Project 07",
        category: "Edição Premium",
        color: "bg-purple-600",
        videoUrl: "", // COLE O LINK AQUI
    },
    {
        id: 108,
        title: "Edição Project 08",
        category: "Edição Premium",
        color: "bg-pink-600",
        videoUrl: "", // COLE O LINK AQUI
    },
    {
        id: 109,
        title: "Edição Project 09",
        category: "Edição Premium",
        color: "bg-rose-600",
        videoUrl: "", // COLE O LINK AQUI
    },
    {
        id: 110,
        title: "Edição Project 10",
        category: "Edição Premium",
        color: "bg-blue-600",
        videoUrl: "", // COLE O LINK AQUI
    },
];
