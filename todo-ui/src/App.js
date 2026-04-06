import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Credit from "./pages/Credit";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/credit" element={<Credit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;