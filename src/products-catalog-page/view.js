import { useEffect, useState, useMemo } from "@wordpress/element";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { sampleProducts } from "./constanta";
import { IconSearch } from "@tabler/icons-react";
import HeaderTemplate from "../common_component/HeaderTemplate";
import imageUrl from "../assets/page-banner/our-product.jpeg";

const ProductPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(8);
	const [searchTerm, setSearchTerm] = useState("");
	const [submitedsearchTerm, setSubmitedsearchTerm] = useState("");
	const [selectedFilter, setSelectedFilter] = useState("All");

	// Temporary state for filtered products after applying search and filters
	const filteredProducts = useMemo(() => {
		return sampleProducts.filter((product) => {
			return (
				(submitedsearchTerm === "" ||
					product.title
						.toLowerCase()
						.includes(submitedsearchTerm.toLowerCase()) ||
					product.description
						.toLowerCase()
						.includes(submitedsearchTerm.toLowerCase())) &&
				(selectedFilter === "All" || product.category === selectedFilter)
			);
		});
	}, [submitedsearchTerm, selectedFilter]);

	// Calculate total pages based on filtered products and pageSize
	const totalPages = useMemo(
		() => Math.ceil(filteredProducts.length / pageSize),
		[filteredProducts, pageSize],
	);

	// Handle filter change and reset currentPage to 1 when filter changes
	const handleFilterChange = (filter) => {
		setSelectedFilter(filter);
		setCurrentPage(1); // Reset to first page after filter change
	};

	// Handle search term submission (on Enter or search button)
	const handleSearchSubmit = () => {
		setSubmitedsearchTerm(searchTerm); // Apply search filter
		setCurrentPage(1); // Reset to first page after applying search
	};

	// Get products for the current page
	const getPaginatedProducts = () => {
		const startIndex = (currentPage - 1) * pageSize;
		return filteredProducts.slice(startIndex, startIndex + pageSize);
	};

	// Handle page change for pagination
	const handlePageChange = (pageNumber) => {
		if (pageNumber >= 1 && pageNumber <= totalPages) {
			setCurrentPage(pageNumber);
		}
	};
	const handlePageSize = (pagesize) => {
		setPageSize(pagesize);
		setCurrentPage(1);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<HeaderTemplate
				imageUrl={imageUrl}
				desc="PT KMI Electric Solution (KES) menyediakan berbagai jenis tipe dan ukuran kabel listrik berkualitas tinggi yang dirancang untuk memenuhi beragam kebutuhan, baik retail, proyek konstruksi, infrastruktur, dan industri.
Sebagai anak perusahaan dari PT KMI Wire and Cable Tbk sekaligus distributor resmi produk Kabelmetal Indonesia, kami menjamin keaslian produk dengan kualitas berstandar nasional maupun internasional. Kabelmetal Indonesia tersedia dalam berbagai tipe dan ukuran dengan kategori Low Voltage Cables, Flexible Cables, Fire Resistant Cables, dan Medium Voltage Cables, yang dilengkapi dengan sertifikat dan dokumen teknis untuk memastikan kesesuaian produk dengan kebutuhan Anda.
Varian produk lain yang kami sediakan adalah jointing dengan brand REPL dan fitting & accessories dengan brand SICAME-DERVAUX."
			/>
			{/* Filter Bar */}
			<FilterBar
				selectedFilter={selectedFilter}
				onFilterChange={handleFilterChange}
			/>
			{/* Search Bar */}
			<SearchBar
				searchTerm={searchTerm}
				onSearchChange={setSearchTerm}
				onSearchSubmit={handleSearchSubmit}
			/>
			{/* Product Grid with animation on page change */}
			<motion.div
				key={currentPage} // Key for animating each page change
				initial={{ opacity: 0, x: -100 }} // Slide in from the left
				animate={{ opacity: 1, x: 0 }} // Fade in and slide to center
				transition={{ duration: 0.5 }}
			>
				<ProductGrid products={getPaginatedProducts()} />
			</motion.div>
			{/* Pagination Controls */}
			<PaginationControls
				currentPage={currentPage}
				totalPages={totalPages}
				pageSize={pageSize}
				setPageSize={handlePageSize}
				onPageChange={handlePageChange}
			/>
		</motion.div>
	);
};

