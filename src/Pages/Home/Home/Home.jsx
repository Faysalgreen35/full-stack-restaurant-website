 
import { Helmet } from "react-helmet-async";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";

 

const Home = () => {
   
    return (
        <div>
              <Helmet>
                <title>Bistro Boss | Home</title>
                
            </Helmet>
            
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;