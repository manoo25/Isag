import React from "react";
import dlvaryImg from "../../../assets/Images/site.png";
import tarackingImg from "../../../assets/Images/site.png";
import orderImg from "../../../assets/Images/site.png";
import "./features.css";
import { Link } from "react-router-dom";

const tabs = [
  {
    name: "مواقع الشركات",
    CompanyFeatures: [
      {
        img: tarackingImg,
        title: "تصفح الموقع",
      },
      {
        img: tarackingImg,
        title: "تصفح الموقع",
      },
      {
        img: orderImg,
        title: "برمجة تطبيقات الهاتف",
        desc: "تعزز تطبيقات الهاتف وصولك لعملائك بشكل أعمق...",
      },
      {
        img: dlvaryImg,
        title: "خدمات التسويق الالكتروني",
        desc: "التواصل الفعّال بين الشركات وجمهورها هو أساس نجاح التسويق...",
      },
    ],
  },
  {
    name: "متاجر الكترونية",
    CompanyFeatures: [
      {
        img: tarackingImg,
        title: "تحسين محركات البحث",
      },
      {
        img: tarackingImg,
        title: "تحسين محركات البحث",
      },
      {
        img: orderImg,
        title: "تصميم المتاجر الإلكترونية",
      },
      {
        img: dlvaryImg,
        title: "أستضافة المواقع الالكترونية",
      },
    ],
  },
  {
    name: "مواقع سياحية",
    CompanyFeatures: [
      {
        img: orderImg,
        title: "نظام تخطيط الموارد",
      },
    ],
  },
  {
    name: "مواقع تعليمية",
    CompanyFeatures: [
      {
        img: tarackingImg,
        title: "إدارة علاقات العملاء",
      },
    ],
  },
  {
    name: "تطبيقات الهاتف",
    CompanyFeatures: [
      {
        img: orderImg,
        title: "برمجة تطبيقات الهاتف",
      },
    ],
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section py-5" id='works-section'>
      <h1 className="SectionTitle mt-5">أعمالنا ومشروعاتنا</h1>
      <p className="SectionDescribe">
        تقدم شركة ايساج تك أفضل الحلول والعروض المتاحة لـ تصميم المواقع
      </p>

      <div>
        {/* Nav Tabs */}
        <nav className="NavTabBan">
          <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
            <div className="d-flex m-auto gap-3 flex-wrap w-100">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`nav-link ${index === 0 ? "active" : ""}`}
                  id={`nav-tab-${index}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#tab-${index}`}
                  type="button"
                  role="tab"
                  aria-controls={`tab-${index}`}
                  aria-selected={index === 0 ? "true" : "false"}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Tab Content */}
        <div className="tab-content" id="nav-tabContent">
          {tabs.map((tab, tabIndex) => (
            <div
              key={tabIndex}
              className={`tab-pane fade ${
                tabIndex === 0 ? "show active" : ""
              }`}
              id={`tab-${tabIndex}`}
              role="tabpanel"
              aria-labelledby={`nav-tab-${tabIndex}`}
              tabIndex="0"
            >
              <div className="row mb-3">
                {tab.CompanyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="col-sm-6 col-md-4 col-lg-3 mb-3 mt-3"
                  >
                    <div
                      className="feature-cardWorks text-center fade-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <img src={feature.img} alt={feature.title} />
                      <h5>{feature.title}</h5>
                      {feature.desc && <p>{feature.desc}</p>}
                      <Link className="ViewBtn">زيارة الموقع</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
     <div className="d-flex justify-content-center mt-3">
       <Link className="globalBtn">
      اطلع على المزيد
      </Link>
     </div>
    </section>
  );
};

export default FeaturesSection;
