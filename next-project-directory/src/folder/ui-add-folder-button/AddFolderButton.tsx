import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
// import AddIcon from "./add.svg";
import { MouseEventHandler } from "react";
// import { Icon } from "sharing/ui-icon/Icon";

const cx = classNames.bind(styles);

type AddFolderButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const AddFolderButton = ({ onClick }: AddFolderButtonProps) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <span>폴더 추가</span>
      {/* <Icon size={16} type="IconAdd" /> */}
      {/* <AddIcon className={cx("icon")} /> */}
    </button>
  );
};
