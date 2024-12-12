import { motion } from "framer-motion";
import StackedCard from "../../common_component/StackedCard";
import { RichText } from "@wordpress/block-editor";

import { aboutImages } from "../../common_component/logo";

const AboutSection = () => {
	return (
		<div className="py-10 md:py-20">
			<div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-0 md:space-x-12 px-5 md:px-0">
				{/* Text Section */}
				<motion.div
					className="flex-1 text-left"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
				>
					<h2 className="text-[36px] font-medium leading-relaxed text-gray-700 mb-6 text-justify">
						PT KMI Electric Solution
					</h2>
					<RichText.Content
						tagName="h3"
						value={`PT KMI Electric Solution (KES) adalah anak perusahaan dari PT KMI Wire and Cable Tbk sekaligus sebagai distributor resmi dari produk Kabelmetal Indonesia. Sebagai entitas anak  dan distributor resmi, KES menyediakan beragam kabel berkualitas tinggi, berstandar nasional, dan internasional, mulai dari kabel tegangan rendah, medium, hingga kabel berspesifikasi khusus.


						Didirikan sejak 2019, KES telah memenuhi berbagai kebutuhan jenis kabel listrik baik untuk skala retail maupun proyek, dengan jangkauan pengiriman ke seluruh wilayah Indonesia.
						
						Tak hanya produk kabel listrik, KES juga memiliki varian produk lainnya seperti jointing dengan brand REPL dan fitting & accessories dengan brand Sicame-Dervaux. KES telah ditunjuk menjadi distributor resmi oleh kedua brand tersebut.  
						
						
						KES berkomitmen untuk memberikan pelayanan terbaik dengan harga yang kompetitif, pengiriman aman, dan tepat waktu.
						
						`}
						className="text-base md:text-lg font-medium leading-relaxed text-gray-700 mb-6 text-justify"
					/>
				</motion.div>

				<StackedCard images={aboutImages} />
			</div>
		</div>
	);
};

export default AboutSection;
