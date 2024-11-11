import { useState } from "react";
import { motion } from "framer-motion";

const FAQAccordion = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const faqs = [
		{
			question: "What is your return policy?",
			answer:
				"We offer a 30-day return policy on all items. Products must be in original condition to be eligible for a return.",
		},
		{
			question: "How long does shipping take?",
			answer:
				"Shipping typically takes 3-5 business days, depending on your location and shipping method.",
		},
		{
			question: "Do you offer international shipping?",
			answer:
				"Yes, we offer international shipping to select countries. Shipping rates will be calculated at checkout.",
		},
		{
			question: "Can I change or cancel my order?",
			answer:
				"Orders can be changed or canceled within 24 hours of purchase. After that, they are processed and cannot be modified.",
		},
	];

	return (
		<div className="max-w-7xl mx-auto grid-cols-2 grid py-10">
			<div className="flex">
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-left text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-5"
				>
					Pertanyaan Umum
				</motion.h2>
			</div>
			<div className="space-y-4 ">
				{faqs.map((faq, index) => (
					<motion.div
						key={index}
						className="border-b border-gray-200"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							onClick={() =>
								setActiveIndex(activeIndex === index ? null : index)
							}
							className="cursor-pointer py-4 px-4 bg-gray-100 rounded-md"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.2 }}
						>
							<h3 className="text-xl font-medium">{faq.question}</h3>
						</motion.div>
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{
								height: activeIndex === index ? "auto" : 0,
								opacity: activeIndex === index ? 1 : 0,
							}}
							transition={{ duration: 0.3 }}
							className="overflow-hidden px-4 py-2 bg-gray-50 rounded-md"
						>
							<p>{faq.answer}</p>
						</motion.div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default FAQAccordion;
