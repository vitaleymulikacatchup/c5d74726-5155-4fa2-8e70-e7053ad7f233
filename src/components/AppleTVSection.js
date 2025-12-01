import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const AppleTVSection = () => {
  const shouldReduce = useReducedMotion();

  const content = (
    <section className="apple-section bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://www.apple.com/tv-home/images/heroes/the_family_plan_2/hero_the_family_plan_2__dkgkx8x1kziq_large.jpg" 
          alt="The Family Plan 2" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 apple-container">
        <div className="max-w-2xl">
          <div className="mb-6">
            <svg className="w-12 h-8 text-white" viewBox="0 0 56 24" fill="currentColor">
              <path d="M7.8 4.8c-.4 0-.8.3-.8.8v12.8c0 .4.3.8.8.8h40.4c.4 0 .8-.3.8-.8V5.6c0-.4-.3-.8-.8-.8H7.8zm0-1.6h40.4c1.3 0 2.4 1.1 2.4 2.4v12.8c0 1.3-1.1 2.4-2.4 2.4H7.8c-1.3 0-2.4-1.1-2.4-2.4V5.6c0-1.3 1.1-2.4 2.4-2.4z"/>
              <path d="M28 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2-1.4-3.2-3.2-3.2zm0 5.6c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4z"/>
            </svg>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-4 text-yellow-400">THE FAMILY PLAN 2</h2>
          <p className="text-xl mb-8 text-gray-300">Comedy • Sam brings a new family</p>
          
          <div className="flex space-x-4">
            <button className="apple-button-primary">Watch now</button>
            <button className="apple-button-secondary">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );

  if (shouldReduce) {
    return content;
  }

  return (
    <motion.div {...fadeUpPreset(0.1, 1.0)}>
      {content}
    </motion.div>
  );
};

export default AppleTVSection;