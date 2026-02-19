import { FiGlobe } from 'react-icons/fi';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';
import { BsMap } from 'react-icons/bs';

function Footer() {
  const categories = [
    'Popular', 'Historic', 'Coastal', 'Islands', 'Lakes', 'Unique stays', 'Categories', 'Things to do'
  ];

  return (
    <footer className="bg-[#f7f7f7] border-t pt-12 pb-6 px-4 md:px-10 xl:px-20 mt-12">

        {/* 1. THE MAP BUTTON - Now inside the footer at the top */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <button className="bg-[#222222] text-white px-5 py-3 rounded-full flex items-center gap-2 shadow-xl hover:scale-105 transition active:scale-95 font-semibold text-[14px]">
          Show map <BsMap size={18} />
        </button>
      </div>


      {/* 1. Inspiration Section */}
      <div className="pb-12 border-b border-neutral-300">
        <h2 className="text-2xl font-semibold mb-4 text-[#222222]">Inspiration for future getaways</h2>
        
       
        {/* Category Tabs */}
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


        {/* Location Grid */}
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



      {/* 2. Main Footer Directory */}
      <div className="py-12 grid grid-cols-1 md:grid-cols-3 border-b border-neutral-300 gap-10">
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

      {/* 3. Bottom Bar */}
      <div className="pt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-[#222222]">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1">
          <span>© 2026 Airbnb, Inc.</span>
          <span>·</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span>·</span>
          <span className="hover:underline cursor-pointer">Terms</span>
          <span>·</span>
          <span className="hover:underline cursor-pointer">Sitemap</span>
          <span>·</span>
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