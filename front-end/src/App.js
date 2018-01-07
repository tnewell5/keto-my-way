import React, { Component } from 'react'
import { Header, Grid, Segment, Button } from 'semantic-ui-react'
import axios from 'axios'

import './App.css'
import Meal from './Meal'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meals: []
    }
    this.showMeals = this.showMeals.bind(this)
  }

  showMeals() {
    axios.get('http://localhost:4000/meals')
    .then((response) => {
      console.log('response: ', response)
      this.setState({ meals: response.data })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Keto My Way</h1>
        </header>
        <div className="App-intro">
          <Header size="large">Today</Header>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column textAlign="left">
                <Segment>Used:</Segment>
                <Segment>Remaining:</Segment>
                <Segment>Today's Meals:</Segment>
              </Grid.Column>
              <Grid.Column textAlign="left">
                <Meal meals={this.state.meals} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Button floated="left" className="ui teal" onClick={this.showMeals}>Add Meal</Button>
        </div>
      </div>
    );
  }
}

export default App;
