import React from 'react';

import './App.css';
import Navbar from './component/Navbar';
import UsersList from './component/UsersList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <UsersList />
    </div>
  );
}

export default App;
