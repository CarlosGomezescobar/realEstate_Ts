import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const CheckoutSuccessPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { paymentMethod, transactionHash, paymentId } = location.state || {};

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <Container className="py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="mx-auto w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Thank you for your purchase. Your transaction has been completed successfully.
          </p>

          {paymentMethod === 'crypto' && transactionHash && (
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 mb-8">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Transaction Hash:
              </p>
              <p className="font-mono text-sm break-all">
                {transactionHash}
              </p>
            </div>
          )}

          {paymentMethod === 'card' && paymentId && (
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 mb-8">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Payment ID:
              </p>
              <p className="font-mono text-sm">
                {paymentId}
              </p>
            </div>
          )}

          <div className="space-x-4">
            <Button
              variant="primary"
              onClick={() => navigate('/properties')}
            >
              Browse More Properties
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/account/purchases')}
            >
              View My Purchases
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default CheckoutSuccessPage;