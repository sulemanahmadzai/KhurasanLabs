import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "KhurasanLabs - AI, Web, UI/UX & App Development",
	description: "Transform your ideas into exceptional digital experiences. Expert web development, UI/UX design, mobile apps, and AI solutions.",
	metadataBase: new URL('https://khurasanlabs.com'),
	icons: {
		icon: '/imgs/logo-khurasan.svg',
		shortcut: '/imgs/logo-khurasan.svg',
		apple: '/imgs/logo-khurasan.svg',
	},
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="pt-BR">
			<body
				className={twMerge(inter.className, "bg-black text-white antialiased")}
			>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;