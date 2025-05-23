"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Card = {
  video?: string;
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
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
    card.thumbnail ? (
      <Image
        src={card.thumbnail.src}
        alt={card.thumbnail.alt}
        width={card.thumbnail.width}
        height={card.thumbnail.height}
        className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
        priority={true}
      />
    ) : null
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