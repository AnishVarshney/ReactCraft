import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Navigate 
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container"> 
      <Sidebar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/users" element= {<UserList/>}/>
        <Route path="/user/:userId" element= {<User/>}/>
        <Route path="/newuser" element= {<NewUser/>}/>
        <Route path="/products" element= {<ProductList/>}/>
        <Route path="/product/:productId" element= {<Product/>}/>
        <Route path="/newproduct" element= {<NewProduct/>}/>

      </Routes>
      </div>
    </Router>
  );
}

export default App;
