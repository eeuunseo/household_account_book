import React from "react";
import MainTable from "@/components/main-table";

export default async function Page({
  params,
}: {
  params: Promise<{ yyyy: string; m: string }>;
}) {
  const { yyyy, m } = await params;

  if (!yyyy || !m) {
    throw new Error("searchParams Error.");
  }

  return <MainTable yyyy={yyyy.toString()} m={m.toString()} />;
}
