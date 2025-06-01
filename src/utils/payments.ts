import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const processCardPayment = async (amount: number) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to initialize');

    // In a real implementation, you would:
    // 1. Call your backend to create a payment intent
    // 2. Use the client secret to confirm the payment
    // This is a simplified example
    const { paymentIntent, error } = await stripe.confirmCardPayment('client_secret', {
      payment_method: {
        card: elements.getElement('card'),
        billing_details: {
          name: 'User Name',
        },
      },
    });

    if (error) {
      throw error;
    }

    return {
      success: true,
      paymentIntentId: paymentIntent.id
    };
  } catch (error) {
    console.error('Error processing card payment:', error);
    throw error;
  }
};

export const processPayPalPayment = async (amount: number) => {
  try {
    // Initialize PayPal button
    const paypal = await loadPayPalScript();
    
    return new Promise((resolve, reject) => {
      paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount.toString()
              }
            }]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          resolve({
            success: true,
            orderId: order.id
          });
        },
        onError: (err) => {
          reject(err);
        }
      }).render('#paypal-button-container');
    });
  } catch (error) {
    console.error('Error processing PayPal payment:', error);
    throw error;
  }
};

const loadPayPalScript = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}`;
    script.onload = () => resolve(window.paypal);
    script.onerror = () => reject(new Error('PayPal SDK failed to load'));
    document.body.appendChild(script);
  });
};