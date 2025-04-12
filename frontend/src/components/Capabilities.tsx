"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Capabilities: React.FC = () => {
  const topImageRef = useRef<HTMLDivElement>(null);
  const isTopImageInView = useInView(topImageRef, {
    once: false,
    margin: "0px 0px -100px 0px",
  });
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const isCapabilitiesInView = useInView(capabilitiesRef, {
    once: false,
    margin: "0px 0px -100px 0px",
  });
  const rect1Ref = useRef<HTMLDivElement>(null);
  const isRect1InView = useInView(rect1Ref, {
    once: false,
    margin: "0px 0px -100px 0px",
  });
  const rect2Ref = useRef<HTMLDivElement>(null);
  const isRect2InView = useInView(rect2Ref, {
    once: false,
    margin: "0px 0px -100px 0px",
  });
  const rect3Ref = useRef<HTMLDivElement>(null);
  const isRect3InView = useInView(rect3Ref, {
    once: false,
    margin: "0px 0px -100px 0px",
  });
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };
  const rectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  const hoverEffect = {
    scale: 1.05, 
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", 
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };
  return (
    <div>
      <div className="">
        <motion.div
          ref={topImageRef}
          initial="hidden"
          animate={isTopImageInView ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <div className="relative mt-[-100px]">
            <Image
              src="/assets/design.png"
              alt="design"
              width={1920}
              height={1080}
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          ref={capabilitiesRef}
          initial="hidden"
          animate={isCapabilitiesInView ? "visible" : "hidden"}
          variants={imageVariants}
          className="flex items-center justify-between px-6 py-12"
        >
          <div className="flex items-center justify-between px-6 py-12">
            <div className="w-1/2">
              <Image
                src="/assets/img.png"
                alt="img"
                width={1920}
                height={1080}
                className="object-cover"
              />
            </div>
            <div className="w-1/2 pl-8">
              <div className="text-8xl md:text-10xl font-bold text-blue-900 font-montserrat">
                Capabilities
              </div>
              <div className="mt-4 text-lg text-gray-600 max-w-xl mx-auto relative left-[-100px] font-libre">
                Discover our innovative capabilities that accelerate your business success. From cutting-edge technology to personalized solutions, we empower growth.
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-12">
          <motion.div
            ref={rect1Ref}
            className="relative w-full md:w-[30%] h-[450px] rounded-xl overflow-hidden group shadow-md border border-gray-200/30"
            initial="hidden"
            animate={isRect1InView ? "visible" : "hidden"}
            variants={rectVariants}
            whileHover={hoverEffect}
          >
            <Image
              src="/assets/4.png"
              alt="IT Consulting Services"
              fill
              style={{ objectFit: "cover" }}
              className="opacity-90 group-hover:opacity-70 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center z-20 text-center text-white px-6 py-8">
              <h2 className="text-xl md:text-3xl font-bold uppercase font-montserrat tracking-wide">
                IT Consulting Services
              </h2>
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg py-6 px-6 max-w-[220px] shadow-md">
                  <p className="text-sm md:text-base text-gray-800 font-libre leading-relaxed">
                    Your strategic partner for tailored IT solutions and innovation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={rect2Ref}
            className="relative w-full md:w-[30%] h-[450px] rounded-xl overflow-hidden group shadow-md border border-gray-200/30"
            initial="hidden"
            animate={isRect2InView ? "visible" : "hidden"}
            variants={rectVariants}
            whileHover={hoverEffect}
          >
            <Image
              src="/assets/6.png"
              alt="Expert Services"
              fill
              style={{ objectFit: "cover" }}
              className="opacity-90 group-hover:opacity-70 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center z-20 text-center text-white px-6 py-8">
              <h2 className="text-xl md:text-3xl font-bold uppercase font-montserrat tracking-wide">
                Expert Services
              </h2>
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg py-6 px-6 max-w-[220px] shadow-md">
                  <p className="text-sm md:text-base text-gray-800 font-libre leading-relaxed">
                    Elevating your IT landscape with personalized support and skills.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={rect3Ref}
            className="relative w-full md:w-[30%] h-[450px] rounded-xl overflow-hidden group shadow-md border border-gray-200/30"
            initial="hidden"
            animate={isRect3InView ? "visible" : "hidden"}
            variants={rectVariants}
            whileHover={hoverEffect}
          >
            <Image
              src="/assets/5.png"
              alt="Salesforce Consulting Services"
              fill
              style={{ objectFit: "cover" }}
              className="opacity-90 group-hover:opacity-70 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center z-20 text-center text-white px-6 py-8">
              <h2 className="text-xl md:text-3xl font-bold uppercase font-montserrat tracking-wide">
                Salesforce Consulting Services
              </h2>
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg py-6 px-6 max-w-[220px] shadow-md">
                  <div className="text-sm md:text-base text-gray-800 font-libre leading-relaxed">
                    Empowering your business with tailored Salesforce solutions.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;