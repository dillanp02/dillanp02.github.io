import styled from "styled-components";
import {
	DEFAULT_INLINE_MARGIN_PERCENTAGE,
	DEFAULT_PAGE_MARGIN,
	MOBILE_RESPONSIVE_SIZE,
} from "../../constants/css-constants";

export const DefaultContainer = styled.div`
	transition: all 1s ease;
	margin: ${DEFAULT_PAGE_MARGIN} ${DEFAULT_INLINE_MARGIN_PERCENTAGE};
	padding: 20px;
	background-color: ${({ theme }) => theme.colors.border};
	border-radius: 10px;
	@media screen and (max-width: ${MOBILE_RESPONSIVE_SIZE}) {
		margin-inline: 10px;
	}
`;
