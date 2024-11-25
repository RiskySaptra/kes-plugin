import { motion } from "framer-motion";
import HorizontalSlider from "../../common_component/HorizontalSlider";
import agungPodomoroLand from "../../assets/logo/agung-podomoro-land.png";
import agungSedayuGroup from "../../assets/logo/agung-sedayu-group.png";
import alamSutera from "../../assets/logo/alam-sutera.png";

import imageList from "../../common_component/logo";

const ClientCompanyComponent = () => {
	const companies = imageList.map((image) => ({
		name: image.name,
		logo: image.src,
	}));

	return (
		<div className="max-w-7xl mx-auto py-16">
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-10"
			>
				Klien Kami yang Terpercaya
			</motion.h2>

			<HorizontalSlider
				items={companies}
				loop={true}
				maxHeight="max-h-[200px]"
			/>
		</div>
	);
};

export default ClientCompanyComponent;
