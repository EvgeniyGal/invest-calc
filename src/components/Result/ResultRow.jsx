import { formatter } from "../../util/investment";

export default function ResultRow({
  RowType,
  data: { year, interest, valueEndOfYear, annualInvestment } = {},
  initialInvestment,
}) {
  let row;

  if (RowType === "th") {
    row = (
      <tr>
        <RowType>Year</RowType>
        <RowType>Investment Value</RowType>
        <RowType>Interest (Year)</RowType>
        <RowType>Total Interest</RowType>
        <RowType>Invested Capital</RowType>
      </tr>
    );
  } else {
    row = (
      <tr>
        <RowType>{year}</RowType>
        <RowType>{formatter.format(valueEndOfYear)}</RowType>
        <RowType>{formatter.format(interest)}</RowType>
        <RowType>
          {formatter.format(
            valueEndOfYear - initialInvestment - year * annualInvestment
          )}
        </RowType>
        <RowType>
          {formatter.format(initialInvestment + year * annualInvestment)}
        </RowType>
      </tr>
    );
  }

  return row;
}
