'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const ErrorPage = () => {
  const router = useRouter();

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Only authorized for admin
        </h1>
        <p className="text-gray-300 mb-6">
          You do not have the necessary permissions to view this page.
        </p>
        <button
          onClick={() => (router.push("/"))}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
