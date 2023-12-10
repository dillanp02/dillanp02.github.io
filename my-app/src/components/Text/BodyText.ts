import styled from "styled-components";
import { MOBILE_RESPONSIVE_SIZE } from "../../constants/css-constants";

export const BodyText = styled.h3`
	font-size: 1.5em;
	font-weight: 500;
	text-align: left;
	z-index: 2;
	position: relative;

	@media screen and (max-width: ${MOBILE_RESPONSIVE_SIZE}) {
		font-size: 1em;
	}
`;
