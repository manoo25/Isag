
import FeaturesSection from "../Components/LandingComponents/Features/features";

import LandingNav from "../Components/LandingComponents/LandingNav";
import Footer from "../Components/LandingComponents/Footer";
import ScrollToTopButton from "../Components/LandingComponents/ScrollToTopButton";
import TestimonialsSection from "../Components/LandingComponents/TestimonialsSection";
import ServicesSection from "../Components/LandingComponents/ServicesComponent/Services";
import HeroSection from "../Components/LandingComponents/HeroSection/HeroSection";
import AboutSection from "../Components/LandingComponents/AboutContent/About";

function Landing() {
  // const { token, UserRole } = useSelector((state) => state.Token);

  return (
    <div className="overflow-x-hidden">
      <LandingNav  />
      <div className="px-4">
        <HeroSection  />
       
        <ServicesSection />
         <FeaturesSection />
          <AboutSection  />
        <TestimonialsSection />
      </div>
      <ScrollToTopButton />
      {/* {UserRole !== "admin" && <SupportChat />} */}
      <Footer/>
    </div>
  );
}

export default Landing;
