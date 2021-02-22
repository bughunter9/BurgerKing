import React from "react";
import Card from './Card';
import MenuCard from './MenuCard';
import "./Home.css";

function Home() {
    return (
        <div className="homepage">
            <div className="banner1"></div>

            <div className="menu">
                <div className="homepage__info">
                    <h1>OUR MENU</h1>
                </div>

                <div className="home__section">
                <Card
                    src="https://burgerking-image.s3.amazonaws.com/category/Home/web/3x_web_20201214092756118505_342x303png"
                    title="Top Picks"
                />
                <Card
                    src="https://burgerking-image.s3.amazonaws.com/category/Home/web/3x_web_20210215100524719657_342x303jpg"
                    title="Family Combos"
                />
                <Card
                    src="https://burgerking-image.s3.amazonaws.com/category/Home/web/3x_web_20201214094751853108_342x303png"
                    title="Whoppers"
                />
                <Card
                    src="https://burgerking-image.s3.amazonaws.com/15892674061xClassicBurgers342x303png"
                    title="Burgers and Wraps"
                />
                <Card
                    src="https://burgerking-image.s3.amazonaws.com/category/Home/web/3x_web_20201215070123697131_342x303png"
                    title="Sides"
                />
                <Card
                    src="https://burgerking-image.s3.amazonaws.com/15892674861xBeverages342x303png"
                    title="Bevrages"
                />
                </div>
            </div>
            <div className="menu2">
                <div className="homepage__info">
                    <h1>KING DEALS OF THE DAY</h1>
                </div>
                <div className="offers">
                    <img 
                    src="https://burgerking-image.s3.amazonaws.com/16107794731x1119x540jpg"
                    />
                </div>
            </div>
            <div className="menu2">
                <div className="homepage__info">
                    <h1>FAVOURITES</h1>
                </div>
                <div className="home__section2">
                    <MenuCard
                        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20201124161202096381_262x360jpg"
                        title="CHICKEN WHOPPER"
                        description="World famous flame grilled chicken whopper"
                        price="149/-"
                    />
                    <MenuCard
                        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20201203112052742554_262x360jpg"
                        title="CRISPY CHICKEN BURGER"
                        description="Crispy chicken patty burger"
                        price="79/-"
                    />
                    <MenuCard
                        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_CrispyVeg262x360.jpg"
                        title="CRISPY VEG BURGER"
                        description="Crispy veg patty burger"
                        price="55/-"
                    />
                    </div>
                <div className="home__section2">
                    <MenuCard
                        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_ChocolateThickShake262x360.jpg"
                        title="CHOCOLATE THICK SHAKE"
                        description="Our signature chocolate thich shake"
                        price="139/-"
                    />
                    <MenuCard
                        src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_RegularFries482x264.jpg"
                        title="FRIES"
                        description="The perfect crispy partner"
                        price="90/-"
                    />
                    <MenuCard
                        src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20201130094317297478_482x264jpg"
                        title="VEG WHOPPER"
                        description="Our signature Veg patty whopper"
                        price="149/-"
                    />
                </div>
            </div>
            <div className="banner2">
            </div>
            <div className="menu2">
                <div className="homepage__info">
                    <h1>BK SPECIALS</h1>
                </div>
                <div className="home__section2">
                    <MenuCard
                        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20201124161202096381_262x360jpg"
                        title="Chicken Whopper"
                        description="World famous flame grilled chicken whopper"
                        price="149/-"
                    />
                    <MenuCard
                        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_20201203112052742554_262x360jpg"
                        title="Crispy Chicken Burger"
                        description="Crispy chicken patty burger"
                        price="79/-"
                    />
                    <MenuCard
                        src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_CheesyFries482x264.jpg"
                        title="Cheesy Fries"
                        description="Crispy fries with loads of cheese"
                        price="99/-"
                    />
                </div>
                <div className="home__section2">
                    <MenuCard
                        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_CrispyVeg262x360.jpg"
                        title="Crispy Veg Burger"
                        description="Crispy veg patty burger"
                        price="55/-"
                    />
                    <MenuCard
                        src="https://burgerking-image.s3.amazonaws.com/products/Home/web/2x_web_ChocolateThickShake262x360.jpg"
                        title="Chocolate Thick Shake"
                        description="Our signature chocolate thich shake"
                        price="139/-"
                    />
                    <MenuCard
                        src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_FieryChicken_482x264.jpg"
                        title="Fiery Chicken Burger"
                        description="Beware!! Too hot to handle Chicken burger"
                        price="179/-"
                    />
                </div>
            </div>
            <div class="banner3">
            </div>
        </div>
    );
}

export default Home