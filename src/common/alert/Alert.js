import styles from "./Alert.module.css";

export function Alert(props) {
  const { AlertBanner } = styles;

  return (
    <div className={AlertBanner}>
        <strong>Warning: </strong>{props.alertText}
    </div>
  );
}
