import { createRoot, useState, useEffect } from "@wordpress/element";
import { motion, AnimatePresence } from "framer-motion";
import { RichText } from "@wordpress/block-editor";
import "./style.scss";

// Define the container outside the component
const container = document.getElementById("our-product");

const ProductCatalog = () => {
	const [activeImage, setActiveImage] = useState(0);
	const [blockAttributes, setBlockAttributes] = useState({
		text: "Produk Kami",
		images: [],
	});

	const { text, images } = blockAttributes;

	useEffect(() => {
		if (container) {
			const attributes = container.getAttribute("data-block-attributes");
			if (attributes) {
				try {
					setBlockAttributes(JSON.parse(attributes));
				} catch (error) {
					console.error("Failed to parse block attributes:", error);
				}
			}
		}
	}, []);

	return (
		<div>
			<div className="container mx-auto max-w-[1280px] pt-10 pb-14 px-5">
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-5"
				>
					{"Produk Kami"}
				</motion.h2>

				<RichText.Content
					tagName="h3"
					value={text}
					className="text-[12px] md:text-[18px] font-medium leading-normal not-prose mb-10 text-center"
				/>

				<div className="md:px-[10%]">
					<div className="grid grid-cols-4 gap-4">
						<AnimatePresence mode="wait">
							{images.length > 0 && images[activeImage]?.url && (
								<motion.div
									className="col-span-4"
									key={activeImage}
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.95 }}
									transition={{ duration: 0.3 }}
								>
									<motion.img
										src={images[activeImage].url}
										className="w-full rounded-lg not-prose max-h-[620px] object-fill"
										alt={images[activeImage].alt || "Image placeholder"}
									/>
								</motion.div>
							)}
						</AnimatePresence>

						{images.length > 0 ? (
							images.map((image, index) => (
								<motion.div
									key={index}
									className="col-span-1 group"
									onMouseEnter={() => setActiveImage(index)}
									whileHover={{ scale: 1.05 }} // Slightly enlarges thumbnail on hover
									transition={{ type: "spring", stiffness: 300, damping: 20 }}
								>
									<motion.img
										src={image.url}
										className={`w-full rounded-lg not-prose group-hover:hidden ${
											index === 0
												? "max-h-[620px] object-fill"
												: "h-auto object-center object-scale-down"
										}`}
										alt={image.alt || "Image placeholder"}
										layoutId={`thumbnail-${index}`}
									/>
									<div className="hidden group-hover:flex bg-gray-200 justify-center items-center rounded-lg h-full">
										cahya harume syekalai
									</div>
								</motion.div>
							))
						) : (
							<p>No images available</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

// Render the block dynamically if the container exists
if (container) {
	const root = createRoot(container);
	root.render(<ProductCatalog />);
} else {
	console.error("Container element with ID 'our-product' not found.");
}
