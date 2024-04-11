import { MouseEventHandler } from "react";
import classNames from "classnames/bind";
import styles from "./EyeIcon.module.scss";
const cx = classNames.bind(styles);

export const EYE_ON_IMAGE = "images/eye-on.svg";
export const EYE_OFF_IMAGE = "images/eye-off.svg";

export type EyeIconProps = {
  src: string;
  onClick: MouseEventHandler<HTMLImageElement>;
};

export const EyeIcon = ({ src, onClick }: EyeIconProps) => {
  const srcImg = src === "text" ? EYE_ON_IMAGE : EYE_OFF_IMAGE;
  return <img className={cx("eye-icon")} src={srcImg} onClick={onClick} />;
};
