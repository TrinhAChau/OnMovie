import { Link } from "react-router-dom";
import { MovieContext } from "../../MovieContext";
import { useContext } from "react";
import "./style.css";

export default function ProductCard({ ...props }) {
  const context = useContext(MovieContext);
  const handleClick = () => {
    context.handleMovie(props);
  };
  return (
    <>
      <div className=" position-relative product_image">
        <img src={ props.image } alt="" className=" img-fluid" />
        <Link to="/ChiTiet" className="bi bi-play-circle" onClick={handleClick} style={{cursor:"pointer"}}></Link>
        <div className="wrapper product_wrapper">
          <div className="product_content">
            <Link
              to="/ChiTiet"
              onClick={handleClick}
              className="text-center product_title title white"
            >
              {props.title}
            </Link>
            <p className="text-center " style={{ fontWeight: "500" }}>
              {props.gener.filter((item, index) => index <= 1).join(", ") +
                (props.hide ? "" : ", " + props.year)}
            </p>
            <div className={props.hide ? "d-flex px-3 hide" : "d-flex px-3"}>
              <div className="time w-100 ">
                <i className="bi bi-clock"></i>
                <span>&nbsp;{props.time}</span>
              </div>
              <div className="flex-shrink-1 favorite">
                <button className="white">
                  <i className="bi bi-suit-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
