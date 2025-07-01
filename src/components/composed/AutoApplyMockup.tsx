"use client";

import React, { useState, useEffect } from "react";
import { motion, easeOut, easeInOut } from "motion/react";
import { Button } from "../ui/button/Button";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	coverLetter: "",
};

const demoData = {
	firstName: "Jane",
	lastName: "Doe",
	email: "jane.doe@email.com",
	phone: "+1 555 123 4567",
	coverLetter:
		"I am excited to apply for this position! I believe my skills and experience make me a great fit.",
};

const AutoApplyIcon = (
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

// Custom hook for typewriter effect
const useTypewriter = (text: string, isActive: boolean, speed: number = 50) => {
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (!isActive) {
			setDisplayText("");
			setCurrentIndex(0);
			return;
		}

		if (currentIndex < text.length) {
			const timer = setTimeout(() => {
				setDisplayText(text.slice(0, currentIndex + 1));
				setCurrentIndex(currentIndex + 1);
			}, speed);

			return () => clearTimeout(timer);
		}
	}, [text, isActive, currentIndex, speed]);

	return displayText;
};

export default function AutoApplyMockup() {
	const [fields, setFields] = useState(initialState);
	const [animating, setAnimating] = useState(false);
	const [animationStep, setAnimationStep] = useState(0);
	const [typewriterActive, setTypewriterActive] = useState<{
		[key: string]: boolean;
	}>({});

	const handleAutoApply = () => {
		setAnimating(true);
		setAnimationStep(0);
		setTypewriterActive({});

		// Staggered animation sequence
		const animationSequence = [
			{ firstName: demoData.firstName },
			{ lastName: demoData.lastName },
			{ email: demoData.email },
			{ phone: demoData.phone },
			{ coverLetter: demoData.coverLetter },
		];

		animationSequence.forEach((step, index) => {
			setTimeout(
				() => {
					setFields((prev) => ({ ...prev, ...step }));
					setAnimationStep(index + 1);

					// Activate typewriter for the current field
					const fieldKey = Object.keys(step)[0];
					setTypewriterActive((prev) => ({ ...prev, [fieldKey]: true }));
				},
				200 * (index + 1),
			);
		});

		// Complete animation
		setTimeout(
			() => {
				setAnimating(false);
				setAnimationStep(0);
				setTypewriterActive({});
			},
			200 * animationSequence.length + 2000,
		); // Extended time for typewriter effect
	};

	const containerVariants = {
		hidden: { opacity: 1 },
		animating: { opacity: 1 },
	};

	const fieldVariants = {
		empty: {
			backgroundColor: "rgba(255, 255, 255, 0)",
			borderColor: "rgba(0, 0, 0, 1)",
			scale: 1,
		},
		filling: {
			backgroundColor: "rgba(255, 255, 255, 1)",
			borderColor: "var(--color-brandBlue)",
			transition: {
				duration: 0.3,
				ease: easeOut,
			},
		},
		filled: {
			backgroundColor: "rgba(255, 255, 255, 1)",
			borderColor: "rgba(0, 0, 0, 1)",
			scale: 1,
			transition: {
				duration: 0.2,
				ease: easeInOut,
			},
		},
	};

	const getFieldState = (fieldIndex: number) => {
		if (!animating) return "empty";
		if (animationStep > fieldIndex) return "filled";
		if (animationStep === fieldIndex) return "filling";
		return "empty";
	};

	// Typewriter text for each field
	const typewriterFirstName = useTypewriter(
		demoData.firstName,
		typewriterActive.firstName || false,
		10,
	);
	const typewriterLastName = useTypewriter(
		demoData.lastName,
		typewriterActive.lastName || false,
		10,
	);
	const typewriterEmail = useTypewriter(
		demoData.email,
		typewriterActive.email || false,
		10,
	);
	const typewriterPhone = useTypewriter(
		demoData.phone,
		typewriterActive.phone || false,
		10,
	);
	const typewriterCoverLetter = useTypewriter(
		demoData.coverLetter,
		typewriterActive.coverLetter || false,
		5,
	);

	return (
		<motion.form
			className="w-full h-full max-w-full max-h-full flex flex-col p-1 md:p-3"
			style={{ minHeight: 0 }}
			variants={containerVariants}
			initial="hidden"
			animate={animating ? "animating" : "hidden"}
		>
			{/* Title */}
			<div className="text-left text-base md:text-2xl font-medium mb-2">
				Application
			</div>
			<div className="flex-1 flex flex-col gap-2 overflow-y-auto min-h-0">
				<div className="flex flex-col md:flex-row gap-2">
					<div className="flex-1 min-w-0">
						<label className="block text-sm md:text-base font-medium mb-0.5">
							Name
						</label>
						<div className="flex gap-1 md:gap-2">
							<div className="flex-1 min-w-0">
								<motion.input
									type="text"
									placeholder="First name"
									value={
										typewriterActive.firstName
											? typewriterFirstName
											: fields.firstName
									}
									readOnly
									className="w-full border rounded-lg px-2 py-1 text-xs md:text-sm"
									variants={fieldVariants}
									animate={getFieldState(0)}
									style={{ borderWidth: "1px" }}
								/>
								<div className="text-[10px] text-black/70 mt-0.5">
									First name
								</div>
							</div>
							<div className="flex-1 min-w-0">
								<motion.input
									type="text"
									placeholder="Last name"
									value={
										typewriterActive.lastName
											? typewriterLastName
											: fields.lastName
									}
									readOnly
									className="w-full border rounded-lg px-2 py-1 text-xs md:text-sm"
									variants={fieldVariants}
									animate={getFieldState(1)}
									style={{ borderWidth: "1px" }}
								/>
								<div className="text-[10px] text-black/70 mt-0.5">
									Last name
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-2">
					<div className="flex-1 min-w-0">
						<label className="block text-sm md:text-base font-medium mb-0.5">
							E-mail
						</label>
						<motion.input
							type="email"
							placeholder="E-mail"
							value={typewriterActive.email ? typewriterEmail : fields.email}
							readOnly
							className="w-full border rounded-lg px-2 py-1 text-xs md:text-sm"
							variants={fieldVariants}
							animate={getFieldState(2)}
							style={{ borderWidth: "1px" }}
						/>
					</div>
					<div className="flex-1 min-w-0">
						<label className="block text-sm md:text-base font-medium mb-0.5">
							Phone number
						</label>
						<motion.input
							type="tel"
							placeholder="Phone number"
							value={typewriterActive.phone ? typewriterPhone : fields.phone}
							readOnly
							className="w-full border rounded-lg px-2 py-1 text-xs md:text-sm"
							variants={fieldVariants}
							animate={getFieldState(3)}
							style={{ borderWidth: "1px" }}
						/>
					</div>
				</div>
				<div>
					<label className="block text-sm md:text-base font-medium mb-0.5">
						Cover letter
					</label>
					<motion.textarea
						placeholder="Cover letter"
						value={
							typewriterActive.coverLetter
								? typewriterCoverLetter
								: fields.coverLetter
						}
						readOnly
						rows={3}
						className="w-full border rounded-lg px-2 py-1 text-xs md:text-sm resize-none"
						variants={fieldVariants}
						animate={getFieldState(4)}
						style={{ borderWidth: "1px", minHeight: 48, maxHeight: 64 }}
					/>
				</div>
			</div>
			<div className="flex justify-end pt-1">
				<Button
					type="button"
					onClick={handleAutoApply}
					disabled={animating}
					iconLeft={AutoApplyIcon}
					size="sm"
				>
					AutoApply
				</Button>
			</div>
		</motion.form>
	);
}
