import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import { CardContainer } from "./info-box.styles";

const InfoBox = ({ title, cases, active, isRed, total, ...otherProps }) => {
  return (
    <CardContainer onClick={otherProps.onClick} active={active} isRed={isRed}>
      <CardContent>
        {/* Title */}
        <Typography color="textSecondary">{title}</Typography>

        {/* Number of cases */}
        <h2>{cases}</h2>
        <span>(Today)</span>

        {/* Total Cases */}
        <Typography color="textSecondary">{total} Total</Typography>
      </CardContent>
    </CardContainer>
  );
};

export default InfoBox;
