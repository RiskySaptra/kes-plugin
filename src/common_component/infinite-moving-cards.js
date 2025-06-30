import React, { useEffect, useState } from 'react';
import { IconStarFilled } from '@tabler/icons-react';
import { cn } from '../lib/utils';

export const InfiniteMovingCards = ( {
	items,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className,
} ) => {
	const containerRef = React.useRef( null );
	const scrollerRef = React.useRef( null );
	const [ start, setStart ] = useState( false );
	const [ adjustedDirection, setAdjustedDirection ] = useState( direction );

	// Update direction on resize
	useEffect( () => {
		const updateDirection = () => {
			const isMobile = window.innerWidth <= 768;
			setAdjustedDirection( isMobile ? 'left' : direction );
		};

		updateDirection(); // Set initially
		window.addEventListener( 'resize', updateDirection );
		return () => window.removeEventListener( 'resize', updateDirection );
	}, [ direction ] );

	useEffect( () => {
		addAnimation();
	}, [ adjustedDirection, speed ] );

	const addAnimation = () => {
		if ( containerRef.current && scrollerRef.current ) {
			const scrollerContent = Array.from( scrollerRef.current.children );

			// Avoid infinite duplication
			if ( scrollerContent.length === items.length ) {
				scrollerContent.forEach( ( item ) => {
					const duplicatedItem = item.cloneNode( true );
					scrollerRef.current.appendChild( duplicatedItem );
				} );
			}

			setAnimationProperties();
			setStart( true );
		}
	};

	const setAnimationProperties = () => {
		if ( containerRef.current ) {
			// Apply forced left direction on mobile
			const directionValue =
				adjustedDirection === 'left' ? 'forwards' : 'reverse';
			containerRef.current.style.setProperty(
				'--animation-direction',
				directionValue
			);

			// Apply animation speed
			const speedValue =
				{
					fast: '20s',
					normal: '40s',
					slow: '80s',
				}[ speed ] || '40s';
			containerRef.current.style.setProperty(
				'--animation-duration',
				speedValue
			);
		}
	};

	return (
		<div
			ref={ containerRef }
			className={ cn( 'relative z-20', className ) }
		>
			<ul
				ref={ scrollerRef }
				className={ cn(
					'flex min-w-full gap-4 py-4 w-max flex-nowrap transition-all duration-500',
					start && 'animate-scroll',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				) }
			>
				{ items.map( ( item, idx ) => (
					<li
						key={ item.name }
						className="min-w-[450px] flex flex-col items-center justify-center max-w-full relative rounded-2xl border px-8 py-6 w-[450px] bg-[#01009B] shadow-lg text-gray-100"
					>
						<blockquote className="w-full">
							<p className="relative z-20 text-sm leading-[1.6] font-normal text-center">
								{ `"${ item.quote }"` }
							</p>

							<div className="flex items-center justify-center mt-6">
								<div className="mr-5 bg-white p-2 rounded-full">
									{ item.icon && (
										<img
											src={ item.icon }
											alt={ item.name }
											className="w-12 h-12 object-contain"
										/>
									) }
								</div>
								<div>
									{ /* Reviewer Info */ }
									<div className="relative z-20 flex flex-col items-center">
										<span className="text-sm font-semibold text-gray-100">
											{ item.name }
										</span>
									</div>
									{ /* Star Rating */ }
									<div className="relative z-20 mt-4 flex space-x-1 justify-center">
										{ Array.from(
											Array( item.rating ).keys()
										).map( ( _, i ) => (
											<IconStarFilled
												key={ i }
												size={ 20 }
												className="text-yellow-300"
											/>
										) ) }
									</div>
								</div>
							</div>
						</blockquote>
					</li>
				) ) }
			</ul>
		</div>
	);
};
