import style from "./table.module.css";
import IncomeTableData from "./table-data";
import Link from "next/link";

const IncomeData = async ({ yyyy, m }: { yyyy: string; m: string }) => {
  const res = await fetch("http://localhost:3000/api/income", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      yyyy: yyyy,
      m: m,
    }),
  });

  if (!res.ok) {
    throw new Error(`IncomeData Failed: ${res.statusText}`);
  }

  const incomeData: {
    id: number;
    item: string;
    amount: number;
    tag: string;
    fixed: string;
    totalamount: number;
  }[] = await res.json();

  return (
    <tbody>
      {incomeData.map((income) => (
        <IncomeTableData key={`income-${income.id}`} {...income} />
      ))}
      <tr>
        <td></td>
        <td>
          {incomeData.length > 0
            ? incomeData[0].totalamount.toLocaleString("ko-KR")
            : ""}
        </td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  );
};

export default function IncomeTable({ yyyy, m }: { yyyy: string; m: string }) {
  return (
    <div className={style.container}>
      <div className={style.table_container}>
        <table>
          <thead>
            <tr>
              <td>항목</td>
              <td>금액</td>
              <td>태그</td>
              <td>고정여부</td>
            </tr>
          </thead>
          <IncomeData yyyy={yyyy} m={m} />
        </table>
      </div>
      <div className={style.button_container}>
        <button className={"common_button"}>➕ 항목 추가</button>
      </div>
    </div>
  );
}
