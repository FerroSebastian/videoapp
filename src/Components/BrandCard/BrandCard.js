import React from 'react';
import NewsButton from '../NewsButton/NewsButton'
import { ReactComponent as LogoVolkswagen } from './../VolkswagenLogo.svg';

class BrandCard extends React.Component {
    render() {

        return (
            <div className="container">
                
                        <div className="card-group">
                            <div className="card col-sm-4">
                                {/*this.props.ImgURL*/}
                                <LogoVolkswagen width="100%" height="" className="mt-2 card-header"/>
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.Brand}</h5>
                                    <p className="card-text">{this.props.Subtitle}</p>
                                    <NewsButton />
                                </div>
                            </div>
                            <div className="card col-sm-4">
                                      {/*this.props.ImgURL*/}
                                      <LogoVolkswagen width="100%" height="" className="mt-2 card-header"/>
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.Brand}</h5>
                                    <p className="card-text">{this.props.Subtitle}</p>
                                    <NewsButton />
                                </div>
                            </div>
                            <div className="card col-sm-4">
                                      {/*this.props.ImgURL*/}
                                      <LogoVolkswagen width="100%" height="" className="mt-2 card-header"/>
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