import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../component/MainLayout'; // Make sure the path is correct
import Home from '../pages/Home';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Everything inside this Route will use the MainLayout (Navbar, Footer, etc.) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* Future pages like /trips would go here and automatically get the Navbar! */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;