import { useContext, useEffect, useState } from "react";
import { authContext } from "../context/AuthProvider";
import axios from "axios";
import { format } from "date-fns";
import { RiLayoutGrid2Fill } from "react-icons/ri";

const AllRecoveredItems = () => {
  const { user } = useContext(authContext);
  const [myItems, setMyItems] = useState([]);
  const [tableRow, setTableRow] = useState(true);
  // const [startDate, setStartDate] = useState(new Date());
  // const [post, setPost] = useState({});

  useEffect(() => {
    fetchAllItems();
  }, [user]);

  const fetchAllItems = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/myRecoverd/${user?.email}`
    );
    setMyItems(data);
  };
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="text-end my-8">
        <button
          onClick={() => setTableRow(!tableRow)}
          className="bg-teal-600 p-2"
        >
          <RiLayoutGrid2Fill className="text-white text-xl" />
        </button>
      </div>
      {/* <h3>This is AllRecoveredItems {myItems.length}</h3> */}
      {tableRow ? (
        <div className="overflow-x-auto border rounded-lg border-teal-600">
          <table className="table">
            {/* head */}
            <thead className="bg-teal-600 text-white">
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Name</th>
                <th>Email</th>
                <th>Recover Date</th>
                <th>Location</th>
              </tr>
            </thead>

            <tbody>
              {myItems.length === 0 ? (
                // <tr className="text-center my-10">No Data Found</tr>
                <tr>
                  <td colSpan="6">
                    <h3 className="text-center my-20 text-xl font-bold text-gray-600">
                      No Data Found
                    </h3>
                  </td>
                </tr>
              ) : (
                myItems.map((myItem, idx) => (
                  <tr key={myItem._id}>
                    <th>{idx + 1}</th>
                    <td>{myItem.title}</td>
                    <td>{myItem.name}</td>
                    <td>{myItem.email}</td>
                    <td>{format(new Date(myItem.deadline), "P")}</td>
                    <td>{myItem.location}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:grid-cols-3">
          {myItems.map((item) => (
            <div key={item._id} className="border shadow-lg p-4 space-y-2">
              <p>
                <span className="font-semibold">Title: </span>
                {item.title}
              </p>
              <p>
                <span className="font-semibold">Name: </span>
                {item.name}
              </p>
              <p>
                <span className="font-semibold">Email: </span>
                {item.email}
              </p>
              <p>
                <span className="font-semibold">Recover Date: </span>
                {format(new Date(item.deadline), "P")}
              </p>
              <p>
                <span className="font-semibold">Location: </span>
                {item.location}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRecoveredItems;
