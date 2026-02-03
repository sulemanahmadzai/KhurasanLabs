import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - RahnorLabs",
  description:
    "Comprehensive digital solutions: Web Development, UI/UX Design, App Development, and AI Solutions. Transform your business with RahnorLabs.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
