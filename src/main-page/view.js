import { createRoot, useEffect, useState } from '@wordpress/element';

import BannerCarousel from './component/BannerSlider';
import CompanyProfile from './component/CompanyProfile';

import OurProducts from './component/OurProduct';
import WhyUs from './component/WhyUs';
import ReviewCards from './component/ReviewCards';
import FAQAccordion from './component/FaqAccordion';
import ClientCompany from './component/ClientCompany';
import OurPartner from './component/OurPartner';

import { motion } from 'framer-motion';
import { IconMapPinFilled } from '@tabler/icons-react';

import imageUrlBg from '../assets/page-background/Home Page.jpeg';

const MainPage = () => {
	const [ pageAttributes, setPageAttributes ] = useState( null ); // Directly store images in state

	useEffect( () => {
		if ( container ) {
			const attributes = container.getAttribute(
				'data-block-attributes'
			);

			if ( attributes ) {
				try {
					const parsedAttributes = JSON.parse( attributes );

					setPageAttributes( parsedAttributes ); // Directly set images
				} catch ( error ) {
					console.error( 'Failed to parse block attributes:', error );
				}
			}
		}
	}, [] );

	// Return early if images are not yet available
	if ( ! pageAttributes )
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

	const handleClick = ( url ) => {
		window.open( url, '_blank' );
	};

	const whatsAppUrl = `https://wa.me/${ phoneNumber }?text=${ encodeURIComponent(
		message
	) }`;

	return (
		<div className="relative">
			<BannerCarousel banners={ images } />
			<img
				src={ imageUrlBg }
				alt="Static Image"
				className="absolute w-screen h-[100%] -z-30 object-fill top-0"
			/>
			<CompanyProfile
				companyProfileImage={ companyProfileImage }
				companyProfileDesc={ companyProfileDesc }
				pdfFile={ pdfFile }
				whatsAppUrl={ whatsAppUrl }
			/>
			<OurProducts
				images={ ourProductsImages }
				text={ ourProductsDesc }
			/>
			<WhyUs />
			<OurPartner />
			<ClientCompany />
			<div className="max-w-7xl mx-auto pb-16">
				<motion.h2
					initial={ { opacity: 0, y: -50 } }
					whileInView={ { opacity: 1, y: 0 } }
					transition={ { duration: 0.5 } }
					viewport={ { once: true } }
					className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-10"
				>
					Lokasi Offline Store
				</motion.h2>

				<div className="grid grid-col grid-cols-1 md:!grid-cols-3 gap-5 px-5 md:px-0">
					<div
						// onClick={() =>
						// 	handleClick(
						// 		"https://www.google.com/maps/place/Putra+Delima+Mandiri/@-6.1871949,106.6326447,17z/data=!4m6!3m5!1s0x2e69f9c144efd7e1:0x64d952e86dfaf1a8!8m2!3d-6.1872482!4d106.6341897!16s%2Fg%2F11qgmr49x7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
						// 	)
						// }
						className="py-5 px-10 border rounded-xl flex gap-5 bg-white cursor-pointer items-center"
					>
						<div className="my-auto">
							<IconMapPinFilled size={ 30 } color="red" />
						</div>
						<div>
							<p className="text-sm">
								<span className="font-semibold">
									CV Putra Delima Mandiri{ ' ' }
								</span>{ ' ' }
								<br />
								Jln. Perintis kemerdekaan no.3, Babakan,
								Tangerang, Banten
							</p>
						</div>
					</div>

					<div
						// onClick={() =>
						// 	handleClick(
						// 		"https://www.google.com/maps/place/Centro+Electric/@-6.1915212,106.8468505,17z/data=!4m6!3m5!1s0x2e69f443f2bc8a4f:0xa65a0189bc0466d4!8m2!3d-6.1915425!4d106.8487388!16s%2Fg%2F1q5bqr2r3?authuser=0&hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
						// 	)
						// }
						className="py-5 px-10 border rounded-xl flex gap-5 bg-white cursor-pointer items-center"
					>
						<div className="my-auto">
							<IconMapPinFilled size={ 30 } color="red" />
						</div>
						<div>
							<p className="text-sm">
								<span className="font-semibold">
									Central Electric
								</span>{ ' ' }
								<br /> Plaza Kenari Mas Lantai 3 Blok J No.118 -
								126, Jl. Kramat Raya No.101, Jakarta Pusat Plaza
								Kenari Mas - Specialities Trade Mall.
							</p>
						</div>
					</div>

					<div
						// onClick={() =>
						// 	handleClick(
						// 		"https://www.google.com/maps/place/Centro+Electric/@-6.1915212,106.8468505,17z/data=!4m6!3m5!1s0x2e69f443f2bc8a4f:0xa65a0189bc0466d4!8m2!3d-6.1915425!4d106.8487388!16s%2Fg%2F1q5bqr2r3?authuser=0&hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
						// 	)
						// }
						className="py-5 px-10 border rounded-xl flex gap-5 bg-white cursor-pointer items-center"
					>
						<div className="my-auto">
							<IconMapPinFilled size={ 30 } color="red" />
						</div>
						<div>
							<p className="text-sm">
								<span className="font-semibold">
									PT Sukses Mandiri Listrik
								</span>{ ' ' }
								<br />
								Jl. Raya Mayor Oking Jaya Atmaja No.5G,
								Puspanegara, Kec. Citeureup, Kabupaten Bogor,
								Jawa Barat 16810
							</p>
						</div>
					</div>
				</div>
				{ /* <HorizontalSlider
					items={clientLogo}
					loop={true}
					maxHeight="max-h-[200px]"
				/> */ }
			</div>
			<ReviewCards />
			<FAQAccordion />
		</div>
	);
};

// Get the container element and render the block dynamically
const container = document.getElementById( 'main-page' );
if ( container ) {
	const root = createRoot( container );
	root.render( <MainPage /> );
}
