import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
	$key: string;
	children?: ReactNode;
};

export default function PageTransition({ $key, children }: Props) {
	return (
		<motion.div
			key={$key}
			initial={{ opacity: 0, x: "-50vw" }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: "50vw" }}
			transition={{ duration: 1 }}
		>
			{children}
		</motion.div>
	);
}
