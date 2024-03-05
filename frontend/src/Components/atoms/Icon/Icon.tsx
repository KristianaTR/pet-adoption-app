import { StyledIcon } from "./Icon.style";
import { IconProps } from "./Icon.types";

const Icon: React.FC<IconProps> = ({ width, height, color, icon}) => {
  return <StyledIcon  
    width={width} 
    height={height ?? width} 
    color={color}
    icon={icon}
  >
    <use xlinkHref={`icons/icons.svg#${icon}`} />
  </StyledIcon>;
};

export default Icon;
