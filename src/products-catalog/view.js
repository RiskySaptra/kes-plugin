import { createRoot, useState, useEffect } from "@wordpress/element";
import "./style.scss";

// ProductCatalog component that renders the product list dynamically
const ProductCatalog = () => {
	const [blockAttributes, setBlockAttributes] = useState({
		catalogTitle: "testing",
		productList: [],
	});

	const { catalogTitle, productList } = blockAttributes;
	const [count, setCount] = useState(0);

	useEffect(() => {
		// Get the container element and retrieve the block attributes from the data attribute
		const container = document.getElementById("block-one");
		const attributes = container?.getAttribute("data-block-attributes");

		if (attributes) {
			setBlockAttributes(JSON.parse(attributes));
		}
	}, []);

	// Make sure blockAttributes is available before rendering
	if (!blockAttributes) {
		return <div>Loading...</div>;
	}

	return (
		<div className="product-catalog">
			<h3 className="pt-[500px]">{catalogTitle}</h3>
			<ul>
				{productList.map((product, index) => (
					<li key={index}>{product}</li>
				))}
			</ul>
			<div>{count}</div>
			<button onClick={() => setCount(count + 1)}>ADD</button>
		</div>
	);
};

// Get the container element in which the block should be rendered
const container = document.getElementById("block-one");
const root = createRoot(container);

// Render the block dynamically with attributes
root.render(<ProductCatalog />);
