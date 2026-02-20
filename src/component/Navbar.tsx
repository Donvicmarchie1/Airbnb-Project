import { useState } from 'react';
import { FaAirbnb, FaSearch, FaBars} from 'react-icons/fa';
import { BiGlobe } from 'react-icons/bi';
import profilePicture from "../assets/images/Profile photo.png";

function Navbar({ onOpenLogin }: { onOpenLogin: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="fixed w-full bg-white z-50 border-b py-3 px-4 md:px-10 xl:px-20 flex flex-row items-center justify-between gap-2">
        {/* 1. LOGO */}
        <div className="flex items-center gap-1 text-[#ff385c] font-bold text-xl md:text-2xl cursor-pointer shrink-0">
          <FaAirbnb size={28} className="md:size-8" />
          <span className="hidden lg:block">airbnb</span>
        </div>

        {/* 2. SEARCH BAR*/}
        <div className="flex-1 md:flex-none border rounded-full py-2 px-3 md:px-4 shadow-sm hover:shadow-md transition cursor-pointer flex flex-row items-center justify-between gap-2 text-xs md:text-sm min-w-0">
          <div className="flex flex-col md:flex-row items-start md:items-center truncate px-1">
            <span className="font-semibold truncate">Anywhere</span>
            <span className="hidden sm:inline-block sm:px-2 text-gray-400">|</span>
            <span className="hidden sm:block font-semibold">Any week</span>
            <span className="sm:hidden text-gray-500 text-[10px] truncate">Any week • Add guests</span>
          </div>
          
          <div className="p-2 bg-[#ff385c] rounded-full text-white shrink-0">
            <FaSearch size={10} className="md:size-3" />
          </div>
        </div>

        {/* 3. USER MENU */}
        <div className="flex flex-row items-center gap-1 md:gap-2 shrink-0">
          <div className="hidden md:block text-[14px] font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 cursor-pointer">
            Airbnb your home
          </div>
          <div className="hidden sm:block p-2 md:p-3 hover:bg-neutral-100 rounded-full cursor-pointer">
            <BiGlobe size={18} />
          </div>
          
          <div className="relative">
            <div 
              onClick={() => setIsOpen(!isOpen)} 
              className="flex items-center gap-2 md:gap-3 border border-neutral-200 p-1 md:py-1 md:px-2 rounded-full cursor-pointer hover:shadow-md transition"
            >
              <FaBars size={14} className="ml-1 md:size-4" />
              <div className="relative w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden shrink-0">
                <img src={profilePicture} alt="Profile" className="w-full h-full object-cover"/>
              </div>
              
              


            </div>

            {/* Red Notification Dot */}
              <div className="absolute -top-0.5 -right-0.5 bg-[#ff385c] w-3 h-3 rounded-full border-2 border-white">
              </div>

            {/* DROPDOWN MENU */}
          {isOpen && (
            <div className="absolute right-0 top-12 w-60 bg-white rounded-xl shadow-[0_3px_12px_rgba(0,0,0,0.15)] border border-neutral-100 overflow-hidden text-sm flex flex-col z-50">
              {/* Section 1: Bold items */}
              <div className="flex flex-col py-2">
                <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">Messages</div>
                <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">Trips</div>
                <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">Wishlist</div>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 2: Account items */}
              <div className="flex flex-col py-2">
                <div className="px-4 py-3 hover:bg-neutral-100 transition font-normal cursor-pointer">Manage listings</div>
                <div className="px-4 py-3 hover:bg-neutral-100 transition font-normal cursor-pointer">Account</div>
              </div>

              <hr className="border-neutral-200" />

              {/* Section 3: Support and Logout */}
              <div className="flex flex-col py-2">
                <div className="px-4 py-3 hover:bg-neutral-100 transition font-normal cursor-pointer">Help centre</div>
                <button
      onClick={() => {
        setIsOpen(false);    // 1. Close the dropdown
        onOpenLogin();       // 2. Show the modal
      }}
      className="px-4 py-3 text-left hover:bg-neutral-100 text-red-600 font-medium w-full"
    >
      Log out
    </button>
              </div>
            </div>
          )}


          </div>
        </div>
      </nav>
  );
}

export default Navbar;