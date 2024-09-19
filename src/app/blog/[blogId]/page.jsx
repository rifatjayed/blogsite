import BlogDetails from "@/components/ui/BlogDetails";

const blogDetailsPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`);
  const blog = await res.json();
  console.log(blog);

  console.log(params);

  return (
    <div>
      {/* <h1>{blog.title}</h1> */}
      {/* <BlogDetails blog={blog}></BlogDetails> */}
    </div>
  );
};

export default blogDetailsPage;
