import { Link } from "react-router-dom"
import styled from "styled-components"

export const DefaultLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    &:hover{
        text-decoration: underline;
        text-decoration-thickness: 3px;
    }
`