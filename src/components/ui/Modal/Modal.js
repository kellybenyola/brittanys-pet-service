import styles from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM from "react-dom";
import {FaPaw} from 'react-icons/fa';
const Backdrop = (props) => {
    return <div onClick={props.onErrorClick} className={styles.backdrop} />;
  };
  const ModalOverlay = (props) => {
    return (
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <button onClick={props.onErrorClick}><FaPaw /></button>
        </footer>
      </div>
    );
  };
  //the onClick function here allows user to click out fo the errorModal either via button or backdrop
  const Modal = (props) => {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onErrorClick={props.onErrorClick} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModalOverlay title={props.title} message={props.message} onErrorClick={props.onErrorClick} />,
          document.getElementById("modal-root")
        )}
      </Fragment>
    );
  };
  


export default Modal;