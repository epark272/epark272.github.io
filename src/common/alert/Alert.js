export function Alert(props) {
  return (
    <div className="alert alert-warning shadow-sm">
      <span className="font-semibold">Heads up:</span>
      <span>{props.alertText}</span>
    </div>
  );
}
