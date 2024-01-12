import { useState } from "react";
import { MasonaryContainer } from "../components/Containers/MasonryContainer";
import {
	TallMasonaryTile,
	MasonaryTile,
	WideTallMasonaryTile,
	WideMasonaryTile,
	ExtraTallMasonaryTile,
	ExtraWideTallMasonaryTile,
} from "../components/Containers/MasonaryTiles";
import { TitleText } from "../components/Text/TitleText";
import { BackgroundImage } from "../components/Images/BackgroundImage";

import spotify_img from "../assets/spotify-premium.gif";
import twitter_img from "../assets/x-twitter.gif";
import youtube_img from "../assets/youtube.gif";
import white_img from "../assets/white.png";
import snapchat_img from "../assets/snapchat-logo.gif";
import discord_img from "../assets/discord-logo.gif";
import discord_blue from "../assets/discord-frame.png";
import black_img from "../assets/black.png";
import instagram_img from "../assets/instagram.gif";
import bereal_img from "../assets/BeReal.gif";
import letterboxd_img from "../assets/letterboxd.png";
import linkedin_img from "../assets/linkedin.gif";
import reddit_img from "../assets/reddit.gif";
import twitch_img from "../assets/twitch.gif";
import twitch_frame from "../assets/twitch-frame.png";
import { LinkWrapper } from "../components/Navigation/LinkWrapper";
import PageTransition from "./PageTransition";
import React from "react";

export default function SocialMedia() {
	type Tile =
		| "spotify"
		| "twitter"
		| "discord"
		| "youtube"
		| "snapchat"
		| "insta"
		| "bereal"
		| "letterboxd"
		| "linkedin"
		| "reddit"
		| "twitch"
		| "";

	const [currentPhoto, setCurrentPhoto] = useState<Tile>("");

	return (
		<PageTransition $key="sm">
			<MasonaryContainer>
				<MasonaryTile onMouseEnter={() => setCurrentPhoto("twitter")}>
					<LinkWrapper href="https://twitter.com/Dillanp02">
						<TitleText>Twitter</TitleText>
						<BackgroundImage
							src={twitter_img}
							$show={currentPhoto === "twitter"}
						/>
					</LinkWrapper>
				</MasonaryTile>

				<ExtraWideTallMasonaryTile
					onMouseEnter={() => setCurrentPhoto("spotify")}
				>
					<LinkWrapper href="https://open.spotify.com/user/vxgobr5jc5716irxzok7jrsbg">
						<TitleText>Spotify</TitleText>
						<BackgroundImage
							src={currentPhoto === "spotify" ? spotify_img : black_img}
							$show={currentPhoto === "spotify"}
						/>
					</LinkWrapper>
				</ExtraWideTallMasonaryTile>

				<MasonaryTile onMouseEnter={() => setCurrentPhoto("snapchat")}>
					<LinkWrapper href="https://www.snapchat.com/add/dillanp2002?share_id=0PXgnfbYsds&locale=en-GB">
						<TitleText>Snapchat</TitleText>
						<BackgroundImage
							src={snapchat_img}
							$show={currentPhoto === "snapchat"}
						/>
					</LinkWrapper>
				</MasonaryTile>

				<TallMasonaryTile onMouseEnter={() => setCurrentPhoto("discord")}>
					<LinkWrapper href="https://discord.gg/fBdfymTtQC">
						<TitleText>Discord</TitleText>
						<BackgroundImage
							src={currentPhoto === "discord" ? discord_img : discord_blue}
							$show={currentPhoto === "discord"}
						/>
					</LinkWrapper>
				</TallMasonaryTile>

				<WideTallMasonaryTile onMouseEnter={() => setCurrentPhoto("youtube")}>
					<LinkWrapper href="https://www.youtube.com/channel/UCGfFQhTL2rniAsImnQNt09A">
						<TitleText>YouTube</TitleText>
						<BackgroundImage
							src={currentPhoto === "youtube" ? youtube_img : white_img}
							$show={currentPhoto === "youtube"}
						/>
					</LinkWrapper>
				</WideTallMasonaryTile>

				<WideMasonaryTile onMouseEnter={() => setCurrentPhoto("letterboxd")}>
					<LinkWrapper href="https://letterboxd.com/dillanp02/">
						<TitleText>Letterboxd</TitleText>
						<BackgroundImage
							src={letterboxd_img}
							$show={currentPhoto === "letterboxd"}
						/>
					</LinkWrapper>
				</WideMasonaryTile>

				<TallMasonaryTile onMouseEnter={() => setCurrentPhoto("bereal")}>
					<LinkWrapper href="https://bere.al/dillanp02">
						<TitleText>Bereal</TitleText>
						<BackgroundImage
							src={currentPhoto === "bereal" ? bereal_img : black_img}
							$show={currentPhoto === "bereal"}
						/>
					</LinkWrapper>
				</TallMasonaryTile>

				<WideMasonaryTile onMouseEnter={() => setCurrentPhoto("insta")}>
					<LinkWrapper href="https://www.instagram.com/dillanp02/">
						<TitleText>Instagram</TitleText>
						<BackgroundImage
							src={currentPhoto === "insta" ? instagram_img : white_img}
							$show={currentPhoto === "insta"}
						/>
					</LinkWrapper>
				</WideMasonaryTile>

				<MasonaryTile onMouseEnter={() => setCurrentPhoto("reddit")}>
					<LinkWrapper href="https://www.reddit.com/user/dillanp02">
						<TitleText>Reddit</TitleText>
						<BackgroundImage
							src={currentPhoto === "reddit" ? reddit_img : white_img}
							$show={currentPhoto === "reddit"}
						/>
					</LinkWrapper>
				</MasonaryTile>

				<MasonaryTile onMouseEnter={() => setCurrentPhoto("twitch")}>
					<LinkWrapper href="https://www.twitch.tv/dillanp02">
						<TitleText>Twitch</TitleText>
						<BackgroundImage
							src={currentPhoto === "twitch" ? twitch_img : twitch_frame}
							$show={currentPhoto === "twitch"}
						/>
					</LinkWrapper>
				</MasonaryTile>

				<WideTallMasonaryTile onMouseEnter={() => setCurrentPhoto("linkedin")}>
					<LinkWrapper href="https://www.linkedin.com/in/dillanp02/">
						<TitleText>LinkedIn</TitleText>
						<BackgroundImage
							src={currentPhoto === "linkedin" ? linkedin_img : white_img}
							$show={currentPhoto === "linkedin"}
						/>
					</LinkWrapper>
				</WideTallMasonaryTile>
			</MasonaryContainer>
		</PageTransition>
	);
}
