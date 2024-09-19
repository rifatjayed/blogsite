import BlogCard from "@/components/ui/BlogCard";
import React from "react";

const Blogpage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });

  const blogs = await res.json();
  return (
    <div className="w-[90%] mx-auto ">
      <h1 className="text-4xl text-center my-5">All Blog Here</h1>
      <p className="text-xl text-center w-2/4 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        cumque consequatur ratione recusandae, quidem sunt unde, blanditiis vero
        sed animi enim voluptate odio et ipsa!
      </p>

      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blogpage;
