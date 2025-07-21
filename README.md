# Addis Software Test Project

<div align="center">
  <img src="/home.png" alt="Skillbridge Banner" width="100%" />

 <p align="center">
This test project evaluates your frontend development skills. It is a full-stack application where the frontend interacts with a REST API to manage a list of songs.
</p>
</div>

---

## 🌟 Core Requirements

### 1. Frontend Features

- ✅ Display a paginated list of songs (title, artist, album, year, etc.).
- ✅ Implement CRUD operations (Create, Read, Update, Delete) via API calls.
- ✅ Use React hooks (e.g., `useState`, `useEffect`) for state management where appropriate.

### 2. Technologies Used

- ✅ **ReactJS** – functional components
- ✅ **Redux Toolkit + Redux-Saga** – for global state and handling side effects
- ✅ **Emotion / Styled System** – for theming and responsive styling
- ✅ **Manual Webpack Configuration** – without Create React App

---

## 🌐 Backend Integration

- ✅ Backend is implemented using **MirageJS** (mock API)
- ✅ API Endpoints:
  - `GET /api/songs` – fetch paginated list of songs
  - `POST /api/songs` – add new song
  - `PUT /api/songs/:id` – update existing song
  - `DELETE /api/songs/:id` – delete song

---

## 🤖 AI Tool Policy

### AI Tools Used:

- ChatGPT was used to:
  - Generate initial documentation structure
  - Assist in writing reusable CRUD logic with Redux-Saga
  - Improve Emotion styling patterns

### Verification of AI-Generated Code:

- ✅ Manually debugged and tested every feature
- ✅ Verified using console logs and error boundaries
- ✅ Cross-checked types with TypeScript
- ✅ UI tested with live user actions and dummy data

---

## ⚙️ Webpack Configuration

- ✅ Manually configured Webpack without Create React App
- ✅ Custom rules included:
  - Handling images and SVGs via `file-loader` and `url-loader`
- ✅ Used `dotenv-webpack` for loading environment variables (e.g., `API_BASE_URL`)
- ✅ Split production and development configs for better optimization

### Scripts

```bash
npm  run build       # Builds for production
npm  run start       # Starts production server
```

## 🚀 Bonus Features

### ✅ Deployment

Frontend hosted on Vercel: [https://addis-songs-app.vercel.app]

### ✅ Testing

- **Unit Testing**: Using Jest for utility and Redux slice tests
- **Component Testing**: React Testing Library for form and table interactions

### ✅ Performance Optimizations

- Code-splitting and lazy loading routes using React.lazy and Suspense
- Tree shaking enabled in production Webpack build

## 🛠 Setup Instructions

```bash
### Clone the repository
git clone https://github.com/solobdev/addis-songs-app.git
```

### Navigate into the directory

```bash
cd addis-songs-app
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm start
```

## 🙌 Thank You

- This project was built to demonstrate practical frontend architecture, state management, and modular styling using best practices. Looking forward to your review.

## 📞 Contact

For any questions or suggestions, please reach out to:

- Project Maintainer: [Solomon Belay](mailto:your.solomon.belayu@gmail.com)
- Project Repository: [GitHub](https://github.com/solobdeb/addis-songs-app)

---

Built with ❤️ by Solomon Belay
