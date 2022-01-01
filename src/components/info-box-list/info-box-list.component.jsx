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
  casesType,
  setMapCirclesDeaths,
  setMapCirclesRecovered,
  setMapCirclesCases,
}) => {
  return (
    <CovidStats>
      <InfoBox
        key={1}
        isRed
        title="Coronavirus Cases"
        active={casesType === "cases"}
        onClick={() => setMapCirclesCases("cases")}
        total={prettyPrintData(countryInfo.cases)}
        cases={prettyPrintData(countryInfo.todayCases)}
      />
      <InfoBox
        key={2}
        title="Recovered"
        active={casesType === "recovered"}
        onClick={() => setMapCirclesRecovered("recovered")}
        total={prettyPrintData(countryInfo.recovered)}
        cases={prettyPrintData(countryInfo.todayRecovered)}
      />
      <InfoBox
        key={3}
        isRed
        title="Deaths"
        active={casesType === "deaths"}
        onClick={() => setMapCirclesDeaths("deaths")}
        total={prettyPrintData(countryInfo.deaths)}
        cases={prettyPrintData(countryInfo.todayDeaths)}
      />
    </CovidStats>
  );
};

const mapStateToProps = ({ countryData, mapCirclesData }) => ({
  countryInfo: countryData.countryInfo,
  casesType: mapCirclesData.caseType,
});

const mapDispatchToProps = (dispatch) => ({
  setMapCirclesRecovered: (recovered) =>
    dispatch(setMapCirclesRecovered(recovered)),
  setMapCirclesDeaths: (deaths) => dispatch(setMapCirclesDeaths(deaths)),
  setMapCirclesCases: (cases) => dispatch(setMapCirclesCases(cases)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxList);
