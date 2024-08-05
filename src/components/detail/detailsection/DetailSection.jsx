import { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../../MovieContext";
export default function DetailSection() {
  const context = useContext(MovieContext);
  const movie = context.currentMovie;

  return (
    <>
      <div className="container-fluid mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="my-5 ps-2 fw-bold border-start border-5 border-dark">
                {movie.title}
              </h2>
            </div>
            <div className="col-12">
              <div className="card_detail">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="detail_image position-relative">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="img-fluid rounded-3"
                      />
                      <span className="detail_rate">{movie.rate}</span>
                      <Link to={movie.link} className="detail_watch black">
                        <i className="bi bi-play-fill"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-8">
                    <div className="detail_content">
                      <ul className="detail_meta">
                        <li>
                          <span>Đạo diễn: &nbsp; </span>
                          {movie.director}
                        </li>
                        <li className="text-wrap">
                          <span>Diễn viên: &nbsp; </span>
                          {movie.actor.map((item, index) => {
                            if (index < 7) {
                              return (
                                <a key={index} href="#" className="blue">
                                  {item}
                                </a>
                              );
                            }
                          })}
                        </li>
                        <li>
                          <span>Thể loại: &nbsp; </span>
                          {movie.gener.map((item, index) => (
                            <a key={index} href="#" className="blue">
                              {item}
                            </a>
                          ))}
                        </li>
                        <li>
                          <span>Năm sản xuất: &nbsp; </span>
                          {movie.year}
                        </li>
                        <li>
                          <span>Thời lượng: &nbsp; </span>
                          {movie.time}
                        </li>
                        <li>
                          <span>Quốc gia: &nbsp; </span>
                          <a href="#" className="blue">
                            {movie.nation}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="description-section">
                      <div className="detail_description position-relative overflow-y-scroll">
                        <div className="detail_container">
                          {movie.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
