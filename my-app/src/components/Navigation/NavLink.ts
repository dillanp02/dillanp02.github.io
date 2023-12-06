import styled from "styled-components"
import { DefaultLink } from "./DefaultLink"

export const NavLink = styled(DefaultLink)`
    padding-inline: 10px;
    text-align: center;
    color: ${({theme}) => theme.colors.text};

    &:hover{
    }
`