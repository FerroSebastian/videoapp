import React from 'react';
import { Link } from 'react-router-dom';
import DB from '../../DB'

class TutorialButton extends React.Component {
    render () {
        return (
            <div>
                <Link to= {`/Tutorial/${this.props.Id}`} type="button" className="btn btn-gray btn-rounded waves-effect">Go to Tutorial</Link>
                
            </div>
        )
    }
}

export default TutorialButton;