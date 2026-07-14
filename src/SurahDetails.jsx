import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { surahsData } from './surahsData'; 

export function SurahDetails() {
  const { surahId } = useParams(); 
  const surah = surahsData[surahId]; 

  if (!surah) {
    return <div className="main"><p>السورة غير موجودة</p></div>;
  }

  return (
    <div className="main">
      <header>
        <h3 className="logo">سَكِينَةٌ</h3>
        <Link to="/surah" className="back">العودة لقائمه السور</Link>
      </header>
      
      <div className="face">
        <h1>{surah.name}</h1> 
      </div>
      
      <div className="surah-card">

          <h3 className="bsm">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h3>
        <span className="surah">
          {surah.text} 
        </span>
      </div>
    </div>
  );
}