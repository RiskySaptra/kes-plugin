import { registerBlockType } from "@wordpress/blocks";
import {
	MediaUploadCheck,
	RichText,
	MediaUpload,
	useBlockProps,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import metadata from "./block.json";
import "./style.scss";
import { IconEdit, IconPencilPlus } from "@tabler/icons-react";

registerBlockType(metadata.name, {
	attributes: {
		about: { type: "string" },
		visi: { type: "string" },
		misi: { type: "string" },
		description: { type: "string" },
		companyValues: { type: "array", default: [] },
		galleries: { type: "array", default: [] },
	},

	edit: ({ attributes, setAttributes }) => {
		const { about, visi, misi, galleries } = attributes;

		const blockProps = useBlockProps();

		const onSelectImages = (newImages) => {
			const selectedImages = newImages.map((image) => ({
				id: image.id,
				url: image.url,
				alt: image.alt,
			}));
			setAttributes({ galleries: selectedImages });
		};

		return (
			<div {...blockProps}>
				<div className="container p-8 mx-auto bg-gray-50 rounded-lg shadow-lg my-6 not-prose">
					<p className="font-medium text-lg">About Company:</p>
					<div className="flex-1 bg-white rounded-lg px-5">
						<RichText
							tagName="h3"
							placeholder="Enter your text here..."
							value={about}
							onChange={(newText) =>
								setAttributes({
									about: newText,
								})
							}
						/>
					</div>

					<p className="font-medium text-lg">Visi:</p>
					<div className="flex-1 bg-white rounded-lg px-5">
						<RichText
							tagName="h3"
							placeholder="Enter your text here..."
							value={visi}
							onChange={(newText) =>
								setAttributes({
									visi: newText,
								})
							}
						/>
					</div>

					<p className="font-medium text-lg">Misi:</p>
					<div className="flex-1 bg-white rounded-lg px-5">
						<RichText
							tagName="h3"
							placeholder="Enter your text here..."
							value={misi}
							onChange={(newText) =>
								setAttributes({
									misi: newText,
								})
							}
						/>
					</div>

					<h2>Galleries</h2>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectImages}
							multiple
							gallery
							allowedTypes={["image"]}
							value={galleries.map((image) => image.id)}
							render={({ open }) => (
								<Button
									onClick={open}
									className="mt-3 mb-5 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 flex items-center gap-2"
								>
									{galleries.length > 0 ? (
										<div className="flex gap-2 items-center">
											Edit Banners <IconEdit size={20} />
										</div>
									) : (
										<div className="flex gap-2 items-center">
											Add Banners <IconPencilPlus size={20} />
										</div>
									)}
								</Button>
							)}
						/>
					</MediaUploadCheck>

					{/* Image Gallery Section */}
					<div className="overflow-x-auto scrollbar-hide px-2">
						<div className="flex gap-6 w-max p-5">
							{galleries.map((image) => (
								<div key={image.id} className="inline-block relative group">
									<img
										src={image.url}
										alt={image.alt}
										className="rounded-lg w-[280px] h-[180px] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	},
});
