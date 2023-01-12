import React from "react";

const FoodItem = ({name, shortName, price, img, rating, reviews, restaurant, address, hearts}) => {

    const ratingStars = Array.from({length:5},(v, index)=>{
        return(
            <React.Fragment key={index}>
                <i className={`fa fa-star${index < rating ? '' : '-o'}`} />
                {index % 2 !=0 ? ' ' : ''}
            </React.Fragment>
        )
    })

    return(
        <div className="col-xs-12 col-sm-6 col-md-4 food-item">
            <div className="food-item-wrap">
                <div
                    className="figure-wrap bg-image"
                    data-image-src={img}
                >

                    <div className="rating pull-left">
                        {" "}
                        {ratingStars}
                        {" "}
                    </div>
                    <div className="review pull-right">
                        <a href="#">{reviews} reviews</a>{" "}
                    </div>
                </div>
                <div className="content">
                    <h5>
                        <a href="#">{shortName}</a>
                    </h5>
                    <div className="product-name">{name}</div>
                    <div className="price-btn-block">
                        {" "}
                        <span className="price">PKR {price}</span>{" "}
                        <a href="#" className="btn theme-btn-dash pull-right">
                            Reserve Now
                        </a>{" "}
                    </div>
                </div>
                <div className="restaurant-block">
                    <div className="left">
                        {/* <a className="pull-left" href="profile.html">
                        {" "}
                        <img src="/images/lahore.png" alt="Restaurant logo" />{" "}
                      </a> */}
                        <div className="pull-left right-text">
                            {" "}
                            <a href="#">{restaurant}</a>{" "}
                            <span>{address}</span>{" "}
                        </div>
                    </div>
                    <div className="right-like-part pull-right">
                        {" "}
                        <i className="fa fa-heart-o" /> <span>{hearts}</span>{" "}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodItem;