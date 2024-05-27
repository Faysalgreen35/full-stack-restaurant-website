import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

 

const useCart = () => {
    //tan stack query
    const {user}= useAuth();
    const axiosSecure = useAxiosSecure();
    const {refetch, data: cart = [] } = useQuery({
        queryKey:['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            console.log(res)
            return res.data;
        }
    })
    return [cart, refetch];


};

export default useCart;