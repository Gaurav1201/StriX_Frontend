import logo from './logo.svg';
import logo1 from './logo1.svg'
import { useNavigate } from "react-router-dom";

import SignInPage from './pages/SignInpage/SignInPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import ShowShops from './pages/ShowShops/ShowShops'
import LoginPage from './pages/LoginPage/LoginPage';
import ShopProducts from './pages/ShopProducts/ShopProducts';
import SearchShops from './pages/SearchShops/SearchShops'
import Shop from './pages/Shop/Shop';
import Profile from './pages/Profile/Profile'
import DashBoard from './pages/DashBoard/DashBoard';
import LandingPage from './pages/LandingPage/LandingPage';
import AddShop from './pages/AddShop/AddShop';
import ProductDisplay from './pages/ProductDisplay/ProductDisplay';
import AddProduct from './pages/AddProduct/AddProduct';
import {Typography} from '@mui/material';
 import JSONDEMO from './components/JSONDEMO/JSNONDEMO.js';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

function App() {

  const product = [

    {
        "id":1,
        "BusinessType":"food",
        "location":"california",
        "name":"pizza hut",
        "rating":5,
        "price": 1,
        "description":"business",
        "contents":[{"name":"onion","details":{"price":100,"rating":4,"description":"nothng","id":1}},{"name":"margherita","details":{"price":18,"rating":2,"description":"jdh","id":2}}]
    },
    {
        "id":2,
        "BusinessType":"food",
        "location":"california",
        "BusinessName":"MacDonalds",
        "rating":5,
        "contents":[{"name":"onion","details":{"price":100,"rating":4,"description":"nothng","id":1}},{"name":"margherita","details":{"price":18,"rating":2,"description":"jdh","id":2}}]
    }
    , 
    {
        "id":3,
        "BusinessType":"food",
        "location":"california",
        "BusinessName":"MacDonalds",
        "rating":5,
        "contents":[{"name":"onion","details":{"price":100,"rating":4,"description":"nothng","id":1}},{"name":"margherita","details":{"price":18,"rating":2,"description":"jdh","id":2}}]
    }
   ,
      {
        "id":4,
        "BusinessType":"food",
        "location":"california",
        "BusinessName":"Pizza Hut
         ",
        "rating":5,
        "contents":[{"name":"onion","details":{"price":100,"rating":4,"description":"nothng","id":1}},{"name":"margherita","details":{"price":18,"rating":2,"description":"jdh","id":2}}]
    }
    
    ]
  return (
    <>
  
   
  <BrowserRouter>
  <div className='navbar'>
    <DashBoard />
   </div> 
    <Routes>
      <Route exact path="/" element={<LandingPage />}/>
      <Route exact path="/Login" element={<LoginPage />}/>
      <Route exact path="/Signup" element={<SignInPage />}/>
      <Route exat path='/Profile' element = {<Profile />}/>
      <Route exact path="/ShowShops" element = {<ShowShops /> }/>
      <Route exact path="/AddShop" element = {<AddShop /> }/>
      <Route exact path='/ProductDisplay' element = {<ProductDisplay />}/>
      <Route exact path="/ShopProducts" element = {<ShopProducts /> }/>
      <Route exact path="/SearchShops" element = {<SearchShops /> }/>
      <Route exact path="/AddProduct" element = {<AddProduct /> }/>
      <Route path="/Shop/:id" element = { <Shop /> } />
      <Route exact path = "/JSONDEMO" element ={<JSONDEMO />} />
    </Routes>
  </BrowserRouter>
    
    
    </>
   
  );
}

export default App;
