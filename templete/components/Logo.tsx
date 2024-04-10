import styles from "./Logo.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "@/src/sharing/util";
import Link from "next/link";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);
export const LOGO_IMAGE = "images/linkbrary.svg";

export const Logo = () => {
  const router = useRouter();

  return (
    <>
      {router.asPath === "/signin" && (
        <div className={cx("article")}>
          <img
            className={cx("logo")}
            src={LOGO_IMAGE}
            alt="Linkbrary 서비스 로고"
          />
          <div>
            회원이 아니신가요?{" "}
            <Link href={ROUTE.회원가입}>
              <span>회원 가입하기</span>
            </Link>
          </div>
        </div>
      )}
      {router.asPath === "/signup" && (
        <div className={cx("article")}>
          <img
            className={cx("logo")}
            src={LOGO_IMAGE}
            alt="Linkbrary 서비스 로고"
          />
          <div>
            이미 회원이신가요?{" "}
            <Link href={ROUTE.로그인}>
              <span>로그인하기</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
