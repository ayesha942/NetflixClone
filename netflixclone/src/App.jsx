import React from 'react';
import Home from './pages/Home/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login/login';
import Player from './pages/Player/player';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'element={ <Home />}></Route>
          <Route path='/login'element={ <Login />}></Route>
           <Route path='/player/:id'element={ <Player />}></Route>
      </Routes>
      {/* Use capital 'H' here too */}
    </div>
  );
};

export default App;
