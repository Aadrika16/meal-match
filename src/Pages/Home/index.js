import React from 'react';
import Navbar from '../../component/Navbar';
import MealMatchPopup from '../../component/MealMatchPopup';
import Hero from '../../component/Hero';
import HowYourMatchWorks from '../../component/HowYourMatchWorks';
import WhyMatch from '../../component/WhyMatch';
import SmoothiesSection from '../../component/SmoothiesSection';
import Salads from '../../component/Salads';
import ToastAndSandwiches from '../../component/ToastAndSandwiches';
import WrapsSection from '../../component/WrapsSection';
import MealMatchSection from '../../component/MealMatchSection';
import NutritionTransparency from '../../component/NutritionTransparency';
import GoalBasedPlans from '../../component/GoalBasedPlans';
import TrustSection from '../../component/TrustSection';
import FaqSection from '../../component/FaqSection';
import CtaBanner from '../../component/CtaBanner';
import Footer from '../../component/Footer';

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <MealMatchPopup />
      <Hero />
      <HowYourMatchWorks />
      <WhyMatch />
      <SmoothiesSection />
      <Salads />
      <ToastAndSandwiches />
      <WrapsSection />
      <MealMatchSection />
      <NutritionTransparency />
      <GoalBasedPlans />
      <TrustSection />
      <FaqSection />
      <CtaBanner />
      <Footer />
    </div>
  );
}