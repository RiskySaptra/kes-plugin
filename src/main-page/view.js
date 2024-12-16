import { createRoot, useEffect, useState } from "@wordpress/element";

import BannerCarousel from "./component/BannerSlider";
import CompanyProfile from "./component/CompanyProfile";

import OurProducts from "./component/OurProduct";
import WhyUs from "./component/WhyUs";
import ReviewCards from "./component/ReviewCards";
import FAQAccordion from "./component/FaqAccordion";
import ClientCompany from "./component/ClientCompany";
import OurPartner from "./component/OurPartner";

import { motion } from "framer-motion";
import { IconMapPinFilled } from "@tabler/icons-react";

const MainPage = () => {
	const [pageAttributes, setPageAttributes] = useState(null); // Directly store images in state

	useEffect(() => {
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

	console.log(pageAttributes);

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
			<WhyUs />
			<OurPartner />
			<ClientCompany />
			<div className="max-w-7xl mx-auto pb-16">
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-10"
				>
					Lokasi Offline Store
				</motion.h2>

				<div className="grid grid-col grid-cols-1 md:!grid-cols-2 gap-5">
					<div className="py-5 px-10 border rounded-xl flex gap-5	">
						<div>
							<IconMapPinFilled size={30} color="red" />
						</div>

						<p className="font-md font-semibold">
							CV Putra Delima Mandiri Jln. Perintis kemerdekaan no.3, Babakan,
							Tangerang, Bante
						</p>
					</div>

					<div className="py-5 px-10 border rounded-xl flex gap-5	">
						<div>
							<IconMapPinFilled size={30} color="red" />
						</div>
						<p className="font-md font-semibold">
							Central Electric - Plaza Kenari Mas Lantai 3 Blok J No.118 - 126,
							Jl. Kramat Raya No.101, Jakarta Pusat Plaza Kenari Mas -
							Specialities Trade Mall.
						</p>
					</div>
				</div>
				{/* <HorizontalSlider
					items={clientLogo}
					loop={true}
					maxHeight="max-h-[200px]"
				/> */}
			</div>
			<ReviewCards />
			<FAQAccordion />
		</div>
	);
};

// Get the container element and render the block dynamically
const container = document.getElementById("main-page");
if (container) {
	const root = createRoot(container);
	root.render(<MainPage />);
}
