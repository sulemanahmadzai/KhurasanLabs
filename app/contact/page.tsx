'use client';

import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import starsBg from "@/public/imgs/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

	const sectionRef = useRef<HTMLElement>(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	});

	const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus({ type: null, message: '' });

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				setSubmitStatus({ 
					type: 'success', 
					message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.' 
				});
				// Reset form
				setFormData({
					name: '',
					email: '',
					subject: '',
					message: ''
				});
			} else {
				setSubmitStatus({ 
					type: 'error', 
					message: data.error || 'Something went wrong. Please try again.' 
				});
			}
		} catch {
			setSubmitStatus({ 
				type: 'error', 
				message: 'Failed to send message. Please try again later.' 
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	return (
		<>
			<Header />
			<main className="min-h-screen">
				{/* Hero Section */}
				<motion.section
					ref={sectionRef}
					className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
					animate={{ backgroundPositionX: starsBg.width }}
					transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
					style={{ backgroundImage: `url(${starsBg.src})`, backgroundPositionY }}
				>
					<div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.3)_15%,rgb(14,0,36,.7)_78%,transparent)]" />
					
					<motion.div 
						className="absolute h-[500px] w-[500px] md:h-[700px] md:w-[700px] border border-white/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
						animate={{ rotate: '1turn' }}
						transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
					/>
					<motion.div 
						className="absolute h-[600px] w-[600px] md:h-[900px] md:w-[900px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
						animate={{ rotate: '-1turn' }}
						transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
					/>

					<div className="relative container">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="max-w-3xl mx-auto text-center"
						>
							<h1 className="text-7xl md:text-9xl font-semibold tracking-tighter mb-8 bg-white bg-[radial-gradient(100%_100%_at_top_left,white,rgb(74,32,138,.4))] text-transparent bg-clip-text">
								Let&apos;s Talk
							</h1>
							<p className="text-xl md:text-2xl text-white/60 max-w-xl mx-auto">
								Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
							</p>
						</motion.div>
					</div>
				</motion.section>

				{/* Contact Form Section */}
				<section className="py-16 md:py-24 relative -mt-12 md:-mt-20">
					<div className="container">
						<div className="max-w-2xl mx-auto">
							<div className="border border-white/15 rounded-xl p-8 md:p-10 bg-black/40">
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label htmlFor="name" className="block text-sm text-white/70 mb-2">
											Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white focus:outline-none focus:border-white/30"
											placeholder="Your name"
										/>
									</div>

									<div>
										<label htmlFor="email" className="block text-sm text-white/70 mb-2">
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white focus:outline-none focus:border-white/30"
											placeholder="your.email@example.com"
										/>
									</div>

									<div>
										<label htmlFor="subject" className="block text-sm text-white/70 mb-2">
											Subject
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white focus:outline-none focus:border-white/30"
											placeholder="Project inquiry"
										/>
									</div>

									<div>
										<label htmlFor="message" className="block text-sm text-white/70 mb-2">
											Message
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											required
											rows={6}
											className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white focus:outline-none focus:border-white/30 resize-none"
											placeholder="Tell us about your project..."
										/>
									</div>

									{submitStatus.type && (
										<div className={`p-4 rounded-lg ${
											submitStatus.type === 'success' 
												? 'bg-green-500/20 border border-green-500/50 text-green-400' 
												: 'bg-red-500/20 border border-red-500/50 text-red-400'
										}`}>
											{submitStatus.message}
										</div>
									)}

									<div>
										<Button 
											type="submit" 
											className="w-full" 
											disabled={isSubmitting}
										>
											{isSubmitting ? 'Sending...' : 'Send Message'}
										</Button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Contact;
