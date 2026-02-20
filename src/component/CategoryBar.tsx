import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { MdOutlineChevronRight, MdOutlineChevronLeft} from 'react-icons/md';
import filterIcon from "../assets/icons/filter.svg"
import {TbPool,TbUfo } from 'react-icons/tb';
import amazingViews from "../assets/icons/amazing-views.svg";
import cabins from "../assets/icons/cabins.svg"
import beachFront from "../assets/icons/beach-front.svg"
import skiing from "../assets/icons/Skiing.svg"
import mansions from "../assets/icons/mansions.svg"
import grandPianos from "../assets/icons/grand-pianos.svg"
import luxe from "../assets/icons/LUXE.svg"
import boats from "../assets/icons/boats.svg"
import lakeFront from "../assets/icons/lakefront.svg"
import treeHouses from "../assets/icons/treehouses.svg"

// turned the custom SVG into a component function so it matches the React Icons
const categories = [
  {label: 'Amazing views', 
    icon: () => <img src={amazingViews} alt="Amazing Views" className="w-6 h-6" /> },
    
  {label: 'Cabins',
     icon: () => <img src={cabins} alt="Cabins" className="w-6 h-6" /> },

  {label: 'Beachfront',
     icon: () => <img src={beachFront} alt="Beachfront" className="w-6 h-6" />},

  {label: 'Skiing',
     icon: () => <img src={skiing} alt="Skiing" className="w-6 h-6" />},

   {label: 'Grand pianos',
    icon: () => <img src={grandPianos} alt="Grand Pianos" className="w-6 h-6" />},

  {label: 'Mansions',
     icon: () => <img src={mansions} alt="Mansions" className="w-6 h-6" />},

  {label: 'OMG!', icon: TbUfo},
  {label: 'Amazing pools', icon: TbPool },

  {label: 'Luxe',
       icon: () => <img src={luxe} alt="Luxe" className="w-6 h-6" />},

  {label: 'Boats',
     icon: () => <img src={boats} alt="Boats" className="w-6 h-6" />},

  {label: 'Lakefront',
    icon: () => <img src={lakeFront} alt="Lakefron" className="w-6 h-6" />},

  {label: 'Treehouses',
    icon: () => <img src={treeHouses} alt="Treehouses" className="w-6 h-6" /> }
];



function CategoryBar() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    //for embla carosel
    <div className="fixed w-full bg-white z-40 top-20 border-b px-4 md:px-10 xl:px-20 py-2 flex items-center gap-4">
      <button onClick={scrollPrev} className="p-1 border border-neutral-300 rounded-full hover:shadow-md bg-white">
        <MdOutlineChevronLeft size={24} />
      </button>

      <div className="overflow-hidden flex-1" ref={emblaRef}>
        <div className="flex flex-row gap-8">
          {categories.map((item) => {
            const Icon = item.icon as any;
            return (
              <div key={item.label} className="flex-none flex flex-col items-center gap-2 py-3 border-b-2 border-transparent hover:border-black transition cursor-pointer text-neutral-500 hover:text-black">
                <Icon size={26} />
                <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <button onClick={scrollNext} className="p-1 border border-neutral-300 rounded-full hover:shadow-md bg-white">
        <MdOutlineChevronRight size={24} />
      </button>

      <div className="hidden md:flex items-center gap-2 border border-neutral-200 rounded-xl px-4 py-3 cursor-pointer hover:bg-neutral-50 transition">
       <img src={filterIcon} alt="" /> 
        <span className="text-xs font-semibold">Filters</span>
      </div>
    </div>
  );
}

export default CategoryBar;