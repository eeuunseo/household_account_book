"use client";

import style from "./layout.module.css";
import "./globals.css";
import Link from "next/link";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
interface IModalContext {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalContext | null>(null);

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onClickButton = () => {
    setModalOpen(true);
    router.push("/search", { scroll: false });
  };

  return (
    <html lang="ko">
      <body>
        <div className={style.container}>
          <header>
            <Link className={"title"} href={"/"}>
              🧾 요미네 가계부
            </Link>
            <span>
              ↓ 아래 버튼을 눌러 지난 소득 및 지출 기록을 조회할 수 있습니다.
            </span>
            <button onClick={onClickButton} className={"common_button"}>
              📅 특정 연월 선택
            </button>
          </header>
          <main>{children}</main>
          <footer>made by @eeuunseo</footer>
        </div>
        <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
          {modal}
        </ModalContext.Provider>
      </body>
    </html>
  );
}
