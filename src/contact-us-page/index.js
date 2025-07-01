import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import {
	PanelBody,
	Button,
	TextControl,
	__experimentalInputControl as InputControl,
} from "@wordpress/components";
import { IconEdit, IconPencilPlus, IconTrash } from "@tabler/icons-react";

import "./style.scss";

const ImageUploader = ({
	label,
	onSelect,
	value,
	multiple = false,
	preview = true,
}) => (
	<div className="space-y-2">
		<p className="text-sm font-medium text-muted-foreground">{label}</p>
		<MediaUploadCheck>
			<MediaUpload
				onSelect={onSelect}
				allowedTypes={["image"]}
				multiple={multiple}
				gallery={multiple}
				value={multiple ? value.map((img) => img.id) : value?.id}
				render={({ open }) => (
					<Button
						onClick={open}
						className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-blue-700"
					>
						{value && value.length > 0 ? (
							<>
								Edit {label} <IconEdit size={18} />
							</>
						) : (
							<>
								Add {label} <IconPencilPlus size={18} />
							</>
						)}
					</Button>
				)}
			/>
		</MediaUploadCheck>

		{preview && !multiple && value?.url && (
			<img
				src={value.url}
				alt={value.alt || "Preview"}
				className="w-full h-auto object-cover rounded-lg border"
			/>
		)}
	</div>
);

registerBlockType(metadata.name, {
	attributes: {
		banner: { type: "object", default: null },
		recipient: { type: "string", default: "sales@kmielectricsolution.co.id" },
		email: { type: "string", default: "sales@kmielectricsolution.co.id" },
		address: {
			type: "string",
			default: "Jl. Raya Bekasi Km 23.1 – Cakung, Jakarta 13910",
		},
		website: { type: "string", default: "https://kabelretail.co.id/" },
		contactInformation: {
			type: "array",
			default: [],
		},
	},

	edit: ({ attributes, setAttributes }) => {
		const { banner, recipient, email, address, website, contactInformation } =
			attributes;

		const updateAttr = (key, value) => setAttributes({ [key]: value });

		const updateContactItem = (index, key, value) => {
			const newContacts = [...contactInformation];
			newContacts[index][key] = value;
			updateAttr("contactInformation", newContacts);
		};

		const addContactItem = () => {
			updateAttr("contactInformation", [
				...contactInformation,
				{ label: "", value: "" },
			]);
		};

		const removeContactItem = (index) => {
			const newContacts = [...contactInformation];
			newContacts.splice(index, 1);
			updateAttr("contactInformation", newContacts);
		};

		return (
			<div className="contact-form-block p-4 not-prose">
				<div className="container mx-auto p-6 bg-background rounded-2xl border shadow-sm space-y-6">
					<ImageUploader
						label="Banner Image"
						onSelect={(img) =>
							updateAttr("banner", {
								id: img.id,
								url: img.url,
								alt: img.alt,
							})
						}
						value={banner}
					/>

					<TextControl
						label="Recipient Email (used for sending form)"
						value={recipient}
						onChange={(value) => updateAttr("recipient", value)}
					/>

					<TextControl
						label="Company Email (shown to users)"
						value={email}
						onChange={(value) => updateAttr("email", value)}
					/>

					<TextControl
						label="Company Address"
						value={address}
						onChange={(value) => updateAttr("address", value)}
					/>

					<TextControl
						label="Website URL"
						value={website}
						onChange={(value) => updateAttr("website", value)}
					/>

					<div className="space-y-4">
						<p className="text-sm font-semibold">Contact Phone Numbers</p>
						{contactInformation.map((item, index) => (
							<div
								key={index}
								className="flex gap-2 items-center border p-2 rounded-lg"
							>
								<InputControl
									value={item.label}
									onChange={(val) => updateContactItem(index, "label", val)}
									placeholder="Label (e.g. Luis)"
								/>
								<InputControl
									value={item.value}
									onChange={(val) => updateContactItem(index, "value", val)}
									placeholder="Phone number"
								/>
								<Button
									variant="secondary"
									onClick={() => removeContactItem(index)}
								>
									<IconTrash size={16} />
								</Button>
							</div>
						))}
						<Button
							onClick={addContactItem}
							className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-blue-700 mt-2"
						>
							Add Contact
						</Button>
					</div>
				</div>
			</div>
		);
	},
});
