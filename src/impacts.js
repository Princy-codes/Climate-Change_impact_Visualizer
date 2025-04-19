import React, { useEffect, useState } from "react";
import "./impacts.css";
import FutureDisasters from "./FutureDisasters.js";
import Navbar from "./navbar.js";
import AOS from "aos";
import "aos/dist/aos.css";

// Reusable ImpactCard component with solution dropdown
const ImpactCard = ({ imageSrc, title, description, solution }) => {
  const [showSolution, setShowSolution] = useState(false);

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  return (
    <div className="impact-card" data-aos="fade-up" data-aos-duration="1200">
      <img src={imageSrc} alt={title} className="impact-image" />
      <div className="impact-text">
        <h3>{title}<br /></h3>
        <p>{description}</p>

        {solution && (
          <div className="solution-container">
            <button className="toggle-button" onClick={toggleSolution}>
              {showSolution ? "Hide Solution" : "Show Solution"}
            </button>
            <div
              className={`solution-content ${
                showSolution ? "solution-visible" : ""
              }`}
            >
              <p>{solution}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Impacts section
const Impacts = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="impacts-container">
        <h2 className="impacts-heading" data-aos="fade-right" data-aos-duration="1500">
          Impacts Due to Climate Change and Real Facts!
        </h2>

        <div className="impacts-grid">
          <ImpactCard
            imageSrc="\images\Mumbai3.webp"
            title="Rising Sea Levels"
            description="Do you know? If current sea-level rise and extreme rainfall trends continue, large parts of Mumbai could be submerged by 2035, especially low-lying areas like Worli, Bandra, and parts of South Mumbai"
            solution={`🌱 Develop extensive coastal defense infrastructure (like sea walls and mangrove restoration).\n🏘 Enforce stricter urban planning rules to avoid construction in high-risk zones.\n🚇 Upgrade drainage systems to handle high-intensity rainfall.`} />
          <ImpactCard
            imageSrc="\images\rajasthan.jpg"
            title="Extreme Heatwaves – Rajasthan"
            description="By 2030, extreme heatwaves in Rajasthan could exceed 50°C for prolonged periods, making it uninhabitable for outdoor labor and increasing water scarcity."
            solution={`🏜 Implement large-scale desert afforestation projects.\n🏠 Design climate-smart housing with better insulation.\n💧 Promote rainwater harvesting and solar-powered cooling systems.`} />
          <ImpactCard
            imageSrc="\images\punjab.jpeg.jpg"
            title="Agricultural Stress – Punjab"
            description="By 2040, crop yields in Punjab could decrease by up to 30–40% due to rising temperatures and erratic rainfall, directly affecting India's food security."
            solution={`🚜 Shift to climate-resilient crops like millet and pulses.\n💧 Promote sustainable farming techniques like drip irrigation.\n🔬 Invest in agri-tech innovations for early disease and drought detection.`} />
          <ImpactCard
            imageSrc="\images\Australia.jpg"
            title="Bushfire Crisis – Australia"
            description="If temperatures and dry conditions continue to rise, Australia could face annual mega-fires by 2050, threatening ecosystems, cities like Sydney and Melbourne, and causing severe air pollution and biodiversity collapse."
            solution={`🌱 Integrate Indigenous fire management techniques to reduce wildfire intensity.\n⚡ Transition rapidly to renewable energy and phase out coal exports.\n🧯 Strengthen national disaster response and forest management strategies.`} />
          <ImpactCard
            imageSrc="\images\greenland1.jpg"
            title="Melting Ice Sheets – Greenland"
            description="If the Greenland ice sheet continues melting at the current rate, it could cause over 25 cm sea level rise by 2100, endangering entire coastal cities worldwide including in India, Bangladesh, and the Netherlands."
            solution={`⚡ Globally shift to 100% renewable energy by 2050.\n🌍 Enforce international climate treaties with strict carbon caps.\n🧊 Fund research and deployment of carbon-capture and geoengineering technologies.`} />
          <ImpactCard
            imageSrc="\images\odisha.jpeg.jpg"
            title="Cyclones & Displacement – Odisha"
            description="By 2035, Odisha could face more than 5 major cyclones per year, devastating coastal villages and causing mass displacement."
            solution={`🏗 Construct cyclone-resilient shelters and housing.\n📢 Establish real-time evacuation alert systems.\n🔄 Create livelihood alternatives for at-risk coastal communities.`} />
        </div>

        <FutureDisasters />
      </div>
    </>
  );
};

export default Impacts;
