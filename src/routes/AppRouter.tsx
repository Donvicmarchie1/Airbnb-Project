import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../component/MainLayout'; // Make sure the path is correct
import Home from '../pages/Home';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;