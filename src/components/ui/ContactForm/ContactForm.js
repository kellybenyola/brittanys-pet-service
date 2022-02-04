import React, { Fragment, useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { sendContactFormData } from "../../../store/contact-slice";
import useValidation from "../../../hooks/use-validation";
import Modal from "../../ui/Modal/Modal";

const ContactForm = (props) => {
  const dispatch = useDispatch();
  const [submitClickErr, setSubmitClickErr] = useState(false);
  const [validSubmit, setValidSubmit] = useState(false);
  const {
    line,
    contactForm,
    nameLabel,
    error,
    formInputs,
    nameInputs,
    nameError,
  } = styles;

  const {
    value: fName,
    error: fNameErr,
    isValid: fNameValid,
    handleBlur: fNameBlur,
    handleChange: fNameChange,
    reset: fNameReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: lName,
    error: lNameErr,
    isValid: lNameValid,
    handleBlur: lNameBlur,
    handleChange: lNameChange,
    reset: lNameReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: email,
    error: emailErr,
    isValid: emailValid,
    handleBlur: emailBlur,
    handleChange: emailChange,
    reset: emailReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: phone,
    error: phoneErr,
    isValid: phoneValid,
    handleBlur: phoneBlur,
    handleChange: phoneChange,
    reset: phoneReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: message,
    error: messageErr,
    isValid: messageValid,
    handleBlur: messageBlur,
    handleChange: messageChange,
    reset: messageReset,
  } = useValidation((value) => value.trim() !== "");

  const contactFormRef = useRef();


  const submitContactHandler = (event) => {
    event.preventDefault();
    if (
      !fNameValid ||
      !lNameValid ||
      !emailValid ||
      !phoneValid ||
      !messageValid
    ) {
      setSubmitClickErr(true);
      return;
    }
    dispatch(sendContactFormData());
    setValidSubmit(true);
    setSubmitClickErr(false);
    fNameReset();
    lNameReset();
    emailReset();
    phoneReset();
    messageReset();


  };

  const handleModalClick = () =>{
    setValidSubmit(false);
  }
  const fNameClass = fNameErr ? `${nameLabel} ${error}` : nameLabel;
  const lNameClass = lNameErr ? `${nameLabel} ${error}` : nameLabel;
  const fNameInputClass = fNameErr ? `${nameInputs} ${nameError}` : nameInputs;
  const lNameInputClass = lNameErr ? `${nameInputs} ${nameError}` : nameInputs;
  const emailClass = emailErr
    ? `${formInputs} ${error} ${line}`
    : `${formInputs} ${line}`;
  const phoneClass = phoneErr
    ? `${formInputs} ${error} ${line}`
    : `${formInputs} ${line}`;
  const messageClass = messageErr
    ? `${formInputs} ${error} ${line}`
    : `${formInputs} ${line}`;
  return (
    <Fragment>
        {validSubmit && <Modal
            title="Thanks for the message!"
            message="Keep an eye out for a response in your inbox."
            onErrorClick={handleModalClick}
         /> }
      <div className={contactForm}>
        <h1>{props.title}</h1>
        {submitClickErr && (
          <p className={error}>Oops! Please fill out the entire form!</p>
        )}
        {}
        <form
          id="contact-form"
          ref={contactFormRef}
          onSubmit={submitContactHandler}
        >
          <div className={line}>
            <div>
              <label className={fNameClass} htmlFor="fName">
                First Name
              </label>
              <label className={lNameClass} htmlFor="lName">
                Last Name
              </label>
            </div>
            <div>
              <input
                className={fNameInputClass}
                name="user_fName"
                type="text"
                value={fName}
                onChange={fNameChange}
                onBlur={fNameBlur}
                placeholder={props.fNamePlaceholder}
              />
              <input
                className={lNameInputClass}
                name="user_lName"
                type="text"
                value={lName}
                onChange={lNameChange}
                onBlur={lNameBlur}
                placeholder={props.lNamePlaceholder}
              />
            </div>
          </div>

          <div className={emailClass}>
            <label htmlFor="email">Email</label>
            <input
              name="user_email"
              type="email"
              value={email}
              onChange={emailChange}
              onBlur={emailBlur}
              placeholder={props.emailPlaceholder}
            />
          </div>

          <div className={phoneClass}>
            <label htmlFor="phone">Phone</label>
            <input
              name="user_phone"
              type="text"
              value={phone}
              onChange={phoneChange}
              onBlur={phoneBlur}
              placeholder={props.phonePlaceholder}
            />
          </div>

          <div className={messageClass}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              type="text"
              value={message}
              onChange={messageChange}
              onBlur={messageBlur}
              placeholder={props.messagePlaceholder}
            />
          </div>
          <div className={line}>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactForm;
