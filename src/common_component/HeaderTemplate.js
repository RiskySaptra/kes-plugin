import { motion } from "framer-motion";

const HeaderTemplate = ({ desc = "empty" }) => (
	<div className="relative bg-[#4A4A9B] min-h-[210px] md:!min-h-[420px] flex justify-center items-center text-white px-6 py-16 overflow-hidden">
		{/* Placeholder Image for visual interest */}
		<img
			src="https://via.placeholder.com/1200x600.png?text=Your+Company+Image+Here"
			alt="Background Placeholder"
			className="absolute inset-0 w-full h-full object-cover opacity-40"
		/>

		{/* Gradient overlay for readability */}
		<div className="absolute inset-0 bg-gradient-to-b from-[#4A4A9B] to-transparent opacity-90" />

		{/* Animated floating shapes */}
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 0.3, y: 0 }}
			transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
			className="absolute top-1/3 left-1/4 w-32 h-32 bg-indigo-400 rounded-full opacity-30"
		/>
		<motion.div
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 0.3, x: 0 }}
			transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
			className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-600 rounded-full opacity-40"
		/>
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 0.2, y: 0 }}
			transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
			className="absolute bottom-1/3 left-2/3 w-20 h-20 bg-pink-500 rounded-full opacity-30"
		/>

		{/* Content with animations */}
		{/* <motion.div
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="relative mx-auto max-w-7xl text-center z-10"
		>
			<motion.h1
				initial={{ scale: 0.9 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-shadow-lg"
				style={{ textShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)" }}
			>
				Header Title
			</motion.h1>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.6 }}
				className="text-lg md:text-xl font-light max-w-2xl mx-auto text-gray-200"
			>
				{desc}
			</motion.p>
		</motion.div> */}
	</div>
);

export default HeaderTemplate;
