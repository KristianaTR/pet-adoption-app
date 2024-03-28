import { StyledIcon } from "./Icon.style";
import { IconProps } from "./Icon.types";

const Icon: React.FC<IconProps> = ({ width, height, color, icon, variant, className}) => {
  return <StyledIcon  
    width={width} 
    height={height ?? width} 
    color={color}
    variant={variant}
    icon={icon}
    className={className}
  >
    <use xlinkHref={`/Icons/${variant}.svg#${icon}`} />
  </StyledIcon>;
};

export default Icon;
