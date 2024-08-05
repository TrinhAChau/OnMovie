import {geners} from "../../../constant"

export default function Classify() {
  return (
    <>
      <div className="container-fluid pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-2 mb-3">
              <label htmlFor="gener">Thể loại</label>
              <select id="gener" className="form-select">
                <option selected>Chọn thể loại</option>
                { geners.map((item, index) => (<option key={ index } value={ item }>{ item}</option>))}
              </select>
            </div>
            <div className="col-12 col-md-3 col-lg-2 mb-3">
              <label htmlFor="resolution">Độ phân giải</label>
              <select id="resolution" className="form-select">
                <option selected>Chọn độ phân giải</option>
                <option>HD 1080</option>
                <option>HD 720</option>
              </select>
            </div>
            <div className="col-12 col-md-3 col-lg-2 mb-3">
              <label htmlFor="rate">Đánh giá</label>
              <select id="rate" className="form-select">
                <option selected>Chọn đánh giá</option>
                <option>1.0</option>
                <option>2.0</option>
              </select>
            </div>
            <div className="col-12 col-md-3 col-lg-2 mb-3">
              <label htmlFor="productYear">Năm sản xuất</label>
              <select id="productYear" className="form-select">
                <option selected>Chọn năm</option>
                <option>2019</option>
                <option>2020</option>
              </select>
            </div>
            <div className="col-12 col-md-3 col-lg-4 mb-3">
              <div className="d-flex ">
                <button type="submit" className="btn btn-outline-info border-3 ms-auto">
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
