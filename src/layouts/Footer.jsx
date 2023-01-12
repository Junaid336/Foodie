const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <div >
                    <div className="col-xs-8 col-sm-3 payment-options color-gray">
                    <h5>Payment Options</h5>
                    <ul>
                        <li>
                        <a href="#">
                            {" "}
                            <img src="/images/mastercard.png" alt="Mastercard" />{" "}
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-xs-8 col-sm-3 payment-options color-gray">
                    <h5>Follow Us On</h5>
                    <ul>
                        <li>
                        <a href="#">
                            {" "}
                            <img src="/images/mastercard.png" alt="Mastercard" />{" "}
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-xs-8 col-sm-3 address color-gray">
                    <h5>About Us</h5>
                    <p>
                        Concept design of oline food Reservation
                    </p>
                    <h5>
                        Phone: <a href="tel:+080000012222">031X 4X96 7X8</a>
                    </h5>{" "}
                    </div>
                    <div className="col-xs-8 col-sm-3 additional-info color-gray">
                    <h5>For Restaurants</h5>
                    <p>
                        Are you Restaurant?
                        <br />
                        Join Us to grow your business
                    </p>
                    </div>
                </div>
            </div>
        </footer>

    );
} 

export default Footer;