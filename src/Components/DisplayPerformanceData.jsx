import React, { Component } from 'react';
import { getData } from '../Modules/PerformanceData';
import { Message, Segment, Divider, Grid } from 'semantic-ui-react'
import { Line, Bar } from 'react-chartjs-2';
import moment from 'moment';

class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: null
    }
  }
  componentDidMount() {
    this.getPerformanceData()
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({ performanceData: result.data.entries }, () => {
      this.props.indexUpdated();
    })
  }

  render() {
    let dataIndex;
    let distances = []
    let dates = []
    let numOfExcellent;
    let numOfAboveAverage;
    let numOfAverage;
    let numOfBelowAverage;
    let numOfPoor;
    let barChartPerfData = []
    let perfDataLength;
    let totalM;
    let totalKLM;

    let barChartData = {
      labels: ["Excellent", "Above Average", "Average", "Below Average", "Poor"],
      datasets: [{
        data: barChartPerfData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    }

    let barChartOptions = {
      responsive: true,
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Performance Status',
        fontSize: 20
        },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            min: 0
          }
        }]
      }
    }

    let lineChartData = {
      datasets: [{
        data: distances,
      }],
      labels: dates
    };

    let lineChartOptions = {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Distance over time',
        fontSize: 20
        },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            min: 0
          }
        }]
      }
    }

    if (this.props.updateIndex === true) {
      this.getPerformanceData();
    }

    if (this.state.performanceData != null) {
      this.state.performanceData.forEach(entry => {
        let dateString = entry.created_at;
        let dateObj = new Date(dateString);
        let momentObj = moment(dateObj);
        let momentString = momentObj.format('YY-MM-DD');
        distances.push(entry.data.distance);
        dates.push(momentString);
      })

      numOfExcellent = 0;
      for (var a = 0; a < this.state.performanceData.length; a++) {
        if (this.state.performanceData[a].data.message === "Excellent")
          numOfExcellent++;
      }

      numOfAboveAverage = 0;
      for (var b = 0; b < this.state.performanceData.length; b++) {
        if (this.state.performanceData[b].data.message === "Above average")
          numOfAboveAverage++;
      }

      numOfAverage = 0;
      for (var c = 0; c < this.state.performanceData.length; c++) {
        if (this.state.performanceData[c].data.message === "Average")
          numOfAverage++;
      }

      numOfBelowAverage = 0;
      for (var d = 0; d < this.state.performanceData.length; d++) {
        if (this.state.performanceData[d].data.message === "Below average")
          numOfBelowAverage++;
      }

      numOfPoor = 0;
      for (var e = 0; e < this.state.performanceData.length; e++) {
        if (this.state.performanceData[e].data.message === "Poor")
          numOfPoor++;
      }

      barChartPerfData.push(numOfExcellent);
      barChartPerfData.push(numOfAboveAverage);
      barChartPerfData.push(numOfAverage);
      barChartPerfData.push(numOfBelowAverage);
      barChartPerfData.push(numOfPoor);

      dataIndex = (
        <div>
          {this.state.performanceData.map(item => {
            return <div key={item.id}>Your result of <b>{item.data.distance}</b> meters is <b>{item.data.message}</b></div>
          })}
        </div>
      )

      perfDataLength = this.state.performanceData.length;

      totalM = distances.reduce(function (prev, curr) {
        return (Number(prev) || 0) + (Number(curr) || 0);
      });
      totalKLM = (totalM / 1000).toFixed(2)
    }

    return (
      <>
        <Divider horizontal>Distance and Result log</Divider>
        <Segment>
          <Message>
            {dataIndex}
          </Message>
        </Segment>

        <Divider horizontal>You have run a total of {totalKLM} kilometers and have {perfDataLength} saved entries</Divider>

        <Segment>
        <Grid container columns={2}>
          <Grid.Column>
            <Line
              data={lineChartData}
              options={lineChartOptions}
            />
          </Grid.Column>
          <Grid.Column>
            <Bar
              data={barChartData}
              options={barChartOptions}
            />
          </Grid.Column>
        </Grid>
        </Segment>

      </>
    )
  }
}
export default DisplayPerformanceData
