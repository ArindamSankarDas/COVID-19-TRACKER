import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

const InfoBox = ({ title, cases, total }) => {
  return (
    <Card>
      <CardContent>
        {/* Title */}
        <Typography color="textSecondary">{title}</Typography>

        {/* Number of cases */}
        <h2>{cases}</h2>

        {/* Total Cases */}
        <Typography color="textSecondary">{total} Total</Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
