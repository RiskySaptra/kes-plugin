import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { IconEdit, IconPencilPlus } from "@tabler/icons-react";
import { Button } from "@wordpress/components";
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

		{preview && multiple && value?.length > 0 && (
			<div className="overflow-x-auto mt-4">
				<div className="flex gap-4 w-max">
					{value.map((img) => (
						<img
							key={img.id}
							src={img.url}
							alt={img.alt || ""}
							className="w-72 h-44 object-cover rounded-lg shadow-sm"
						/>
					))}
				</div>
			</div>
		)}

		{preview && !multiple && value?.url && (
			<img
				src={value.url}
				alt={value.alt || "Banner Preview"}
				className="w-full h-auto object-cover rounded-lg border"
			/>
		)}
	</div>
);

registerBlockType(metadata.name, {
	attributes: {
		banner: { type: "object", default: null },
	},
	edit: ({ attributes, setAttributes }) => {
		const { banner } = attributes;
		const updateAttr = (key, value) => setAttributes({ [key]: value });
		return (
			<div className="product-catalog-block p-4 not-prose">
				<div className="container mx-auto p-6 bg-background rounded-2xl border shadow-sm space-y-6">
					<ImageUploader
						label="Banner"
						onSelect={(img) =>
							updateAttr("banner", {
								id: img.id,
								url: img.url,
								alt: img.alt,
							})
						}
						value={banner}
					/>
				</div>
			</div>
		);
	},
});
