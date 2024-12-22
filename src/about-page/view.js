import { useEffect, useState } from "@wordpress/element";
import { createRoot } from "react-dom/client";
import HeaderTemplate from "../common_component/HeaderTemplate";
import RetailSection from "./components/RetailSection";
import AboutSection from "./components/AboutUs";
import Gallery from "./components/Gallery";
import { RichText } from "@wordpress/block-editor";

import imageUrlBg from "../assets/page-background/Tentang Kami.jpeg";

import imageUrl from "../assets/page-banner/about.jpeg";

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

	console.log(pageAttributes);

	return (
		<div className="relative">
			<HeaderTemplate imageUrl={imageUrl} />
			<img
				src={imageUrlBg}
				alt="Static Image"
				className="absolute w-screen h-[90%] -z-30 opacity-50 object-fill"
			/>
			<AboutSection about={pageAttributes?.about} />
			<div className="grid grid-cols-1 md:grid-cols-2 mb-20">
				<div className="bg-[#0100B1] flex justify-end pb-10 pt-5 md:pr-10 px-5">
					<div className="max-w-[640px] text-white">
						<h2 className="text-[36px] font-semibold">Visi</h2>
						<RichText.Content
							tagName="p"
							value={pageAttributes?.visi}
							className="text-base md:text-lg font-medium leading-relaxed mb-6"
						/>
					</div>
				</div>
				<div className="bg-[#C51714] flex justify-start pb-10 pt-5 md:pl-10 px-5">
					<div className="max-w-[640px] text-white">
						<h2 className="text-[36px] font-semibold">Misi</h2>
						<RichText.Content
							tagName="p"
							value={pageAttributes?.misi}
							className="text-base md:text-lg font-medium leading-relaxed mb-6"
						/>
					</div>
				</div>
			</div>
			<RetailSection />
			<Gallery items={pageAttributes?.galleries} />
		</div>
	);
};

// Get the container element and render the block dynamically
const container = document.getElementById("about-page");
if (container) {
	const root = createRoot(container);
	root.render(<AboutPage />);
}
