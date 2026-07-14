import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const Tasbeh = () => {
  const [count, setCount] = useState(0);
  const [zekr, setZekr] = useState("سبحان الله");

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleZekr = (e) => {
    setZekr(e.target.value);
    setCount(0); 
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="main">
      <header>
        <h3 className="logo">سَكِينَةٌ</h3>
        <Link to="/" className="back">العودة للرئيسية</Link>
      </header>

      <div className="face">
        <h1>السبحة الإلكترونية</h1>
        <p>ألا بذكر الله تطمئن القلوب</p>
      </div>

      <div className="tasbeeh-card">
        <select value={zekr} onChange={handleZekr} className="zekr-select">
          <option value="سبحان الله">سبحان الله</option>
          <option value="الحمد لله">الحمد لله</option>
          <option value="لا إله إلا الله">لا إله إلا الله</option>
          <option value="الله أكبر">الله أكبر</option>
          <option value="أستغفر الله">أستغفر الله</option>
        </select>

        <div className="counter">
          <h1 className="count">{count}</h1>
          <button className="zekr" onClick={handleCount}>{zekr}</button>
          <button className="reset" onClick={handleReset}>إعادة تعيين</button>
        </div>
      </div>
    </div>
  );
}