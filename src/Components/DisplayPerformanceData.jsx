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
    let numOfExcellent = 0

    let barChartData = {
      datasets: [{
        label: 'Performance Status',
        data: [
          {x: "Excellent", y: numOfExcellent},
          {x: "Above average", y: numOfExcellent},
          {x: "Average", y: numOfExcellent},
          {x: "Below average", y: numOfExcellent},
          {x: "Poor", y: numOfExcellent},
        ],
      }]
    };

    let lineChartData = {
        datasets: [{
          label: 'Distance over time',
          data: distances,
      }],
      labels: dates
    };

    let lineChartOptions = {
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
        let momentString = momentObj.format('YYYY-MM-DD');
        distances.push(entry.data.distance);
        dates.push(momentString);
      })


      dataIndex = (
        <div>
          {this.state.performanceData.map(item => {
            return <div key={item.id}>Your result of <b>{item.data.distance}</b> meters is <b>{item.data.message}</b></div>
          })}
        </div>
      )
    }

    return (
      <>
        <Divider horizontal>Distance and Result log</Divider>
        <Segment>
          <Message>
            {dataIndex}
          </Message>
        </Segment>

  
            <Line
              data={lineChartData}
              options={lineChartOptions}
            />
          <Bar
            // data={barChartData}
            // options={barChartOptions}
          />

      </>
    )
  }
}
export default DisplayPerformanceData
