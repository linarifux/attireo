import React from 'react';
// 1. Ensure useNavigate is imported
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import cart context hook
import QuantitySelector from '../components/product/QuantitySelector'; // Reuse quantity selector
import AnimatedButton from '../components/ui/AnimatedButton';
import FadeInView from '../components/ui/FadeInView';
// 2. Ensure FiShoppingCart is imported
import { FiTrash2, FiShoppingCart } from 'react-icons/fi'; // Icon for removing items & empty cart

// Reusable component for each cart item row
const CartItemRow = ({ item, updateQuantity, removeFromCart }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    // Updated border color
    <div
      className="flex flex-col sm:flex-row items-center py-6 border-b border-attireo-black/10 dark:border-gray-700 gap-4 sm:gap-6"
    >
      {/* Product Image & Info */}
      <div className="flex items-center gap-4 w-full sm:w-1/2 lg:w-2/5">
        <Link
          to={`/product/${item.id}`}
          className="shrink-0 w-24 h-32 overflow-hidden"
        >
          <img
            src={item.images ? item.images[0] : "placeholder.jpg"}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </Link>
        <div>
          {/* Updated text color */}
          <Link
            to={`/product/${item.id}`}
            // Use CSS variable syntax
            className="font-semibold hover:underline text-attireo-black dark:text-attireo-white"
          >
            {item.name}
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Size: {item.selectedSize}
          </p>
          {/* Updated text color */}
          <p className="sm:hidden text-sm font-medium mt-1 text-attireo-black dark:text-attireo-white">
            {formatPrice(item.price)}
          </p>
        </div>
      </div>

      {/* Price (Desktop) */}
      {/* Updated text color */}
      <div className="hidden sm:block lg:w-1/5 text-center text-attireo-black dark:text-attireo-white">
        <p className="font-medium">{formatPrice(item.price)}</p>
      </div>

      {/* Quantity Selector */}
      {/* Updated text color */}
      <div className="w-full sm:w-auto lg:w-1/5 flex justify-center text-attireo-black dark:text-attireo-white">
        <QuantitySelector
          quantity={item.quantity}
          onDecrease={() => updateQuantity(item.cartItemId, item.quantity - 1)}
          onIncrease={() => updateQuantity(item.cartItemId, item.quantity + 1)}
        />
      </div>

      {/* Total Price & Remove Button */}
      <div className="w-full sm:w-auto lg:w-1/5 flex justify-between items-center sm:justify-end gap-4">
        {/* Updated text color */}
        <p className="font-semibold text-right text-attireo-black dark:text-attireo-white">
          {formatPrice(item.price * item.quantity)}
        </p>
        <button
          onClick={() => removeFromCart(item.cartItemId)}
          className="text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          aria-label={`Remove ${item.name} from cart`}
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
};

const CartPage = () => {
  // Use the calculated values directly from the context
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    totalItemsInCart,
    subtotal, // Use from context
    shippingCost, // Use from context
    total // Use from context
  } = useCart();
  const navigate = useNavigate();

  // formatPrice can be simplified or moved to a utils file if used elsewhere
  const formatPrice = (price) => {
    if (isNaN(price) || price === null || price === undefined) {
      return '$--.--';
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
   };


  return (
    <div className="pt-16">
      {/* Page Header - Updated background colors */}
      <header className="py-12 bg-attireo-beige/40 dark:bg-attireo-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView direction="up">
            <h1 className="text-4xl md:text-5xl font-bold">Your Cart</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
              {totalItemsInCart > 0
                ? `${totalItemsInCart} item(s)`
                : "Your cart is empty"}
            </p>
          </FadeInView>
        </div>
      </header>
      {/* Main Content - Updated background colors */}
      <section className="py-16 md:py-24 bg-attireo-white dark:bg-attireo-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length > 0 ? (
            <FadeInView direction="up"> {/* Wrap the main content */}
              <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                {/* Item Details */}
                <div className="lg:w-2/3">
                  {/* Header Row (Desktop) - Updated border color */}
                  <div className="hidden sm:flex text-xs uppercase text-gray-500 dark:text-gray-400 font-medium pb-4 border-b border-attireo-black/10 dark:border-gray-700">
                    <div className="w-1/2 lg:w-2/5">Product</div>
                    <div className="lg:w-1/5 text-center">Price</div>
                    <div className="lg:w-1/5 text-center">Quantity</div>
                    <div className="lg:w-1/5 text-right">Total</div>
                  </div>
                  {/* Cart Items */}
                  <div>
                    {cartItems.map((item) => (
                      <CartItemRow
                        key={item.cartItemId}
                        item={item}
                        updateQuantity={updateQuantity}
                        removeFromCart={removeFromCart}
                      />
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <aside className="lg:w-1/3">
                   <div className="sticky top-24 bg-attireo-beige/40 dark:bg-attireo-black/30 p-6 md:p-8"> {/* Updated background */}
                    {/* Updated text colors */}
                    <h2 className="text-2xl font-bold mb-6 text-attireo-black dark:text-attireo-white">
                      Order Summary
                    </h2>
                    <div className="space-y-4 mb-8">
                      {/* Updated text colors */}
                      <div className="flex justify-between text-base text-attireo-black dark:text-gray-300">
                        <span>Subtotal</span>
                        <span className="font-semibold">{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-base text-gray-600 dark:text-gray-400">
                        <span>Shipping estimate</span>
                        <span className="font-semibold">{formatPrice(shippingCost)}</span>
                      </div>
                    </div>
                    {/* Updated border and text colors */}
                    <div className="flex justify-between font-bold text-lg pt-4 border-t border-attireo-black/20 dark:border-gray-700 mb-8 text-attireo-black dark:text-attireo-white">
                      <span>Order total</span>
                      <span className="font-bold">{formatPrice(total)}</span>
                    </div>
                    {/* Updated button colors */}
                    <AnimatedButton className="w-full px-6 py-3 bg-attireo-black dark:bg-attireo-beige text-attireo-white dark:text-attireo-black font-semibold uppercase tracking-wider hover:bg-gray-800 dark:hover:bg-attireo-white/90">
                      Proceed to Checkout
                    </AnimatedButton>
                    {/* Updated link color */}
                    <Link
                      to="/shop"
                      className="block text-center mt-4 text-sm text-attireo-gold hover:underline"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </aside>
              </div>
            </FadeInView>
          ) : (
            // Empty Cart Message
            <FadeInView direction="up" className="text-center py-16">
              <FiShoppingCart
                size={60}
                className="mx-auto text-gray-400 mb-6"
              />
              <h2 className="text-2xl font-semibold mb-4 dark:text-attireo-white">
                Your Cart is Empty
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Looks like you haven't added anything yet.
              </p>
              {/* Updated button colors */}
              <AnimatedButton
                onClick={() => navigate("/shop")} // Use navigate from hook
                className="px-8 py-3 bg-attireo-black dark:bg-attireo-beige text-attireo-white dark:text-attireo-black font-semibold uppercase tracking-wider hover:bg-gray-800 dark:hover:bg-attireo-white/90"
              >
                Start Shopping
              </AnimatedButton>
            </FadeInView>
          )}
        </div>
      </section>
    </div>
  );
};

export default CartPage;