import React from 'react';
import Home from './pages/Home/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login/login'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'element={ <Home />}></Route>
          <Route path='/login'element={ <Login />}></Route>
      </Routes>
      {/* Use capital 'H' here too */}
    </div>
  );
};

export default App;
