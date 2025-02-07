"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface IModalContext {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalContext | null>(null);

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const onClickButton = () => {
    setModalOpen(true);
    router.push("/search", { scroll: false });
  };

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      <button onClick={onClickButton} className="common_button">
        📅 특정 연월 선택
      </button>
      {children}
    </ModalContext.Provider>
  );
}
