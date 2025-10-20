import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts } from '../data/mockData'; // Import your product data
import ProductImageGallery from '../components/product/ProductImageGallery';
import QuantitySelector from '../components/product/QuantitySelector';
import AnimatedButton from '../components/ui/AnimatedButton';
import FadeInView from '../components/ui/FadeInView';
import Newsletter from '../components/home/Newsletter';
import ProductCard from '../components/shop/ProductCard'; // For related products

const ProductDetailPage = () => {
  const { productId } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Find the product based on the ID from the URL
  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === parseInt(productId));
    setProduct(foundProduct);
    // Reset selections when product changes
    setSelectedSize(foundProduct && foundProduct.sizes ? foundProduct.sizes[0] : ''); 
    setQuantity(1);
  }, [productId]);

  const handleAddToCart = () => {
    if (!product) return;
    if (product.sizes && !selectedSize) {
      alert('Please select a size.'); // Simple validation
      return;
    }
    console.log(`Added to cart: ${product.name}, Size: ${selectedSize || 'N/A'}, Quantity: ${quantity}`);
    // In a real app, you'd dispatch an action to update cart state here
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  // Handle product not found
  if (!product) {
    return (
      <div className="pt-32 text-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-attireo-gold hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  // Find related products (simple example: same category, not the current product)
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3); // Show up to 3

  return (
    <div className="pt-16"> {/* Below navbar */}
      <FadeInView direction="up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Image Gallery */}
            <ProductImageGallery images={product.images} productName={product.name} />

            {/* Product Info & Actions */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h1>
              <p className="text-2xl font-semibold mb-6">{formatPrice(product.price)}</p>
              
              <div className="prose prose-sm dark:prose-invert max-w-none mb-8 text-gray-700 dark:text-gray-300">
                <p>{product.description}</p>
              </div>

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <label htmlFor="size" className="block text-sm font-medium mb-2">Size:</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 text-sm font-medium border transition-colors
                                  ${selectedSize === size 
                                    ? 'bg-attireo-black dark:bg-attireo-beige text-attireo-white dark:text-attireo-black border-transparent' 
                                    : 'border-attireo-black/20 dark:border-gray-700 hover:border-attireo-black dark:hover:border-attireo-white/30 text-gray-700 dark:text-gray-300'
                                  }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">Quantity:</label>
                <QuantitySelector 
                  quantity={quantity}
                  onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
                  onIncrease={() => setQuantity(q => q + 1)}
                />
              </div>

              {/* Add to Cart Button */}
              <AnimatedButton
                onClick={handleAddToCart}
                className="w-full px-8 py-4 
                           bg-attireo-black dark:bg-attireo-beige 
                           text-attireo-white dark:text-attireo-black 
                           font-semibold tracking-wide uppercase 
                           hover:bg-gray-800 dark:hover:bg-attireo-white/90
                           transition-colors duration-300 disabled:opacity-50"
                // Disable button if size is required but not selected
                disabled={product.sizes && !selectedSize} 
              >
                Add to Cart
              </AnimatedButton>
            </div>
          </div>
        </div>
      </FadeInView>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-attireo-beige/40 dark:bg-attireo-black/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Newsletter />
    </div>
  );
};

export default ProductDetailPage;