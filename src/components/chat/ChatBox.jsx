import { useEffect, useRef, useState } from "react";
// import $ from "jquery";
import "./chatbox.css";
export default function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);

  const chatbox = useRef(null);
  useEffect(() => chatbox.current.scrollIntoView(false), [messages]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setMessages((messages) => [
        ...messages,
        { text: inputValue, user: true },
      ]);
      setInputValue("");
      setTimeout(
        () =>
          setMessages((messages) => [
            ...messages,
            {
              text:
                "Trang xem phim trực tuyến OnMoive, với đa dạng mọi loại phim",
              user: false,
            },
          ]),
        600
      );
    }
  };

  const handleShowMessage = () => {
    show ? setShow(false) : setShow(true);
  };
  return (
    <>
      <div className={show ? "show_chatbot" : ""}>
        <button className="chatbot-toggler" onClick={handleShowMessage}>
          <span className="bi bi-chat-dots-fill"></span>
          <span className="bi bi-x-lg"></span>
        </button>
        <div className="chatbot">
          <header>
            <h2>Chat bot</h2>
            <span className="bi bi-dash-lg" onClick={handleShowMessage}></span>
          </header>
          <ul className="chatbox">
            <div ref={chatbox}>
              <li className="chat incoming">
                <span className="bi bi-robot"></span>
                <p>Xin chào, Tôi có thể giúp gì cho bạn</p>
              </li>
              {messages.map((item, index) => {
                if (item.user) {
                  return (
                    <li key={index} className="chat outgoing">
                      <p>{item.text}</p>
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="chat incoming">
                      <span className="bi bi-robot"></span>
                      <p>{item.text}</p>
                    </li>
                  );
                }
              })}
            </div>
          </ul>
          <div className="chat-input">
            <textarea
              placeholder="Viết tin nhắn..."
              required
              onChange={handleInputChange}
              value={inputValue}
            ></textarea>
            <span
              id="send-btn"
              className="bi bi-send-fill"
              onClick={handleSubmit}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
}
