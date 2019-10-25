import React from 'react';
import Accordion2 from '../Accordion2/Accordion2';

class ERC extends React.Component {
    render () {
        return (
        <div className="container mt-3 border border-danger rounded mb-0 z-depth-4">
            <div className="row">

                <div className="col-md-7 mb-r mt-3">
                <h3 className="text-white bg-danger"><h5><strong>Electric Rancing Cars</strong></h5></h3>
                    <p>¿Puede el espectáculo del motor ser sostenible? Imaginemos que podemos conservar todos los alicientes que hacen de la competición de coches y motos una experiencia única pero sin contaminar y atrayendo la inversión e investigación en tecnología baja en carbono: la misma adrenalina, el riesgo controlado y la velocidad… sin combustibles fósiles.</p>
                    
                </div>

                <div className="col-md-5 mb-r mt-3">
                    <div className="view overlay hm-white-slight">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwPjndBzwgbiZtax-1L49yL_MHBY4ZSV2aZzu2cXJJ46glheQE" alt="" className="w-100"/>
                        <a >
                            <div className="mask waves-effect waves-light"></div>
                        </a>
                    </div>
                
                </div>      
        
            </div>
            {/* <Accordion2 /> */}
            
        </div>
        )
    }
} 

export default ERC;