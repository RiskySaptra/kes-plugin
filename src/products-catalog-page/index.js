import { registerBlockType } from "@wordpress/blocks";
import {
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	Button,
	TextControl,
	TextareaControl,
	Modal,
	SelectControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import metadata from "./block.json";
import "./style.scss";
import { sampleProducts } from "./constanta";
import { IconPencilPlus } from "@tabler/icons-react";

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
		productList: {
			type: "array",
			default: sampleProducts.map((product) => ({
				...product,
				pdfFile: { id: null, url: "", title: "" },
			})),
		},
		searchQuery: { type: "string", default: "" },
		currentPage: { type: "number", default: 1 },
		itemsPerPage: { type: "number", default: 5 },
		banner: { type: "object", default: null },
	},

	edit: ({ attributes, setAttributes }) => {
		const { productList, searchQuery, currentPage, itemsPerPage, banner } =
			attributes;
		const [isModalOpen, setIsModalOpen] = useState(false);
		const [isUpdating, setIsUpdating] = useState(false);
		const [currentProductIndex, setCurrentProductIndex] = useState(null);
		const [newProduct, setNewProduct] = useState({
			id: Date.now(),
			imageUrl: "",
			title: "",
			description: "",
			spec: "",
			specDesc: "",
			category: "",
			linkTokopedia: "",
			linkShopee: "",
			catalogLink: "",
			pdfFile: { id: null, url: "", title: "" },
		});

		const handleInputChange = (field, value) => {
			setNewProduct({ ...newProduct, [field]: value });
		};

		const onSelectPdf = (file) => {
			setNewProduct({
				...newProduct,
				pdfFile: { id: file.id, url: file.url, title: file.title },
			});
		};

		const updateAttr = (key, value) => setAttributes({ [key]: value });

		const handleModalOpen = (product = null, index = null) => {
			if (product) {
				setIsUpdating(true);
				setNewProduct(product);
				setCurrentProductIndex(index);
			} else {
				setIsUpdating(false);
				setNewProduct({
					id: Date.now(),
					imageUrl: "",
					title: "",
					description: "",
					spec: "",
					specDesc: "",
					category: "",
					linkTokopedia: "",
					linkShopee: "",
					catalogLink: "",
					pdfFile: { id: null, url: "", title: "" },
				});
			}
			setIsModalOpen(true);
		};

		const handleProductSave = () => {
			const updatedProducts = [...productList];
			if (isUpdating) {
				updatedProducts[currentProductIndex] = newProduct;
			} else {
				updatedProducts.push(newProduct);
			}
			setAttributes({ productList: updatedProducts });
			setIsModalOpen(false);
		};

		const removeProduct = (index) => {
			setAttributes({ productList: productList.filter((_, i) => i !== index) });
		};

		const handleSearchChange = (value) => setAttributes({ searchQuery: value });
		const handlePageChange = (page) => setAttributes({ currentPage: page });

		const filteredProducts = productList.filter((product) =>
			product.title.toLowerCase().includes(searchQuery.toLowerCase()),
		);

		const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
		const currentProducts = filteredProducts.slice(
			itemsPerPage * (currentPage - 1),
			itemsPerPage * currentPage,
		);

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

					<div className="flex gap-5 my-10">
						<Button
							onClick={() => handleModalOpen()}
							className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-blue-700"
						>
							Add Product
						</Button>
					</div>
					<TextControl
						label="Search Products"
						value={searchQuery}
						onChange={handleSearchChange}
						className="mb-4"
					/>
					<table className="min-w-full table-auto border-collapse border border-gray-300">
						<thead>
							<tr>
								{[
									"Image",
									"Product Name",
									"Category",
									"Catalog PDF",
									"Actions",
								].map((header) => (
									<th
										key={header}
										className="border border-gray-300 bg-gray-100 px-4 py-2"
									>
										{header}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{currentProducts.map((product, index) => (
								<tr key={product.id}>
									<td className="border border-gray-300">
										<div className="flex justify-center items-center py-2">
											<img
												src={product.imageUrl}
												alt="Product"
												className="w-20 h-20 object-cover"
											/>
										</div>
									</td>
									<td className="border border-gray-300 px-4">
										{product.title}
									</td>
									<td className="border border-gray-300 px-4">
										{product.category}
									</td>
									<td className="border border-gray-300 px-4">
										{product.pdfFile.url ? (
											<a
												href={product.pdfFile.url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-600 hover:underline"
											>
												{product.pdfFile.title}
											</a>
										) : (
											"No PDF"
										)}
									</td>
									<td className="border border-gray-300 px-4 text-center">
										<Button onClick={() => handleModalOpen(product, index)}>
											Update
										</Button>{" "}
										<Button isDestructive onClick={() => removeProduct(index)}>
											Remove
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className="flex justify-between items-center mt-4">
						<Button
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}
						>
							Previous
						</Button>
						<span className="text-sm text-gray-600">
							Page {currentPage} of {totalPages}
						</span>
						<Button
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={currentPage === totalPages}
						>
							Next
						</Button>
					</div>
					{isModalOpen && (
						<Modal
							title={isUpdating ? "Update Product" : "Add New Product"}
							onRequestClose={() => setIsModalOpen(false)}
							className="bg-white p-4 rounded shadow-lg"
						>
							<MediaUpload
								onSelect={(media) => handleInputChange("imageUrl", media.url)}
								type="image"
								render={({ open }) => (
									<div className="mb-4">
										<Button onClick={open} className="mb-2 bg-gray-700/20">
											Upload Image
										</Button>
										{newProduct.imageUrl && (
											<img
												src={newProduct.imageUrl}
												alt="Preview"
												className="w-48 h-48 object-cover mb-4"
											/>
										)}
									</div>
								)}
							/>

							<TextControl
								label="Product Title"
								value={newProduct.title}
								onChange={(value) => handleInputChange("title", value)}
								className="mb-4 w-[600px]"
							/>
							<TextareaControl
								label="Product Description"
								value={newProduct.description}
								onChange={(value) => handleInputChange("description", value)}
								className="mb-4"
							/>
							<SelectControl
								label="Category"
								value={newProduct.category}
								options={[
									{ label: "Low Voltage Cables", value: "Low Voltage Cables" },
									{
										label: "High Voltage Cables",
										value: "High Voltage Cables",
									},
									{
										label: "Medium Voltage Cables",
										value: "Medium Voltage Cables",
									},
									{
										label: "Fire Resistant Cables",
										value: "Fire Resistant Cables",
									},
									{ label: "Flexible Cables", value: "Flexible Cables" },
									{ label: "Jointing", value: "Jointing" },
									{
										label: "Fitting dan Accessories",
										value: "Fitting dan Accessories",
									},
								]}
								onChange={(value) => handleInputChange("category", value)}
								className="mb-4"
							/>
							<TextControl
								label="Short Specifications"
								value={newProduct.spec}
								onChange={(value) => handleInputChange("spec", value)}
								className="mb-4"
							/>
							<label
								htmlFor="Specifications"
								className="text-xs font-medium leading-tight uppercase block mb-2 p-0"
							>
								Specifications
							</label>
							<RichText
								id="spec"
								value={newProduct.specDesc}
								onChange={(value) => handleInputChange("specDesc", value)}
								className="w-full border border-[#949494] px-2 py-[5px] mb-4"
							/>
							<TextControl
								label="Tokopedia Link"
								value={newProduct.linkTokopedia}
								onChange={(value) => handleInputChange("linkTokopedia", value)}
								className="mb-4"
							/>
							<TextControl
								label="Shopee Link"
								value={newProduct.linkShopee}
								onChange={(value) => handleInputChange("linkShopee", value)}
								className="mb-4"
							/>
							<TextControl
								label="Catalog Link"
								value={newProduct.catalogLink}
								onChange={(value) => handleInputChange("catalogLink", value)}
								className="mb-4"
							/>
							<Button
								onClick={handleProductSave}
								className="bg-indigo-600 text-white px-4 rounded mr-10"
							>
								{isUpdating ? "Update Product" : "Add Product"}
							</Button>
							<MediaUpload
								onSelect={onSelectPdf}
								allowedTypes={["application/pdf"]}
								multiple={false}
								render={({ open }) => (
									<Button
										onClick={open}
										className="bg-indigo-600 text-white px-4 rounded"
									>
										{newProduct.pdfFile?.id
											? "Replace Product PDF"
											: "Upload Product PDF"}
									</Button>
								)}
							/>
						</Modal>
					)}
				</div>
			</div>
		);
	},
});
