
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import Create from './components/pages/Create';
import About from './components/pages/About';
import Chat from './components/chat';
import ContactUs from './components/contactus';



function App() {

  //google login API

 /* function 
useEffect(() => {
google.accounts.id.initialize ({
  client_id: "1085776193825-im3hsa2eq8agikhuu1gu5sej5le7v5uq.apps.googleusercontent.com",
  callback: handleCallbackResponse
})
}, []); */

  // glA
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sign-up" element={<Login />} />
              <Route path="/create" element={<Create />} />
              <Route path="/about" element={<About />} />
              <Route path="/Chat" element={<Chat />} />
              <Route path="/contact-us" element={<ContactUs />} />
          </Routes>      
      </Router>
    </>
  );
}
