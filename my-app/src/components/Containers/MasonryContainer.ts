import styled from "styled-components";
import { DefaultContainer } from "./DefaultContainer";
import { MOBILE_RESPONSIVE_SIZE } from "../../constants/css-constants";


export const MasonaryContainer = styled(DefaultContainer)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    background: none;

    @media screen and (max-width: ${MOBILE_RESPONSIVE_SIZE}) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
`