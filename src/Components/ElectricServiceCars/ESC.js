import React from 'react';
import Accordion from '../Accordion/Accordion';

class ESC extends React.Component {
    render () {
        return (
            <div className="container mt-3 mb-4 border border-danger rounded mb-0 z-depth-4">
                <div className="row">

                    <div className="col-md-5 mb-r mt-3">
                        <div className="view overlay hm-white-slight">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTws27N2FMxTyL4jy2hMOpdre0zqKlO4IPZcbYkcbEVbFxtlhfjig&s" alt="" className="w-100"/>
                            <a href="">
                                <div className="mask waves-effect waves-light"></div>
                            </a>
                        </div>
                        
                    </div>
                    
                    <div className="col-md-7 mb-r mt-3">
                            <h3 className="text-white bg-danger"><h5><strong>React</strong></h5></h3>
                            <p>React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.</p>
                        </div>
                    
                
                </div>
                
            </div>
        )
    }
} 

export default ESC;