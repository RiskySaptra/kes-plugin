import React, { useEffect, useState } from "react";
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
						className="min-w-[450px] flex items-center justify-center max-w-full relative rounded-2xl border border-slate-700 px-8 py-6 md:w-[450px] bg-gradient-to-b from-slate-800 to-slate-900"
					>
						<blockquote>
							<div
								aria-hidden="true"
								className="absolute inset-[-1px] h-full w-full border border-transparent -z-1 pointer-events-none"
							></div>
							<span className="relative z-20 text-sm text-gray-100 leading-[1.6] font-normal">
								{`"${item.quote}"`}
							</span>
							<div className="relative z-20 mt-6 flex items-center space-x-2">
								<span className="text-sm text-gray-400 font-normal">
									{item.name}
								</span>
								<span className="text-sm text-gray-400 font-normal">
									{item.title}
								</span>
							</div>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};
