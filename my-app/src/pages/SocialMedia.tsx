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
import spotify_frame from "../images/spotify-first-frame.png";
import twitter_img from "../images/x-twitter.gif";
import youtube_img from "../images/youtube.gif";
import youtube_frame from "../images/youtube-first-frame.png";

export default function SocialMedia() {
	type Tile = "spotify" | "twitter" | "discord" | "youtube" | "";
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
					src={currentPhoto === "spotify" ? spotify_img : spotify_frame}
					show={currentPhoto === "spotify"}
				/>
			</ExtraWideTallMasonaryTile>

			<MasonaryTile>
				<TitleText>Snapchat</TitleText>
			</MasonaryTile>

			<ExtraTallMasonaryTile>
				<TitleText>Discord</TitleText>
			</ExtraTallMasonaryTile>

			<MasonaryTile onMouseEnter={() => setCurrentPhoto("youtube")}>
				<TitleText>YouTube</TitleText>
				<BackgroundImage
					src={currentPhoto === "youtube" ? youtube_img : youtube_frame}
					show={currentPhoto === "youtube"}
				/>
			</MasonaryTile>

			<WideMasonaryTile>
				<TitleText>Instagram</TitleText>
			</WideMasonaryTile>

			<TallMasonaryTile>
				<TitleText>Bereal</TitleText>
			</TallMasonaryTile>

			<WideTallMasonaryTile>
				<TitleText>Letterboxd</TitleText>
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
