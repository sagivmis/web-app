const Button = ({ text, onClick, classN = "btn", color = "black" }) => {
  return (
    <button
      onClick={onClick}
      className={classN}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
