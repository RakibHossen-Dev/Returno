import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  const { handleGoogleLogin, handleLogin } = useContext(authContext);
  const handlewithLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    handleLogin(email, password)
      .then((res) => {
        toast.success(" Login Successful!");
      })
      .catch((err) => {
        toast.error("Email or password invalid");
      });
  };

  const handleLoginWithGoogle = () => {
    handleGoogleLogin();
  };
  return (
    <div className="my-10">
      <Helmet>
        <title>Returno | Login</title>
      </Helmet>
      <div className="w-11/12 mx-auto">
        <div className="min-h-screen flex justify-center items-center">
          <div className="card shadow-lg dark:border  w-full max-w-lg shrink-0 rounded-none py-4 px-2 md:p-10 ">
            <h2 className="text-center  mb-3 text-2xl font-semibold">
              Login your account
            </h2>
            <button
              onClick={handleLoginWithGoogle}
              className="border my-3 py-2 border-black  mx-8  flex gap-2 items-center justify-center"
            >
              <FcGoogle className="text-xl " />
              <p className="dark:text-white">Login With Google</p>
            </button>
            <p className="text-center dark:text-white mt-2">OR</p>

            <form onSubmit={handlewithLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  // ref={emailRef}
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
                  className="absolute right-3 bottom-12"
                >
                  {/* {showPassword ? <FaEyeSlash /> : <FaRegEye />} */}
                </button>
                <label className="label">
                  <Link
                    // onClick={hadleFogetPassword}
                    className="label-text-alt link link-hover "
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="py-2 rounded-sm text-white bg-teal-600">
                  Login
                </button>
              </div>
            </form>

            <p className="text-center dark:text-white">
              Dont’t Have An Account ? {""}
              <Link className="text-teal-600" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
        {/* <ToastContainer /> */}
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default Login;
