import React, { createContext, useState, useContext, useMemo, useCallback } from 'react'; // Import useMemo, useCallback

// Create the context
const CartContext = createContext();

// Create a custom hook to use the context easily
export const useCart = () => useContext(CartContext);

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // State to hold cart items

  // --- Add item to cart (or increase quantity) ---
  // Wrap in useCallback
  const addToCart = useCallback((product, size, quantity) => {
    setCartItems(prevItems => {
      const cartItemId = `${product.id}-${size || 'OS'}`;
      const existingItem = prevItems.find(item => item.cartItemId === cartItemId);

      if (existingItem) {
        return prevItems.map(item =>
          item.cartItemId === cartItemId
            // Ensure quantity is treated as a number
            ? { ...item, quantity: (Number(item.quantity) || 0) + (Number(quantity) || 0) }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            ...product,
            cartItemId,
            selectedSize: size || 'OS',
            // Ensure quantity is stored as a number
            quantity: Number(quantity) || 0
          }
        ];
      }
    });
    // Note: console.log here will show the state *before* the update finishes.
    // Use useEffect below if you need to log the updated state.
  }, []); // Empty dependency array as it doesn't depend on external state/props

  // --- Remove item from cart ---
  // Wrap in useCallback
  const removeFromCart = useCallback((cartItemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.cartItemId !== cartItemId));
  }, []); // Empty dependency array

  // --- Update quantity of an item ---
  // Wrap in useCallback, depends on removeFromCart
  const updateQuantity = useCallback((cartItemId, newQuantity) => {
    const numericQuantity = Number(newQuantity) || 0; // Ensure it's a number
    if (numericQuantity < 1) {
      removeFromCart(cartItemId); // Remove if quantity goes below 1
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: numericQuantity }
          : item
      )
    );
  }, [removeFromCart]); // Dependency: depends on removeFromCart function

  // --- Calculate total number of items, subtotal, shipping, and total ---
  // Use useMemo for derived values
  const { totalItemsInCart, subtotal, shippingCost, total } = useMemo(() => {
    const itemsCount = cartItems.reduce((total, item) => total + (Number(item.quantity) || 0), 0);
    const calculatedSubtotal = cartItems.reduce(
      (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 0),
      0
    );
    const calculatedShipping = calculatedSubtotal >= 100 || calculatedSubtotal === 0 ? 0 : 5;
    const calculatedTotal = calculatedSubtotal + calculatedShipping;

    return {
      totalItemsInCart: itemsCount,
      subtotal: calculatedSubtotal,
      shippingCost: calculatedShipping,
      total: calculatedTotal
    };
  }, [cartItems]); // Recalculate only when cartItems changes

  // --- Value provided by the context ---
  // Add new calculated values
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItemsInCart,
    subtotal,
    shippingCost,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};