import { DefaultContainer } from "../components/Containers/DefaultContainer";
import PageTransition from "./PageTransition";

export default function About() {
	return (
		<PageTransition $key="aboutpage">
			<DefaultContainer>
				<h1>About</h1>
			</DefaultContainer>
		</PageTransition>
	);
}
