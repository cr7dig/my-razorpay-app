import React from 'react';

const PaymentButton = () => {
    const loadRazorpay = () => {
        const options = {
            key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key ID
            amount: '50000', // Amount in currency subunits (e.g., 50000 paise = INR 500)
            currency: 'INR',
            name: 'YourShop',
            description: 'Test Transaction',
            handler: function (response) {
                alert('Payment Successful with ID: ' + response.razorpay_payment_id);
            },
            prefill: {
                name: 'John Doe',
                email: 'john.doe@example.com',
                contact: '9999999999',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <button onClick={loadRazorpay}>
            Pay with Razorpay
        </button>
    );
};

export default PaymentButton;
