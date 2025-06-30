import { motion } from "framer-motion";
import StackedCard from "../../common_component/StackedCard";
import { RichText } from "@wordpress/block-editor";

const AboutSection = ({ about, aboutImages }) => {
	return (
		<section className="py-10 md:py-20 bg-white">
			<div className="max-w-7xl mx-auto flex flex-col md:!flex-row items-center px-5 gap-10">
				{/* Text Section - 70% on desktop */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
					className="w-full md:!w-7/10 flex flex-col items-start justify-center"
				>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
						PT KMI Electric Solution
					</h2>
					<RichText.Content
						tagName="div"
						value={about}
						className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-gray-700 text-justify"
					/>
				</motion.div>

				{/* Image Section - 30% on desktop */}
				{aboutImages?.length > 0 && (
					<div className="w-full md:!w-3/10 flex items-center justify-center">
						<StackedCard images={aboutImages} />
					</div>
				)}
			</div>
		</section>
	);
};

export default AboutSection;
