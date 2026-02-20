import { FaAirbnb, FaRegHeart, FaSearch } from 'react-icons/fa';
import profilePicture from "../assets/images/Profile photo.png"
import { FaMessage } from 'react-icons/fa6';

function MobileNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t py-3 px-8 flex justify-between items-center z-50">
      <div className="flex flex-col items-center gap-1 text-[#ff385c] cursor-pointer">
        <FaSearch size={20} />
        <span className="text-[10px] font-medium">Explore</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-500 cursor-pointer">
        <FaRegHeart size={20} />
        <span className="text-[10px] font-medium">Wishlists</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-500 cursor-pointer">
        <FaAirbnb size={22} />
        <span className="text-[10px] font-medium">Trips</span>
      </div>

      <div className="flex flex-col items-center gap-1 text-gray-300 cursor-pointer">
        <FaMessage size={22} />
        <span className="text-[10px] font-medium text-gray-500">Messages</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-500 cursor-pointer">
        <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-300">
           <img src={profilePicture} alt="profile" className="w-full h-full object-cover" />
        </div>
        <span className="text-[10px] font-medium">Profile</span>
      </div>
    </div>
  );
}

export default MobileNav;