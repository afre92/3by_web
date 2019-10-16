import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import FlashMessagesList from './components/flash/FlashMessagesList'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <FlashMessagesList />
    </div>

    
  );
}

export default App;
