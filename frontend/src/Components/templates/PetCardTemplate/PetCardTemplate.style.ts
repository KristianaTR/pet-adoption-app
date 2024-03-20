import styled from "styled-components";
import { Link } from "react-router-dom";
import { deviceMax, deviceMin } from "Styles/Breakpoints";
interface CardImageProps {
  imageUrl: string;
}

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const CardWrapper = styled.div`
  padding: 7.5px;
  position: relative;
  min-height: 1px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

    display: block;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;

  @media ${deviceMin.mobileL} and ${deviceMax.tablet} {
    display: block;
    -ms-flex: 0 0 33.33333333%;
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }

  @media ${deviceMin.tablet} {
    display: block;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  height: 360px;
  // width: 300px;
  border-radius: 8px;
  box-sizing: border-box;
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.hover};
  }
  &:active {
    transform: scale(0.96);
  }
`;

export const CardBackground = styled.div`
  background: linear-gradient(rgba(11, 17, 24, 0) 56%, rgb(19, 22, 43) 94%);
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const CardImage = styled.div<CardImageProps>`
  background: url(${(props) => props.imageUrl}) center center;
  height: 360px;
  border-radius: 8px;
  background-size: cover;
  box-sizing: border-box;
`;

export const CardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;