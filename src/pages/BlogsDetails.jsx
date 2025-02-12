// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const BlogsDetails = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     fetch(`https://returno-server.vercel.app/blogs/${id}`)
//       .then((res) => res.json())
//       .then((data) => setBlog(data))
//       .catch((error) => console.error("Error fetching blog details:", error));
//   }, [id]);

//   //   if (!blog) {
//   //     return <p>Loading...</p>;
//   //   }

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
//       <div className="flex items-center gap-4 mb-6">
//         <img
//           src={blog.author.image}
//           alt={blog.author.name}
//           className="w-12 h-12 rounded-full"
//         />
//         <p className="text-lg font-semibold">By {blog.author.name}</p>
//       </div>
//       <img
//         src={blog.blogImage}
//         alt={blog.title}
//         className="w-full rounded-lg mb-6"
//       />
//       <p className="text-gray-700 leading-relaxed">{blog.description}</p>
//       <div className="mt-6">
//         {blog.tags.map((tag, index) => (
//           <span
//             key={index}
//             className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm mr-2"
//           >
//             #{tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogsDetails;

const BlogsDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://returno-server.vercel.app/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching blog details:", error));
  }, [id]);

  console.log(blog);
  return (
    <div className="w-11/12 mx-auto lg:w-[600px] my-10">
      <h1 className="text-3xl font-bold mb-4">{blog?.title}</h1>
      <div className="flex items-center gap-4 mb-6">
        <img
          src={blog?.author.image}
          alt={blog?.author.name}
          className="w-12 h-12 rounded-full"
        />
        <p className="text-lg font-semibold">By {blog?.author.name}</p>
      </div>
      <img
        src={blog?.blogImage}
        alt={blog?.title}
        className="w-full h-[300px] rounded-lg mb-6"
      />
      <p className="text-gray-700 leading-relaxed">{blog?.description}</p>
      <div className="mt-6">
        {blog?.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogsDetails;
