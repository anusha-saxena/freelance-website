"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Toggle: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.5, 
  });
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  };
  const partners = [
    { src: "/assets/microsoft.png", alt: "Microsoft Certified Partner" },
    { src: "/assets/salesforce.png", alt: "Salesforce Consulting Partner" },
    { src: "/assets/uipath.png", alt: "UiPath Authorized Partner" },
    { src: "/assets/aws.png", alt: "AWS Partner" },
  ];
  return (
    <motion.div
      ref={sectionRef}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-white py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative right-60 top-5 z-50">
        <div className="flex justify-center items-center space-x-12 sm:space-x-16 lg:space-x-20">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative transition-transform duration-300 hover:scale-125"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Toggle;
