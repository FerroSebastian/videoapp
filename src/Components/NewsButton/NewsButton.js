import React from 'react';
import { Link } from 'react-router-dom';
import DB from '../../DB'

class NewsButton extends React.Component {
    render () {
        return (
            <div>
                <Link to= {`/News/${this.props.Url}`} type="button" className="btn btn-gray btn-rounded waves-effect">Read New</Link>
                
            </div>
        )
    }
}

export default NewsButton;