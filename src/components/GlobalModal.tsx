"use client";

import { useModal } from "@/lib/modal-context";
import { Modal } from "@/components/ui";

export function GlobalModal() {
	const { isModalOpen, closeModal } = useModal();
	return <Modal isOpen={isModalOpen} onClose={closeModal} />;
}
