import React from 'react';
import { ArrowRight } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-apple-gray text-white py-3 text-center text-sm">
      <div className="apple-container">
        <p className="flex items-center justify-center space-x-2">
          <span>For every Apple Pay purchase made at Apple, we're donating $5 to the Global Fund's fight against AIDS. Through 12/7.</span>
          <a href="#" className="text-apple-blue hover:underline inline-flex items-center space-x-1">
            <span>Shop</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;