# 📱 TechCell - Loja de Celulares e Assistência Técnica

Uma Single Page Application (SPA) moderna e responsiva para loja de celulares, acessórios e assistência técnica especializada.

## ✨ Características

- 🎨 **Design Moderno**: Interface elegante inspirada em grandes marcas de tecnologia
- 🌓 **Tema Dark/Light**: Alternância de tema com persistência no localStorage
- 📱 **100% Responsivo**: Otimizado para todos os dispositivos (mobile-first)
- ⚡ **Animações Suaves**: Transições e animações com Framer Motion
- 🛠️ **TypeScript**: Código totalmente tipado para maior segurança
- 🎯 **Componentizado**: Arquitetura modular e reutilizável
- 💬 **Integração WhatsApp**: Contato direto via WhatsApp em produtos e serviços

## 🛠️ Tecnologias

- **Framework**: Vite + React 19 + TypeScript
- **Estilo**: Tailwind CSS
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **UI Components**: shadcn/ui
- **Gerenciador de Pacotes**: pnpm

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes React
│   ├── ui/         # Componentes de UI (shadcn/ui)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Products.tsx
│   ├── Services.tsx
│   ├── Reviews.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── context/         # Context API (ThemeContext)
├── hooks/           # Custom hooks
├── lib/            # Utilitários
├── App.tsx         # Componente principal
├── App.css         # Estilos globais e tema
└── main.tsx        # Ponto de entrada
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- pnpm (ou npm/yarn)

### Instalação

1. Instale as dependências:
```bash
pnpm install
```

2. Inicie o servidor de desenvolvimento:
```bash
pnpm run dev
```

3. Acesse no navegador:
```
http://localhost:5173
```

## 📦 Scripts Disponíveis

- `pnpm run dev` - Inicia o servidor de desenvolvimento
- `pnpm run build` - Cria a build de produção
- `pnpm run preview` - Preview da build de produção
- `pnpm run lint` - Executa o linter

## 🎨 Seções do Site

### 🏠 Hero
Banner principal com chamada para ação e estatísticas da empresa

### 📱 Produtos
- **Celulares**: Últimos lançamentos e modelos populares
- **Capinhas e Películas**: Proteção premium para seu dispositivo
- **Acessórios**: Fones, carregadores, cabos e mais

### 🛠️ Serviços
- Troca de Tela
- Troca de Bateria
- Reparo de Placa
- Limpeza e Manutenção
- Atualização de Software
- Outros Reparos

### ⭐ Avaliações
Depoimentos reais de clientes com sistema de carrossel

### 📍 Contato
- Formulário de contato (integrado com WhatsApp)
- Mapa do Google Maps
- Informações de contato e horário
- Links para redes sociais

## 🎨 Personalização

### Cores do Tema

As cores podem ser personalizadas no arquivo `src/App.css`:

**Light Mode:**
- Primary: Azul petróleo
- Accent: Verde água
- Background: Branco/Cinza claro

**Dark Mode:**
- Primary: Azul elétrico
- Accent: Ciano
- Background: Preto/Cinza escuro

### Tipografia

- **Títulos**: Poppins (Google Fonts)
- **Texto**: Inter (Google Fonts)

## 📱 Integração WhatsApp

Para configurar o número do WhatsApp, edite os componentes:
- `src/components/Products.tsx`
- `src/components/Services.tsx`
- `src/components/Contact.tsx`
- `src/components/WhatsAppButton.tsx`

Substitua `5511999999999` pelo número desejado (com código do país e DDD).

## 🌐 Deploy

O projeto pode ser facilmente deployado em:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Basta executar `pnpm run build` e fazer upload da pasta `dist`.

## 📄 Licença

Este projeto foi desenvolvido para fins comerciais e educacionais.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

Desenvolvido com ❤️ para oferecer a melhor experiência em tecnologia móvel.

