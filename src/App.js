import { Routes, Route  } from 'react-router-dom';
import './App.scss';

import Header from "./Layouts/Header/Index"
import Footer from "./Layouts/Footer/Index"
import HomePage from "./Home/Index"
import ExploreProducts from "./Components/Products/ExploreProducts"
import AllProductCategories from "./Components/ProductCategories/AllCategories"
import ProductList from "./Components/Products/ProductList"
import ProductDetail from "./Components/Products/ProductDetail"
import ShoppingCart from "./Components/ShoppingCart/Index"
import Checkout from "./Components/Checkout/Index"
import ShoppingCartEmpty from "./Components/ShoppingCart/CartEmpty"
import OrderedSuccessfully from "./Components/Checkout/OrderedSuccessfully"
import MyAccount from "./Components/MyAccount/Index"
import MyOrder from "./Components/MyAccount/MyProfiles/MyOrder"
import OrderDelivered from "./Components/MyAccount/MyProfiles/OrderDelivered"
import Blog from "./Components/Blog/Index"
import BlogDetail from "./Components/Blog/BlogDetail"
import NotFound from "./Components/NotFound/Index"
function App() {
  return (
    <>    
    
      <Header />
      <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/allproducts' element={<ExploreProducts />} />
          <Route path='/all-category' element={<AllProductCategories />} />
          <Route path='/product' element={<ProductList />} />
          <Route path='/product-detail' element={<ProductDetail />} />
          <Route path='/shopping-cart' element={<ShoppingCart />} />
          <Route path='/cart-empty' element={<ShoppingCartEmpty />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order-success' element={<OrderedSuccessfully />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/my-order' element={<MyOrder />} />
          <Route path='/order-details' element={<OrderDelivered />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog-detail' element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
       <Footer /> 
    </>
  );
}

export default App;
