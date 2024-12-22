import { motion } from "framer-motion";

const RetailSection = () => {
	return (
		<div className="pb-5 md:pb-20">
			<div className="max-w-7xl mx-auto text-center text-gray-800">
				<p className="text-base md:!text-2xl font-medium leading-relaxed text-gray-700 mb-6 text-center">
					PT KMI Electric Solution berkomitmen menjadi mitra pilihan utama dan
					terpercaya sebagai penyedia kabel listrik, jointing, serta fitting &
					accessories. Dengan semangat profesionalisme tinggi melalui jaminan
					pelayanan terbaik, kami terus berinovasi guna kepuasan pelanggan dan
					pertumbuhan bisnis yang berkelanjutan.
				</p>

				<div className="mb-10">
					<motion.h2
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mt-10"
					>
						Nilai Perusahaan Kami
					</motion.h2>

					<motion.h3
						className="text-4xl md:text-5xl lg:text-6xl text-[#0100B1] font-extrabold tracking-tight mb-6"
						style={{ textShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)" }}
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.2, ease: "easeOut" }}
					>
						R E T A I L
					</motion.h3>
					<p className="text-base md:!text-2xl font-medium leading-relaxed text-gray-700 mb-6 text-center">
						Cerminan atas komitmen kami terhadap standar profesional yang tinggi
						dan keunggulan dalam setiap aspek produk maupun layanan kami.
					</p>
				</div>

				{/* Acronym Letters */}
				<div className="grid grid-cols-1 gap-6 lg:gap-12">
					{["R", "E", "T", "A", "I", "L"].map((letter, index) => (
						<motion.div
							key={letter}
							className="flex gap-6 sm:gap-x-6 justify-center min-h-[105px] items-center bg-[#0100B1] text-white px-5 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 1.2,
								delay: 0.3 * index, // Stagger animation delay
								ease: "easeOut",
							}}
						>
							{/* Letter Title */}
							<motion.h2
								className="text-4xl sm:text-6xl font-extrabold tracking-widest"
								style={{ flexBasis: "80px" }}
								whileHover={{ scale: 1.2, rotate: 5, color: "#fff" }}
								transition={{ duration: 0.3 }}
							>
								{letter}
							</motion.h2>

							{/* Letter Description with flexible flex-basis */}
							<motion.p
								className="text-xl sm:text-2xl mt-2 sm:ml-6 text-left"
								style={{ flexBasis: "calc(100% - 80px)" }}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 1.2,
									delay: 0.5,
									ease: "easeOut",
								}}
							>
								{letter === "R" && (
									<span>
										<strong>Reliable:</strong> KES berkomitmen menyediakan
										produk dan layanan yang dapat diandalkan oleh pelanggan,
										kapan dan di mana pun.
									</span>
								)}
								{letter === "E" && (
									<span>
										<strong>Extraordinary:</strong> KES berkomitmen untuk tidak
										hanya memenuhi ekspektasi pelanggan, namun juga melampauinya
										untuk memberikan nilai tambah bagi setiap kebutuhan retail
										maupun proyek.
									</span>
								)}
								{letter === "T" && (
									<span>
										<strong>Tenacity:</strong> KES berkomitmen untuk tangguh
										dalam menghadapi berbagai tantangan di masa kini dan yang
										akan datang.
									</span>
								)}
								{letter === "A" && (
									<span>
										<strong>Agile:</strong> KES berkomitmen untuk tetap tanggap
										dan fleksibel dalam merespons dinamika pasar, mampu
										memberikan solusi produk dan layanan yang tepat waktu dan
										relevan bagi setiap pelanggan.
									</span>
								)}
								{letter === "I" && (
									<span>
										<strong>Innovative:</strong> KES berkomitmen menciptakan
										solusi baru dalam memenuhi setiap kebutuhan pelanggan,
										mendorong pertumbuhan industri retail dengan berfokus pada
										efisiensi, kualitas, dan bisnis keberlanjutan.
									</span>
								)}
								{letter === "L" && (
									<span>
										<strong>Linkage:</strong> KES berkomitmen menjaga hubungan
										baik dalam membangun kemitraan yang saling menguntungkan
										untuk mendorong pertumbuhan bersama.
									</span>
								)}
							</motion.p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default RetailSection;
