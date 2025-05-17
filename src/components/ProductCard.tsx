
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-card-image transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="p-4">
        <div className="mb-1 text-xs text-gray-500">{product.category}</div>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-medium text-lg mb-2 hover:text-shop-primary transition-colors duration-200">
            {product.name}
          </h3>
        </Link>
        <div className="flex justify-between items-center mt-4">
          <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
          <Button 
            size="sm" 
            onClick={() => addToCart(product)}
            className="bg-shop-primary hover:bg-shop-accent"
          >
            <ShoppingCart className="h-4 w-4 mr-1" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
