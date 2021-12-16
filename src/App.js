import React from "react";
import Map from "./components/map/map.component";
import Header from "./components/header/header.component";
import InfoBoxList from "./components/info-box-list/info-box-list.component.jsx";
import CountryCasesTable from "./components/country-cases-table/country-cases-table.component";

import "./App.css";
import { connect } from "react-redux";
import {
  setCountriesArray,
  setCountryInfo,
} from "./redux/countries/countries.actions";
import { Card, CardContent } from "@material-ui/core";

class App extends React.Component {
  fetchData = async () => {
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

  componentDidMount() {
    this.fetchData();
    this.fetchCountryInfo();
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
            {/* Country Table */}
            <CountryCasesTable />
            {/* Graph */}
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
});

export default connect(mapSateToProps, mapDispatchToProps)(App);
