import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Services - KhurasanLabs",
	description: "Comprehensive digital solutions: Web Development, UI/UX Design, App Development, and AI Solutions. Transform your business with KhurasanLabs.",
};

export default function ServicesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
