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
  const { price, costPerSqIn, diameter, place, type } = props
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" align="center">
          {place}: {type} - {diameter}"
        </Typography>
        <Typography variant="h4">Cost Per Square Inch:</Typography>
        <Typography variant="h5">{costPerSqIn}</Typography>
        <Typography variant="h4">Total Cost:</Typography>
        <Typography variant="h5">${price}</Typography>
      </CardContent>
      <CardActions>
        <IconButton color="secondary">
          <Icon>delete</Icon>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Pizza
