import React from 'react';
import Card from './Card';
import './Deals.css';

function Deals() {
    return(
        <div className="deals">
            <div className="head">
                <h1>
                    KING DEALS
                </h1>
            </div>
            <div className="top-dealer">
                <div className="dealer">
                    <h1>
                        TOP DEALS
                    </h1>
                </div>
                <div className="imga9">
                    <img src="https://burgerking-image.s3.amazonaws.com/16107794731x1119x540jpg" />
                </div>
            </div>
            <div className="limited">
                <div className="dealer2">
                    <h1>
                        LIMITED TIME DEALS
                    </h1>
                </div>
                <div className="show-deals">
                    <Card
                        src="https://burgerking-image.s3.amazonaws.com/products/Offer/ml/3x_ml_2Fries_99_Delivery_723x396.jpg"
                        title="2 FRIES @ RS 99"
                        description="Save 29%"
                    />
                    <Card
                        src="https://burgerking-image.s3.amazonaws.com/products/Offer/ml/3x_ml_2MangoShakes_199_Delivery_723x396.jpg"
                        title="2 MANGO SHAKES @ RS 199"
                        description="Save 28%"
                    />
                </div>
            </div>
            <div className="banner5">
            </div>
        </div>
    );
}

export default Deals