import { registerBlockType } from "@wordpress/blocks";
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";
import { IconEdit, IconPencilPlus, IconUpload } from "@tabler/icons-react";

import metadata from "./block.json";
import "./style.scss";

registerBlockType(metadata.name, {
	attributes: {
		images: {
			type: "array",
			default: [],
		},
		companyProfileImage: {
			type: "object",
			default: {
				id: null,
				url: "",
				alt: "",
			},
		},
		pdfFile: {
			type: "object",
			default: {
				id: null,
				url: "",
				title: "",
			},
		},
		companyProfileDesc: {
			type: "string",
		},
		phoneNumber: {
			type: "string",
			default: "",
		},
		message: {
			type: "string",
			default: "",
		},
		ourProductsImages: {
			type: "array",
			default: [],
		},
		ourProductsDesc: {
			type: "string",
		},
	},
	edit: (props) => {
		const {
			attributes: {
				images,
				companyProfileImage,
				pdfFile,
				companyProfileDesc,
				phoneNumber,
				message,
				ourProductsDesc,
				ourProductsImages,
			},
			setAttributes,
		} = props;
		const blockProps = useBlockProps();

		// Function to handle image selection
		const onSelectOurProductsImages = (newImages) => {
			const selectedImages = newImages.map((image) => ({
				id: image.id,
				url: image.url,
				alt: image.alt,
			}));
			setAttributes({ ourProductsImages: selectedImages });
		};

		// Function to handle image selection
		const onSelectImages = (newImages) => {
			const selectedImages = newImages.map((image) => ({
				id: image.id,
				url: image.url,
				alt: image.alt,
			}));
			setAttributes({ images: selectedImages });
		};

		// Function to handle company profile image selection
		const onSelectImage = (newImage) => {
			const selectedImage = {
				id: newImage.id,
				url: newImage.url,
				alt: newImage.alt,
			};
			setAttributes({ companyProfileImage: selectedImage });
		};

		const onSelectPdf = (file) => {
			const selectedFile = {
				id: file.id,
				url: file.url,
				title: file.title,
			};
			setAttributes({ pdfFile: selectedFile });
		};

		const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
			message,
		)}`;

		return (
			<div {...blockProps}>
				<div className="container p-8 mx-auto bg-gray-50 rounded-lg shadow-lg my-6 not-prose ">
					{/* Banner Images Section */}
					<p className="text-2xl font-semibold text-gray-800 dark:text-white my-5">
						Select Banner Images:
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
									className="mt-3 mb-5 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 flex items-center gap-2"
								>
									{images.length > 0 ? (
										<div className="flex gap-2 items-center">
											Edit Banners <IconEdit size={20} />
										</div>
									) : (
										<div className="flex gap-2 items-center">
											Add Banners <IconPencilPlus size={20} />
										</div>
									)}
								</button>
							)}
						/>
					</MediaUploadCheck>

					{/* Image Gallery Section */}
					<div className="overflow-x-auto scrollbar-hide px-2">
						<div className="flex gap-6 w-max p-5">
							{images.map((image) => (
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

					{/* Company Profile Image Section */}
					<p className="text-2xl font-semibold text-gray-800 dark:text-white my-5">
						Company Profile:
					</p>
					<div className="flex flex-col items-center p-6">
						<div className="not-prose">
							<p className="font-medium">Selected Image:</p>

							{/* Display the selected company profile image */}
							{companyProfileImage && companyProfileImage.url ? (
								<div key={companyProfileImage.id} className="relative">
									<img
										src={companyProfileImage.url}
										alt={companyProfileImage.alt}
										className="rounded-lg w-[590px] h-[337px] object-cover"
									/>
								</div>
							) : (
								<div className="w-[590px] h-[337px] bg-slate-800 rounded-xl flex justify-center items-center">
									<p className="text-white">Upload an image</p>
								</div>
							)}
						</div>

						{/* Media Upload button for company profile image */}
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={["image"]}
							multiple={false}
							render={({ open }) => (
								<button
									onClick={open}
									className="mt-4 bg-blue-500 text-white py-2 px-5 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
								>
									{companyProfileImage && companyProfileImage.url ? (
										<div className="flex gap-2 items-center">
											Edit Image <IconEdit size={20} />
										</div>
									) : (
										<div className="flex gap-2 items-center">
											Add Image <IconPencilPlus size={20} />
										</div>
									)}
								</button>
							)}
						/>
					</div>

					{/* Text Section for Company Description */}
					<div className="h-full flex flex-col gap-6">
						<div>
							<p className="font-medium text-lg">About Company:</p>
							<div className="flex-1 bg-white rounded-lg px-5">
								<RichText
									tagName="h3"
									placeholder="Enter your text here..."
									value={companyProfileDesc}
									onChange={(newText) =>
										setAttributes({ companyProfileDesc: newText })
									}
								/>
							</div>
						</div>

						{/* PDF Upload Section */}
						<div className="flex flex-col justify-end mb-6">
							<p className="font-medium">Upload a PDF File:</p>

							<MediaUpload
								onSelect={onSelectPdf}
								allowedTypes={["application/pdf"]}
								multiple={false}
								render={({ open }) => (
									<button
										onClick={open}
										className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 flex items-center gap-2"
									>
										<IconUpload size={20} />
										{pdfFile && pdfFile.id ? "Replace PDF" : "Upload PDF"}
									</button>
								)}
							/>

							{/* Show the PDF title if uploaded */}
							{pdfFile && pdfFile.id && (
								<p className="mt-3 text-sm text-gray-600">
									Uploaded File: <strong>{pdfFile.title}</strong>
								</p>
							)}
						</div>

						{/* WhatsApp Section */}
						<div className="p-5 bg-gray-100 rounded-md">
							<TextControl
								label="WhatsApp Phone Number"
								help="Enter the phone number in international format without the + sign."
								value={phoneNumber}
								onChange={(newNumber) =>
									setAttributes({ phoneNumber: newNumber })
								}
								placeholder="Example: 628123456789"
								className="w-full"
							/>

							<TextControl
								label="Predefined Message"
								help="This message will be sent when the user clicks the button."
								value={message}
								onChange={(newMessage) =>
									setAttributes({ message: newMessage })
								}
								placeholder="Enter your message"
								className="w-full mt-4"
							/>

							{/* Preview Button */}
							{phoneNumber && (
								<div className="mt-4">
									<a
										href={whatsAppUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="mt-3 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 flex items-center gap-2"
									>
										Preview Contact <IconUpload size={20} />
									</a>
								</div>
							)}
						</div>
					</div>
					<div>
						<p className="text-2xl font-semibold text-gray-800 dark:text-white my-5">
							Our Product:
						</p>
						<p className="font-medium text-lg">Our Product Description:</p>
						<div className="flex-1 bg-white rounded-lg px-5">
							<RichText
								tagName="h3"
								placeholder="Enter your text here..."
								value={ourProductsDesc}
								onChange={(newText) =>
									setAttributes({ ourProductsDesc: newText })
								}
							/>
						</div>
						<p className="text-lg font-medium text-gray-900 dark:text-white mt-5">
							Select Banner Images
						</p>

						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectOurProductsImages}
								multiple
								gallery
								allowedTypes={["image"]}
								value={ourProductsImages.map((image) => image.id)}
								render={({ open }) => (
									<button
										onClick={open}
										className="mt-1 mb-1 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 inline"
									>
										{ourProductsImages.length > 0 ? (
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

						<div className="overflow-x-auto whitespace-nowrap scrollbar-hide mt-5 py-8 px-1">
							<div className="flex gap-5 w-max">
								{ourProductsImages.map((image, index) => (
									<div key={image.id} className="inline-block relative">
										<img
											src={image.url}
											alt={image.alt}
											className="rounded-lg w-[280px] h-[180px] object-center"
										/>
										{/* Description Input for each image */}
										<div className="mt-2">
											<input
												type="text"
												placeholder="Enter image description"
												value={image.description || ""}
												onChange={(e) => {
													const updatedImages = [...ourProductsImages];
													updatedImages[index].description = e.target.value;
													setAttributes({ ourProductsImages: updatedImages });
												}}
												className="w-full mt-1 px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
});
