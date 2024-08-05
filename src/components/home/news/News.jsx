import { news } from "../../../constant";
import NewsCard from "../../card/NewsCard";
import "./news.css"
export default function News() {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="container">
          <div className="d-flex mt-5 mb-1">
            <h2 className=" fw-bold">Tin tức mới</h2>
            <a href="#" className="link-primary fw-bold ms-auto">
              Xem thêm
            </a>
          </div>
          <div className="row">
            {news.map(({ ...item }) => (
              <div className="col-12 col-md-6 mb-3" key={item.id}>
                <NewsCard {...item}></NewsCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
