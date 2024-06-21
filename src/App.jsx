import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout, Home, Shop, ProductDetails } from './router';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='blog' element={<Shop />} />
        <Route path='about' element={<Shop />} />
        <Route path='services' element={<Shop />} />
        <Route path='contact' element={<Shop />} />
        <Route path='product-details/:productId' element={<ProductDetails />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
