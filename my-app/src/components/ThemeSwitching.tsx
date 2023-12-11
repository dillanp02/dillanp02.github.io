import { motion } from "framer-motion";
import styled from "styled-components";

export const ThemeContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

export const ThemeButton = styled.button`
	margin: 0 5px;
	padding: 10px;
	font-size: 0.5rem;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 5px;
	width: 20px;
	height: 20px;
	cursor: pointer;
	&:hover {
		box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.border};
	}
`;

const StyledLargerThemeButton = styled(motion.button)`
	margin: 0 5px;
	padding: 10px;
	font-size: 0.5rem;
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 5px;
	width: 45px;
	height: 45px;
	cursor: pointer;
	&:hover {
		box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.border};
	}
`;

interface Props {
	onClick?: () => void;
	className?: string;
}

export function LargerThemeButton({ onClick, className }: Props) {
	return (
		<StyledLargerThemeButton
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			onClick={onClick}
			className={className}
		/>
	);
}
