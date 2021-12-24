  export function buildX(data) {
    const xAxis = [];

    for (let i = 0; i < data.length; i++) {
      xAxis.push(data[i].x);
    }
    return xAxis;
  }

 export function buildY(data) {
    const yAxis = [];

    for (let i = 0; i < data.length; i++) {
      yAxis.push(data[i].y);
    }

    return yAxis;
  }