import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";
import { useState, useEffect } from "@wordpress/element";
import metadata from "./block.json";

import "./style.scss";

registerBlockType(metadata.name, {
	// Define attributes for saving the data
	attributes: {
		catalogTitle: {
			type: "string",
			default: "",
		},
		productList: {
			type: "array",
			default: [],
		},
	},

	edit: (props) => {
		const { attributes, setAttributes } = props;
		const { catalogTitle, productList } = attributes;

		// Manage local state for product list and catalog title
		const [localCatalogTitle, setLocalCatalogTitle] = useState(catalogTitle);
		const [localProductList, setLocalProductList] = useState(productList);

		// Update catalog title both in local state and attributes
		const updateCatalogTitle = (newTitle) => {
			setLocalCatalogTitle(newTitle);
			setAttributes({ catalogTitle: newTitle });
		};

		// Update product list both in local state and attributes
		const updateProductList = (index, newProduct) => {
			const updatedProducts = [...localProductList];
			updatedProducts[index] = newProduct;
			setLocalProductList(updatedProducts);
			setAttributes({ productList: updatedProducts });
		};

		// Add a new product to the list
		const addProduct = () => {
			const newProductList = [...localProductList, "New Product"];
			setLocalProductList(newProductList);
			setAttributes({ productList: newProductList });
		};

		// Remove a product from the list
		const removeProduct = (index) => {
			const updatedProducts = localProductList.filter((_, i) => i !== index);
			setLocalProductList(updatedProducts);
			setAttributes({ productList: updatedProducts });
		};

		// Return the block UI for editing
		return (
			<div className="product-catalog-block">
				<div>
					<RichText
						tagName="h3"
						value={localCatalogTitle}
						onChange={updateCatalogTitle}
						placeholder="Enter catalog title..."
					/>
					<ul>
						{localProductList.map((product, index) => (
							<li key={index}>
								<input
									value={product}
									onChange={(e) => updateProductList(index, e.target.value)}
									placeholder="Enter product name..."
								/>
								<button onClick={() => removeProduct(index)}>-</button>
							</li>
						))}
					</ul>
					<button onClick={addProduct}>Add Product</button>
				</div>
			</div>
		);
	},
});
