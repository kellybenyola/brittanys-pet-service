import React, { useRef, useState } from "react";
import styles from "./EmailForm.module.css";
import { useDispatch } from "react-redux";
import { sendEmailData } from "../../../store/email-slice";
import useValidation from "../../../hooks/use-validation";
import { FaTelegramPlane } from "react-icons/fa";
import Modal from "../Modal/Modal";


const EmailForm = (props) => {
  const dispatch = useDispatch();
  const emailSignUpForm = useRef();
  const [validSend, setValidSend] = useState(false);
  const {
    value: email,
    isValid: emailValid,
    handleBlur: emailBlur,
    handleChange: emailChange,
    reset: emailReset,
  } = useValidation((value) => value.trim() !== "");

  const submitEmailHandler = (event) => {
    event.preventDefault();
    if (!emailValid) {
      return;
    }
    dispatch(sendEmailData());
    emailReset();
    setValidSend(true);
  };

  const handleEmailModalClick = ()=>{
    setValidSend(false);
  }



  return (
    <>
        {validSend && <Modal
            title="Thanks for signing up!"
            message="Stay tuned for updates in your inbox."
            onErrorClick={handleEmailModalClick}
         /> }
    <form
      id="email-form"
      ref={emailSignUpForm}
      onSubmit={submitEmailHandler}
      className={styles.emailForm}
    >
      <div>
        <input
          name="user_email"
          type="email"
          value={email}
          onChange={emailChange}
          onBlur={emailBlur}
          placeholder={props.placeHolder}
        />
        <button disabled={!emailValid} type="submit">
          <FaTelegramPlane />
        </button>
      </div>
      {validSend && 
        <p>Thanks for signing up!</p>
      }
    </form>
    </>
  );
};

export default EmailForm;
