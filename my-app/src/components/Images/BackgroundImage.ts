import { StyledDefaultImage } from "./DefaultImage";
import styled, { css } from "styled-components";

type ImgProp = {
	$show: boolean;
};

export const BackgroundImage = styled(StyledDefaultImage)<ImgProp>`
	transition: all 1s ease;
	opacity: 0;
	overflow: hidden;
	filter: blur(3px)
		brightness(${({ theme }) => theme.colors.image_darkness_factor});

	${(props) =>
		props.$show &&
		css`
			opacity: 1;
			border-radius: 10px;
		`};
`;
