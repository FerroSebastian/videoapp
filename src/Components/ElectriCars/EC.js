import React from 'react';
import Accordion from '../Accordion/Accordion';
import FirstCards from '../FirstCards/FirstCards'



class EC extends React.Component {
    render () {
        return (
            <div className="container mt-2 border border-danger rounded mb-0 z-depth-4">
                
                <div className="row">

                    <div className="col-md-5 mb-r mt-3">
                        <div className="view overlay hm-white-slight">
                            <img src="https://ezoulou.fr/sites/default/files/logos/bootstrap_html_css.png" alt="" className="w-100"/>
                            <a href="">
                                <div className="mask waves-effect waves-light"></div>
                            </a>
                        </div>
                        
                    </div>
                    
                    <div className="col-md-7 mb-r mt-3">
                            <h3 className="text-white bg-danger"><h5><strong>HTML - CSS - Bootstrap</strong></h5></h3>
                            <p>La venta de coches eléctricos aumenta progresivamente, o que es una buena muestra de que el mensaje acerca de que el futuro es eléctrico está calando entre los consumidores. <br/> Uno de los principales factores de tal crecimiento se encuentra en la evolución tecnológica de este tipo de vehículos y la producción de los mismos en las grandes marcas, así como en una mayor presencia de puntos de carga. </p>
                            
                        </div>
                    
                
                </div>
                <div className="accordion" id="accordion">
                <div className="card z-depth-0 ">
                    <div className="card-header " id="headingOne">
                        <h5 className="mb-0">
                            <button type="button" className=" btn btn-outline-danger btn-rounded waves-effect" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="fas fa-car pr-2"
                                aria-hidden="true"></i>Info</button>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                        data-parent="">
                        <div className="card-group ">
                            <FirstCards />
                        </div>
                        <br/>
                        <hr/>
                    </div>
                </div>

            </div>
            </div>
            
        )
    }
} 

export default EC;