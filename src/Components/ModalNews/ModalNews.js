import React from 'react';

class ModalNews extends React.Component {
    render () {
        return (
            <div>
                <button type="button" className="btn btn-primary btn-rounded waves-effect" data-toggle="modal" data-target=".bd-example-modal-xl">Read New</button>
                <div className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel"
                   aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="motal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus harum cupiditate delectus corporis eveniet commodi, excepturi eius cumque ut quam tenetur! Iure doloribus in quidem eaque minima nostrum reiciendis recusandae.</p>
                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sapiente hic iure expedita saepe blanditiis eius qui, rem quidem maiores pariatur perspiciatis accusantium rerum, error soluta suscipit quisquam. Fuga, modi.</p>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalNews;