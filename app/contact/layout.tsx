import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us - RAHNOR LABS",
	description: "Get in touch with RAHNOR LABS. Contact us for AI, web development, UI/UX design, and mobile app services.",
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
