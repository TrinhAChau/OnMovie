import ProductCard from "../../card/ProductCard";

export default function FeaturesList({ film }) {
  return (
    <>
      <div className="transition-move position-relative">
        <div className="row">
          { film.map((item,index) => {
            if (index < 6) {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                  <ProductCard {...item}></ProductCard>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
