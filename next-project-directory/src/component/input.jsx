import { useState } from "react";
import styles from "./input.module.scss";

export default function TextFieldInput({
  placeholder,
  disabled,
  error,
  handleChange,
  ...props
}) {
  const [status, setStatus] = useState("inActive");

  const handleFocus = () => {
    setStatus("focused");
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      error.message = "값을 입력해 주세요.";
      setStatus("error");
    } else {
      setStatus("inActive");
    }
  };

  const handleInputChange = (e) => {
    if (e.target.value) {
      setStatus("active");
    }
    handleChange(e);
  };

  const handleMouseOver = () => {
    setStatus("hover");
  };

  const handleMouseOut = () => {
    setStatus("inActive");
  };

  return (
    <div className={styles.StyledDiv}>
      <input
        {...props}
        className={`${styles.StyledInput} ${styles[status]}`}
        placeholder={placeholder}
        type="text"
        $status={status}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        disabled={disabled}
      />
      <span className={styles.StyledSpan}>{error.message}</span>
    </div>
  );
}
