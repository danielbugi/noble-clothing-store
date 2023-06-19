import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useCartContext } from '../context/cart_context';
import { formatPricePaypal, formatPrice } from '../utils/helpers';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaypalCheckout = () => {
  // eslint-disable-next-line no-unused-vars
  const { shipping_fee, total_amount, cart } = useCartContext();
  const { clearCart } = useCartContext();
  const navigate = useNavigate();

  const [paidFor, setPaidFor] = useState(false);
  const [id, setId] = useState(null);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    setPaidFor(true);
    setId(orderId);
  };

  if (paidFor) {
    setTimeout(() => {
      clearCart();
      setId(null);
      navigate('/');
    }, 10000);
  }

  if (error) {
    alert(error);
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
        currency: 'USD',
        intent: 'capture',
      }}
    >
      <div>
        {paidFor ? (
          <article>
            <h4>Thank you!</h4>
            <h4>order number : {id}</h4>
            <h4>Your payment was successful!</h4>
            <h4>Redirecting to home page...</h4>
          </article>
        ) : (
          <>
            <p>your total is : {formatPrice(shipping_fee + total_amount)}</p>
            <PayPalButtons
              style={{ layout: 'horizontal', height: 48 }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: formatPricePaypal(
                          total_amount + shipping_fee
                        ).toString(),
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log('order', order);
                handleApprove(data.orderID);
              }}
              onError={(err) => {
                setError(err);
                console.error('PayPal checkout error', err);
              }}
            />
          </>
        )}
      </div>
    </PayPalScriptProvider>
  );
};
export default PaypalCheckout;
