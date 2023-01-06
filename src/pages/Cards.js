import React from "react";
import CardSection from "../components/CardSection";

export default function Cards() {
  return (
    <div className="flex flex-col  items-center py-16 bg-gray-200 text-gray-700 max-w-[100vw]">
      <div className="flex items-center">
        <h1 className="text-6xl font-thin tracking-wider">Pokemon </h1>
      </div>
      <p className="mt-4 mb:8 md:mb-16 tracking-wide capitalize">
        top Pokemon names and get to see its features
      </p>
      <CardSection />
    </div>
  );
}
