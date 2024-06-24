import React from 'react'
import { useDispatch } from 'react-redux'


const CheckoutForm = ({total, handlePaymentSuccess}) => {
  const dispatch = useDispatch()

  const handleToken = Token => {
    handlePaymentSuccess();
    dispatch(clearCart())
  }

  return (
    <div>
      
    </div>
  )
}

export default CheckoutForm
