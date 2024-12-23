import { useContext, useEffect, useState } from "react";
import { authContext } from "../context/AuthProvider";
import axios from "axios";
import { format } from "date-fns";

const AllRecoveredItems = () => {
  const { user } = useContext(authContext);
  const [myItems, setMyItems] = useState([]);
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
      {/* <h3>This is AllRecoveredItems {myItems.length}</h3> */}
      <div className="overflow-x-auto border rounded-lg border-teal-600">
        <table className="table">
          {/* head */}
          <thead className="bg-teal-600 text-white">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Recover Date</th>
              <th>Location</th>
            </tr>
          </thead>

          {myItems.length === 0 ? (
            <h3 className="text-center my-10">No Data Found</h3>
          ) : (
            <tbody>
              {/* row 1 */}
              {myItems.map((myItem, idx) => (
                <tr key={myItem._id}>
                  <th>{idx + 1}</th>
                  <td>{myItem.title}</td>
                  <td>{myItem.name}</td>
                  <td>{myItem.email}</td>
                  <td>{format(new Date(myItem.deadline), "P")}</td>
                  <td>
                    {myItem.location}
                    {/* <button className="btn btn-ghost btn-xs">details</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
          {/* foot */}
          {/* <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};

export default AllRecoveredItems;
