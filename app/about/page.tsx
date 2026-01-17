'use client';

import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import starsBg from "@/public/imgs/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	});

	const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	const values = [
		{
			title: "Innovation",
			description: "We push boundaries and explore new possibilities, always staying ahead of the curve in technology and design.",
			icon: "💡",
			color: "from-purple-500/20 to-pink-500/20"
		},
		{
			title: "Excellence",
			description: "Every project is crafted with meticulous attention to detail, ensuring the highest quality in every deliverable.",
			icon: "⭐",
			color: "from-blue-500/20 to-cyan-500/20"
		},
		{
			title: "Collaboration",
			description: "We believe in working closely with our clients, fostering partnerships that lead to exceptional outcomes.",
			icon: "🤝",
			color: "from-indigo-500/20 to-purple-500/20"
		},
		{
			title: "Integrity",
			description: "Transparency, honesty, and ethical practices guide everything we do, building trust with every interaction.",
			icon: "✨",
			color: "from-cyan-500/20 to-blue-500/20"
		}
	];

	const whyChooseUs = [
		"Expert team with years of experience in cutting-edge technologies",
		"Client-focused approach with transparent communication",
		"Agile development process ensuring timely delivery",
		"Competitive pricing with flexible engagement models",
		"Ongoing support and maintenance for all projects",
		"Proven track record of successful project deliveries"
	];

	return (
		<>
			<Header />
			<main className="min-h-screen">
				{/* Hero Section */}
				<motion.section
					ref={sectionRef}
					className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
					animate={{ backgroundPositionX: starsBg.width }}
					transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
					style={{ backgroundImage: `url(${starsBg.src})`, backgroundPositionY }}
				>
					<div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.4)_15%,rgb(14,0,36,.6)_78%,transparent)]" />
					<div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.3),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] opacity-60" />
					<div className="absolute h-48 w-48 md:h-72 md:w-72 bg-cyan-500 rounded-full border border-white/20 top-3/4 right-1/4 translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(148,255,255)_37.7%,rgb(0,66,66))] shadow-[20px_20px_50px_rgb(255,255,255,.3),20px_20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(0,217,255)] opacity-40" />
					
					<motion.div 
						className="absolute h-[400px] w-[400px] md:h-[600px] md:w-[600px] border border-white opacity-10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
						animate={{ rotate: '1turn' }}
						transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
					/>
					<motion.div 
						className="absolute h-[500px] w-[500px] md:h-[800px] md:w-[800px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed opacity-20"
						animate={{ rotate: '-1turn' }}
						transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
					/>

					<div className="relative container">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="max-w-4xl mx-auto text-center"
						>
							<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-6 bg-white bg-[radial-gradient(100%_100%_at_top_left,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
								About KhurasanLabs
							</h1>
							<p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8">
								Transforming ideas into exceptional digital experiences through innovation, creativity, and technical excellence.
							</p>
						</motion.div>
					</div>
				</motion.section>

				{/* Who We Are Section */}
				<section className="py-20 md:py-24 border-t border-white/15">
					<div className="container">
						<div className="max-w-4xl mx-auto">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="text-center mb-16"
							>
								<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">
									Who We Are
								</h2>
								<p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
									KhurasanLabs is a forward-thinking digital agency born from a passion for innovation and excellence. 
									We combine technical expertise with creative vision to transform ideas into reality, helping businesses 
									thrive in the digital landscape.
								</p>
							</motion.div>

							<div className="grid md:grid-cols-2 gap-8">
								<motion.div
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6 }}
									className="border border-white/15 rounded-xl p-8 bg-gradient-to-br from-white/5 to-transparent"
								>
									<h3 className="text-2xl font-semibold mb-4">Our Story</h3>
									<p className="text-white/80 leading-relaxed">
										Founded with a vision to bridge the gap between cutting-edge technology and exceptional design, 
										KhurasanLabs has grown into a trusted partner for businesses seeking to make their mark in the 
										digital world. We believe that every project is an opportunity to create something extraordinary.
									</p>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: 30 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6 }}
									className="border border-white/15 rounded-xl p-8 bg-gradient-to-br from-white/5 to-transparent"
								>
									<h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
									<p className="text-white/80 leading-relaxed">
										We take a collaborative, client-centric approach to every project. By understanding your unique 
										needs and goals, we craft solutions that not only meet but exceed expectations. Our agile 
										methodology ensures flexibility and continuous improvement throughout the development process.
									</p>
								</motion.div>
							</div>
						</div>
					</div>
				</section>

				{/* Core Values Section */}
				<section className="py-20 md:py-24 border-t border-white/15">
					<div className="container">
						<div className="max-w-6xl mx-auto">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="text-center mb-16"
							>
								<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4">
									Our Core Values
								</h2>
								<p className="text-xl text-white/70 max-w-2xl mx-auto">
									The principles that guide everything we do
								</p>
							</motion.div>

							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
								{values.map((value, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										whileHover={{ scale: 1.05, y: -5 }}
										className="group relative border border-white/15 rounded-xl p-6 bg-gradient-to-br from-white/5 to-transparent hover:border-white/30 transition-all duration-300 overflow-hidden"
									>
										<div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
										<div className="relative">
											<div className="text-5xl mb-4">{value.icon}</div>
											<h3 className="text-xl font-semibold mb-3">{value.title}</h3>
											<p className="text-white/70 text-sm leading-relaxed">
												{value.description}
											</p>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Mission & Vision Section */}
				<section className="py-20 md:py-24 border-t border-white/15">
					<div className="container">
						<div className="max-w-6xl mx-auto">
							<div className="grid md:grid-cols-2 gap-12">
								<motion.div
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6 }}
									className="relative border border-white/15 rounded-2xl p-10 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent"
								>
									<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
									<h2 className="text-4xl font-medium tracking-tighter mb-6">Our Mission</h2>
									<p className="text-lg text-white/80 leading-relaxed">
										At KhurasanLabs, we believe in the power of technology to transform businesses and improve lives. 
										Our mission is to deliver innovative, high-quality digital solutions that help our clients achieve 
										their goals and exceed their expectations. We&apos;re committed to staying at the forefront of 
										technology trends and continuously evolving our skills to serve you better.
									</p>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: 30 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6 }}
									className="relative border border-white/15 rounded-2xl p-10 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent"
								>
									<div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
									<h2 className="text-4xl font-medium tracking-tighter mb-6">Our Vision</h2>
									<p className="text-lg text-white/80 leading-relaxed">
										To be the leading digital agency that businesses trust to bring their boldest ideas to life. 
										We envision a future where technology seamlessly integrates with human creativity, creating 
										experiences that inspire, engage, and drive meaningful change. Through innovation and excellence, 
										we aim to shape the digital landscape of tomorrow.
									</p>
								</motion.div>
							</div>
						</div>
					</div>
				</section>

				{/* Why Choose Us Section */}
				<section className="py-20 md:py-24 border-t border-white/15">
					<div className="container">
						<div className="max-w-4xl mx-auto">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="text-center mb-12"
							>
								<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4">
									Why Choose Us
								</h2>
								<p className="text-xl text-white/70">
									What sets us apart in the digital landscape
								</p>
							</motion.div>

							<div className="grid md:grid-cols-2 gap-4">
								{whyChooseUs.map((item, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										className="flex items-start gap-4 border border-white/15 rounded-xl p-5 bg-gradient-to-br from-white/5 to-transparent hover:border-white/30 transition-all duration-300"
									>
										<div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-400/20 flex items-center justify-center mt-1">
											<span className="text-purple-400 text-sm">✓</span>
										</div>
										<p className="text-white/80 leading-relaxed">{item}</p>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 md:py-24 border-t border-white/15">
					<div className="container">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="max-w-3xl mx-auto text-center border border-white/15 rounded-2xl p-12 md:p-16 bg-gradient-to-br from-white/5 to-transparent"
						>
							<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">
								Ready to Work Together?
							</h2>
							<p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
								Let&apos;s discuss how we can help bring your vision to life and create something extraordinary together.
							</p>
							<a href="/contact">
								<Button>Get in Touch</Button>
							</a>
						</motion.div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default About;
