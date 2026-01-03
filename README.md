# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

- npm (сокращение от Node Package Manager) — это менеджер пакетов для платформы Node.js. Он позволяет разработчикам легко устанавливать, обновлять и управлять библиотеками и модулями, используемыми в проектах на JavaScript. npm также предоставляет репозиторий с большим количеством пакетов, что значительно упрощает разработку и поддержку приложений.

├── node_modules/ # Папка с установленными npm-зависимостями (создается после `npm install`)
├── public/ # Папка для статических файлов (например, изображений, шрифтов и т.д.)
│ └── vite.svg # Логотип Vite (пример статического ресурса)
├── src/ # Исходный код приложения
│ ├── App.css # Стили для компонента App
│ ├── App.jsx # Главный React-компонент приложения
│ ├── index.css # Глобальные стили для всего приложения
│ ├── main.jsx # Точка входа в приложение (рендеринг React)
│ └── assets/ # Папка для хранения ваших медиафайлов, таких как изображения (по умолчанию
может быть пустой)
├── .gitignore # Файлы и папки, игнорируемые Git
├── index.html # Главный HTML-файл, который является базой для приложения
├── package.json # Файл конфигурации npm с информацией о проекте и зависимостях
├── vite.config.js # Конфигурационный файл для Vite
└── README.md # Файл с описанием проекта (по умолчанию может быть пустым)