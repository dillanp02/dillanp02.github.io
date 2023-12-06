import { DefaultImage } from "./DefaultImage";
import styled, { css } from "styled-components";

interface ImgProp { 
    show: boolean; 
}

export const BackgroundImage = styled(DefaultImage)<ImgProp>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 2px;
    opacity: 0;
    filter: blur(3px) brightness(${({ theme }) => theme.colors.image_darkness_factor});
    object-fit: cover;
    
    ${props => props.show && css`
        opacity: 1;
    `};
`