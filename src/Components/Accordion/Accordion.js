import React from 'react';
import BrandCard from './../BrandCard/BrandCard'

class Accordion extends React.Component {
    render() {
        return (
            <div className="accordion" id="accordionExample">
                <div className="card z-depth-0 ">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button type="button" className="btn btn-outline-info btn-rounded waves-effect" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="fas fa-car pr-2"
                                aria-hidden="true"></i>Info</button>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                        data-parent="#accordionExample">
                        <div className="card-Group">
                            <BrandCard />
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









