import LatestBlog from "@/components/LatestBlog/LatestBlog";

const Home = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();
  // console.log(blogs);

  return (
    <div>
      <LatestBlog blogs={blogs}></LatestBlog>
    </div>
  );
};

export default Home;
