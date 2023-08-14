import Navbar from "./component/Navbar";
import Product from "./component/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductItem from "./component/ProductItem";
import Cart from "./component/Cart";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Payment from "./component/Payment";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Banner/>}/> 
        <Route exact path="/product" element={<Product />}/> 
          <Route exact path="/productitem/:id" element={<ProductItem />} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/payment" element={<Payment/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
