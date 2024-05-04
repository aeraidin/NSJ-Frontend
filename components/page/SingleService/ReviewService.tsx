/** @format */

import React from "react";
import Comment from "./Comments/Comment";

function ReviewService() {
  return (
    <div className="py-10 Container">
      <h2 className=" mb-8 ">امتیاز و نظرات کاربران(2 نظر)</h2>
      <Comment />
    </div>
  );
}

export default ReviewService;
