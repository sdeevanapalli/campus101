"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Link } from "react-router-dom";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden bg-neutral-950 antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px w-12 bg-white/30"></div>
        <p className="text-sm font-mono text-neutral-400 uppercase tracking-widest">
           The Experience
        </p>
      </div>
      <h1 className="text-4xl md:text-8xl font-bold text-white tracking-tighter leading-tight">
        BITS Pilani <br /> 
        <span className="text-neutral-500">Campus101</span>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-400 font-light leading-relaxed">
        A unified interface to explore the three bastions of excellence. 
        From the historic corridors of <span className="text-white font-medium">Pilani</span>, 
        to the coastal calm of <span className="text-white font-medium">Goa</span>, 
        and the modern fortress of <span className="text-white font-medium">Hyderabad</span>.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        to={product.link}
        className="block h-full w-full relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900"
      >
        <img
          src={product.thumbnail}
          className="object-cover absolute h-full w-full inset-0 transition-transform duration-700 group-hover/product:scale-110"
          alt={product.title}
        />
        
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="absolute bottom-0 left-0 p-8 opacity-0 group-hover/product:opacity-100 transition-opacity duration-500 translate-y-4 group-hover/product:translate-y-0 transform">
            <h2 className="text-2xl font-bold text-white tracking-tight">
                {product.title}
            </h2>
            <p className="text-xs text-neutral-300 mt-1 font-mono uppercase tracking-widest">
                Go to Guide
            </p>
        </div>
      </Link>
    </motion.div>
  );
};