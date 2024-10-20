import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, MediaUpload, RichText } from "@wordpress/block-editor";
import {
	IconBrandWhatsapp,
	IconDownload,
	IconEdit,
	IconPencilPlus,
	IconUpload,
} from "@tabler/icons-react";
import { TextControl } from "@wordpress/components";
import metadata from "./block.json";
import "./style.scss";

registerBlockType(metadata.name, {
	attributes: {
		image: {
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
		text: {
			type: "string",
			source: "html",
			selector: "h3",
			default: "",
		},
		phoneNumber: {
			type: "string",
			default: "",
		},
		message: {
			type: "string",
			default: "Hello, I would like to know more about your services.",
		},
	},
	edit: (props) => {
		const {
			attributes: { image, pdfFile, text, phoneNumber, message },
			setAttributes,
		} = props;
		const blockProps = useBlockProps();

		// Function to handle image selection
		const onSelectImage = (newImage) => {
			const selectedImage = {
				id: newImage.id,
				url: newImage.url,
				alt: newImage.alt,
			};
			setAttributes({ image: selectedImage });
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
				<div className="grid grid-flow-col grid-cols-2 bg-gray-100 rounded-md my-[10px] p-[10px]">
					{/* Image Section */}
					<div className="flex flex-col items-center p-5">
						<div className="not-prose">
							<p className="font-medium">Selected Image:</p>

							{image && image.url ? (
								<div key={image.id} className="relative">
									<img
										src={image.url}
										alt={image.alt}
										className="rounded-lg w-full h-auto object-cover"
									/>
								</div>
							) : (
								<div className="w-[590px] h-[337px] bg-slate-800 rounded-xl flex justify-center items-center">
									<p className="text-white">Upload an image</p>
								</div>
							)}
						</div>

						{/* Media Upload button */}
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={["image"]}
							multiple={false}
							render={({ open }) => (
								<button
									onClick={open}
									className="mt-1 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600"
								>
									{image && image.url ? (
										<div className="flex gap-1 items-center">
											Edit Image <IconEdit size={20} />
										</div>
									) : (
										<div className="flex gap-1 items-center">
											Add Image <IconPencilPlus size={20} />
										</div>
									)}
								</button>
							)}
						/>
					</div>

					{/* Text Section */}
					<div className="p-5 not-prose h-full flex flex-col">
						<p className="font-medium">About Company:</p>
						<div className="flex-1">
							<RichText
								tagName="h3"
								placeholder="Enter your text here..."
								value={text}
								onChange={(newText) => setAttributes({ text: newText })}
							/>
						</div>

						{/* buttons Section */}
						<div className="flex justify-between mt-5 w-full">
							{/* <button className="mt-1 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600">
								Unduh Company Profile
							</button> */}
							<div className="flex flex-col justify-end mb-5">
								<p>Upload a PDF File:</p>

								<MediaUpload
									onSelect={onSelectPdf}
									allowedTypes={["application/pdf"]}
									multiple={false}
									render={({ open }) => (
										<button
											onClick={open}
											className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 flex items-center gap-2"
										>
											<IconUpload size={20} />
											{pdfFile && pdfFile.id ? "Replace PDF" : "Upload PDF"}
										</button>
									)}
								/>

								{/* Show the PDF title if uploaded */}
								{pdfFile && pdfFile.id && (
									<p className="mt-3 text-[12px]">
										Uploaded File: <strong>{pdfFile.title}</strong>
									</p>
								)}
							</div>
							{/* <button className="mt-1 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600">
								Hubungi Sekarang
							</button> */}
							<div className="p-5 bg-gray-100 rounded-md">
								{/* Phone Number Input */}
								<TextControl
									label="WhatsApp Phone Number"
									help="Enter the phone number in international format without the + sign."
									value={phoneNumber}
									onChange={(newNumber) =>
										setAttributes({ phoneNumber: newNumber })
									}
									placeholder="Example: 628123456789"
								/>

								{/* Custom Message Input */}
								<TextControl
									label="Predefined Message"
									help="This message will be sent when the user clicks the button."
									value={message}
									onChange={(newMessage) =>
										setAttributes({ message: newMessage })
									}
									placeholder="Enter your message"
								/>

								{/* Preview Button */}
								{phoneNumber && (
									<div className="mt-3">
										<a
											href={whatsAppUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 flex items-center gap-2 not-prose"
										>
											Preview Contact
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},

	save: (props) => {
		const { image, pdfFile, text, phoneNumber, message } = props.attributes;
		const blockProps = useBlockProps.save();

		const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
			message,
		)}`;

		return (
			<div {...blockProps}>
				<h2 className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mt-2 md:mt-10">
					Profil Perusahaan
				</h2>
				<div className="flex rounded-md my-[10px] px-[15px]">
					{/* Image Section */}
					<div className="basis-2/5 flex justify-center items-center py-5">
						{image && image.url ? (
							<img
								src={image.url}
								alt={image.alt}
								className="rounded-lg w-full h-auto object-cover"
							/>
						) : (
							<div className="w-[590px] h-[337px] bg-slate-800 rounded-xl flex justify-center items-center">
								<p className="text-white">No Image Selected</p>
							</div>
						)}
					</div>

					{/* Text Section */}
					<div className="basis-3/5 flex justify-center items-center flex-col py-5 md:px-10 not-prose">
						<RichText.Content
							tagName="span"
							value={text}
							className="text-[12px] md:text-[18px] font-medium leading-normal"
						/>

						<div className="flex justify-between md:flex-row flex-col mt-[25px] w-full gap-2 md:gap-0">
							{pdfFile && pdfFile.url ? (
								<div className="flex justify-center">
									<a
										href={pdfFile.url}
										className="bg-[#0100B1] text-white md:py-3 py-2 px-4 justify-center rounded-lg hover:bg-[#01009B] font-medium flex items-center gap-2 md:w-[250px] w-full md:text-[18px] text-[12px]"
										download
									>
										<IconDownload size={20} />
										Unduh Company Profile
									</a>
								</div>
							) : (
								<p>No PDF uploaded.</p>
							)}

							<div className="flex justify-center">
								<a
									href={whatsAppUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-green-500 text-white md:py-3 py-2 px-3 justify-center rounded-lg hover:bg-green-600 font-medium flex items-center gap-2 md:w-[250px] w-full md:text-[18px] text-[12px]"
								>
									<IconBrandWhatsapp size={20} /> Hubungi kita Sekarang
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
});
