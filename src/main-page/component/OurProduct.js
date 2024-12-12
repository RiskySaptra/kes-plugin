import { useState } from "@wordpress/element";
import { motion, AnimatePresence } from "framer-motion";
import { RichText } from "@wordpress/block-editor";
import imageUrl from "../../assets/BACKROUND 3.png";

const OurProducts = ({ text, images = [] }) => {
	const [activeImage, setActiveImage] = useState(0);

	return (
		<div className="relative">
			<img
				src={imageUrl}
				alt="Static Image"
				className="absolute w-full h-full -z-10 opacity-50"
			/>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{
					once: true, // Trigger only once
					amount: 0.5, // Trigger when 50% of the element is in the viewport
					margin: "100px", // Set the margin around the element (can be a string or number)
				}}
				className="mx-auto max-w-[1280px] md:pt-10 md:pb-14 p-5 md:px-0 md:py-1"
			>
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-5"
				>
					{"Produk Kami"}
				</motion.h2>

				<RichText.Content
					tagName="h3"
					value={text}
					className="text-center md:text-center text-sm md:!text-lg font-medium leading-normal not-prose mb-10 md:px-[10%]"
				/>

				<div className="md:px-[10%]">
					<div className="grid grid-cols-2 md:!grid-cols-4 gap-4">
						<AnimatePresence mode="wait">
							{images.length > 0 && images[activeImage]?.url && (
								<motion.div
									className="col-span-2 md:!col-span-4"
									key={activeImage}
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.95 }}
									transition={{ duration: 0.3 }}
								>
									<motion.img
										src={images[activeImage].url}
										className="w-full rounded-lg not-prose h-[180px] md:h-[580px] object-fill"
										alt={images[activeImage].alt || "Image placeholder"}
									/>
								</motion.div>
							)}
						</AnimatePresence>

						{images && images.length > 0 ? (
							images.map((image, index) => (
								<motion.div
									key={index}
									className="col-span-1 relative rounded-lg overflow-hidden"
									onMouseEnter={() => setActiveImage(index)}
									whileHover={{ scale: 1.05 }}
									transition={{
										type: "spring",
										stiffness: 300,
										damping: 20,
									}}
								>
									{/* Image with fade-out effect on hover */}
									<motion.img
										src={image.url}
										className="w-full h-full object-cover"
										alt={image.alt || "Image placeholder"}
										layoutId={`thumbnail-${index}`}
										initial={{ opacity: 1 }}
										animate={{ opacity: 1 }}
										whileHover={{ opacity: 0.3 }} // Fades out the image slightly on hover
										transition={{ duration: 0.3 }}
									/>

									{/* Overlay with fade-in and scale effect */}
									<motion.div
										className="absolute inset-0 flex justify-center items-center bg-black/50 "
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 0 }} // Overlay starts hidden
										whileHover={{ opacity: 1, scale: 1 }} // Fades in and scales up slightly on hover
										transition={{ duration: 0.3 }}
									>
										<p className="text-center break-words w-full text-[10px] font-semibold text-white md:text-[12px] leading-tight">
											{image.description}
										</p>
									</motion.div>
								</motion.div>
							))
						) : (
							<p>No images available</p>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default OurProducts;
