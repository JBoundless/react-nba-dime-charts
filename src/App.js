import React, {Component} from "react";
import "./style.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default class App extends Component {

componentDidMount() {
  let chart = am4core.create("chartdiv", am4charts.PieChart)

chart.data = [{
  "player": "Monte Morris",
  "APG": 5.5
}, {
  "player": "Nikola Jokic",
  "APG": "5.0"
}, {
  "player": "Facundo Campazzo",
  "APG": "4.1"
}, {
  "player": "Will Barton",
  "APG": "2.7"
}, {
  "player": "Austin Rivers",
  "APG": "2.1"
}, {
  "player": "Aaron Gordon",
  "APG": "2.0"
}, {
  "player": "Paul Milsap",
  "APG": "1.7"
}, {
  "player": "Michael Porter Jr",
  "APG": "1.3"
}, {
  "player": "JaMychal Green",
  "APG": "1.1"
}, {
  "player": "JaVale McGee",
  "APG": "0.8"
}, {
  "player": "Bol Bol",
  "APG": "0.7"
}, {
  "player": "Markus Howard",
  "APG": "0.4"
}, {
  "player": "Zeke Nnaji",
  "APG": "0.4"
}, {
  "player": "Shaquille Harrison",
  "APG": "0.3"
}, {
  "player": "Vlatko Cancar",
  "APG": "0.2"
}];

  this.chart = chart;
  let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "APG";
pieSeries.dataFields.category = "player"
}

render() {
  return (
    <div>
      <h1>NBA Dimes Chart</h1>
      <p>The Nuggets led all playoff teams with 29.2 APG. Let's break that down a little further with a pie chart.</p>
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>

    </div>
  );
}
}