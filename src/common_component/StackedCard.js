import React from "react";
import { motion } from "framer-motion";
import move from "lodash-move";

const CARD_OFFSET = 60;
const CARD_HORIZONTAL_OFFSET = 40;
const SCALE_FACTOR = 0.06;

const StackedCard = ({ images = [] }) => {
	const [cards, setCards] = React.useState(images);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setCards((prev) => move(prev, 0, prev.length - 1));
		}, 6000);
		return () => clearInterval(interval);
	}, []);

	const handleCardClick = (index) => {
		if (index !== 0) return;
		setCards((prev) => move(prev, 0, prev.length - 1));
	};

	return (
		<div className="flex items-center justify-center h-[300px] md:!h-[500px] w-full md:!pt-20 overflow-hidden relative pl-5">
			<ul
				className="relative w-full max-w-sm h-[200px] md:!h-[300px] cursor-pointer"
				role="list"
			>
				{cards.map((card, index) => {
					const isTop = index === 0;

					return (
						<motion.li
							key={card.id}
							className="absolute w-[80%] md:!w-full h-full rounded-xl overflow-hidden bg-white shadow-2xl"
							style={{ cursor: isTop ? "grab" : "default" }}
							animate={{
								top: index * -CARD_OFFSET,
								left: index * CARD_HORIZONTAL_OFFSET,
								scale: 1 - index * SCALE_FACTOR,
								zIndex: cards.length - index,
							}}
							transition={{ type: "spring", stiffness: 100, damping: 20 }}
							drag={isTop ? "y" : false}
							dragConstraints={{ top: 0, bottom: 0 }}
							onClick={() => handleCardClick(index)}
						>
							<img
								src={card.url}
								alt={card.alt || `Image ${card.id}`}
								className="w-full h-full object-cover"
							/>
							{card.title && (
								<div className="absolute bottom-0 w-full bg-black/60 text-white text-sm sm:text-base md:text-lg font-semibold p-2 text-center">
									{card.title}
								</div>
							)}
						</motion.li>
					);
				})}
			</ul>
		</div>
	);
};

export default StackedCard;
