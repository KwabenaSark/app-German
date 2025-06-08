// src/App.jsx
import { Button, Typography, TextField, Radio, FormControlLabel, RadioGroup } from '@mui/material';
import Nav from './comp/nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headphones from './pages/Categories';
import Home from './pages/home';
import Detail from './comp/Detail';
import ProductPage from './comp/ProductPage';
import Checkout from './pages/Checkout';



function App() {
  return (
    <Router>
      <div >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Headphones />} />
          <Route path="/earphones" element={<Headphones />} />
          <Route path="/detail" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;