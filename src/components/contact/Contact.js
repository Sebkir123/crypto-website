import React, { useState } from "react";
import "./ContactStyle.css";
import { Player } from "@lottiefiles/react-lottie-player";

export const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="contact">
      <div className="container">
        {/* left */}

        <div className="left">
          <h2>Let's get in touch today!</h2>
          <p className="smallHeader">
            If you have a few questions, please fill out the form on the right
            site!
          </p>

          <Player
            src="https://assets2.lottiefiles.com/packages/lf20_ipd377dh.json"
            className="player"
            loop
            autoplay
          />
        </div>

        {/* right */}
        <div className="right">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <h1>Contact Us</h1>
              <div>
                <label className="smallHeader">Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div>
                <label className="smallHeader">Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div>
                <label className="smallHeader">Message</label>
                <textarea rows="10" placeholder="Enter your message" required />
              </div>
              <button className="btn" type="submit">
                {status}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
