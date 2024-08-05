export default function NewsCard({ ...props }) {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-5 col-lg-4 ">
          <div className="news_image">
            <img src={props.image} alt="" className="img-fluid " />
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-8 context">
          <h3 className="title fw-bold">{props.title}</h3>
          <p className=" fw-normal">{props.content}</p>
        </div>
      </div>
    </>
  );
}
