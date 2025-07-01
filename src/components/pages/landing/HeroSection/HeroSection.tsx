"use client";

import { Button } from "@/components/ui";
import { Section } from "@/components/layout";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";
import { useModal } from "@/lib/modal-context";

export interface HeroSectionProps {
	className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
	const t = useTranslation();
	const { openModal } = useModal();

	return (
		<Section
			variant="hero"
			size="xl"
			container={false}
			className={cn("", className)}
		>
			<div className="text-center max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-14 md:pt-24 lg:pt-22">
				{/* Main Headline */}
				<h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-black mb-6">
					{t("transformJobSearch")}
				</h1>

				{/* Subheadline */}
				<p className="text-md md:text-lg lg:text-xl text-textGreyStrong leading-relaxed mb-8 max-w-3xl mx-auto">
					{t("applyLabsDescription")}
				</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
					<Button size="lg" className="w-full sm:w-auto" onClick={openModal}>
						{t("signUp")}
					</Button>
					<Button variant="secondary" size="lg" className="w-full sm:w-auto">
						{t("learnMore")}
					</Button>
				</div>
			</div>
		</Section>
	);
};

export { HeroSection };
