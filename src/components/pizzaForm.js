import React, { Component } from "react"
import { Grid, TextField, Typography, Button, Icon } from "@material-ui/core"
import { default as costPerSqIn } from "../utilities/costPerSqIn"

class PizzaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      costPerSqIn: 0,
      diameter: 0,
      price: 0,
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

  handleSubmit = () => {
    this.setState({
      costPerSqIn: costPerSqIn(this.state.diameter, this.state.price).toFixed(2)
    })
  }

  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h2">Pizza</Typography>
        <TextField
          margin="normal"
          name="place"
          type="text"
          label="Place"
          variant="outlined"
          onChange={this.handleChange}
        />
        <TextField
          margin="normal"
          name="type"
          type="text"
          label="Type"
          variant="outlined"
          onChange={this.handleChange}
        />
        <TextField
          margin="normal"
          name="diameter"
          type="number"
          min="1"
          label="Diameter"
          variant="outlined"
          onChange={this.handleChange}
        />
        <TextField
          margin="normal"
          name="price"
          type="number"
          min="0"
          label="Price"
          variant="outlined"
          onChange={this.handleChange}
        />
        <Button onClick={this.handleSubmit} variant="contained" color="primary">
          <Icon>add</Icon>
          &#32;Save Pizza Value
        </Button>
      </Grid>
    )
  }
}

export default PizzaForm
