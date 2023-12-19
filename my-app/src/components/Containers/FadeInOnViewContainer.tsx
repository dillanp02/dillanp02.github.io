import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import React from "react";

type Props = {
	children?: ReactNode;
	triggerOnce?: boolean | undefined;
	$delay?: number;
	travelDistance?: string;
};

export const FadeInOnViewContainer: React.FC<Props> = ({
	children,
	triggerOnce,
	$delay,
	travelDistance = "-100vw",
}) => {
	const ref = useRef(null);
	const inView = useInView(ref);
	// const inView = useInView(ref, { once: triggerOnce || false });
	const [childrenInView, setChildrenInView] = useState(false);
	const [triggered, setTriggered] = useState(false);

	useEffect(() => {
		if (triggered && triggerOnce) {
			return;
		}

		setChildrenInView(inView);
		if (inView) {
			setTriggered(true);
		}
	}, [inView, triggerOnce, triggered]);

	const initialState = { opacity: 0, x: travelDistance };

	return (
		<motion.div ref={ref}>
			<motion.div
				initial={initialState}
				animate={childrenInView ? { opacity: 1, x: 0 } : initialState}
				transition={{ duration: inView ? 1 : 0, delay: inView ? $delay : 0 }}
			>
				{children}
			</motion.div>
		</motion.div>
	);
};
