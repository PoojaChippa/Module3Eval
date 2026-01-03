import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@gmail.com	" && password === "admin1234") {
      Login({ role: "admin" });
      navigate("admin/dashboard");
    } else if (email === "customer@gmail.com" && password === "customer1234") {
      Login({ role: "customer" });
      navigate("/customers/dashboard");
    } else {
      alert("Invvalid credentials");
    }
  };

  return (
    <div className="center">
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
