import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Navbarmenu from "./components/navbar";
import Menu from "./Page/Menu";
import Contact from "./Page/Contact";
import Footer from "./components/footer";
import Terms from "./Page/terms";
import Services from "./Page/Services";
import Fooddetails from "./Page/Fooddetails";
import Cart from "./Page/Cart";
import Checkout from "./Page/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Navbarmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
         <Route path="/Menu" element={<Menu />} />
          <Route path="/Contact" element={< Contact/>} />
          <Route path="/Terms" element={< Terms/>} />
          <Route path="/services" element={< Services/>} />
          <Route path="/food-details" element={<Fooddetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
      </Routes>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
