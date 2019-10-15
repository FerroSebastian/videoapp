import React from 'react';
import { Link } from 'react-router-dom';

class NewsButton extends React.Component {
    render () {
        return (
            <div>
                <Link to="/News" type="button" className="btn btn-primary btn-rounded waves-effect">Read New</Link>
                
            </div>
        )
    }
}

export default NewsButton;