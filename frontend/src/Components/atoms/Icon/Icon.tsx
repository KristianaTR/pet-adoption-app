import { StyledIcon } from "./Icon.style";
import { IconProps } from "./Icon.types";

const Icon: React.FC<IconProps> = ({ width, height, color, icon, className}) => {
  return <StyledIcon  
    width={width} 
    height={height ?? width} 
    color={color}
    icon={icon}
    className={className}
  >
    <use xlinkHref={`/Icons/icons.svg#${icon}`} />
  </StyledIcon>;
};

export default Icon;
