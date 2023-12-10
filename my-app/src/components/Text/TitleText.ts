import styled from "styled-components";
import { MOBILE_RESPONSIVE_SIZE } from "../../constants/css-constants";

export const TitleText = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	text-align: left;
	z-index: 2;
	position: relative;
	margin-bottom: 10px;
	-webkit-text-stroke: 2px ${({ theme }) => theme.colors.border};
	@media screen and (max-width: ${MOBILE_RESPONSIVE_SIZE}) {
		font-size: 1.5em;
		-webkit-text-stroke: 1px ${({ theme }) => theme.colors.border};
	}
`;
