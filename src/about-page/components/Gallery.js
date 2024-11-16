import { motion } from "framer-motion";
import HorizontalSlider from "../../common_component/HorizontalSlider";

const Gallery = ({ items }) => {
	return (
		<div className="max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mt-10"
			>
				Dokumentasi pengiriman kabel kami ke berbagai proyek
			</motion.h2>
			<HorizontalSlider items={items} />
		</div>
	);
};
export default Gallery;
