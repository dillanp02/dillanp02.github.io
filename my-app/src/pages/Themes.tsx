import { FadeInOnViewContainer } from "../components/Containers/FadeInOnViewContainer";
import FlexContainer from "../components/Containers/FlexContainer";
import { BodyText } from "../components/Text/BodyText";
import { TitleText } from "../components/Text/TitleText";
import PageTransition from "./PageTransition";
import colour_img from "../images/theme.jpg";
import DefaultImage from "../components/Images/DefaultImage";
import { FlexItemContainer } from "../components/Containers/FlexItemContainer";
import choice_img from "../images/choice.jpg";
import {
	LargerThemeButton,
	ThemeContainer,
} from "../components/ThemeSwitching";
import { useApplicationContext } from "../components/Context/AppContext";
import {
	blue,
	dark,
	light,
	green,
	brown,
	pink,
} from "../components/styles/ThemeStyles";

export default function Themes() {
	const { isMobile, theme, updateTheme } = useApplicationContext();

	return (
		<PageTransition $key="themepage">
			<FadeInOnViewContainer triggerOnce>
				<FlexContainer>
					<FlexItemContainer $flex={isMobile ? 2 : 1}>
						<TitleText>Themes</TitleText>
						<BodyText>
							Designed from the ground up in mind, themes are integrated heavily
							into this site.
						</BodyText>
						<br />
						<BodyText>
							Click around, and hopefully you'll find one you like. It's that
							easy.
						</BodyText>
					</FlexItemContainer>

					<FlexItemContainer $flex={isMobile ? 1 : 2}>
						<DefaultImage src={colour_img} />
					</FlexItemContainer>
				</FlexContainer>
			</FadeInOnViewContainer>

			<FadeInOnViewContainer triggerOnce>
				<FlexContainer>
					<FlexItemContainer $flex={isMobile ? 1 : 2}>
						<DefaultImage
							src={choice_img}
							attribute="Image by macrovector"
							attributeLink="https://www.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_26760925.htm"
						/>
					</FlexItemContainer>

					<FlexItemContainer $flex={isMobile ? 2 : 1}>
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
				</FlexContainer>
			</FadeInOnViewContainer>

			<FlexContainer>
				<FlexItemContainer>
					<TitleText>Give it a go!</TitleText>
					<ThemeContainer>
						<FadeInOnViewContainer $delay={600} travelDistance="-10vw">
							<LargerThemeButton
								onClick={() => updateTheme(light)}
								className={`light ${theme === light ? "active" : ""}`}
							></LargerThemeButton>
						</FadeInOnViewContainer>
						<FadeInOnViewContainer $delay={500} travelDistance="-10vw">
							<LargerThemeButton
								onClick={() => updateTheme(dark)}
								className={`dark ${theme === dark ? "active" : ""}`}
							></LargerThemeButton>
						</FadeInOnViewContainer>
						<FadeInOnViewContainer $delay={400} travelDistance="-10vw">
							<LargerThemeButton
								onClick={() => updateTheme(blue)}
								className={`blue ${theme === blue ? "active" : ""}`}
							></LargerThemeButton>
						</FadeInOnViewContainer>
						<FadeInOnViewContainer $delay={300} travelDistance="-10vw">
							<LargerThemeButton
								onClick={() => updateTheme(green)}
								className={`green ${theme === green ? "active" : ""}`}
							></LargerThemeButton>
						</FadeInOnViewContainer>
						<FadeInOnViewContainer $delay={200} travelDistance="-10vw">
							<LargerThemeButton
								onClick={() => updateTheme(brown)}
								className={`brown ${theme === brown ? "active" : ""}`}
							></LargerThemeButton>
						</FadeInOnViewContainer>
						<FadeInOnViewContainer $delay={100} travelDistance="-10vw">
							<LargerThemeButton
								onClick={() => updateTheme(pink)}
								className={`pink ${theme === pink ? "active" : ""}`}
							></LargerThemeButton>
						</FadeInOnViewContainer>
					</ThemeContainer>
				</FlexItemContainer>
				<FlexItemContainer $flex={1}></FlexItemContainer>
			</FlexContainer>
		</PageTransition>
	);
}
