import React, { MouseEventHandler, useState } from "react";
import { ChangeEventHandler, FocusEventHandler } from "react";
import styles from "./SignUpLayout.module.scss";
import classNames from "classnames/bind";

import { Logo } from "@/components/Logo";
import { Input } from "@/src/sharing/ui-input";
import { Button } from "@/components/Button";
import { EyeIcon } from "@/components/EyeIcon";
import { SocialSignUp } from "@/components/SocialSignup";
import useValidation from "@/src/sharing/util/useValidation";

const cx = classNames.bind(styles);
const placeholderEmail = "이메일을 입력해주세요.";
const placeholderPassword = "영문, 숫자를 조합해 8자 이상 입력해주세요.";
const placeholderConfirmPassword = "비밀번호와 일치하는 값을 입력해주세요.";

export const SignUpLayout = () => {
  const [value, setValue] = useState({
    passwordType: "password",
    confirmPasswordType: "password",
    emailHasError: false,
    passwordHasError: false,
    confirmPasswordHasError: false,
  });

  const emailValidation = useValidation("", {
    required: { value: true, message: "이메일을 입력해주세요." },
  });
  const passwordValidation = useValidation("", {
    required: { value: true, message: "비밀번호를 입력해주세요." },
  });
  const confirmPasswordValidation = useValidation("", {
    required: { value: true, message: "비밀번호를 입력해주세요." },
  });

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    emailValidation.setInput(e.target.value);
  };
  const handlepasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    passwordValidation.setInput(e.target.value);
  };
  const handlepasswordCorrectChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    confirmPasswordValidation.setInput(e.target.value);
  };
  const handleEmailBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    emailValidation.validate();
    if (emailValidation.validate()) {
      setValue((prevValue) => ({
        ...prevValue,
        emailHasError: false,
      }));
    } else {
      setValue((prevValue) => ({
        ...prevValue,
        emailHasError: true,
      }));
    }
  };
  const handlePasswordBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    passwordValidation.validate();
    if (passwordValidation.validate()) {
      setValue((prevValue) => ({
        ...prevValue,
        passwordHasError: false,
      }));
    } else {
      setValue((prevValue) => ({
        ...prevValue,
        passwordHasError: true,
      }));
    }
  };
  const handlePasswordCorrectBlur: FocusEventHandler<HTMLInputElement> = (
    e
  ) => {
    confirmPasswordValidation.validate();
    if (confirmPasswordValidation.validate()) {
      setValue((prevValue) => ({
        ...prevValue,
        confirmPasswordHasError: false,
      }));
    } else {
      setValue((prevValue) => ({
        ...prevValue,
        confirmPasswordHasError: true,
      }));
    }
  };
  const handlePasswordType: MouseEventHandler<HTMLImageElement> = (e) => {
    setValue((prevValue) => ({
      ...prevValue,
      passwordType: value.passwordType === "password" ? "text" : "password",
    }));
  };
  const handleConfirmPasswordType: MouseEventHandler<HTMLImageElement> = (
    e
  ) => {
    setValue((prevValue) => ({
      ...prevValue,
      confirmPasswordType:
        value.confirmPasswordType === "password" ? "text" : "password",
    }));
  };

  return (
    <div className={cx("background")}>
      <div className={cx("container")}>
        <form className={cx("input-container")}>
          <Logo />
          <div className={cx(["email", "input"])}>
            <div className={cx("label")}>이메일</div>
            <Input
              value={emailValidation.input}
              placeholder={placeholderEmail}
              hasError={value.emailHasError}
              helperText={emailValidation.error}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
          </div>
          <div className={cx(["password", "input"])}>
            <div className={cx("label")}>비밀번호</div>
            <Input
              value={passwordValidation.input}
              placeholder={placeholderPassword}
              type={value.passwordType}
              hasError={value.passwordHasError}
              helperText={passwordValidation.error}
              onChange={handlepasswordChange}
              onBlur={handlePasswordBlur}
            />
            <EyeIcon src={value.passwordType} onClick={handlePasswordType} />
          </div>
          <div className={cx(["password", "input"])}>
            <div className={cx("label")}>비밀번호 확인</div>
            <Input
              value={confirmPasswordValidation.input}
              placeholder={placeholderConfirmPassword}
              type={value.confirmPasswordType}
              hasError={value.confirmPasswordHasError}
              helperText={confirmPasswordValidation.error}
              onChange={handlepasswordCorrectChange}
              onBlur={handlePasswordCorrectBlur}
            />
            <EyeIcon
              src={value.confirmPasswordType}
              onClick={handleConfirmPasswordType}
            />
          </div>
          <Button
            email={emailValidation.input}
            password={passwordValidation.input}
          />
        </form>
        <SocialSignUp />
      </div>
    </div>
  );
};
