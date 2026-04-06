import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    toast.success("Login สำเร็จ!");
    navigate("/home");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <input placeholder="Username" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;