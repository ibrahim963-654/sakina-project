import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home'; 
import { Tasbeh } from './tasbeh';
import { Resala } from './resala';
import { ShortSurahs } from './surah';
import { SurahDetails } from './SurahDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasbeeh" element={<Tasbeh />} />
      <Route path='/quran-messages' element={<Resala />} />
      <Route path='/surah' element={<ShortSurahs />} />
      <Route path='/surah/:surahId' element={<SurahDetails />}/>
    </Routes>
  );
}

export default App;