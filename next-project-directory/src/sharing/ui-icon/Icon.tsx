import IconAdd from "../../folder/ui-add-folder-button/add.svg";

const icons = {
  IconAdd,
};

type IconSize = { width: number; height: number };

interface IconProps {
  type: keyof typeof icons;
  size?: number | IconSize;
  color?: string;
}

export const Icon = ({ size: _size, type, color }: IconProps) => {
  const IconComponent = icons[type];
  const { width, height } =
    typeof _size === "object" ? _size : { width: _size, height: _size };

  return <IconComponent width={width} height={height} fill={color} />;
};
