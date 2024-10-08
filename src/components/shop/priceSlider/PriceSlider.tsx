import React, { useState } from "react";
import "./RangeSlider.scss"; // Import SCSS for custom styles if needed

const RangeSlider = () => {
  const [minValue, setMinValue] = useState(6000);
  const [maxValue, setMaxValue] = useState(3559000);

  const handleMinChange = (e: HTMLInputElement) => {
    const target = e as HTMLInputElement;
    setMinValue(+target.value);
  };
  const handleMaxChange = (e: HTMLInputElement) => {
    const target = e as HTMLInputElement;
    setMaxValue(+target.value);
  };

  return (
    <div className="range-slider flex flex-col items-center">
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <label className="text-gray-500 text-sm">От</label>
          <input
            type="number"
            value={minValue}
            onChange={(e) => handleMinChange(e.target)}
            className="w-24 border rounded px-2 py-1"
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-gray-500 text-sm">До</label>
          <input
            type="number"
            value={maxValue}
            onChange={(e) => handleMaxChange(e.target)}
            className="w-24 border rounded px-2 py-1"
          />
        </div>
      </div>

      <div className="w-full mt-4 relative">
        <input
          type="range"
          min="6000"
          max="3559000"
          value={minValue}
          onChange={(e) => handleMinChange(e.target)}
          className="slider-min absolute w-full h-2 appearance-none bg-gray-300 rounded-full"
        />
        <input
          type="range"
          min="6000"
          max="3559000"
          value={maxValue}
          onChange={(e) => handleMaxChange(e.target)}
          className="slider-max absolute w-full h-2 appearance-non rounded-full"
        />
      </div>
    </div>
  );
};

export default RangeSlider;
