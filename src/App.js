import React from "react";
import Map from "./components/map/map.component";
import Header from "./components/header/header.component";
import CasesGraph from "./components/graph/cases-graph.component";
import CountryCasesTable from "./components/table/cases-table.component";
import InfoBoxList from "./components/info-box-list/info-box-list.component.jsx";

import "./App.css";
import { Card, CardContent } from "@material-ui/core";

import { connect } from "react-redux";
import {
  setCountriesArray,
  setCountryInfo,
} from "./redux/countries/countries.actions";
import { setTableData } from "./redux/countries-table/countries-table.actions";
import { setGraphData } from "./redux/cases-graph/cases-graph.actions";
import { setMapCountries } from "./redux/map/map.actions";

class App extends React.Component {
  fetchCountriesData = async () => {
    const url = await fetch(`https://disease.sh/v3/covid-19/countries`);
    const response = await url.json();

    this.props.setMapCountries(response);

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
      "https://disease.sh/v3/covid-19/historical/all?lastdays=120"
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
            <h3>Worldwide COVID-19 Cases</h3>
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
  setMapCountries: (mapCountries) => dispatch(setMapCountries(mapCountries)),
});

export default connect(mapSateToProps, mapDispatchToProps)(App);
