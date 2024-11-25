const images = require.context("../assets/logo", false, /\.(png|jpe?g|svg)$/);

const imageList = images.keys().map((imagePath) => {
	return {
		src: images(imagePath),
		name: imagePath.replace(/^.*[\\\/]/, ""), // Extract file name from path
	};
});

export default imageList;
