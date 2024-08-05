
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Detail from "./pages/detailPage/Detail";
import BackToTop from "./components/backToTop/BackToTop";
import Error from "./pages/404/NotFound";
import Login from "./pages/Login";
import Watch from "./pages/Watch";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div id="root-container" >
        <BackToTop></BackToTop>
        <Routes>
          {/* Trang chủ */}
          <Route exact path="/" element={<Home />} />
          {/* Trang sản phẩm */}
          <Route path="TheLoai" element={ <Category /> } />
          <Route path="ChiTiet" element={ <Detail /> }></Route>
          <Route path="DangNhap" element={ <Login /> }></Route>
          <Route path="XemPhim" element={ <Watch /> }></Route>
          <Route path="*" element={ <Error /> }></Route>
          
        </Routes>
      </div>
    </Router>
  );
}
