import { Link } from "react-router-dom";
import { HOME_LINK, ABOUT_LINK, CONTACT_LINK } from '../constants/url-links';

export default function Navbar() {
    return (
        <center>
            <ul>
                <li><Link to={HOME_LINK}>Home</Link></li>
                <li><Link to={ABOUT_LINK}>About</Link></li>
                <li><Link to={CONTACT_LINK}>Contact</Link></li>
            </ul>
        </center>
    )
}