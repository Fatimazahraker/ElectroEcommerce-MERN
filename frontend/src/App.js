import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import NewProduct from './pages/NewProduct';
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
<<<<<<< HEAD
import ScrollToTop from "./components/ScrollToTop";
import CartPage from "./pages/CartPage";



=======
import { useSelector } from 'react-redux';
import ProductPage from "./pages/ProductPage";
>>>>>>> 44a9e297f710a3d230fd145e4c885b602a85a437

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          {!user && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
<<<<<<< HEAD
            </>
          )}
          {user && (
                        <>
                            <Route path="/cart" element={<CartPage />} />
                            
                        </>
                    )}
=======
              
            </>
          )}
>>>>>>> 44a9e297f710a3d230fd145e4c885b602a85a437

          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          
          <Route path="/new-product" element={<NewProduct />} />

<<<<<<< HEAD
          <Route path="*" element={<Home />} />
        </Routes>
=======
        <Route path="*" element={<Home />} />
      </Routes>
>>>>>>> 44a9e297f710a3d230fd145e4c885b602a85a437
      </BrowserRouter>
    </div>
  );
}

export default App;