"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import style from "./search-bar.module.css";
import { useRouter } from "next/navigation";

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

export default function Page({
  setModalOpen,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const onChangeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(e.target.value));
  };

  const onChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(Number(e.target.value));
  };

  const onClickButton = () => {
    setModalOpen(false);
    router.push(`/search/${selectedYear}/${selectedMonth}`);
  };

  return (
    <div
      className={style.container}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <section>
        <div>
          <select
            className={"common_selectbox"}
            value={selectedYear}
            onChange={onChangeYear}
          >
            {[...Array(5)].map((_, idx) => {
              const year = currentYear - idx;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
          년
        </div>
        <div>
          <select
            className={"common_selectbox"}
            value={selectedMonth}
            onChange={onChangeMonth}
          >
            {[...Array(12)].map((_, idx) => {
              const month = idx + 1;
              return (
                <option key={month} value={month}>
                  {month}
                </option>
              );
            })}
          </select>
          월
        </div>
        <div>
          <button onClick={onClickButton} className={"select_button"}>
            조회
          </button>
        </div>
      </section>
    </div>
  );
}
