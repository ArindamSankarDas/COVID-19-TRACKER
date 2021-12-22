import React from "react";

import { connect } from "react-redux";
import { CountriesTable } from "./cases-table.styles";

const CountriesCasesTable = ({ countriesData }) => {
  return (
    <CountriesTable>
      {countriesData.map(({ countryName, countryCases }) => (
        <tr>
          <td>{countryName}</td>
          <td>
            <strong>{countryCases}</strong>
          </td>
        </tr>
      ))}
    </CountriesTable>
  );
};
const mapStateToProps = ({ countriesTableData }) => ({
  countriesData: countriesTableData.tableData,
});

export default connect(mapStateToProps)(CountriesCasesTable);
