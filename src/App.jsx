import { BrowserRouter, Link } from "react-router-dom";

import RouteLinks from "./routeLinks";

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 border-b flex gap-4">
        <Link className=" mr25 gap-4" to="/">Home</Link>
        <Link  className="mr25 gap-4"  to="/about">About</Link>
         <Link  className="mr25 gap-4"  to="/profile">My profile</Link>
        <Link className="mr25 gap-4"  to="/users/67/">Raghava</Link>
         <Link className="mr25 gap-4"  to="/users/67/Raghava">Name</Link>
          <Link  className="mr25 gap-4"  to="/login">Login</Link>
            <Link  className="mr25 gap-4"  to="/register">Register</Link>
            <Link className="mr25 gap-4" to="/changepassword">Change password</Link>
      </nav>

      <RouteLinks/>

    </BrowserRouter>
  );
}

export default App;
