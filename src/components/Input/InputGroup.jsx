import Input from "./Input";

export default function InputGroup({
  onChange,
  currData: { initialInvestment, annualInvestment, expectedReturn, duration },
}) {
  return (
    <>
      <div className="input-group">
        <div>
          <Input field={{ initialInvestment }} onChange={onChange}>
            Initial investment
          </Input>
          <Input field={{ expectedReturn }} onChange={onChange}>
            Expected return
          </Input>
        </div>
        <div>
          <Input field={{ annualInvestment }} onChange={onChange}>
            Annual investment
          </Input>
          <Input field={{ duration }} onChange={onChange}>
            Duration
          </Input>
        </div>
      </div>
    </>
  );
}
