import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email : '',
        password : ''
    }
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="text-center py-4">
                                <i className="fas fa-lock"></i>{' '}
                                Iniciar Sesion
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
