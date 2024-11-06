import { registerBlockType } from "@wordpress/blocks";
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from "@wordpress/block-editor";

import metadata from "./block.json";

import "./style.scss";
import { IconEdit, IconPencilPlus } from "@tabler/icons-react";

registerBlockType(metadata.name, {
	attributes: {
		images: {
			type: "array",
			default: [],
		},
		text: {
			type: "string",
			source: "html",
			selector: "h3",
			default: "",
		},
	},

	edit: (props) => {
		const {
			attributes: { text, images },
			setAttributes,
		} = props;
		const blockProps = useBlockProps();

		// Function to handle image selection
		const onSelectImages = (newImages) => {
			const selectedImages = newImages.map((image) => ({
				id: image.id,
				url: image.url,
				alt: image.alt,
			}));
			setAttributes({ images: selectedImages });
		};

		return (
			<div {...blockProps}>
				<div className="container p-5 mx-auto bg-gray-100 rounded-md my-[10px]">
					<div className="">BRRR</div>
				</div>
			</div>
		);
	},

	save: (props) => {
		const blockProps = useBlockProps.save();

		return (
			<div {...blockProps}>
				<div className="pt-10 pb-14 not-prose px-5 md:px-20">
					<h3 className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose mb-5">
						Mengapa Memilih PT KMI Electric Solution?
					</h3>
					<div className="container mx-auto max-w-[1280px] pt-5 pb-10">
						<div className="grid md:grid-cols-3 gap-12">
							<div className="bg-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] rounded-3xl flex items-center flex-col p-16 pt-16 px-8 gap-y-14 text-center leading-none min-h-[483px]">
								<div className="h-[100px] w-[100px] bg-gray-300 rounded-full"></div>
								<div>
									<p className="text-[20px] font-bold mb-7">
										Melayani Pembelian Ecer maupun Grosir
									</p>
									<p className="text-[13px] font-medium">{`Kami dapat melayani pembelian kabel dan fitting tanpa minimal qty* dan menerima permintaan untuk kabel potongan dan produksi. Tentunya untuk pembelian grosir dan keperluan proyek akan mendapatkan harga khusus (best price).`}</p>
								</div>
							</div>
							<div className="bg-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] rounded-3xl flex items-center flex-col p-16 pt-16 px-8 gap-y-14 text-center leading-none min-h-[483px]">
								<div className="h-[100px] w-[100px] bg-gray-300 rounded-full"></div>
								<div>
									<p className="text-[20px] font-bold mb-7">
										{`Jaminan Produk Asli, Baru, dan Bergaransi`}
									</p>
									<p className="text-[13px] font-medium">{`Kami dapat memberikan jaminan bahwa produk kami asli, baru, dan bergaransi. Jika diperlukan kami dapat mengeluarkan data teknis kabel (Technical Data Sheet/TDS), Tingkat Komponen Dalam Negeri (TKDN), sertifikat orisinil (COO dan COM), dan segala dokumen lainnnya.`}</p>
								</div>
							</div>
							<div className="bg-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] rounded-3xl flex items-center flex-col p-16 pt-16 px-8 gap-y-14 text-center leading-none min-h-[483px]">
								<div className="h-[100px] w-[100px] bg-gray-300 rounded-full"></div>
								<div>
									<p className="text-[20px] font-bold mb-7">
										Gratis Biaya Kirim*
									</p>
									<p className="text-[13px] font-medium">{`Khusus pembelian grosir, kami siap antarkan langsung ke site proyek, kantor, maupun ekspedisi secara gratis.* Estimasi kirim 1 – 3 hari setelah melakukan transaksi. Khusus untuk area Jakarta dan sekitarnya. * S & K Berlaku`}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
});
