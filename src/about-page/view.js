import { useEffect, useState } from "@wordpress/element";
import { createRoot } from "react-dom/client";
import HeaderTemplate from "../common_component/HeaderTemplate";
import RetailSection from "./components/RetailSection";
import AboutSection from "./components/AboutUs";
import Gallery from "./components/Gallery";
import imageUrlBg from "../assets/page-background/Tentang Kami.png";

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

	return (
		<div className="relative">
			<HeaderTemplate
				imageUrl={imageUrl}
				desc="PT KMI Electric Solution (PT KES) hadir sebagai mitra terpercaya bagi setiap pelanggan dalam memenuhi kebutuhan kabel listrik, baik retail maupun proyek."
			/>
			<img
				src={imageUrlBg}
				alt="Static Image"
				className="absolute w-full h-[90%] -z-30 opacity-50 object-cover"
			/>
			<AboutSection />
			<div className="grid grid-cols-1 md:grid-cols-2 mb-20">
				<div className="bg-[#0100B1] flex justify-end pb-10 pt-5 md:pr-10 px-5">
					<div className="max-w-[640px] text-white">
						<h2 className="text-[36px] font-semibold">Visi</h2>
						<p>
							Menjadi mitra pilihan utama dan terpercaya bagi para pelanggan
							retail maupun proyek.
						</p>
					</div>
				</div>
				<div className="bg-[#C51714] flex justify-start pb-10 pt-5 md:pl-10 px-5">
					<div className="max-w-[640px] text-white">
						<h2 className="text-[36px] font-semibold">Misi</h2>
						<ul className="list-disc ml-5">
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
