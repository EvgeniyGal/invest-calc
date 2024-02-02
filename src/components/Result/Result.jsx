import ResultRow from "./ResultRow";

export default function Result({ data, initialInvestment }) {
  return (
    <table id="result">
      <thead>
        <ResultRow RowType="th" />
      </thead>
      <tbody>
        {data.map((el) => (
          <ResultRow
            key={el.year}
            RowType="td"
            data={el}
            initialInvestment={initialInvestment}
          />
        ))}
      </tbody>
    </table>
  );
}
