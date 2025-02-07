import style from "./layout.module.css";
import "./globals.css";
import Link from "next/link";
import ModalProvider from "@/components/modalProvider";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
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
          </header>
          <main>{children}</main>
          <footer>made by @eeuunseo</footer>
        </div>
        <ModalProvider>{modal}</ModalProvider>
      </body>
    </html>
  );
}
