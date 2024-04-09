import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from "react";
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
  const value = "";
  const placeholderEmail = "이메일을 입력해주세요.";
  const placeholderPassword = "영문, 숫자를 조합해 8자 이상 입력해주세요.";
  const hasError = false;
  const helperText = "";
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
  };
  const onBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
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
              value={value}
              placeholder={placeholderEmail}
              hasError={hasError}
              helperText={helperText}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
          <div className={cx(["password", "input"])}>
            <div className={cx("label")}>비밀번호</div>
            <Input
              value={value}
              placeholder={placeholderPassword}
              hasError={hasError}
              helperText={helperText}
              onChange={onChange}
              onBlur={onBlur}
            />
            <img className={cx("eye-icon")} src={EYE_OFF_IMAGE} />
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
