# 🎬 RARITY AGENCY - LANDING PAGE BLUEPRINT

## 🎯 OBJETIVO ESTRATÉGICO

Criar uma Landing Page de portfólio premium para a Rarity Agency que:
- Gera leads qualificados através de storytelling emocional
- Conduz visitantes através de um funil de conversão otimizado
- Finaliza com CTA de agendamento automático
- Transmite credibilidade, autoridade e modernidade premium

---

## 🎨 IDENTIDADE VISUAL

### Paleta de Cores (Aguardando imagens do cliente)
**Cores Primárias:**
- Roxo primário: `--rarity-purple-primary`
- Roxo secundário: `--rarity-purple-secondary`
- Azul accent: `--rarity-blue-accent`
- Cinza dark: `--rarity-gray-dark`
- Cinza light: `--rarity-gray-light`

**Gradientes:**
- `--gradient-hero`: Linear gradient roxo → azul
- `--gradient-cta`: Gradient chamativo para CTAs
- `--gradient-overlay`: Overlay sutil para backgrounds

### Tipografia
**Família:** BentonSans
- **Thin (100-200)**: Títulos hero, headlines impactantes
- **Regular (400)**: Corpo de texto, parágrafos
- **Bold (700)**: CTAs, destaques, subheadlines

**Hierarquia:**
```css
h1: 4rem - 8rem (Hero)
h2: 2.5rem - 4rem (Section Headers)
h3: 1.75rem - 2.5rem (Subsections)
p: 1rem - 1.25rem (Body)
small: 0.875rem (Captions)
```

---

## 📐 ESTRUTURA DA LANDING PAGE

### 1️⃣ HERO SECTION (Above the Fold)
**Objetivo:** Capturar atenção em 3 segundos

**Elementos:**
- Background dinâmico com Framer Motion (blur, gradients, shapes)
- Headline forte: "Transformamos Ideias em Vídeos que Vendem"
- Subheadline emocional: "Sua marca merece ser vista. Nós fazemos isso acontecer."
- CTA primário: "Agendar Consultoria Gratuita" (botão roxo claro)
- Mini showcase de vídeos em carrossel (3-4 vídeos em loop)
- Scroll indicator animado

**Copywriting:**
```
HEADLINE: "Vídeos que Transformam Visualizações em Vendas"
SUBHEADLINE: "Criamos conteúdo visual premium para marcas que querem dominar o digital"
CTA: "Quero Crescer Minha Marca →"
```

**Animações:**
- Fade in gradual dos elementos (stagger 0.3s)
- Background com movimento parallax
- Carrossel automático com transições suaves
- Hover effects nos CTAs (scale + glow)

---

### 2️⃣ SEÇÃO DE AUTORIDADE / QUEM SOMOS
**Objetivo:** Estabelecer credibilidade e confiança

**Elementos:**
- Título: "Por Que a Rarity Agency?"
- História curta (3-4 parágrafos) sobre a agência
- Números de impacto (projetos, clientes, visualizações)
- Logos de clientes (Jamburae, Smart Imob, etc.)
- Badges de autoridade (prêmios, certificações)

**Copywriting:**
```
TÍTULO: "Mais Que Uma Agência. Seu Parceiro de Crescimento."

HISTÓRIA:
"Nascemos da paixão por contar histórias através de vídeos. 
Cada projeto é uma oportunidade de transformar sua visão em realidade visual.

Com anos de experiência em produção audiovisual e marketing digital,
ajudamos marcas a se destacarem em um mercado saturado.

Não criamos apenas vídeos. Criamos experiências que convertem."

NÚMEROS:
- 500+ Vídeos Produzidos
- 50+ Clientes Satisfeitos
- 10M+ Visualizações Geradas
- 95% Taxa de Satisfação
```

**Layout:**
- Grid 2 colunas (desktop): Texto à esquerda, números/logos à direita
- Mobile: Stack vertical
- Cards com glassmorphism para números
- Logos em grid responsivo

