import React from 'react';
import Accordion from '../Accordion/Accordion';

class ESC extends React.Component {
    render () {
        return (
            <div className="container mt-3 mb-4 border border-info rounded mb-0 z-depth-1-half">
                <div className="row">

                    <div className="col-md-5 mb-r mt-3">
                        <div className="view overlay hm-white-slight">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzkmeyTyr30GeZ1QAAuTz0LL1bUTI7Elx1nQxfC3BjSQaDxpGa" alt=""/>
                            <a href="">
                                <div className="mask waves-effect waves-light"></div>
                            </a>
                        </div>
                        
                    </div>
                    
                    <div className="col-md-7 mb-r mt-3">
                            <a href="" className="Primary-text"><h5><strong>Electric Service Vehicles</strong></h5></a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sapiente voluptate ducimus illum amet dolorum. Animi obcaecati qui atque eum aut quos. Quaerat ut accusantium perferendis culpa corporis laudantium facere?</p>
                            <a className="btn btn-cyan waves-effect waves-light">Read More</a>
                        </div>
                    
                
                </div>
                <Accordion />
            </div>
        )
    }
} 

export default ESC;