import React from "react";
import Button from "./common/Button";

function Footer() {
  return (
    <main>
      <footer className=" container mx-auto text-center py-[40px] md:py-[60px]">
        <h3 className={`text-gradient text-lg md:text-[28px] font-bold`}>
          Personally Newsletter
        </h3>
        <p className=" max-w-[320px] md:max-w-full mx-auto md:text-lg text-gray-600 mt-[10px] md:mt-0">
          A bi-weekly newsletter of design inspiration, resources <br /> and
          anything related to career development.
        </p>
        <div className="md:border md:w-fit mx-auto mt-[32px] rounded-l-lg flex flex-col md:flex-row gap-[12px]">
          <input
            type="text"
            placeholder="Email address"
            className=" w-full md:w-auto py-[14px] ps-[21px] border md:border-none focus:outline-none"
          />
          <Button
            className={
              " w-full md:w-auto bg-gray-800 text-white rounded-r-lg md:rounded-l-none px-[33px] py-[15px]"
            }
          >
            Subscribe
          </Button>
        </div>
      </footer>
      <div className=" py-[20px] md:py-[30px] lg:py-[40px] text-center text-xs border-t-[1px]">
        <p>Copyright 2021 - Elikem Daniels/ Frontend-hma</p>
      </div>
    </main>
  );
}

export default Footer;
