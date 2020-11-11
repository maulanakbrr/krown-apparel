import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_AFPTZ1J6tj8e2PzaxNxmaY7h00tt9PNw3G';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            name='KROWN Apparel Ltd.'
            description={`Your total is $${price}`}
            label='Pay Now'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            amout={priceForStripe}
            paelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;