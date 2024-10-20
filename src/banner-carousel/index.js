import { registerBlockType } from "@wordpress/blocks";
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";

import metadata from "./block.json";

import "./style.scss";
import { IconEdit, IconPencilPlus } from "@tabler/icons-react";

registerBlockType(metadata.name, {
	attributes: {
		images: {
			type: "array",
			default: [],
		},
	},

	edit: (props) => {
		const {
			attributes: { images },
			setAttributes,
		} = props;
		const blockProps = useBlockProps();

		// Function to handle image selection
		const onSelectImages = (newImages) => {
			const selectedImages = newImages.map((image) => ({
				id: image.id,
				url: image.url,
				alt: image.alt,
			}));
			setAttributes({ images: selectedImages });
		};

		return (
			<div {...blockProps}>
				<div className="container p-5 mx-auto bg-gray-100 rounded-md my-[10px]">
					<p className="text-lg font-medium text-gray-900 dark:text-white">
						Select Banner Images
					</p>

					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectImages}
							multiple
							gallery
							allowedTypes={["image"]}
							value={images.map((image) => image.id)}
							render={({ open }) => (
								<button
									onClick={open}
									className="mt-1 mb-1 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 inline"
								>
									{images.length > 0 ? (
										<div className="flex gap-1 items-center">
											Edit Banners <IconEdit size={20} />
										</div>
									) : (
										<div className="flex gap-1 items-center">
											Add Banners <IconPencilPlus size={20} />
										</div>
									)}
								</button>
							)}
						/>
					</MediaUploadCheck>

					<div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
						<div className="flex gap-5 w-max">
							{images.map((image) => (
								<div key={image.id} className="inline-block">
									<img
										src={image.url}
										alt={image.alt}
										className="rounded-lg w-[280px] h-[180px] object-center"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	},

	save: (props) => {
		const blockProps = useBlockProps.save({
			className: "not-prose !max-w-none",
		});
		return (
			<div {...blockProps}>
				<div
					id="animation-carousel"
					className="relative w-full"
					data-carousel="slide"
				>
					<div className="relative h-[240px] md:h-screen overflow-hidden">
						{props.attributes.images.length > 0 && (
							<>
								{props.attributes.images.map((image, index) => {
									return (
										<div
											key={index}
											className="hidden duration-200 ease-linear"
											data-carousel-item
										>
											<img
												src={image.url}
												className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
												alt={image.alt || "Image placeholder"}
											/>
										</div>
									);
								})}
							</>
						)}
					</div>

					<div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
						{props.attributes.images.length > 0 && (
							<>
								{props.attributes.images.map((image, index) => {
									return (
										<button
											type="button"
											className="w-3 h-3 rounded-full"
											aria-current="true"
											aria-label={image.alt || "Image placeholder"}
											data-carousel-slide-to={index}
										></button>
									);
								})}
							</>
						)}
					</div>
					<button
						type="button"
						className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
						data-carousel-prev
					>
						<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
							<svg
								className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 6 10"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 1 1 5l4 4"
								/>
							</svg>
							<span className="sr-only">Previous</span>
						</span>
					</button>
					<button
						type="button"
						className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
						data-carousel-next
					>
						<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
							<svg
								className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 6 10"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 9 4-4-4-4"
								/>
							</svg>
							<span className="sr-only">Next</span>
						</span>
					</button>
				</div>
			</div>
		);
	},
});
