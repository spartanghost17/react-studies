import { useState } from "react";
import { formatter } from "../util/investment";
export default function Table({ data }) {
  return (
    <table id="result">
      <thead>
        <tr className="center">
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({ year, interest, valueEndOfYear, annualInvestment }, idx) => (
            <tr key={`row_data_${idx}`}>
              <td>{year}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(annualInvestment)}</td>
              <td>{formatter.format(interest)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
