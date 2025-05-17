
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-shop-primary mb-4">LoxxShop</h3>
            <p className="text-gray-600 text-sm">
              Your one-stop shop for quality products at affordable prices.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-600 text-sm hover:text-shop-primary transition-colors duration-200">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=Electronics" className="text-gray-600 text-sm hover:text-shop-primary transition-colors duration-200">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products?category=Accessories" className="text-gray-600 text-sm hover:text-shop-primary transition-colors duration-200">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products?category=Home" className="text-gray-600 text-sm hover:text-shop-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 text-sm hover:text-shop-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 text-sm hover:text-shop-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 text-sm hover:text-shop-primary transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 text-sm hover:text-shop-primary transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <address className="not-italic text-gray-600 text-sm">
              <p>123 E-Commerce St.</p>
              <p>Shopping City, SC 12345</p>
              <p className="mt-2">info@LoxxShop.com</p>
              <p>(123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} LoxxShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
