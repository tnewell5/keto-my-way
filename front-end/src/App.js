import React, { Component } from 'react'
import { Header, Grid, Segment, Button } from 'semantic-ui-react'
import './App.css'
import Meal from './Meal'

const meals = [
  { name: 'mini babybel cheese - original', amount: '1 piece', fat: '6g', protein: '5g', netCarbs: '0g' },
  { name: 'mini babybel cheese - light', amount: '1 piece', fat: '3g', protein: '6g', netCarbs: '0g' },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meals: []
    }
    this.showMeals = this.showMeals.bind(this)
  }

  showMeals() {
    this.setState({ meals: meals })
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
