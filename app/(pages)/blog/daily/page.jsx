"use client";
import React, { useState } from "react";
import HeroSection from "../../home/HeroSection";
import BlogCard from "@/app/components/common/BlogCard";
import Button from "@/app/components/common/Button";

function Daily() {
  const [count, setCount] = useState(3);
  const description =
    "A description of the respective category goes right here. Be as expressive as possible, but in brief.";
  const blogs = new Array(count).fill("");
  return (
    <div className=" bg-gray-200">
      <HeroSection title={"Daily Digest"} description={description} />
      <div className=" container mx-auto py-[60px] lg:py-[80px]">
        <div className=" max-w-[980px] mx-auto">
          {blogs.map((blog, id) => (
            <BlogCard key={id} link={`/blog/daily/${id + 1}`} />
          ))}
        </div>
        <div className=" text-center mt-[40px] md:mt-[60px]">
          <Button
            className={"bg-white text-sm md:text-base"}
            onClick={() => setCount((prev) => prev + 3)}
          >
            More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Daily;
