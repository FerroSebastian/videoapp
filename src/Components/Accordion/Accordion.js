import React from 'react';
import FirstCards from '../FirstCards/FirstCards'


class Accordion extends React.Component {
    render() {
        return (
            <div className="accordion" id="accordion">
                <div className="card z-depth-0 ">
                    <div className="card-header " id="headingOne">
                        <h5 className="mb-0">
                            <button type="button" className=" btn btn-outline-danger btn-rounded waves-effect" data-toggle="collapseOne" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Tutoriales</button>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                        data-parent="#accordion">
                        <div className="card-group ">
                            <FirstCards />
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









