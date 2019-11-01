import React from 'react';
import SecondCards from '../SecondCards/SecondCards'



class AccordionTwo extends React.Component {
    render() {
        return (
            <div className="accordion" id="accordion2">
                <div className="card z-depth-0 ">
                    <div className="card-header " id="headingTwo">
                        <h5 className="mb-0">
                            <button type="button" className=" btn btn-outline-danger btn-rounded waves-effect" data-toggle="collapseTwo" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Tutoriales</button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo"
                        data-parent="#accordion2">
                        <div className="card-group ">
                            <SecondCards />
                        </div>
                        <br/>
                        <hr/>
                    </div>
                </div>

            </div>
        )
    }
}

export default AccordionTwo;









