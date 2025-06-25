import { useState } from "react";
import AccordionButton from "./AccordionButton";

const BestScenarioResults = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-color-3 px-6 rounded-lg my-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-sans font-bold flex items-center text-[#ddff7f]  roobert-font">
          <span className="text-color-4 mr-2">
            <img src=" icons/sparkle.svg" alt="star" />
          </span>
          Best Scenario Results
        </h2>
        <AccordionButton onClick={() => setIsOpen(!isOpen)} open={isOpen} />
      </div>
      {isOpen && (
        <div className="space-y-4 text-[#ddff7f]">
          <div className="bg-color-2 px-4 py-3 rounded-lg flex justify-between items-center border-[0.5px] border-[#ddff7f]">
            <p className="text-color-textSecondary">
              The best found configuration based on profit is characterized by
              11 zones (max) with charging stations and 48 total number of
              poles.
            </p>
            <button className="text-color-textSecondary flex items-center">
              <img src=" icons/dots.svg" alt="dots" />
            </button>
          </div>
          <div className="bg-color-2  px-4 py-3 rounded-lg flex justify-between items-center border-[0.5px] border-[#ddff7f]">
            <p className="text-color-textSecondary">
              The best found configuration based on satisfied demand is
              characterized by 11 zones (max) with charging stations and 48
              total number of poles.
            </p>
            <button className="text-color-textSecondary flex items-center">
              <img src=" icons/dots.svg" alt="dots" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BestScenarioResults;
