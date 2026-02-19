import type { ListingProp } from "./Types";
import halfMoon from '../assets/images/half-moon-bay.png'

export const listings: ListingProp[] = [
  { 
    id: 1, 
    location: "Half Moon Bay, California, US", 
    price: "1,634", 
    rating: 5.0, 
    // Just press Enter after the title!
    description: `Beach and ocean views
22–27 Oct • Individual host`, 
    image:""
  },
  { 
    id: 2, 
    location: "Malibu, California, US", 
    price: "2,100", 
    rating: 4.9, 
    description: `Modern architectural gem
10–15 Nov • Individual host`, 
    image: ""
  },

  {
  id: 2, 
    location: "Malibu, California, US", 
    price: "2,100", 
    rating: 4.9, 
    description: `Modern architectural gem
10–15 Nov • Individual host`, 
    image: halfMoon
  }
];