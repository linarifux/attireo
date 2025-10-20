import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import AccessoriesPage from './pages/AccessoriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'; // <-- 1. Import the new ContactPage
import NewArrivalsPage from './pages/NewArrivalsPage';
import ScrollToTop from './components/ui/ScrollToTop';
import FAQPage from './pages/FAQPage';
import ShippingPage from './pages/ShippingPage';
import ReturnsPage from './pages/ReturnsPage';
import CareersPage from './pages/CareersPage';
import SustainabilityPage from './pages/SustainabilityPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CollectionsPage from './pages/CollectionPage';


// Placeholder pages
// const ContactPage = () => <div className="h-screen pt-20 text-center">Contact Page</div>; // <-- 2. Remove this

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} /> {/* <-- 3. Use the new component */}
          <Route path="/new-arrivals" element={<NewArrivalsPage />} /> {/* <-- 3. Use the new component */}
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/shipping' element={<ShippingPage />} />
          <Route path='/returns' element={<ReturnsPage />} />
          <Route path='/careers' element={<CareersPage />} />
          <Route path='/sustainability' element={<SustainabilityPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;