import React, { useEffect, useState } from "react";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { cn } from "../lib/utils";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}) => {
	const containerRef = React.useRef(null);
	const scrollerRef = React.useRef(null);

	useEffect(() => {
		addAnimation();
	}, []);

	const [start, setStart] = useState(false);

	const addAnimation = () => {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				scrollerRef.current.appendChild(duplicatedItem);
			});

			setAnimationDirection();
			setAnimationSpeed();
			setStart(true);
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

	return (
		<div ref={containerRef} className={cn("relative z-20", className)}>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex min-w-full gap-4 py-4 w-max flex-nowrap transition-all duration-500",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]",
				)}
			>
				{items.map((item, idx) => (
					<li
						key={item.name}
						className="min-w-[450px] flex flex-col items-center justify-center max-w-full relative rounded-2xl border px-8 py-6 md:w-[450px] bg-[#01009B] shadow-lg text-gray-100"
					>
						<blockquote className="w-full">
							<div
								aria-hidden="true"
								className="absolute inset-[-1px] h-full w-full border border-transparent -z-1 pointer-events-none"
							></div>

							{/* Quote Text */}
							<p className="relative z-20 text-sm leading-[1.6] font-normal text-center">
								{`"${item.quote}"`}
							</p>

							{/* Reviewer Info */}
							<div className="relative z-20 mt-6 flex flex-col items-center">
								<span className="text-sm font-semibold text-gray-100">
									{item.name}
								</span>
							</div>

							{/* Star Rating */}
							<div className="relative z-20 mt-4 flex space-x-1 justify-center">
								{Array.from(Array(item.rating).keys()).map((_, i) => (
									<IconStarFilled
										key={i}
										size={20} // Adjust size as needed
										className="text-yellow-300"
									/>
								))}
							</div>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};
