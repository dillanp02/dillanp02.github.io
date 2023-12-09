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
import { DefaultContainer } from "../components/Containers/DefaultContainer";
import { BodyText } from "../components/Text/BodyText";
import { FadeOnViewContainer } from "../components/Containers/FadeOnViewContainer";

export default function Home() {
	type Tile = "about" | "theme" | "social_media" | "";
	const [showAboutPhoto, setShowAboutPhoto] = useState<Tile>("");

	return (
		<>
			<FadeOnViewContainer $delay={"100ms"} triggerOnce>
				<DefaultContainer>
					<TitleText>Welcome👋</TitleText>
					<BodyText>
						Hiya!! Welcome to my small corner of the internet!
					</BodyText>
					<br />
					<BodyText>
						While I highly recommend you view this web page on desktop, every
						effort has been made to make everything responsive so that you can
						find what you're looking for that tiny bit easier!
					</BodyText>
					<br />
					<BodyText>
						Click the tiles below to explore - see you around!
					</BodyText>
				</DefaultContainer>
			</FadeOnViewContainer>

			<FadeOnViewContainer $delay={"300ms"} triggerOnce>
				<DefaultContainer>
					<TitleText>Where am I?</TitleText>
					<BodyText>
						There's roughly <strong>50 billion pages</strong> on the Internet.
						If you're here, it's probably to see what I have to show... or by a
						fortunate mistake...
					</BodyText>
					<br />
					<BodyText>
						I want this to be a portfolio for my work, but also an opportunity
						to learn. On this site, there'll be a lot of "firsts" for me -
						creatively and visually - but more importantly workflow wise using
						new tools and techniques. Watch this space...
					</BodyText>
				</DefaultContainer>
			</FadeOnViewContainer>

			<FadeOnViewContainer $delay="500ms" triggerOnce>
				<MasonaryContainer>
					<TallMasonaryTile onMouseEnter={() => setShowAboutPhoto("about")}>
						<DefaultLink to={ABOUT_LINK}>
							<TitleText>About me</TitleText>

							<BackgroundImage
								src={portrait}
								$show={"about" === showAboutPhoto}
							/>
						</DefaultLink>
					</TallMasonaryTile>

					<ExtraWideMasonaryTile
						onMouseEnter={() => setShowAboutPhoto("theme")}
					>
						<TitleText>Themes</TitleText>
						<BackgroundImage src={theme} $show={"theme" === showAboutPhoto} />
					</ExtraWideMasonaryTile>

					<TallMasonaryTile>Tall</TallMasonaryTile>

					<WideTallMasonaryTile
						onMouseEnter={() => setShowAboutPhoto("social_media")}
					>
						<DefaultLink to={SOCIAL_MEDIA_LINK}>
							<TitleText>Social Media</TitleText>
							<BackgroundImage
								src={sm}
								$show={"social_media" === showAboutPhoto}
							/>
						</DefaultLink>
					</WideTallMasonaryTile>

					<WideMasonaryTile>
						<TitleText>Containcorp</TitleText>
					</WideMasonaryTile>

					<MasonaryTile>Normal</MasonaryTile>

					<TallMasonaryTile>Tall</TallMasonaryTile>

					<MasonaryTile>Normal</MasonaryTile>

					<TallMasonaryTile>Tall</TallMasonaryTile>

					<MasonaryTile>Normal</MasonaryTile>
				</MasonaryContainer>
			</FadeOnViewContainer>
		</>
	);
}
