import Link from "next/link";
import BlogCard from "../../components/common/BlogCard";

function BlogGroup({ title, link, type }) {
  const blogs = new Array(3).fill("");
  return (
    <div className=" max-w-[980px] mx-auto">
      <div className=" flex justify-between mb-[28px] md:mb-[31px]">
        <h3 className=" md:text-[22px] lg:text-[26px] font-bold">{title}</h3>
        {type ? (
          ""
        ) : (
          <Link href={link || ""}>
            <span className=" text-[14px] md:text-base py-[8px] px-[12px] rounded-lg bg-gray-100 cursor-pointer">
              view all
            </span>
          </Link>
        )}
      </div>
      <div className="">
        {blogs.map((blog, id) => (
          <BlogCard key={id} link={`/blog/daily/${id + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default BlogGroup;
