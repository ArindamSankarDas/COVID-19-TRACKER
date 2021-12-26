import React from "react";
import InfoBox from "../info-box/info-box.component";

import { CovidStats } from "./info-box-list.styles";
import { connect } from "react-redux";
import { prettyPrintData } from "./info-box-list.utils";
import {
  setMapCirclesCases,
  setMapCirclesDeaths,
  setMapCirclesRecovered,
} from "../../redux/map-circles/map-circle.actions";

const InfoBoxList = ({
  countryInfo,
  setMapCirclesDeaths,
  setMapCirclesRecovered,
  setMapCirclesCases,
}) => {
  return (
    <CovidStats>
      <InfoBox
        key={1}
        onClick={() => setMapCirclesCases("cases")}
        title="Coronavirus Cases"
        cases={prettyPrintData(countryInfo.todayCases)}
        total={prettyPrintData(countryInfo.cases)}
      />
      <InfoBox
        key={2}
        onClick={() => setMapCirclesRecovered("recovered")}
        title="Recovered"
        cases={prettyPrintData(countryInfo.todayRecovered)}
        total={prettyPrintData(countryInfo.recovered)}
      />
      <InfoBox
        key={3}
        onClick={() => setMapCirclesDeaths("deaths")}
        title="Deaths"
        cases={prettyPrintData(countryInfo.todayDeaths)}
        total={prettyPrintData(countryInfo.deaths)}
      />
    </CovidStats>
  );
};

const mapStateToProps = ({ countryData }) => ({
  countryInfo: countryData.countryInfo,
});

const mapDispatchToProps = (dispatch) => ({
  setMapCirclesRecovered: (recovered) =>
    dispatch(setMapCirclesRecovered(recovered)),
  setMapCirclesDeaths: (deaths) => dispatch(setMapCirclesDeaths(deaths)),
  setMapCirclesCases: (cases) => dispatch(setMapCirclesCases(cases)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxList);
