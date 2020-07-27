import React, { useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

export default function MyProfile() {
  const [mail, setMail] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setMail({
      ...mail,
      [evt.target.name]: value,
    });
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(mail);
    if (
      mail.name === "" ||
      mail.phone === "" ||
      mail.email === "" ||
      mail.message === ""
    ) {
      alert("Field empty");
    } else {
      console.log("uso");
      emailjs
        .sendForm("gmail", "contact", e.target, "user_1Pzx7eL44z7MskEkWi9Di")
        .then((result) => {
          console.log(result);
          alert("Email Sent");
          window.location.reload(true);
        })
        .catch((err) => {
          console.log(err.text);
        });
    }
  };
  return (
    <React.Fragment>
      <div className="container-contact100">
        <div className="wrap-contact100">
          <div className="contact100-form-title">
            <span className="contact100-form-title-1">Contact Me</span>

            <span className="contact100-form-title-2">
              Feel free to contact me anytime!
            </span>
          </div>

          <form className="contact100-form validate-form" onSubmit={submit}>
            <div
              className="wrap-input100 validate-input"
              data-validate="Name is required"
            >
              <span className="label-input100">Full Name:</span>
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Enter full name"
                onChange={handleChange}
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <span className="label-input100">Email:</span>
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Enter email addess"
                onChange={handleChange}
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Phone is required"
            >
              <span className="label-input100">Phone:</span>
              <input
                className="input100"
                type="text"
                name="phone"
                placeholder="Enter phone number"
                onChange={handleChange}
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Message is required"
            >
              <span className="label-input100">Message:</span>
              <textarea
                className="input100"
                name="message"
                placeholder="Your Comment..."
                onChange={handleChange}
              ></textarea>
              <span className="focus-input100"></span>
            </div>

            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn" type="submit">
                <span>
                  Submit
                  <i
                    className="fa fa-long-arrow-right m-l-7"
                    aria-hidden="true"
                  ></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div id="dropDownSelect1"></div>
    </React.Fragment>
  );
}
