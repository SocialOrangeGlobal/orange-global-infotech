<p align="center">
  <img src="public/logo-dark.png" alt="Orange Global Infotech Logo" width="400"/>
</p>

# Orange Global Infotech

Welcome to the **Orange Global Infotech** digital platform! This is a modern, high-performance web presence designed to showcase our services, portfolio, and digital solutions.

## 🚀 Features

- **Blazing Fast Performance**: Built with Next.js 15 for optimal Server-Side Rendering (SSR) and Static Site Generation (SSG).
- **Modern UI/UX**: Premium aesthetic featuring glassmorphism, dynamic scrolling effects, and fluid typography.
- **Interactive Animations**: Advanced, physics-based particle backgrounds and floating components powered by Framer Motion.
- **Centralized Data Management**: Highly maintainable architecture where all static content (Services, Projects, FAQs) is housed within a single `lib/data.ts` repository.
- **Fully Responsive**: Flawless visual scaling from ultra-wide desktops down to mobile devices.
- **Dynamic Theming**: Intelligent usage of SVG tech-stack icons directly reflecting their official brand colors.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Folder Structure

```
├── public/                 # Static assets (images, logos, fonts)
├── src/
│   ├── app/                # Next.js App Router (Pages, Layouts)
│   ├── components/         # Reusable React components (UI & layout pieces)
│   │   ├── animations/     # Framer Motion custom components (Physics Bubbles)
│   │   └── ui/             # Core generic components (Buttons, inputs)
│   └── lib/
│       └── data.ts         # Centralized Data Repository
├── .gitignore              # Ignored files and folders
├── components.json         # UI component configurations
├── package.json            # Node.js dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation
```

## ⚙️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or above) installed on your system.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SocialOrangeGlobal/orange-global-infotech.git
   cd orange-global-infotech
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Deployment

This project is fully optimized for Vercel, the creators of Next.js.
You can deploy it directly by linking your GitHub repository to your Vercel account.

Alternatively, for a standard Node.js build:
```bash
npm run build
npm run start
```

## 📄 License

Copyright © 2026 Orange Global Infotech. All rights reserved.
