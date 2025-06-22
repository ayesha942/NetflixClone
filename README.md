📺 Netflix Clone
A fully responsive Netflix Clone built with React.js and Firebase, featuring user authentication, real-time Firestore database, and integration with TMDB API for dynamic movie listings. Designed to replicate Netflix's core features and deliver a smooth streaming UI experience.

🔧 Tech Stack
Frontend: React.js, React Router, Axios, CSS

Backend/DB: Firebase (Auth + Firestore)

API Integration: TMDB (The Movie Database API)

✨ Features
🔐 User Authentication – Sign up / Log in using Firebase Auth

📽️ Trending Movies – Dynamic content fetched from TMDB API

💾 User Watchlist – Add/remove movies saved in Firestore

🔄 Protected Routes – Only accessible when logged in

📱 Fully Responsive Design – Works seamlessly on mobile & desktop

🎨 Netflix-like UI – Clean layout, movie thumbnails, and hover previews

🚀 Getting Started
1. Clone the repository
bash
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone
2. Install dependencies
bash
npm install
3. Set up Firebase
Create a Firebase project at Firebase Console

Enable Authentication (Email/Password)

Create Firestore Database

Copy your Firebase config and replace it in your project (e.g., firebase.js)

4. Set up TMDB
Create an account at TMDB
Get your API key and add it to your .env file:
REACT_APP_TMDB_KEY=your_tmdb_api_key
5. Run the app
bash
npm start
