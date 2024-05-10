import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { Footer } from "@/src/sharing/ui-footer";
import { NavigationBar } from "@/src/sharing/ui-navigation-bar";
import { ReactNode, RefObject } from "react";
import { useGetUser } from "@/src/auth/data-access-auth/api";

const cx = classNames.bind(styles);

type LayoutProps = {
  children: ReactNode;
  isSticky?: boolean;
  footerRef?: RefObject<HTMLElement>;
};

export const Layout = ({
  children,
  isSticky = true,
  footerRef,
}: LayoutProps) => {
  const { data } = useGetUser();

  const { email, imageSource } = data;
  const profile = data ? { email, imageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer ref={footerRef} />
    </div>
  );
};
