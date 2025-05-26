

function Button({
  text,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon = null,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn ${className}`}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}

export default Button;
