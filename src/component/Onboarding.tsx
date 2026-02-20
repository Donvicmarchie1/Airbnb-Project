import { IoClose, IoChevronDown } from 'react-icons/io5';
import { FaFacebook, FaApple, FaGoogle } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

// Fixed the TypeScript error from your screenshot by defining the prop type
interface OnboardingProps {
  onClose: () => void;
}

const Onboarding = ({ onClose }: OnboardingProps) => {
  return (
    // Backdrop: Added 'py-8' and 'sm:py-12' to ensure it never touches the top/bottom edges
    <div className="fixed inset-0 z-200 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 py-8 sm:py-12">
      
      {/* Modal Container: Added 'max-h-full' and 'overflow-y-auto' so it fits smaller screens */}
      <div className="bg-white rounded-xl w-full max-w-142 max-h-full overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 relative">
        
        {/* Header Section: Sticky so it stays visible while scrolling content */}
        <div className="sticky top-0 bg-white z-10 border-b py-4 flex items-center justify-center">
          <button 
            onClick={onClose}
            className="absolute left-6 p-2 hover:bg-neutral-100 rounded-full transition"
          >
            <IoClose size={20} />
          </button>
          <h1 className="font-bold text-base">Log in or sign up</h1>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Welcome to Airbnb</h2>
          
          {/* Input Group */}
          <div className="flex flex-col mb-4">
            {/* Country Selector */}
            <div className="relative border border-neutral-400 rounded-t-lg p-3 pt-6 cursor-pointer hover:border-black transition-colors">
              <label className="absolute top-2 left-3 text-[11px] text-neutral-500 font-bold uppercase tracking-tight">
                Country/Region
              </label>
              <div className="flex items-center justify-between">
                <span className="text-base text-neutral-800">United Kingdom (+44)</span>
                <IoChevronDown size={20} className="text-neutral-500" />
              </div>
            </div>
            
            {/* Phone Input */}
            <div className="border border-t-0 border-neutral-400 rounded-b-lg p-3 pt-6 relative focus-within:ring-2 focus-within:ring-black focus-within:z-10 focus-within:rounded-lg">
              <label className="absolute top-2 left-3 text-[11px] text-neutral-500 font-bold uppercase tracking-tight">
                Phone number
              </label>
              <input 
                type="text" 
                placeholder="Phone number" 
                className="w-full text-base outline-none bg-transparent placeholder-neutral-400 text-neutral-800"
              />
            </div>
          </div>

          <p className="text-[12px] text-neutral-600 mb-6 leading-tight">
            We'll call or text you to confirm your number. Standard message and data rates apply.
          </p>
          
          <button 
            onClick={onClose}
            className="w-full bg-[#E31C5F] hover:bg-[#D90B3E] text-white py-3 rounded-lg font-semibold text-base mb-6 transition active:scale-[0.98]"
          >
            Continue
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-neutral-300 flex-1" />
            <span className="text-xs text-neutral-500 font-normal">or</span>
            <div className="h-px bg-neutral-300 flex-1" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-4">
            <button onClick={onClose} className="w-full border-[1.2px] border-neutral-800 py-2.5 rounded-lg flex items-center px-6 hover:bg-neutral-100 transition font-semibold text-sm">
              <FaFacebook size={20} className="text-[#1877F2]" />
              <span className="flex-1 text-center">Continue with Facebook</span>
            </button>
            <button onClick={onClose} className="w-full border-[1.2px] border-neutral-800 py-2.5 rounded-lg flex items-center px-6 hover:bg-neutral-100 transition font-semibold text-sm">
              <FaGoogle size={20} />
              <span className="flex-1 text-center">Continue with Google</span>
            </button>
            <button onClick={onClose} className="w-full border-[1.2px] border-neutral-800 py-2.5 rounded-lg flex items-center px-6 hover:bg-neutral-100 transition font-semibold text-sm">
              <FaApple size={20} className="text-black" />
              <span className="flex-1 text-center">Continue with Apple</span>
            </button>
            <button onClick={onClose} className="w-full border-[1.2px] border-neutral-800 py-2.5 rounded-lg flex items-center px-6 hover:bg-neutral-100 transition font-semibold text-sm">
              <MdOutlineEmail size={20} className="text-black" />
              <span className="flex-1 text-center">Continue with email</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;