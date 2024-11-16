import { useEffect, useState } from "@wordpress/element";
import { createRoot } from "react-dom/client";
import HeaderTemplate from "../common_component/HeaderTemplate";
import RetailSection from "./components/RetailSection";
import AboutSection from "./components/AboutUs";
import Gallery from "./components/Gallery";

const companies = [
	{
		name: "Company 1",
		logo: "http://kis-theme.local/wp-content/uploads/2024/10/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai-scaled.jpg",
	},
	{
		name: "Company 2",
		logo: "http://kis-theme.local/wp-content/uploads/2024/10/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai-scaled.jpg",
	},
	{
		name: "Company 3",
		logo: "http://kis-theme.local/wp-content/uploads/2024/10/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai-scaled.jpg",
	},
	{
		name: "Company 3",
		logo: "http://kis-theme.local/wp-content/uploads/2024/10/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai-scaled.jpg",
	},
	{
		name: "Company 1",
		logo: "http://kis-theme.local/wp-content/uploads/2024/10/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai-scaled.jpg",
	},
	{
		name: "Company 2",
		logo: "http://kis-theme.local/wp-content/uploads/2024/10/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai-scaled.jpg",
	},
	{
		name: "Company 3",
		logo: "http://kis-theme.local/wp-content/uploads/2024/10/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai-scaled.jpg",
	},
	{
		name: "Company 3",
		logo: "http://kis-theme.local/wp-content/uploads/2024/10/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai-scaled.jpg",
	},
];

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
			<Gallery items={companies} />
		</div>
	);
};

// Get the container element and render the block dynamically
const container = document.getElementById("about-page");
if (container) {
	const root = createRoot(container);
	root.render(<AboutPage />);
}
