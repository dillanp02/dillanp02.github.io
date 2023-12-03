import styled from "styled-components"
import { Link } from "react-router-dom"

export const NavLink = styled(Link)`
    text-decoration: none;
    padding-inline: 10px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({theme}) => theme.colors.text};

    &:hover{
        background-color: ${({theme}) => theme.colors.text}; 
        color: ${({ theme }) => theme.colors.background};
    }
`