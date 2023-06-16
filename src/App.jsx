import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Sidebar, Footer, NewsLetter } from './components';
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Product,
  SingleProduct,
  Private,
} from './pages';
import AuthWrapper from './pages/AuthWrapper';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <NewsLetter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Product />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route
            path="/checkout"
            element={
              <Private>
                <Checkout />
              </Private>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
