import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestFindAndLost = () => {
  // leatestLostAndFound
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchLeatestItems();
  }, []);

  const fetchLeatestItems = async () => {
    const { data } = await axios.get(
      "https://returno-server.vercel.app/leatestLostAndFound"
    );
    setItems(data);
  };

  console.log("LatestFindAndLost", items);
  return (
    <div className="my-14 w-11/12 mx-auto ">
      <h3 className="text-center text-3xl font-semibold mb-2">
        Latest Find And Lost
      </h3>
      <div className="border-b-4 w-40 mx-auto border-teal-600"></div>
      <div className="border-b-4 mt-2  w-20 mx-auto border-teal-600"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        {items.map((item) => (
          <div key={item._id} className="p-3 border rounded-lg space-y-2">
            <img
              className="w-full lg:h-48 rounded-lg"
              src={item.photo}
              alt=""
            />
            <h3 className="text-2xl font-semibold my-2">{item.title}</h3>
            <p>
              <span className="font-semibold">Location: </span> {item.location}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {item.category}
            </p>
            <p className="pb-4">
              <span className="font-semibold">Date: </span>
              {format(new Date(item.deadline), "P")}
            </p>
            <Link
              to={`/lostAndFoundDetails/${item._id}`}
              className="text-white  py-1 px-6 hover:text-teal-600 bg-teal-600 rounded-sm mt-5 hover:bg-transparent border border-teal-600"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
      <Link
        to="/lostAndFound"
        className="py-2 px-7 bg-teal-600 hover:border border-teal-600 hover:text-teal-600 hover:bg-transparent text-white"
      >
        See All
      </Link>
    </div>
  );
};

export default LatestFindAndLost;
