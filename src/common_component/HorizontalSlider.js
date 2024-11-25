import { useRef, useEffect, useState } from "@wordpress/element";
import { cn } from "../lib/utils";

const HorizontalSlider = ({
	items,
	speed = "normal",
	direction = "left",
	pauseOnHover = true,
	loop = false,
	itemSize = "max-w-[300px]",
	maxHeight = "",
}) => {
	const containerRef = useRef(null);
	const scrollerRef = useRef(null);

	const [start, setStart] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	useEffect(() => {
		if (loop) {
			setupAnimation();
		}

		const container = containerRef.current;
		if (container) {
			container.addEventListener("scroll", handleScrollEnd);
		}

		return () => {
			if (container) {
				container.removeEventListener("scroll", handleScrollEnd);
			}
		};
	}, [loop]);

	const setupAnimation = () => {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			// Clone items for seamless infinite scrolling
			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				scrollerRef.current.appendChild(duplicatedItem);
			});

			setAnimationDirection();
			setAnimationSpeed();
			setStart(true); // Start animation
		}
	};

	const setAnimationDirection = () => {
		if (containerRef.current) {
			const directionValue = direction === "left" ? "forwards" : "reverse";
			containerRef.current.style.setProperty(
				"--animation-direction",
				directionValue,
			);
		}
	};

	const setAnimationSpeed = () => {
		if (containerRef.current) {
			const speedValue =
				{
					fast: "20s",
					normal: "40s",
					slow: "80s",
				}[speed] || "40s";
			containerRef.current.style.setProperty(
				"--animation-duration",
				speedValue,
			);
		}
	};

	const handleMouseDown = (e) => {
		setIsDragging(true);
		setStartX(e.clientX);
		setScrollLeft(containerRef.current.scrollLeft);
	};

	const handleMouseMove = (e) => {
		if (!isDragging) return;
		const moveX = e.clientX - startX;
		containerRef.current.scrollLeft = scrollLeft - moveX;
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleTouchStart = (e) => {
		setIsDragging(true);
		setStartX(e.touches[0].clientX);
		setScrollLeft(containerRef.current.scrollLeft);
	};

	const handleTouchMove = (e) => {
		if (!isDragging) return;
		const moveX = e.touches[0].clientX - startX;
		containerRef.current.scrollLeft = scrollLeft - moveX;
	};

	const handleTouchEnd = () => {
		setIsDragging(false);
	};

	const handleScrollEnd = () => {
		if (isDragging) return;

		const container = containerRef.current;
		const scrollerItems = scrollerRef.current.children;
		const containerWidth = container.offsetWidth;

		// Find the closest child to the center
		let closestItem = null;
		let closestOffset = Infinity;

		Array.from(scrollerItems).forEach((item) => {
			const itemCenter =
				item.offsetLeft + item.offsetWidth / 2 - container.scrollLeft;
			const offsetFromCenter = Math.abs(containerWidth / 2 - itemCenter);

			if (offsetFromCenter < closestOffset) {
				closestOffset = offsetFromCenter;
				closestItem = item;
			}
		});

		if (closestItem) {
			container.scrollTo({
				left:
					closestItem.offsetLeft -
					containerWidth / 2 +
					closestItem.offsetWidth / 2,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="relative">
			<div
				ref={containerRef}
				className="overflow-hidden relative"
				style={{
					"--animation-duration": "40s",
					"--animation-direction": "forwards",
				}}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				<div
					ref={scrollerRef}
					className={cn(
						"flex min-w-full gap-12 py-4 w-max flex-nowrap transition-all duration-500 md:justify-between px-10",
						start && "animate-scroll",
						pauseOnHover && "hover:[animation-play-state:paused]",
					)}
				>
					{items.map((item, index) => (
						<div
							key={index}
							className={`flex-shrink-0 flex justify-center items-center ${itemSize}`}
						>
							<img
								src={item.logo}
								alt={item.name}
								className={`object-contain transition-transform duration-300 hover:scale-105 hover:opacity-90 select-none ${maxHeight}`}
								draggable={false}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HorizontalSlider;
