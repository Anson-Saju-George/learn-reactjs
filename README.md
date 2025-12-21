# 🧩 Minimal React + npm Command Cheatsheet (2025)

This is the **only set of commands you need** to create, run, and manage a modern React app using npm + Vite.

---

## 1️⃣ Create a new React project (modern way)

```bash
npm create vite@latest
```

- Choose **React**
- Choose **TypeScript** or **JavaScript**

---

## 2️⃣ Go into the project

```bash
cd project-name
```

---

## 3️⃣ Install dependencies

```bash
npm install
```

- Downloads all required packages
- Creates `node_modules/`
- Updates `package-lock.json`

---

## 4️⃣ Start development server

```bash
npm run dev
```

- Starts Vite dev server
- Open the shown URL in browser

---

## 5️⃣ Build for production

```bash
npm run build
```

- Outputs production files to `dist/`

---

## 6️⃣ Preview production build locally

```bash
npm run preview
```

---

## 7️⃣ Add a dependency

```bash
npm install package-name
```

Example:

```bash
npm install axios
```

Dev-only dependency:

```bash
npm install -D eslint
```

---

## 8️⃣ Check Node version

```bash
node -v
```

- Recommended: **Node 18+**

---

## 9️⃣ Check project status (Git)

```bash
git status
```

---

## 🚫 Commands you should NOT use as a beginner

```bash
npm update
npm audit fix --force
npm cache clean --force
npx create-react-app
```

---

## ✅ Typical daily workflow

```bash
npm run dev
```

That’s it. Ignore npm unless something breaks loudly.

---

## 🧠 Rule to remember

> **npm installs and runs tools** > **React renders UI** > **CSS controls layout**

If the UI looks wrong, it’s not npm.
