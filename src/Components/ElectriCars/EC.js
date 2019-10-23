import React from 'react';
import Accordion from '../Accordion/Accordion';



class EC extends React.Component {
    render () {
        return (
            <div className="container mt-2 border border-danger rounded mb-0 z-depth-4">
                
                <div className="row">

                    <div className="col-md-5 mb-r mt-3">
                        <div className="view overlay hm-white-slight">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ272CVtwYs9YW5ytKfoci3vt88zfc-nvLC29GX7x43IEsDbO7a" alt="" className="w-100"/>
                            <a href="">
                                <div className="mask waves-effect waves-light"></div>
                            </a>
                        </div>
                        
                    </div>
                    
                    <div className="col-md-7 mb-r mt-3">
                            <h3 className="text-white bg-danger"><h5><strong>Electric Cars</strong></h5></h3>
                            <p>La venta de coches eléctricos aumenta progresivamente, o que es una buena muestra de que el mensaje acerca de que el futuro es eléctrico está calando entre los consumidores. <br/> Uno de los principales factores de tal crecimiento se encuentra en la evolución tecnológica de este tipo de vehículos y la producción de los mismos en las grandes marcas, así como en una mayor presencia de puntos de carga. </p>
                            
                        </div>
                    
                
                </div>
                <Accordion />
            </div>
            
        )
    }
} 

export default EC;