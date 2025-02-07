"use client";

import React, { Dispatch, SetStateAction, useEffect } from "react";
import style from "./modal.module.css";

export default function Modal({
  modalOpen,
  setModalOpen,
  children,
}: {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  return (
    <>
      {modalOpen && (
        <div
          onClick={() => {
            setModalOpen(false);
          }}
          className={style.modal}
        >
          {children}
        </div>
      )}
    </>
  );
}
