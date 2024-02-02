import ResultRow from "./ResultRow";

export default function Result({ data }) {
  let initialInvestment = 0;
  if (data.length > 0) {
    initialInvestment =
      data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
  }

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
