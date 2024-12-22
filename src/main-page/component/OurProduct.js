import { motion } from "framer-motion";
import { RichText } from "@wordpress/block-editor";

import HorizontalSlider from "../../common_component/HorizontalSlider";

const OurProducts = ({ text, images = [] }) => {
	const parsedImage = images.map((image) => {
		return { logo: image.url, name: image.url };
	});

	return (
		<div className="relative">
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{
					once: true, // Trigger only once
					amount: 0.5, // Trigger when 50% of the element is in the viewport
					margin: "100px", // Set the margin around the element (can be a string or number)
				}}
				className="mx-auto max-w-[1280px] md:pt-10 md:pb-14 p-5 md:px-0 md:py-1"
			>
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-5"
				>
					{"Produk Kami"}
				</motion.h2>

				<RichText.Content
					tagName="h3"
					value={text}
					className="text-center md:text-center text-sm md:!text-lg font-medium leading-normal not-prose mb-10 md:px-[10%]"
				/>

				<HorizontalSlider
					loop={true}
					items={parsedImage}
					itemSize="max-w-[400px]"
					maxHeight="max-h-[300px]"
				/>
			</motion.div>
		</div>
	);
};

export default OurProducts;
