import React from 'react';
import Accordion from '../Accordion/Accordion';



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
                            <p>HTML es el lenguaje de marcado estándar para páginas web.

                                Con HTML puedes crear tu propio sitio web.

                                HTML es fácil de aprender: ¡lo disfrutará! </p>
                            <p>CSS es un lenguaje que describe el estilo de un documento HTML.

                                CSS describe cómo deben mostrarse los elementos HTML.

                                Este tutorial le enseñará CSS de básico a avanzado.</p>
                            <p>Bootstrap es el marco de trabajo HTML, CSS y JavaScript más popular para desarrollar sitios web receptivos para dispositivos móviles.
                                ¡Bootstrap es completamente gratis para descargar y usar!
                                Abrir en Google Traductor</p>

                            
                        </div>
                    
                
                </div>
                <Accordion />
            </div>
            
        )
    }
} 

export default EC;