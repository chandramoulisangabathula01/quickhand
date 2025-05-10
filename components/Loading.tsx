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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Text animation
    let index = 0;
    const textInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        index = 0;
      }
    }, 200);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50">
      <div className="text-6xl font-bold text-black relative mb-8">
        {text}
        <span className="absolute -right-2 top-0 h-full w-1 bg-black animate-blink"></span>
      </div>
      <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-black transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
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
