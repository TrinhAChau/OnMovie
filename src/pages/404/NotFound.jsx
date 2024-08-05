import { Link } from "react-router-dom";
import "./notfound.css"
export default function NotFound() {
  return (
    <>
      <div className="error transition-move ">
        <div
          className=" text-center error_container"
        >
          <div
            className="fw-bold text-uppercase "
          >
            404
          </div>
          <h2 >Trang không tồn tại</h2>
          <Link to="/">
            <button className="button_back">
              Trở về trang chủ
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
