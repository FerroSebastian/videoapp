import React from 'react';
import BrandCard from './../BrandCard/BrandCard'


class Accordion extends React.Component {
    render() {
        return (
            <div className="accordion" id="accordionExample">
                <div className="card z-depth-0 ">
                    <div className="card-header " id="headingOne">
                        <h5 className="mb-0">
                            <button type="button" className=" btn btn-outline-info btn-rounded waves-effect" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="fas fa-car pr-2"
                                aria-hidden="true"></i>Info</button>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                        data-parent="#accordionExample">
                        <div className="card-group ">
                            <div className="col-sm-4">
                                <BrandCard Logo="{VolkswagenLogo}" Brand="Volkswagen" Subtitle="Das Auto"/>
                            </div>
                            <div className="col-sm-4">
                                <BrandCard ImgURL="" Brand="Volvo"/>
                            </div>
                            <div className="col-sm-4">
                                <BrandCard Brand="Renault" Subtitle="Passion for life"/>
                            </div>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Accordion;









