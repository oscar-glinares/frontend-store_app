import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Frontpage from './Frontpage/Frontpage';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Frontpage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
