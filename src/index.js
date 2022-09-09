import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React from 'react'

class App extends React.Component {

    render() {
        return (
            <div>
                Meu App
            </div>
        )
    }
}

ReactDOM.render(

    <App />,
    document.querySelector('#root')

)





window.navigator.geolocation.getCurrentPosition(
    (position) => { console.log(position) } //executado se a localização estiver pronta
)