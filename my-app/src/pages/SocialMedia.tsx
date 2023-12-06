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

import spotify_img from "../images/spotify-premium.gif";
import twitter_img from "../images/x-twitter.gif";
import youtube_img from "../images/youtube.gif";
import white_img from "../images/white.png";
import snapchat_img from "../images/snapchat-logo.gif";
import discord_img from "../images/discord-logo.gif";
import black_img from "../images/black.png";
import instagram_img from "../images/instagram.gif";
import bereal_img from "../images/BeReal.gif";

export default function SocialMedia() {
	type Tile =
		| "spotify"
		| "twitter"
		| "discord"
		| "youtube"
		| "snapchat"
		| "insta"
		| "bereal"
		| "";

	const [currentPhoto, setCurrentPhoto] = useState<Tile>("");

	return (
		<MasonaryContainer>
			<MasonaryTile onMouseEnter={() => setCurrentPhoto("twitter")}>
				<TitleText>Twitter</TitleText>
				<BackgroundImage src={twitter_img} show={currentPhoto === "twitter"} />
			</MasonaryTile>

			<ExtraWideTallMasonaryTile
				onMouseEnter={() => setCurrentPhoto("spotify")}
			>
				<TitleText>Spotify</TitleText>
				<BackgroundImage
					src={currentPhoto === "spotify" ? spotify_img : black_img}
					show={currentPhoto === "spotify"}
				/>
			</ExtraWideTallMasonaryTile>

			<MasonaryTile onMouseEnter={() => setCurrentPhoto("snapchat")}>
				<TitleText>Snapchat</TitleText>
				<BackgroundImage
					src={snapchat_img}
					show={currentPhoto === "snapchat"}
				/>
			</MasonaryTile>

			<ExtraTallMasonaryTile onMouseEnter={() => setCurrentPhoto("discord")}>
				<TitleText>Discord</TitleText>
				<BackgroundImage
					src={currentPhoto === "discord" ? discord_img : black_img}
					show={currentPhoto === "discord"}
				/>
			</ExtraTallMasonaryTile>

			<MasonaryTile onMouseEnter={() => setCurrentPhoto("youtube")}>
				<TitleText>YouTube</TitleText>
				<BackgroundImage
					src={currentPhoto === "youtube" ? youtube_img : white_img}
					show={currentPhoto === "youtube"}
				/>
			</MasonaryTile>

			<WideMasonaryTile onMouseEnter={() => setCurrentPhoto("")}>
				<TitleText>Letterboxd</TitleText>
			</WideMasonaryTile>

			<TallMasonaryTile onMouseEnter={() => setCurrentPhoto("bereal")}>
				<TitleText>Bereal</TitleText>
				<BackgroundImage
					src={currentPhoto === "bereal" ? bereal_img : black_img}
					show={currentPhoto === "bereal"}
				/>
			</TallMasonaryTile>

			<WideTallMasonaryTile onMouseEnter={() => setCurrentPhoto("insta")}>
				<TitleText>Instagram</TitleText>
				<BackgroundImage
					src={currentPhoto === "insta" ? instagram_img : white_img}
					show={currentPhoto === "insta"}
				/>
			</WideTallMasonaryTile>

			<MasonaryTile>
				<TitleText>Reddit</TitleText>
			</MasonaryTile>

			<WideTallMasonaryTile>
				<TitleText>LinkedIn</TitleText>
			</WideTallMasonaryTile>

			<ExtraTallMasonaryTile>
				<TitleText>Twitch</TitleText>
			</ExtraTallMasonaryTile>
		</MasonaryContainer>
	);
}
