import { useState, useEffect } from "@wordpress/element";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion"; // Helps to loop indexes in a circular manner
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const BannerCarousel = ({ banners, interval = 2000 }) => {
	const [[current, direction], setCurrent] = useState([0, 0]);
	const [isPaused, setIsPaused] = useState(false); // State to track if the carousel is paused

	// Auto-play timer
	useEffect(() => {
		if (isPaused) return; // Do nothing if paused

		const timer = setInterval(() => {
			paginate(1); // Move to the next banner
		}, interval); // Change every 3.5 seconds

		return () => clearInterval(timer); // Clean up the timer when component is unmounted
	}, [isPaused]); // Re-run when pause state changes

	// Paginate to the next or previous banner
	const paginate = (newDirection) => {
		setCurrent(([prevIndex]) => [prevIndex + newDirection, newDirection]);
	};

	// Loop the index with `wrap` to make it circular
	const bannerIndex = wrap(0, banners.length, current);

	// Sliding animation variants
	const variants = {
		enter: (direction) => ({
			x: direction > 0 ? "100%" : "-100%", // Slide from right or left
			opacity: 0,
			transition: {
				x: { duration: 0.6, ease: "easeOut" },
				opacity: { duration: 0.3 },
			},
		}),
		center: {
			x: 0,
			opacity: 1,
			transition: {
				x: { duration: 0.6, ease: "easeOut" },
				opacity: { duration: 0.3 },
			},
		},
		exit: (direction) => ({
			x: direction < 0 ? "100%" : "-100%", // Slide out to right or left
			opacity: 0,
			transition: {
				x: { duration: 0.6, ease: "easeOut" },
				opacity: { duration: 0.3 },
			},
		}),
	};

	// Handle click on indicator dot
	const handleIndicatorClick = (index) => {
		setCurrent([index, 0]); // Jump to the clicked index
	};

	// Pause and resume carousel on hover
	const handleMouseEnter = () => setIsPaused(true); // Pause on hover
	const handleMouseLeave = () => setIsPaused(false); // Resume when mouse leaves

	return (
		<div
			className="relative w-full h-[240px] md:h-screen overflow-hidden"
			onMouseEnter={handleMouseEnter} // Set hover event handlers
			onMouseLeave={handleMouseLeave}
		>
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					key={current}
					src={banners[bannerIndex].url}
					alt={banners[bannerIndex].alt || `Banner ${bannerIndex + 1}`}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					className="absolute inset-0 w-full h-full object-cover"
				/>
			</AnimatePresence>

			{/* Navigation Arrows */}
			<button
				onClick={() => paginate(-1)}
				className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-opacity-70 text-white p-3 rounded-full bg-gray-800 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 sm:p-5 sm:text-3xl text-xl"
				aria-label="Previous Banner"
			>
				<IconChevronLeft />
			</button>
			<button
				onClick={() => paginate(1)}
				className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-opacity-70 text-white p-3 rounded-full bg-gray-800 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300 sm:p-5 sm:text-3xl text-xl"
				aria-label="Next Banner"
			>
				<IconChevronRight />
			</button>

			{/* Indicator Dots */}
			<div className="absolute bottom-4 w-full flex justify-center gap-3">
				{banners.map((_, index) => (
					<div
						key={index}
						onClick={() => handleIndicatorClick(index)} // Handle dot click
						className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
							index === bannerIndex ? "bg-white scale-125" : "bg-gray-400"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default BannerCarousel;
