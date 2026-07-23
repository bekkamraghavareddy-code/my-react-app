import { useContext, useEffect } from "react";
import { AuthContext } from "../globalvalues/AuthContext";

export default function About() {
      const { logout,login } = useContext(AuthContext);
      useEffect(()=>{
        login();
      },[])

  return <h2> Raghava di CI connect About Page I am success. </h2>;
}
