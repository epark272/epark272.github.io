
function StyledButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={
        "flex items-center mx-1 my-2 px-1 border bg-blue-100 rounded-md border-transparent hover:border-blue-400 hover:drop-shadow active:border-blue-400 active:drop-shadow " + props.className
      }
    >
      {props.children}
    </button>
  );

}

export default StyledButton;