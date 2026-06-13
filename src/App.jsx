import { HashRouter, Routes, Route } from 'react-router-dom';
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


function App() {
  return (
    <HashRouter>
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
        
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
