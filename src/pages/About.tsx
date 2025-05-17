
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About ShopHub</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2023, ShopHub began with a simple mission: to create an online shopping experience 
            that's both enjoyable and secure. We believe that shopping online should be easy, fun, and 
            worry-free.
          </p>
          <p className="text-gray-700 mb-4">
            What started as a small collection of carefully curated products has grown into a 
            comprehensive marketplace offering a wide range of high-quality items across multiple 
            categories.
          </p>
          <p className="text-gray-700">
            Today, we continue to expand our selection while maintaining our commitment to quality, 
            value, and customer satisfaction.
          </p>
        </div>
        
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="About ShopHub"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-shop-primary">Quality</h3>
            <p className="text-gray-700">
              We carefully select each product in our catalog to ensure it meets our high standards 
              for quality and durability.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-shop-primary">Security</h3>
            <p className="text-gray-700">
              Your security is our priority. We implement robust measures to protect your personal 
              information and ensure safe transactions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-shop-primary">Customer Satisfaction</h3>
            <p className="text-gray-700">
              We're committed to providing excellent customer service and ensuring that you're happy 
              with every purchase.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        
        <p className="text-gray-700 mb-8">
          The ShopHub team is made up of passionate individuals who are dedicated to creating the best 
          online shopping experience possible. From our product curators to our customer service 
          representatives, everyone plays a vital role in bringing ShopHub to life.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Team members would go here in a real implementation */}
        </div>
      </div>
      
      <div className="bg-shop-light p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to start shopping?</h2>
        <p className="text-gray-700 mb-6">
          Explore our catalog and find your next favorite product.
        </p>
        <Link to="/products">
          <Button className="bg-shop-primary hover:bg-shop-accent">Browse Products</Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
