import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/login';
import Player from './pages/Player/player';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // ✅ Make sure this is exported from firebase.js
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("✅ Logged In");
        navigate('/');
      } else {
        console.log("🚫 Logged Out");
        navigate('/login');
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <ToastContainer theme='dark'></ToastContainer>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
