"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { FaCloud, FaDatabase, FaMobileAlt, FaTools, FaCode, FaProjectDiagram, FaChalkboardTeacher, FaBuilding, FaUsers } from "react-icons/fa";
import { MdOutlineDevicesOther } from "react-icons/md";
import { FaHeartbeat, FaGraduationCap, FaUserTie, FaShoppingCart, FaRobot, FaLaptopCode } from "react-icons/fa";
import { FaInfoCircle, FaBriefcase, FaEnvelope } from "react-icons/fa";
const Navbar = () => {
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const capabilities = [
    { name: "Cloud", icon: <FaCloud /> },
    { name: "Data & Artificial Intelligence", icon: <FaDatabase /> },
    { name: "Enterprise Platforms", icon: <MdOutlineDevicesOther /> },
    { name: "Android & iOS Apps", icon: <FaMobileAlt /> },
    { name: "Infra Support/ManageEngine", icon: <FaTools /> },
    { name: "Full Stack Development", icon: <FaCode /> },
    { name: "ERP & CRM Implementation", icon: <FaProjectDiagram /> },
    { name: "Corporate Training", icon: <FaChalkboardTeacher  /> },
  ];
  const expertServices = [
    { name: "SETUP Offshore Delivery Center (IT/Non-IT)", icon: <FaBuilding /> },
    { name: "Staff Augmentation", icon: <FaUsers /> },
    { name: "Corporate Training Services", icon: <FaChalkboardTeacher /> },
  ];
  const preBuiltSolutions = [
    { name: "Prime CRM", icon: <FaUsers /> },
    { name: "Prime Health", icon: <FaHeartbeat /> },
    { name: "Prime LMS", icon: <FaGraduationCap /> },
    { name: "Prime HRMS", icon: <FaUserTie /> },
    { name: "Prime PurchaseForge", icon: <FaShoppingCart /> },
    { name: "Prime Conversation AI", icon: <FaRobot /> },
  ];
  const services = [
    { name: "IT Services", icon: <FaLaptopCode /> },
    { name: "Expert Services", icon: <FaUsers /> },
    { name: "Salesforce Services", icon: <FaProjectDiagram /> },
  ];  
  const Company = [
    { name: "About Us", icon: <FaInfoCircle /> },
    { name: "Careers", icon: <FaBriefcase /> },
    { name: "Contact Us", icon: <FaEnvelope /> },
  ];
  return (
    <nav className="navbar bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="navbar-logo">
          <Link href="/">
            <Image
              src="/assets/logo-website.png"
              alt="logo"
              width={64}
              height={64}
              className="w-full h-auto object-cover"
            />
          </Link>
        </div>

        <div className="text-xl font-montserrat font-bold text-blue-900 flex space-x-25 uppercase">
          <div
            className="relative group"
            onMouseEnter={() => setIsCapabilitiesOpen(true)}
            onMouseLeave={() => setIsCapabilitiesOpen(false)}
          >
            <Link href="/capabilities">
              <div className="relative hover:text-blue-700 transition-colors duration-300">
                Capabilities
                <span className="navbar-underline block"></span>
              </div>
            </Link>
            <div
              className={`absolute left-0 top-full mt-2 w-[800px] bg-white shadow-lg rounded-xl border border-gray-100 ${
                isCapabilitiesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              } transition-all duration-300 ease-in-out`}
            >
              <div className="grid grid-cols-3 gap-8 p-8">
                <div>
                  <h3 className="text-lg font-montserrat font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                    Capabilities
                  </h3>
                  <ul className="space-y-3">
  {capabilities.map((capability, index) => (
    <li key={index} className="flex items-center space-x-3">
      <span className="text-blue-600 text-lg">{capability.icon}</span>
      <Link href={`/capabilities/${capability.name.toLowerCase().replace(/ /g, "-")}`}>
        <div className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 font-montserrat text-sm">
          {capability.name}
        </div>
      </Link>
    </li>
  ))}
</ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                    Expert Services
                  </h3>
                  <ul className="space-y-3">
  {expertServices.map((service, index) => (
    <li key={index} className="flex items-center space-x-3">
      <span className="text-blue-600 text-lg">{service.icon}</span>
      <Link href={`/capabilities/expert-services/${service.name.toLowerCase().replace(/ /g, "-")}`}>
        <div className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 font-montserrat text-sm">
          {service.name}
        </div>
      </Link>
    </li>
  ))}
</ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                    Pre Built Solutions
                  </h3>
                  <ul className="space-y-3">
  {preBuiltSolutions.map((solution, index) => (
    <li key={index} className="flex items-center space-x-3">
      <span className="text-blue-600 text-lg">{solution.icon}</span>
      <Link href={`/capabilities/pre-built-solutions/${solution.name.toLowerCase().replace(/ /g, "-")}`}>
        <div className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 font-montserrat text-sm">
          {solution.name}
        </div>
      </Link>
    </li>
  ))}
</ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link href="/services">
              <div className="relative hover:text-blue-700 transition-colors duration-300">
                Services
                <span className="navbar-underline block"></span>
              </div>
            </Link>
            <div
              className={`absolute left-0 top-full mt-2 w-72 bg-white shadow-lg rounded-xl border border-gray-100 ${
                isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              } transition-all duration-300 ease-in-out`}
            >
              <ul className="py-6 px-6 space-y-4">
  {services.map((service, index) => (
    <li key={index} className="flex items-center space-x-3">
      <span className="text-blue-600 text-lg">{service.icon}</span>
      <Link href={`/services/${service.name.toLowerCase().replace(/ /g, "-")}`}>
        <div className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 font-montserrat text-base rounded-md px-4 py-2">
          {service.name}
        </div>
      </Link>
    </li>
  ))}
</ul>
            </div>
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <Link href="/company">
              <div className="relative hover:text-blue-700 transition-colors duration-300">
                Company
                <span className="navbar-underline block"></span>
              </div>
            </Link>
            <div
              className={`absolute left-0 top-full mt-2 w-72 bg-white shadow-lg rounded-xl border border-gray-100 ${
                isCompanyOpen ? "opacity-100 visible" : "opacity-0 invisible"
              } transition-all duration-300 ease-in-out`}
            >
              <ul className="py-6 px-6 space-y-4">
  {Company.map((item, index) => (
    <li key={index} className="flex items-center space-x-3">
      <span className="text-blue-600 text-lg">{item.icon}</span>
      <Link href={`/company/${item.name.toLowerCase().replace(/ /g, "-")}`}>
        <div className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 font-montserrat text-base rounded-md px-4 py-2">
          {item.name}
        </div>
      </Link>
    </li>
  ))}
</ul>
            </div>
          </div>
        </div>

        <Link href="/connect">
          <button className="connect-button group text-xl font-montserrat text-white bg-blue-900 px-8 py-3 rounded-full transition-all duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;