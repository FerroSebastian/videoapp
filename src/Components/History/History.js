import React from 'react';



class History extends React.Component {
    render() {
        return (
            <div className="container" id="Container">
                <div className="row">

                    <div className="col-md-5 mb-r mt-3">
                        <div className="view overlay hm-white-slight">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ272CVtwYs9YW5ytKfoci3vt88zfc-nvLC29GX7x43IEsDbO7a" alt="" />
                            <a href="">
                                <div className="mask waves-effect waves-light"></div>
                            </a>
                        </div>

                    </div>

                    <div className="col-md-7 mb-r mt-3">
                        <a href="" className="primary-text"><h5><strong>Electric Cars</strong></h5></a>
                        <p>La venta de coches eléctricos aumenta progresivamente, o que es una buena muestra de que el mensaje acerca de que el futuro es eléctrico está calando entre los consumidores. <br /> Uno de los principales factores de tal crecimiento se encuentra en la evolución tecnológica de este tipo de vehículos y la producción de los mismos en las grandes marcas, así como en una mayor presencia de puntos de carga. </p>

                    </div>


                </div>
                <div className="row">

                    <div className="col-md-7 mb-r mt-3">
                        <a href="" className="primary-text"><h5><strong>Electric Rancing Cars</strong></h5></a>
                        <p>¿Puede el espectáculo del motor ser sostenible? Imaginemos que podemos conservar todos los alicientes que hacen de la competición de coches y motos una experiencia única pero sin contaminar y atrayendo la inversión e investigación en tecnología baja en carbono: la misma adrenalina, el riesgo controlado y la velocidad… sin combustibles fósiles.</p>

                    </div>

                    <div className="col-md-5 mb-r mt-3">
                        <div className="view overlay hm-white-slight">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwPjndBzwgbiZtax-1L49yL_MHBY4ZSV2aZzu2cXJJ46glheQE" alt="" />
                            <a href="">
                                <div className="mask waves-effect waves-light"></div>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default History;
