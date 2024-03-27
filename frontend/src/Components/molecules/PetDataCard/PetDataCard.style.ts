import Icon from "@Components/atoms/Icon";
import Heading from "@Components/atoms/Heading";
import Paragraph from "@Components/atoms/Paragraph";
import styled from "styled-components";
import { deviceMax } from "Styles/Breakpoints";

export const CardIcon = styled(Icon)`
  transition: transform 0.2s;
  color: ${({ theme }) => theme.colors.iconAccent}; !important
`;

export const CardHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.larger};
  @media ${deviceMax.laptop} {
    font-size: ${({ theme }) => theme.fontSize.normal};
  }
`;

export const CardParagraph = styled(Paragraph)`

  @media ${deviceMax.tablet} {
    margin: 0;
  }
`;

export const CardContainer = styled.div`
  border: 1px solid rgb(236, 236, 243);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  box-shadow: ${({ theme }) => theme.boxShadow.minimal};
  padding: 16px;
  box-sizing: border-box;
  display: block;

  &:hover {
    transform: scale(1.04);
    box-shadow: ${({ theme }) => theme.boxShadow.hover};
    ${CardIcon} {
      transform: rotate(45deg);
    }
  }

  @media ${deviceMax.laptop} {
    padding: 12px;
  }

`;
