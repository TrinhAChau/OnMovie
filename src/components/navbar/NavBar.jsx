import { useState } from "react";
import { logo } from "../../assets/index";
import { navData } from "../../constant";
import { Outlet, Link } from "react-router-dom";
import $ from "jquery";

export default function NavBar() {
  const [dropDown, setDropDown] = useState(false);
  const handleClick = () => {
    dropDown ? setDropDown(false) : setDropDown(true);
  };
  const handleSearch = () => {
    $("#search").addClass("menu_search--active");
  };
  const handleClose = () => {
    $("#search").removeClass("menu_search--active");
  };
  return (
    <>
      <div className=" fixed-top">
        <nav className="navbar navbar-expand-lg " id="mainNavBar">
          <div className=" container border-highlight border-1">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" />
            </Link>
            <div
              className={
                dropDown
                  ? "navbar-collapse navbar-collapse--active"
                  : "navbar-collapse"
              }
              id="menu"
            >
              <ul className="navbar-nav menu flex-grow-1">
                {navData.map(({ id, link, content }) => (
                  <Link to={link} key={id}>
                    <li className="nav-item text-uppercase">
                      <span className="nav-link">{content}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="menu_auth">
              <form className="d-flex mx-2 menu_search" id="search">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Tìm kiếm ..."
                  aria-label="Search"
                  spellCheck="false"
                  id="search"
                />
                  <button
                    className="btn btn-outline-light search_lg "
                    type="submit"
                  >
                    <i className="bi bi-search"></i>
                  </button>
                <button
                  className="btn btn-outline-light search_close "
                  type="button"
                  onClick={handleClose}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </form>
              <button
                className="btn btn-outline-light search_sm"
                onClick={handleSearch}
              >
                <i className="bi bi-search white"></i>
              </button>
              <div className="login mx-2">
                <Link to="/DangNhap">
                  <button className="btn btn-outline-light btn-login">
                    <i className="bi bi-person"></i>
                    <span>&nbsp;Đăng nhập</span>
                    <i className="bi bi-box-arrow-in-right"></i>
                  </button>
                </Link>
              </div>
            </div>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-target="#menu"
              onClick={handleClick}
            >
              <i className={dropDown ? "bi bi-x-lg " : "bi bi-list"}></i>
            </button>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
