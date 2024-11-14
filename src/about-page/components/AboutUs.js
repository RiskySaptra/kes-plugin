import { motion } from "framer-motion";

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
					<h2 className="text-5xl font-bold mb-6 text-gray-800">
						PT KMI Electric Solution
					</h2>
					<p className="text-lg text-gray-800 leading-relaxed mb-6">
						PT KMI Electric Solution (PT KES) berdedikasi menjadi mitra
						terpercaya dalam distribusi kabel dan fitting, menawarkan solusi
						retail yang inovatif, berkelanjutan, dan berkualitas tinggi. Sejak
						didirikan, kami telah berkomitmen untuk menyediakan produk dan
						layanan unggulan yang dirancang untuk memenuhi kebutuhan sektor
						konstruksi electrical di Indonesia.
					</p>
					<p className="text-lg text-gray-800 leading-relaxed mb-6">
						Dengan semangat profesionalisme dan layanan yang selalu mengutamakan
						kepuasan pelanggan, kami terus berinovasi untuk mendorong kemajuan
						bisnis yang berkelanjutan.
					</p>
				</motion.div>

				{/* Image Section */}
				<motion.div
					className="flex"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
				>
					<img
						src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image path
						alt="PT KMI Electric Solution"
						width={500}
						height={400}
						className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default AboutSection;
