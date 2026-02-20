import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileNav from './MobileNav';
import Onboarding from './Onboarding'; // Import it here

function MainLayout() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Pass the function to open the modal to the Navbar */}
      <Navbar onOpenLogin={() => setShowModal(true)} />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <MobileNav />

      {/* The Modal listens to showModal state */}
      {showModal && <Onboarding onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default MainLayout;