import PageWrapper from "../src/layouts/PageWrapper";

import CartItem from '../src/components/CartItem';

const Cart = () => {
    return(

        <PageWrapper>
            
            <div className="row">
                <div className="col-md-12">
                    <h2
                     style={{
                            fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
                            color:'#ff3300', 
                            padding: '1rem'
                     }}
                    >
                        <i className="fa-sharp fa-solid fa-cart-shopping" />
                        Cart
                    </h2>
                </div>
            </div> 
            <div className="row">
                <div className="col-md-12">
                    <CartItem restaurant='Jako' img="/images/food1.jpg" name='Fried cheiken wiht food' shortName='froed Chicken' qty={2} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <CartItem restaurant='Jako' img="/images/food1.jpg" name='Fried cheiken wiht food' shortName='froed Chicken' qty={2} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <CartItem restaurant='Jako' img="/images/food1.jpg" name='Fried cheiken wiht food' shortName='froed Chicken' qty={2} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <CartItem restaurant='Jako' img="/images/food1.jpg" name='Fried cheiken wiht food' shortName='froed Chicken' qty={2} />
                </div>
            </div>
            <div className="row m-2" >
                <div className="col-md-5 col-xs-5">
 
                </div>
                <div className="col-md-3 col-mds-3">
                    <button type="button" class="btn btn-danger">Checkout</button>
                </div>
            </div>
            
                
            
        </PageWrapper>
    );
}

export default Cart