import React, { useState, useEffect } from "react";
import { FaRocket, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";

const LandingNavbar = ({ token }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("userID");
    navigate("/");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* شريط معلومات الاتصال العلوي */}
      <div className={`top-contact-bar ${isScrolled ? "hidden" : ""}`}>
        <div className="px-4 d-flex justify-content-between align-items-center py-2">
          <div className="contact-info d-flex gap-4 flex-wrap">
            <span className="d-flex align-items-center gap-1">
              <FaPhone className="text-primary" size={12} />
              <small>+20 123 456 7890</small>
            </span>
            <span className="d-flex align-items-center gap-1">
              <FaEnvelope className="text-primary" size={12} />
              <small>info@marketly.com</small>
            </span>
            <span className="d-flex align-items-center gap-1">
              <FaMapMarkerAlt className="text-primary" size={12} />
              <small>القاهرة، مصر</small>
            </span>
          </div>
          <div className="social-links">
            <small>تابعنا على:</small>
            {/* أيقونات سوشيال ميديا */}
          </div>
        </div>
      </div>

      {/* شريط التنقل الرئيسي */}
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top ${
          isScrolled ? "mt-0" : "margNav"
        }`}
      >
        <div className="container-fluid px-md-4 py-md-2">
          {/* اللوجو */}
          <a
            className="navbar-brand fw-bolder"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src="src/assets/Logo/Asset 1.svg"
              alt="Marketly Logo"
              style={{ width: "100px", height: "auto" }}
            />
          </a>

          {/* زر القائمة للموبايل */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* عناصر القائمة */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav me-4">
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("home-section")}
                  style={{ border: "none", background: "none", cursor: "pointer" }}
                >
                  الرئيسية
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("about-section")}
                  style={{ border: "none", background: "none", cursor: "pointer" }}
                >
                  من نحن
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("services-section")}
                  style={{ border: "none", background: "none", cursor: "pointer" }}
                >
                  خدماتنا
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("works-section")}
                  style={{ border: "none", background: "none", cursor: "pointer" }}
                >
                  أعمالنا
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("testimonials-section")}
                  style={{ border: "none", background: "none", cursor: "pointer" }}
                >
                  آراء العملاء
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("join-section")}
                  style={{ border: "none", background: "none", cursor: "pointer" }}
                >
                  انضم إلينا
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("contact-section")}
                  style={{ border: "none", background: "none", cursor: "pointer" }}
                >
                  تواصل معنا
                </button>
              </li>
            </ul>

            {/* زر الدخول / الخروج */}
            {!token ? (
              <Link
                to="/SigninPage"
                className="btn btn-primary btn-cta px-4 py-2 d-flex align-items-center gap-2 fw-bold"
              >
                <FaRocket />
                تسجيل الدخول
              </Link>
            ) : (
              <button
                className="btn btn-primary btn-cta px-4 py-2 d-flex align-items-center gap-2 fw-bold"
                onClick={handleLogout}
              >
                تسجيل الخروج
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default LandingNavbar;
