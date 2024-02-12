import { ContainerProps } from "./FlexContainerTemplate.types";
import { FlexContainer } from "./FlexContainerTemplate.style";

const FlexContainerTemplate = ({
  flexDirection,
  justifyContent,
  alignItems,
  children,
}: ContainerProps) => {
  return (
    <FlexContainer
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </FlexContainer>
  );
};

export default FlexContainerTemplate;
