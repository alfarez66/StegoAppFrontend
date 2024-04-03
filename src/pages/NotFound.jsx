import React from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 animate-pulse mb-6">
          404
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Lost in hyperspace? The coordinates you entered are invalid.
        </p>
        <Link to="/">
          <Button
            color="purple"
            className="rounded-lg shadow-md hover:bg-purple-600 text-white"
            style={{
              boxShadow: '0 0 10px 2px rgba(156, 163, 175, 0.3)',
            }}
          >
            Engage Hyper Drive
          </Button>
        </Link>
      </div>

      {/* Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 60%)`,
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 40%)`,
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></div>
      </div>
    </div>
  );
};

export default NotFound;