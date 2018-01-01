import React from 'react'
import { Header, List } from 'semantic-ui-react'

const Meal = (props) => {
  const mealList = props.meals.map(meal => <List.Item key={meal.name}>{meal.name}</List.Item>)

  return (
    <div>
      {mealList.length > 0 && <Header size="medium">Choose a Meal:</Header>}
      <List>{mealList}</List>
    </div>
  )
}

export default Meal