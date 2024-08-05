import ProductCard from "../../card/ProductCard";
import { product } from "../../../constant";
import { useState } from "react";

export default function ListMovie({ title }) {
  const [currentPage, setCurrentPage] = useState(1);
  const numberPage = [1, 2, 3];
  const handlePageNext = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
  const handlePagePrev = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h2 className="my-5 ps-2 fw-bold border-start border-5 border-dark">
            {title}
          </h2>
          <div className="row">
            {product.map((item, index) => {
              if (index < 24) {
                return (
                  <div className="col-6 col-md-3 col-lg-2" key={item.id}>
                    <ProductCard {...item}></ProductCard>
                  </div>
                );
              }
            })}
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li
                  className={
                    currentPage == 1
                      ? "page-item me-2 disabled"
                      : "page-item me-2"
                  }
                >
                  <a className="page-link" href=" #" onClick={handlePagePrev}>
                    <i className="bi bi-chevron-left"></i>
                  </a>
                </li>
                {numberPage.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        currentPage == item
                          ? "page-item me-2 active"
                          : "page-item me-2"
                      }
                    >
                      <a className="page-link" href="#">
                        {item}
                      </a>
                    </li>
                  );
                })}

                <li
                  className={
                    currentPage == numberPage.length
                      ? "page-item disable"
                      : "page-item"
                  }
                >
                  <a className="page-link" href="#" onClick={handlePageNext}>
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
