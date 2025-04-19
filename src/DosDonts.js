import React, { useEffect } from 'react';
import './DosDonts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

import {
  FaRecycle, FaCar, FaTree, FaTrash, FaLeaf, FaIndustry, FaLightbulb, FaWater,
  FaPlug, FaWind, FaBicycle, FaSolarPanel, FaCloudSun, FaBusAlt
} from 'react-icons/fa';
import Navbar from './navbar';

const ClimateDosDonts = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <><Navbar />
    <div className="climate-container">
          <header className="climate-header">
              <h1 data-aos="fade-down">🌍 Do's and Don'ts to Combat Climate Change 🌿</h1>
              <p data-aos="fade-up">Let’s protect our planet with responsible choices and conscious actions.</p>
          </header>

          {/* DO SECTION */}
          <section className="do-section" data-aos="fade-right">
              <h2><FaLeaf /> What You Should Do</h2>
              <div className="cards" >
                  {/* Row 1 */}
                  <motion.div className="card" whileHover={{ scale: 1.05 }} style={{maxHeight: '420px'}}>
                      <h3>Problem: Excessive use of plastic</h3>
                      <p>Example: Plastic bottles litter beaches and oceans.</p>
                      <h4>✅ Do: Use reusable bottles & bags</h4>
                      <p><FaRecycle /> San Francisco banned plastic bags and promoted reusable items.</p>
                  </motion.div>

                  <motion.div className="card" whileHover={{ scale: 1.05 }} style={{maxHeight: '420px'}}>
                      <h3>Problem: Air pollution from vehicles</h3>
                      <p>Example: Delhi faces smog during winters.</p>
                      <h4>✅ Do: Carpool or use public transport</h4>
                      <p><FaCar /> Delhi’s Odd-Even rule helped reduce emissions.</p>
                  </motion.div>

                  <motion.div className="card" whileHover={{ scale: 1.05 }} style={{maxHeight: '420px'}}>
                      <h3>Problem: Deforestation</h3>
                      <p>Example: Amazon rainforests are vanishing.</p>
                      <h4>✅ Do: Plant trees & support reforestation</h4>
                      <p><FaTree /> "Green India Mission" planted millions of trees.</p>
                  </motion.div>

                  <motion.div className="card" whileHover={{ scale: 1.05 }}style={{maxHeight: '420px'}}>
                      <h3>Problem: Excessive water use</h3>
                      <p>Example: Cape Town nearly ran out of water in 2018.</p>
                      <h4>✅ Do: Use water-saving fixtures & habits</h4>
                      <p><FaWater /> Reuse greywater, fix leaks, and harvest rainwater.</p>
                  </motion.div>

                  {/* Row 2 */}
                  <motion.div className="card" whileHover={{ scale: 1.05 }}style={{maxHeight: '420px'}}>
                      <h3>Problem: High energy consumption</h3>
                      <p>Example: Peak-hour energy usage strains the grid.</p>
                      <h4>✅ Do: Use energy-efficient appliances</h4>
                      <p><FaLightbulb /> Switch to LED bulbs and Energy Star products.</p>
                  </motion.div>

                  <motion.div className="card" whileHover={{ scale: 1.05 }}style={{maxHeight: '420px'}}>
                      <h3>Problem: Dirty energy sources</h3>
                      <p>Example: Coal plants emit large amounts of CO₂.</p>
                      <h4>✅ Do: Shift to renewable energy</h4>
                      <p><FaWind /> Support wind, solar, and hydropower initiatives.</p>
                  </motion.div>

                  <motion.div className="card" whileHover={{ scale: 1.05 }}style={{maxHeight: '420px'}}>
                      <h3>Problem: Carbon footprint from travel</h3>
                      <p>Example: Short-distance car use increases emissions.</p>
                      <h4>✅ Do: Walk, cycle or take a bus</h4>
                      <p><FaBicycle /> Copenhagen encourages cycling culture citywide.</p>
                  </motion.div>

                  <motion.div className="card" whileHover={{ scale: 1.05 }}style={{maxHeight: '420px'}}>
                      <h3>Problem: Lack of solar adoption</h3>
                      <p>Example: Homes still rely on fossil-fuel energy grids.</p>
                      <h4>✅ Do: Install solar panels</h4>
                      <p><FaSolarPanel /> Germany leads the world in home solar installations.</p>
                  </motion.div>
              </div>
          </section>

          {/* DON'T SECTION */}
          <section className="dont-section" data-aos="fade-left">
              <h2><FaTrash /> What You Should Avoid</h2>
              <div className="cards">
                  {/* Row 1 */}
                  <motion.div className="card dont" whileHover={{ scale: 1.05 }}>
                      <h3>🚫 Don’t burn garbage or leaves</h3>
                      <p>It releases harmful gases and smog.</p>
                      <p><strong>Example:</strong> Major cause of North India's winter pollution.</p>
                  </motion.div>

                  <motion.div className="card dont" whileHover={{ scale: 1.05 }}>
                      <h3>🚫 Don’t waste electricity</h3>
                      <p>Unplug devices when not in use.</p>
                      <p><strong>Example:</strong> Inactive devices add to carbon emissions.</p>
                  </motion.div>

                  <motion.div className="card dont" whileHover={{ scale: 1.05 }}>
                      <h3>🚫 Don’t support harmful industries</h3>
                      <p>Promotes unsustainable practices and CO₂ emissions.</p>
                      <p><strong>Example:</strong> Avoid fast fashion and high-emission industries.</p>
                  </motion.div>

                  <motion.div className="card dont" whileHover={{ scale: 1.05 }}>
                      <h3>🚫 Don’t overuse water</h3>
                      <p>Depletes groundwater and worsens droughts.</p>
                      <p><strong>Example:</strong> Lawn overwatering during summers increases crisis risk.</p>
                  </motion.div>

                  {/* Row 2 */}
                  <motion.div className="card dont" whileHover={{ scale: 1.05 }}>
                      <h3>🚫 Don’t keep devices on standby</h3>
                      <p>Consumes phantom energy unnecessarily.</p>
                      <p><strong>Example:</strong> TVs and microwaves left plugged in waste power.</p>
                  </motion.div>

                  <motion.div className="card dont" whileHover={{ scale: 1.05 }}>
                      <h3>🚫 Don’t litter in public spaces</h3>
                      <p>Pollutes land and blocks drainage systems.</p>
                      <p><strong>Example:</strong> Mumbai's 2017 floods worsened by plastic waste.</p>
                  </motion.div>

                  <motion.div className="card dont" whileHover={{ scale: 1.05 }}>
                      <h3>🚫 Don’t ignore climate education</h3>
                      <p>Lack of awareness delays global action.</p>
                      <p><strong>Example:</strong> Climate denial slowed progress in some countries.</p>
                  </motion.div>

                  <motion.div className="card dont" whileHover={{ scale: 1.05 }}>
                      <h3>🚫 Don’t leave lights on unnecessarily</h3>
                      <p>Wastes electricity and heats up cities.</p>
                      <p><strong>Example:</strong> Light pollution also affects urban biodiversity.</p>
                  </motion.div>
              </div>
          </section>

          <footer className="climate-footer" data-aos="zoom-in">
              <h2 style={{ color: 'black' }}>🌊 Every action counts – start today to secure tomorrow 🌤️</h2>
          </footer>
      </div></>
  );
};

export default ClimateDosDonts;
