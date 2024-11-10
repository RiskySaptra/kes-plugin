import { motion } from "framer-motion";
import {
	IconTruckDelivery,
	IconCertificate,
	IconShoppingBag,
} from "@tabler/icons-react";

const WhyUs = () => {
	const items = [
		{
			title: "Melayani Pembelian Ecer maupun Grosir",
			text: "Kami melayani pembelian tanpa minimal qty* dan menerima permintaan kabel potongan dan produksi. Untuk pembelian grosir dan proyek, harga khusus tersedia.",
			icon: (
				<IconShoppingBag size={48} stroke={1.5} className="text-blue-600" />
			),
		},
		{
			title: "Jaminan Produk Asli, Baru, dan Bergaransi",
			text: "Produk kami dijamin asli, baru, dan bergaransi, dengan data teknis, TKDN, COO, dan dokumen lainnya yang tersedia jika diperlukan.",
			icon: (
				<IconCertificate size={48} stroke={1.5} className="text-blue-600" />
			),
		},
		{
			title: "Gratis Biaya Kirim*",
			text: "Untuk pembelian grosir, kami siap antarkan gratis ke site proyek atau kantor dalam 1-3 hari untuk area Jakarta dan sekitarnya.*",
			icon: (
				<IconTruckDelivery size={48} stroke={1.5} className="text-blue-600" />
			),
		},
	];
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true, amount: 0.5, margin: "100px" }}
			className="mx-auto max-w-[1280px] md:pt-10 md:pb-14 p-5 md:px-0"
		>
			<div className="px-5 md:px-20 pb-14">
				<motion.h3
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, amount: 0.5, margin: "100px" }}
					className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold mb-5"
				>
					Mengapa Memilih PT KMI Electric Solution?
				</motion.h3>
				<div className="grid md:grid-cols-3 gap-12 pt-5 pb-10">
					{items.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 * index }}
							whileHover={{ scale: 1.05, y: -10 }}
							viewport={{
								once: true,
								amount: 0.5,
								margin: "100px",
							}}
							className="bg-white shadow-lg rounded-3xl flex items-center flex-col p-10 gap-y-6 text-center min-h-[400px] transition-shadow hover:shadow-2xl"
						>
							<div className="p-4">{item.icon}</div>
							<p className="text-[20px] font-bold">{item.title}</p>
							<p className="text-[13px] font-medium">{item.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default WhyUs;
