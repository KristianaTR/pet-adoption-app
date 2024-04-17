import { TooltipContainer } from './Tooltip.style';
import { TooltipProps } from "./Tooltip.types";

const MyTooltip = ({ children, tip }: TooltipProps) => {
  return (
    <TooltipContainer>
      {children}
      <span className="tip" > {tip} </span>
    </TooltipContainer>
  );
};

export default MyTooltip;
