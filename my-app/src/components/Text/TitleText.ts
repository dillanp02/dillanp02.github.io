import styled from "styled-components";
import { MOBILE_RESPONSIVE_SIZE } from "../../constants/css-constants";

export const TitleText = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    z-index: 2;
    position: relative;
    @media screen and (max-width: ${MOBILE_RESPONSIVE_SIZE}) {
        font-size: 2rem;
        
    }
`