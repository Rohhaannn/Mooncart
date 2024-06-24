import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout, Home, Shop, ProductDetails, CartPage } from './router';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
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
