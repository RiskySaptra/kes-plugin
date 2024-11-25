import { useState } from "react";
import { motion } from "framer-motion";

const FAQAccordion = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const faqs = [
		{
			question:
				"Produk kabel apa saja yang disediakan oleh PT KMI Electric Solution (KES)?",
			answer:
				"Kami menyediakan berbagai jenis kabel listrik, mulai dari kabel bertegangan rendah, medium, hingga berspesifikasi khusus untuk memenuhi kebutuhan retail dan proyek. ",
		},
		{
			question:
				"Apa yang membuat PT KMI Electric Solution (KES) berbeda dari distributor kabel lainnya?",
			answer:
				"Kami tidak hanya sebagai distributor resmi namun merupakan anak perusahaan dari PT KMI Wire and Cable Tbk, manufaktur dari produk Kabelmetal Indonesia. Kami dapat menjamin keaslian produk yang dilengkapi dengan sertifikat dan dokumen teknis.",
		},
		{
			question:
				"Apakah PT KMI Electric Solution (KES) menerima proyek skala besar?",
			answer:
				"Kami berfokus pada penjualan retail dan siap memenuhi segala kebutuhan proyek.",
		},
		{
			question: "Bagaimana PT KMI Electric Solution (KES) melayani pengiriman?",
			answer:
				"Kami selalu mengutamakan kepuasan pelanggan, oleh karena itu, kami siap melayani permintaan pengiriman produk ke area Jadetabek dengan jaminan pengiriman maksimal H+2.",
		},
		{
			question:
				"Bagaimana cara menghubungi PT KMI Electric Solution (PT KES) untuk informasi lebih lanjut?",
			answer:
				"Anda dapat menghubungi tim sales kami (cantumkan no. Luis, Alfian, Ghifar) atau melalui formulir yang tersedia pada bagian kontak.",
		},
	];

	return (
		<div className="py-10">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="flex justify-center">
					<motion.h2
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-left text-[20px] md:text-[36px] text-[#33394B] font-bold mb-5"
					>
						Pertanyaan Umum
					</motion.h2>
				</div>
				<div className="px-5 md:px-0 text-white">
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							className="rounded-md"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							<motion.div
								onClick={() =>
									setActiveIndex(activeIndex === index ? null : index)
								}
								className={`cursor-pointer py-4 px-4 rounded-t-md transition-all ${
									activeIndex === index
										? "bg-[#0100B1] text-white"
										: "bg-white text-gray-900"
								}`}
								transition={{ duration: 0.2 }}
							>
								<h3 className="text-lg font-medium">{faq.question}</h3>
							</motion.div>
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{
									height: activeIndex === index ? "auto" : 0,
									opacity: activeIndex === index ? 1 : 0,
								}}
								transition={{ duration: 0.3 }}
								className={`overflow-hidden bg-[#0100B1] rounded-b-md ${
									activeIndex === index ? "py-2 px-4" : ""
								}`}
							>
								<p>{faq.answer}</p>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FAQAccordion;
