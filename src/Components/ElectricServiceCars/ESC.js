import React from 'react';
import Accordion from '../Accordion/Accordion';

class ESC extends React.Component {
    render () {
        return (
            <div className="container mt-3 mb-4 border border-danger rounded mb-0 z-depth-4">
                <div className="row">

                    <div className="col-md-5 mb-r mt-3">
                        <div className="view overlay hm-white-slight">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzkmeyTyr30GeZ1QAAuTz0LL1bUTI7Elx1nQxfC3BjSQaDxpGa" alt="" className="w-100"/>
                            <a href="">
                                <div className="mask waves-effect waves-light"></div>
                            </a>
                        </div>
                        
                    </div>
                    
                    <div className="col-md-7 mb-r mt-3">
                            <h3 className="text-white bg-danger"><h5><strong>Electric Service Vehicles</strong></h5></h3>
                            <p>La flota vehicular en la región podría triplicarse en los próximos 25 años, siendo el sector transporte el principal consumidor de energías fósiles y, por eso, generador de contaminantes del aire. La movilidad eléctrica podría contrarrestar esta situación. <br /> <br/> Es que ayuda a modernizar el transporte colectivo y que los países reduzcan sus emisiones de gases de efecto invernadero (GEI). Nuevos sistemas de propulsión alternativa, la incorporación de vehículos autónomos, nuevos servicios de movilidad, el carsharing, y hasta la incorporación de nuevos vehículos adaptados a necesidades específicas son algunas de las transformaciones que ya empiezan a ver.</p>
                        </div>
                    
                
                </div>
                
            </div>
        )
    }
} 

export default ESC;