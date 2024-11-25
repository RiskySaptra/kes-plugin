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
			text: "Kami dapat melayani pembelian kabel tanpa minimal kuantiti dan menerima permintaan untuk kabel potongan dan produksi. Tentunya untuk pembelian grosir dan keperluan proyek akan mendapatkan harga khusus (best price).",
			icon: (
				<IconShoppingBag size={48} stroke={1.5} className="text-blue-600" />
			),
		},
		{
			title: "Jaminan Produk Asli, Baru, dan Bergaransi",
			text: "Kami dapat memberikan jaminan bahwa produk kami asli, baru, dan bergaransi. Jika diperlukan kami dapat mengeluarkan data teknis kabel (Technical Data Sheet/TDS), Tingkat Komponen Dalam Negeri (TKDN), sertifikat orisinil (COO dan COM), dan segala dokumen lainnnya.",
			icon: (
				<IconCertificate size={48} stroke={1.5} className="text-blue-600" />
			),
		},
		{
			title: "Gratis Biaya Kirim*",
			text: "Khusus pembelian grosir, kami siap antarkan langsung ke site proyek, kantor, maupun ekspedisi secara gratis.* Estimasi kirim 1 – 3 hari setelah melakukan transaksi. Khusus untuk area Jakarta dan sekitarnya. *S&K Berlaku",
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
			<div className="">
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
							className="bg-white shadow-[0_4px_10px_rgba(1,0,155,0.3)] rounded-3xl flex items-center flex-col p-10 gap-y-6 text-center min-h-[400px] transition-shadow hover:shadow-[0_10px_15px_rgba(1,0,155,0.4)]"
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
