import { motion } from "framer-motion";

const HeaderTemplate = ({
	desc = "empty description",
	imageUrl = "https://via.placeholder.com/1200x600.png?text=Your+Company+Image+Here",
}) => (
	<div className="relative flex justify-center items-center text-white overflow-hidden">
		<img
			src={imageUrl}
			alt="Background Placeholder"
			className=" min-w-full max-h-[740px] object-cover"
		/>
	</div>
);

export default HeaderTemplate;
