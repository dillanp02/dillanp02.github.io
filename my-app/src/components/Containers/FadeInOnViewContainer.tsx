import { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";
import styled, { css } from "styled-components";

type Props = {
	children?: ReactNode;
	ref?: React.MutableRefObject<null>;
	$inView?: boolean;
	triggerOnce?: boolean | undefined;
	$delay?: string;
};
const FadeContainer: React.FC<Props> = styled.div`
	transition: all 2s ease ${(props) => props.$delay};
	${(props) =>
		props.$inView
			? css`
					transform: translateX(0);
					opacity: 1;
			  `
			: css`
					transform: translateX(-50vw);
					opacity: 0;
			  `}
`;

export const FadeInOnViewContainer: React.FC<Props> = ({
	$delay,
	children,
	triggerOnce,
}) => {
	const ref = useRef(null);
	const inView = useInView(ref, { once: triggerOnce || false });

	return (
		<FadeContainer ref={ref} $inView={inView} $delay={$delay}>
			{children}
		</FadeContainer>
	);
};
