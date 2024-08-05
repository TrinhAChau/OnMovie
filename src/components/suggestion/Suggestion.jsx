import ProductCard from "../card/ProductCard";
import { product } from "../../constant";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



export default function Suggestion({hide}) {
  const [count, setCount] =useState(4)
  useEffect(() => {
    const x = window.matchMedia("(min-width:768px) and (max-width: 1024px)");
    const reSize = () => {
      if (x.matches) setCount(3);
      else setCount(4);
    }
    reSize()
    window.addEventListener('resize', reSize);
    return () => window.removeEventListener('resize', reSize);
  },[])
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="container suggestion">
          <h2 className="my-5 ps-2 fw-bold border-start border-5 border-dark">
            Phim đề xuất
          </h2>
          <div className="row">
            {product.map((item, index) => {
              if (index < count) {
                return (
                  <div className="col-6 col-md-4 col-xl-3" key={item.id}>
                    <ProductCard {...item}></ProductCard>
                  </div>
                );
              }
            })}
          </div>
          <Link to="/TheLoai" className={hide && "d-none"}>
            <button className="d-block btn btn-dark px-3 mx-auto my-3">
              Xem thêm
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
