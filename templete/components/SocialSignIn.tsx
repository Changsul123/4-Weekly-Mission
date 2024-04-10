import styles from "./SocialSignIn.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "@/src/sharing/util";
import Link from "next/link";
const cx = classNames.bind(styles);

export const GOOGLE_IMAGE = "images/google.svg";
export const KAKAOTALK_IMAGE = "images/kakaotalk.svg";

export const SocialSignIn = () => {
  return (
    <div className={cx("share-container")}>
      <div>소셜 로그인</div>
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
