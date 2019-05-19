import React, { Component } from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from './Components/InputFields';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import { authenticate } from './Modules/Auth.js';
import DisplayPerformanceData from './Components/DisplayPerformanceData';
import { Container, Divider, Header, Segment, Button, Message, Icon } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      gender: 'female',
      age: '',
      renderLoginForm: false,
      renderSignUpForm: false,
      authenticated: false,
      email: '',
      password: '',
      passwordConfirmation: '',
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

  async onSignUp(e) {
    e.preventDefault();
    let resp = await authenticateSignUp(this.state.email, this.state.password, this.state.passwordConfirmation)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: resp.message, renderSignUpForm: false })
    }
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true });
  }

  indexUpdated() {
    this.setState({ updateIndex: false });
  }

  handleGenderChange(value) {
    this.setState({ gender: value })
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }

  render() {
    let renderLogin;
    let renderSignUp;
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
      if (this.state.renderLoginForm === true && this.state.renderSignUpForm === false) {
        renderLogin = (
          <>
            <LoginForm
              loginHandler={this.onLogin.bind(this)}
              inputChangeHandler={this.onChange.bind(this)}
            />
          </>
        )
        renderSignUp = (
          <Button compact color="teal" id="sign-up" onClick={() => this.setState({ renderSignUpForm: true })}>Sign Up</Button>
        )
      } else if (this.state.renderLoginForm === false && this.state.renderSignUpForm === true) {
        renderLogin = (
          <>
            <Button compact color="teal" id="login" onClick={() => this.setState({ renderLoginForm: true })}>Login</Button>
          </>
        )
        renderSignUp = (
          <SignUpForm
            signUpHandler={this.onSignUp.bind(this)}
            inputChangeHandler={this.onChange.bind(this)}
          />
        )
      } else {
        renderLogin = (
          <>
            <Button compact color="teal" id="login" onClick={() => this.setState({ renderLoginForm: true })}>Login</Button>
          </>
        )
        renderSignUp = (
          <>
            <Button compact color="teal" id="sign-up" onClick={() => this.setState({ renderSignUpForm: true })}>Sign Up</Button>
          </>
        )
      }
    }

    return (
      <>
        <Container>
          <Header as="h1">
            <Icon name="doctor" />
            <Header.Content>
              THE COOPER TEST
                </Header.Content>
          </Header>

          <Divider></Divider>

          <Message>
            {renderLogin}
          </Message>

          <Message>
            {renderSignUp}
          </Message>

          <Message>
            <p>{this.state.message}</p>
          </Message>

          <Segment>
            <InputFields
              inputChangeHandler={this.onChange.bind(this)}
              handleGenderChange={this.handleGenderChange.bind(this)}
            />
          </Segment>

          <Divider horizontal>Wait for your physical assessment...</Divider>

          <Segment>
            <Message color="teal">
              <DisplayCooperResult
                distance={this.state.distance}
                gender={this.state.gender}
                age={this.state.age}
                authenticated={this.state.authenticated}
                entrySaved={this.state.entrySaved}
                entryHandler={this.entryHandler.bind(this)}
              />
            </Message>
          </Segment>

          {performanceDataIndex}

        </Container>
      </>
    );
  }
}

export default App;
