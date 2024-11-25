import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../../common_component/infinite-moving-cards";

const ReviewCards = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true, amount: 0.5, margin: "100px" }}
			className="mx-auto max-w-[1280px] overflow-hidden"
		>
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-5"
			>
				Dengarkan apa yang dikatakan pengguna kami
			</motion.h2>

			<InfiniteMovingCards
				items={testimonials1}
				direction="right"
				speed="normal"
			/>
			<InfiniteMovingCards
				items={testimonials2}
				direction="left"
				speed="normal"
			/>
		</motion.div>
	);
};
export default ReviewCards;

const testimonials2 = [
	{
		quote:
			"Kualitas kabelmetal Indonesia sangat luar biasa, untuk kesekian kali saya tidak kecewa, pengiriman cepat, harga bersahabat, terima kasih.",
		name: "M***H",
		rating: 5,
	},
	{
		quote:
			"Kabelmetal Indonesia merupakan perusahaan profesional yang bergerak di bidang kabel dan produk kabelnya sangat berkualitas dan aman digunakan dalam berbagai bidang instalasi listrik.",
		name: "Marwih",
		rating: 5,
	},
	{
		quote:
			"Ini yang jual/admin nya sih sumpah the best terbaik banged, fast respon si chat dan sangat membantu sekali, kualitas kabelnya super bagus dan real kualitas bagus. Sangat recomend sekali buat beli di toko ini jangan ragu lagi udah, kualitas pelayan nomer 1.",
		name: "Yudhistirasepta",
		rating: 5,
	},
	{
		quote:
			"Barang sesuai deskripsi produk original kuat, dari brand ternama, kualitas material tidak diragukan, harga juga terjangkau.",
		name: "Rudy",
		rating: 5,
	},
];

const testimonials1 = [
	{
		quote:
			"Respon seller cepat, pengiriman barang sesuai jadwal, untuk kualitas barang sesuai yang ditawarkan, material barang tidak kalah dengan brand yang lainnya karena termasuk brand 3 besar",
		name: "Martin",
		rating: 5,
	},
	{
		quote:
			"Barang sesuai deskripsi, pengepakan aman dan baik. Test sambungan kabel full 100m, respon cepat, recommended seller.",
		name: "Chepy",
		rating: 5,
	},
	{
		quote:
			"Kualitas bagus, seller ramah, barang sesuai deskripsi. Bukan kabel murahan!!!",
		name: "Aranditarazaq",
		rating: 5,
	},
	{
		quote:
			"Barang bagus, tembaga asli. Packing sangat rapi, bagus aman. Produk original barang sesuai deskripsi.",
		name: "G***r",
		rating: 5,
	},
];
