/** @format */
"use client";

import React, { useEffect, useState } from "react";
import RadioButton from "../Buttons/RadioButton";

interface GenderProps {
  selectedValue: (value: number) => void;

  isError?: boolean; // Pass isError as a prop
}

function Gender({ selectedValue, isError }: GenderProps) {
  const [selectedGender, setSelectedGender] = useState<number | null>(1);

  const selectionHandler = (value: number) => {
    selectedValue(value);
    setSelectedGender(value);
  };

  return (
    <div className="w-full gap-2 max-w-[312px] md:max-w-[312px] flex flex-col justify-start">
      <label className="text-base">جنسیت</label>

      <div className="flex justify-between w-full max-w-[186px]">
        <RadioButton
          disabled={false}
          error={isError}
          label="زن"
          onChange={() => selectionHandler(1)}
          checked={selectedGender === 1}
        />
        <RadioButton
          label="مرد"
          disabled={false}
          error={isError}
          onChange={() => selectionHandler(0)}
          checked={selectedGender === 0}
        />
      </div>
    </div>
  );
}

export default Gender;
