import React from 'react';
import { X, ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, getTotal, itemCount } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center mb-6">
          <ShoppingCart className="w-6 h-6 text-teal-600 dark:text-teal-400 mr-2" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Cart ({itemCount})
          </h2>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-slate-600 dark:text-slate-300">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {items.map((item) => (
                <div
                  key={item.property.id}
                  className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg"
                >
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
                      {item.type === 'purchase' ? 'Purchase' : `Rent (${item.duration || 1} month${item.duration !== 1 ? 's' : ''})`}
                    </p>
                    <p className="text-teal-600 dark:text-teal-400 font-medium">
                      {formatPrice(item.property.price)}
                      {item.type === 'rent' && '/mo'}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.property.id)}
                    className="text-red-500 hover:text-red-600 dark:hover:text-red-400"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 dark:border-slate-600 pt-4">
              <div className="flex justify-between mb-4">
                <span className="text-slate-900 dark:text-white font-medium">Total</span>
                <span className="text-slate-900 dark:text-white font-bold">
                  {formatPrice(getTotal())}
                </span>
              </div>

              <Button
                variant="primary"
                fullWidth
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;