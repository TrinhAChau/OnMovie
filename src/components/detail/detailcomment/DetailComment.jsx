import { useState } from "react";
import { comment, product } from "../../../constant";
import CommentCard from "../../card/CommentCard";
import ProductCard from "../../card/ProductCard";

export default function DetailComment() {
  const [textComment, setTextComment] = useState("");
  const handleChange = (e) => {
    setTextComment(e.target.value);
  };
  const handleSubmit = () => {
    setTextComment("");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="tab-comment">
                <div className="row">
                  <div className="col-12">
                    <h2 className="title">Bình luận</h2>
                  </div>
                  <div className="col-12 comment">
                    <form action="#" className="form">
                      <textarea
                        name="text"
                        id="text"
                        className="form_textarea"
                        placeholder="Viết bình luận..."
                        onChange={handleChange}
                        value={textComment}
                        spellCheck="false"
                      ></textarea>
                      <div className="submit-button">
                        <button
                          type="button"
                          className={
                            textComment == ""
                              ? "form_button disabled"
                              : "form_button"
                          }
                          onClick={handleSubmit}
                        >
                          Bình luận
                        </button>
                      </div>
                    </form>
                    <ul className="comments-list">
                      {comment.map(({ id, ...item }) => (
                        <CommentCard key={id} {...item} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="row">
                <div className="col-12">
                  <h2 className="title">Đề xuất</h2>
                </div>

                {product.map((item, index) => {
                  if (index < 6) {
                    return (
                      <div className="col-6 col-md-4 col-xl-6" key={item.id}>
                        <ProductCard {...item}></ProductCard>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
