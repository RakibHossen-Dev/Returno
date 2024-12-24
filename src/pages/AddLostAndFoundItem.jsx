import { useContext, useEffect, useState } from "react";
// import { authContext } from "../Context/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { authContext } from "../context/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

// import { toast, ToastContainer } from "react-toastify";

const AddLostAndFoundItem = () => {
  const { user } = useContext(authContext);
  // console.log(user);
  const [currentUser, setCurrentUser] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  const handleSubmitItem = async (e) => {
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
      status: "Pending",
    };

    console.log(formData);
    try {
      await axios.post(
        "https://returno-server.vercel.app/addLostAndFoundItem",
        formData,
        {
          withCredentials: true,
        }
      );
      form.reset();
      toast.success("New item added");
    } catch {
      (err) => {
        console.log(err);
      };
    }
  };

  return (
    <div className="my-10">
      <Helmet>
        <title>Returno | Add Lost & Found Item</title>
      </Helmet>
      <div className="min-h-screen flex flex-col justify-center items-center md:w-9/12 mx-auto bg-opacity-80 backdrop-blur-lg bg-teal-50 rounded-md p-4">
        <h3 className="text-3xl  text-center mb-3 font-semibold text-teal-600">
          Add Lost And Found Item
        </h3>
        {/* <p className="text-center md:w-9/12 mx-auto">
          Start your journey today by launching a new campaign on Foundolio.
          Share your vision, inspire supporters, and turn your ideas into
          reality!
        </p> */}
        <form onSubmit={handleSubmitItem} className="card-body w-full">
          <div className="flex md:flex-row flex-col  gap-3 items-center">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                disabled
                defaultValue={currentUser?.displayName}
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
                defaultValue={currentUser?.email}
                placeholder="Enter your description"
                className="input input-bordered rounded-none "
                required
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col  gap-3 items-center">
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
          <div className="flex md:flex-row flex-col  gap-3 items-center">
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

          <div className="flex md:flex-row flex-col  gap-3 items-center">
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
              placeholder="Enter your description"
              className="w-full p-4 "
            />
          </div>
          {/* kgfjhkfghgjf */}

          <div className="form-control mt-6">
            <input
              type="submit"
              value=" Add Post "
              className="bg-teal-600 py-2 rounded-sm font-semibold  text-white cursor-pointer"
            ></input>
          </div>
        </form>
      </div>
      {/* <ToastContainer /> */}
      <Toaster></Toaster>
    </div>
  );
};

export default AddLostAndFoundItem;
