import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../context/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";

const ManageMyItems = () => {
  const { user } = useContext(authContext);
  const [myItems, setMyItems] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchAllItems();
  }, [user]);

  const fetchAllItems = async () => {
    const { data } = await axios.get(
      `https://returno-server.vercel.app/myItems/${user?.email}`,
      // `https://returno-server.vercel.app/myItems?email=${user?.email}`,
      { withCredentials: true }
    );
    setMyItems(data);
  };
  // console.log(myItems);
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
      if (result.isConfirmed) {
        const { data } = await axios.delete(
          `https://returno-server.vercel.app/deleteLostAndFoundItem/${id}`
        );
        console.log(data);
        fetchAllItems();
        Swal.fire({
          title: "Deleted!",
          text: "Your Lost and Found item has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.eamil.value;
    const title = form.title.value;
    const types = form.types.value;
    const deadline = startDate;
    const location = form.location.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const formData = {
      name,
      email,
      title,
      types,
      deadline,
      location,
      category,
      photo,
      description,
    };

    console.log(formData);
    try {
      await axios.put(
        `https://returno-server.vercel.app/updateItem/${post._id}`,
        formData
      );
      fetchAllItems();
      document.getElementById("my_modal_1").close();
      Swal.fire("Success!", "Your item has been updated.", "success");
    } catch {
      error;
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchJobData();
  // }, [id]);

  // const handleSpecificPost = (id) => {
  //   console.log(id);

  //   const fetchJobData = async () => {
  //     const { data } = await axios.get(
  //       `https://returno-server.vercel.app/allLostAndFoundItem/${id}`
  //     );
  //     setJob(data);
  //     setStartDate(new Date(data.deadline));
  //   };
  // };
  const fetchJobData = async (id) => {
    const { data } = await axios.get(
      `https://returno-server.vercel.app/allLostAndFoundItem/${id}`
    );
    setPost(data);
    setStartDate(new Date(data.deadline));
  };

  const handleSpecificPost = (id) => {
    console.log(id);
    fetchJobData(id);
  };

  console.log(post);
  return (
    <div className="w-11/12 mx-auto my-10">
      <Helmet>
        <title>Returno | Manage My Item</title>
      </Helmet>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form onSubmit={handleUpdatePost} className="card-body w-full">
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
                  defaultValue={post.title}
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
                  defaultValue={post.types}
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
                  defaultValue={post.location}
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
                  defaultValue={post.category}
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
                  defaultValue={post.photo}
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
                defaultValue={post.description}
                rows="8"
                name="description"
                placeholder="Enter your description "
                className="w-full p-4 border "
              />
            </div>
            {/* kgfjhkfghgjf */}

            <div className="form-control mt-6">
              <input
                type="submit"
                value=" Update Post "
                className="bg-teal-600 py-2 rounded-sm font-semibold  text-white cursor-pointer"
              ></input>
            </div>
          </form>
          {/* <p className="py-4">
            Press ESC key or click the button below to close
          </p> */}

          {/* <div className="modal-action text-center px-8">
            <form method="dialog">
              <button className="bg-teal-600  text-white    py-2 px-4 w-full">
                cencel
              </button>
            </form>
          </div> */}
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
          <tbody>
            {myItems.length === 0 ? (
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
                  <td>{myItem.category}</td>
                  <td>{myItem.location}</td>
                  <td className="flex items-center gap-5">
                    <Link>
                      <button
                        onClick={() => {
                          document.getElementById("my_modal_1").showModal();
                          handleSpecificPost(myItem._id);
                        }}
                        className="text-teal-400 text-xl"
                      >
                        <GrEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteLostAndFoundItem(myItem._id)}
                      className="text-red-400 text-xl"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyItems;
//  `${import.meta.env.VITE_API_URL}/bids/${user?.email}`
