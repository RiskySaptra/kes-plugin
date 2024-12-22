import { motion } from "framer-motion";
import {
	IconTruckDelivery,
	IconCertificate,
	IconShoppingBag,
} from "@tabler/icons-react";
import { useState } from "react";

const WhyUs = () => {
	const [showTerms, setShowTerms] = useState(false);

	const items = [
		{
			title: "Melayani Pembelian Retail Maupun Proyek",
			text: "Kami dapat melayani pembelian kabel tanpa minimal order, untuk memenuhi kebutuhan retail dan proyek. Kami juga menerima permintaan untuk kabel potongan dan produksi. Tentunya untuk pembelian grosir dan keperluan proyek akan mendapatkan harga khusus (best price).",
			icon: (
				<IconShoppingBag size={48} stroke={1.5} className="text-blue-600" />
			),
		},
		{
			title: "Jaminan Produk Asli, Baru, dan Bergaransi",
			text: "Kami memberikan jaminan 100% keaslian produk dan bergaransi, dilengkapi dengan sertifikat dan dokumen teknis lainnya. Jika diperlukan kami dapat mengeluarkan data teknis kabel (Technical Data Sheet/TDS), Tingkat Komponen Dalam Negeri (TKDN), sertifikat orisinil (COO dan COM), dan segala dokumen lainnya.",
			icon: (
				<IconCertificate size={48} stroke={1.5} className="text-blue-600" />
			),
		},
		{
			title: "Gratis Biaya Kirim",
			text: (
				<>
					Kami siap mengantarkan pesanan Anda dengan jaminan pengiriman maksimal
					H+2 hari kerja setelah transaksi, ke seluruh area Jakarta dan
					sekitarnya.
					<br />
					<span
						// onClick={() => setShowTerms(true)}
						className="font-semibold"
					>
						*S&K Berlaku
					</span>
				</>
			),
			icon: (
				<IconTruckDelivery size={48} stroke={1.5} className="text-blue-600" />
			),
		},
	];

	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true, amount: 0.5, margin: "100px" }}
				className="mx-auto max-w-[1280px] md:pt-10 md:pb-14 p-5 md:px-0"
			>
				<div>
					<motion.h3
						initial={{ opacity: 0, y: -30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true, amount: 0.5, margin: "100px" }}
						className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold mb-5"
					>
						Mengapa Membeli di PT KMI Electric Solution (KES)?
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
								<div className="min-h-[75px] flex items-center justify-center">
									<p className="text-[20px] font-bold">{item.title}</p>
								</div>
								<p className="text-[13px] font-medium">{item.text}</p>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
			{/* Terms & Conditions Modal */}
			{showTerms && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white p-8 rounded-lg shadow-lg w-4/5 max-w-[600px]">
						<h4 className="text-lg font-bold mb-4">Syarat & Ketentuan</h4>
						<p className="text-sm">
							Pengiriman gratis berlaku untuk area Jakarta dan sekitarnya, dan
							terbatas pada pembelian minimum tertentu. Silakan hubungi layanan
							pelanggan kami untuk detail lebih lanjut.
						</p>
						<button
							onClick={() => setShowTerms(false)}
							className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
						>
							Tutup
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default WhyUs;
