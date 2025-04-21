import { useState } from "react";

import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import Table from "./components/Table";
import { calculateInvestmentResults } from "./util/investment.js";

const LABELS = {
  section1: [
    {
      id: 1,
      label: "INITIAL INVESTMENT",
      value: 0,
    },
    {
      id: 2,
      label: "ANNUAL INVESTMENT",
      value: 0,
    },
  ],
  section2: [
    {
      id: 3,
      label: "EXPECTED RETURN",
      value: 0,
    },
    {
      id: 4,
      label: "DURATION",
      value: 0,
    },
  ],
};

function App() {
  const [tableData, setTableData] = useState([]);
  const [labels, setLabels] = useState(LABELS);

  const handleInputChange = (event, sectionKey, labelId) => {
    if (event.target.value) {
      setLabels((prevLabels) => {
        const updateSection = prevLabels[sectionKey].map((labelObj) =>
          labelObj.id === labelId ? { ...labelObj, value: 0 } : labelObj
        );
        console.log(
          `updated for id ${labelId} with value ${event.target.value}`
        );
        return {
          ...prevLabels,
          [sectionKey]: updateSection,
        };
      });
    }

    setTableData(
      calculateInvestmentResults({
        initialInvestment: labels["section1"][0].value,
        annualInvestment: labels["section1"][1].value,
        expectedReturn: labels["section2"][0].value,
        duration: labels["section1"][1].value,
      })
    );
  };

  return (
    <>
      <Header />
      {Object.entries(labels).map(([sectionKey, labels], idx) => (
        <InputGroup
          handleInputChange={handleInputChange}
          key={sectionKey}
          sectionKey={sectionKey}
          labels={labels}
        />
      ))}
      <Table data={tableData} />
    </>
  );
}

export default App;
