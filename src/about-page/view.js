import { useEffect, useState } from "@wordpress/element";
import { createRoot } from "react-dom/client";
import { RichText } from "@wordpress/block-editor";

import HeaderTemplate from "../common_component/HeaderTemplate";
import RetailSection from "./components/RetailSection";
import AboutSection from "./components/AboutUs";
import Gallery from "./components/Gallery";

import imageUrlBg from "../assets/page-background/Tentang Kami.jpeg";
import imageUrl from "../assets/page-banner/about.jpeg";

const AboutPage = () => {
	const [pageAttributes, setPageAttributes] = useState(null);

	useEffect(() => {
		const container = document.getElementById("about-page");
		if (!container) return;

		const attributes = container.getAttribute("data-block-attributes");
		if (!attributes) return;

		try {
			const parsed = JSON.parse(attributes);
			console.log(parsed);

			setPageAttributes(parsed);
		} catch (error) {
			console.error("Failed to parse block attributes:", error);
		}
	}, []);

	const {
		about,
		visi,
		misiList = [],
		galleries = [],
		banner,
		aboutImages,
		subDescription,
		ourValues = [],
	} = pageAttributes || {};

	return (
		<div className="relative">
			<HeaderTemplate imageUrl={banner?.url || ""} />
			<img
				src={imageUrlBg}
				alt="Page background"
				className="absolute top-0 w-screen h-full object-fill -z-30"
			/>

			<AboutSection about={about} aboutImages={aboutImages} />

			<section className="grid grid-cols-1 mb-20">
				{/* Visi Section */}
				<div className="bg-[#0100B1] flex pb-10 pt-2 md:pr-10 px-5">
					<div className="text-white mx-auto max-w-[1280px] flex flex-col items-center w-full text-center">
						<h2 className="text-[36px] font-semibold mb-4">Visi</h2>
						{visi ? (
							<RichText.Content
								tagName="p"
								value={visi}
								className="text-base md:!text-xl font-medium leading-relaxed"
							/>
						) : (
							<p className="italic">Loading visi...</p>
						)}
					</div>
				</div>

				{/* Misi Section */}
				<div className="bg-[#C51714] flex pb-10 pt-2 md:pl-10 px-5">
					<div className="text-white mx-auto max-w-[1280px] flex flex-col items-center w-full text-left">
						<h2 className="text-[36px] font-semibold mb-4 text-center">Misi</h2>
						{Array.isArray(misiList) && misiList.length > 0 ? (
							<ul className="list-disc ml-5 text-base md:!text-xl space-y-2">
								{misiList.map((item, index) => (
									<li key={index}>
										<RichText.Content tagName="span" value={item} />
									</li>
								))}
							</ul>
						) : (
							<p className="italic">Loading misi...</p>
						)}
					</div>
				</div>
			</section>

			<RetailSection subDescription={subDescription} ourValues={ourValues} />
			<Gallery items={galleries} />
		</div>
	);
};

// Dynamically mount the component to the DOM
const container = document.getElementById("about-page");
if (container) {
	const root = createRoot(container);
	root.render(<AboutPage />);
}
