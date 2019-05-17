import React, { Component } from 'react';
import { getData } from '../Modules/PerformanceData';
import { Message } from 'semantic-ui-react'

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
      <Message>
        {dataIndex}
      </Message>
    )
  }      
}
  export default DisplayPerformanceData
