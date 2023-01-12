
const OptionCard = ({title, description, img}) => {
    return(
        <div className="card" style={{ background: `url(${img})`,backgroundSize:'cover',backgroundRepeat:'no-repeat', width: "18rem",  padding: '2rem', color:'white' }} >
            <div className="card-body">
                <h5 className="card-title" style={{color:'white'}}>{title}</h5>
                <p className="card-text">
                    {description}
                </p>
                <a href="#" className="btn btn-primary" style={{backgroundColor: '#ff3300'}}>
                    Go
                </a>
            </div>
        </div>

    );
}

export default OptionCard