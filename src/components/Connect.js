import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import Swal from "sweetalert2";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const Connect = ({ setConnectOffset }) => {
  const form = useRef();
  const connectRef = useRef();

  useEffect(() => {
    setConnectOffset(connectRef.current.offsetTop);
  }, [connectRef]);

  const fireSwal = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: "success",
      title: "Email Sent successfully",
    });
  };

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          event.target.reset();
          fireSwal();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="w-100 padding-bottom text-wrap bg-next-dark-blue text-light ps-4 pt-5"
      id="Connect"
    >
      <div
        className="d-flex align-items-center"
        data-aos="fade-right"
        ref={connectRef}
      >
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
          Reach me out by filling the short form below or send an email to{" "}
          <span className="pink-text ">yaswanth456p@gmail.com</span>
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
              <a className="a">Submit</a>
            </button>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-center justify-content-md-start col-12 col-md-6 align-items-end mt-5">
        {/* Links */}
        <a href="https://github.com/ypotti" target="_blank">
          <div className="Connect__link">
            <SiGithub className="Connect__Link__Icon" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/yaswanthpotti/" target="_blank">
          <div className="Connect__link">
            <FaLinkedinIn className="Connect__Link__Icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Connect;
