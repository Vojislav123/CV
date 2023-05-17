import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import styles from "./css/ContactMe.module.css";

const ContactMe = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [errorFields, setErrorFields] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();
    const requiredFields = ["user_name", "user_email", "message"];
    const missingFields = [];

    requiredFields.forEach((field) => {
      if (!form.current[field].value) {
        missingFields.push(field);
      }
    });

    setErrorFields(missingFields);

    if (missingFields.length > 0) {
      return;
    }

    emailjs
      .sendForm(
        "service_h5vzlm8",
        "template_euhddy9",
        form.current,
        ""
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowPopup(true);
          setErrorFields([]);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    if (errorFields.includes(fieldName)) {
      setErrorFields(errorFields.filter((field) => field !== fieldName));
    }
  };

  return (
    <div className={styles.formContainer}>
      <p>
        I am interested in learning and full time job opportunities - especially on ambitious or
        large projects. However, if you have any other requests or questions,
        don't hesitate to contact me using below form either.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          className={
            errorFields.includes("user_name")
              ? styles.errorInput
              : styles.inputOK
          }
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className={
            errorFields.includes("user_email")
              ? styles.errorInput
              : styles.inputOK
          }
          onChange={handleInputChange}
        />
        <label>Message</label>
        <div
          className={
            errorFields.includes("message") ? styles.errorInput : styles.inputOK
          }
        >
          <textarea
            name="message"
            className={
              errorFields.includes("message")
                ? styles.errorInput
                : styles.inputOK
            }
            onChange={handleInputChange}
          />
        </div>
        <input type="submit" className={styles.sendButton} value="Send" />
      </form>

      {showPopup && (
        <div
          className={`${styles.popupContainer} ${
            showPopup ? styles.active : ""
          }`}
        >
          <div className={styles.popupContent}>
            <h3>Message Sent!</h3>
            <p>Your message has been successfully sent.</p>
            <button
              className={styles.sendButton}
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactMe;
