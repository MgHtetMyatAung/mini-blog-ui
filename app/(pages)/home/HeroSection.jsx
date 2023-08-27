import styled from "./herosection.module.css";

function HeroSection({ title, description, type }) {
  return (
    <main className={`${styled.hero_container}`}>
      <div className=" container mx-auto text-center">
        <div className=" max-w-[520px] lg:max-w-[980px] mx-auto">
          {type ? (
            <span className=" px-[16px] py-[10px] rounded-[100px] bg-gray-200 text-sm font-medium">
              👋 Meet Personally
            </span>
          ) : null}
          {title ? (
            <h1 className={`${styled.h1} text-gradient`}>{title}</h1>
          ) : (
            <h1 className={`${styled.h1} text-gradient mt-[40px]`}>
              Minimal blog template for creative expressions
            </h1>
          )}
          <div className=" max-w-[690px] mx-auto">
            {description ? (
              <p className=" text-gray-600 text-[18px] md:text-[24px] lg:text-[28px] mt-[16px] lg:mt-[20px] font-normal">
                {description}
              </p>
            ) : (
              <p className=" text-gray-600 text-[18px] md:text-[24px] lg:text-[28px] mt-[16px] lg:mt-[20px] font-normal">
                100% customisable and SEO-friendly blog template for personal
                and commercial purposes.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
