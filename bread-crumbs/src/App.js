
import './App.css';
import Home from './Pages/Home.js';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails.js';
import ProductListing from './Pages/ProductListing.js';
import Breadcrumbs from './components/breadcrumbs.js';

function App() {
  return (
    <BrowserRouter>
      
      <Breadcrumbs/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/products"  element={<ProductListing/>}/>
        <Route path="/products/:id"  element={<ProductDetails/>}/>
      </Routes>

    


</BrowserRouter>
  );
}

export default App;
