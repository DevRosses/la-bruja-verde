import styles from "../../assets/styles/ui/Button.module.css";

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
      className={`${styles.button} ${className}`}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  );
}

export default Button;
