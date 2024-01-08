"use client";
import Month from "@/util/data/Calender/Month";
import Years from "@/util/data/Calender/Years";
import Days from "@/util/data/Calender/Days";

import dynamic from "next/dynamic";

import React, { useEffect, useState } from "react";

const PersianMonthDropdown = dynamic(
  () => import("../../Layout/Dropdowns/Dropdown"),
  {
    ssr: false,
  }
);
interface BirthDateProps {
  onDateSelect: any;
  isValid: (status: boolean) => void;
}
function Birthdate({ onDateSelect, isValid }: BirthDateProps) {
  const [date, setDate] = useState({ year: "", month: "", day: "" });
  useEffect(() => {
    if (date.day.length > 0 && date.month.length > 0 && date.year.length > 0) {
      isValid(true);
    }
  });
  const persianDate = `${date.year}/${date.month}/${date.day}`;
  onDateSelect(persianDate);
  const handleDaySelect = (day: string) => {
    setDate((prev) => ({ ...prev, day: day }));
  };
  const handleMonthSelect = (month: string) => {
    setDate((prev) => ({ ...prev, month: month }));
  };
  const handleYearSelect = (year: string) => {
    setDate((prev) => ({ ...prev, year: year }));
  };

  return (
    <div className=" flex gap-2 w-full max-w-[312px] md:max-w-[380px]">
      <PersianMonthDropdown
        onSelectDay={handleDaySelect}
        options={Days}
        placeholder="روز"
      />
      <PersianMonthDropdown
        onSelectDay={handleMonthSelect}
        options={Month}
        placeholder="ماه"
      />
      <PersianMonthDropdown
        onSelectDay={handleYearSelect}
        options={Years}
        placeholder="سال"
      />
    </div>
  );
}

export default Birthdate;
