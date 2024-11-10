import { useEffect, useState, useMemo } from "@wordpress/element";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { sampleProducts } from "./constanta";

const ProductPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(8); // Default page size
	const [pageAttributes, setPageAttributes] = useState(null);
	const [jumpPage, setJumpPage] = useState(""); // For jump to page input
	const [searchTerm, setSearchTerm] = useState(""); // New state for search term

	useEffect(() => {
		const container = document.getElementById("products-catalog-page");

		if (container) {
			const attributes = container.getAttribute("data-block-attributes");

			if (attributes) {
				try {
					const parsedAttributes = JSON.parse(attributes);
					setPageAttributes(parsedAttributes);
				} catch (error) {
					console.error("Failed to parse block attributes:", error);
				}
			}
		}
	}, []);

	// Memoized filtered products based on search term
	const filteredProducts = () => {
		if (!searchTerm) return sampleProducts; // No search term, return all products
		return sampleProducts.filter(
			(product) =>
				product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				product.description.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	};

	const totalPages = Math.ceil(filteredProducts().length / pageSize);

	const handlePageChange = (pageNumber) => {
		if (pageNumber >= 1 && pageNumber <= totalPages) {
			setCurrentPage(pageNumber);
		}
	};

	const handleJumpChange = (e) => {
		const value = e.target.value;
		setJumpPage(value);
	};

	const handleJumpSubmit = () => {
		const pageNumber = parseInt(jumpPage, 10);
		if (pageNumber >= 1 && pageNumber <= totalPages) {
			setCurrentPage(pageNumber);
			setJumpPage(""); // Clear the input after jumping
		} else {
			alert("Invalid page number");
		}
	};

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value); // Update search term on input change
		setCurrentPage(1); // Reset to first page when search term changes
	};

	const getPaginatedProducts = () => {
		const startIndex = (currentPage - 1) * pageSize;
		return filteredProducts().slice(startIndex, startIndex + pageSize);
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.3, duration: 0.6 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				type: "spring",
				stiffness: 120,
				damping: 25,
			},
		},
		hover: {
			scale: 1.05,
			y: -10,
			transition: { type: "spring", stiffness: 300, damping: 25 },
		},
	};

	return (
		<motion.div
			className="not-prose"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			<div className="bg-gray-900 min-h-[560px] flex justify-center items-center text-white">
				<div className="mx-auto max-w-[1280px]">
					<h1 className="text-[36px] font-bold">Header Title</h1>
					<p>
						Kabel untuk Instalasi Listrik Outdoor, Indoor, dan Bangunan dari
						Wilson Cables Dapatkan kabel untuk instalasi listrik indoor dan
						outdoor yang terbaik untuk keperluan aktivitas anda di dalam rumah,
						gedung, perkantoran dan lain-lainnya. Kabel panel listrik dari
						Wilson Cables untuk instalasi rumah, outdoor, gedung, bangunan
						perkantoran, dan lain-lainnya bisa anda lihat semua di kategori ini
					</p>
				</div>
			</div>

			<div className="w-full bg-[#0100B1] text-white">
				<div className="flex mx-auto max-w-[1280px] gap-16 py-5 font-semibold">
					<div className="bg-red-600 px-4 py-1 rounded-lg">
						Low Voltage Cables
					</div>
					<div className="px-4 py-1 rounded-lg">Medium Voltage Cables</div>
					<div className="px-4 py-1 rounded-lg">Fire Resistant Cables</div>
					<div className="px-4 py-1 rounded-lg">Flexible Cables</div>
				</div>
			</div>

			{/* Search Bar */}
			<div className="mx-auto max-w-[1280px] my-5">
				<input
					type="text"
					placeholder="Search products..."
					value={searchTerm}
					onChange={handleSearchChange}
					className="w-full p-3 bg-gray-800 text-white rounded-lg"
				/>
			</div>

			<motion.div
				className="grid mx-auto max-w-[1280px] md:grid-cols-4 gap-5"
				variants={containerVariants}
			>
				{getPaginatedProducts().map((product) => (
					<motion.div
						key={product.id}
						className="bg-gray-200 p-5 rounded-lg group relative overflow-hidden cursor-pointer"
						variants={itemVariants}
						whileHover="hover"
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						{/* Image */}
						<div className="bg-white rounded-lg min-h-[265px] mb-2">
							<img src={product.imageUrl} alt={product.title} />
						</div>

						{/* Title and Description */}
						<p className="text-[16px] font-bold">{product.title}</p>
						<p className="text-[10px] font-semibold mb-2 text-[#0000FE]">
							{product.spec}
						</p>
						<p className="text-[13px] font-medium">{product.description}</p>

						{/* Hover content (Spec 1 and buttons) */}
						<div className="absolute bottom-0 left-0 right-0 p-5 bg-gray-200 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
							<p className="text-[13px] font-semibold mb-3">
								{product.specDesc}
							</p>
							<div className="flex gap-2 mb-2">
								<button className="text-[10px] font-semibold px-2 py-1 rounded-md bg-[#39A849] w-full text-white">
									Belanja di Tokopedia
								</button>
								<button className="text-[10px] font-semibold px-2 py-1 rounded-md bg-[#EE4D2D] w-full text-white">
									Belanja di Shopee
								</button>
							</div>
							<button className="text-[12px] font-semibold px-3 py-2 rounded-md bg-[#0100B1] w-full text-white">
								Unduh Catalog
							</button>
						</div>
					</motion.div>
				))}
			</motion.div>

			{/* Pagination Controls */}
			<div className="flex justify-center gap-4 my-8">
				{/* Page size selector */}
				<div className="flex items-center gap-2">
					<label htmlFor="page-size" className="text-white">
						Items per page:
					</label>
					<select
						id="page-size"
						value={pageSize}
						onChange={(e) => setPageSize(parseInt(e.target.value, 10))}
						className="px-3 py-2 bg-gray-800 text-white rounded-lg"
					>
						{[8, 16].map((size) => (
							<option key={size} value={size}>
								{size}
							</option>
						))}
					</select>
				</div>

				{/* Previous Button */}
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
				>
					Previous
				</button>

				{/* Page number display */}
				<span className="text-lg">
					Page {currentPage} of {totalPages}
				</span>

				{/* Next Button */}
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50"
				>
					Next
				</button>

				{/* Jump to page */}
				<div className="flex items-center gap-2">
					<label htmlFor="jump-to-page" className="text-white">
						Jump to page:
					</label>
					<input
						id="jump-to-page"
						type="number"
						value={jumpPage}
						onChange={handleJumpChange}
						className="px-3 py-2 bg-gray-800 text-white rounded-lg w-[60px]"
						min="1"
						max={totalPages}
					/>
					<button
						onClick={handleJumpSubmit}
						className="px-4 py-2 bg-gray-800 text-white rounded-lg"
					>
						Go
					</button>
				</div>
			</div>
		</motion.div>
	);
};

// Get the container element and render the block dynamically
const container = document.getElementById("products-catalog-page");
if (container) {
	const root = createRoot(container);
	root.render(<ProductPage />);
}
