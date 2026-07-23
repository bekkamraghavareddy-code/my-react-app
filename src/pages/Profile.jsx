import { useContext, useEffect } from "react";
import { AuthContext } from "../globalvalues/AuthContext";


export default function Profile() {
  const { logout,login } = useContext(AuthContext);
  useEffect(()=>{
    login();
  },[])

  return (
    <div>
      <h2>Welcome to your Profile</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
