import React from 'react';
import { Card, Button } from 'flowbite-react';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center mt-8 mb-12">
        <h1 className="text-5xl font-bold mb-4 animate-gradient">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Stegocraft
          </span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          A powerful steganography tool for hiding messages within images.
        </p>
      </div>

      {/* Tool Description Section */}
      <Card className="w-full max-w-3xl shadow-lg rounded-lg bg-gray-800 bg-opacity-80 backdrop-blur-sm px-8 py-12">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Unleash the Power of Steganography
          </h2>
          <p className="text-lg text-gray-300 mb-10 text-center">
            Embed secret messages within images like a digital ninja! Stegocraft
            uses cutting-edge techniques to make your data invisible to the
            naked eye.
          </p>
          <div className="flex justify-center">
            <Button
              color="purple"
              className="rounded-lg shadow-md hover:bg-purple-600 mr-4 text-white"
              style={{
                boxShadow: '0 0 10px 2px rgba(156, 163, 175, 0.3)',
              }}
            >
              Start Encrypting
            </Button>
            <Button
              color="blue"
              outline
              className="rounded-lg hover:bg-blue-800 hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;