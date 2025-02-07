import MainTable from "@/components/main-table";
import { Metadata } from "next";

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

export const metadata: Metadata = {
  title: "요미네 가계부",
  description: "요미네 프라이빗 가계부",
};

export default async function Home() {
  return <MainTable yyyy={String(currentYear)} m={String(currentMonth)} />;
}
