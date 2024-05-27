import { NavLink, Outlet } from "react-router-dom";
import {   FaBook, FaEnvelope, FaHome, FaList, FaSearch, FaUsers, FaUtensils } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";



const Dashboard = () => {
    const [cart]= useCart();

    //todo get is Admin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen   bg-orange-400" >
                <ul className="menu p-6" >
                   {
                    isAdmin ? <>
                     <li>
                        <NavLink to='/dashboard/userHome'>
                        <FaHome></FaHome>
                            
                           Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addItems'>
                        <FaUtensils></FaUtensils>
                            
                        Add Items</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageItems'>
                        <FaList></FaList>
                            
                           Manage Items ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'>
                        <FaBook/>
                            
                     Manage Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/users'>
                        <FaUsers/>
                            
                        All Users</NavLink>
                    </li>
                    </>
                    :
                    <>
                    
                    </>
                   }
                    <div className="divider"></div> 
                    <li>
                        <NavLink to='/'>
                        <FaHome></FaHome>
                            
                             Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                        <FaSearch></FaSearch>
                            
                             Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/contact'>
                        <FaEnvelope/>
                            
                             Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;