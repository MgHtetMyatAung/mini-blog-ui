import Image from "next/image";
import Images from "@/public/images/index";
import BlogGroup from "../../BlogGroup";

function Detail({ params }) {
  return (
    <div className=" bg-gray-100">
      <div className=" container mx-auto pt-[60px] md:pt-[80px] lg:pt-[120px] pb-[40px] md:pb-[60px] lg:pb-[80px]">
        <h1 className=" h1 text-gradient">
          10 hilarious NFT sales that broke the internet {params.slug}
        </h1>
        <p className=" text-[13px] text-gray-600 uppercase text-center mt-[20px]">
          AUGust 13, 2021{" "}
          <span className=" font-bold text-gray-800">• Daily digest</span>
        </p>
      </div>
      <div className=" container mx-auto">
        <div className="">
          <Image src={Images.Blog11} alt="blog1" className=" mx-auto" />
        </div>
        <div className=" pb-[60px] md:pb-[100px]">
          <p className=" max-w-[680px] mx-auto my-[20px] md:my-[50px]">
            Design comps, layouts, wireframes—will your clients accept that you
            go about things the facile way? Authorities in our business will
            tell in no uncertain terms that Lorem Ipsum is that huge, huge no no
            to forswear forever. <br />
            <br /> Not so fast, Id say, there are some redeeming factors in
            favor of greeking text, as its use is merely the symptom of a worse
            problem to take into consideration. <br />
            <br /> The toppings you may chose for that TV dinner pizza slice
            when you forgot to shop for foods, the paint you may slap on your
            face to impress the new boss is your business. But what about your
            daily bread?
          </p>
          <div className=" w-fit mx-auto relative">
            <Image src={Images.Post} alt="post" className="" />
            <p className=" px-[12px] py-[10px] rounded-[100px] bg-white w-fit absolute left-[16px] bottom-[16px]">
              Image caption or credit
            </p>
          </div>
          <p className="max-w-[680px] mx-auto my-[20px] md:my-[40px]">
            The toppings you may chose for that TV dinner pizza slice when you
            forgot to shop for foods, the paint you may slap on your face to
            impress the new boss is your business. But what about your daily
            bread? Not so fast, Id say, there are some redeeming factors in
            favor of greeking text, as its use is merely the symptom of a worse
            problem to take into consideration. <br />
            <br /> Design comps, layouts, wireframes—will your clients accept
            that you go about things the facile way? Authorities in our business
            will tell in no uncertain terms that Lorem Ipsum is that huge, huge
            no no to forswear forever.
          </p>
          <div className=" border-l-8 border-[#C41740] max-w-[780px] mx-auto ps-[10px] md:ps-[22px]">
            <p className=" text-lg md:text-[32px] font-semibold md:leading-tight">
              Design comps, layouts, wireframes—we believe that clients will
              surely accept that you go about things the facile way. It’s a
              matter of time.
            </p>
          </div>
          <p className="max-w-[680px] mx-auto mt-[20px] md:mt-[40px]">
            Design comps, layouts, wireframes—will your clients accept that you
            go about things the facile way? Authorities in our business will
            tell in no uncertain terms that Lorem Ipsum is that huge, huge no no
            to forswear forever. <br />
            <br /> The toppings you may chose for that TV dinner pizza slice
            when you forgot to shop for foods, the paint you may slap on your
            face to impress the new boss is your business. But what about your
            daily bread? Not so fast, Id say, there are some redeeming factors
            in favor of greeking text, as its use is merely the symptom of a
            worse problem to take into consideration. <br />
            <br /> Not so fast, Id say, there are some redeeming factors in
            favor of greeking text, as its use is merely the symptom of a worse
            problem to take into consideration. <br />
            <br /> Design comps, layouts, wireframes—will your clients accept
            that you go about things the facile way? Authorities in our business
            will tell in no uncertain terms that Lorem Ipsum is that huge, huge
            no no to forswear forever.
          </p>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className=" container mx-auto py-[40px] md:py-[60px] lg:py-[80px]">
          <BlogGroup title={"Recommended articles"} type={"recommend"} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
