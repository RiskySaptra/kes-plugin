import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";

import "./style.scss";

registerBlockType(metadata.name, {
	edit: (props) => {
		return (
			<div>
				<div className="container p-5 mx-auto bg-gray-100 rounded-md my-[10px]">
					<div className="">BRRR</div>
				</div>
			</div>
		);
	},
});
