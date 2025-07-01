"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/button/Button";
import Markdown from "markdown-to-jsx";

const before = [
	"**Sales Representative**",
	"Responsible for managing client relationships and achieving sales targets",
	"Worked with engineering team to understand product features",
	"Improved customer onboarding processes and documentation",
	"Handled customer support inquiries and resolved technical issues",
];

const after = [
	"**Senior Sales Representative**",
	"Exceeded annual sales target by **34%**, generating **$2.4M** in revenue across **150+** enterprise clients",
	"Partnered with an **8-person** engineering squad to ship **3 major features**, resulting in **45%** increase in customer retention",
	"Streamlined onboarding process, cutting time-to-productivity by **45%** and reducing support tickets by **60%**",
	"Resolved **200+** complex technical issues with **98%** customer satisfaction rate, maintaining **4.9/5** average rating",
];

const SparkleIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-5 h-5"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
		/>
	</svg>
);

export default function ResumeOptimizerMockup() {
	const [phase, setPhase] = useState<"before" | "after">("before");
	const lines = phase === "before" ? before : after;

	const togglePhase = () => {
		setPhase(phase === "before" ? "after" : "before");
	};

	return (
		<div className="relative h-full w-full flex flex-col p-1 md:p-3">
			{/* Absolutely positioned button at the top right */}
			<Button
				type="button"
				onClick={togglePhase}
				iconLeft={SparkleIcon}
				size="sm"
				className="absolute top-3 right-3 z-10"
			>
				Optimise
			</Button>

			{/* Resume Header */}
			<div className="mb-3">
				<div className="text-lg md:text-xl font-bold mb-1">Jane Doe</div>
				<div className="text-xs md:text-sm text-black/70 mb-1">
					jane.doe@email.com • +1 555 123 4567
				</div>
			</div>

			{/* Resume Section */}
			<div className="mb-3">
				<div className="text-sm md:text-base font-normal mb-2 border-b border-black/20 pb-1">
					Professional Experience
				</div>
				<div className="mb-2">
					<div className="text-xs md:text-sm font-medium">
						TechCorp Inc. | 2021 - Present
					</div>
				</div>
			</div>

			{/* Animated text block */}
			<div className="flex-1 min-h-0 space-y-1 md:space-y-2 text-xs md:text-sm leading-snug overflow-y-auto pr-1 pb-8">
				<AnimatePresence mode="popLayout">
					{lines.map((text, idx) => (
						<motion.div
							key={idx + phase}
							layoutId={`line-${idx}`}
							initial={{ opacity: 0, y: 6 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -6 }}
							transition={{ duration: 0.35 }}
							className={`rounded-md px-2 py-[2px] ${
								phase === "after" ? "bg-[var(--color-brandBlue)]/10" : ""
							}`}
						>
							<Markdown
								options={{
									forceBlock: true,
									overrides: {
										strong: {
											props: {
												className: "font-semibold text-black",
											},
										},
									},
								}}
							>
								{text}
							</Markdown>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
}
