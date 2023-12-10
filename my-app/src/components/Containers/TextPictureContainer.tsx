import { ReactNode } from "react";
import styled from "styled-components";
import {
	DEFAULT_INLINE_MARGIN_PERCENTAGE,
	DEFAULT_MARGIN,
	MOBILE_RESPONSIVE_SIZE,
} from "../../constants/css-constants";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 500px;
	margin: ${DEFAULT_INLINE_MARGIN_PERCENTAGE};
	gap: ${DEFAULT_MARGIN};

	@media screen and (max-width: ${MOBILE_RESPONSIVE_SIZE}) {
		margin-inline: auto;
		/* flex-direction: column; */
	}
`;

type Props = {
	children?: ReactNode;
};

export default function TextPictureContainer({ children }: Props) {
	return <Container>{children}</Container>;
}
