import { useEffect, useState } from "@wordpress/element";
import { createRoot } from "react-dom/client";

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

	return <div>start news</div>;
};

// Get the container element and render the block dynamically
const container = document.getElementById("news-page");
if (container) {
	const root = createRoot(container);
	root.render(<AboutPage />);
}
