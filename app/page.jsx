import Image from "next/image";
import HeroSection from "./(pages)/home/HeroSection";
import BlogGroup from "./(pages)/blog/BlogGroup";

export default function Home() {
  return (
    <main>
      <HeroSection type={"home"} />
      <section className=" bg-gray-200">
        <div className=" container mx-auto text-center py-[40px] md:py-[60px] lg:py-[80px] flex flex-col gap-[40px] md:gap-[80px] lg:gap-[100px]">
          <BlogGroup title={"Daily Bigest"} link={"/blog/daily"} />
          <BlogGroup title={"Design Tools"} link={"/blog/design"} />
          <BlogGroup title={"Tutorials"} link={"/blog/tutorials"} />
        </div>
      </section>
    </main>
  );
}
