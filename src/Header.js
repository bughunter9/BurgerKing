import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import BookRoundedIcon from '@material-ui/icons/BookRounded';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import { Link } from "react-router-dom";
import './Header.css';


function Header(){
    return (
        <div className='header'>
            <Link to="/">
                <img
                        className="header__icon"
                        src="https://th.bing.com/th/id/OIP.a4hkUm6ER7jmc_eo0l0TDgHaHa?w=207&h=207&c=7&o=5&dpr=1.25&pid=1.7"
                        alt=""
                />
            </Link>
                {/* <p>Restaurant  Delivery</p> */}
            <div className='header__center'>
                <input type="text" placeholder="Pick Your Location"/>
                <SearchIcon />
            </div>

            <div className='header__right'>
                        <BookRoundedIcon />
                    
                        <Link to='/wall' style={{ textDecoration: 'none' }}>
                            <h5 className="icon1">BK Wall</h5>
                        </Link>
                    
                        <WhatshotRoundedIcon />
                    
                        <Link to='/deals' style={{ textDecoration: 'none' }}>
                            <h5 className="icon2">King Deals</h5>
                        </Link>
                    
                        <PersonSharpIcon />
                        <h5 className="icon3">Login</h5>
                        <LocalMallRoundedIcon />
                        <h5 className="icon4">Cart</h5>
                        <SearchRoundedIcon />
            </div>
        </div>
    );
}

export default Header;