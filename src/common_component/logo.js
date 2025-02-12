const companyData = [
	{
		key: "kabel-metal",
		name: "Kabel Metal Indonesia",
		url: "https://www.kabel-metal.com/",
	},
	{ key: "repl-removebg-preview", name: "REPL", url: "https://www.repl.com/" },
	{
		key: "sicame-group",
		name: "Sicame Group",
		url: "https://sicame-group.com/en",
	},
	{ key: "pertamina", name: "Pertamina", url: "https://www.pertamina.com/" },
	{
		key: "agung-sedayu-group",
		name: "Agung Sedayu Group",
		url: "https://www.agungsedayu.com/en",
	},
	{
		key: "summarecon-agung",
		name: "Summarecon",
		url: "https://www.summarecon.com/",
	},
	{
		key: "sinarmasland",
		name: "Sinarmas Land",
		url: "https://www.sinarmasland.com/",
	},
	{
		key: "agung-podomoro-land",
		name: "Agung Podomoro Land",
		url: "https://www.agungpodomoroland.com/en/",
	},
	{
		key: "total-bangun-persada",
		name: "Total Bangun Persada",
		url: "https://www.totalbp.com/",
	},
	{
		key: "alam-sutera",
		name: "PT Alam Sutera Realty Tbk",
		url: "https://alamsuterarealty.co.id/",
	},
	{
		key: "ciputra",
		name: "Ciputra",
		url: "https://www.ciputra.com/en/homepage-en/",
	},
	{
		key: "wika",
		name: "PT. Wijaya Karya (Persero) Tbk",
		url: "https://www.wika.co.id/en",
	},
	{ key: "gramedia", name: "Gramedia", url: "https://www.gramedia.com/" },
	{ key: "swan-city", name: "Swancity", url: "https://lavon.co.id/" },
	{
		key: "Logo_PT_Pupuk_Sriwidjaja_Palembang",
		name: "Pupuk Pusri",
		url: "https://pusri.co.id/id",
	},
	{
		key: "Logo_Primaya_Hospital",
		name: "Primaya Hospital",
		url: "https://primayahospital.com/",
	},
	{ key: "UNIQLO_logo", name: "UNIQLO", url: "https://www.uniqlo.com/id/id/" },
	{ key: "PLN", name: "PLN", url: "https://web.pln.co.id/" },
	{
		key: "logo-adaro-head",
		name: "logo-adaro-head",
		url: "https://adarominerals.id/",
	},
];

// Utility function to dynamically import images and extract file names
const importImages = (context) => {
	return context.keys().map((imagePath) => {
		const filename = imagePath
			.replace(/^.*[\\/]/, "") // Remove the path, keeping only the file name
			.replace(/\.(png|jpe?g|svg|webp|gif)$/i, ""); // Remove extensions (case insensitive)

		return {
			logo: context(imagePath),
			name: filename, // Extract file name from path
			url: companyData.find((itm) => itm.key === filename)?.url || "",
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
const aboutImages = importImages(
	require.context("../assets/about-image", false, /\.(png|jpe?g|svg)$/),
);

export { clientLogo, partnerLogo, aboutImages };
