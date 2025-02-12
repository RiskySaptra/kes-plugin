import { motion } from "framer-motion";
import HorizontalSlider from "../../common_component/HorizontalSlider";
import { partnerLogo } from "../../common_component/logo";

const OurPartner = () => {
	console.log(partnerLogo);

	return (
		<div className="max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-10 px-5"
			>
				Kami memasarkan produk dari brand-brand terbaik di bidangnya
			</motion.h2>

			<HorizontalSlider items={partnerLogo} maxHeight="max-h-[200px]" />
		</div>
	);
};

export default OurPartner;
