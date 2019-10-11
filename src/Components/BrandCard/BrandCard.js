import React from 'react';
import ModalNews from './../ModalNews/ModalNews'


class BrandCard extends React.Component {
    render() {

        return (
            <div className="card-group">
                <div className="row">
                    <div className="col-sm-4 mb-3 mb-md-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <ModalNews />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <ModalNews />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <ModalNews />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BrandCard;