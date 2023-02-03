import logo from './logo.svg';
import logo1 from './logo1.svg'
import { useNavigate } from "react-router-dom";

import SignInPage from './components/SignInpage/SignInPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import ShowShops from './components/ShowShops/ShowShops'
import LoginPage from './components/LoginPage/LoginPage';
import ShopProducts from './components/ShopProducts/ShopProducts';
import SearchShops from './components/SearchShops/SearchShops'
import Shop from './components/Shop/Shop';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<SignInPage />}/>
      <Route exact path="/Login" element={<LoginPage />}/>
      <Route exact path="/ShowShops" element = {<ShowShops /> }/>
      <Route exact path="/ShopProducts" element = {<ShopProducts /> }/>
      <Route exact path="/SearchShops" element = {<SearchShops /> }/>
      <Route path="/Shop/:id" element = { <Shop /> } />
    </Routes>
    </BrowserRouter>
    </>
   /* <>
    <div className="landingPage"> 
      <SignInPage />
    </div**/
  );
}

export default App;
