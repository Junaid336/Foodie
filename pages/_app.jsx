import Header from "../src/layouts/Header";
import Footer from "../src/layouts/Footer";

 
 const MyApp = ({Component, pageProps}) => {

    

    return(
    <div className="site-wrapper animsition" data-animsition-in="fade-in" data-animsition-out="fade-out">
        <Header />
        <Component {...pageProps} />
        <Footer />
    </div>    
    )
 }

 export default MyApp;