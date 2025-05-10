/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface Project {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue;
  range: number[];
  targetScale: number;
}

const projects: Project[] = [
  {
    title: "Personal Driver",
    description: "Personal Driver is a platform that connects exceptional service professionals with those seeking quality assistance in their daily lives.",
    src: "./1.png",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF"
  },
  {
    title: "Personal Chef",
    description: "Personal Chef is a platform that connects exceptional service professionals with those seeking quality assistance in their daily lives.", 
    src: "./3.png",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#BBACAF"
  },
  {
    title: "Elderly Care",
    description: "Elderly Care is a platform that connects exceptional service professionals with those seeking quality assistance in their daily lives.",
    src: "./2.png",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#BBACAF"
  }
];

const Gallery = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll();

  return (
    <main ref={container} className={`${styles.main} w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8`}>
      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05);
        return (
          <Card 
            key={`p_${i}`}
            i={i}
            {...project}
            url={project.link}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

const Card: React.FC<CardProps> = ({i, title, description, src, url, color, progress, range, targetScale}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className={`${styles.cardContainer} w-full`}>
      <motion.div 
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          borderRadius: '24px',
        }}
        className={`${styles.card} w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[75vw] xl:max-w-[70vw] mx-auto p-6 sm:p-8 md:p-10`}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-6 tracking-tight text-black">{title}</h2>
        <div className={`${styles.body} flex flex-col lg:flex-row gap-6 lg:gap-10`}>
          <div className={`${styles.description} lg:w-1/2`}>
            <h3 className="text-base sm:text-lg md:text-xl leading-relaxed font-medium text-black">{description}</h3>
          </div>

          <div className={`${styles.imageContainer} lg:w-1/2 aspect-[4/3] relative overflow-hidden rounded-2xl`}>
            <motion.div
              className={`${styles.inner} h-full w-full`}
              style={{scale: imageScale}}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5 }
              }}
            >
              <Image
                fill
                src={`/images/${src}`}
                alt={title}
                className="object-cover"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 80vw, (max-width: 1280px) 75vw, 70vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;