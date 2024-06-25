import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { clearCart } from '../../redux/slice/cartSlice';

const CheckoutForm = ({ total, handlePaymentSuccess }) => {
  const dispatch = useDispatch();

  const handleToken = (token) => {
    handlePaymentSuccess();
    dispatch(clearCart());
  };

  const stripeKey = import.meta.env.VITE_STRIPE_KEY;

  // if (!stripeKey) {
  //   console.error('Stripe publishable key not found');
  //   return <p>Stripe key not set. Please configure it in your environment variables.</p>;
  // }

  return (
    <>
      <StripeCheckout
        token={handleToken}
        stripeKey={stripeKey}
        amount={total * 100}
        name="Mooncart E-Commerce Website"
        description="Payment using stripe"
      >
        <button className='w-full bg-gray-200 py-3.5 my-3 font-medium'>
          Pay ${total?.toFixed(2)}
        </button>
      </StripeCheckout>
    </>
  );
};

export default CheckoutForm;




// import React from 'react'
// import { useDispatch } from 'react-redux'
// import StripeCheckout from 'react-stripe-checkout';


// const CheckoutForm = ({total, handlePaymentSuccess}) => {
//   const dispatch = useDispatch()

//   const handleToken = Token => {
//     handlePaymentSuccess();
//     dispatch(clearCart())
//   }

//   return (
//     <>
//       <StripeCheckout
//         token = {handleToken}
//         stripeKey = "pk_test_51PVTv7P8ZPN5IN1KD4MxxmqJWnDYieG74oPTRFrBPC2wTanZRTeDvcCveJc40b4MPzgNOa64RW4T3G7OF6oEIryF00NWpnZkL9"
//         amount = {total * 100}
//         name = "Mooncart                E-Commerce Website"
//         description = "Payment test using stripe"
//       >

//         <button className='w-full bg-gray-200 py-3.5 my-3 font-medium'>
//           Pay ${total?.toFixed(2)}
//         </button>
        
//       </StripeCheckout>
//     </>
//   )
// }

// export default CheckoutForm
