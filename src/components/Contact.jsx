import React, { useState } from "react";
import styles from "../css/Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  AOS.init({
    offset: 180,
    duration: 800
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      document.getElementById("submit").disabled = true;

      await fetch("https://server-q139.onrender.com/", {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Data Saved Successfully!");

      document.getElementById("submit").disabled = false;

      // Clear form fields after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5 mb-5" id="contact">
      <div className="row featurette " style={{ justifyContent: "center" }}>
        <h1 data-aos="flip-right">Contact Us</h1>
        <hr className="featurette-divider " />
        <div className={`col-md-5 order-md-2 ${styles.contactForm}`} data-aos="zoom-in-up">
          <div className="m-1">
            <form id="contact_form" name="contact_form" onSubmit={handleSubmit}>
              <div className="mb-3  ">
                <div className="col">
                  <label>Your Name:</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    maxLength="50"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="email_addr">Your Email:</label>
                  <input
                    type="email"
                    required
                    maxLength="50"
                    className="form-control"
                    id="email_addr"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <label>Phone:</label>
                  <input
                    type="phone"
                    required
                    maxLength="10"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone no.."
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="fs-6 fw-light mb-2">
                Post your message below. We will get back to you ASAP
              </div>
              <div className="mb-5">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-success" id="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
