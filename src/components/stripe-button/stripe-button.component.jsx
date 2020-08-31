import React from 'react';
import StripCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey="pk_test_51HMBS7AarBYLBQBrwMCMKEOHGvYMM0XuFKk5HAKMqVj8fttziDvrCKDMpGkEClaZSOW04lQRdy0cPZeorNJXedRb00pNywrIjB";

    const onToken=token=>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripCheckout
            label='Pay Now'
            name='JioClothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;