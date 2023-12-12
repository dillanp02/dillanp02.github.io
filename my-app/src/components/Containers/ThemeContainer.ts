import styled from "styled-components";
import { MOBILE_RESPONSIVE_SIZE } from "../../constants/css-constants";

interface Props {
	$forcerow?: boolean;
}
export const ThemeContainer = styled.div<Props>`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 10px;
	@media screen and (max-width: ${MOBILE_RESPONSIVE_SIZE}) {
		margin-inline: 10px;
		flex-direction: ${({ $forcerow: forcerow }) =>
			forcerow ? "row" : "column"};
	}
`;
