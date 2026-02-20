import { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';
import { BsMap } from 'react-icons/bs';

function Footer() {
  const categories = [
    'Popular', 'Historic', 'Coastal', 'Islands', 'Lakes', 'Unique stays', 'Categories', 'Things to do'
  ];

  const [isMapVisible, setIsMapVisible] = useState(false);

  return (
    <footer className="bg-[#f7f7f7] border-t pt-12 pb-6 px-4 md:px-10 xl:px-20 mt-12 relative">
      
      {/* 1. INSPIRATION SECTION */}
      <div className="pb-12 border-b border-neutral-300">
        <h2 className="text-2xl font-semibold mb-4 text-[#222222]">Inspiration for future getaways</h2>
        <div className="flex gap-6 border-b text-sm font-medium text-neutral-500 mb-8 overflow-x-auto no-scrollbar">
          {categories.map((cat, index) => (
            <div 
              key={cat} 
              className={`pb-4 cursor-pointer whitespace-nowrap ${index === 0 ? 'border-b-2 border-black text-black' : 'hover:text-black hover:border-b-2 hover:border-neutral-300'}`}
            >
              {cat}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 text-sm">
          {[...Array(17)].map((_, i) => (
            <div key={i} className="cursor-pointer group">
              <p className="font-semibold text-[#222222]">Aberfeldy</p>
              <p className="text-neutral-500 font-light group-hover:underline">Holiday rentals</p>
            </div>
          ))}
          <div className="flex items-center gap-1 font-semibold cursor-pointer hover:underline">
            <span>Show more</span>
            <IoChevronDown size={14} />
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTEr */}
      <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="flex flex-col gap-3 text-sm font-light text-[#222222]">
            <li className="hover:underline cursor-pointer">Help Centre</li>
            <li className="hover:underline cursor-pointer">AirCover</li>
            <li className="hover:underline cursor-pointer">Anti-discrimination</li>
            <li className="hover:underline cursor-pointer">Disability support</li>
            <li className="hover:underline cursor-pointer">Cancellation options</li>
            <li className="hover:underline cursor-pointer">Report neighbourhood concern</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Hosting</h3>
          <ul className="flex flex-col gap-3 text-sm font-light text-[#222222]">
            <li className="hover:underline cursor-pointer">Airbnb your home</li>
            <li className="hover:underline cursor-pointer">AirCover for Hosts</li>
            <li className="hover:underline cursor-pointer">Hosting resources</li>
            <li className="hover:underline cursor-pointer">Community forum</li>
            <li className="hover:underline cursor-pointer">Hosting responsibly</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Airbnb</h3>
          <ul className="flex flex-col gap-3 text-sm font-light text-[#222222]">
            <li className="hover:underline cursor-pointer">Newsroom</li>
            <li className="hover:underline cursor-pointer">New features</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Investors</li>
            <li className="hover:underline cursor-pointer">Gift cards</li>
            <li className="hover:underline cursor-pointer">Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>

      {/* 3. IN-LINE MAP (Appears between Directory and Button) */}
      {isMapVisible && (
        <div className="w-full h-112.5 mb-8 rounded-xl overflow-hidden border border-neutral-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.1408783884474!2d7.065751535582139!3d6.22653345965903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043828d76ceaa25%3A0x3d486d52e1db9520!2sCosmila%20Suites%20and%20Hotels!5e0!3m2!1sen!2sng!4v1771537400253!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}

      {/* 4. THE MAP BUTTON - Exactly like your screenshot */}
      <div className="flex justify-center pb-8">
        <button 
          onClick={() => setIsMapVisible(!isMapVisible)}
          className="bg-[#222222] text-white px-5 py-3 rounded-full flex items-center gap-2 shadow-md hover:scale-105 transition active:scale-95 font-semibold text-[14px]"
        >
          {isMapVisible ? "Hide map" : "Show map"} <BsMap size={18} />
        </button>
      </div>

      {/* 5. BOTTOM BAR */}
      <div className="pt-6 border-t border-neutral-300 flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-[#222222]">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1">
          <span>© 2026 Airbnb, Inc.</span>
          <span>·</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span>·</span>
          <span className="hover:underline cursor-pointer">Terms</span>
          <span>·</span>
          <span className="hover:underline cursor-pointer">Sitemap</span>
           <span className="hover:underline cursor-pointer">UK Modern Slavery Act</span>
          <span>·</span>
          <span className="hover:underline cursor-pointer">Company details</span>
          </div>

        <div className="flex flex-row items-center gap-6 font-semibold">
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FiGlobe size={18} />
            <span>English (GB)</span>
          </div>
          <div className="cursor-pointer hover:underline">£ GBP</div>
          <div className="flex items-center gap-4">
            <FaFacebookSquare size={20} className="cursor-pointer" />
            <FaTwitterSquare size={20} className="cursor-pointer" />
            <FaInstagramSquare size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;