import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const LostAndFoundDetails = () => {
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

  return (
    <div className="my-10">
      <div className="w-11/12 lg:w-1/2 mx-auto border rounded-lg p-5 space-y-3">
        <img className="w-full h-80 rounded-lg " src={item.photo} alt="" />
        <h3 className="text-3xl font-semibold my-2">{item.title}</h3>
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
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Found This!
          </button>
        ) : (
          <button
            className="text-white py-1 px-6 hover:text-teal-600 bg-teal-600 rounded-sm mt-5 hover:bg-transparent border border-teal-600"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            This is Mine!
          </button>
        )}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            {/* <h3 className="font-bold text-lg">Hello!</h3> */}
            {/* Input Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Recovered Location</span>
              </label>
              <input
                type="text"
                name="name"
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
                placeholder="Enter your name"
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
                placeholder="Enter your email address"
                className="input input-bordered rounded-none"
                required
              />
            </div>
            {/* Input Field */}
            {/* <p className="py-4">
              Press ESC key or click the button below to close
            </p> */}
            <div className="modal-action" className="text-center">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                {/* <div className="flex justify-center items-center bg-teal-600"> */}
                <button className="bg-teal-600  text-white    py-2 px-4 w-full">
                  Submit
                </button>
                {/* </div> */}
              </form>
            </div>
          </div>
        </dialog>
        {/* Modal------------ */}
      </div>
    </div>
  );
};

export default LostAndFoundDetails;
