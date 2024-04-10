import React, { MouseEventHandler, useState } from "react";
import { ChangeEventHandler, FocusEventHandler } from "react";
import { Input } from "@/src/sharing/ui-input";
import styles from "./SignInLayout.module.scss";
import classNames from "classnames/bind";
import { Logo } from "@/components/Logo";
import { EyeIcon } from "@/components/EyeIcon";
import { SocialSignIn } from "@/components/SocialSignIn";

const cx = classNames.bind(styles);

export const SignInLayout = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    passwordType: "password",
    pwEyeIcon: "EYE_OFF_IMAGE",
    emailMessage: "",
    passWordMessage: "",
    placeholderEmail: "이메일을 입력해주세요.",
    placeholderPassword: "영문, 숫자를 조합해 8자 이상 입력해주세요.",
    hasError: false,
  });

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue((prevValue) => ({ ...prevValue, email: e.target.value }));
  };
  const handlepasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue((prevValue) => ({ ...prevValue, password: e.target.value }));
  };
  const handleEmailBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    setValue((prevValue) => ({
      ...prevValue,
      emailMessage: e.target.value === "" ? "입력값 없음" : "",
    }));
  };
  const handlePasswordBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    setValue((prevValue) => ({
      ...prevValue,
      passWordMessage: e.target.value === "" ? "입력값 없음" : "",
    }));
  };
  const handleEyeClick: MouseEventHandler<HTMLImageElement> = (e) => {
    setValue((prevValue) => ({
      ...prevValue,
      passwordType: value.passwordType === "password" ? "text" : "password",
      pwEyeIcon:
        value.pwEyeIcon === "EYE_OFF_IMAGE" ? "EYE_ON_IMAGE" : "EYE_OFF_IMAGE",
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
              value={value.email}
              placeholder={value.placeholderEmail}
              hasError={value.hasError}
              helperText={value.emailMessage}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
          </div>
          <div className={cx(["password", "input"])}>
            <div className={cx("label")}>비밀번호</div>
            <Input
              value={value.password}
              placeholder={value.placeholderPassword}
              type={value.passwordType}
              hasError={value.hasError}
              helperText={value.passWordMessage}
              onChange={handlepasswordChange}
              onBlur={handlePasswordBlur}
            />
            <EyeIcon src={value.pwEyeIcon} onClick={handleEyeClick} />
          </div>
          <div className={cx("button")}>로그인</div>
        </form>
        <SocialSignIn />
      </div>
    </div>
  );
};
