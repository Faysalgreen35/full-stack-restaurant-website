import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../../src/assets/menu/banner3.jpg'
import dessertImg from '../../../../src/assets/menu/dessert-bg.jpeg'
import saladImg from '../../../../src/assets/menu/salad-bg.jpg'
import soupImg from '../../../../src/assets/menu/soup-bg.jpg'
import pizzaImg from '../../../../src/assets/menu/pizza-bg.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
// import PopularMenu from "../../Home/PopularMenu/PopularMenu";



const Menu = () => {

    
    const [menu]= useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>

            </Helmet>
            <Cover
                img={menuImg}
                title="Our Menu"
            ></Cover>
            <SectionTitle subHeading="Don't Miss" heading='Todays Offer'></SectionTitle>

           {/* offered menu items   */}
             <MenuCategory items={offered} ></MenuCategory>
           {/* Dessert menu items   */}

             <MenuCategory 
             items={dessert}
             title ="dessert"
             img={dessertImg}
             
             ></MenuCategory>
           {/* pizza menu items   */}

             <MenuCategory 
             items={pizza}
             title ="pizza"
             img={pizzaImg}
             
             ></MenuCategory>
             
           {/* Salad menu items   */}

             <MenuCategory 
             items={salad}
             title ="salad"
             img={saladImg}
             
             ></MenuCategory>
             
           {/* Soup menu items   */}

             <MenuCategory 
             items={soup}
             title ="soup"
             img={soupImg}
             
             ></MenuCategory>
             
        </div>
    );
};

export default Menu;