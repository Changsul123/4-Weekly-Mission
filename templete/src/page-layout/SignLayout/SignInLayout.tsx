import styles from "./SignInLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const LOGO_IMAGE = "images/linkbrary.svg";
export const GOOGLE_IMAGE = "images/google.svg";
export const KAKAOTALK_IMAGE = "images/kakaotalk.svg";

type SignInLayoutProps = {};

export const SignInLayout = ({}: SignInLayoutProps) => {
  return (
    <div className={cx("background")}>
      <div className={cx("container")}>
        <div className={cx("input-container")}>
          <div className="item">
            <img
              className={cx("logo")}
              src={LOGO_IMAGE}
              alt="Linkbrary 서비스 로고"
            />
          </div>
          <div>
            회원이 아니신가요? <span>회원 가입하기</span>
          </div>
          <div className={cx("label")}>이메일</div>
          <div className={cx("label")}>비밀번호</div>
        </div>
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
