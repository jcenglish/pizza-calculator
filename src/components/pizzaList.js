import React from "react"
import { Pizza } from "./index"
import { Grid } from "@material-ui/core"

const PizzaList = props => {
  const { list, removePizza } = props
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {list.map(pizza => (
        <Grid item key={pizza.id}>
          <Pizza
            price={pizza.price}
            diameter={pizza.diameter}
            place={pizza.place}
            type={pizza.type}
            costPerSqIn={pizza.costPerSqIn}
            removePizza={removePizza}
            id={pizza.id}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default PizzaList
