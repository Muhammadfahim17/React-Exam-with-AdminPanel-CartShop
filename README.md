# Energy Billing System Admin Panel

![Project Logo](./assets/logo.png)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Design & Branding](#design--branding)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Internationalization (i18n)](#internationalization-i18n)
- [API & Data Management](#api--data-management)
- [Responsive & Adaptive Layout](#responsive--adaptive-layout)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction
This project is a **web-based energy billing system** built for utility companies and clients. It features:

- A **client portal** where end-users can register, view personal data, energy usage history, and receive monthly invoices.
- A **controller dashboard** for energy controllers to manage a dedicated client list, calculate monthly consumption, and issue bills.
- A **Super Admin panel** to oversee all controllers, clients, and system events.
- A **public homepage** showcasing global news in the energy sector.

The goal is to provide a seamless, modern UI/UX for billing, monitoring, and administration of energy usage.

---

## Features
1. **Authentication & Authorization**  
   - User registration and login flows
   - Role-based access (Client, Controller, Super Admin)

2. **Client Dashboard**  
   - Personal profile management
   - Energy usage timeline and statistics
   - Monthly invoice with kWh consumed, costs, and earnings overview
   - In-app messaging for bill notifications

3. **Controller Interface**  
   - Dedicated dashboard with assigned clients
   - Tools to compute and generate monthly bills per client
   - Direct invoice dispatch to client portal

4. **Super Admin Dashboard**  
   - Full system oversight
   - Create, edit, or delete controllers
   - Monitor all billing events and application logs

5. **Homepage**  
   - Responsive news feed on global energy topics

6. **Internationalization (i18n)**
   - Multi-language support (e.g., English, Tajik, Russian)

7. **Responsive & Adaptive Design**
   - Mobile-first approach
   - Adaptive layouts for various screen sizes

---

## Design & Branding
- **UI Style**: Clean, minimalistic, professional
- **Color Palette**: Energy-inspired (greens, blues, whites, dark grays)
- **Typography**: Modern sans-serif for readability
- **Components**: Data cards, charts, notifications, side navigation
- **Logo Files**: Stored under `./assets/logo.png` and `./assets/logo-dark.png`

---

## Technologies
- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **State Management & Data Fetching**: Redux Toolkit Query (RTK Query)
- **API Documentation**: Swagger UI
- **Internationalization**: react-i18next
- **Routing**: React Router v6
- **Build Tools**: Vite / Webpack (choose per preference)

---

## Getting Started

### Prerequisites
- Node.js v16+ and npm or Yarn installed
- Access to the backend API (Swagger endpoint)

### Installation
```bash
# Clone the repo
git clone https://github.com/your-org/energy-billing-admin.git
cd energy-billing-admin

# Install dependencies
yarn install  # or npm install
```

### Running the App
```bash
# Start development server
yarn dev  # or npm run dev

# Open in browser
http://localhost:3000
```

---

## Project Structure
```
├── src/
│   ├── assets/           # logos, images
│   ├── components/       # shared UI components
│   ├── features/         # RTK Query slices & hooks
│   ├── i18n/             # translation files
│   ├── layouts/          # Dashboard, Controller, SuperAdmin layouts
│   ├── pages/            # Route components (Login, Dashboard, Orders, Products, etc.)
│   ├── services/         # API client configs (Swagger setup)
│   ├── App.jsx           # Main app entry
│   └── index.jsx
├── public/
│   └── index.html
├── tailwind.config.js
├── swagger.json          # API docs
└── README.md
```

---

## Internationalization (i18n)
Translations are managed with **react-i18next**. Language files are under `src/i18n/locales/`. To add a new language:
1. Create a new JSON file in `locales/`, e.g. `es.json`.
2. Add translation keys/values.
3. Update `i18n.js` to include the new language.

---

## API & Data Management
- **Swagger UI**: Documentation at `/swagger` route
- **RTK Query**: Handles data fetching, caching, and mutation
- **Authentication**: JWT tokens stored securely (httpOnly cookies or localStorage)

---

## Responsive & Adaptive Layout
- Uses **Tailwind CSS** utilities for mobile-first breakpoints
- Components adapt to screen size with Tailwind’s responsive classes
- Dark mode support via `dark:` variants

---

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

Please adhere to the established code style and include unit/integration tests where applicable.

---

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

*Crafted with ♥ by Your Team*
