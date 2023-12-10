import { FadeInOnViewContainer } from "../components/Containers/FadeInOnViewContainer";
import TextPictureContainer from "../components/Containers/TextPictureContainer";
import { BodyText } from "../components/Text/BodyText";
import { TitleText } from "../components/Text/TitleText";
import PageTransition from "./PageTransition";
import colour_img from "../images/theme.jpg";
import DefaultImage from "../components/Images/DefaultImage";
import { FlexItemContainer } from "../components/Containers/FlexItemContainer";
import choice_img from "../images/choice.jpg";
import { DefaultContainer } from "../components/Containers/DefaultContainer";
import {
	LargerThemeButton,
	ThemeContainer,
} from "../components/ThemeSwitching";
import { useTheme } from "../components/Context/ThemeContext";
import {
	blue,
	dark,
	light,
	green,
	brown,
	pink,
} from "../components/styles/ThemeStyles";

export default function Themes() {
	const { updateTheme } = useTheme();

	return (
		<PageTransition $key="themepage">
			<FadeInOnViewContainer triggerOnce>
				<TextPictureContainer>
					<FlexItemContainer $flex={1}>
						<TitleText>Themes</TitleText>
						<BodyText>
							Designed from the ground up in mind, themes are integrated heavily
							into this site.
						</BodyText>
						<br />
						<BodyText></BodyText>
					</FlexItemContainer>

					<FlexItemContainer $flex={2}>
						<DefaultImage src={colour_img} />
					</FlexItemContainer>
				</TextPictureContainer>
			</FadeInOnViewContainer>

			<FadeInOnViewContainer triggerOnce>
				<TextPictureContainer>
					<FlexItemContainer $flex={2}>
						<DefaultImage
							src={choice_img}
							attribute="Image by macrovector"
							attributeLink="https://www.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_26760925.htm"
						/>
					</FlexItemContainer>

					<FlexItemContainer $flex={1}>
						<TitleText>Customisable</TitleText>
						<BodyText>Everyone likes customisability.</BodyText>
						<br />
						<BodyText>
							{" "}
							It gives you that personal feeling that everything is the way you
							want it.
						</BodyText>
						<br />
						<BodyText>
							Ranging from the background, text and border colours, to the image
							brightness on each theme, everything has been designed with colour
							themes in mind.
						</BodyText>
					</FlexItemContainer>
				</TextPictureContainer>
			</FadeInOnViewContainer>

			<DefaultContainer>
				<ThemeContainer>
					<FadeInOnViewContainer $delay={600} travelDistance="-10vw">
						<LargerThemeButton
							onClick={() => updateTheme(light)}
							className={`light`}
						></LargerThemeButton>
					</FadeInOnViewContainer>
					<FadeInOnViewContainer $delay={500} travelDistance="-10vw">
						<LargerThemeButton
							onClick={() => updateTheme(dark)}
							className={`dark`}
						></LargerThemeButton>
					</FadeInOnViewContainer>
					<FadeInOnViewContainer $delay={400} travelDistance="-10vw">
						<LargerThemeButton
							onClick={() => updateTheme(blue)}
							className={`blue`}
						></LargerThemeButton>
					</FadeInOnViewContainer>
					<FadeInOnViewContainer $delay={300} travelDistance="-10vw">
						<LargerThemeButton
							onClick={() => updateTheme(green)}
							className={`green`}
						></LargerThemeButton>
					</FadeInOnViewContainer>
					<FadeInOnViewContainer $delay={200} travelDistance="-10vw">
						<LargerThemeButton
							onClick={() => updateTheme(brown)}
							className={`brown`}
						></LargerThemeButton>
					</FadeInOnViewContainer>
					<FadeInOnViewContainer $delay={100} travelDistance="-10vw">
						<LargerThemeButton
							onClick={() => updateTheme(pink)}
							className={`pink`}
						></LargerThemeButton>
					</FadeInOnViewContainer>
				</ThemeContainer>
			</DefaultContainer>
		</PageTransition>
	);
}
