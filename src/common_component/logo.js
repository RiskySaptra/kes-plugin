// Utility function to dynamically import images and extract file names
const importImages = (context) => {
	return context.keys().map((imagePath) => {
		return {
			logo: context(imagePath),
			name: imagePath.replace(/^.*[\\\/]/, ""), // Extract file name from path
		};
	});
};

// Dynamically import client and partner logos
const clientLogo = importImages(
	require.context("../assets/client-logo", false, /\.(png|jpe?g|svg)$/),
);
const partnerLogo = importImages(
	require.context("../assets/partner-logo", false, /\.(png|jpe?g|svg)$/),
);
const galleryImages = importImages(
	require.context("../assets/gallery", false, /\.(png|jpe?g|svg)$/),
);
const aboutImages = importImages(
	require.context("../assets/about-image", false, /\.(png|jpe?g|svg)$/),
);

export { clientLogo, partnerLogo, galleryImages, aboutImages };
