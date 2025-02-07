export default function IncomeTableData({
  id,
  item,
  amount,
  tag,
  fixed,
}: {
  id: number;
  item: string;
  amount: number;
  tag: string;
  fixed: string;
}) {
  return (
    <tr>
      <td>{item}</td>
      <td>{amount.toLocaleString("ko-KR")}</td>
      <td>{tag}</td>
      <td>
        {fixed === "Y" ? (
          <button className={"fixed_button"}>고정</button>
        ) : (
          <button className={"variation_button"}>변동</button>
        )}
      </td>
    </tr>
  );
}
