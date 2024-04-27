/** @format */

"use client";
import {
  SignupSchema,
  SignupSchemaType,
} from "@/util/config/validations/Registration/SignupSchema";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import { Form } from "../Form";
import PrimaryBtn from "../../Buttons/PrimaryBtn";
import { Signup } from "@/util/api/Auth/Signup";
import ControlledSelect from "../../Input/ControlledSelect";
import FormDropDown from "../../Dropdowns/FormDropDown";
import { Location, SearchNormal } from "iconsax-react";
import {
  SearchBoxSchema,
  SearchBoxType,
} from "@/util/config/validations/Header/SearchBox/SearchBoxSchema";
import ControlledInput from "../../Input/ControlledInput";
import useDebounce from "@/util/hook/useDebounce";
function SearchBoxForm() {
  const [reset, setReset] = useState({});
  const debouncedValue = useDebounce({ Delay: 3000, value: "Searchiiing..." });
  console.log(debouncedValue);

  const [Genders, setGender] = useState(1);

  const SignupHandler = useMutation({
    mutationFn: Signup,
    onSettled(data, error, variables, contextd) {},
  });

  const options = [{ name: "تهران", value: 1 }];
  const onSubmit: SubmitHandler<SearchBoxType> = async (data) => {
    console.log(data);
  };
  return (
    <Form<SearchBoxType>
      validationSchema={SearchBoxSchema}
      onSubmit={onSubmit}
      resetValues={reset}
      className="w-full"
    >
      {({ register, formState: { errors }, setValue, control }) => (
        <div className="flex justify-center items-center gap-0 lg:gap-1 ">
          <div className=" max-w-[160px] flex justify-center items-center h-full  w-full">
            <Location size={24} className=" text-gray-400 mb-1 mr-2" />

            <Controller
              control={control}
              name="province"
              render={({ field: { onChange, value } }) => (
                <ControlledSelect
                  BorderNone
                  options={options}
                  required
                  isHeader
                  error={errors.province?.message}
                  PlaceHolder="استان"
                  value={value}
                  onChange={(selectedOption) => {
                    onChange(selectedOption);
                  }}
                  id={"province"}
                />
              )}
            />
          </div>

          <div className=" h-6 w-1 border-l border-gray-100"></div>
          <div className=" w-full  max-w-[340px]">
            <ControlledInput
              id="text"
              isHeader={true}
              required
              PlaceHolder="جستجو ورزش،تفریح،باشگاه و... "
              type="text"
              register={register}
              setValue={setValue}
              error={errors.text?.message}
            />
          </div>

          <div className=" w-full max-w-14">
            <PrimaryBtn type="submit">
              <SearchNormal size={24} className=" text-white absolute" />
            </PrimaryBtn>
          </div>
        </div>
      )}
    </Form>
  );
}

export default SearchBoxForm;
