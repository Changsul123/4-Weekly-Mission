import styles from "./SocialSignUp.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "@/src/sharing/util";
import Link from "next/link";
const cx = classNames.bind(styles);

export const GOOGLE_IMAGE = "images/google.svg";
export const KAKAOTALK_IMAGE = "images/kakaotalk.svg";

export const SocialSignUp = () => {
  return (
    <div className={cx("share-container")}>
      <div>다른 방식으로 로그인하기</div>
      <div className={cx("images")}>
        <Link href={ROUTE.구글}>
          <div className={cx(["image", "google"])}>
            <img src={GOOGLE_IMAGE} />
          </div>
        </Link>
        <Link href={ROUTE.카카오톡}>
          <div className={cx(["image", "kakaotalk"])}>
            <img src={KAKAOTALK_IMAGE} />
          </div>
        </Link>
      </div>
    </div>
  );
};
