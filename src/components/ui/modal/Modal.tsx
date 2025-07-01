"use client";

import React from "react";
import { X } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
	const t = useTranslation();

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-black/50 backdrop-blur-sm"
				onClick={onClose}
			/>

			{/* Modal */}
			<div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8">
				{/* Close button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
				>
					<X className="w-5 h-5" />
				</button>

				{/* Logo */}
				<div className="flex justify-center mb-6">
					<img src="/Logo.svg" alt="ApplyLab" className="h-12" />
				</div>

				{/* Content */}
				<div className="text-center">
					<h2 className="text-2xl font-normal text-black mb-4">
						{t("comingSoonTitle")}
					</h2>
					<p className="text-gray-600 mb-6 leading-relaxed">
						{t("comingSoonDescription")}
					</p>

					{/* CTA Button */}
					<button
						onClick={onClose}
						className="w-full bg-[var(--color-brandBlue)] text-white font-medium py-3 px-6 rounded-full hover:bg-[var(--color-brandBlue)]/90 transition-colors cursor-pointer"
					>
						{t("gotIt")}
					</button>
				</div>
			</div>
		</div>
	);
}
