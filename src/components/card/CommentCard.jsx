export default function CommentCard({ ...props }) {
  return (
    <>
      <li className="comment_item">
        <div className="comment_author">
          <img src={props.avatar} alt="" className="comment_avatar img-fluid" />
          <span className="comment_name">{props.name}</span>
          <span className="comment_time">{props.date}</span>
        </div>
        <p className="comment_text ">{props.text}</p>
        <div className="comment_action">
          <div className="comment_rate">
            <button type="button">
              <i className="bi bi-hand-thumbs-up-fill"></i>
              {props.likes}
            </button>

            <button type="button">
              {props.dislike}
              <i className="bi bi-hand-thumbs-down-fill"></i>
            </button>
          </div>

          <button type="button">
            <i
              className="bi bi-reply-fill fs-6"
              style={{ transform: "scaleX(-1)" }}
            ></i>
            Phản hồi
          </button>
        </div>
      </li>
    </>
  );
}
