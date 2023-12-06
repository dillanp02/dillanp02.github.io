import { ExtraWideMasonaryTile, MasonaryTile, TallMasonaryTile, WideMasonaryTile } from '../components/Containers/MasonaryTiles';
import { MasonaryContainer } from '../components/Containers/MasonryContainer';
import { TitleText } from '../components/Text/TitleText';
import { ABOUT_LINK } from '../constants/url-links';
import { DefaultLink } from '../components/Navigation/DefaultLink';
import portrait from "../images/self_portrait.jpg"
import theme from "../images/theme.jpg"
import { BackgroundImage } from '../components/Images/BackgroundImage';
import { useState } from 'react';

export default function Home(){

    type Tile = "about" | "theme" | ""
    const [showAboutPhoto, setShowAboutPhoto] = useState<Tile>("")

    return (
        <>
        <MasonaryContainer>
            <TallMasonaryTile onMouseEnter={() => setShowAboutPhoto("about")}>
                <DefaultLink to={ABOUT_LINK}>
                    <TitleText>
                        About me
                    </TitleText>
                </DefaultLink>
                <BackgroundImage src={portrait} show={"about" === showAboutPhoto}/>
            </TallMasonaryTile>

            <ExtraWideMasonaryTile onMouseEnter={() => setShowAboutPhoto("theme")}>
                <TitleText>
                    Themes
                </TitleText>
                <BackgroundImage src={theme} show={"theme" === showAboutPhoto}/>

            </ExtraWideMasonaryTile>
            <TallMasonaryTile>Tall</TallMasonaryTile>
            <WideMasonaryTile>Wide</WideMasonaryTile>
            <TallMasonaryTile>Tall</TallMasonaryTile>
            <MasonaryTile>Normal</MasonaryTile>
            <TallMasonaryTile>Tall</TallMasonaryTile>
            <WideMasonaryTile>Social Media</WideMasonaryTile>

        </MasonaryContainer>
        </>
    )
}