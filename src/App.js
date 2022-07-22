import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Frontpage from './Frontpage/Frontpage';
import Navbar from './navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [products, setProducts] = useState({});
  useEffect(() => {
    async function getProducts() {
      const temp = await axios.get(
        `http://localhost:8080/api/get`
      )
      setProducts(temp.data.rows)
    }
    getProducts()
  },[])

  return (
    <div className="App">
      <Router>
        <Navbar />{console.log(products)}
        <Routes>
          <Route path="/" element={<Frontpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
