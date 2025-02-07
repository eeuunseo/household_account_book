import ExpensesTable from "../components/expenses-table";
import IncomeTable from "../components/income-table";
import style from "./main-table.module.css";

export default function MainTable({ yyyy, m }: { yyyy: string; m: string }) {
  return (
    <div className={style.container}>
      <div className={style.incomeTable}>
        <span>{m}월의 소득</span>
        <IncomeTable yyyy={yyyy} m={m} />
      </div>
      <div className={style.expensesTable}>
        <span>{m}월의 지출</span>
        <ExpensesTable yyyy={yyyy} m={m} />
      </div>
    </div>
  );
}