const FilterBar = ({ selectedFilter, onFilterChange }) => (
	<div className="w-full bg-[#0100B1] text-white py-5">
		<div className="flex flex-wrap justify-center max-w-[1280px] mx-auto gap-4 font-semibold">
			{[
				"All",
				"Low Voltage Cables",
				"Medium Voltage Cables",
				"Fire Resistant Cables",
				"Flexible Cables",
				"Jointing",
				"Fitting dan Accessories",
			].map((filter) => (
				<motion.div
					key={filter}
					className={`px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ${
						selectedFilter === filter
							? "bg-red-600 shadow-lg"
							: "bg-transparent hover:bg-opacity-80"
					}`}
					onClick={() => onFilterChange(filter)}
					whileHover={{
						scale: 1.1,
						boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
					}}
					whileTap={{ scale: 0.95 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
				>
					{filter}
				</motion.div>
			))}
		</div>
	</div>
);

const SearchBar = ({ searchTerm, onSearchChange, onSearchSubmit }) => (
	<div className="mx-auto max-w-[1280px] my-5 px-4">
		<div className="relative flex md:justify-start">
			{/* Input field */}
			<div className="relative w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
				<input
					type="text"
					placeholder="Search products..."
					value={searchTerm}
					onChange={(e) => onSearchChange(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							onSearchSubmit(); // Apply filter on Enter key press
						}
					}}
					className="w-full pl-10 p-3 bg-gray-100 font-semibold text-gray-600 rounded-lg focus:outline-none focus:ring-0 border border-gray-300"
				/>

				{/* Search icon inside input */}
				<div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-600">
					<IconSearch size={18} />
				</div>
			</div>
		</div>
	</div>
);

const ProductGrid = ({ products }) => (
	<motion.div
		className="grid mx-auto max-w-[1280px] md:grid-cols-4 gap-6 px-5 md:px-0"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition for grid appearance
	>
		{products.map((product, index) => (
			<motion.div
				key={product.id + index}
				className="bg-white p-5 rounded-lg shadow-[0_4px_10px_rgba(1,0,155,0.3)] group relative overflow-hidden"
				whileHover={{
					scale: 1.05,
					y: -10,
					boxShadow: "0px 15px 30px rgba(1,0,155,0.4)",
				}} // Smooth scaling, upward movement and shadow effect
				// shadow-[0_4px_10px_rgba(1,0,155,0.3)] shadow-[0_10px_15px_rgba(1,0,155,0.4)]
				transition={{
					duration: 0.3,
					type: "spring",
					stiffness: 300,
					damping: 25,
				}} // Smooth scaling and movement transition
				initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slight downward position
				animate={{ opacity: 1, y: 0 }}
			>
				<div className="bg-white rounded-lg min-h-[240px] mb-3 overflow-hidden relative">
					<motion.img
						src={product.imageUrl}
						alt={product.title}
						className="w-full h-full object-cover"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }} // Fade-in image on load
					/>
				</div>
				<p className="text-lg font-semibold text-gray-800">{product.title}</p>
				<p className="text-xs font-medium text-[#0000FE] mb-2">
					{product.spec}
				</p>
				<p className="text-sm text-gray-600">{product.description}</p>
				{/* Additional Info on Hover */}
				<div className="absolute bottom-0 left-0 right-0 p-5 bg-white bg-opacity-80 backdrop-blur-sm rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
					<p className="text-sm font-semibold text-gray-700 mb-3">
						{product.specDesc}
					</p>
					<div className="flex gap-2 mb-3">
						<button className="text-xs font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-[#39A849] to-[#27A74C] w-full text-white">
							Belanja di Tokopedia
						</button>
						<button className="text-xs font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-[#EE4D2D] to-[#E24339] w-full text-white">
							Belanja di Shopee
						</button>
					</div>
					<button className="text-sm font-semibold px-4 py-2 rounded-md bg-gradient-to-r from-[#0100B1] to-[#005BFF] w-full text-white">
						Unduh Catalog
					</button>
				</div>
			</motion.div>
		))}
	</motion.div>
);

const PaginationControls = ({
	currentPage,
	totalPages,
	pageSize,
	setPageSize,
	onPageChange,
}) => (
	<div className="flex justify-center gap-4 my-8">
		<select
			value={pageSize}
			onChange={(e) => setPageSize(parseInt(e.target.value))}
			className="px-3 py-2 bg-gray-800 text-white rounded-lg"
		>
			{[8, 16].map((size) => (
				<option key={size} value={size}>
					{size}
				</option>
			))}
		</select>
		<motion.button
			onClick={() => onPageChange(currentPage - 1)}
			disabled={currentPage === 1}
			className="px-4 py-2 bg-gray-800 text-white rounded-lg"
			whileHover={{ scale: 1.1 }} // Hover effect for buttons
			transition={{ duration: 0.3 }}
		>
			Previous
		</motion.button>
		<span>
			Page {currentPage} of {totalPages}
		</span>
		<motion.button
			onClick={() => onPageChange(currentPage + 1)}
			disabled={currentPage === totalPages}
			className="px-4 py-2 bg-gray-800 text-white rounded-lg"
			whileHover={{ scale: 1.1 }} // Hover effect for buttons
			transition={{ duration: 0.3 }}
		>
			Next
		</motion.button>
	</div>
);

const container = document.getElementById("products-catalog-page");
if (container) {
	const root = createRoot(container);
	root.render(<ProductPage />);
}
