import {
  BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./App.css"
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newPage/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Swap from "./pages/swap/Swap";

function App() {
  return (
    <>
    <Router>

    
        <Topbar/>
        <div className="container">
        <Sidebar/>

      <Routes>

          <Route exact path="/" element={<Home />}/>
          <Route path="/users" element={<UserList />}/>
          <Route path="/users/:userId" element={<User />}/>
          <Route path="/newUser" element={<NewUser />}/>
          <Route path="/products" element={<ProductList />}/>
          <Route path="/products/:productId" element={<Product />}/>
          <Route path="/newProduct" element={<NewProduct />}/>
          <Route path="/swap" element={<Swap />}/>
          

      </Routes>
      </div>
    
     </Router>
    </>
  );
}

export default App;
