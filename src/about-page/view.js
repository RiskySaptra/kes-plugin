import { useEffect, useState } from "@wordpress/element";
import { createRoot } from "react-dom/client";
import HeaderTemplate from "../common_component/HeaderTemplate";
import RetailSection from "./components/RetailSection";
import AboutSection from "./components/AboutUs";
import Gallery from "./components/Gallery";

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
		<div>
			<HeaderTemplate
				imageUrl={imageUrl}
				desc="PT KMI Electric Solution (PT KES) hadir sebagai mitra terpercaya bagi setiap pelanggan dalam memenuhi kebutuhan kabel listrik, baik retail maupun proyek."
			/>
			<AboutSection />
			<div className="grid grid-cols-1 md:grid-cols-2 mb-20">
				<div className="bg-[#0100B1] flex justify-end pb-10 pt-5 md:pr-10 px-5">
					<div className="max-w-[640px] text-white">
						<h2 className="text-[36px] font-semibold">Visi</h2>
						<p>
							Memantapkan posisi PT KMI Electric Solution (PT KES) sebagai
							distributor kabel dan fitting yang maju, tangguh, dan terpercaya
							dengan memberikan solusi terbaik dalam bidang pembangunan
							konstruksi electrical di Indonesia
						</p>
					</div>
				</div>
				<div className="bg-[#C51714] flex justify-start pb-10 pt-5 md:pl-10 px-5">
					<div className="max-w-[640px] text-white">
						<h2 className="text-[36px] font-semibold">Misi</h2>
						<p>
							Memberikan harga dan pelayanan terbaik untuk pelanggan Menjaga
							hubungan kemitraan yang saling menghargai Mengedepankan kerjasama
							tim dan budaya kerja profesional Meningkatkan daya saing mengikuti
							perkembangan teknologi
						</p>
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
