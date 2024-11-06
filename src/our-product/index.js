import { registerBlockType } from "@wordpress/blocks";
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	RichText,
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
		text: {
			type: "string",
			source: "html",
			selector: "h3",
			default: "",
		},
	},

	edit: (props) => {
		const {
			attributes: { text, images },
			setAttributes,
		} = props;
		const blockProps = useBlockProps({ className: "" });

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
					<p className="font-medium">Produk Kami :</p>
					<div className="flex-1">
						<RichText
							tagName="h3"
							placeholder="Enter your text here..."
							value={text}
							onChange={(newText) => setAttributes({ text: newText })}
						/>
					</div>
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
			className:
				"not-prose !max-w-none bg-[#F8F8F9] shadow-[inset_0_4px_4px_rgba(0,0,0,0.04),_inset_0_-4px_4px_rgba(0,0,0,0.04)]",
		});

		console.log(props);

		return (
			<div {...blockProps}>
				<div className="container mx-auto max-w-[1280px] pt-10 pb-14 px-5">
					<h2 className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-5">
						Produk Kami
					</h2>
					<RichText.Content
						tagName="h3"
						value={props.attributes.text}
						className="text-[12px] md:text-[18px] font-medium leading-normal not-prose mb-10 text-center"
					/>
					<div className="md:px-[10%]">
						<div className="grid grid-cols-4 gap-4">
							{props.attributes.images.map((image, index) => {
								if (index === 0) {
									return (
										<div key={index} className="col-span-4" data-carousel-item>
											<img
												src={image.url}
												className="w-full max-h-[620px] rounded-lg not-prose object-fill"
												alt={image.alt || "Image placeholder"}
											/>
										</div>
									);
								}

								return (
									<div key={index} className="col-span-1" data-carousel-item>
										<img
											src={image.url}
											className="w-full h-auto rounded-lg not-prose object-center object-scale-down"
											alt={image.alt || "Image placeholder"}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	},
});
