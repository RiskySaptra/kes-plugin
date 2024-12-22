import { registerBlockType } from "@wordpress/blocks";
import { RichText, MediaUpload } from "@wordpress/block-editor";
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

registerBlockType(metadata.name, {
	attributes: {
		pdfFile: {
			type: "object",
			default: {
				id: null,
				url: "",
				title: "",
			},
		},
		productList: {
			type: "array",
			default: sampleProducts,
		},
		searchQuery: {
			type: "string",
			default: "",
		},
		currentPage: {
			type: "number",
			default: 1,
		},
		itemsPerPage: {
			type: "number",
			default: 5,
		},
	},

	edit: ({ attributes, setAttributes }) => {
		const { productList, pdfFile, searchQuery, currentPage, itemsPerPage } =
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
		});

		console.log(attributes);

		const handleInputChange = (field, value) => {
			setNewProduct({ ...newProduct, [field]: value });
		};

		const onSelectPdf = (file) => {
			const selectedFile = {
				id: file.id,
				url: file.url,
				title: file.title,
			};
			setAttributes({ pdfFile: selectedFile });
		};

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
				});
			}
			setIsModalOpen(true);
		};

		const handleProductSave = () => {
			if (isUpdating) {
				const updatedProducts = [...productList];
				updatedProducts[currentProductIndex] = newProduct;
				setAttributes({ productList: updatedProducts });
			} else {
				setAttributes({ productList: [...productList, newProduct] });
			}
			setIsModalOpen(false);
		};

		const removeProduct = (index) => {
			const updatedProducts = productList.filter((_, i) => i !== index);
			setAttributes({ productList: updatedProducts });
		};

		const handleSearchChange = (value) => {
			setAttributes({ searchQuery: value });
		};

		const handlePageChange = (page) => {
			setAttributes({ currentPage: page });
		};

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
				<div className="flex gap-5 my-10">
					<Button
						onClick={() => handleModalOpen()}
						className="bg-indigo-600 text-white px-4 rounded hover:!text-white"
					>
						Add Product
					</Button>
					<div className="flex justify-center gap-5 items-center">
						<MediaUpload
							onSelect={onSelectPdf}
							allowedTypes={["application/pdf"]}
							multiple={false}
							render={({ open }) => (
								<Button
									onClick={open}
									className="bg-indigo-600 text-white px-4 rounded hover:!text-white"
								>
									{/* <IconUpload size={20} /> */}
									{pdfFile && pdfFile.id
										? "Replace Catalog PDF"
										: "Upload Catalog PDF"}
								</Button>
							)}
						/>

						{/* Show the PDF title if uploaded */}
						{pdfFile && pdfFile.id && (
							<>
								<a
									href={pdfFile.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-gray-600 hover:underline"
								>
									Current File: <strong>{pdfFile.title}</strong>
								</a>
								{/* <p className=""></p> */}
							</>
						)}
					</div>
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
							<th className="border border-gray-300 bg-gray-100 px-4 py-2">
								Image
							</th>
							<th className="border border-gray-300 bg-gray-100 px-4 py-2">
								Product Name
							</th>
							<th className="border border-gray-300 bg-gray-100 px-4 py-2">
								Category
							</th>
							<th className="border border-gray-300 bg-gray-100 px-4 py-2">
								Actions
							</th>
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
									<p>{product.title}</p>
								</td>
								<td className="border border-gray-300 px-4">
									<p>{product.category}</p>
								</td>
								<td className="border border-gray-300 px-4 text-center">
									<Button onClick={() => handleModalOpen(product, index)}>
										Update
									</Button>
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
									<Button onClick={open} className="mb-2">
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
								{ label: "High Voltage Cables", value: "High Voltage Cables" },
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
							class="text-xs font-medium leading-tight uppercase block mb-2 p-0"
						>
							Specifications
						</label>
						<RichText
							id="spec"
							label="Specifications"
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
							className="bg-indigo-600 text-white px-4 rounded"
						>
							{isUpdating ? "Update Product" : "Add Product"}
						</Button>
					</Modal>
				)}
			</div>
		);
	},
});
