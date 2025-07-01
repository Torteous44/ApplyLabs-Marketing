import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import LanguageProviderWrapper from "./LanguageProviderWrapper";
import { StructuredData } from "@/components/SEO/StructuredData";
import { ModalProvider } from "@/lib/modal-context";
import { GlobalModal } from "@/components/GlobalModal";

const geist = Geist({
	subsets: ["latin"],
	weight: ["100", "400", "700"],
	display: "swap",
	variable: "--font-geist-sans",
});

export const metadata: Metadata = {
	title: {
		default: "ApplyLabs - Transform Your Job Search",
		template: "%s | ApplyLabs",
	},
	description:
		"ApplyLabs applies, optimizes, and tracks—while you plan your next move. Auto-apply to jobs, AI-optimized resumes, and real-time tracking dashboard.",
	keywords: [
		"job search",
		"auto apply",
		"resume optimization",
		"AI resume",
		"job application",
		"career tools",
		"ATS optimization",
		"cover letter AI",
		"job tracking",
		"career dashboard",
	],
	authors: [{ name: "ApplyLabs" }],
	creator: "ApplyLabs",
	publisher: "ApplyLabs",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://applylabs.com"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://applylabs.com",
		siteName: "ApplyLabs",
		title: "ApplyLabs - Transform Your Job Search",
		description:
			"ApplyLabs applies, optimizes, and tracks—while you plan your next move. Auto-apply to jobs, AI-optimized resumes, and real-time tracking dashboard.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "ApplyLabs - Job Search Automation Platform",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "ApplyLabs - Transform Your Job Search",
		description:
			"ApplyLabs applies, optimizes, and tracks—while you plan your next move. Auto-apply to jobs, AI-optimized resumes, and real-time tracking dashboard.",
		images: ["/og-image.png"],
		creator: "@applylabs",
		site: "@applylabs",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code",
		yandex: "your-yandex-verification-code",
		yahoo: "your-yahoo-verification-code",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${geist.variable} ${geist.className}`}>
			<head>
				<StructuredData />
			</head>
			<body>
				<ModalProvider>
					<LanguageProviderWrapper>
						{children}
						<GlobalModal />
					</LanguageProviderWrapper>
				</ModalProvider>
			</body>
		</html>
	);
}
