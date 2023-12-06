import {
	ExtraWideMasonaryTile,
	MasonaryTile,
	TallMasonaryTile,
	WideMasonaryTile,
	WideTallMasonaryTile,
} from "../components/Containers/MasonaryTiles";
import { MasonaryContainer } from "../components/Containers/MasonryContainer";
import { TitleText } from "../components/Text/TitleText";
import { ABOUT_LINK, SOCIAL_MEDIA_LINK } from "../constants/url-links";
import { DefaultLink } from "../components/Navigation/DefaultLink";
import portrait from "../images/self_portrait.jpg";
import theme from "../images/theme.jpg";
import sm from "../images/social_media.jpg";
import { BackgroundImage } from "../components/Images/BackgroundImage";
import { useState } from "react";

export default function Home() {
	type Tile = "about" | "theme" | "social_media" | "";
	const [showAboutPhoto, setShowAboutPhoto] = useState<Tile>("");

	return (
		<>
			<MasonaryContainer>
				<TallMasonaryTile onMouseEnter={() => setShowAboutPhoto("about")}>
					<DefaultLink to={ABOUT_LINK}>
						<TitleText>About me</TitleText>
					</DefaultLink>
					<BackgroundImage src={portrait} show={"about" === showAboutPhoto} />
				</TallMasonaryTile>

				<ExtraWideMasonaryTile onMouseEnter={() => setShowAboutPhoto("theme")}>
					<TitleText>Themes</TitleText>
					<BackgroundImage src={theme} show={"theme" === showAboutPhoto} />
				</ExtraWideMasonaryTile>

				<TallMasonaryTile>Tall</TallMasonaryTile>

				<WideMasonaryTile>Wide</WideMasonaryTile>

				<MasonaryTile>Normal</MasonaryTile>

				<TallMasonaryTile>Tall</TallMasonaryTile>

				<MasonaryTile>Normal</MasonaryTile>

				<TallMasonaryTile>Tall</TallMasonaryTile>

				<WideTallMasonaryTile
					onMouseEnter={() => setShowAboutPhoto("social_media")}
				>
					<DefaultLink to={SOCIAL_MEDIA_LINK}>
						<TitleText>Social Media</TitleText>
					</DefaultLink>
					<BackgroundImage src={sm} show={"social_media" === showAboutPhoto} />
				</WideTallMasonaryTile>

				<MasonaryTile>Normal</MasonaryTile>
			</MasonaryContainer>
		</>
	);
}
