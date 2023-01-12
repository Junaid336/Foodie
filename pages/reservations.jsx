import PageWrapper from "../src/layouts/PageWrapper";

import CartItem from '../src/components/CartItem';

const Orders = () => {
    return (

        <PageWrapper>

            <div className="row">
                <div className="col-md-12">
                    <h2
                        style={{
                            fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
                            color: '#ff3300',
                            padding: '1rem'
                        }}
                    >
                        <i className=" fa fa-solid fa-clipboard" />
                        Reservations
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
        </PageWrapper>
    );
}

export default Orders