import React from "react";
import { FaLaptopCode, FaMobileAlt, FaServer, FaCode } from "react-icons/fa";
import "./HeroSection.css";
import HeroImg from "../../../assets/Images/Hero.png";
import { Link } from "react-router-dom";

const icons = [<FaLaptopCode />, <FaMobileAlt />, <FaServer />];

const HeroSection = () => {
  return (
    <section className="hero-containerH pt-4 pt-md-5" id='hero-containerH'>
      {/* خلفية الأيقونات */}
      <div className="binary-background">
        {Array.from({ length: 50 }).map((_, i) => (
        <span
  key={i}
  style={{
    left: `${Math.random() * 100}%`,
    animationDuration: `${6 + Math.random() * 6}s`, // أبطأ (6s - 12s)
    animationDelay: `${Math.random() * 5}s`,       // تأخير أطول
    fontSize: `${15 + Math.random() * 20}px`,
    color: "rgba(78, 6, 92, 0.2)",
    zIndex:1000
  }}
>
  {icons[Math.floor(Math.random() * icons.length)]}
</span>

        ))}
      </div>

      {/* المحتوى */}
      <div className="hero-content">
        <img className="hero-icon" src={HeroImg} alt="HeroImg"  />
        <h1 className="hero-title"> ايساج تك للبرمجيات</h1>
        <p className="hero-subtitle">
          رواد صناعة المتاجر الالكترونية ومواقع الانترنت والتطبيقات
        </p>
        <div className="d-flex gap-3 justify-content-center mt-4">
             <Link className="globalBtn">
             <i className="fa-solid fa-arrow-right ms-2"></i>
      أحدث أعمالنا
      </Link>
             <Link className="globalBtn">
              <i className="fa-solid fa-phone ms-2"></i>
      إتصل بنا 
      </Link>
            <div/>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
