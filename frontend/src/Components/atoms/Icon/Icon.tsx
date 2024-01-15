import { StyledIcon } from "./Icon.style";
import { IconProps } from "./Icon.types";

const Icon: React.FC<IconProps> = ({ src, alt, width, height, color }) => {
  return <StyledIcon 
    src={src} 
    alt={alt} 
    width={width} 
    height={height} 
    color={color}
  />;
};

export default Icon;
