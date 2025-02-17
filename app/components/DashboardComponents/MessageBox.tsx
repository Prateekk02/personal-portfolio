'use client';
import { useState } from 'react';

const MessageBox = () => {
  const [isSeen, setIsSeen] = useState(false);

  const toggleSeenStatus = () => {
    setIsSeen((prev) => !prev);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-white">
          FirstName LastName
        </div>
        <button
          onClick={toggleSeenStatus}
          className={`flex items-center gap-2 text-sm font-medium ${
            isSeen ? 'bg-blue-500' : 'bg-gray-500'
          } text-white px-3 py-2 rounded-lg transition-all hover:opacity-90`}
        >
          <span
            className={`w-5 h-5 flex items-center justify-center border-2 rounded ${
              isSeen
                ? 'border-blue-300 bg-blue-400'
                : 'border-gray-400 bg-gray-600'
            }`}
          >
            {isSeen && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </span>
          {isSeen ? 'Seen' : 'Unseen'}
        </button>
      </div>

      
      <div className="space-y-4">
        <div className="text-sm text-gray-300">
          <span className="font-semibold text-white">Email:</span> example@example.com
        </div>
        <div className="text-sm text-gray-300">
          <span className="font-semibold text-white">Subject:</span> Example Subject Line
        </div>
      </div>

      
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Message</h3>
        <textarea
          className="w-full h-32 p-4 bg-gray-700 text-white border border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
          value="Your message goes here..."
          readOnly
        />
      </div>
    </div>
  );
};

export default MessageBox;
