# Guia de Configuração: Cloudflare R2 para Hospedagem de Vídeos

Este guia passo a passo ajudará você a configurar o Cloudflare R2 para hospedar seus vídeos de portfólio de forma rápida, barata e sem taxas de transferência (egress fees).

## Passo 1: Criar Conta e Bucket no Cloudflare

1.  **Acesse o Cloudflare:** Vá para [dash.cloudflare.com](https://dash.cloudflare.com/) e faça login (ou crie uma conta gratuita).
2.  **Navegue até R2:** No menu lateral esquerdo, clique em **R2**.
    *   *Nota: O R2 pode pedir um cartão de crédito para ativar, mas você tem 10GB de graça por mês.*
3.  **Criar Bucket:**
    *   Clique em **"Create Bucket"**.
    *   Dê um nome único, por exemplo: `rarity-portfolio`.
    *   Clique em **"Create Bucket"**.

## Passo 2: Configurar Acesso Público

Para que seus vídeos apareçam no site, o bucket precisa ser acessível publicamente via URL.

1.  Dentro do seu bucket recém-criado, vá para a aba **Settings** (Configurações).
2.  Role até encontrar a seção **Public Access**.
3.  **Opção A (Mais Fácil - Domínio R2.dev):**
    *   Clique em **"Allow Access"** em "R2.dev subdomain".
    *   Copie o domínio que aparecerá (algo como `https://pub-xxxxxxxx.r2.dev`).
4.  **Opção B (Profissional - Seu Domínio):**
    *   Se você já usa o Cloudflare para gerenciar seu domínio (DNS), clique em **"Connect Domain"**.
    *   Escolha um subdomínio, ex: `cdn.rarity.com`.

## Passo 3: Fazer Upload dos Vídeos

1.  Vá para a aba **Objects** (Objetos) no seu bucket.
2.  Arraste e solte seus arquivos de vídeo aqui.
    *   **Recomendação de Formato:** Use `.mp4` com codec H.264 para máxima compatibilidade.
    *   **Tamanho:** Tente manter os vídeos otimizados (abaixo de 20-30MB se possível para carregar rápido).

## Passo 4: Obter os Links

Depois de enviar, o link do seu vídeo será a junção do seu domínio público + o nome do arquivo.

**Exemplo:**
*   Domínio Público: `https://pub-123456.r2.dev`
*   Nome do Arquivo: `video-story-01.mp4`
*   **Link Final:** `https://pub-123456.r2.dev/video-story-01.mp4`

---

## Estrutura dos Vídeos para o Site

Você solicitou:
*   6 Vídeos de **Storymaker**
*   10 Vídeos de **Edição de Vídeo**

Eu criei um arquivo de configuração no projeto onde você só precisará colar esses links finais.

**Local do Arquivo:** `src/data/portfolio.ts`
