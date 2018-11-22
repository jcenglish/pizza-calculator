import React from "react"
import { Pizza } from "./index"

const PizzaList = props => {
  const { list } = props
  console.log(list)
  return list.map(pizza => (
    <Pizza
      price={pizza.price}
      diameter={pizza.diameter}
      place={pizza.place}
      type={pizza.type}
      costPerSqIn={pizza.costPerSqIn}
      key={pizza.id}
    />
  ))
}

export default PizzaList
