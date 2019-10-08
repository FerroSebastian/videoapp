import React from 'react';

import First from './First/First';
import Second from './Second/Second';
import Third from './Third/Third';



class Content extends React.Component {
    render () {
        return (
            <div className="container">
                <First />
                <Second />
                <Third />               
            </div>
        )
    }
} 

export default Content;
