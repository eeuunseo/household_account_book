"use client";

import SearchBar from "@/components/search-bar";
import Modal from "@/components/modal";
import { useContext } from "react";
import { ModalContext } from "@/app/layout";

export default function Page() {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error("ModalContext Error.");
  }

  const { modalOpen, setModalOpen } = modalContext;

  return (
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <SearchBar setModalOpen={setModalOpen} />
    </Modal>
  );
}
