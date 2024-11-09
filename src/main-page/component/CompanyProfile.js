import { IconDownload, IconBrandWhatsapp } from "@tabler/icons-react"; // Assuming you are using these icons
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
			viewport={{
				once: true, // Trigger only once
				amount: 0.5, // Trigger when 50% of the element is in the viewport
				margin: "100px", // Set the margin around the element (can be a string or number)
			}}
			className="mx-auto max-w-[1280px] md:pt-10 md:pb-14 md:px-0"
		>
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-5"
			>
				Profil Perusahaan
			</motion.h2>

			<div className="flex flex-col md:flex-row rounded-md md:my-[10px] px-5 gap-y-2">
				{/* Image Section */}
				<div className="md:basis-2/5 flex justify-center items-center md:py-5">
					{companyProfileImage && companyProfileImage.url ? (
						<img
							src={companyProfileImage.url}
							alt={companyProfileImage.alt}
							className="rounded-lg w-full h-auto object-cover"
						/>
					) : (
						<div className="w-[590px] h-[337px] bg-slate-800 rounded-xl flex justify-center items-center">
							<p className="text-white">No Image Selected</p>
						</div>
					)}
				</div>

				{/* Text Section */}
				<div className="md:basis-3/5 flex justify-center items-center flex-col md:py-5 md:px-10 not-prose">
					{/* Display the text content
					<h3 className="text-[12px] md:text-[18px] font-medium leading-normal">
						{companyProfileDesc || "No Text Provided"}
					</h3> */}

					<RichText.Content
						tagName="h3"
						value={companyProfileDesc}
						className="text-[12px] md:text-[18px] font-medium leading-normal"
					/>

					<div className="flex justify-between md:flex-row flex-col mt-[25px] w-full gap-2 md:gap-0">
						{/* PDF Download Section */}
						{pdfFile && pdfFile.url ? (
							<div className="flex justify-center">
								<a
									href={pdfFile.url}
									className="bg-[#0100B1] text-white md:py-3 py-2 px-4 justify-center rounded-lg hover:bg-[#01009B] font-medium flex items-center gap-2 md:w-[250px] w-full md:text-[18px] text-[12px]"
									download
								>
									<IconDownload size={20} />
									Unduh Company Profile
								</a>
							</div>
						) : (
							<p>No PDF uploaded.</p>
						)}

						{/* WhatsApp Contact Section */}
						{whatsAppUrl ? (
							<div className="flex justify-center">
								<a
									href={whatsAppUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-green-500 text-white md:py-3 py-2 px-3 justify-center rounded-lg hover:bg-green-600 font-medium flex items-center gap-2 md:w-[250px] w-full md:text-[18px] text-[12px]"
								>
									<IconBrandWhatsapp size={20} /> Hubungi kita Sekarang
								</a>
							</div>
						) : (
							<p>No WhatsApp link provided.</p>
						)}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default CompanyProfile;
