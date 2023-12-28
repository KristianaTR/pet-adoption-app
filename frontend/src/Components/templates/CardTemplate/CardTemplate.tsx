import styled from "styled-components";
import { CardProps } from "./CardTemplate.types";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-white);
  max-height: 300px;
  min-height: 300px;
  overflow-y: hidden;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  // margin: 40px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  &:active {
    transform: scale(0.96);
  }
`;

const CardTemplate = ({ linkTo, children }: CardProps) => {
  return (
    <StyledLink to={linkTo}>
      <CardContainer>{children}</CardContainer>
    </StyledLink>
  );
};

export default CardTemplate;
