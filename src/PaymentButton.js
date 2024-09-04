import React from 'react';
import axios from 'axios';

const PaymentButton = () => {
  const handlePayment = async () => {
    try {
      // Create an order on the backend
      const { data } = await axios.post('/api/create-order', { amount: 500 }); // amount in INR

      const options = {
        key: 'YOUR_KEY_ID', // Your Razorpay Key ID
        amount: data.amount,
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Test Transaction',
        order_id: data.id,
        handler: function (response) {
          // Handle the payment response
          axios.post('/api/verify-payment', response)
            .then(res => {
              alert('Payment Successful');
            })
            .catch(error => {
              alert('Payment Verification Failed');
            });
        },
        prefill: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          contact: '9999999999'
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <button onClick={handlePayment}>Pay with Razorpay</button>
  );
};

export default PaymentButton;
