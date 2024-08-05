import { useState } from "react";
import { product } from "../../../constant";
import FeaturesList from "./FeaturesList";
export default function Features() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleClick = (e) => {
    setCurrentTab(e.target.name);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container feature">
          <h2 className="text-uppercase py-5 fw-bold ">Đặc sắc</h2>
          <div className="tabs mb-4">
            <ul className="nav nav-tab">
              <li className="nav-item" onClick={handleClick}>
                <a
                  className={currentTab == 0 ? "nav-link active" : "nav-link"}
                  name="0"
                >
                  Phim bộ
                </a>
              </li>
              <li className="nav-item" onClick={handleClick}>
                <a
                  className={currentTab == 1 ? "nav-link active" : "nav-link"}
                  name="1"
                >
                  Phim lẻ
                </a>
              </li>
              <li className="nav-item" onClick={handleClick}>
                <a
                  className={currentTab == 2 ? "nav-link active" : "nav-link"}
                  name="2"
                >
                  Chiếu rạp
                </a>
              </li>
              <li className="nav-item" onClick={handleClick}>
                <a
                  className={currentTab == 3 ? "nav-link active" : "nav-link"}
                  name="3"
                >
                  Hoạt hình
                </a>
              </li>
            </ul>
          </div>
          {currentTab == 0 && <FeaturesList film={product}></FeaturesList>}
          {currentTab == 1 && <FeaturesList film={product}></FeaturesList>}
          {currentTab == 2 && <FeaturesList film={product}></FeaturesList>}
          {currentTab == 3 && <FeaturesList film={product}></FeaturesList>}
        </div>
      </div>
    </>
  );
}
