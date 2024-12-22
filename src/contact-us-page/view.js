import { useEffect, useState } from "@wordpress/element";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import imageUrl from "../assets/page-banner/contact-us.jpeg";

import imageUrlBg from "../assets/page-background/Kontak.png";

// Tabler Icons
import {
	IconMapPin,
	IconPhoneCall,
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandTiktok,
	IconMapPinFilled,
	IconMail,
	IconWorld,
} from "@tabler/icons-react";
import HeaderTemplate from "../common_component/HeaderTemplate";

const ContactUsPage = () => {
	// State management
	const [pageAttributes, setPageAttributes] = useState(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [formStatus, setFormStatus] = useState("");

	useEffect(() => {
		// Fetch page attributes dynamically
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

	// Form data handler
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormStatus("Submitting...");

		// Simulate form submission (you can replace this with actual API call)
		setTimeout(() => {
			setFormStatus(
				"Thank you for contacting us! We will get back to you soon.",
			);
			setFormData({ name: "", email: "", message: "" }); // Reset form
		}, 2000);
	};

	return (
		<div className="relative">
			<HeaderTemplate imageUrl={imageUrl} />
			<img
				src={imageUrlBg}
				alt="Static Image"
				className="absolute w-full h-[90%] -z-30 opacity-50 object-cover"
			/>
			<div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 pt-10 px-4 gap-5">
				{/* Contact Info Section */}
				<motion.div
					className="contact-info-section order-2 md:order-1 bg-white px-6 pt-7 shadow-lg rounded-lg"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-2xl font-semibold">Contact Information</h2>

					<ul className="mt-4 space-y-6">
						{/* Phone Numbers */}
						<li className="flex items-center gap-2">
							<IconPhoneCall size={24} strokeWidth={2} />
							<span className="text-lg">+6221 4614952 (Kantor)</span>
						</li>
						<li className="flex items-center gap-2">
							<IconPhoneCall size={24} strokeWidth={2} />
							<span className="text-lg">+6281 2193 43520 (Luis)</span>
						</li>
						<li className="flex items-center gap-2">
							<IconPhoneCall size={24} strokeWidth={2} />
							<span className="text-lg">+6281 2124 88890 (Alfian)</span>
						</li>
						<li className="flex items-center gap-2">
							<IconPhoneCall size={24} strokeWidth={2} />
							<span className="text-lg">+6281 3345 67695 (Ghifar)</span>
						</li>

						{/* Email */}
						<li className="flex items-center gap-2">
							<IconMail size={24} strokeWidth={2} />
							<span className="text-lg">sales@kmielectricsolution.co.id</span>
						</li>

						{/* Address */}
						<li className="flex items-center gap-2">
							<IconMapPin size={24} strokeWidth={2} />
							<span className="text-lg">
								Jl. Raya Bekasi Km 23.1 – Cakung, Jakarta 13910
							</span>
						</li>

						{/* Website */}
						<li className="flex items-center gap-2">
							<IconWorld size={24} strokeWidth={2} />
							<span className="text-lg text-blue-600 hover:underline">
								<a
									href="https://kabelretail.co.id/"
									target="_blank"
									rel="noopener noreferrer"
								>
									www.kabelretail.co.id
								</a>
							</span>
						</li>

						{/* Social Media */}
						<li className="flex items-center gap-2">
							<span className="text-lg">Follow us:</span>
						</li>
						<li className="flex items-center gap-6">
							{/* Social Media Icons */}
							<a
								href="https://www.facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-800"
							>
								<IconBrandFacebook size={24} />
							</a>
							<a
								href="https://www.instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-pink-500 hover:text-pink-700"
							>
								<IconBrandInstagram size={24} />
							</a>
							<a
								href="https://www.tiktok.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-black hover:text-gray-800"
							>
								<IconBrandTiktok size={24} />
							</a>
						</li>
					</ul>
				</motion.div>

				{/* Contact Form Section */}
				<motion.div
					className="form-section order-1 md:order-1"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
				>
					<motion.form
						className="bg-white p-6 shadow-lg rounded-lg"
						onSubmit={handleSubmit}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<p className="text-[25px] font-bold">
							Ingin Bekerja Sama dengan Kami?
						</p>
						<p className="mb-5 text-xs">
							KES siap memenuhi kebutuhan Anda dengan harga kompetitif,
							pengiriman cepat, dan tepat waktu. Mohon lengkapi data berikut dan
							tim profesional kami akan segera menghubungi Anda.
						</p>
						<div className="form-group mb-6">
							<motion.input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleInputChange}
								placeholder="Nama"
								className="w-full px-4 py-2 border rounded-lg"
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
							/>
						</div>

						<div className="form-group mb-6">
							<motion.input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								placeholder="Email"
								className="w-full px-4 py-2 border rounded-lg"
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							/>
						</div>

						<div className="form-group mb-6">
							<motion.textarea
								name="message"
								value={formData.message}
								onChange={handleInputChange}
								placeholder="Kebutuhan Anda"
								className="w-full px-4 py-2 border rounded-lg"
								rows="5"
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.4 }}
							/>
						</div>

						<div className="form-group mb-6 text-center">
							<motion.button
								type="submit"
								className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								Submit
							</motion.button>
						</div>

						{/* Form Status Message */}
						{formStatus && (
							<motion.p
								className="text-center mt-4"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.6 }}
							>
								{formStatus}
							</motion.p>
						)}
					</motion.form>
				</motion.div>

				<div className="mapouter my-10 w-full h-[400px] md:!h-[500px] order-3 md:col-span-2 relative">
					<div className="flex items-center justify-center mb-5">
						<IconMapPinFilled className="text-red-700 mr-2 h-20 w-20" />
						<motion.h2
							initial={{ opacity: 0, y: -50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="text-center text-[20px] md:text-[36px] text-[#354052] font-bold not-prose"
						>
							Lokasi PT KMI Electric Solution (PT KES)
						</motion.h2>
					</div>

					<div
						className="gmap_canvas w-full h-[80%]"
						style={{ overflow: "hidden", background: "none" }}
					>
						<iframe
							className="gmap_iframe w-full h-full"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5857427465953!2d106.93687387499011!3d-6.186154093801413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b66b7cac7bf%3A0x7b767741fe8aa456!2sPT%20KMI%20Electric%20Solution!5e0!3m2!1sen!2sid!4v1734772796839!5m2!1sen!2sid"
							title="Google Map"
						></iframe>

						<a
							href="https://sprunkin.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Sprunki Incredibox
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

// Render the Contact Us page
const container = document.getElementById("contact-us-page");
if (container) {
	const root = createRoot(container);
	root.render(<ContactUsPage />);
}
