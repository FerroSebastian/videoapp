import React from 'react';
import BrandCard from './../BrandCard/BrandCard'

class Accordion extends React.Component {
    render() {
        return (
            <div class="accordion" id="accordionExample">
                <div class="card z-depth-0 ">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button type="button" class="btn btn-outline-info btn-rounded waves-effect" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i class="fas fa-car pr-2"
                                aria-hidden="true"></i>Info</button>
                        </h5>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                        data-parent="#accordionExample">
                        <div class="card-Group">
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









