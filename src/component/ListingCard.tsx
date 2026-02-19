import { AiFillHeart, AiOutlineHeart, AiFillStar } from 'react-icons/ai';
import { useState } from 'react';
import type { ListingProp } from './Types';


function ListingCard({ location, price, rating, image, description }: ListingProp) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">

        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <img 
            className="object-cover h-full w-full group-hover:scale-110 transition duration-300" 
            src={image} 
            alt={location} 
          />
          <div 
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-3 right-3 transition hover:scale-110 cursor-pointer"
          >
            {isFavorite ? (
              <AiFillHeart size={28} className="text-[#ff385c]" />
            ) : (
              <AiOutlineHeart size={28} className="text-white drop-shadow-md" />
            )}
          </div>
        </div>

        <div className="font-semibold text-[15px] flex justify-between items-center">
          <span>{location}</span>
          <span className="flex items-center gap-1 font-light"><AiFillStar size={14} /> {rating}</span>
        </div>
        
        <div className="font-light text-neutral-500 text-sm">{description}</div>

        <div className="flex flex-row items-center gap-1 text-sm mt-1 underline">
          <span className="font-semibold">${price}</span>
          <span className="font-light text-neutral-600">total</span>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;