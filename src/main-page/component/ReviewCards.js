import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../../common_component/infinite-moving-cards";

const ReviewCards = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true, amount: 0.5, margin: "100px" }}
			className="mx-auto max-w-[1280px] overflow-hidden"
		>
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-5"
			>
				Dengarkan apa yang dikatakan pengguna kami
			</motion.h2>

			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="normal"
			/>
			<InfiniteMovingCards
				items={testimonials}
				direction="left"
				speed="normal"
			/>
		</motion.div>
	);
};
export default ReviewCards;

const testimonials = [
	{
		quote: "It was the best of times, it was the ",
		name: "Charles Dickens",
		title: "A Tale of Two Cities",
	},
	{
		quote: "It was the best of times, it was the ",
		name: "Charles Dickens",
		title: "A Tale of Two Cities",
	},
	{
		quote: "It was the best of times, it was the ",
		name: "Charles Dickens",
		title: "A Tale of Two Cities",
	},
	{
		quote: "It was the best of times, it was the ",
		name: "Charles Dickens",
		title: "A Tale of Two Cities",
	},
];
