// Importaciones necesarias
import { loadStripe } from '@stripe/stripe-js';
import { useElements, useStripe } from '@stripe/react-stripe-js';

// Cargar Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// Extender la interfaz global Window para incluir PayPal
interface PayPalOrderActions {
  order: {
    create: (orderData: { purchase_units: [{ amount: { value: string } }] }) => Promise<string>;
    capture: () => Promise<{ id: string }>;
  };
}

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: {
        createOrder: (
          data: Record<string, unknown>,
          actions: PayPalOrderActions
        ) => Promise<string>;
        onApprove: (
          data: { orderID: string },
          actions: PayPalOrderActions
        ) => Promise<void>;
        onError: (err: Error) => void;
      }) => {
        render: (selector: string) => void;
      };
    };
  }
}

/**
 * Custom hook para procesar pagos con tarjeta usando Stripe
 */
export const useProcessCardPayment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const processCardPayment = async (amount: number) => {
    try {
      // Asegúrate de que Stripe y Elements estén inicializados
      if (!stripe || !elements) throw new Error('Stripe failed to initialize');

      // Usar stripePromise para manejar la carga dinámica de Stripe
      const stripeInstance = await stripePromise;
      if (!stripeInstance) throw new Error('Stripe failed to load');

      // Llamar al backend para crear un PaymentIntent
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const { clientSecret } = await response.json();
      if (!clientSecret) throw new Error('Failed to create payment intent');

      // Obtener el elemento de tarjeta
      const cardElement = elements.getElement('card');
      if (!cardElement) throw new Error('Card element not found');

      // Confirmar el pago
      const { paymentIntent, error } = await stripeInstance.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
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
        paymentIntentId: paymentIntent?.id,
      };
    } catch (error) {
      console.error('Error processing card payment:', error);
      throw error;
    }
  };

  return { processCardPayment };
};

/**
 * Procesar pagos con PayPal
 */
export const processPayPalPayment = async (amount: number) => {
  try {
    const paypal = await loadPayPalScript();
    if (!paypal) throw new Error('PayPal SDK failed to load');

    return new Promise((resolve, reject) => {
      paypal.Buttons({
        // Crear la orden
        createOrder: (_data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString(),
                },
              },
            ],
          });
        },
        // Manejar la aprobación
        onApprove: async (_data, actions) => {
          const order = await actions.order.capture();
          resolve({
            success: true,
            orderId: order.id,
          });
        },
        // Manejar errores
        onError: (err) => {
          console.error('PayPal payment failed:', err.message);
          reject(err);
        },
      }).render('#paypal-button-container');
    });
  } catch (error) {
    console.error('Error processing PayPal payment:', error);
    throw error;
  }
};

/**
 * Cargar el script de PayPal
 */
const loadPayPalScript = (): Promise<typeof window.paypal> => {
  return new Promise((resolve, reject) => {
    // Verificar si el script ya está cargado
    if (window.paypal) {
      resolve(window.paypal);
      return;
    }

    // Crear el script dinámicamente
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}`;
    script.async = true;

    script.onload = () => {
      if (window.paypal) {
        resolve(window.paypal);
      } else {
        reject(new Error('PayPal SDK loaded but window.paypal is undefined'));
      }
    };

    script.onerror = () => {
      reject(new Error('Failed to load PayPal SDK'));
    };

    document.body.appendChild(script);
  });
};