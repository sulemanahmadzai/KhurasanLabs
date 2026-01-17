import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us - KhurasanLabs",
	description: "Get in touch with KhurasanLabs. Contact us for AI, web development, UI/UX design, and mobile app services.",
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
