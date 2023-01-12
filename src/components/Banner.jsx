import Search from "./Search";
import Steps from "./Steps";

const Banner = () => {

    const onClick = () => {
        console.log('click');
    }

    return(
        <section className="hero bg-image" data-image-src="/images/image01.jpg" style={{ background: 'url(/images/image01.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className="hero-inner">
                <div className="container text-center hero-text font-white">
                <h1>Reserve &amp; Enjoy </h1>
                <h5 className="font-white space-xs">
                    Find restaurants and specials
                </h5>
                <div className="banner-form">
                    <Search onClick={onClick} />
                </div>
                <Steps />
                </div>
            </div>
        </section>
    );
}

export default Banner;