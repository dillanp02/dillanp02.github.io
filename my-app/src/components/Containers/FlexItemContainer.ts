import styled from "styled-components";
import { DefaultContainer } from "./DefaultContainer";

interface FlexProp {
	$flex: number;
}

export const FlexItemContainer = styled(DefaultContainer)<FlexProp>`
	flex: ${(props) => props.$flex};
	margin: 0;
	position: relative;
	overflow: hidden;
`;
