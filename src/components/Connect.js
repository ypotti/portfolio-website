import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";

const Connect = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_uf81oy7",
        "template_ef42khe",
        form.current,
        "3Qw26hfSHA_YRIg7q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="w-100 pb-5 text-wrap bg-next-dark-blue text-light ps-4 pt-5">
      <div className="d-flex align-items-center" data-aos="fade-right">
        <div className="line-div"></div>
        <div className="section-heading ps-3">Connect</div>
      </div>
      <div
        className="text-light pt-5 pe-3  col-12 col-md-6  fw-bolder"
        data-aos="fade-right"
      >
        <h1>Interested in working with me or perhaps just talk</h1>
      </div>
      <div className="mt-5 mb-5 coloured-text" data-aos="fade-right">
        <div className="mb-2  col-12 col-md-6 pe-3">
          Reach me out by filling the short form below or by sending an email to{" "}
          <span className="pink-text fw-bold">yaswanth456p@gmail.com</span>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-5 pe-3" data-aos="fade-down">
        <form ref={form} onSubmit={sendEmail} className="d-flex flex-column">
          <div className="d-flex flex-column mb-2">
            <label className="mb-2">Name</label>
            <input type="text" name="user_name" className="form-input" />
          </div>
          <div className="d-flex flex-column mb-2">
            <label className="mb-2">Email</label>
            <input type="email" name="user_email" className="form-input" />
          </div>
          <div className="d-flex flex-column mb-4">
            <label className="mb-2">Message</label>
            <textarea name="message" rows={5} className="form-input" />
          </div>
          <div className="mb-2">
            <button className="butn" type="submit">
              <a className="a" href="#">
                Submit
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connect;
