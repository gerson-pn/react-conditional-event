import { Component } from "react";
import './css/estilo.css'

class App extends Component<{}, { texto: string, escolha: string }> {
  constructor(props) {
    super(props)
    this.state = {
      texto: 'Escolha um botão para clicar!',
      escolha: ''
    }
  }
  capturarClique(valor: number) {
    if (valor === 1) {
      this.setState({
        escolha: 'Você clicou no botão 1'
      })
    }
    if (valor === 2) {
      this.setState({
        escolha: 'Você clicou no botão 2'
      })
    }
  }
  render() {
    let escolha = this.state.escolha
    if (escolha === '') {
      return (
        <div className="alinhamento">
          <h1>{this.state.texto}</h1>
          <div>
            <button onClick={this.capturarClique.bind(this, 1)}>Botão 1</button>
            <span> </span>
            <button onClick={this.capturarClique.bind(this, 2)}>Botão 2</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="alinhamento">
          <h1 className="tamanho">{this.state.escolha}</h1>
        </div>
      )
    }

  }
}
export default App;

