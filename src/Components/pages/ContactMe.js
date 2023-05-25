import { useState, useRef } from "react";
import useInput from "../hooks/use-input";
import emailjs from "@emailjs/browser";

import styles from "./css/ContactMe.module.css";

let textBeforeForm = (
  <p>
    I am interested in learning and full time job opportunities - especially on
    ambitious or large projects. However, if you have any other requests or
    questions, don't hesitate to contact me using form below either.
  </p>
);

const SimpleInput = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredText,
    isValid: enteredTextIsValid,
    hasError: textInputHasError,
    valueChangeHandler: textChangedHandler,
    inputBlurHandler: textBlurHandler,
    reset: resetTextInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredTextIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    emailjs
      .sendForm("service_h5vzlm8", "template_euhddy9", form.current, "")
      .then(
        (result) => {
          console.log(result.text);
          setShowPopup(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    resetNameInput();
    resetEmailInput();
    resetTextInput();
  };

  const nameInputClasses = nameInputHasError
    ? `${styles.formControl} ${styles.invalid}`
    : `${styles.formControl}`;

  const emailInputClasses = emailInputHasError
    ? `${styles.formControl} ${styles.invalid}`
    : `${styles.formControl}`;

  const textInputClasses = textInputHasError
    ? `${styles.formControl} ${styles.invalid}`
    : `${styles.formControl}`;

  return (
    <form onSubmit={formSubmissionHandler}>
      <h1>Contact Me</h1>
      <div className={styles.textBeforeForm}>{textBeforeForm}</div>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className={textInputClasses}>
        <label htmlFor="text">Your message</label>
        <textarea
          type="text"
          id="text"
          onChange={textChangedHandler}
          onBlur={textBlurHandler}
          value={enteredText}
        />
        {textInputHasError && (
          <p className="error-text">Please enter a valid message.</p>
        )}
      </div>

      <div className={styles.formActions}>
        <button className={styles.formButton} disabled={!formIsValid}>
          Submit
        </button>
      </div>
      {showPopup && (
        <div
          className={`${styles.popupContainer} ${
            showPopup ? styles.active : ""
          }`}
        >
          <div className={styles.popupContent}>
            <h3>Message Sent!</h3>
            <p>Your message was sent.</p>
            <button
              className={styles.formButton}
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default SimpleInput;
