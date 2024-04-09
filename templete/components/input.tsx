import { useState } from "react";
import styles from "./input.module.scss";

interface Props {
  placeholder: string;
  disabled: boolean;
  error: { message: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function TextFieldInput({
  placeholder,
  disabled,
  error,
  handleChange,
  ...props
}: Props) {
  const [status, setStatus] = useState("inActive");

  const handleFocus = () => {
    setStatus("focused");
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      error.message = "값을 입력해 주세요.";
      setStatus("error");
    } else {
      setStatus("inActive");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
