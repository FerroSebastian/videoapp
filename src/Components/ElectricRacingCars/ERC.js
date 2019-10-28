import React from 'react';
import Accordion2 from '../Accordion2/Accordion2';

class ERC extends React.Component {
    render () {
        return (
        <div className="container mt-3 border border-danger rounded mb-0 z-depth-4">
            <div className="row">

                <div className="col-md-7 mb-r mt-3">
                <h3 className="text-white bg-danger"><h5><strong>JavaScript</strong></h5></h3>
                    <p>¿Puede el espectáculo del motor ser sostenible? Imaginemos que podemos conservar todos los alicientes que hacen de la competición de coches y motos una experiencia única pero sin contaminar y atrayendo la inversión e investigación en tecnología baja en carbono: la misma adrenalina, el riesgo controlado y la velocidad… sin combustibles fósiles.</p>
                    
                </div>

                <div className="col-md-5 mb-r mt-3">
                    <div className="view overlay hm-white-slight">
                        <img src="data:image/png;base64,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" alt="" className="w-100"/>
                        <a >
                            <div className="mask waves-effect waves-light"></div>
                        </a>
                    </div>
                
                </div>      
        
            </div>
            <Accordion2 />
            
        </div>
        )
    }
} 

export default ERC;