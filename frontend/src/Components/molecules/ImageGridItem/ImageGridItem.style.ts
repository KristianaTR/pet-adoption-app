import styled from "styled-components";
import Image from '@Components/atoms/Image';
import { deviceMax } from "Styles/Breakpoints";

export const GridItem = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundWhite};
    overflow: hidden;
    border-radius: 8px;
    cursor: zoom-in;

    &:nth-child(3n -2) {
        grid-column: span 2;
        grid-row: span 2;

        @media ${deviceMax.laptop} {
            grid-column: unset;
            grid-row: unset;
        }
    }

`;

export const GaleryImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    

    &:hover {
        transform: scale(1.1);
    }
`;