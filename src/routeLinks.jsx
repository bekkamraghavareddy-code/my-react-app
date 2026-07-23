
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UserDetails from "./pages/UserDetails";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./pages/Register";
import ChangePassword from "./pages/ChangePassword";

function routeLinks(){
return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/users/:id/:name" element={<UserDetails />} />
        <Route  path="/profile"  element={    <PrivateRoute>      <Profile />    </PrivateRoute>  }/>
          <Route path="/login" element={<Login/>} />
           <Route path="/register" element={<Register/>} />
           <Route path="/changepassword" element={ <PrivateRoute> <ChangePassword/> </PrivateRoute>} />
      </Routes>;
}
export default routeLinks;