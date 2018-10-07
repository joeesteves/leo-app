import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Resultado } from "./components/resultado";
class App extends Component {
  constructor(){
    super()
    this.state = {
      ingreso_1: 0,
      ingreso_2: 0,
      ingreso_3: 0
    }
  }

  handleSubmit(ev){
    ev.preventDefault()
    const valores = [
      document.getElementById("ingreso_1"),
      document.getElementById("ingreso_2"),
      document.getElementById("ingreso_3")
    ].map(valores => valores.value && parseInt(valores.value) || 0 )

    console.log(valores)
    this.setState((prevState) => {
      return {
        ingreso_1: valores[0],
        ingreso_2: valores[1],
        ingreso_3: valores[2]
      }
    }, () => console.log(this.state))
    


  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Ingreso 1</label>
                <input
                  min="5000"
                  max="1000000"
                  type="number"
                  className="form-control"
                  id="ingreso_1"
                  aria-describedby="emailHelp"
                  placeholder="Ingreso 1"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Ingrese el ante-penúltimo ingreso.
                </small>
              </div>
              <div className="form-group">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Ingreso 2</label>
                  <input
                    min="5000"
                    max="1000000"
                    type="number"
                    className="form-control"
                    id="ingreso_2"
                    aria-describedby="emailHelp"
                    placeholder="Ingreso 2"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Ingrese el penúltimo ingreso.
                  </small>
                </div>
              </div>
              <div className="form-group">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Ingreso 3</label>
                  <input
                    min="5000"
                    max="1000000"
                    type="number"
                    className="form-control"
                    id="ingreso_3"
                    aria-describedby="emailHelp"
                    placeholder="Ingreso 3"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Ingrese el último ingreso.
                  </small>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Calcular
              </button>
            </form>
            <Resultado valores={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
