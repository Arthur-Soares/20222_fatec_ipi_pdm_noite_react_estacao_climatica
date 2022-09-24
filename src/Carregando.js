import React, { Component } from 'react'

export default class Carregando extends Component {
    render() {
        return (



            <div className="d-flex justify-content-center aling-items-center border rounded p-3">


                <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">Carregando... </span>
                    <div className="spinner-grow  text-secondary" style={{ width: '3rem', height: '3rem' }}>
                        <span className="visually-hidden">Carregando... </span>
                        <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }}>
                            <span className="visually-hidden">Carregando... </span>
                            <div className="spinner-grow text-secondary" style={{ width: '3rem', height: '3rem' }}>
                                <span className="visually-hidden">Carregando... </span>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        )
    }
}
