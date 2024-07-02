import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout, Home, Shop, ProductDetails, CartPage, Blog } from './router';
import ComingSoon from './screen/ComingSoon';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<ComingSoon />} />
        <Route path='/services' element={<ComingSoon />} />
        <Route path='/contact' element={<ComingSoon />} />
        <Route path='product-details/:productId' element={<ProductDetails />} />
        <Route path='/cart' element={<CartPage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
