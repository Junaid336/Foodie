import FoodItem from "./FoodItem";

const foods = [
  {
    name:'Fried Chicken with Cheez',
    shortName: 'Fried Chicken',
    price: 1200,
    rating: 3,
    img:'/images/food1.jpg',
    reviews:148,
    restaurant: 'Jako Restau',
    address:'ABC 124',
    hearts: 34 
  }
]


const Popular = () => {
    return(
        <section className="popular">
          <div className="container">
            <div className="title text-xs-center m-b-30">
              <h2>Popular Foods</h2>
              <p className="lead">The easiest way to your favourite food</p>
            </div>
            <div className="row">
              <FoodItem {...foods[0]} />             
              <div className="col-xs-12 col-sm-6 col-md-4 food-item">
                <div className="food-item-wrap">
                  <div
                    className="figure-wrap bg-image"
                    data-image-src="/images/food2.jpg"
                  >
                    <div className="rating pull-left">
                      {" "}
                      <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                      <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                      <i className="fa fa-star-o" />{" "}
                    </div>
                    <div className="review pull-right">
                      <a href="#">198 reviews</a>{" "}
                    </div>
                  </div>
                  <div className="content">
                    <h5>
                      <a href="profile.html">Fried Chicken</a>
                    </h5>
                    <div className="product-name">Fried Chicken with cheese</div>
                    <div className="price-btn-block">
                      {" "}
                      <span className="price">PKR 1800</span>{" "}
                      <a href="#" className="btn theme-btn-dash pull-right">
                        Reserve Now
                      </a>{" "}
                    </div>
                  </div>
                  <div className="restaurant-block">
                    <div className="left">
                      {/* <a className="pull-left" href="profile.html">
                        {" "}
                        <img src="/images/logo2.png" alt="Restaurant logo" />{" "}
                      </a> */}
                      <div className="pull-left right-text">
                        {" "}
                        <a href="#">Lahori Chicken House</a>{" "}
                        <span>Al Chungi</span>{" "}
                      </div>
                    </div>
                    <div className="right-like-part pull-right">
                      {" "}
                      <i className="fa fa-heart-o" /> <span>48</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 food-item">
                <div className="food-item-wrap">
                  <div
                    className="figure-wrap bg-image"
                    data-image-src="/images/food3.jpg"
                  >
                    <div className="rating pull-left">
                      {" "}
                      <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                      <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                      <i className="fa fa-star-o" />{" "}
                    </div>
                    <div className="review pull-right">
                      <a href="#">198 reviews</a>{" "}
                    </div>
                  </div>
                  <div className="content">
                    <h5>
                      <a href="profile.html">Fried Chicken</a>
                    </h5>
                    <div className="product-name">Fried Chicken with cheese</div>
                    <div className="price-btn-block">
                      {" "}
                      <span className="price">PKR 2000</span>{" "}
                      <a href="#" className="btn theme-btn-dash pull-right">
                        Reserve Now
                      </a>{" "}
                    </div>
                  </div>
                  <div className="restaurant-block">
                    <div className="left">
                      {/* <a className="pull-left" href="profile.html">
                        {" "}
                        <img src="/images/logo3.png" alt="Restaurant logo" />{" "}
                      </a> */}
                      <div className="pull-left right-text">
                        {" "}
                        <a href="#">Home Food Restaurant</a>{" "}
                        <span>Al Shalimar</span>{" "}
                      </div>
                    </div>
                    <div className="right-like-part pull-right">
                      {" "}
                      <i className="fa fa-heart-o" /> <span>48</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    );
}

export default Popular;