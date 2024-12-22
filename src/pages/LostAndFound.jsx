import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const LostAndFound = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchAllItems();
  }, []);

  const fetchAllItems = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/allLostAndFoundItem"
    );
    setItems(data);
  };

  console.log(items);

  return (
    <div className="w-11/12 mx-auto my-10">
      This is LostAndFound
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item._id} className="p-3 border rounded-lg">
            <img className="w-full rounded-lg" src={item.photo} alt="" />
            <h3 className="text-3xl font-semibold my-2">{item.title}</h3>
            <p>
              <span className="font-semibold">Location: </span> {item.location}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {item.category}
            </p>
            <p className="mb-3">
              <span className="font-semibold">Date: </span>
              {format(new Date(item.deadline), "P")}
            </p>
            <Link
              to={`/lostAndFoundDetails/${item._id}`}
              className="text-white py-1 px-6 hover:text-teal-600 bg-teal-600 rounded-sm mt-5 hover:bg-transparent border border-teal-600"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostAndFound;
