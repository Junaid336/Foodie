import React from "react";

import Link from 'next/link'

const Header = () => {
    return(
        <header id="header" className="header-scroll top-header headrom">
        <nav className="navbar navbar-dark">
            <div className="container">
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#mainNavbarCollapse">&#9776;</button>
                <Link href="/" className="navbar-brand">
                        <div className="navbar-brand" href="#">
                            {/* <img className="img-rounded" src='/images/Food.png' alt="" /> */}
                            <span style={{
                                fontFamily: 'Give You Glory, cursive',
                                color: '#f30'
                            }}>
                                Food
                            </span>
                            <span>ie</span>
                        </div>
                </Link>
                <div className="collapse navbar-toggleable-md  float-lg-right" id="mainNavbarCollapse">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Restaurants <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link href='/cart'>
                                <div className="nav-link active" href="#">
                                    Cart <span className="sr-only">(current)</span>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                Account
                            </a>
                            <div className="dropdown-menu">
                                <Link href='/signin'><span className="dropdown-item" >Signin</span></Link>
                                <Link href='/signup'><span className="dropdown-item" >Sginup</span></Link>
                                <Link href='/restaurant/signup'><span className="dropdown-item" >Owner Sginup</span></Link>
                                <Link href='/restaurant/signin'><span className="dropdown-item" >Owner Signin</span></Link>
                                <Link href='/'><span className="dropdown-item" >Reservations</span></Link>
                                <Link href='/'><span className="dropdown-item" >Profile</span></Link>
                                <div className="dropdown-divider"></div>
                                <Link href='/'><span className="dropdown-item" >Signout</span></Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
}

export default Header;