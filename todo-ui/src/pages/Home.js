import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>ToDo List</h2>

      <ul>
        <li>ทำการบ้าน - 10/04/2026</li>
        <li>อ่านหนังสือ - 12/04/2026</li>
      </ul>

      <br />

      <button onClick={() => navigate("/credit")}>
        Credit
      </button>
    </div>
  );
}

export default Home;