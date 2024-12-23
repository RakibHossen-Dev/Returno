import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { authContext } from "../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const LostAndFoundDetails = () => {
  const { user } = useContext(authContext);
  const { id } = useParams();

  const [item, setItem] = useState({});
  useEffect(() => {
    fetchItemData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchItemData = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/allLostAndFoundItem/${id}`
    );
    setItem(data);
  };

  console.log(item);
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = item.title;
    const location = form.location.value;
    const deadline = startDate;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const formData = { title, location, deadline, name, email, photo };
    console.log(formData);
    try {
      await axios.post("http://localhost:5000/addRecoverd", formData);
      document.getElementById("my_modal_1").close();
    } catch {
      (err) => {
        console.log(err);
      };
    }
  };

  const handleStatusChange = async (id, prevStatus, status) => {
    if (prevStatus === "recovered") {
      toast.error("Already recovered");
      return;
    }
    console.table({ id, prevStatus, status });

    // itemStatus
    try {
      await axios.patch(`http://localhost:5000/itemStatus/${id}`, { status });
      fetchItemData();
    } catch {
      (err) => {
        console.log(err);
      };
    }
  };

  return (
    <div className="my-10">
      <div className="w-11/12 lg:w-1/2 mx-auto border rounded-lg p-5 space-y-3">
        <img className="w-full h-80 rounded-lg " src={item.photo} alt="" />
        {/* <h3 className="text-3xl font-semibold my-2">{item.title}</h3> */}
        <h3 className="text-3xl font-semibold my-2">
          <a className="justify-between">
            {item.title}

            {item.status === "recovered" && (
              <span className="badge ml-2  bg-teal-600 text-white pt-2 pb-3">
                {item.status}
              </span>
            )}
          </a>
        </h3>
        <p>
          <span className="font-semibold">Location: </span> {item.location}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {item.category}
        </p>
        <p>
          <span className="font-semibold">Types:</span> {item.types}
        </p>
        {item.deadline && (
          <p className="mb-3">
            <span className="font-semibold">Date: </span>
            {format(new Date(item.deadline), "P")}
          </p>
        )}
        <p>{item.description}</p>
        {/* Modal------------ */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        {item.types === "Lost" ? (
          <button
            className="text-white py-1 px-6 hover:text-teal-600 bg-teal-600 rounded-sm mt-5 hover:bg-transparent border border-teal-600"
            onClick={() => {
              item.status === "Pending" &&
                document.getElementById("my_modal_1").showModal(),
                handleStatusChange(item._id, item.status, "recovered");
            }}
          >
            Found This!
          </button>
        ) : (
          <button
            className="text-white py-1 px-6 hover:text-teal-600 bg-teal-600 rounded-sm mt-5 hover:bg-transparent border border-teal-600"
            onClick={() => {
              item.status === "Pending" &&
                document.getElementById("my_modal_1").showModal(),
                handleStatusChange(item._id, item.status, "recovered");
            }}
          >
            This is Mine!
          </button>
        )}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            {/* <h3 className="font-bold text-lg">Hello!</h3> */}
            {/* Input Field */}
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Recovered Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter your recovered location"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="Enter your name"
                  disabled
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text ">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={user?.photoURL}
                  disabled
                  placeholder="Enter your photo url"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control mb-5">
                <label className="label ">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  disabled
                  placeholder="Enter your email address"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Submit"
                  className="bg-teal-600 py-2 rounded-sm font-semibold  text-white cursor-pointer"
                ></input>
              </div>
            </form>
            {/* Input Field */}
            {/* <p className="py-4">
              Press ESC key or click the button below to close
            </p> */}
            {/* <div className="modal-action" className="text-center">
              <form method="dialog"> */}
            {/* if there is a button in form, it will close the modal */}
            {/* <div className="flex justify-center items-center bg-teal-600"> */}
            {/* <button className="bg-teal-600  text-white mt-5   py-2 px-4 ">
                  Submit
                </button> */}
            {/* </div> */}
            {/* </form>
            </div> */}
          </div>
        </dialog>
        {/* Modal------------ */}
      </div>
      <Toaster />
    </div>
  );
};

export default LostAndFoundDetails;
