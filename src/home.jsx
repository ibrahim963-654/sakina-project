import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Disc, MailOpen, Moon } from 'lucide-react'; 
import './App.css'; 

export function Home() {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [hijriDate, setHijriDate] = useState('');
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    fetch('https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=5')
      .then((response) => response.json())
      .then((data) => {
        setPrayerTimes(data.data.timings);
        setHijriDate(data.data.date.hijri.date);
        setLoading(false);
      })
      .catch((error) => {
        console.error("حدث خطأ أثناء جلب المواقيت:", error);
        setLoading(false);
      });
    },[]);


      if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', direction: 'rtl' }}>
        <h2>جاري تحميل مواقيت الصلاة...</h2>
      </div>
    );
  }

  return (
    <div className="main">
      <header>
        <h3 className="logo">سَكِينَةٌ</h3>
        <Moon className="moon"/>
      </header>

      <div className="content">
        <h1 className='sakina'>أرِح قَلبَك بِذِكرِ الله</h1>
        <p className='hello'>مرحباً بك في سَكِينة .. ملاذك الرقمي اليومي</p>
      </div>

      <h2 className='time'>مواقيت الصلاة اليوم:</h2>
      <div className="pray-div">
        <h4>التاريخ الهجري: {hijriDate}</h4>
        <div className="pray-times">
          <div className="pray-time"><span className='name'>الفجر</span> <span className="time-num">{prayerTimes?.Fajr}</span></div>
          <div className="pray-time"><span className='name'>الظهر</span> <span className="time-num">{prayerTimes?.Dhuhr}</span></div>
          <div className="pray-time"><span className='name'>العصر</span> <span className="time-num">{prayerTimes?.Asr}</span></div>
          <div className="pray-time"><span className='name'>المغرب</span> <span className="time-num">{prayerTimes?.Maghrib}</span></div>
          <div className="pray-time"><span className='name'>العشاء</span> <span className="time-num">{prayerTimes?.Isha}</span></div>
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <Disc className="card-icon" />
          <h3 className='show'>السبحة الإلكترونية</h3>
          <p className='about'>عداد تفاعلي يعينك على الاستغفار وملازمة التسبيح</p>
          <Link to="/tasbeeh" className="link">انتقل إلى التسبيح</Link>
        </div>

        <div className="card">
          <MailOpen className="card-icon" />
          <h3 className='show'>رسالة من القرآن</h3>
          <p className='about'>آيات من كتاب الله تطمئن قلبك وتضيء بها يومك</p>
          <Link to="/quran-messages" className="link">استقبل رسالتك</Link>
        </div>

        <div className="card">
          <BookOpen className="card-icon" />
          <h3 className='show'>قصار السور</h3>
          <p className='about'>تلاوات وقراءات ميسرة لأواخر سور القرآن الكريم</p>
          <Link to="/surah" className="link">تصفح السور</Link>
        </div>
      </div>
    </div>
  );
} 