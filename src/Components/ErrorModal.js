import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={styles.error}>
      <h2>{props.error.title}</h2>
      <p>{props.error.message}</p>
      <button onClick={props.errorHandler} className={styles.errorBtn}>OK</button>
    </div>
  );
};

export default ErrorModal;
