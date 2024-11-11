import { useEffect, useState } from "@wordpress/element";
import { createRoot } from "react-dom/client";
import HeaderTemplate from "../common_component/HeaderTemplate";
import RetailSection from "./components/RetailSection";
import AboutSection from "./components/AboutUs";
import Gallery from "./components/Gallery";

const AboutPage = () => {
	const [pageAttributes, setPageAttributes] = useState(null);

	useEffect(() => {
		if (container) {
			const attributes = container.getAttribute("data-block-attributes");

			if (attributes) {
				try {
					const parsedAttributes = JSON.parse(attributes);
					setPageAttributes(parsedAttributes);
				} catch (error) {
					console.error("Failed to parse block attributes:", error);
				}
			}
		}
	}, []);

	return (
		<div>
			<HeaderTemplate />
			<AboutSection />
			<RetailSection />
			<Gallery />
		</div>
	);
};

// Get the container element and render the block dynamically
const container = document.getElementById("about-page");
if (container) {
	const root = createRoot(container);
	root.render(<AboutPage />);
}
