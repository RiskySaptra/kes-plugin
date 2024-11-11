import { useState, useEffect, useMemo } from "@wordpress/element";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import { RichText } from "@wordpress/block-editor";
import HeaderTemplate from "../common_component/HeaderTemplate";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
	if (!categories) return "loading...";

	return (
		<div className="overflow-x-auto overflow-y-hidden whitespace-nowrap flex justify-start space-x-4 mb-10 px-4 scrollbar-hidden py-2">
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				className={`px-4 py-2 rounded-lg font-semibold min-w-[135px] ${
					selectedCategory === -1
						? "bg-blue-600 text-white"
						: "bg-gray-200 text-gray-700"
				}`}
				onClick={() => onSelectCategory(-1)}
			>
				All Categories
			</motion.button>
			{categories.map((category) => (
				<motion.button
					key={category.id}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					className={`px-4 py-2 rounded-lg font-semibold min-w-[135px] ${
						selectedCategory === category.id
							? "bg-blue-600 text-white"
							: "bg-gray-200 text-gray-700"
					}`}
					onClick={() => onSelectCategory(category.id)}
				>
					{category.name}
				</motion.button>
			))}
		</div>
	);
};
const extractImageUrl = (content) => {
	const regex = /<img [^>]*src="([^"]*)"[^>]*>/;
	const match = content.match(regex);
	return match ? match[1] : "";
};
const NewsList = ({ newsItems }) => (
	<AnimatePresence mode="wait">
		<motion.div
			key={newsItems.map((news) => news.id).join("-")}
			className="grid grid-cols-2 lg:grid-cols-3 gap-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			{newsItems.map((news, index) => (
				<motion.div
					key={news.id + index}
					className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
					whileHover={{ scale: 1.05, y: -3 }}
					transition={{ duration: 0.2, ease: "easeInOut" }}
				>
					{/* Wrap the card with a link to news.url */}
					<a href={news.link} target="_self" rel="noopener noreferrer">
						<div className="relative">
							{/* Post Thumbnail */}
							<img
								src={
									extractImageUrl(news.content.rendered) ||
									"https://via.placeholder.com/300x200?text=Future+of+Education"
								}
								alt={news.title.rendered}
								className="w-full min-h-[200px] object-cover rounded-t-lg"
							/>
							{/* Dark overlay effect */}
							<div className="absolute inset-0 bg-black opacity-25 rounded-t-lg"></div>
						</div>

						<div className="p-5">
							<h2 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors">
								{news.title.rendered}
							</h2>
							<p className="text-gray-600 text-sm mb-2">
								{new Date(news.date).toLocaleDateString()}
							</p>
							{/* Excerpt text */}
							<RichText.Content
								tagName="p"
								value={news.excerpt.rendered}
								className="text-sm text-gray-500 truncate"
							/>
						</div>
					</a>
				</motion.div>
			))}

			{newsItems.length === 0 && (
				<p className="text-center text-gray-500 col-span-full">
					No news articles available in this category.
				</p>
			)}
		</motion.div>
	</AnimatePresence>
);

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => (
	<div className="flex justify-center items-center space-x-4 mt-8">
		<motion.button
			onClick={() => onPageChange(currentPage - 1)}
			disabled={currentPage === 1}
			className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg disabled:opacity-50"
			whileHover={{ scale: 1.1 }}
		>
			Previous
		</motion.button>
		<span>
			Page {currentPage} of {totalPages}
		</span>
		<motion.button
			onClick={() => onPageChange(currentPage + 1)}
			disabled={currentPage === totalPages}
			className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg disabled:opacity-50"
			whileHover={{ scale: 1.1 }}
		>
			Next
		</motion.button>
	</div>
);

