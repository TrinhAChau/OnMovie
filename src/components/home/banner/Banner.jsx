import { product } from "../../../constant/index";
import { MovieContext } from "../../../MovieContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function Slide({ ...props }) {
  const context = useContext(MovieContext);
  const handleClick = () => {
    context.handleMovie(props);
  };
 
  return (
    <>
      <div className="image">
        <img
          src={props.banner}
          alt=""
          className="img-fluid w-100 position-relative"
        />
        <div className="wrapper">
          <div className="content">
            <div className="container">
              <a href="#" className="fs-3">
                {props.title}
              </a>
              <ul className="fw-normal">
                <li>
                  <span className="fw-bold">Thể loại: </span>
                  {props.gener.filter((item, index) => index <= 2).join(", ")}
                </li>
                <li>
                  <span className="fw-bold">Sản xuất: </span>
                  {props.nation + " - " + props.year}
                </li>
              </ul>
              <Link to="/ChiTiet">

              <button className="play fw-bold" onClick={handleClick}>
                <i className="bi bi-play-circle"></i>
                &nbsp;PLAY
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Banner() {
  
  return (
    <>
      <div
        id="carouselBanner"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-touch="true"
      >
        <div className="carousel-inner">
          {product.map((item, index) => {
            if (index < 4) {
              return (
                <div
                  key={index}
                  className={
                    index == 0 ? "carousel-item active" : "carousel-item"
                  }
                >
                  <Slide {...item}></Slide>;
                </div>
              );
            }
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBanner"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselBanner"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
