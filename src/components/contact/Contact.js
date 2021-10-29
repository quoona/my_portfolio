import React, { useRef, useState, useContext } from "react";
import "./contact.css";

import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
function Contact() {
  const theme = useContext(ThemeContext);
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0g23iq2",
        "template_33am8wy",
        formRef.current,
        "user_V8yeJP85qt7hYM7n0CRb4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div
        className="c-bg"
        style={{ backgroundColor: theme.state.darkMode && "#333" }}
      ></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title"> Lets discuss :)</h1>
          <div className="c-info">
            <div className="c-info-item">
              <FiPhone className="c-icon" />+ 84 787 926 902
            </div>
            <div className="c-info-item">
              <FiMail className="c-icon" />
              nqnam229@gmail.com
            </div>
            <div className="c-info-item">
              <FiMapPin className="c-icon" />
              77 Xuan Hong, Phuong 12, Tan Binh
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>What's your story? </b> Get in touch with mee.
          </p>
          <form method="post" ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: theme.state.darkMode && "#333",
                color: theme.state.darkMode && "white",
                borderBottom: theme.state.darkMode && "#333",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: theme.state.darkMode && "#333",
                color: theme.state.darkMode && "white",
                borderBottom: theme.state.darkMode && "#333",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: theme.state.darkMode && "#333",
                color: theme.state.darkMode && "white",
                borderBottom: theme.state.darkMode && "#333",
              }}
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: theme.state.darkMode && "#333",
                color: theme.state.darkMode && "white",
                border: theme.state.darkMode && "#333",
              }}
              name="message"
              placeholder="Message"
              id="message"
              rows="5"
            ></textarea>
            <button type="submit">Okayyy </button>
            <p className="c-done">
              {done &&
                "Thanks for contacting mee, I will reply to you as soon as possible <3"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
