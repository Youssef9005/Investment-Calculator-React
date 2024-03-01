import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ user }) {
  const resultData = calculateInvestmentResults(user);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>
            Interest <span>(Year)</span>
          </th>
          <th>Total Interest</th>
          <th>Invested Copital</th>
        </tr>
      </thead>

      <tbody>
        {resultData.map(data => { 
          const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
          return (
            <tr>
              <td>{data.year < 10 ? `0${data.year}` : data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(data.valueEndOfYear - totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
