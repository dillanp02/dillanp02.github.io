import DefaultImage from "./DefaultImage";
import { motion } from "framer-motion";
import React from "react";

interface ThemeImageProps {
	src: string | undefined;
	attribute?: string;
	attributeLink?: string;
}

export function ThemeImage({ src, attribute, attributeLink }: ThemeImageProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<DefaultImage
				src={src}
				attribute={attribute}
				attributeLink={attributeLink}
			/>
		</motion.div>
	);
}
