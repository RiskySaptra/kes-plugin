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
			className="mx-auto max-w-[1280px] p-5 md:py-10 md:px-0"
		>
			{/* Section Title */}
			<motion.h2
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true, amount: 0.5, margin: "100px" }}
				className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold mb-6"
			>
				Profil Perusahaan
			</motion.h2>

			<div className="flex flex-col md:flex-row rounded-md gap-6 md:gap-8 md:my-4 md:px-8">
				{/* Image Section */}
				<div className="md:basis-2/5 flex justify-center items-center md:py-5">
					{companyProfileImage && companyProfileImage.url ? (
						<img
							src={companyProfileImage.url}
							alt={companyProfileImage.alt || "Company profile image"}
							className="rounded-lg w-full h-auto object-cover shadow-md"
						/>
					) : (
						<div className="w-[590px] h-[337px] bg-slate-800 rounded-lg flex justify-center items-center">
							<p className="text-white">No Image Selected</p>
						</div>
					)}
				</div>

				{/* Text Section */}
				<div className="md:basis-3/5 flex flex-col justify-center md:px-10">
					{/* Company Profile Description */}
					<RichText.Content
						tagName="h3"
						value={companyProfileDesc}
						className="text-[14px] md:text-[18px] font-medium leading-relaxed text-gray-700 mb-4"
					/>

					<div className="flex flex-col md:flex-row mt-6 w-full gap-3 md:gap-4">
						{/* PDF Download Button */}
						{pdfFile && pdfFile.url ? (
							<a
								href={pdfFile.url}
								className="bg-blue-600 text-white py-2 md:py-3 px-4 rounded-lg flex items-center gap-2 justify-center hover:bg-blue-700 transition-colors font-medium md:w-[250px] w-full text-[14px] md:text-[16px]"
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
								className="bg-green-500 text-white py-2 md:py-3 px-4 rounded-lg flex items-center gap-2 justify-center hover:bg-green-600 transition-colors font-medium md:w-[250px] w-full text-[14px] md:text-[16px]"
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
