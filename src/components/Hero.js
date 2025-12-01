import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Hero = () => {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return (
      <section className="relative min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Floating Icons */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-green-400 rounded-lg transform rotate-12 opacity-80"></div>
          <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-red-400 rounded-full opacity-70"></div>
          <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-purple-400 rounded-lg transform -rotate-12 opacity-60"></div>
          <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-yellow-400 rounded-full opacity-50"></div>
          <div className="absolute bottom-1/4 right-1/5 w-14 h-10 bg-orange-400 rounded-lg transform rotate-6 opacity-75"></div>
          
          {/* Stars */}
          <div className="absolute top-1/5 left-1/5 w-1 h-1 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-2/3 left-1/6 w-1 h-1 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-white rounded-full opacity-70"></div>
          <div className="absolute bottom-1/5 left-2/3 w-1 h-1 bg-white rounded-full opacity-50"></div>
        </div>

        <div className="relative z-10 text-center apple-container">
          {/* Apple Logo */}
          <div className="mb-8">
            <div className="inline-block w-20 h-24 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl relative">
              <svg className="absolute inset-0 w-full h-full text-white p-4" viewBox="0 0 14 18" fill="currentColor">
                <path d="M12.5 8.5c0-1.4.7-2.7 1.8-3.4-.7-1-1.8-1.6-3-1.6-1.3 0-2.4.8-3 .8s-1.8-.8-3-.8c-2.2 0-4.2 1.8-4.2 5.3 0 2.1.8 4.3 1.8 5.7.9 1.2 1.7 2.2 3 2.2 1.2 0 1.6-.8 3.1-.8 1.5 0 1.8.8 3.1.8 1.3 0 2.2-1.1 3-2.2.6-.8 1-1.7 1.2-2.6-1.3-.6-2.1-1.9-2.1-3.4z" />
                <path d="M8.7 4.5c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.7-.9 1.6-.8 2.6.9 0 1.8-.5 2.4-1.2z" />
              </svg>
            </div>
          </div>

          <h1 className="apple-text-large mb-4">The Apple Store Shopping Event</h1>
          <p className="apple-text-small text-gray-300 mb-8 max-w-2xl mx-auto">
            Ends tonight. Get an Apple Gift Card with an eligible purchase.*
          </p>
          
          <button className="apple-button-primary">
            Shop
          </button>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      {...fadeUpPreset(0.1, 0.8)}
      className="relative min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0">
        <motion.div 
          {...fadeUpPreset(0.3, 1.0)}
          className="absolute top-1/4 left-1/4 w-12 h-12 bg-green-400 rounded-lg transform rotate-12 opacity-80"
        ></motion.div>
        <motion.div 
          {...fadeUpPreset(0.4, 1.1)}
          className="absolute top-1/3 right-1/4 w-10 h-10 bg-red-400 rounded-full opacity-70"
        ></motion.div>
        <motion.div 
          {...fadeUpPreset(0.5, 1.2)}
          className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-purple-400 rounded-lg transform -rotate-12 opacity-60"
        ></motion.div>
        <motion.div 
          {...fadeUpPreset(0.6, 1.0)}
          className="absolute top-1/2 right-1/3 w-6 h-6 bg-yellow-400 rounded-full opacity-50"
        ></motion.div>
        <motion.div 
          {...fadeUpPreset(0.7, 1.3)}
          className="absolute bottom-1/4 right-1/5 w-14 h-10 bg-orange-400 rounded-lg transform rotate-6 opacity-75"
        ></motion.div>
        
        {/* Stars */}
        <motion.div 
          {...fadeUpPreset(0.8, 0.8)}
          className="absolute top-1/5 left-1/5 w-1 h-1 bg-white rounded-full opacity-80"
        ></motion.div>
        <motion.div 
          {...fadeUpPreset(0.9, 0.9)}
          className="absolute top-2/3 left-1/6 w-1 h-1 bg-white rounded-full opacity-60"
        ></motion.div>
        <motion.div 
          {...fadeUpPreset(1.0, 1.0)}
          className="absolute top-1/6 right-1/3 w-1 h-1 bg-white rounded-full opacity-70"
        ></motion.div>
        <motion.div 
          {...fadeUpPreset(1.1, 0.7)}
          className="absolute bottom-1/5 left-2/3 w-1 h-1 bg-white rounded-full opacity-50"
        ></motion.div>
      </div>

      <div className="relative z-10 text-center apple-container">
        {/* Apple Logo */}
        <motion.div {...fadeUpPreset(0.2, 1.0)} className="mb-8">
          <div className="inline-block w-20 h-24 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl relative">
            <svg className="absolute inset-0 w-full h-full text-white p-4" viewBox="0 0 14 18" fill="currentColor">
              <path d="M12.5 8.5c0-1.4.7-2.7 1.8-3.4-.7-1-1.8-1.6-3-1.6-1.3 0-2.4.8-3 .8s-1.8-.8-3-.8c-2.2 0-4.2 1.8-4.2 5.3 0 2.1.8 4.3 1.8 5.7.9 1.2 1.7 2.2 3 2.2 1.2 0 1.6-.8 3.1-.8 1.5 0 1.8.8 3.1.8 1.3 0 2.2-1.1 3-2.2.6-.8 1-1.7 1.2-2.6-1.3-.6-2.1-1.9-2.1-3.4z" />
              <path d="M8.7 4.5c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.7-.9 1.6-.8 2.6.9 0 1.8-.5 2.4-1.2z" />
            </svg>
          </div>
        </motion.div>

        <motion.h1 {...fadeUpPreset(0.3, 1.1)} className="apple-text-large mb-4">
          The Apple Store Shopping Event
        </motion.h1>
        <motion.p {...fadeUpPreset(0.4, 1.2)} className="apple-text-small text-gray-300 mb-8 max-w-2xl mx-auto">
          Ends tonight. Get an Apple Gift Card with an eligible purchase.*
        </motion.p>
        
        <motion.button {...fadeUpPreset(0.5, 1.0)} className="apple-button-primary">
          Shop
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;