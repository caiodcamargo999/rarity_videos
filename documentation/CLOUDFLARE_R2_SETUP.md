# 🚀 RARITY AGENCY - GUIA DE CONFIGURAÇÃO CLOUDFLARE R2

## 📋 O Que Foi Criado

### ✅ Estrutura Completa
- **Types:** `src/types/rarity.ts`
- **Theme:** `src/lib/rarity/theme.ts`
- **Constants:** `src/lib/rarity/constants.ts` (16 vídeos configurados)
- **Components:**
  - `src/components/rarity/ui/video-card.tsx`
  - `src/components/rarity/ui/video-modal.tsx`
  - `src/components/rarity/sections/hero-section.tsx`
  - `src/components/rarity/sections/video-showcase.tsx`
- **Page:** `src/app/rarity/page.tsx`
- **Layout:** `src/app/rarity/layout.tsx`

---

## 🎬 VÍDEOS CONFIGURADOS

### Edição Premium (10 vídeos)
1. **edit-01** - Campanha Digital Premium (TechBrand)
2. **edit-02** - Lançamento de Produto (StartupX)
3. **edit-03** - Reels Virais (InfluencerY)
4. **edit-04** - Vídeo Corporativo (CorpZ)
5. **edit-05** - Anúncio Publicitário (BrandA)
6. **edit-06** - Tutorial Animado (EduTech)
7. **edit-07** - Teaser de Evento (EventCo)
8. **edit-08** - Depoimento Cliente (ServiceB)
9. **edit-09** - Vídeo Explicativo (SaaSC)
10. **edit-10** - Highlight Reel (AgencyD)

### Storymaker (6 vídeos)
1. **story-01** - História de Marca (Jamburae)
2. **story-02** - Documentário Curto (EcoLife)
3. **story-03** - Behind the Scenes (FashionE)
4. **story-04** - Vídeo Institucional (TechF)
5. **story-05** - Campanha Social (ONGG)
6. **story-06** - Vídeo Promocional (StartupH)

---

## ☁️ CONFIGURAÇÃO CLOUDFLARE R2

### Passo 1: Criar Bucket no Cloudflare R2

