import React from "react"
import {
  IconButton,
  Typography,
  Card,
  CardActions,
  CardContent,
  Icon
} from "@material-ui/core"

const Pizza = props => {
  const { price, costPerSqIn, diameter, place, type, removePizza, id } = props
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1" align="center">
          {place}: {type} - {diameter}"
        </Typography>
        <Typography variant="subtitle2">Cost Per Square Inch:</Typography>
        <Typography variant="body1">${costPerSqIn}</Typography>
        <Typography variant="body2">Total Cost:</Typography>
        <Typography variant="subtitle2">${price}</Typography>
      </CardContent>
      <CardActions>
        <IconButton color="secondary" onClick={() => removePizza(id)}>
          <Icon>delete</Icon>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Pizza
