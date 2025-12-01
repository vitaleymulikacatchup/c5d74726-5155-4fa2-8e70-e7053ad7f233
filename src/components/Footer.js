import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop and Learn',
      links: [
        'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 
        'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'
      ]
    },
    {
      title: 'Apple Wallet',
      links: [
        'Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'
      ]
    },
    {
      title: 'Account',
      links: [
        'Manage Your Apple Account', 'Apple Store Account', 'iCloud.com'
      ]
    },
    {
      title: 'Entertainment',
      links: [
        'Apple One', 'Apple TV', 'Apple Music', 'Apple Arcade', 
        'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store'
      ]
    },
    {
      title: 'Apple Store',
      links: [
        'Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 
        'Apple Camp', 'Apple Store App', 'Certified Refurbished', 
        'Apple Trade In', 'Financing', 'Carrier Deals at Apple', 
        'Order Status', 'Shopping Help'
      ]
    },
    {
      title: 'For Business',
      links: [
        'Apple and Business', 'Shop for Business'
      ]
    },
    {
      title: 'For Education',
      links: [
        'Apple and Education', 'Shop for K-12', 'Shop for College'
      ]
    },
    {
      title: 'For Healthcare',
      links: [
        'Apple and Healthcare'
      ]
    },
    {
      title: 'For Government',
      links: [
        'Apple and Government', 'Shop for Veterans and Military', 
        'Shop for State and Local Employees', 'Shop for Federal Employees'
      ]
    },
    {
      title: 'Apple Values',
      links: [
        'Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 
        'Privacy', 'Racial Equity and Justice', 'Supply Chain Innovation'
      ]
    },
    {
      title: 'About Apple',
      links: [
        'Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 
        'Ethics and Compliance', 'Events', 'Contact Apple'
      ]
    }
  ];

  return (
    <footer className="bg-apple-light-gray text-apple-dark-gray">
      <div className="apple-container py-12">
        {/* Disclaimer Text */}
        <div className="text-xs leading-relaxed mb-8 max-w-6xl">
          <p className="mb-4">
            * Offer available on qualifying purchases of Eligible Products from November 29, 2024, to December 2, 2024, at a qualifying location. 
            Gift card values may vary by Eligible Product. Offer subject to availability. While supplies last. Qualifying purchases can receive a discount equal to the value of the 
            Apple Gift Card (depending on their purchase) off the price of the Eligible Product, but will be charged for all items in their cart, including the Apple Gift Card. Additional 
            restrictions apply. View full terms and conditions of offer here.
          </p>
          <p className="mb-4">
            ◊ Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least the age of 
            majority to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. 
            Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new 
            device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary 
            between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse, cancel, or limit quantity of any 
            trade-in transaction for any reason. More details are available from Apple's trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
          </p>
          <p className="mb-4">
            To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the 
            latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, 
            Salt Lake City Branch.
          </p>
          <p className="mb-4">
            Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor 
            Apple Payments Services LLC is a bank.
          </p>
          <p className="mb-4">
            If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
          </p>
          <p className="mb-4">
            Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218
          </p>
          <p className="mb-4">
            A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV.
          </p>
          <p>
            Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-black mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-xs hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-xs">
              <p className="mb-2">
                More ways to shop: <a href="#" className="text-apple-blue hover:underline">Find an Apple Store</a> or <a href="#" className="text-apple-blue hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE (1-800-692-7753).
              </p>
            </div>
            
            <div className="text-xs">
              <span>United States</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 space-y-4 md:space-y-0">
            <div className="text-xs">
              <span>Copyright © 2025 Apple Inc. All rights reserved.</span>
            </div>
            
            <div className="flex flex-wrap space-x-4 text-xs">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Sales and Refunds</a>
              <a href="#" className="hover:underline">Legal</a>
              <a href="#" className="hover:underline">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;