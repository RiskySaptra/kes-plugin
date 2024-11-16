import { IconDownload, IconBrandWhatsapp } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { RichText } from "@wordpress/block-editor";

const CompanyProfile = ({
	companyProfileDesc,
	pdfFile,
	whatsAppUrl,
	companyProfileImage,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true, amount: 0.5, margin: "100px" }}
			className="mx-auto max-w-7xl p-5 md:py-12 md:px-6"
		>
			{/* Section Title */}
			<motion.h2
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true, amount: 0.5, margin: "100px" }}
				className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-5"
			>
				Profil Perusahaan
			</motion.h2>

			{/* Grid Layout for Image and Text */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
				{/* Image Section */}
				<div className="flex justify-center items-center md:py-5">
					{companyProfileImage && companyProfileImage.url ? (
						<img
							src={companyProfileImage.url}
							alt={companyProfileImage.alt || "Company profile image"}
							className="rounded-lg w-full h-auto object-cover shadow-lg transition-transform transform hover:scale-105"
						/>
					) : (
						<div className="w-full h-[337px] bg-slate-800 rounded-lg flex justify-center items-center text-white">
							<p>No Image Selected</p>
						</div>
					)}
				</div>

				{/* Text Section */}
				<div className="flex flex-col justify-center md:px-10">
					{/* Company Profile Description */}
					<RichText.Content
						tagName="h3"
						value={companyProfileDesc}
						className="text-base md:text-lg font-medium leading-relaxed text-gray-700 mb-6 text-justify"
					/>

					{/* Action Buttons */}
					<div className="flex flex-col md:flex-row mt-6 gap-4">
						{/* PDF Download Button */}
						{pdfFile && pdfFile.url ? (
							<a
								href={pdfFile.url}
								className="bg-blue-600 text-white py-6 px-8 rounded-lg flex items-center gap-3 justify-center hover:bg-blue-700 transition-all font-semibold md:w-[250px] w-full text-sm md:text-base"
								download
								aria-label="Download company profile PDF"
							>
								<IconDownload size={22} />
								Unduh Company Profile
							</a>
						) : (
							<p className="text-gray-500 italic">No PDF uploaded.</p>
						)}

						{/* WhatsApp Contact Button */}
						{whatsAppUrl ? (
							<a
								href={whatsAppUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-green-500 text-white py-6 px-8 rounded-lg flex items-center gap-3 justify-center hover:bg-green-600 transition-all font-semibold md:w-[250px] w-full text-sm md:text-base"
								aria-label="Contact us on WhatsApp"
							>
								<IconBrandWhatsapp size={22} />
								Hubungi Kita Sekarang
							</a>
						) : (
							<p className="text-gray-500 italic">No WhatsApp link provided.</p>
						)}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default CompanyProfile;
