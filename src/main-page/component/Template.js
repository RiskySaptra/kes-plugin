import { createRoot } from "@wordpress/element";
import "./style.scss";

// ProductCatalog component that renders the product list dynamically
const ProductCatalog = () => {
	return (
		<div className="pt-[200px]">
			<p className="text-black">banner-reguler-block</p>
		</div>
	);
};

// Get the container element in which the block should be rendered
const container = document.getElementById("banner-reguler-block");
const root = createRoot(container);

// Render the block dynamically with attributes
root.render(<ProductCatalog />);
