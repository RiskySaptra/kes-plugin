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
				className="absolute w-screen h-[100%] -z-30 object-fill top-0"
			/>
			<AboutSection about={pageAttributes?.about} />
			<div className="grid grid-cols-1 mb-20">
				<div className="bg-[#0100B1] flex pb-10 pt-2 md:pr-10 px-5">
					<div className="text-white mx-auto max-w-[1280px]  flex flex-col items-center w-full">
						<h2 className="text-[36px] font-semibold">Visi</h2>
						<RichText.Content
							tagName="p"
							value={pageAttributes?.visi}
							className="text-base md:!text-xl font-medium leading-relaxed mb-6"
						/>
					</div>
				</div>
				<div className="bg-[#C51714] flex pb-10 pt-2 md:pl-10 px-5">
					<div className="text-white mx-auto max-w-[1280px] flex flex-col items-center w-full">
						<h2 className="text-[36px] font-semibold">Misi</h2>
						<ul class="list-disc ml-5 text-base md:!text-xl">
							<li>
								Konsisten dalam menyediakan produk berkualitas sesuai dengan
								kebutuhan pelanggan.
							</li>
							<li>
								Komitmen dalam memberikan pelayanan terbaik melalui jaminan
								harga yang kompetitif dan kecepatan respon kepada para
								pelanggan.
							</li>
							<li>
								Berbudaya kerja profesional dengan mengedepankan sinergi dan
								komunikasi dalam tim.
							</li>
							<li>Berdaya saing melalui adaptasi perkembangan teknologi.</li>
						</ul>
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
