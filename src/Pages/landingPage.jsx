
import FeaturesSection from "../Components/LandingComponents/Features/features";
import HeroSection from "../Components/LandingComponents/Hero";
import LandingNav from "../Components/LandingComponents/LandingNav";
import Footer from "../Components/LandingComponents/Footer";
import ScrollToTopButton from "../Components/LandingComponents/ScrollToTopButton";
import TestimonialsSection from "../Components/LandingComponents/TestimonialsSection";
import ServicesSection from "../Components/LandingComponents/ServicesComponent/Services";

function Landing() {
  // const { token, UserRole } = useSelector((state) => state.Token);

  return (
    <div className="overflow-x-hidden">
      <LandingNav  />
      <div className="px-4">
        <HeroSection  />
       
        <ServicesSection />
         <FeaturesSection />
          <HeroSection  />
        <TestimonialsSection />
      </div>
      <ScrollToTopButton />
      {/* {UserRole !== "admin" && <SupportChat />} */}
      <Footer/>
    </div>
  );
}

export default Landing;
