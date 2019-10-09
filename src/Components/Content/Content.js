import React from 'react';

import EC from '../ElectriCars/EC';
import ERC from '../ElectricRacingCars/ERC';
import ESC from '../ElectricServiceCars/ESC';



class Content extends React.Component {
    render () {
        return (
            <div className="container">
                <EC />
                <ERC />
                <ESC />               
            </div>
        )
    }
} 

export default Content;
