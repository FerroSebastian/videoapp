import React from 'react';
import NewsButton from '../NewsButton/NewsButton'


class BrandCard extends React.Component {
    render() {

        return (
            <div className="container">
                <div className="row">
                        <div className="card">
                            {/*this.props.ImgURL*/}
                            <img className="card-img" src="{this.props.Logo}"/>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.Brand}</h5>
                                <p className="card-text">{this.props.Subtitle}</p>
                                <NewsButton />
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default BrandCard;