import {
	ExtraWideMasonaryTile,
	MasonaryTile,
	TallMasonaryTile,
	WideMasonaryTile,
	WideTallMasonaryTile,
} from "../components/Containers/MasonaryTiles";
import { MasonaryContainer } from "../components/Containers/MasonryContainer";
import { TitleText } from "../components/Text/TitleText";
import {
	ABOUT_LINK,
	SOCIAL_MEDIA_LINK,
	THEMES_LINK,
} from "../constants/url-links";
import { DefaultLink } from "../components/Navigation/DefaultLink";
import portrait from "../assets/self_portrait.jpg";
import theme from "../assets/theme.jpg";
import sm from "../assets/social_media.jpg";
import { BackgroundImage } from "../components/Images/BackgroundImage";
import { useState } from "react";
import { DefaultContainer } from "../components/Containers/DefaultContainer";
import { BodyText } from "../components/Text/BodyText";
import { FadeInOnViewContainer } from "../components/Containers/FadeInOnViewContainer";
import PageTransition from "./PageTransition";
import FlexContainer from "../components/Containers/FlexContainer";
import { FlexItemContainer } from "../components/Containers/FlexItemContainer";
import DefaultImage from "../components/Images/DefaultImage";
import hello_img from "../assets/hello.jpg";
import { useApplicationContext } from "../components/Context/AppContext";
import React from "react";

export default function Home() {
	type Tile = "about" | "theme" | "social_media" | "";
	const [showAboutPhoto, setShowAboutPhoto] = useState<Tile>("");
	const { isMobile } = useApplicationContext();
	return (
		<PageTransition $key="homepage">
			<FadeInOnViewContainer $delay={0.1} triggerOnce>
				<FlexContainer>
					<FlexItemContainer $flex={isMobile ? 2 : 1}>
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
					</FlexItemContainer>
					<FlexItemContainer $flex={isMobile ? 1 : 2}>
						<DefaultImage
							src={hello_img}
							attribute="Photo by Octavian Dan on Unsplash"
							attributeLink="https://unsplash.com/@octadan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
						></DefaultImage>
					</FlexItemContainer>
				</FlexContainer>
			</FadeInOnViewContainer>

			<FadeInOnViewContainer $delay={0.5} triggerOnce>
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
						<DefaultLink to={THEMES_LINK}>
							<TitleText>Themes</TitleText>
							<BackgroundImage src={theme} $show={"theme" === showAboutPhoto} />
						</DefaultLink>
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
			</FadeInOnViewContainer>

			<FadeInOnViewContainer $delay={0.3} triggerOnce>
				<DefaultContainer>
					<TitleText>You are here</TitleText>
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
			</FadeInOnViewContainer>
		</PageTransition>
	);
}
