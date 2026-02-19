import { FiSearch, FiHeart, FiUser } from 'react-icons/fi';
import { FaAirbnb, FaRegHeart, FaSearch} from 'react-icons/fa';
import profilePicture from "../assets/images/Profile photo.png"

function MobileNav() {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t md:hidden px-8 py-3 z-50">
      <div className="flex flex-row items-center justify-between text-neutral-500">
        <div className="flex flex-col items-center gap-1 text-[#ff385c]">
          <FiSearch size={24} />
          <span className="text-[10px]">Explore</span>
        </div>
        <div className="flex flex-col items-center gap-1 hover:text-black cursor-pointer">
          <FiHeart size={24} />
          <span className="text-[10px]">Wishlists</span>
        </div>
        <div className="flex flex-col items-center gap-1 hover:text-black cursor-pointer">
          <FaAirbnb size={24} />
          <span className="text-[10px]">Trips</span>
        </div>
        <div className="flex flex-col items-center gap-1 hover:text-black cursor-pointer">
          <FiUser size={24} />
          <span className="text-[10px]">Log in</span>
        </div>
      </div>
    </div>
);

{/* --- MOBILE BOTTOM NAVIGATION --- */}
return(
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
            <div className="flex flex-col items-center gap-1 text-gray-500 cursor-pointer">
              <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-300">
                 <img src={profilePicture} alt="profile" className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-medium">Log in</span>
            </div>
          </div>
)

}

export default MobileNav;