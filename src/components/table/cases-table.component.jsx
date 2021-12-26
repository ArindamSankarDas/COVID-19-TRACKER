import React from "react";
import numeral from "numeral";

import { connect } from "react-redux";
import { CountriesTable } from "./cases-table.styles";

const CountriesCasesTable = ({ countriesData }) => {
  return (
    <CountriesTable>
      {countriesData.map(({ countryName, countryCases }) => (
        <tr>
          <td>{countryName}</td>
          <td>
            <strong>{numeral(countryCases).format("0,0")}</strong>
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
