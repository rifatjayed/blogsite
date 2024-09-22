import BlogDetails from "@/components/ui/BlogDetails";

export const generateStaticparams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog) => ({
    blogId: blog.id,
  }));
};

const blogDetailsPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`);
  const blog = await res.json();
  console.log(blog);

  return (
    <div>
      <BlogDetails blog={blog}></BlogDetails>
    </div>
  );
};

export default blogDetailsPage;
