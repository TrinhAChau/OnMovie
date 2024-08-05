import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
function Contact() {
  return (
    <>
      <div className="row border-bottom pt-5 pb-3">
        <div className="col-12 col-lg-3 category">
          <div className="logo mb-4">
            <img src={logo} alt="" className="img-fluid" />
          </div>
          <h4 className="text-uppercase title">
            Công ty dịch vụ giải trí OnMovie
          </h4>
          <p className="fs-6">Số điện thoại: 098484848</p>
          <p className="fs-6">
            Địa chỉ: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Fugiat.
          </p>
        </div>
        <div className="col-12 col-md-4 col-lg-3 category">
          <h4 className="title">Danh sách phim</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link">
                Giới thiệu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" >
                Tuyển dụng
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" >
                Tin tức
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" >
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-4 col-lg-3  category">
          <h4 className="title">Trợ giúp</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link" >
                Khách hàng thân thiết
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" >
                Đổi trả
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Bảo hành
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Bảo mật
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Thường gặp
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 col-lg-3  category">
          <h4 className="title">Thông tin</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Giới thiệu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Tuyển dụng
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Tin tức
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Liên hệ
              </Link>
            </li>
          </ul>
          <div className="d-flex gap-4 py-3">
            <div className="fs-4 border py-1 px-2 rounded-3">
              <FaFacebookF />
            </div>
            <div className="fs-4 border py-1 px-2 rounded-3">
              <FaInstagram />
            </div>
            <div className="fs-4 border py-1 px-2 rounded-3">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div className="container">
          <Contact></Contact>
        </div>

        <p className="m-0 text-center fs-6 py-4">©CopyRight2024 by Slothz</p>
      </div>
    </>
  );
}
