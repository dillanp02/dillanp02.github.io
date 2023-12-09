import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

type Props = {
	children?: ReactNode;
	ref?: (node?: Element | null | undefined) => void;
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

export const FadeOnViewContainer: React.FC<Props> = ({
	$delay,
	children,
	triggerOnce,
}) => {
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.1,
		triggerOnce: triggerOnce,
	});

	return (
		<FadeContainer ref={ref} $inView={inView} $delay={$delay}>
			{children}
		</FadeContainer>
	);
};