1. Acesse o [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Vá em **R2** no menu lateral
3. Clique em **Create Bucket**
4. Nome sugerido: `rarity-videos`
5. Escolha a região mais próxima

### Passo 2: Configurar Acesso Público

1. No bucket criado, vá em **Settings**
2. Em **Public Access**, clique em **Allow Access**
3. Copie a **Public Bucket URL** (exemplo: `https://pub-xxxxx.r2.dev`)

### Passo 3: Estrutura de Pastas no R2

Crie a seguinte estrutura no seu bucket:

```
rarity-videos/
├── videos/
│   ├── edit-01.mp4
│   ├── edit-02.mp4
│   ├── edit-03.mp4
│   ├── edit-04.mp4
│   ├── edit-05.mp4
│   ├── edit-06.mp4
│   ├── edit-07.mp4
│   ├── edit-08.mp4
│   ├── edit-09.mp4
│   ├── edit-10.mp4
│   ├── story-01.mp4
│   ├── story-02.mp4
│   ├── story-03.mp4
│   ├── story-04.mp4
│   ├── story-05.mp4
│   └── story-06.mp4
└── thumbnails/
    ├── edit-01.jpg
    ├── edit-02.jpg
    ├── edit-03.jpg
    ├── edit-04.jpg
    ├── edit-05.jpg
    ├── edit-06.jpg
    ├── edit-07.jpg
    ├── edit-08.jpg
    ├── edit-09.jpg
    ├── edit-10.jpg
    ├── story-01.jpg
    ├── story-02.jpg
    ├── story-03.jpg
    ├── story-04.jpg
    ├── story-05.jpg
    └── story-06.jpg
```

### Passo 4: Upload dos Arquivos

**Opção 1: Via Dashboard (Simples)**
1. Acesse seu bucket
2. Clique em **Upload**
3. Arraste os arquivos para as pastas corretas

**Opção 2: Via Wrangler CLI (Avançado)**
```bash
# Instalar Wrangler
npm install -g wrangler

# Login
wrangler login

# Upload de vídeos
wrangler r2 object put rarity-videos/videos/edit-01.mp4 --file ./edit-01.mp4

# Upload de thumbnails
wrangler r2 object put rarity-videos/thumbnails/edit-01.jpg --file ./edit-01.jpg
```

---

## 🔧 CONFIGURAÇÃO DO PROJETO

### Passo 1: Adicionar Variável de Ambiente

Crie o arquivo `.env.local` na raiz do projeto:

```env
# Cloudflare R2 Public URL
NEXT_PUBLIC_R2_PUBLIC_URL=https://pub-xxxxx.r2.dev
```

**Substitua `https://pub-xxxxx.r2.dev` pela URL pública do seu bucket!**

### Passo 2: Atualizar Constants (Opcional)

Se você quiser usar nomes diferentes de arquivos, edite:
`src/lib/rarity/constants.ts`

```typescript
// Exemplo: mudar nome do vídeo
{
  id: "edit-01",
  videoUrl: getR2Url("/videos/meu-video-customizado.mp4"),
  thumbnailUrl: getR2Url("/thumbnails/minha-thumb.jpg"),
}
```

---

## 🎨 CRIANDO THUMBNAILS

### Recomendações:
- **Formato:** JPG ou WebP
- **Resolução:** 1080x1920 (9:16 - vertical)
- **Tamanho:** < 500KB (otimizado)
- **Qualidade:** 80-85%

### Ferramentas Sugeridas:
- **Canva:** Templates prontos para thumbnails
- **Figma:** Design customizado
- **Photoshop:** Edição profissional
- **FFmpeg:** Extrair frame do vídeo

### Extrair Thumbnail com FFmpeg:
```bash
# Extrair frame em 00:00:02
ffmpeg -i video.mp4 -ss 00:00:02 -vframes 1 -q:v 2 thumbnail.jpg
```

---

## 🚀 TESTAR LOCALMENTE

### Passo 1: Instalar Dependências
```bash
npm install
```

### Passo 2: Rodar Servidor de Desenvolvimento
```bash
npm run dev
```

### Passo 3: Acessar a Landing Page
```
http://localhost:3000/rarity
```

---

## ✅ CHECKLIST DE CONFIGURAÇÃO

### Cloudflare R2
- [ ] Bucket criado
- [ ] Acesso público habilitado
- [ ] URL pública copiada
- [ ] Pastas `/videos` e `/thumbnails` criadas
- [ ] 16 vídeos (.mp4) enviados
- [ ] 16 thumbnails (.jpg) enviados

### Projeto Next.js
- [ ] `.env.local` criado
- [ ] `NEXT_PUBLIC_R2_PUBLIC_URL` configurada
- [ ] `npm install` executado
- [ ] `npm run dev` funcionando
- [ ] Página `/rarity` acessível

### Testes
- [ ] Hero section carregando
- [ ] Filtros de categoria funcionando
- [ ] Thumbnails carregando
- [ ] Modal de vídeo abrindo
- [ ] Vídeos reproduzindo
- [ ] Navegação entre vídeos (prev/next)
- [ ] Responsividade (mobile, tablet, desktop)

---

## 🎯 PRÓXIMOS PASSOS

### Customização
1. **Substituir vídeos placeholder** pelos vídeos reais
2. **Criar thumbnails profissionais** para cada vídeo
3. **Ajustar títulos e descrições** em `constants.ts`
4. **Adicionar clientes reais** nos badges

### Otimização
1. **Comprimir vídeos** para web (H.264, 1080p, 30fps)
2. **Otimizar thumbnails** (WebP, < 500KB)
3. **Configurar CDN** (Cloudflare já faz isso automaticamente)
4. **Adicionar analytics** (Google Analytics, Vercel Analytics)

### Expansão
1. **Adicionar mais seções** (Depoimentos, FAQ, CTA Final)
2. **Integrar formulário** de contato
3. **Adicionar animações** Framer Motion
4. **Implementar SEO** completo

---

## 📞 SUPORTE

### Dúvidas sobre Cloudflare R2?
- [Documentação Oficial](https://developers.cloudflare.com/r2/)
- [Pricing](https://www.cloudflare.com/pt-br/developer-platform/r2/)

### Dúvidas sobre o Projeto?
- Consulte `RARITY_VISUAL_IDENTITY.md` para identidade visual
- Consulte `RARITY_ARCHITECTURE.md` para arquitetura
- Consulte `RARITY_IMPLEMENTATION_PLAN.md` para próximos passos

---

## 🎨 FEATURES IMPLEMENTADAS

### UI/UX Premium ✅
- ✅ Design moderno com gradientes da Rarity
- ✅ Animações suaves (fade-in, slide-in, hover effects)
- ✅ Grid responsivo (2-5 colunas)
- ✅ Lazy loading de imagens
- ✅ Loading states elegantes

### Video Player ✅
- ✅ Modal estilo Instagram Reels
- ✅ Player vertical (9:16)
- ✅ Controles de play/pause
- ✅ Navegação prev/next
- ✅ Navegação por teclado (←, →, Esc, Space)
- ✅ Botões sociais (like, comment, share)
- ✅ Auto-play ao abrir

### Filtros e Categorias ✅
- ✅ Filtro "Todos" (16 vídeos)
- ✅ Filtro "Edição Premium" (10 vídeos)
- ✅ Filtro "Storymaker" (6 vídeos)
- ✅ Contadores dinâmicos
- ✅ Transições suaves

### Performance ✅
- ✅ Lazy loading de vídeos
- ✅ Otimização de imagens
- ✅ Code splitting automático
- ✅ Cloudflare R2 CDN

---

**🎉 Tudo pronto para você adicionar seus vídeos e lançar!**

**Status:** ✅ Estrutura completa | ⏳ Aguardando upload de vídeos no R2
