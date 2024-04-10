import React, { MouseEventHandler, useState } from "react";
import { ChangeEventHandler, FocusEventHandler } from "react";
import { Input } from "@/src/sharing/ui-input";
import styles from "./SignInLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const LOGO_IMAGE = "images/linkbrary.svg";
export const GOOGLE_IMAGE = "images/google.svg";
export const KAKAOTALK_IMAGE = "images/kakaotalk.svg";
export const EYE_ON_IMAGE = "images/eye-on.svg";
export const EYE_OFF_IMAGE = "images/eye-off.svg";

export const SignInLayout = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    type: "password",
    eyeIcon: EYE_OFF_IMAGE,
    emailMessage: "",
    passWardMessage: "",
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
      passWardMessage: e.target.value === "" ? "입력값 없음" : "",
    }));
  };
  const handleEyeClick: MouseEventHandler<HTMLImageElement> = (e) => {
    setValue((prevValue) => ({
      ...prevValue,
      type: value.type === "password" ? "text" : "password",
      eyeIcon: value.eyeIcon === EYE_OFF_IMAGE ? EYE_ON_IMAGE : EYE_OFF_IMAGE,
    }));
  };

  return (
    <div className={cx("background")}>
      <div className={cx("container")}>
        <form className={cx("input-container")}>
          <div className={cx("article")}>
            <img
              className={cx("logo")}
              src={LOGO_IMAGE}
              alt="Linkbrary 서비스 로고"
            />
            <div>
              회원이 아니신가요? <span>회원 가입하기</span>
            </div>
          </div>
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
              type={value.type}
              hasError={value.hasError}
              helperText={value.passWardMessage}
              onChange={handlepasswordChange}
              onBlur={handlePasswordBlur}
            />
            <img
              className={cx("eye-icon")}
              src={value.eyeIcon}
              onClick={handleEyeClick}
            />
          </div>
          <div className={cx("button")}>로그인</div>
        </form>
        <div className={cx("share-container")}>
          <div>소셜 로그인</div>
          <div className={cx("images")}>
            <div className={cx(["image", "google"])}>
              <img src={GOOGLE_IMAGE} />
            </div>
            <div className={cx(["image", "kakaotalk"])}>
              <img src={KAKAOTALK_IMAGE} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