---

### 3️⃣ SHOWCASE DE PROJETOS (Vídeos)
**Objetivo:** Demonstrar qualidade e versatilidade

**Elementos:**
- Título: "Nosso Trabalho Fala Por Si"
- Filtros por categoria: Todos | Storymaker | Videomaker | Editados
- Grid responsivo de vídeos (2-3-4-5 colunas)
- Cada card com:
  - Thumbnail de alta qualidade
  - Badge do cliente (Jamburae, Rarity, etc.)
  - Título do projeto
  - Hover: Play button + overlay
- Modal de vídeo estilo Instagram Reels (vertical)

**Categorias:**
1. **Storymaker/Videomaker**: Vídeos gravados pela agência
2. **Edição Premium**: Vídeos editados para clientes
3. **Reels & Social**: Conteúdo para redes sociais

**Interações:**
- Hover: Lift + shadow + scale
- Click: Modal fullscreen com player
- Like/Share buttons no modal
- Navegação entre vídeos (prev/next)

---

### 4️⃣ SEÇÃO DE BENEFÍCIOS E DIFERENCIAIS
**Objetivo:** Destacar proposta de valor única

**Elementos:**
- Título: "O Que Nos Torna Diferentes"
- 6 cards de benefícios com ícones
- Animações de entrada (fade + slide)

**Benefícios:**
1. 🎬 **Produção Completa**: Do roteiro à entrega final
2. 🚀 **Entrega Rápida**: Projetos em até 7 dias
3. 💎 **Qualidade Premium**: Equipamentos profissionais
4. 📈 **Foco em Conversão**: Vídeos que vendem
5. 🎨 **Criatividade Ilimitada**: Conceitos únicos
6. 🤝 **Suporte Dedicado**: Acompanhamento personalizado

**Layout:**
- Grid 3 colunas (desktop), 2 (tablet), 1 (mobile)
- Cards com hover effect (lift + border glow)
- Ícones animados (Lucide React)

---

### 5️⃣ PROVA SOCIAL / DEPOIMENTOS
**Objetivo:** Validação social e redução de objeções

**Elementos:**
- Título: "O Que Nossos Clientes Dizem"
- Carrossel premium de depoimentos
- 3-5 depoimentos com:
  - Foto do cliente
  - Nome e cargo
  - Empresa
  - Depoimento (2-3 linhas)
  - Rating (5 estrelas)

**Copywriting (Exemplos):**
```
"A Rarity transformou nossa presença digital. Os vídeos que criaram 
geraram 300% mais engajamento em apenas 2 meses!"
— João Silva, CEO da TechStart

"Profissionalismo e criatividade em cada frame. Recomendo de olhos fechados!"
— Maria Santos, Diretora de Marketing, FashionBrand
```

**Animações:**
- Auto-play carrossel (5s por slide)
- Transição fade + slide
- Pause on hover
- Dots navigation

---

### 6️⃣ OFERTA / PROPOSTA DE VALOR
**Objetivo:** Apresentar oferta irresistível

**Elementos:**
- Background com gradient roxo
- Título: "Comece Hoje. Resultados Amanhã."
- Descrição da oferta
- Lista de inclusões (checkmarks)
- CTA destacado
- Garantia/Bônus

**Copywriting:**
```
TÍTULO: "Pacote Lançamento: Seu Primeiro Vídeo Premium"

OFERTA:
✓ Consultoria estratégica gratuita (R$ 500 de valor)
✓ Roteiro profissional personalizado
✓ Produção completa em até 7 dias
✓ 2 revisões incluídas
✓ Entrega em múltiplos formatos (Reels, Stories, Feed)

PREÇO: A partir de R$ 1.997

CTA: "Quero Meu Vídeo Premium →"

GARANTIA: "Satisfação 100% garantida ou seu dinheiro de volta"
```

