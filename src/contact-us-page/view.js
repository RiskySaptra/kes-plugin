import { useEffect, useState } from "@wordpress/element";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";

// Tabler Icons
import { IconAt, IconMapPin, IconPhoneCall } from "@tabler/icons-react";

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
		<>
			<Header />
			<div className="mx-auto max-w-[1280px] grid grid-cols-2 pt-10">
				{/* Contact Info Section */}
				<motion.div
					className="contact-info-section"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-2xl font-semibold">Contact Information</h2>

					<ul className="mt-4 space-y-6">
						<li className="flex items-center gap-2">
							<IconPhoneCall size={24} strokeWidth={2} />
							<span className="text-lg">+1 234 567 890</span>
						</li>
						<li className="flex items-center gap-2">
							<IconAt size={24} strokeWidth={2} />
							<span className="text-lg">contact@example.com</span>
						</li>
						<li className="flex items-center gap-2">
							<IconMapPin size={24} strokeWidth={2} />
							<span className="text-lg">123 Main Street, City, Country</span>
						</li>
					</ul>
				</motion.div>
				{/* Contact Form Section with animations */}
				<motion.div
					className="form-section"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
				>
					<motion.div
						className="header-container text-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
					>
						{/* <h1 className="text-4xl font-bold">Contact Us</h1>
				<p className="mt-4 text-lg">
					We'd love to hear from you! Please fill out the form below.
				</p> */}
					</motion.div>

					<motion.form
						className="bg-white p-6 shadow-lg rounded-lg"
						onSubmit={handleSubmit}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<p className="text-[25px] font-bold">
							Ingin bekerjasama dengan PT KMI Electric Solution?
						</p>
						<p className="mb-5 text-xs">
							Isi Nama dan Email Anda, tim kami akan menghubungi Anda segera!
						</p>
						<div className="form-group mb-6">
							<motion.input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleInputChange}
								placeholder="Your Name"
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
								placeholder="Your Email"
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
								placeholder="Your Message"
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

				<div
					className="mapouter mt-10"
					style={{
						position: "relative",
						textAlign: "right",
						width: "1280px",
						height: "400px",
					}}
				>
					<div
						className="gmap_canvas"
						style={{
							overflow: "hidden",
							background: "none",
							width: "1280px",
							height: "400px",
						}}
					>
						<iframe
							className="gmap_iframe"
							frameBorder="0"
							scrolling="no"
							marginHeight="0"
							marginWidth="0"
							src="https://maps.google.com/maps?width=1280&height=400&hl=en&q=Jakrata&t=&z=14&ie=UTF8&iwloc=B&output=embed"
							style={{ width: "1280px", height: "400px" }}
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
		</>
	);
};

// Render the Contact Us page
const container = document.getElementById("contact-us-page");
if (container) {
	const root = createRoot(container);
	root.render(<ContactUsPage />);
}

const Header = () => (
	<div className="bg-gray-900 min-h-[560px] flex justify-center items-center text-white">
		<div className="mx-auto max-w-[1280px]">
			<h1 className="text-[36px] font-bold">Header Title</h1>
			<p>
				Kabel untuk Instalasi Listrik Outdoor, Indoor, dan Bangunan dari Wilson
				Cables. Dapatkan kabel untuk instalasi listrik indoor dan outdoor yang
				terbaik untuk keperluan aktivitas anda di dalam rumah, gedung,
				perkantoran, dan lain-lainnya.
			</p>
		</div>
	</div>
);
