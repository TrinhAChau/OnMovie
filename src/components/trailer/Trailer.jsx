import { banner } from "../../assets";
function Slide() {
  return (
    <>
      <div className="image">
        <img
          src={banner}
          alt=""
          className="img-fluid w-100 position-relative"
        />
        <div className="wrapper">
          <div className="content pb-4">
            <div className="container">
              <h3 className="text-uppercase fw-bold">Sắp ra mắt</h3>
              <h3 className="trailer-badge ">
                <span className="badge text-bg-secondary">Trailer</span>
              </h3>
              <a href="#" className="">
                Cua lại vợ bầu
              </a>
              <ul>
                <li className="fw-normal">
                  <span className="fw-bold">Thể loại: </span> Trinh thám
                </li>
                <li>
                   <span className="fw-bold">Sản xuất: </span> Hàn Quốc - 2012
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Trailer() {
  return (
    <>
      <div
        id="carouselTrailer"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-touch="true"
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselTrailer" data-bs-slide-to="0" className="active" aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselTrailer"
            data-bs-slide-to="1"
            aria-current="true"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <Slide></Slide>
          </div>
          <div className="carousel-item ">
            <Slide></Slide>
          </div>
        </div>
      </div>
    </>
  );
}
