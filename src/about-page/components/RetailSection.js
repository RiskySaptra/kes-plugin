import { motion } from "framer-motion";

const RetailSection = ({ ourValues, subDescription }) => {
	return (
		<div className="pb-5 md:pb-20">
			<div className="max-w-7xl mx-auto text-center text-gray-800">
				<p className="text-base md:!text-2xl font-medium leading-relaxed text-gray-700 mb-6 text-center">
					{subDescription}
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
					{ourValues.map((htmlString, index) => {
						// Extract the first letter inside the <strong> tag
						const match = htmlString.match(/<strong>(\w)/i);
						const letter = match ? match[1] : "?";

						return (
							<motion.div
								key={index}
								className="flex gap-6 sm:gap-x-6 justify-center min-h-[105px] items-center bg-[#0100B1] text-white px-5 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 1.2,
									delay: 0.3 * index,
									ease: "easeOut",
								}}
							>
								<motion.h2
									className="text-4xl sm:text-6xl font-extrabold tracking-widest"
									style={{ flexBasis: "80px" }}
									whileHover={{ scale: 1.2, rotate: 5, color: "#fff" }}
									transition={{ duration: 0.3 }}
								>
									{letter}
								</motion.h2>

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
									dangerouslySetInnerHTML={{ __html: htmlString }}
								/>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default RetailSection;
