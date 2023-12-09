import styled from "styled-components";
import { ReactNode } from "react";
import { MOBILE_RESPONSIVE_SIZE } from "../../constants/css-constants";

const Bar = styled.nav`
	font-size: 2em;
	display: flex;
	gap: 10px;
	justify-content: center;
	padding: 20px;
	background-color: ${({ theme }) => theme.colors.border};

	@media screen and (max-width: ${MOBILE_RESPONSIVE_SIZE}) {
		padding: 10px 0;
		flex-direction: column;
	}
`;
type Props = {
	children?: ReactNode;
};

export const NavBar: React.FC<Props> = ({ children }) => {
	return <Bar>{children}</Bar>;
};
