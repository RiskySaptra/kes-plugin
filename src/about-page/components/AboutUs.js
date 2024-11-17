import { motion } from "framer-motion";
import StackedCard from "../../common_component/StackedCard";
import { RichText } from "@wordpress/block-editor";

const AboutSection = () => {
	return (
		<div className="py-10 md:py-20">
			<div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:space-x-12 px-5 md:px-0">
				{/* Text Section */}
				<motion.div
					className="flex-1 text-left"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
				>
					<h2 className="text-[36px] font-medium leading-relaxed text-gray-700 mb-6 text-justify">
						Profil Perusahaan PT KMI Electric Solution
					</h2>
					<RichText.Content
						tagName="h3"
						value={`Berdiri pada tahun 2019, PT KMI Electric Solution (atau PT KES) merupakan cable stockist dan authorized distributor untuk kabel merek Kabel Metal Indonesia (KMI) dari PT KMI Wire and Cable, Tbk. Kabel KMI dikenal menjadi merek kabel 4 terbesar di Indonesia dan sudah diakui kualitasnya berstandar Nasional dan Internasional.

Kami menyediakan berbagai jenis dan ukuran kabel termasuk Kabel Bangunan, Kabel Kontrol dan Instrumentasi, dan kabel khusus lainnya. Kami dapat memberikan jaminan bahwa produk kami asli, baru, dan bergaransi. Jika diperlukan kami dapat mengeluarkan data teknis kabel (Technical Data Sheet/TDS), Tingkat Komponen Dalam Negeri (TKDN), sertifikat orisinil (COO dan COM), dan segala dokumen lainnnya.
Berlokasi di Cakung, Jakarta Timur.

Kami sudah berpengalaman melayani berbagai permintaan kabel untuk retail maupun proyek untuk pengiriman di dalam maupun di luar Jakarta. Komitmen kami kepada pelanggan kami dengan memberikan produk berkualitas dengan harga bersaing (best price) dan proses pengiriman yang tepat waktu.`}
						className="text-base md:text-lg font-medium leading-relaxed text-gray-700 mb-6 text-justify"
					/>
				</motion.div>

				<StackedCard />
			</div>
		</div>
	);
};

export default AboutSection;
