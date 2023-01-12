import Link from "next/link";

const OptionCard = ({title, description, img, linkTo}) => {
    return(
        <div className="card" style={{ background: `url(${img})`,backgroundSize:'cover',backgroundRepeat:'no-repeat', width: "18rem",  padding: '2rem', color:'white' }} >
            <div className="card-body">
                <h5 className="card-title" style={{color:'white'}}>{title}</h5>
                <p className="card-text">
                    {description}
                </p>
                <Link href={linkTo}>
                    <button className="btn btn-primary" style={{backgroundColor: '#ff3300'}}>
                        Go
                    </button>
                </Link>
            </div>
        </div>

    );
}

export default OptionCard