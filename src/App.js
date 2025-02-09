import React, { useState, useEffect } from 'react';
import './App.css';
import Animation from './components/Animation';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="App">
      <h1>Happy Birthday!</h1>
      <Animation />
      <MusicPlayer />
    </div>
  );
}

export default App;
