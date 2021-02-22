import React from 'react';
import './Wall.css';

function Wall() {
    return(
        <div className="wall2">
            <div className="container container--blend ">
                <div className="wall">
                    <h1 > ABOUT BURGER KING</h1>
                </div>
                <div className="row3">
                    <div className="column3">
                        <img 
                        className="imga"
                        src="https://www.burgerking.in/static/media/home-of-the-whopper.33b5f485.jpg"
                        />
                    </div>
                    <div className="column3">
                        <div className="imga2">
                            <div className="imga3">
                                <h2>GREAT FOOD COMES FIRST</h2>
                            </div>
                            <div className="imga4">
                                <h4>
                                    Our restaurants are known for serving great quality food and affordable food.
                                    Founded in 1954, Burger King is the 2nd largest hamburger chain in the world with 
                                    about 18,000 restaurants operating in about 100 countries. The original 
                                    HOME OF THE WHOPPER and our online service is what has defined our brand over the last 
                                    50 years.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imga5">
                <img
                    className="imga5a"
                    src="https://www.burgerking.in/static/media/bk-wall-banner-3.4ab48ec9.jpg"
                />
                <img
                    className="imga5b"
                    src="https://www.burgerking.in/static/media/bk-wall-banner-2.e1210188.jpg"
                />
                <img
                    src="https://www.burgerking.in/static/media/bk-wall-banner-1.a84a9b57.jpg"
                />
            </div>
            <div className="cover">
                <div className="banner4">
                </div>
            </div>
        </div>
    );
}

export default Wall