import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import { useBlockProps } from "@wordpress/block-editor";

import "./style.scss";

registerBlockType(metadata.name, {
	edit: (props) => {
		const blockProps = useBlockProps();
		return <div {...blockProps}>Static</div>;
	},
});
