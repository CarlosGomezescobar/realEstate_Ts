import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWeb3 } from '../context/Web3Context';
import { makePaymentWithCrypto } from '../utils/web3';
import { useProcessCardPayment } from '../utils/payments';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const CheckoutPage: React.FC = () => {
  const { items, getTotal, clearCart } = useCart();
  const { isConnected, connectWallet } = useWeb3();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'crypto' | 'card'>('crypto');
  const [isProcessing, setIsProcessing] = useState(false);

  // Formatear precio
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Custom hook para procesar pagos con tarjeta
  const { processCardPayment } = useProcessCardPayment();

  // Manejar el pago
  const handlePayment = async () => {
    if (!isConnected && paymentMethod === 'crypto') {
      await connectWallet();
      return;
    }
    setIsProcessing(true);
    try {
      if (paymentMethod === 'crypto') {
        // Pago con criptomonedas
        const result = await makePaymentWithCrypto(getTotal() * 1.025);
        if (result.success) {
          clearCart();
          navigate('/checkout/success', {
            state: {
              transactionHash: result.transactionHash,
              paymentMethod: 'crypto',
            },
          });
        }
      } else {
        // Pago con tarjeta (Stripe)
        const result = await processCardPayment(getTotal() * 1.025);
        if (result.success) {
          clearCart();
          navigate('/checkout/success', {
            state: {
              paymentId: result.paymentIntentId,
              paymentMethod: 'card',
            },
          });
        }
      }
    } catch (error) {
      console.error('Payment failed:', error);
      // Mostrar mensaje de error al usuario
    } finally {
      setIsProcessing(false);
    }
  };

  // Si el carrito está vacío
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Navbar />
        <Container className="py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Your cart is empty
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Add some properties to your cart to proceed with checkout
            </p>
            <Button variant="primary" onClick={() => navigate('/properties')}>
              Browse Properties
            </Button>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Checkout</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Resumen del pedido */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Order Summary
                </h2>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.property.id} className="flex items-start space-x-4">
                      <img
                        src={item.property.imageUrl}
                        alt={item.property.title}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="text-slate-900 dark:text-white font-medium">
                          {item.property.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          {item.type === 'purchase'
                            ? 'Purchase'
                            : `Rent (${item.duration || 1} month${item.duration !== 1 ? 's' : ''})`}
                        </p>
                        <p className="text-teal-600 dark:text-teal-400 font-medium">
                          {formatPrice(item.property.price)}
                          {item.type === 'rent' && '/mo'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Método de pago */}
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() => setPaymentMethod('crypto')}
                    className={`w-full flex items-center p-4 border rounded-lg ${
                      paymentMethod === 'crypto'
                        ? 'border-teal-600 bg-teal-50 dark:bg-teal-900/20'
                        : 'border-slate-300 dark:border-slate-600'
                    }`}
                  >
                    <img src="/metamask-fox.svg" alt="MetaMask" className="w-6 h-6 mr-3" />
                    <div className="flex-1 text-left">
                      <p className="font-medium text-slate-900 dark:text-white">
                        Pay with Crypto
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Connect your wallet to pay with cryptocurrency
                      </p>
                    </div>
                    {paymentMethod === 'crypto' && (
                      <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    )}
                  </button>
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`w-full flex items-center p-4 border rounded-lg ${
                      paymentMethod === 'card'
                        ? 'border-teal-600 bg-teal-50 dark:bg-teal-900/20'
                        : 'border-slate-300 dark:border-slate-600'
                    }`}
                  >
                    <CreditCard className="w-6 h-6 mr-3 text-slate-700 dark:text-slate-300" />
                    <div className="flex-1 text-left">
                      <p className="font-medium text-slate-900 dark:text-white">
                        Credit / Debit Card
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Pay with your credit or debit card
                      </p>
                    </div>
                    {paymentMethod === 'card' && (
                      <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            {/* Total del pedido */}
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Order Total
                </h2>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span>Subtotal</span>
                    <span>{formatPrice(getTotal())}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span>Service Fee</span>
                    <span>{formatPrice(getTotal() * 0.025)}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-600">
                    <div className="flex justify-between text-lg font-semibold text-slate-900 dark:text-white">
                      <span>Total</span>
                      <span>{formatPrice(getTotal() * 1.025)}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    `Pay ${formatPrice(getTotal() * 1.025)}`
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default CheckoutPage;