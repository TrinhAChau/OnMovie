import { useState } from "react";
import { signin, signup } from "../assets";
import { Link } from "react-router-dom";

export function Signup({ onClick }) {
  return (
    <>
      <div className="signup d-flex justify-content-center align-items-center vh-100 transition-move">
        <div className="form_container rounded bg-white">
          <form>
            <h3 className="text-center">Tạo tài khoản</h3>
            <div className="mb-2">
              <label htmlFor="name">Tên</label>
              <input
                type="text"
                placeholder="Nhập tên"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Nhập Email"
                className="form-control"
              />
            </div>
            <div className="mb-2 ">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                className="form-control"
              />
            </div>
            <button className="btn-signup text-center">Đăng ký</button>
            <p className="text-center w-100">
              <a className="text-black link-primary " onClick={onClick}>
                Đăng nhập
              </a>
            </p>
          </form>
          <div className="image_signup">
            <img src={signup} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default function Login() {
  const [signIn, setSignIn] = useState(true);
  const handleSign = () => {
    if (signIn) {
      setSignIn(false);
    } else {
      setSignIn(true);
    }
  };
  return (
    <>
      <div
        className={
          signIn
            ? "signin d-flex justify-content-center align-items-center vh-100 transition-move"
            : "d-none"
        }
      >
        <div className="form_container rounded bg-white">
          <div className="image_signin">
            <img src={signin} alt="" />
          </div>
          <form>
            <h3 className="text-center">Đăng nhập</h3>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Nhập Email"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                className="form-control"
              />
            </div>
            <div className="mb-2 ">
              <input type="checkbox" className="check_button" id="checkBox" />
              <label htmlFor="check" className="input-label-check ms-2">
                Nhớ mật khẩu
              </label>
            </div>
            <Link to="/">
              <button className="btn-signin">Đăng nhập</button>
            </Link>
            <p className="text-center w-100 ">
              <a className="text-black link-primary">Quên mật khẩu?</a>
              <a className="text-black ms-2 link-primary " onClick={handleSign}>
                Đăng ký
              </a>
            </p>
          </form>
        </div>
      </div>
      {!signIn && <Signup onClick={handleSign}></Signup>}
    </>
  );
}
