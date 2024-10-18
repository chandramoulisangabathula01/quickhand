// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
// "use client";
// import Link from 'next/link';
// import Image from 'next/image';
// import Footer from '@/components/footer';
// import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
// import { BellIcon, Share2Icon } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
// // import { Calendar } from "@/components/ui/calendar";
// // import AnimatedBeamMultipleOutputDemo from "@/components/example/animated-beam-multiple-outputs";
// // import Marquee from "@/components/magicui/marquee";
// // import AnimatedListDemo from "@/components/example/animated-list-demo";

// const LandingPage: React.FC = () => {
//   return (
//     <div className="landing-page bg-white text-gray-800">
      
      
//       {/* Hero Section */}
//       <section className="hero bg-gray-50 ">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-10 ml-10 md:mb-0">
//               <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-primary">Get Services Delivered at Your Doorstep!</h1>
//               <p className="text-xl mb-6">Quick, reliable, and professional services available with a tap on the app.</p>
//               <div className="flex space-x-4 mb-4">
//                 <Link href="https://apps.apple.com/your-app" className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-secondary transition-colors">Download on the App Store</Link>
//                 <Link href="https://play.google.com/store/apps/details?id=your-app" className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-secondary transition-colors">Get it on Google Play</Link>
//               </div>
//               <div className="mt-6">
//                 <Link href="/demo" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-black hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   Watch our demo video
//                 </Link>
//               </div>
//             </div>
//             <div className="md:w-1/2">
//               <BentoDemo />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Key Features Section */}
//       <section className="features py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-brand-primary">Why Choose Us?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="">
//                 <Image src="/buynow.png" alt="Easy Booking" width={64} height={64} className="mx-auto" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-brand-secondary">Easy Booking</h3>
//               <p>Find and book services quickly.</p>
//             </div>
//             <div className="text-center">
//               <div className="mb-4">
//                 <Image src="/verified.png" alt="Verified Professionals" width={64} height={64} className="mx-auto" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-brand-secondary">Verified Professionals</h3>
//               <p>Trusted, qualified experts at your service.</p>
//             </div>
//             <div className="text-center">
//               <div className="mb-4">
//                 <Image src="/realtime.png" alt="Real-Time Tracking" width={64} height={64} className="mx-auto" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-brand-secondary">Real-Time Tracking</h3>
//               <p>Track your service provider's arrival.</p>
//             </div>
//             <div className="text-center">
//               <div className="mb-4">
//                 <Image src="/lowprices.png" alt="Affordable Pricing" width={64} height={64} className="mx-auto" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-brand-secondary">Affordable Pricing</h3>
//               <p>Clear and competitive rates.</p>
//             </div>
//           </div>
//           <div className="text-center mt-12">
//             <Link href="/systems/How-It-Works" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-md">
//               <span className="flex items-center">
//                 <span>Learn more about how it works</span>
//                 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* App Demo Section */}
//       <section className="app-demo bg-gray-50 py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-brand-primary">See How It Works!</h2>
//           <div className="max-w-3xl mx-auto">
//             <div className="aspect-w-16 aspect-h-9 mb-8">
//               <iframe src="https://www.youtube.com/embed/your-video-id" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="w-full h-full rounded-lg shadow-md"></iframe>
//             </div>
//             <div className="text-center">
//               <Link href="https://apps.apple.com/your-app" className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-brand-secondary transition-colors inline-block">Download the App Now</Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-brand-primary">What Our Customers Are Saying</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <p className="mb-4">"The app is so easy to use! I found a great plumber in minutes."</p>
//               <div className="flex items-center">
//                 <Image src="/customer1.jpg" alt="Customer 1" width={48} height={48} className="rounded-full mr-4" />
//                 <div>
//                   <p className="font-semibold text-brand-secondary">Jane Doe</p>
//                   <p className="text-sm text-gray-600">Homeowner</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <p className="mb-4">"I love being able to track my service provider in real-time. No more waiting around!"</p>
//               <div className="flex items-center">
//                 <Image src="/customer2.jpg" alt="Customer 2" width={48} height={48} className="rounded-full mr-4" />
//                 <div>
//                   <p className="font-semibold text-brand-secondary">John Smith</p>
//                   <p className="text-sm text-gray-600">Business Owner</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <p className="mb-4">"The professionals on this platform are top-notch. I'm always satisfied with the service."</p>
//               <div className="flex items-center">
//                 <Image src="/customer3.jpg" alt="Customer 3" width={48} height={48} className="rounded-full mr-4" />
//                 <div>
//                   <p className="font-semibold text-brand-secondary">Emily Brown</p>
//                   <p className="text-sm text-gray-600">Apartment Renter</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;

// const files = [
//   {
//     name: "bitcoin.pdf",
//     body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
//   },
//   {
//     name: "finances.xlsx",
//     body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
//   },
//   {
//     name: "logo.svg",
//     body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
//   },
//   {
//     name: "keys.gpg",
//     body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
//   },
//   {
//     name: "seed.txt",
//     body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
//   },
// ];

// const features = [
//   {
//     Icon: FileTextIcon,
//     name: "Save your files",
//     description: "We automatically save your files as you type.",
//     href: "#",
//     cta: "Learn more",
//     className: "col-span-3 lg:col-span-1",
//     background: (
//         <div className="bg-white">
//           <h1>Hello World</h1>
//         </div>
//       ),
//   },
//   {
//     Icon: BellIcon,
//     name: "Notifications",
//     description: "Get notified when something happens.",
//     href: "#",
//     cta: "Learn more",
//     className: "col-span-3 lg:col-span-2",
//     background: (
//         <div className="bg-white">
//           <h1>Hello World</h1>
//         </div>
//       ),
//   },
//   {
//     Icon: Share2Icon,
//     name: "Integrations",
//     description: "Supports 100+ integrations and counting.",
//     href: "#",
//     cta: "Learn more",
//     className: "col-span-3 lg:col-span-2",
//     background: (
//         <div className="bg-white">
//           <h1>Hello World</h1>
//         </div>
//       ),
//   },
//   {
//     Icon: CalendarIcon,
//     name: "Calendar",
//     description: "Use the calendar to filter your files by date.",
//     className: "col-span-3 lg:col-span-1",
//     href: "#",
//     cta: "Learn more",
//     background: (
//       <div className="bg-white">
//         <h1>Hello World</h1>
//       </div>
//     ),
//   },
// ];

// function BentoDemo() {
//   return (
//     <BentoGrid>
//       {features.map((feature, idx) => (
//         <BentoCard
//           key={idx}
//           {...feature}
//           background={feature.background || null}
//         />
//       ))}
//     </BentoGrid>
//   );
// }



// use gsap and scrolltrigger and  framer motion when i scroll screen should fix the images and content should change