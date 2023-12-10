import { DefaultContainer } from "../components/Containers/DefaultContainer";
import PageTransition from "./PageTransition";

export default function Contact() {
	return (
		<PageTransition $key="contactpage">
			<DefaultContainer>
				<h1>Contact</h1>
			</DefaultContainer>
		</PageTransition>
	);
}
