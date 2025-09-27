import React from 'react';
import "./Services.css";
import 'lord-icon-element';


const Services = [
  {
    img: 'https://cdn.lordicon.com/xirobkro.json',
    title: "تصميم المواقع الإلكترونية",
    desc: "موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير تجربة مميزة."
  },
  {
    img: 'https://cdn.lordicon.com/sscmlqij.json',
    title: "برمجة تطبيقات الهاتف",
    desc: "تعزز تطبيقات الهاتف وصولك لعملائك بشكل أعمق، إذ أصبحت الهواتف المحمولة أقرب لأصحابها من أفراد عائلاتهم، حسبما تؤكد الدراسات السوقية الحديثة."
  },
  {
    img: 'https://cdn.lordicon.com/gqzfzudq.json',
    title: "خدمات التسويق الالكتروني",
    desc: "التواصل الفعّال بين الشركات وجمهورها هو أساس نجاح التسويق، خصوصًا الرقمي. السوشيال ميديا وسيلة قوية بفضل قدرتها على الوصول إلى ملايين البشر."
  },
  {
    img: 'https://cdn.lordicon.com/msoeawqm.json',
    title: "تحسين محركات البحث",
    desc: "تجهيز المواقع لتتوافق مع محركات البحث يضمن ظهورها تدريجيًا في النتائج الأولى. ذلك يتطلب عملًا مستمرًا لتحسين الأداء وزيادة جاذبيتها لمحركات البحث."
  },
  {
    img: 'https://cdn.lordicon.com/taymdfsf.json',
    title: "تصميم المتاجر الإلكترونية",
    desc: "لسنا مجرد مطورين للمتاجر الإلكترونية، بل نحن من أفضل شركات تصميمها في مصر. نقدم حلولًا مبتكرة وأدوات فعالة تختصر الطريق لنجاح متجرك وزيادة مبيعاتك."
  },
  {
    img: 'https://cdn.lordicon.com/kqvibaec.json',
    title: "أستضافة المواقع الالكترونية",
    desc: "تقدم قيمة تك العديد من خدمات استضافة المواقع باستخدام أحدث التقنيات وأفضل الأسعار. نوفر مجموعة من خطط الاستضافة المشتركة لتلبية احتياجات جميع العملاء."
  },
  {
    img: 'https://cdn.lordicon.com/nocovwne.json',
    title: "إدارة علاقات العملاء",
    desc: "برنامج الـ CRM يعد من أفضل البرامج لرواد الأعمال بفضل قدرته على التسجيل والمتابعة وإعداد التقارير التفصيلية بشكل دقيق وفعال لتسهيل إدارة الأعمال."
  },
  {
    img: 'https://cdn.lordicon.com/abwrkdvl.json',
    title: "نظام تخطيط الموارد",
    desc: "النظام الأقوى لإدارة الأعمال يركز على الأهداف والمشاريع والمهام اليومية، مما يساعد في تحقيق النجاح وتنميته بشكل مستمر وفعال لتحقيق أفضل النتائج."
  },

 
];

const ServicesSection = () => {
  return (
    <section className="Services-section pt-5" id='services-section'>
      <h1 className='SectionTitle mt-5'>خدماتنا</h1>
      <p className='SectionDescribe'>من خلال حلول برمجية وتصميمات إبداعية، نقدم خدمات تطوير المواقع، كتابة المحتوى، والدعم الفني،<br/> لمساعدتكم على النمو والتفوق في مجالاتكم.</p>
      <div >
        <div className="row mb-3">
          {Services.map((feature, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-3 mt-3">
              <div className="feature-card text-center fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}>
                
        <lord-icon
  src={feature.img}
  trigger="loop"
  style={{ width: 70, height: 70 }}>
</lord-icon>

                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.desc}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
