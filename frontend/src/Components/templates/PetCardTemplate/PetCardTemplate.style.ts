import styled from "styled-components";
import { Link } from "react-router-dom";

interface CardImageProps {
    imageUrl: string;
}

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const CardWrapper = styled.div `
    position: relative;
    height: 360px;
    width: 300px;
    border-radius: 8px;
`;

export const CardBackground = styled.div `
    background: linear-gradient(rgba(11, 17, 24, 0) 56%, rgb(19, 22, 43) 94%);
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
`;

export const CardImage = styled.div<CardImageProps> `
    background: url(${props => props.imageUrl}) center center;
    height: 360px;
    border-radius: 8px;
    background-size: cover;
`;

export const CardTextBox = styled.div `
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  max-height: 300px;
  min-height: 300px;
  overflow-y: hidden;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  // margin: 40px;
  cursor: pointer;
  &:hover {
    ${({ theme }) => theme.boxShadow.hover};
  }
  &:active {
    transform: scale(0.96);
  }
`;