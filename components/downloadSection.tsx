/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

function DownloadSection() {
  return (
    <div id="download" className="bg-gray-100">
    <div className="container mx-auto flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2  mb-8 lg:mb-0">
        <img src="/images/mockupmobile.png" alt="App Preview" width={600} height={500} className="rounded-lg" />
      </div>
      <div className="lg:w-1/2 right-0 lg:pl-12">
        <h2 className="text-4xl font-bold mb-8 text-black">Ready to Experience Premium Service?</h2>
        <p className="text-2xl mb-8 text-gray-700">Download our app now and unlock a world of convenience!</p>
        
        <div className="flex flex-row space-x-4 sm:space-x-6 pb-4 justify-center">
          <Link href="https://play.google.com/store/apps/details?id=your-app">
            <button className="cursor-pointer ">
              <div className="flex max-w-48 h-12 px-3 gap-2 border border-r-2 border-solid border-gray-500 rounded-xl items-center justify-center hover:bg-gray-800 bg-black text-white sm:h-14">
                <svg viewBox="30 336.7 120.9 129.2" className="w-5 sm:w-7">
                  <path d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" fill="#FFD400"></path>
                  <path d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z" fill="#FF3333"></path>
                  <path d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" fill="#48FF48"></path>
                  <path d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" fill="#3BCCFF"></path>
                </svg>
                <div>
                  <div className="text-[.5rem] sm:text-xs text-left text-white">GET IT ON</div>
                  <div className="text-sm font-semibold font-sans -mt-1 sm:text-xl text-white">Google Play</div>
                </div>
              </div>
            </button>
          </Link>

          <Link href="https://apps.apple.com/your-app">
            <button className="cursor-pointer">
              <div className="flex max-w-48 h-12 px-3 gap-2 border border-r-2 border-solid border-gray-500  rounded-xl items-center justify-center bg-black hover:bg-gray-800 text-white sm:gap-3 sm:h-14">
                <svg viewBox="0 0 384 512" className="w-5 sm:w-7 text-white">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" fill="currentColor"></path>
                </svg>
                <div>
                  <div className="text-[.5rem] sm:text-xs text-left text-white">Download on the</div>
                  <div className="text-lg font-semibold font-sans -mt-1 sm:text-2xl text-white">App Store</div>
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DownloadSection