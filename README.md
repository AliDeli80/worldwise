# 🌍 Worldwise

**Worldwise** is a React + Vite application that lets users explore the world through an interactive map and track places they’ve visited. It includes **authentication**, **protected routes**, and a local backend. Built with modern React features like **Context API**, **useReducer**, **React Router (useNavigate)**, and **React-Leaflet**.

---

## 🚀 Features

- 🌎 Interactive world map with [Leaflet](https://leafletjs.com/) + [React-Leaflet](https://react-leaflet.js.org/)  
- 🗺 Add and view visited places  
- 🔑 Fake authentication with `useContext` and `useReducer`  
- 🔒 Protected routes for logged-in users only  
- 💾 Local backend with **JSON Server** (`npm run server`)  
- ⚛️ Global state management with **Context API + useReducer**  
- 🛤 Navigation and redirects using **React Router + useNavigate**  
- ⚡ Built with **Vite** for a fast development environment  
- 🎨 Scoped styling with **CSS Modules**  

---

## 🛠 Tech Stack

- **React (Vite)** – modern development setup  
- **Context API + useReducer** for global state  
- **React Router v6** (`useNavigate`, protected routes)  
- **React-Leaflet + Leaflet** for maps  
- **JSON Server** as a mock backend  
- **CSS Modules** for styling  

---

## 📦 Installation & Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/AliDeli80/worldwise.git
cd worldwise
npm install
```
Run the Vite development server:
```bash
npm run dev
```
Run the mock backend (JSON Server):
```bash
npm run server
```
The app will be available at http://localhost:5173
The JSON server will run on http://localhost:9000

---

## 📖 How It Works

**1- Authentication** – Fake login system built with Context + useReducer.

**2- Protected Routes** – Restricted pages (map and trips) only accessible when logged in.

**3- Navigation** – Uses useNavigate for programmatic navigation and redirects after login/logout.

**4- Map Interaction** – Interactive maps powered by Leaflet + React-Leaflet.

**5- State Management** – Global state handled with Context API + useReducer.

**6- Backend (JSON Server)** – Stores trips and visited places in a mock database.

--- 

## 📸 Screenshots
**1. Home Screen** – Entry point with navigation to main features. 

<img width="1920" height="866" alt="Screenshot (14)" src="https://github.com/user-attachments/assets/41be91fe-dd7b-437a-8e4f-28263a9a4f04" />

**2. Login Screen** – Authenticate to access protected routes.

<img width="1920" height="867" alt="Screenshot (16)" src="https://github.com/user-attachments/assets/1a86651c-266c-4f99-8b4e-e419b48687fe" />

**3. Map Screen** – Explore the interactive map and add visited places.

<img width="1920" height="864" alt="Screenshot (15)" src="https://github.com/user-attachments/assets/f1bbbf7c-a93f-4c7e-b91a-cbbaba196ea4" />

--- 

## 🌟 Future Improvements

. 🌐 Connect to a real backend (e.g., Firebase, Supabase)

. 📱 Make the app fully responsive

. ✨ Add animations and better UX transitions

. 🧭 Improve map features (marker clustering, categories, filters)

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).

## 👨‍💻 Author
Ali Delgoshaei
