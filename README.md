# 💼 Tanja Pervan - Frontend Developer Portfolio

Welcome to my personal portfolio website! 👋
Built using **React**, **TypeScript**, and **Vite**, this site showcases my work, skills, and contact information in a clean and responsive format.

🔗 **Live site:** [https://tanjaper.github.io/cv-React-TS/](https://tanjaper.github.io/cv-React-TS/)

---

## 🌟 Features

- 📱 Fully responsive layout for desktop and mobile
- 🚀 Smooth scroll and scroll-to-top button
- 🎯 Organized by sections:
  - About Me
  - Skills (tabbed view)
  - Services
  - My Work (with images and hover effects)
  - Contact Form with input validation
- 🎨 Styled using CSS Modules
- 📦 Deployed on GitHub Pages
- 💡 Icons via FontAwesome

---

## 🛠️ Tech Stack

- **React** + **TypeScript**
- **Vite**
- **CSS Modules**
- **FontAwesome**
- **GitHub Pages**

---

## 🗂️ Folder Structure

```
cv-React-TS/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── About/
│   │   ├── SkillsTabs/
│   │   ├── Services/
│   │   ├── Work/
│   │   ├── Contact/
│   │   └── ScrollToTop/
│   ├── styles/
│   ├── types/
│   ├── data/
│   ├── App.tsx
│   └── main.tsx
└── vite.config.ts
```

---

## 🚀 Running Locally

1. **Clone the repository**

```bash
git clone https://github.com/TanjaPer/cv-React-TS.git
cd cv-React-TS
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

---

## 📦 Deployment

This project is deployed using **GitHub Pages**.
Ensure your `vite.config.ts` contains:

```ts
export default defineConfig({
  base: '/cv-React-TS/',
  plugins: [react()],
});
```

And push your `dist/` folder to the `gh-pages` branch.

---

## 📬 Contact

You can reach me through the contact form on the website or via:

- 📧 Email: tanya.pervan@gmail.com
- 📱 Phone: +381 63 7654 051
- 🔗 [LinkedIn](https://rs.linkedin.com/in/tanja-pervan-3575a61b9)
- 💻 [GitHub](https://github.com/TanjaPer)

---

## ❤️ Credits

Made with love and a lot of late-night coffee ☕ by Tanja Pervan.

Feel free to explore, fork, and use this template for your own portfolio!

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
