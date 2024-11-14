import { useState } from "react";
import { motion } from "framer-motion";

const FAQAccordion = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const faqs = [
		{
			question: "Apa kebijakan pengembalian barang Anda?",
			answer:
				"Kami menawarkan kebijakan pengembalian barang dalam 30 hari untuk semua produk. Produk harus dalam kondisi asli untuk memenuhi syarat pengembalian.",
		},
		{
			question: "Berapa lama waktu pengiriman?",
			answer:
				"Pengiriman biasanya memakan waktu 3-5 hari kerja, tergantung pada lokasi dan metode pengiriman Anda.",
		},
		{
			question: "Apakah Anda menawarkan pengiriman internasional?",
			answer:
				"Ya, kami menawarkan pengiriman internasional ke negara-negara tertentu. Biaya pengiriman akan dihitung saat checkout.",
		},
		{
			question: "Bisakah saya mengubah atau membatalkan pesanan saya?",
			answer:
				"Pesanan dapat diubah atau dibatalkan dalam waktu 24 jam setelah pembelian. Setelah itu, pesanan akan diproses dan tidak dapat diubah.",
		},
	];

	return (
		<div className="bg-[#F8F8F9] py-10">
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
				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							className="border-b border-gray-300"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							<motion.div
								onClick={() =>
									setActiveIndex(activeIndex === index ? null : index)
								}
								className="cursor-pointer py-4 px-4 bg-[#FCFCFD] rounded-md shadow-sm"
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.2 }}
							>
								<h3 className="text-lg font-medium text-[#354052]">
									{faq.question}
								</h3>
							</motion.div>
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{
									height: activeIndex === index ? "auto" : 0,
									opacity: activeIndex === index ? 1 : 0,
								}}
								transition={{ duration: 0.3 }}
								className="overflow-hidden px-4 py-2 bg-[#F3F4F6] rounded-md text-[#5A6271]"
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
