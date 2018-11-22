import React, { Component } from "react"
import { Grid, TextField, Typography, Button, Icon } from "@material-ui/core"
import { default as costPerSqIn } from "../utilities/costPerSqIn"
import { withStyles } from "@material-ui/core/styles"

const styles = {
  form: {
    marginBottom: "8px"
  }
}
class PizzaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      diameter: "0",
      price: "0",
      place: "",
      type: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { diameter, price, place, type } = event.target
    const cost = costPerSqIn(diameter.value, price.value).toFixed(2)
    const { addPizza, incrementId, id } = this.props
    addPizza({
      diameter: diameter.value,
      price: price.value,
      place: place.value,
      type: type.value,
      costPerSqIn: cost,
      id
    })
    incrementId()
    this.setState({
      diameter: "",
      price: "",
      place: "",
      type: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={this.props.classes.form}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h2">Pizza</Typography>
          <TextField
            margin="normal"
            name="place"
            value={this.state.place}
            type="text"
            label="Place"
            variant="outlined"
            onChange={this.handleChange}
          />
          <TextField
            value={this.state.type}
            margin="normal"
            name="type"
            type="text"
            label="Type"
            variant="outlined"
            onChange={this.handleChange}
          />
          <TextField
            value={this.state.diameter}
            margin="normal"
            name="diameter"
            type="number"
            min="1"
            label="Diameter"
            variant="outlined"
            onChange={this.handleChange}
          />
          <TextField
            value={this.state.price}
            margin="normal"
            name="price"
            type="number"
            min="0"
            label="Price"
            variant="outlined"
            onChange={this.handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            <Icon>add</Icon>
            &#32;Save Pizza Value
          </Button>
        </Grid>
      </form>
    )
  }
}

export default withStyles(styles)(PizzaForm)
