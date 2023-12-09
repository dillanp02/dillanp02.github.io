import styled from "styled-components";
import {
	DEFAULT_INLINE_MARGIN_PERCENTAGE,
	DEFAULT_MARGIN,
	MOBILE_RESPONSIVE_SIZE,
} from "../../constants/css-constants";

export const DefaultContainer = styled.div`
	margin: ${DEFAULT_MARGIN} ${DEFAULT_INLINE_MARGIN_PERCENTAGE};
	padding: 20px;
	background-color: ${({ theme }) => theme.colors.border};
	border-radius: 10px;
	@media screen and (max-width: ${MOBILE_RESPONSIVE_SIZE}) {
		margin-inline: auto;
	}
`;
