import { useEffect, useState } from "@wordpress/element";
import { createRoot } from "react-dom/client";

import { motion } from "framer-motion";
import HeaderTemplate from "../common_component/HeaderTemplate";

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
			<div className="mx-auto max-w-[1280px] grid md:grid-cols-2">
				<div>
					<p>Profil Perusahaan PT KMI Electric Solution</p>
					<p>'brr</p>
				</div>
				<div className="relative h-[500px] w-[500px]">
					<div className="h-[300px] w-[300px] bg-black absolute top-10 right-10 transform -translate-x-1 translate-y-1 rounded-lg shadow-lg"></div>
					<div className="h-[300px] w-[300px] bg-gray-200 absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-lg shadow-lg"></div>
				</div>
			</div>
			<div className="grid grid-flow-col grid-col-2">
				<div className="bg-black">a</div>
				<div className="bg-red-200">b</div>
			</div>
		</div>
	);
};

// Get the container element and render the block dynamically
const container = document.getElementById("about-page");
if (container) {
	const root = createRoot(container);
	root.render(<AboutPage />);
}
