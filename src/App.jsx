import { HashRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider } from "./Components/BookingContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './Home';
import Vendors from './Vendors';
import Venuepage from './Venuepage';
import Decorators from './Decorators';
import Photographer from './Photographer';
import Login from './login';
import Signup from './Signup';
import About from './About';
import VendorProfile from "./Photographer";
import ChatPage from "./ChatPage";
import BookingDetails from "./BookingDetails";
import PackageSelection from "./PackageSelection";
import Payment from "./Payment";


function App() {
  return (
    <HashRouter>
      <BookingProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Vendors />} />
        <Route path="/vendors" element={<Venuepage />} />
        <Route path="/decorators" element={<Decorators />} />
        <Route path="/photographer" element={<Photographer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/vendors/:id" element={<VendorProfile />} />
        <Route path="/chat/:vendorId" element={<ChatPage />} />
        <Route path="/details" element={<BookingDetails />} />
        <Route path="/package" element={<PackageSelection />} />
        <Route path="/payment" element={<Payment />} />
        
      </Routes>

      <Footer />
      </BookingProvider>
    </HashRouter>
  );
}

export default App;
