import { createRoot, useEffect, useState } from "@wordpress/element";

import BannerCarousel from "./component/BannerSlider";
import CompanyProfile from "./component/CompanyProfile";

import "./style.scss";
import OurProducts from "./component/OurProduct";

const MainPage = () => {
	const [pageAttributes, setPageAttributes] = useState(null); // Directly store images in state

	useEffect(() => {
		// Only access the DOM once during the component's mount phase
		const container = document.getElementById("main-page");

		if (container) {
			const attributes = container.getAttribute("data-block-attributes");

			if (attributes) {
				try {
					const parsedAttributes = JSON.parse(attributes);

					setPageAttributes(parsedAttributes); // Directly set images
				} catch (error) {
					console.error("Failed to parse block attributes:", error);
				}
			}
		}
	}, []);

	// Return early if images are not yet available
	if (!pageAttributes)
		return (
			<div className="h-screen w-screen flex justify-center items-center">
				Loading...
			</div>
		);

	console.log(pageAttributes);

	const {
		companyProfileDesc,
		companyProfileImage,
		images,
		pdfFile,
		phoneNumber,
		message,
		ourProductsDesc,
		ourProductsImages,
	} = pageAttributes;

	const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
		message,
	)}`;

	return (
		<div>
			<BannerCarousel banners={images} />
			<CompanyProfile
				companyProfileImage={companyProfileImage}
				companyProfileDesc={companyProfileDesc}
				pdfFile={pdfFile}
				whatsAppUrl={whatsAppUrl}
			/>
			<OurProducts images={ourProductsImages} text={ourProductsDesc} />
		</div>
	);
};

// Get the container element and render the block dynamically
const container = document.getElementById("main-page");
if (container) {
	const root = createRoot(container);
	root.render(<MainPage />);
}
