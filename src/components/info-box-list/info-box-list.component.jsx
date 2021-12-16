import React from "react";
import InfoBox from "../info-box/info-box.component";

import { CovidStats } from "./info-box-list.styles";
import { connect } from "react-redux";

const InfoBoxList = ({ countryInfo }) => {
  console.log(countryInfo);
  return (
    <CovidStats>
      <InfoBox
        key={1}
        title="Coronavirus Cases"
        cases={countryInfo.active}
        total={countryInfo.cases}
      />
      <InfoBox
        key={2}
        title="Recovered"
        cases={countryInfo.recoveredPerOneMillion}
        total={countryInfo.recovered}
      />
      <InfoBox
        key={3}
        title="Deaths"
        cases={countryInfo.deathsPerOneMillion}
        total={countryInfo.deaths}
      />
    </CovidStats>
  );
};

const mapStateToProps = ({ countryData }) => ({
  countryInfo: countryData.countryInfo,
});

export default connect(mapStateToProps)(InfoBoxList);
