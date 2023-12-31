import Navbar from "./component/Navbar";
import Product from "./component/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductItem from "./component/ProductItem";
import Cart from "./component/Cart";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Payment from "./component/Payment";
import Login from "./component/Login";
import Regiser from "./component/Regiser";
import Category from "./component/Category";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Banner/>}/> 
        <Route exact path="/product" element={<Product />}/> 
        <Route exact path="/login" element={<Login/>}/> 
        <Route exact path="/register" element={<Regiser/>}/> 
          <Route exact path="/productitem/:id" element={<ProductItem />} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/payment" element={<Payment/>} />
        </Routes>
        {/* <Category/> */}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
