"use client";
import Image from "next/image";
import React from "react";
import Images from "../../../public/images/index";
import { useRouter } from "next/navigation";

function BlogCard({ link }) {
  const router = useRouter();
  return (
    <div
      className=" grid grid-cols-1 md:grid-cols-3 md:gap-[20px] bg-gray-100 rounded-[20px] mb-[20px] cursor-pointer"
      onClick={() => router.push(link)}
    >
      <div className=" col-span-2 p-[20px] md:py-[41px] md:ps-[30px] text-start">
        <span className=" text-[13px]">AUGust 13, 2021 </span>
        <p className=" text-lg md:text-[22px] lg:text-[26px] font-semibold text-start mt-[20px] lg:mt-[30px]">
          10 Hilarious Cartoons That Depict Real-Life Problems of Programmers
        </p>
        <p className=" hidden md:block lg:text-lg text-gray-600">
          Redefined the user acquisition and redesigned the onboarding
          experience, all within 3 working weeks.
        </p>
      </div>
      <div className=" relative flex items-center md:pe-[20px]">
        <Image
          src={Images.Blog1}
          alt="blog1"
          className=" w-full md:w-auto rounded-[10px] h-[170px]"
        />
      </div>
    </div>
  );
}

export default BlogCard;
