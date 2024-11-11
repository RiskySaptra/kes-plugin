import { motion } from "framer-motion";

const RetailSection = () => {
	return (
		<div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center py-16 px-4">
			<div className="max-w-7xl mx-auto text-center text-white">
				{/* Acronym Header */}
				<motion.h1
					className="text-6xl md:text-5xl font-extrabold tracking-tight mb-6 text-shadow-lg"
					style={{ textShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)" }}
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
				>
					Our Core Values: <span className="text-[#8e44ad]">RETAIL</span>
				</motion.h1>

				{/* Acronym Letters */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12">
					{["R", "E", "T", "A", "I", "L"].map((letter, index) => (
						<motion.div
							key={letter}
							className="flex flex-col items-center justify-center bg-gradient-to-r from-[#8e44ad] to-[#e74c3c] text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
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
								className="text-6xl font-extrabold tracking-widest"
								whileHover={{ scale: 1.2, rotate: 5, color: "#fff" }}
								transition={{ duration: 0.3 }}
							>
								{letter}
							</motion.h2>

							{/* Letter Description */}
							<motion.p
								className="text-sm mt-4"
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
										<strong>Reliable:</strong> Keandalan adalah landasan utama
										dalam segala hal yang kami lakukan.
									</span>
								)}
								{letter === "E" && (
									<span>
										<strong>Extraordinary:</strong> Kami melampaui ekspektasi
										pelanggan dengan pendekatan luar biasa.
									</span>
								)}
								{letter === "T" && (
									<span>
										<strong>Tenacity:</strong> Ketangguhan dalam menghadapi
										tantangan adalah pilar kesuksesan kami.
									</span>
								)}
								{letter === "A" && (
									<span>
										<strong>Agile:</strong> Kami cepat dan fleksibel dalam
										merespons dinamika pasar.
									</span>
								)}
								{letter === "I" && (
									<span>
										<strong>Innovative:</strong> Inovasi adalah inti dari visi
										kami untuk menciptakan solusi baru.
									</span>
								)}
								{letter === "L" && (
									<span>
										<strong>Linkage:</strong> Kami membangun hubungan kuat untuk
										mencapai keberhasilan jangka panjang.
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
