import { motion } from "framer-motion";
import HorizontalSlider from "../../common_component/HorizontalSlider";

const OurPartner = () => {
	const companies = [
		{
			name: "Company 1",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
		{
			name: "Company 2",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
		{
			name: "Company 3",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
	];

	return (
		<div className="max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-10"
			>
				Kami memasarkan produk dari brand-brand terbaik di bidangnya
			</motion.h2>

			<HorizontalSlider items={companies} />
		</div>
	);
};

export default OurPartner;
