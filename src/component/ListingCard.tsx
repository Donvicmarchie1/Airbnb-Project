import { AiFillHeart, AiOutlineHeart, AiFillStar } from 'react-icons/ai';
import { useToggle } from '../hooks/useToggle';
import type { ListingProp } from './Types';

function ListingCard({ location, date, price, rating, image, description }: ListingProp) {
  // my custom hook
  const [isFavorite, toggleFavorite] = useToggle(false);

  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        {/* IMAGE SECTION */}
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <img 
            className="object-cover h-full w-full group-hover:scale-110 transition duration-300" 
            src={image} 
            alt={location} 
          />
          {/* HEART ICON TOGGLE */}
          <div 
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(); // Calling the function from the custom hook
            }}
            className="absolute top-3 right-3 transition hover:scale-110 cursor-pointer"
          >
            {isFavorite ? (
              <AiFillHeart size={28} className="text-[#ff385c]" />
            ) : (
              <AiOutlineHeart size={28} className="text-gray-500 drop-shadow-md" />
            )}
          </div>
        </div>

        {/* LOCATION AND RATING */}
        <div className="font-semibold text-[15px] flex justify-between items-center">
          <span>{location}</span>
          <span className="flex items-center gap-1">
            <AiFillStar size={14} /> 
            {Number(rating).toFixed(1)}
          </span>
        </div>
        
        {/* DESCRIPTION */}
        <div className="font-light text-neutral-500 text-sm lin">
          {description}
        </div>

        <div className="font-light text-neutral-500 text-sm lin">
          {date}
        </div>

        {/* PRICE WITH UNDERLINE */}
        <div className="mt-1 flex items-baseline">
          <div className="border-b border-black pb-px hover:border-black/70 cursor-pointer transition">
            <span className="font-bold text-[#222222]">£{price}</span>
            <span className="ml-1 text-[#0c0b0b] font-normal">total</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;