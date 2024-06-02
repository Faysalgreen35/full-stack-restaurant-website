import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

 
 
 const Payment = () => {

    // todo add publishable key
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
    return (
        <div>
            <SectionTitle
            heading='Payment'
            subHeading="Please Pay to Eat"
            ></SectionTitle>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
 };
 
 export default Payment;