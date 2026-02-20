import ListingCard from '../component/ListingCard';
import { listings } from '../component/ListingsData';
import CategoryBar from '../component/CategoryBar';

function Home() {
  return (
    <>
      <CategoryBar /> 
      {/* pt-48 keeps content below the fixed Navbar/CategoryBar */}
      <main className="pt-48 px-4 md:px-10 xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {listings.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
        
        {/* Your "Show More" section remains here */}
        <div className="flex flex-col items-center justify-center mt-16 mb-20 gap-6">
           <h3 className="text-lg font-semibold text-[#222222]">
            Continue exploring amazing views
          </h3>
          <button className="bg-[#222222] text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition">
            Show more
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;