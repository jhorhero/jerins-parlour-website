import Banner from "../Components/Banner/Banner";
import HandleSEction from "../Components/HandleSection/HandleSEction";
import Services from "../Components/Services/Services";
import Testimonials from "../Components/Testimonials/Testimonials";
import NewsLetter from "../NewsLetter/NewsLetter";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <HandleSEction/>
            <Testimonials/>
            <NewsLetter/>
        </div>
    );
};

export default Home;