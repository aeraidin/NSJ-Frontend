/** @format */

"use client";
import React from "react";
import DropDown from "../Dropdowns/Dropdown";
import ControlledInput from "../Input/ControlledInput";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { Location, SearchNormal } from "iconsax-react";
import SearchBoxForm from "../Forms/SearchBox/SearchBoxForm";

function SearchBox() {
  return (
    <div className=" w-full  flex justify-between items-center py-1 rounded-2xl text-gray-300 border border-gray-50">
      <SearchBoxForm />
    </div>
  );
}

export default SearchBox;