**Layout:**
- Centralizado, max-width 800px
- Card elevado com glassmorphism
- CTA button grande e chamativo
- Micro-animações (pulse no CTA)

---

### 7️⃣ FAQ (Redução de Objeções)
**Objetivo:** Responder dúvidas comuns

**Perguntas:**
1. Quanto tempo leva para produzir um vídeo?
2. Quais formatos vocês entregam?
3. Posso solicitar revisões?
4. Trabalham com qual tipo de negócio?
5. Como funciona o processo?
6. Quais são as formas de pagamento?

**Layout:**
- Accordion component (Shadcn UI)
- Ícone + / - animado
- Smooth expand/collapse
- Max 6 perguntas

---

### 8️⃣ CTA FINAL DE CONVERSÃO
**Objetivo:** Última chance de conversão

**Elementos:**
- Background hero com vídeo ou gradient animado
- Headline urgente: "Pronto Para Transformar Sua Marca?"
- Subheadline: "Agende uma consultoria gratuita hoje"
- CTA button roxo claro (grande)
- Texto de urgência: "Vagas limitadas para este mês"
- Ícones de contato (WhatsApp, Email, Instagram)

**Copywriting:**
```
HEADLINE: "Sua Marca Merece Ser Vista. Vamos Começar?"

SUBHEADLINE: "Agende uma conversa de 15 minutos e descubra como 
podemos transformar sua presença digital com vídeos premium."

CTA: "Agendar Consultoria Gratuita →"

URGÊNCIA: "⏰ Apenas 3 vagas disponíveis para novos projetos este mês"
```

**Animações:**
- Gradient animado no background
- CTA com pulse animation
- Hover: Scale + glow effect

---

## 🛠️ ARQUITETURA TÉCNICA

### Estrutura de Pastas
```
src/
├── app/
│   ├── rarity/
│   │   └── page.tsx (Landing Page principal)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── rarity/
│   │   ├── hero-section.tsx
│   │   ├── authority-section.tsx
│   │   ├── video-showcase.tsx
│   │   ├── benefits-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── offer-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── final-cta-section.tsx
│   │   └── video-modal.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── accordion.tsx
│       └── carousel.tsx
├── lib/
│   ├── rarity-theme.ts (Tokens de cor e tipografia)
│   └── animations.ts (Configurações Framer Motion)
└── public/
    └── rarity/
        ├── videos/
        └── images/
```

### Tokens de Design (Tailwind Config)
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        rarity: {
          purple: {
            primary: '#...',
            secondary: '#...',
            light: '#...',
          },
          blue: {
            accent: '#...',
          },
          gray: {
            dark: '#...',
            light: '#...',
          }
        }
      },
      fontFamily: {
        benton: ['BentonSans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      }
    }
  }
}
```

---

## 📊 MÉTRICAS DE SUCESSO

### KPIs Principais:
1. **Taxa de Conversão**: > 5% (visitantes → leads)
2. **Tempo na Página**: > 2 minutos
3. **Scroll Depth**: > 70% chegam ao CTA final
4. **Bounce Rate**: < 40%
5. **Cliques no CTA**: > 10% dos visitantes

### Otimizações:
- A/B testing de headlines
- Heatmaps para otimizar layout
- Analytics de vídeos mais assistidos
- Formulário de agendamento integrado

---

## 🚀 PRÓXIMOS PASSOS

1. ✅ **Receber imagens de identidade visual** (paleta + tipografia)
2. ⏳ Criar tokens de design no Tailwind
3. ⏳ Desenvolver componentes base (Button, Card, etc.)
4. ⏳ Implementar seções da landing page
5. ⏳ Integrar vídeos existentes
6. ⏳ Adicionar animações Framer Motion
7. ⏳ Testes de responsividade
8. ⏳ Otimização de performance
9. ⏳ Deploy e testes finais

---

**Status:** Aguardando imagens de identidade visual para iniciar desenvolvimento 🎨
