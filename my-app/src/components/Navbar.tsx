import { Link } from "react-router-dom";
import { HOME_LINK, ABOUT_LINK, CONTACT_LINK } from '../constants/url-links';
import styled from 'styled-components';

const NavBar = styled.nav`
    font-size: 2em;
    display: flex;
    gap: 10px;
    justify-content: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const NavLink = styled(Link)`
    text-decoration: none;
    padding-inline: 10px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({theme}) => theme.colors.text}
`

export default function Navbar() {
    return (
        <NavBar>
            <NavLink to={HOME_LINK}>Home</NavLink>
            <NavLink to={ABOUT_LINK}>About</NavLink>
            <NavLink to={CONTACT_LINK}>Contact</NavLink>
        </NavBar>
    )
}