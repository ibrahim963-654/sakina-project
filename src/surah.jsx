import React from 'react';
import { Link } from 'react-router-dom';

const surahsList = [
  { id: 'ayat-al-kursi', name: 'آية الكرسي' },
  { id: 'al-duha', name: 'سورة الضحى' },
  { id: 'al-adiyat', name: 'سورة العاديات' },
  { id: 'al-qaria', name: 'سورة القارعة' },
  { id: 'quraish', name: 'سورة قريش' },
  { id: 'al-kawthar', name: 'سورة الكوثر' },
  { id: 'al-kafirun', name: 'سورة الكافرون' },
  { id: 'an-nasr', name: 'سورة النصر' },
  { id: 'al-ikhlas', name: 'سورة الإخلاص' },
  { id: 'al-falaq', name: 'سورة الفلق' },
  { id: 'an-nas', name: 'سورة الناس' }
];

export function ShortSurahs() {
  return (
    <div className="main">
      <header>
        <h3 className="logo">سَكِينَةٌ</h3>
        <Link to="/" className="back">العودة للرئيسية</Link>
      </header>

      <div className="face">
        <h1>قصار السور</h1>
        <p>اختر السورة المباركة لقراءتها وتدبر آياتها</p>
      </div>

      <div className="surahs-grid">
        {surahsList.map((surah) => (
          <Link to={`/surah/${surah.id}`} key={surah.id} className="surah-item-card">
            <span className="surah-name-text">{surah.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}