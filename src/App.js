import React from "react";
import Map from "./components/map/map.component";
import Header from "./components/header/header.component";
import InfoBoxList from "./components/info-box-list/info-box-list.component.jsx";
import CountryCasesTable from "./components/table/cases-table.component";

import "./App.css";
import { Card, CardContent } from "@material-ui/core";
import CasesGraph from "./components/graph/cases-graph.component";

import { connect } from "react-redux";
import {
  setCountriesArray,
  setCountryInfo,
} from "./redux/countries/countries.actions";
import { setTableData } from "./redux/countries-table/countries-table.actions";
import { setGraphData } from "./redux/cases-graph/cases-graph.actions";

class App extends React.Component {
  fetchCountriesData = async () => {
    const url = await fetch(`https://disease.sh/v3/covid-19/countries`);
    const response = await url.json();

    const countriesMapData = response.map((country) => ({
      countryName: country.country,
      countryCode: country.countryInfo.iso2,
    }));

    return this.props.setCountriesArray(countriesMapData);
  };

  fetchCountryInfo = async () => {
    const url = await fetch("https://disease.sh/v3/covid-19/all");
    const response = await url.json();

    return this.props.setCountryInfo(response);
  };

  fetchCountriesTableData = async () => {
    const url = await fetch(`https://disease.sh/v3/covid-19/countries`);
    const response = await url.json();

    const countriesTableMapData = response.map((country) => ({
      countryName: country.country,
      countryCases: country.active,
    }));

    return this.props.setTableData(countriesTableMapData);
  };

  fetchGraphData = async () => {
    const url = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    const response = await url.json();

    return this.props.setGraphData(response);
  };

  componentDidMount() {
    this.fetchCountriesData();
    this.fetchCountryInfo();
    this.fetchCountriesTableData();
    this.fetchGraphData();
  }

  render() {
    const { countries } = this.props;
    return (
      <div className="app">
        <div className="cases_and_map_Container">
          {/* Header */}
          <Header countriesData={countries} />

          {/*  Info-Boxes List */}
          <InfoBoxList />

          {/* Map */}
          <Map />
        </div>

        <Card className="table_and_charts_Container">
          <CardContent>
            <h3>Live cases by country</h3>
            {/* Country Table */}
            <CountryCasesTable />
            {/* Graph */}
            <CasesGraph />
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapSateToProps = ({ countryData }) => ({
  countries: countryData.countries,
});

const mapDispatchToProps = (dispatch) => ({
  setCountriesArray: (countriesArr) =>
    dispatch(setCountriesArray(countriesArr)),
  setCountryInfo: (countryInfo) => dispatch(setCountryInfo(countryInfo)),
  setTableData: (countriesTableData) =>
    dispatch(setTableData(countriesTableData)),
  setGraphData: (graphData) => dispatch(setGraphData(graphData)),
});

export default connect(mapSateToProps, mapDispatchToProps)(App);
