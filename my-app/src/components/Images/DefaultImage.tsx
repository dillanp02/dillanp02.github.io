import styled from "styled-components";

const AttributionText = styled.a`
	position: absolute;
	bottom: 0;
	left: 0;
	color: ${({ theme }) => theme.colors.text};
	z-index: 5;
	padding: 10px;
	transition: all 1s ease;
	&:hover {
		background-color: ${({ theme }) => theme.colors.border};
	}
`;

export const StyledDefaultImage = styled.img`
	min-width: 100%;
	max-height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	border-radius: 10px;
	object-fit: cover;
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
