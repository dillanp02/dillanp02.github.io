import styled from "styled-components";
import { MOBILE_RESPONSIVE_SIZE } from "../../constants/css-constants";

export const MasonaryTile = styled.span`
	border: solid 3px ${({ theme }) => theme.colors.text};
	background-color: ${({ theme }) => theme.colors.border};
	margin: 10px;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	min-height: 150px;

	&:hover {
		transform: translateY(-8px);
		scale: 1.05;
		border-radius: 10px;
	}

	@media screen and (max-width: ${MOBILE_RESPONSIVE_SIZE}) {
		min-height: 100px;
		width: 30%;
		flex: 1;
	}
`;
export const TallMasonaryTile = styled(MasonaryTile)`
	grid-column: span 1;
	grid-row: span 2;
`;
export const WideMasonaryTile = styled(MasonaryTile)`
	grid-column: span 2;
	grid-row: span 1;
`;
export const ExtraWideMasonaryTile = styled(MasonaryTile)`
	grid-column: span 3;
	grid-row: span 1;
`;
export const WideTallMasonaryTile = styled(MasonaryTile)`
	grid-column: span 2;
	grid-row: span 2;
`;
export const ExtraTallMasonaryTile = styled(MasonaryTile)`
	grid-column: span 1;
	grid-row: span 3;
`;
export const ExtraWideTallMasonaryTile = styled(MasonaryTile)`
	grid-column: span 3;
	grid-row: span 2;
`;
