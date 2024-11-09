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
		},
	},

	edit: (props) => {
		const {
			attributes: { text, images },
			setAttributes,
		} = props;

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
			<div>
				<div className="container p-5 mx-auto bg-gray-100 rounded-md my-[10px]">
					<p className="font-medium">Produk Kami :</p>
					<div className="flex-1">
						<RichText
							tagName="h3"
							placeholder="Enter your text here..."
							value={text || ""} // Ensure the text value is always a string
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

	save: (props) => null,
});
