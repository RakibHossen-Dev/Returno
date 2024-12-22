import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../context/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ManageMyItems = () => {
  const { user } = useContext(authContext);
  const [myItems, setMyItems] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    fetchAllItems();
  }, [user]);

  const fetchAllItems = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/myItems/${user?.email}`
    );
    setMyItems(data);
  };
  console.log(myItems);
  const handleDeleteLostAndFoundItem = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      const { data } = await axios.delete(
        `http://localhost:5000/deleteLostAndFoundItem/${id}`
      );
      console.log(data);
      fetchAllItems();
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Lost and Found item has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="w-11/12 mx-auto my-10">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form className="card-body w-full">
            <div className="flex  flex-col  gap-3 items-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  disabled
                  defaultValue={user?.displayName}
                  placeholder="Enter your name"
                  className="input input-bordered rounded-none "
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="eamil"
                  disabled
                  defaultValue={user?.email}
                  placeholder="Enter your description"
                  className="input input-bordered rounded-none "
                  required
                />
              </div>
            </div>
            <div className="flex  flex-col  gap-3 items-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter item title"
                  className="input input-bordered rounded-none  "
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Post type</span>
                </label>
                <select
                  name="types"
                  id=""
                  className="input input-bordered rounded-none  "
                >
                  <option value="Lost">Lost</option>
                  <option value="Found"> Found</option>
                </select>
              </div>
            </div>
            <div className="flex  flex-col  gap-3 items-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Deadline </span>
                </label>

                <DatePicker
                  className="input input-bordered rounded-none w-full "
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    Location (where the item was lost)
                  </span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter your Location "
                  className="input input-bordered rounded-none "
                  required
                />
              </div>
            </div>

            <div className="flex  flex-col  gap-3 items-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  name="category"
                  id=""
                  className="input input-bordered rounded-none  "
                >
                  <option value="Pets">Pets</option>
                  <option value="Stationery">Stationery </option>
                  <option value="Documents">Documents</option>
                  <option value="Gadgets">Gadgets</option>
                  <option value="Jewelry">Jewelry</option>
                  <option value="Money">Money</option>
                  <option value="Keys">Keys</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter image URL"
                  className="input input-bordered rounded-none "
                  required
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                rows="8"
                name="description"
                placeholder="Enter your description "
                className="w-full p-4 border "
              />
            </div>
            {/* kgfjhkfghgjf */}

            {/* <div className="form-control mt-6">
              <input
                type="submit"
                value=" Add Post "
                className="bg-teal-600 py-2 rounded-sm font-semibold  text-white cursor-pointer"
              ></input>
            </div> */}
          </form>
          {/* <p className="py-4">
            Press ESC key or click the button below to close
          </p> */}

          <div className="modal-action" className="text-center px-8">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              {/* <div className="flex justify-center items-center bg-teal-600"> */}
              <button className="bg-teal-600  text-white    py-2 px-4 w-full">
                Update post
              </button>
              {/* </div> */}
            </form>
          </div>
        </div>
      </dialog>
      <div className="overflow-x-auto border rounded-lg border-teal-600">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-teal-600 text-white ">
              <th></th>
              <th className="text-lg font-semibold">Title</th>
              <th className="text-lg font-semibold">Category</th>
              <th className="text-lg font-semibold">Location</th>
              <th className="text-lg font-semibold">Action</th>
            </tr>
          </thead>
          {/* row 1 */}
          {myItems.length === 0 ? (
            <h3 className="text-center my-10">No Data Found</h3>
          ) : (
            <tbody>
              {/* <> */}
              {myItems.map((myItem, idx) => (
                <tr>
                  <th>{idx + 1}</th>
                  <td>{myItem.title}</td>
                  <td>{myItem.category}</td>
                  <td>{myItem.location}</td>
                  <td className="flex items-center gap-5">
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                      className="text-green-400 text-xl"
                    >
                      <GrEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteLostAndFoundItem(myItem._id)}
                      className="text-red-400 text-xl"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))}
              {/* </> */}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default ManageMyItems;
//  `${import.meta.env.VITE_API_URL}/bids/${user?.email}`
