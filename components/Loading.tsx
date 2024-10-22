/* eslint-disable react/jsx-no-undef */
// import React from "react";

// const LoadingLayout: React.FC = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
//       <div className="flex flex-col items-center">
//         <div className="loader"></div>
//         <h1 className="mt-4 text-lg font-semibold text-gray-800">
//           Loading...
//         </h1>
//       </div>
//       <style jsx>{`
//         .loader {
//           border: 8px solid rgba(255, 255, 255, 0.2);
//           border-left-color: #3b82f6; /* Blue color */
//           border-radius: 50%;
//           width: 60px;
//           height: 60px;
//           animation: spin 1s ease infinite;
//         }

//         @keyframes spin {
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LoadingLayout;


"use client"; // Mark this file as a Client Component

import { useState, useEffect } from 'react';

const Loading = () => {
  const [text, setText] = useState('');
  const fullText = 'Servizo.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        index = 0;
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="text-6xl font-bold text-black relative">
        {text}
        <span className="absolute -right-2 top-0 h-full w-1 bg-white animate-blink"></span>
      </div>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-blink {
          animation: blink 0.7s infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;
