import "./suggestlist.css";
import { product } from "../../../constant";
import ProductCard from "../../card/ProductCard";
export default function SuggestList() {
  return (
    <>
      <div id="multiCarousel" className="carousel slide">
        <div className="carousel-inner">
          {product.map((item, index) => {
            if (index < 3) {
                return <div key={ index } className="carousel-item active">
                  <ProductCard {...item}></ProductCard>
              </div>;
            }
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#multiCarousel"
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
          data-bs-target="#multiCarousel"
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
