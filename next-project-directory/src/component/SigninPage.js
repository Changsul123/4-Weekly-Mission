import { useState } from "react";
import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER,
} from "./utils.js";
// import styles from "./Signin.module.css";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmailInput = (email) => {
    if (email === "") {
      setInputError(email, "이메일을 입력해주세요.");
      return;
    }
    if (!isEmailValid(email)) {
      setInputError(email, "올바른 이메일 주소가 아닙니다.");
      return;
    }
    removeInputError(email);
  };

  const validatePasswordInput = (password) => {
    if (password === "") {
      setInputError(password, "비밀번호를 입력해주세요.");
      return;
    }
    removeInputError(password);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const isTestUser =
      email === TEST_USER.email && password === TEST_USER.password;

    if (isTestUser) {
      try {
        const response = await fetch(
          "<https://bootcai.codeit.kr/api/sign-in>",
          {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
              email: TEST_USER.email,
              password: TEST_USER.password,
            }),
          }
        );

        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);

        if (localStorage.getItem("accessToken")) {
          location.href = "/folder";
        }
      } catch (error) {
        console.error("Error:", error);
      }

      return;
    }
    setInputError(email, "이메일을 확인해주세요.");
    setInputError(password, "비밀번호를 확인해주세요.");
  };

  return (
    <form id="form" onSubmit={submitForm}>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => validateEmailInput(email)}
      />
      <div id="email-error-message"></div>

      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => validatePasswordInput(password)}
      />
      <button
        id="password-toggle"
        type="button"
        onClick={() => togglePassword(password)}
      >
        Toggle
      </button>
      <div id="password-error-message"></div>

      <button type="submit">Submit</button>
    </form>
  );
}
