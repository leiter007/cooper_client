import React, { Component } from 'react';
import { getData } from '../Modules/PerformanceData';
import { Message, Segment, Divider } from 'semantic-ui-react'
import { Line } from 'react-chartjs-2';

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
    this.setState({performanceData: result.data.entries}, () => {
      this.props.indexUpdated();
    })
  }

  render () {
    let dataIndex;
    let distances = []
    let labels = []

    if (this.state.performanceData != null) {
    this.state.performanceData.forEach(entry => {
      distances.push(entry.data.distance)
      labels.push(entry.created_at)
    })
  }

    let lineChartData = {
        datasets: [{
          label: 'Distance over time',
          data: distances,
        }],
        labels: labels
      };

    let lineChartOptions = {
      scaleOverride : true,
      scaleStartValue : 0,
    }

    if (this.props.updateIndex === true) {
      this.getPerformanceData();
    }
    if (this.state.performanceData != null) {
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
        data={lineChartData} options={lineChartOptions}
      />
      
      </>
    )
  }      
}
  export default DisplayPerformanceData
