'use client';

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { motion } from "framer-motion";
import starsBg from "@/public/imgs/stars.png";

const services = [
    {
        id: 1,
        title: "Web Development",
        icon: "/lottie/vroom.lottie",
        description: "Build powerful, scalable web applications that drive your business forward.",
        features: [
            "Custom full-stack development",
            "React, Next.js, Node.js expertise",
            "Responsive & mobile-first design",
            "API integration & optimization",
            "Performance & SEO optimization",
            "Cloud deployment & DevOps"
        ],
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        id: 2,
        title: "UI/UX Design",
        icon: "/lottie/click.lottie",
        description: "Create intuitive, beautiful interfaces that users love and remember.",
        features: [
            "User research & strategy",
            "Wireframing & prototyping",
            "Visual design & branding",
            "Interaction design",
            "Design systems & style guides",
            "Usability testing & iteration"
        ],
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        id: 3,
        title: "App Development",
        icon: "/lottie/stars.lottie",
        description: "Native and cross-platform mobile apps that deliver exceptional experiences.",
        features: [
            "iOS & Android native apps",
            "React Native & Flutter",
            "App store optimization",
            "Push notifications & analytics",
            "Backend integration",
            "Maintenance & updates"
        ],
        color: "from-indigo-500/20 to-purple-500/20"
    },
    {
        id: 4,
        title: "AI Solutions",
        icon: "/lottie/stars.lottie",
        description: "Leverage artificial intelligence to automate processes and enhance user experiences.",
        features: [
            "AI/ML integration",
            "Chatbots & virtual assistants",
            "Predictive analytics",
            "Natural language processing",
            "Computer vision solutions",
            "Custom AI model development"
        ],
        color: "from-cyan-500/20 to-blue-500/20"
    }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative border border-white/15 rounded-xl p-8 bg-gradient-to-br from-white/5 to-transparent hover:border-white/30 transition-all duration-300"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300`} />
            <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 border border-white/15 rounded-lg flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                        <DotLottiePlayer
                            src={service.icon}
                            className="h-8 w-8"
                            autoplay={isHovered}
                            loop
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-white/70">{service.description}</p>
                    </div>
                </div>
                <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                            <span className="text-purple-400 mt-1 flex-shrink-0">✓</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
                    <div 
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `url(${starsBg.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.3)_15%,rgb(14,0,36,.5)_78%,transparent)]" />
                    <div className="relative container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-6 bg-white bg-[radial-gradient(100%_100%_at_top_left,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
                                Our Services
                            </h1>
                            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-8">
                                Comprehensive digital solutions tailored to your business needs. 
                                From concept to deployment, we&apos;ve got you covered.
                            </p>
                            <a href="/contact">
                                <Button>Get Started</Button>
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 md:py-24">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-6xl mx-auto"
                        >
                            <h2 className="text-4xl md:text-5xl font-medium text-center tracking-tighter mb-4">
                                What We Offer
                            </h2>
                            <p className="text-white/70 text-lg text-center mb-12 max-w-2xl mx-auto">
                                Explore our comprehensive range of digital services designed to transform your business
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {services.map((service, index) => (
                                    <ServiceCard key={service.id} service={service} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 md:py-24 border-t border-white/15">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-12"
                            >
                                <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4">
                                    Our Process
                                </h2>
                                <p className="text-white/70 text-lg">
                                    A streamlined approach to delivering exceptional results
                                </p>
                            </motion.div>
                            <div className="grid md:grid-cols-4 gap-6">
                                {[
                                    { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
                                    { step: "02", title: "Planning", desc: "Strategic roadmap and architecture design" },
                                    { step: "03", title: "Development", desc: "Agile development with regular updates" },
                                    { step: "04", title: "Launch", desc: "Deployment, testing, and ongoing support" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className="text-4xl font-bold text-purple-400 mb-3">{item.step}</div>
                                        <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                                        <p className="text-white/70 text-sm">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 md:py-24">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto text-center border border-white/15 rounded-xl p-12 md:p-16 bg-gradient-to-br from-white/5 to-transparent"
                        >
                            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                                Let&apos;s discuss how we can help bring your vision to life with our expert team and proven methodologies.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/contact">
                                    <Button>Get in Touch</Button>
                                </a>
                                <a href="/about">
                                    <button className="px-6 py-2 border border-white/20 rounded-lg hover:border-white/40 transition">
                                        Learn More
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Services;
