import styled from "styled-components";
import React from "react";

const AttributionText = styled.a`
	position: absolute;
	bottom: 0;
	left: 0;
	color: ${({ theme }) => theme.colors.text};
	z-index: 5;
	padding: 10px;
	transition: all 1s ease;
	background-color: rgba(
		${({ theme }) => getRGB(theme.colors.background)},
		0.2
	);

	&:hover {
		background-color: ${({ theme }) => theme.colors.border};
	}
`;

function getRGB(hex: string) {
	// Convert hex to RGB
	const bigint = parseInt(hex.slice(1), 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;
	return `${r}, ${g}, ${b}`;
}

export const StyledDefaultImage = styled.img`
	transition: all 1s ease;
	min-width: 100%;
	max-height: 100%;
	position: absolute;
	top: 50%; /* Position the top of the image at the vertical center */
	left: 50%; /* Position the left of the image at the horizontal center */
	transform: translate(-50%, -50%); /* Center the image using translation */
	z-index: 1;
	border-radius: 10px;
	object-fit: cover;
	object-position: center center; /* Ensure the center of the image is always shown */
	filter: brightness(${({ theme }) => theme.colors.image_darkness_factor});
`;

export default function DefaultImage({
	src,
	attribute,
	attributeLink,
}: {
	src: string | undefined;
	attribute?: string;
	attributeLink?: string;
}) {
	return (
		<>
			<StyledDefaultImage src={src} />
			{attribute && (
				<AttributionText href={attributeLink}>{attribute}</AttributionText>
			)}
		</>
	);
}
