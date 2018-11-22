import React, { Component } from "react"
import "./App.css"
import { Header, Footer, PizzaForm, PizzaList } from "./components"
import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
})
class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      idCounter: 0
    }

    this.addPizza = this.addPizza.bind(this)
    this.incrementId = this.incrementId.bind(this)
    this.removePizza = this.removePizza.bind(this)
  }

  incrementId() {
    this.setState({
      idCounter: this.state.idCounter + 1
    })
  }

  addPizza(pizza) {
    this.setState(prevState => ({
      list: [...prevState.list, pizza]
    }))
  }

  removePizza(pizzaId) {
    this.setState(prevState => ({
      list: prevState.list.filter(pizza => pizza.id !== pizzaId)
    }))
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <PizzaForm
            addPizza={this.addPizza}
            id={this.state.idCounter}
            incrementId={this.incrementId}
          />
          <PizzaList list={this.state.list} removePizza={this.removePizza} />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
