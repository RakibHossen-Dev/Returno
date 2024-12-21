import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegisterwithEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
  };
  return (
    <div className="my-8 w-11/12 mx-auto">
      <div className="min-h-screen flex justify-center items-center">
        <div className="card shadow-lg dark:border  w-full max-w-lg shrink-0 rounded-none py-4 px-2 md:p-10">
          <h2 className="text-center text-2xl font-semibold ">
            Register your account
          </h2>
          <button
            // onClick={handleLoginWithGoogle}
            className="border my-3 py-2 border-black mx-8   flex gap-2 items-center justify-center"
          >
            <FcGoogle className="text-xl" />
            <p className="">Login With Google</p>
          </button>
          <p className="text-center mt-2 ">OR</p>
          <form onSubmit={handleRegisterwithEmail} className="card-body">
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

            <div className="form-control">
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

            <div className="form-control relative">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                // type={showPassword ? "text" : "password"}
                name="password"
                placeholder=" Enter your password"
                className="input input-bordered rounded-none"
                required
              />
              <button
                // onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="absolute right-3 bottom-4"
              >
                {/* {showPassword ? <FaEyeSlash /> : <FaRegEye />} */}
              </button>
            </div>
            {/* {error && <p className="text-sm text-red-500">{error}</p>} */}
            <div className="form-control mt-6">
              <button className="py-2 rounded-sm text-white bg-teal-600">
                Register
              </button>
            </div>
          </form>
          <p className="text-center ">
            Already Have An Account ? {""}
            <Link to="/login" className="text-teal-600">
              Login
            </Link>
          </p>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default Register;