const Sidebar = ({ latestNews }) => (
	<div className="w-1/4 pt-[100px]">
		<h2 className="text-2xl font-bold mb-4 truncate-ellipsis-title">
			Latest News
		</h2>
		<motion.div
			className="space-y-4"
			initial="hidden"
			animate="visible"
			variants={{
				visible: {
					transition: {
						staggerChildren: 0.15,
					},
				},
			}}
		>
			{latestNews.map((news, index) => (
				<motion.div
					key={news.id + index}
					variants={{
						hidden: { opacity: 0, x: -20 },
						visible: { opacity: 1, x: 0 },
					}}
					transition={{ duration: 0.4, ease: "easeInOut" }}
					whileHover={{
						scale: 1.05, // Slightly enlarge on hover
						boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Adds a shadow effect
					}}
				>
					<a
						className="flex gap-2 p-2 cursor-pointer"
						href={news.link}
						target="_self"
						rel="noopener noreferrer"
					>
						<img
							src={
								news.imageUrl ||
								"https://via.placeholder.com/300x200?text=Future+of+Education"
							}
							alt={news.title.rendered}
							className="w-24 h-24 object-cover rounded-md"
						/>
						<div>
							<h3 className="text-md font-semibold truncate-ellipsis-title ">
								{news.title.rendered}
							</h3>
							<p className="text-xs text-gray-500">
								{new Date(news.date).toLocaleDateString()}
							</p>
							<RichText.Content
								tagName="h3"
								value={news.excerpt.rendered}
								className="text-xs text-gray-500 truncate-ellipsis-desc"
							/>
						</div>
					</a>
				</motion.div>
			))}
		</motion.div>
	</div>
);

const NewsHubPage = () => {
	const [selectedCategory, setSelectedCategory] = useState(-1);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 6;

	const [categories, setCategories] = useState([]);
	const [posts, setPosts] = useState([]);
	const [latestNews, setLatestNews] = useState([]);
	const [error, setError] = useState(null);

	// Fetch categories and posts together in a single useEffect
	useEffect(() => {
		const fetchData = async () => {
			try {
				const [categoriesRes, postsRes] = await Promise.all([
					fetch("/wp-json/wp/v2/categories"),
					fetch("/wp-json/wp/v2/posts?per_page=100"),
				]);

				if (!categoriesRes.ok || !postsRes.ok) {
					throw new Error(
						`Failed to fetch data: ${categoriesRes.statusText}, ${postsRes.statusText}`,
					);
				}

				const [categoriesData, postsData] = await Promise.all([
					categoriesRes.json(),
					postsRes.json(),
				]);

				setCategories(categoriesData);
				setPosts(postsData);

				// Sort posts by date and store latest 5 for sidebar
				const sortedPosts = [...postsData].sort(
					(a, b) => new Date(b.date) - new Date(a.date),
				);
				setLatestNews(sortedPosts.slice(0, 5));
			} catch (error) {
				setError(error.message);
			}
		};

		fetchData();
	}, []);

	// Memoized filter and pagination for efficiency
	const filteredNews = useMemo(() => {
		return selectedCategory === -1
			? posts
			: posts.filter((post) =>
					post.categories.some((id) => id === selectedCategory),
			  );
	}, [selectedCategory, posts]);

	const totalPages = useMemo(
		() => Math.ceil(filteredNews.length / pageSize),
		[filteredNews.length],
	);

	const paginatedNews = useMemo(() => {
		return filteredNews.slice(
			(currentPage - 1) * pageSize,
			currentPage * pageSize,
		);
	}, [currentPage, filteredNews]);

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
		setCurrentPage(1);
	};

	const handlePageChange = (newPage) => {
		if (newPage >= 1 && newPage <= totalPages) {
			setCurrentPage(newPage);
		}
	};

	return (
		<>
			{error && <p className="text-red-500">Error: {error}</p>}
			<HeaderTemplate />
			<div className="mx-auto max-w-[1280px] p-8 flex">
				<div className="w-3/4 pr-8">
					<CategoryFilter
						categories={categories}
						selectedCategory={selectedCategory}
						onSelectCategory={handleCategoryChange}
					/>
					<NewsList newsItems={paginatedNews} />
					{totalPages > 1 && (
						<PaginationControls
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={handlePageChange}
						/>
					)}
				</div>
				<Sidebar latestNews={latestNews} />
			</div>
		</>
	);
};

// Get the container element and render the News Hub Page dynamically
const container = document.getElementById("news-page");
if (container) {
	const root = createRoot(container);
	root.render(<NewsHubPage />);
}
