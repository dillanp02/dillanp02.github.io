import styled from "styled-components"
import { DEFAULT_INLINE_MARGIN_PERCENTAGE, DEFAULT_MARGIN, MOBILE_RESPONSIVE_SIZE } from "../../constants/css-constants";

export const DefaultContainer = styled.div`
    margin-inline: ${DEFAULT_INLINE_MARGIN_PERCENTAGE};
    margin-bottom: ${DEFAULT_MARGIN};
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.border};

    @media screen and (max-width: ${MOBILE_RESPONSIVE_SIZE}) {
        margin-inline: auto;
    }
`