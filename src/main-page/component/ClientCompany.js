import { motion } from "framer-motion";
import HorizontalSlider from "../../common_component/HorizontalSlider";

const ClientCompanyComponent = () => {
	const companies = [
		{
			name: "Company 1",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
		{
			name: "Company 2",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
		{
			name: "Company 3",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
		{
			name: "Company 4",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
		{
			name: "Company 5",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
		{
			name: "Company 6",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
		{
			name: "Company 7",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
		{
			name: "Company 8",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
		{
			name: "Company 9",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
		{
			name: "Company 10",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
		{
			name: "Company 11",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
		{
			name: "Company 12",
			logo: "https://kabelretail.co.id/wp-content/uploads/2024/01/download-1.png",
		},
	];

	return (
		<div className="max-w-7xl mx-auto py-16">
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-10"
			>
				Klien Kami yang Terpercaya
			</motion.h2>

			<HorizontalSlider items={companies} loop={true} />
		</div>
	);
};

export default ClientCompanyComponent;
