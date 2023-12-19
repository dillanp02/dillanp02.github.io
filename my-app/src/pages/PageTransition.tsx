import { motion } from "framer-motion";
import { ReactNode } from "react";
import React from "react";

type Props = {
	$key: string;
	children?: ReactNode;
};

export default function PageTransition({ $key, children }: Props) {
	return (
		<motion.div
			key={$key}
			initial={{ opacity: 0, x: "-100vw" }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: "100vw" }}
			transition={{ duration: 1 }}
		>
			{children}
		</motion.div>
	);
}
