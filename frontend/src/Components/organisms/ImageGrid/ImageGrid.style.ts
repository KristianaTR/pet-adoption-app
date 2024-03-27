import { deviceMax } from "Styles/Breakpoints";
import styled from "styled-components";

export const GridGalery = styled.div`
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 250px;
    grid-auto-flow: dense;
    grid-gap: 10px; 
    max-height: 700px; 
    overflow-y: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
    
    @media ${deviceMax.tablet} {
        max-height: 300px;
        padding: 0;
    }
`;

