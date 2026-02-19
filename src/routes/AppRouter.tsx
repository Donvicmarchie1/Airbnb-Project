import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../component/Navbar';
import CategoryBar from '../component/CategoryBar';

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* Both are fixed at the top, so they stay outside Routes */}
      <Navbar />
      <CategoryBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;