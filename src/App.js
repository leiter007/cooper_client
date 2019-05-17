import React, { Component } from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from './Components/InputFields';
import LoginForm from './Components/LoginForm';
import { authenticate } from './Modules/Auth.js';
import DisplayPerformanceData from './Components/DisplayPerformanceData';
import { Container, Divider, Header, Segment, Button } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      gender: 'female',
      age: '',
      renderLoginForm: false,
      authenticated: false,
      email: '',
      password: '',
      message: '',
      entrySaved: false,
      renderIndex: false,
      updateIndex: ''
    }
  }

  async onLogin(e) {
    e.preventDefault();
    let resp = await authenticate(this.state.email, this.state.password)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: resp.message, renderLoginForm: false })
    }
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true });
  }

  indexUpdated() {
    this.setState({ updateIndex: false });
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }

  render() {
    let renderLogin;
    let user;
    let performanceDataIndex;

    if (this.state.authenticated === true) {
      user = JSON.parse(sessionStorage.getItem('credentials')).uid;
      renderLogin = (
        <p>Hi {user}</p>
      )
      if (this.state.renderIndex === true) {
        performanceDataIndex = (
          <>
            <DisplayPerformanceData
              updateIndex={this.state.updateIndex}
              indexUpdated={this.indexUpdated.bind(this)}
            />
            <Button compact color="teal" onClick={() => this.setState({ renderIndex: false })}>Hide past entries</Button>
          </>
        )
      } else {
        performanceDataIndex = (
          <Button compact color="teal" id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</Button>
        )
      }
    } else {
      if (this.state.renderLoginForm === true) {
        renderLogin = (
          <>
            <LoginForm
              loginHandler={this.onLogin.bind(this)}
              inputChangeHandler={this.onChange.bind(this)}
            />
          </>
        )
      } else {
        renderLogin = (
          <>
            <Button compact color="teal" id="login" onClick={() => this.setState({ renderLoginForm: true })}>Login</Button>
            <p>{this.state.message}</p>
          </>
        )
      }
    }

    return (
      <>
        <Container>
							<Header as="h1"textAlign="center">
                <Divider horizontal >THE COOPER TEST</Divider>
							</Header>
              

							<Segment>
                <InputFields
                  inputChangeHandler={this.onChange.bind(this)}
                />
              </Segment>

              <Segment>
                <DisplayCooperResult
                  distance={this.state.distance}
                  gender={this.state.gender}
                  age={this.state.age}
                  authenticated={this.state.authenticated}
                  entrySaved={this.state.entrySaved}
                  entryHandler={this.entryHandler.bind(this)}
                />
              </Segment>

              <Segment>
                {renderLogin}
                {performanceDataIndex}
              </Segment>
        </Container>
      </>
    );
  }
}

export default App;
