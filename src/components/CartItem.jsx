const CartItem = ({restaurant, img, name, shortName, qty}) => {
    return(
        <div className="card">
            <div className="card-header">
                {restaurant}
            </div>
            <div className="card-body">
                <div className="row g-0 row-eq-height">
                    <div className="col-xs-2 col-md-1" >
                        <div
                         style={{ transform: 'translate(20%,50%) scale(0.8)', }}
                        >
                            <label class="custom-control custom-checkbox" >
                                <input type="checkbox" class="custom-control-input" />
                                <span class="custom-control-indicator"></span>
                                <span class="custom-control-description">Check</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-xs-3 col-md-2">
                        <img
                         src={img}
                         className="img-fluid rounded-start" 
                         alt="..." 
                         style={{
                            height: '5rem',
                            // width: '7rem',
                            padding: '0.5rem'
                         }}
                        />
                    </div>
                    <div className="col-xs-5 col-md-8" >
                        <div className="card-body">
                            <h5 className="card-title">{shortName}</h5>
                            <p className="card-text">{name}</p>
                        </div>
                    </div>
                    <div className="col-xs-2 col-md-1">
                        <div class="btn-group-vertical btn-group-sm" role="group" aria-label="Small button group">
                            <button type="button" class="btn btn-outline-danger">+</button>
                            <button type="button" class="btn btn-danger">{qty}</button>
                            <button type="button" class="btn btn-outline-danger">-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;