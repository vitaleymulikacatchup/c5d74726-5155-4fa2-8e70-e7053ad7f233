import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const ProductCard = ({ title, subtitle, buttonText, buttonStyle, bgColor, textColor, delay = 0 }) => {
  const shouldReduce = useReducedMotion();
  
  const content = (
    <div className={`${bgColor} ${textColor} rounded-2xl p-8 md:p-12 h-full flex flex-col justify-between min-h-[400px]`}>
      <div>
        <h3 className="apple-text-medium mb-2">{title}</h3>
        <p className="apple-text-small opacity-80 mb-6">{subtitle}</p>
      </div>
      <div className="flex space-x-4">
        <button className={buttonStyle}>{buttonText}</button>
        <button className="apple-button-secondary">Learn more</button>
      </div>
    </div>
  );

  if (shouldReduce) {
    return content;
  }

  return (
    <motion.div {...fadeUpPreset(delay, 1.0)}>
      {content}
    </motion.div>
  );
};

const ProductGrid = () => {
  const shouldReduce = useReducedMotion();

  const iPhoneSection = (
    <section className="apple-section bg-apple-light-gray">
      <div className="apple-container">
        <div className="text-center mb-12">
          <h2 className="apple-text-large text-apple-gray mb-4">iPhone</h2>
          <p className="apple-text-small text-apple-dark-gray mb-8">Say hello to the latest generation of iPhone.</p>
          <div className="flex justify-center space-x-4">
            <button className="apple-button-primary">Learn more</button>
            <button className="apple-button-secondary">Shop iPhone</button>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <img 
              src="https://www.apple.com/v/iphone/home/bx/images/overview/hero/iphone_15_pro__i6vhkx8qj2qa_large.jpg" 
              alt="iPhone 15 Pro models" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );

  const giftSection = (
    <section className="apple-section bg-white">
      <div className="apple-container text-center">
        <div className="mb-8">
          <div className="inline-block w-16 h-20 bg-gradient-to-br from-blue-400 via-orange-400 to-pink-500 rounded-2xl relative mb-6">
            <svg className="absolute inset-0 w-full h-full text-white p-3" viewBox="0 0 14 18" fill="currentColor">
              <path d="M12.5 8.5c0-1.4.7-2.7 1.8-3.4-.7-1-1.8-1.6-3-1.6-1.3 0-2.4.8-3 .8s-1.8-.8-3-.8c-2.2 0-4.2 1.8-4.2 5.3 0 2.1.8 4.3 1.8 5.7.9 1.2 1.7 2.2 3 2.2 1.2 0 1.6-.8 3.1-.8 1.5 0 1.8.8 3.1.8 1.3 0 2.2-1.1 3-2.2.6-.8 1-1.7 1.2-2.6-1.3-.6-2.1-1.9-2.1-3.4z" />
              <path d="M8.7 4.5c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.7-.9 1.6-.8 2.6.9 0 1.8-.5 2.4-1.2z" />
            </svg>
          </div>
        </div>
        <h2 className="apple-text-large text-apple-gray mb-4">Give something special.</h2>
        <p className="apple-text-small text-apple-dark-gray mb-8">Find what they've been waiting for all year.</p>
        <button className="apple-button-primary">Shop gifts</button>
      </div>
    </section>
  );

  const productsGrid = (
    <section className="apple-section bg-apple-light-gray">
      <div className="apple-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProductCard
            title="iPad Air"
            subtitle="New supercharged by the M2 chip."
            buttonText="Learn more"
            buttonStyle="apple-button-primary"
            bgColor="bg-gradient-to-br from-blue-100 to-blue-200"
            textColor="text-apple-gray"
            delay={0.1}
          />
          
          <ProductCard
            title="AirPods Pro 3"
            subtitle="A new world of sound with Active Noise Cancellation."
            buttonText="Learn more"
            buttonStyle="apple-button-primary"
            bgColor="bg-white"
            textColor="text-apple-gray"
            delay={0.2}
          />
          
          <ProductCard
            title="WATCH SERIES 11"
            subtitle="The ultimate way to watch your health."
            buttonText="Learn more"
            buttonStyle="apple-button-primary"
            bgColor="bg-white"
            textColor="text-apple-gray"
            delay={0.3}
          />
          
          <ProductCard
            title="iPad"
            subtitle="Now with the speed of the A16 chip and double the working storage."
            buttonText="Learn more"
            buttonStyle="apple-button-primary"
            bgColor="bg-white"
            textColor="text-apple-gray"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );

  const servicesGrid = (
    <section className="apple-section bg-white">
      <div className="apple-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProductCard
            title="Trade In"
            subtitle="Get up to $800-$970 in credit when you trade in iPhone 13 or higher.*"
            buttonText="Get your estimate"
            buttonStyle="apple-button-primary"
            bgColor="bg-apple-light-gray"
            textColor="text-apple-gray"
            delay={0.1}
          />
          
          <ProductCard
            title="Card"
            subtitle="Get up to 3% Daily Cash back with every purchase."
            buttonText="Learn more"
            buttonStyle="apple-button-primary"
            bgColor="bg-apple-light-gray"
            textColor="text-apple-gray"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );

  if (shouldReduce) {
    return (
      <>
        {iPhoneSection}
        {giftSection}
        {productsGrid}
        {servicesGrid}
      </>
    );
  }

  return (
    <>
      <motion.div {...fadeUpPreset(0.1, 1.0)}>
        {iPhoneSection}
      </motion.div>
      <motion.div {...fadeUpPreset(0.2, 1.1)}>
        {giftSection}
      </motion.div>
      <motion.div {...fadeUpPreset(0.3, 1.2)}>
        {productsGrid}
      </motion.div>
      <motion.div {...fadeUpPreset(0.4, 1.0)}>
        {servicesGrid}
      </motion.div>
    </>
  );
};

export default ProductGrid;