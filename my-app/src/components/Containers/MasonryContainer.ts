import styled from "styled-components";
import { DefaultContainer } from "./DefaultContainer";
import {
	DEFAULT_INLINE_MARGIN_PERCENTAGE,
	DEFAULT_MARGIN,
	MOBILE_RESPONSIVE_SIZE,
} from "../../constants/css-constants";

export const MasonaryContainer = styled(DefaultContainer)`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-template-rows: repeat(autofill, 1fr);
	background: none;
	grid-auto-flow: dense;
	margin: ${DEFAULT_MARGIN} ${DEFAULT_INLINE_MARGIN_PERCENTAGE};

	@media screen and (max-width: ${MOBILE_RESPONSIVE_SIZE}) {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
`;
