import { useEffect, useState } from "@wordpress/element";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import imageUrl from "../assets/page-banner/contact-us.jpeg";
import imageUrlBg from "../assets/page-background/Kontak.jpeg";

import {
	IconMapPin,
	IconPhoneCall,
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandTiktok,
	IconMail,
	IconWorld,
	IconMapPinFilled,
	IconBrandLinkedin,
} from "@tabler/icons-react";

import HeaderTemplate from "../common_component/HeaderTemplate";

const ContactUsPage = () => {
	const [pageAttributes, setPageAttributes] = useState(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [formStatus, setFormStatus] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(async () => {
		const container = document.getElementById("contact-us-page");
		if (container) {
			const attributes = container.getAttribute("data-block-attributes");
			if (attributes) {
				try {
					const parsedAttributes = JSON.parse(attributes);
					setPageAttributes(parsedAttributes);
				} catch (error) {
					console.error("Failed to parse block attributes:", error);
				}
			}
		}
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const isFormValid = () => {
		return (
			formData.name.trim() && formData.email.trim() && formData.message.trim()
		);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!isFormValid()) {
			setFormStatus("Semua kolom wajib diisi.");
			return;
		}

		setIsSubmitting(true);
		setFormStatus("Mengirim...");

		try {
			const res = await fetch("/wp-json/kes/v1/send-mail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: `${pageAttributes?.recipient} || sales@kmielectricsolution.co.id`, // fixed recipient (you can change this)
					subject: `Kontak dari ${formData.name} (${formData.email})`,
					message: formData.message,
				}),
			});

			const result = await res.json();

			if (result.success) {
				setFormStatus("Pesan berhasil dikirim.");
				setFormData({ name: "", email: "", message: "" });
			} else {
				setFormStatus("Gagal mengirim pesan.");
			}
		} catch (error) {
			console.error("Error sending message:", error);
			setFormStatus("Terjadi kesalahan saat mengirim.");
		} finally {
			setIsSubmitting(false);
		}
	};

	console.log(pageAttributes);

	return (
		<div className="relative">
			<HeaderTemplate imageUrl={pageAttributes?.banner?.url} />
			<img
				src={imageUrlBg}
				alt="Background"
				className="absolute w-screen h-[100%] -z-30 object-fill top-[20%]"
			/>

			<div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 pt-10 px-4 gap-5">
				{/* Contact Info */}
				<motion.div
					className="bg-white px-6 py-7 shadow-lg rounded-lg order-2 md:order-1"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-2xl font-semibold">Informasi Kontak</h2>
					<ul className="mt-4 space-y-6 text-lg">
						{pageAttributes?.contactInformation?.map((item, index) => (
							<li key={index} className="flex items-center gap-2">
								<IconPhoneCall />
								{item.value}{" "}
								{item.label && item.label !== "null" && `(${item.label})`}
							</li>
						))}

						{pageAttributes?.recipient && (
							<li className="flex items-center gap-2">
								<IconMail /> {pageAttributes.recipient}
							</li>
						)}

						{pageAttributes?.address && (
							<li className="flex items-center gap-2">
								<IconMapPin /> {pageAttributes.address}
							</li>
						)}

						{pageAttributes?.website && (
							<li className="flex items-center gap-2">
								<IconWorld />
								<a
									href={pageAttributes.website}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline"
								>
									{pageAttributes.website.replace(/^https?:\/\//, "")}
								</a>
							</li>
						)}

						<li className="flex items-center gap-2">Follow us:</li>
						<li className="flex items-center gap-4">
							<a
								href="https://www.facebook.com/profile.php?id=61565981105742"
								target="_blank"
								className="text-blue-600 hover:text-blue-800"
							>
								<IconBrandFacebook />
							</a>
							<a
								href="https://www.instagram.com/kes_kabelretail"
								target="_blank"
								className="text-pink-500 hover:text-pink-700"
							>
								<IconBrandInstagram />
							</a>
							<a
								href="https://www.tiktok.com/@kes_kabelretail"
								target="_blank"
								className="text-black hover:text-gray-800"
							>
								<IconBrandTiktok />
							</a>
							<a
								href="https://www.linkedin.com/company/pt-kmi-electric-solution"
								target="_blank"
								className="text-blue-700 hover:text-blue-900"
							>
								<IconBrandLinkedin />
							</a>
						</li>
					</ul>
				</motion.div>

				{/* Contact Form */}
				<motion.div
					className="order-1 md:order-1"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
				>
					<motion.form
						onSubmit={handleSubmit}
						className="bg-white p-6 shadow-lg rounded-lg"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<p className="text-xl font-bold mb-1">
							Ingin Bekerja Sama dengan Kami?
						</p>
						<p className="mb-5 text-sm">
							Silakan isi form berikut, tim kami akan segera menghubungi Anda.
						</p>

						<input
							type="text"
							name="name"
							placeholder="Nama"
							value={formData.name}
							onChange={handleInputChange}
							className="w-full px-4 py-2 mb-4 border rounded-lg"
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleInputChange}
							className="w-full px-4 py-2 mb-4 border rounded-lg"
						/>
						<textarea
							name="message"
							placeholder="Kebutuhan Anda"
							rows="5"
							value={formData.message}
							onChange={handleInputChange}
							className="w-full px-4 py-2 mb-4 border rounded-lg"
						/>

						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
						>
							{isSubmitting ? "Mengirim..." : "Kirim"}
						</button>

						{formStatus && (
							<p className="mt-4 text-center text-sm">{formStatus}</p>
						)}
					</motion.form>
				</motion.div>

				{/* Map Section */}
				<div className="mapouter my-10 w-full h-[400px] md:h-[500px] order-3 md:col-span-2">
					<div className="flex items-center justify-center mb-5">
						<IconMapPinFilled className="text-red-700 mr-2 h-10 w-10" />
						<motion.h2
							initial={{ opacity: 0, y: -50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="text-center text-2xl md:text-3xl font-bold text-[#354052]"
						>
							Lokasi PT KMI Electric Solution (PT KES)
						</motion.h2>
					</div>

					<div className="gmap_canvas w-full h-[80%] overflow-hidden">
						<iframe
							className="gmap_iframe w-full h-full"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5857427465953!2d106.93687387499011!3d-6.186154093801413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b66b7cac7bf%3A0x7b767741fe8aa456!2sPT%20KMI%20Electric%20Solution!5e0!3m2!1sen!2sid!4v1734772796839!5m2!1sen!2sid"
							title="Lokasi PT KES"
							allowFullScreen
							loading="lazy"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

const container = document.getElementById("contact-us-page");
if (container) {
	const root = createRoot(container);
	root.render(<ContactUsPage />);
}
