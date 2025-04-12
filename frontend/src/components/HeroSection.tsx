"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

const HeroSection: React.FC = () => {
  const images = ["/assets/hero-banner.png", "/assets/hero-banner-2 (2).png"];
  const taglines = [
    "Accelerate Growth with Smart Tech Solutions",
    "Your Strategic IT Partner for Success",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const captionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(captionRef, { once: false, amount: 0.5 });

  const captionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearTimeout(timeout);
  }, [currentImage]);

  const stats: Stat[] = [
    { value: "30%", label: "IT Consulting" },
    { value: "30%", label: "Prebuilt Solutions" },
    { value: "15%", label: "Expert Services" },
    { value: "25%", label: "AI, Deep Tech, Other" },
    { value: "80+", label: "Team Members" },
    { value: "100+", label: "Completed Works" },
    { value: "10+", label: "Countries" },
    { value: "45+", label: "Client's Feedback" },
  ];

  return (
    <div className="relative">
      <div className="relative w-full h-[150vh] pt-20">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`hero-banner-${index + 1}`}
            width={1920}
            height={1080}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          ref={captionRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={captionVariants}
          className="absolute top-1/4 left-17 flex flex-col z-10 text-left text-white"
        >
          <div className="font-montserrat text-8xl md:text-8xl font-bold text-white uppercase">
            Aayusoft Cloud
          </div>
          <div
            className="font-montserrat font-bold mt-6 text-xl md:text-2xl text-white transition-opacity duration-1000"
            key={currentImage}
          >
            {taglines[currentImage]}
          </div>
        </motion.div>

        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImage === index ? "bg-white scale-125" : "bg-white/50"
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>

        <div className="absolute inset-y-0 left-10 flex items-center z-10">
          <button
            onClick={() =>
              setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
            }
            className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <div className="absolute inset-y-0 right-10 flex items-center z-10">
          <button
            onClick={() =>
              setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
            }
            className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative w-full bg-white py-8 shadow-lg mt-[-150px]">
        <div className="stats-ticker flex animate-slide">
          {[...stats, ...stats].map((stat, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-4 mx-4 rounded-lg text-center bg-gray-50 hover:bg-gray-100 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-blue-900">{stat.value}</div>
              <div className="text-sm text-gray-600 uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;