import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React from 'react'

class App extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            logitude: null,
            estacao: null,
            data: null,
            icone: null

        }
    }


    obterEstacao = (data, latitude) => {
        const ano = data.getFullYear();
        const d1 = new Date(ano, 5, 21)
        const d2 = new Date(ano, 8, 24)
        const d3 = new Date(ano, 11, 22)
        const d4 = new Date(ano, 3, 21)
        const sul = latitude < 0

        if (data >= d1 && data < d2) {
            return sul ? 'Inverno' : 'Verao'

        }
        if (data >= d2 && data < d3) {
            return sul ? 'Primavera' : 'Outono'
        }
        if (data >= d3 && data < d4) {
            return sul ? 'Verão' : 'Inverno'
        }
        return sul ? 'Outono' : 'Primavera'
    }

    icones = {
        "Primavera" : "fa-seeding", //fa = font awasome
        "Verao" : "fa-umbrella-beach",
        "Outono" : "fa-tree",
        "Inverno" : "fa-snowman"
    }


    render() {
        return (
            <div>
                Meu App
            </div>
        )
    }
}