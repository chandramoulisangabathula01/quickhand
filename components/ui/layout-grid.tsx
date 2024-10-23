// /* eslint-disable @typescript-eslint/no-unused-vars */

// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { cn } from "@/lib/utils";

// // type Card = {
// //   video?: string;
// //   id: number;
// //   content: JSX.Element | React.ReactNode | string;
// //   className: string;
// //   thumbnail?: string;
// // };

// // export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
// //   const [selected, setSelected] = useState<Card | null>(null);
// //   const [lastSelected, setLastSelected] = useState<Card | null>(null);
// //   const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'laptop' | 'desktop'>('mobile');

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth < 768) {
// //         setScreenSize('mobile');
// //       } else if (window.innerWidth < 1024) {
// //         setScreenSize('tablet');
// //       } else if (window.innerWidth < 1440) {
// //         setScreenSize('laptop');
// //       } else {
// //         setScreenSize('desktop');
// //       }
// //     };

// //     handleResize();
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   const handleClick = (card: Card) => {
// //     setLastSelected(selected);
// //     setSelected(card);
// //   };

// //   const handleOutsideClick = () => {
// //     setLastSelected(selected);
// //     setSelected(null);
// //   };

// //   return (
// //     <>
// //     <div className={cn(
// //       "w-full h-full grid gap-4 relative pt-2 mx-auto",
// //       screenSize === 'mobile' ? "grid-cols-1 max-w-xl" :
// //       screenSize === 'tablet' ? "grid-cols-2 max-w-3xl" :
// //       screenSize === 'laptop' ? "grid-cols-3 max-w-5xl" :
// //       "grid-cols-4 max-w-7xl"
// //     )}>
// //       {cards.map((card, i) => (
// //         <div key={i} className={cn(card.className, "")}>
// //           <motion.div
// //             onClick={() => handleClick(card)}
// //             className={cn(
// //               card.className,
// //               "relative overflow-hidden",
// //               selected?.id === card.id
// //                 ? "rounded-lg cursor-pointer absolute inset-0 z-50 flex justify-center items-center flex-wrap flex-col",
// //                 screenSize === 'mobile' ? "h-1/2 w-full" :
// //                 screenSize === 'tablet' ? "h-2/3 w-3/4" :
// //                 "h-3/4 w-2/3"
// //                 : lastSelected?.id === card.id
// //                 ? "z-40 bg-white rounded-xl h-full w-full"
// //                 : "bg-white rounded-xl h-full w-full"
// //             )}
// //             layoutId={`card-${card.id}`}
// //           >
// //             {selected?.id === card.id && <SelectedCard selected={selected} screenSize={screenSize} />}
// //             <MediaComponent card={card} />
// //           </motion.div>
// //         </div>
// //       ))}
// //       <motion.div
// //         onClick={handleOutsideClick}
// //         className={cn(
// //           "absolute h-full w-full left-0 top-0 bg-background opacity-0 z-10",
// //           selected?.id ? "pointer-events-auto" : "pointer-events-none"
// //         )}
// //         animate={{ opacity: selected?.id ? 0.3 : 0 }}
// //       />
// //     </div>
// //   </>
// //   );
// // };

// // // Component to handle both image and video display
// // const MediaComponent = ({ card }: { card: Card }) => {
// //   return card.video ? (
// //     <motion.video
// //       layoutId={`video-${card.id}`}
// //       className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
// //       autoPlay
// //       loop
// //       muted
// //       playsInline
// //     >
// //       <source src={card.video} type="video/mp4" />
// //       <source src={card.video?.replace(".mp4", ".webm")} type="video/webm" />
// //       Your browser does not support the video tag.
// //     </motion.video>
// //   ) : (
// //     <motion.img
// //       layoutId={`image-${card.id}-image`}
// //       src={card.thumbnail}
// //       height={500}
// //       width={500}
// //       className={cn(
// //         "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
// //       )}
// //       alt="thumbnail"
// //     />
// //   );
// // };

// // // Display the content when a card is selected
// // const SelectedCard = ({ selected, screenSize }: { selected: Card | null, screenSize: string }) => {
// //   return (
// //     <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
// //       <motion.div
// //         initial={{
// //           opacity: 0,
// //         }}
// //         animate={{
// //           opacity: 0.6,
// //         }}
// //         className="absolute inset-0 h-full w-full bg-background opacity-60 z-10"
// //       />
// //       <motion.div
// //         layoutId={`content-${selected?.id}`}
// //         initial={{
// //           opacity: 0,
// //           y: 100,
// //         }}
// //         animate={{
// //           opacity: 1,
// //           y: 0,
// //         }}
// //         exit={{
// //           opacity: 0,
// //           y: 100,
// //         }}
// //         transition={{
// //           duration: 0.3,
// //           ease: "easeInOut",
// //         }}
// //         className={cn(
// //           "relative z-[70]",
// //           screenSize === 'mobile' ? "px-4 pb-4" :
// //           screenSize === 'tablet' ? "px-6 pb-6" :
// //           "px-8 pb-8"
// //         )}
// //       >
// //         {selected?.content}
// //       </motion.div>
// //     </div>
// //   );
// // };


// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// type Card = {
//   video?: string;
//   id: number;
//   content: JSX.Element | React.ReactNode | string;
//   className: string;
//   thumbnail?: string;
// };

// export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
//   const [selected, setSelected] = useState<Card | null>(null);
//   const [lastSelected, setLastSelected] = useState<Card | null>(null);
//   const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'laptop' | 'desktop'>('mobile');

//   // Use a debounce mechanism to prevent frequent updates during resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 1024) {
//         setScreenSize('tablet');
//       } else if (window.innerWidth < 1440) {
//         setScreenSize('laptop');
//       } else {
//         setScreenSize('desktop');
//       }
//     };

//     const debounceResize = () => {
//       let timeout: NodeJS.Timeout;
//       return () => {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => handleResize(), 100);
//       };
//     };

//     const handleDebouncedResize = debounceResize();

//     handleResize();
//     window.addEventListener('resize', handleDebouncedResize);
//     return () => window.removeEventListener('resize', handleDebouncedResize);
//   }, []);

//   const handleClick = (card: Card) => {
//     setLastSelected(selected);
//     setSelected(card);
//   };

//   const handleOutsideClick = () => {
//     setLastSelected(selected);
//     setSelected(null);
//   };

//   return (
//     <>
//       <div
//         className={cn(
//           "w-full h-full grid gap-4 relative pt-2 mx-auto",
//           screenSize === 'mobile' ? "grid-cols-1 max-w-xl" :
//           screenSize === 'tablet' ? "grid-cols-2 max-w-3xl" :
//           screenSize === 'laptop' ? "grid-cols-3 max-w-5xl" :
//           "grid-cols-4 max-w-7xl"
//         )}
//       >
//         {cards.map((card, _i) => (
//           <div key={card.id} className={cn(card.className, "")}>
//             <motion.div
//               onClick={() => handleClick(card)}
//               className={cn(
//                 card.className,
//                 "relative overflow-hidden",
//                 selected?.id === card.id
//                   ? "rounded-lg cursor-pointer absolute inset-0 z-50 flex justify-center items-center flex-wrap flex-col"
//                   : lastSelected?.id === card.id
//                     ? "z-40 bg-white rounded-xl h-full w-full"
//                     : "bg-white rounded-xl h-full w-full"
//               )}
//               layoutId={`card-${card.id}`}
//             >
//               {selected?.id === card.id && <SelectedCard selected={selected} screenSize={screenSize} />}
//               <MediaComponent card={card} />
//             </motion.div>
//           </div>
//         ))}
//         {selected && (
//           <motion.div
//             onClick={handleOutsideClick}
//             className={cn(
//               "absolute h-full w-full left-0 top-0 bg-background opacity-0 z-10",
//               selected?.id ? "pointer-events-auto" : "pointer-events-none"
//             )}
//             animate={{ opacity: selected?.id ? 0.3 : 0 }}
//           />
//         )}
//       </div>
//     </>
//   );
// };

// // Component to handle both image and video display
// const MediaComponent = ({ card }: { card: Card }) => {
//   return card.video ? (
//     <motion.video
//       layoutId={`video-${card.id}`}
//       className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
//       autoPlay
//       loop
//       muted
//       playsInline
//     >
//       <source src={card.video} type="video/mp4" />
//       <source src={card.video?.replace(".mp4", ".webm")} type="video/webm" />
//       Your browser does not support the video tag.
//     </motion.video>
//   ) : (
//     <motion.img
//       layoutId={`image-${card.id}-image`}
//       src={card.thumbnail}
//       height={500}
//       width={500}
//       className={cn(
//         "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
//       )}
//       alt="thumbnail"
//     />
//   );
// };

// // Display the content when a card is selected
// const SelectedCard = ({ selected, screenSize }: { selected: Card | null, screenSize: string }) => {
//   return (
//     <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         className="absolute inset-0 h-full w-full bg-background opacity-60 z-10"
//       />
//       <motion.div
//         layoutId={`content-${selected?.id}`}
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 100 }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//         className={cn(
//           "relative z-[70]",
//           screenSize === 'mobile' ? "px-4 pb-4" :
//           screenSize === 'tablet' ? "px-6 pb-6" :
//           "px-8 pb-8"
//         )}
//       >
//         {selected?.content}
//       </motion.div>
//     </div>
//   );
// };




"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  video?: string;
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail?: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <>

    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative pt-2">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <MediaComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-background opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  </>
  );
};

// Component to handle both image and video display
const MediaComponent = ({ card }: { card: Card }) => {
  return card.video ? (
    <motion.video
      layoutId={`video-${card.id}`}
      className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={card.video} type="video/mp4" />
      <source src={card.video?.replace(".mp4", ".webm")} type="video/webm" />
      Your browser does not support the video tag.
    </motion.video>
  ) : (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height={500}
      width={500}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

// Display the content when a card is selected
const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-background opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
  
};