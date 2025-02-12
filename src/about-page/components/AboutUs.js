import { motion } from 'framer-motion';
import StackedCard from '../../common_component/StackedCard';
import { RichText } from '@wordpress/block-editor';

import { aboutImages } from '../../common_component/logo';

const AboutSection = ( { about } ) => {
	return (
		<div className="py-10 md:py-20">
			<div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-0 md:space-x-12 px-5 md:px-0">
				{ /* Text Section */ }
				<motion.div
					className="basis-3/5 text-left"
					initial={ { opacity: 0, x: -50 } }
					animate={ { opacity: 1, x: 0 } }
					transition={ { duration: 1.2, ease: 'easeOut' } }
				>
					<h2 className="text-[36px] font-medium leading-relaxed text-gray-700 mb-6 text-justify">
						PT KMI Electric Solution
					</h2>
					<RichText.Content
						tagName="h3"
						value={ about }
						className="text-base md:text-lg font-medium leading-relaxed text-gray-700 mb-6 text-justify"
					/>
				</motion.div>

				<div className="basis-2/5">
					<StackedCard images={ aboutImages } />
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
