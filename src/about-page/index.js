import { registerBlockType } from "@wordpress/blocks";
import {
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { IconEdit, IconPencilPlus, IconTrash } from "@tabler/icons-react";
import metadata from "./block.json";

// --- Reusable Field Components ---
const RichTextField = ({ label, value, onChange }) => (
	<div className="space-y-2">
		<label className="text-sm font-medium text-muted-foreground">{label}</label>
		<div className="bg-white border rounded-xl p-4 shadow-sm">
			<RichText
				tagName="div"
				placeholder={`Enter ${label.toLowerCase()}...`}
				value={value}
				onChange={onChange}
			/>
		</div>
	</div>
);

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

const RepeaterList = ({ label, items, onAdd, onRemove, onChange }) => (
	<div className="space-y-2">
		<p className="text-sm font-medium text-muted-foreground">{label}</p>
		{items.map((item, i) => (
			<div key={i} className="flex gap-2 items-start">
				<div className="flex-1 bg-white border rounded-xl p-3 shadow-sm">
					<RichText
						tagName="div"
						placeholder={`Item ${i + 1}`}
						value={item}
						onChange={(val) => onChange(i, val)}
					/>
				</div>
				<Button
					onClick={() => onRemove(i)}
					variant="secondary"
					aria-label="Remove item"
					className="text-red-500 hover:text-red-700"
				>
					<IconTrash size={18} />
				</Button>
			</div>
		))}
		<Button
			onClick={onAdd}
			className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
		>
			Add Item
		</Button>
	</div>
);

// --- Block Definition ---
registerBlockType(metadata.name, {
	attributes: {
		about: { type: "string" },
		visi: { type: "string" },
		misiList: { type: "array", default: [] },
		galleries: { type: "array", default: [] },
		banner: { type: "object", default: null },
		retailData: { type: "string" },
		aboutImages: { type: "array", default: [] },
		subDescription: { type: "string" },
		ourValues: { type: "array", default: [] },
	},

	edit: ({ attributes, setAttributes }) => {
		const {
			about,
			visi,
			misiList,
			galleries,
			banner,
			aboutImages,
			subDescription,
			ourValues,
		} = attributes;

		const updateAttr = (key, value) => setAttributes({ [key]: value });

		// Misi Handlers
		const handleMisiChange = (index, value) => {
			const updated = [...misiList];
			updated[index] = value;
			updateAttr("misiList", updated);
		};

		const handleMisiAdd = () => updateAttr("misiList", [...misiList, ""]);
		const handleMisiRemove = (index) => {
			const updated = [...misiList];
			updated.splice(index, 1);
			updateAttr("misiList", updated);
		};

		// Our Values Handlers
		const handleValueChange = (index, value) => {
			const updated = [...ourValues];
			updated[index] = value;
			updateAttr("ourValues", updated);
		};

		const handleValueAdd = () => updateAttr("ourValues", [...ourValues, ""]);
		const handleValueRemove = (index) => {
			const updated = [...ourValues];
			updated.splice(index, 1);
			updateAttr("ourValues", updated);
		};

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

					<RichTextField
						label="About Company"
						value={about}
						onChange={(val) => updateAttr("about", val)}
					/>

					<ImageUploader
						label="About Images"
						multiple
						value={aboutImages}
						onSelect={(images) =>
							updateAttr(
								"aboutImages",
								images.map((img) => ({
									id: img.id,
									url: img.url,
									alt: img.alt,
								})),
							)
						}
					/>

					<RichTextField
						label="Visi"
						value={visi}
						onChange={(val) => updateAttr("visi", val)}
					/>

					<RepeaterList
						label="Misi (List)"
						items={misiList}
						onAdd={handleMisiAdd}
						onRemove={handleMisiRemove}
						onChange={handleMisiChange}
					/>

					<RichTextField
						label="Sub Description"
						value={subDescription}
						onChange={(val) => updateAttr("subDescription", val)}
					/>

					<RepeaterList
						label="Nilai Perusahaan Kami (List)"
						items={ourValues}
						onAdd={handleValueAdd}
						onRemove={handleValueRemove}
						onChange={handleValueChange}
					/>

					<ImageUploader
						label="Gallery"
						multiple
						value={galleries}
						onSelect={(images) =>
							updateAttr(
								"galleries",
								images.map((img) => ({
									id: img.id,
									url: img.url,
									alt: img.alt,
								})),
							)
						}
					/>
				</div>
			</div>
		);
	},
});
