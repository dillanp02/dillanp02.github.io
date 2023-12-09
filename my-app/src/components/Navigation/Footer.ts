import styled from "styled-components";
import { DEFAULT_MARGIN } from "../../constants/css-constants";

export const Footer = styled.footer`
	background-color: ${({ theme }) => theme.colors.border};
	min-height: 50px;
	margin-top: ${DEFAULT_MARGIN};
	border-top: 3px solid ${({ theme }) => theme.colors.text};
`;
