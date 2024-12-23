import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const LostAndFound = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAllItems();
  }, [search]);

  const fetchAllItems = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/allLostAndFoundItem?search=${search}`
    );
    setItems(data);
  };

  // console.log(items);

  return (
    <div className="w-11/12 mx-auto my-10">
      <label className="input rounded-none border-teal-600 flex items-center  mx-auto md:w-80  gap-2 my-10">
        <input
          type="text"
          className="grow md:w-80 "
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item._id} className="p-3 border rounded-lg space-y-2">
            <img
              className="w-full  lg:h-48 rounded-lg"
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
      <div className="my-10 justify-center flex items-center gap-2">
        <button className="bg-teal-600 text-white py-1   flex items-center md:gap-2 px-1 md:px-3">
          <FaArrowLeftLong className="text-white" />
          Previes
        </button>
        <button className="bg-teal-600 text-white py-1 px-3">1</button>
        <button className="bg-teal-600 text-white py-1 px-3">2</button>
        <button className="bg-teal-600 text-white py-1 px-3">3</button>
        <button className="bg-teal-600 text-white py-1 px-3">4</button>
        <button className="bg-teal-600 text-white py-1 px-1 md:px-3 flex items-center md:gap-2 ">
          Next
          <FaArrowRightLong className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default LostAndFound;
