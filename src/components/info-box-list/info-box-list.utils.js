import numeral from "numeral";

export const prettyPrintData = (data) =>
  data > 0 ? `+${numeral(data).format("0.0a")}` : "No Cases";
