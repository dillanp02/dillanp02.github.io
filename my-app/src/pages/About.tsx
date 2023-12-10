import { motion } from "framer-motion";
import { DefaultContainer } from "../components/Containers/DefaultContainer";

export default function About() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key="aboutpage"
			transition={{ duration: 1 }}
		>
			<DefaultContainer>
				<h1>About</h1>
			</DefaultContainer>
		</motion.div>
	);
}
