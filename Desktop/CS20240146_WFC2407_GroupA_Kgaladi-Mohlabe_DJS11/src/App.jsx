
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import EpisodeView from './Pages/episodes';
import Favorites from './Pages/favorites';
import Navbar from './components/navBar';
import GlobalAudioPlayer from './components/audioPlayer';
import Shows from './Pages/shows';

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <Router>
      <Navbar />
      <div style={{ paddingBottom: '100px' }}>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shows" element={<Shows />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/episode/${id}" element={<EpisodeView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
