import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { useRouter } from "next/router";
import axios from "axios";

const cx = classNames.bind(styles);

export type ButtonProps = {
  email: string;
  password: string;
};

export const Button = ({ email, password }: ButtonProps) => {
  const handleSignInApiRequest = async () => {
    try {
      const response = await axios
        .post("https://bootcamp-api.codeit.kr/api/sign-in", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            router.push("/folder");
          }
        });
    } catch (error) {}
  };
  const handleSignUpApiRequest = async () => {
    try {
      const response = await axios
        .post("https://bootcamp-api.codeit.kr/api/sign-up", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            router.push("/folder");
          }
        });
    } catch (error) {}
  };

  const router = useRouter();
  return (
    <>
      {router.asPath === "/signin" && (
        <div className={cx("button")} onClick={handleSignInApiRequest}>
          로그인
        </div>
      )}
      {router.asPath === "/signup" && (
        <div className={cx("button")} onClick={handleSignUpApiRequest}>
          회원가입
        </div>
      )}
    </>
  );
};
