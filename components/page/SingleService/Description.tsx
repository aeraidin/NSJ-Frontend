/** @format */
import React from "react";

function Description({ data }: { data: any }) {
  return (
    <>
      <div className="w-full">
        <h2>{`معرفی ${data.serviceName}`}</h2>
        <p className="text-base ">{data.description}</p>
      </div>
    </>
  );
}

export default Description;
