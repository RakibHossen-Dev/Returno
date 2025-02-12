import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    fetch("https://returno-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const uniqueTags = ["All", ...new Set(blogs.flatMap((blog) => blog.tags))];
  const filteredBlogs =
    selectedTag === "All"
      ? blogs
      : blogs.filter((blog) => blog.tags.includes(selectedTag));

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Returno Blogs
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 text-sm font-semibold rounded-lg shadow-md transition-all duration-200 ${
              selectedTag === tag
                ? "bg-teal-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center text-xl font-semibold">Loading...</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <Link to={`/blogs/${blog._id}`}>
              <div
                key={blog.title}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={blog.blogImage}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-3">
                    {blog.description.slice(0, 100)}...
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={blog.author.image}
                      alt={blog.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <p className="text-gray-700 text-sm">
                      {blog.author.name} • {blog.date}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-teal-600 text-white text-xs px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
