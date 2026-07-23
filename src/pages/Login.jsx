
import React, { useState } from "react";
import axios from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    await axios.get("/sanctum/csrf-cookie");

    try {
      const res = await axios.post("/api/login", { email, password });
      console.log(res.data);
      window.location.href = "/dashboard";
    } catch (err) {
      setError("Invalid login details");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br/>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
