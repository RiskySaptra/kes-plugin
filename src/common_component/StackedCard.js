import React from 'react';
import { motion } from 'framer-motion';
import move from 'lodash-move';

const CARD_OFFSET = 120; // Adjusted for responsiveness
const CARD_HORIZONTAL_OFFSET = 100; // Adjusted for responsiveness
const SCALE_FACTOR = 0.06;

const StackedCard = ( { images } ) => {
	const [ cards, setCards ] = React.useState( images );

	React.useEffect( () => {
		const interval = setInterval( () => {
			setCards( ( prevCards ) =>
				move( prevCards, 0, prevCards.length - 1 )
			);
		}, 3000 ); // Adjust the interval time as needed

		return () => clearInterval( interval ); // Clean up the interval
	}, [] );

	const moveToEnd = ( from ) => {
		setCards( move( cards, from, 0 ) );
	};

	return (
		<div className="flex items-center justify-start h-[600px] w-full pt-20">
			<ul className="relative w-full max-w-[400px] h-[300px] sm:w-[70%] cursor-pointer">
				{ cards.map( ( card, index ) => {
					const canDrag = index === 0;

					return (
						<motion.li
							key={ card.name }
							className="absolute w-full h-full max-w-[400px] max-h-[300px] rounded-lg list-none"
							style={ {
								cursor: canDrag ? 'grab' : 'auto',
							} }
							animate={ {
								top: index * -CARD_OFFSET,
								left: index * CARD_HORIZONTAL_OFFSET,
								scale: 1 - index * SCALE_FACTOR,
								zIndex: images.length - index,
							} }
							whileHover={ index === 0 ? { scale: 1.2 } : {} }
							drag={ canDrag ? 'y' : false }
							dragConstraints={ {
								top: 0,
								bottom: 0,
							} }
							onClick={ () => moveToEnd( index ) }
						>
							<img
								src={ card.logo }
								alt={ card.name }
								className="w-full h-full object-fill rounded-lg shadow-2xl"
							/>
						</motion.li>
					);
				} ) }
			</ul>
		</div>
	);
};

export default StackedCard;
