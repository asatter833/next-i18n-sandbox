"use client";

import React from "react";
// import { useTranslation } from "react-i18next";
export default function Employee() {
  // const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  // const username = "Abdus Satter";
  return (
    <div className="container mx-auto p-8 max-w-4xl bg-gray-50 shadow-xl rounded-xl mt-10">
      {/* HARDCODED STRING 1: Main Title */}
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 border-b-2 border-indigo-200 pb-2">
        About ShopKeeper POS System
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed">
          ShopKeeper is dedicated to providing small and medium-sized businesses
          with a robust, intuitive, and affordable Point of Sale solution. We
          believe that technology should empower retailers, not complicate their
          daily operations.
        </p>
      </section>

      {/* HARDCODED STRING 3 & 4: History and Dynamic Value */}
      <section className="mb-8 p-4 bg-white rounded-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Our History
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 2022, ShopKeeper began as a simple tool for managing
          inventory for a single corner store. Today, we support thousands of
          retailers globally. This journey, starting from simple beginnings up
          to {currentYear}, has taught us the importance of scalable and
          flexible software.
        </p>
      </section>

      {/* HARDCODED STRING 5: Call to Action */}
      <div className="mt-8 text-center">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
          Contact Our Support Team
        </button>
      </div>
    </div>
  );
}
