import styled from "styled-components"
import { DefaultLink } from "./DefaultLink"

export const NavLink = styled(DefaultLink)`
    padding-inline: 10px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({theme}) => theme.colors.text};

    &:hover{
        background-color: ${({theme}) => theme.colors.text}; 
        color: ${({ theme }) => theme.colors.background};
    }
`