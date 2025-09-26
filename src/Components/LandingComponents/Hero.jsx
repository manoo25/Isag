import React from 'react';
import { FaRocket } from 'react-icons/fa';
import heroImage from '../../assets/Images/vendor_clean_expanded.png';
import './hero.css';
import { Link, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const HeroSection = ( { token, role }) => {
  const navigate = useNavigate();
 if (token && !role) return null;
  return (
    <section className="hero-section py-5 pt-5 mt-5 px-3"> 
      <div >
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="hero-image">
              <img
                src={heroImage}
                alt="Hero"
                className="w-100 h-auto"
                style={{ maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-end d-flex flex-column align-items-center align-items-lg-start">
            <h2 className="hero-title mb-4 " style={{ fontSize: '30px',fontWeight:600 }}>
             15 سنة من الخبرة في مجال تصميم المواقع الإلكترونية وبرمجة التطبيقات والتسويق الإلكتروني  
            </h2>
          <p className="hero-subtitle mb-4">
هل تبحث عن شركة مبدعة تكرس كل جهودها من أجل نجاحك ونجاح موقعك الإلكتروني؟ إذا كانت الإجابة بنعم، لا تقلق نحن هنا لخدمتك شركة 
<Link className='FocusTitle'> ايساج </Link> 
 شريك إلكتروني رائع للوصول للنجاح الذي تسعى له ، من خلال خبرتنا الطويلة في مجال التسويق الإلكتروني والحلول الرقمية فإننا نضمن لك العمل مع فريق من المحترفين في عالم الإنترنت.
</p>
{!token ? (
  <button
    className="btn btn-CompanyInfo px-4 py-2 d-flex align-items-center justify-content-center gap-2 mt-3 fw-bold"

    onClick={() => navigate('/choose-role')}
  >
    <FaRocket />
   تعرف علينا اكثر
  </button>
) : role === 'admin' || role === 'trader' ? (
  <button
    className="btn btn-CompanyInfo px-4 py-2 d-flex align-items-center justify-content-center gap-2 mt-3 fw-bold"
    onClick={() => navigate('/Dashboard/Charts')}
  >
    <FaRocket />
    انتقل إلى لوحة التحكم
  </button>
) : role === 'user' ? (
  <a
    className="btn btn-CompanyInfo px-4 py-2 d-flex align-items-center justify-content-center gap-2 mt-3 fw-bold"
    href="https://your-app-download-link.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaRocket />
    حمّل التطبيق الآن
  </a>
) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
