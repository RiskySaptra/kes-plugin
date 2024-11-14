import { motion } from "framer-motion";

const ClientCompanyComponent = () => {
	const companies = [
		{
			name: "Company 1",
			logo: "https://kabelretail.local/wp-content/uploads/2024/11/PT.KMI-LOGO-1.png",
		},
		{
			name: "Company 2",
			logo: "https://kabelretail.local/wp-content/uploads/2024/11/PT.KMI-LOGO-1.png",
		},
		{
			name: "Company 3",
			logo: "https://kabelretail.local/wp-content/uploads/2024/11/PT.KMI-LOGO-1.png",
		},
		{
			name: "Company 4",
			logo: "https://kabelretail.local/wp-content/uploads/2024/11/PT.KMI-LOGO-1.png",
		},
		{
			name: "Company 5",
			logo: "https://kabelretail.local/wp-content/uploads/2024/11/PT.KMI-LOGO-1.png",
		},
		{
			name: "Company 6",
			logo: "https://kabelretail.local/wp-content/uploads/2024/11/PT.KMI-LOGO-1.png",
		},
		{
			name: "Company 7",
			logo: "https://kabelretail.local/wp-content/uploads/2024/11/PT.KMI-LOGO-1.png",
		},
		{
			name: "Company 8",
			logo: "https://kabelretail.local/wp-content/uploads/2024/11/PT.KMI-LOGO-1.png",
		},
		{
			name: "Company 9",
			logo: "https://kabelretail.local/wp-content/uploads/2024/11/PT.KMI-LOGO-1.png",
		},
		{
			name: "Company 10",
			logo: "https://kabelretail.local/wp-content/uploads/2024/11/PT.KMI-LOGO-1.png",
		},
		{
			name: "Company 11",
			logo: "https://kabelretail.local/wp-content/uploads/2024/11/PT.KMI-LOGO-1.png",
		},
		{
			name: "Company 12",
			logo: "https://kabelretail.local/wp-content/uploads/2024/11/PT.KMI-LOGO-1.png",
		},
	];

	return (
		<div className="max-w-5xl mx-auto py-16">
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-10"
			>
				Klien Kami yang Terpercaya
			</motion.h2>

			<motion.div
				className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
				initial="hidden"
				animate="show"
				variants={{
					hidden: { opacity: 0 },
					show: {
						opacity: 1,
						transition: {
							staggerChildren: 0.1,
						},
					},
				}}
			>
				{companies.map((company, index) => (
					<motion.div
						key={index}
						className="flex justify-center items-center"
						variants={{
							hidden: { opacity: 0, y: 50 },
							show: { opacity: 1, y: 0 },
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<motion.img
							src={company.logo}
							alt={company.name}
							className="max-h-[80px] object-contain transition-all duration-300 hover:opacity-80"
						/>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default ClientCompanyComponent;
