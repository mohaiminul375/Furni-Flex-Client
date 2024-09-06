import { Link } from "react-router-dom";
import chair from "../../../src/assets/Chair.png";
import logo from "../../assets/icon.png";
import SocialLogin from "../../Components/Shared/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [showPassword, setShowPassword] = useState();
  console.log(checkbox);
  const { createUser } = useContext(AuthContext);
  // signUp email and password
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // signUp
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <section className="flex items-center justify-between">
      <div className="w-full lg:w-1/2">
        <div className="bg-[#FAFAFA] md:w-3/4 md:mx-auto rounded-lg py-5 px-8">
          <div className="">
            <div className="text-center">
              <h5 className="text-xl font-semibold">Welcome To</h5>
              <h2 className="text-3xl font-bold">
                Furni<span className="text-[#1E99F5]">Flex</span>
              </h2>
              <p className="text-[#707070] text-base">
                Signup for purchase your desire products
              </p>
            </div>

            {/* form */}
            <form onSubmit={handleSignUp} className="space-y-2">
              <div className="flex gap-3">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">First Name(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Last Name(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Last Name"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-[60%] text-xl"
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>
              <div>
                <input
                  onChange={(e) => setCheckbox(!checkbox)}
                  type="checkbox"
                />{" "}
                <span className="font-semibold">
                  I agree to the{" "}
                  <Link to="" className="underline">
                    Terms&Policy
                  </Link>
                </span>
              </div>
              <button
                disabled={!checkbox}
                className="bg-black text-white font-bold rounded-md py-4 w-full disabled:cursor-not-allowed"
              >
                Sign Up
              </button>
            </form>
            <div className="divider">or</div>
            {/* social login */}
            <SocialLogin></SocialLogin>
            <h2 className="text-center font-semibold mt-5">
              Have an account?{" "}
              <Link className="text-[#0F3DDE] hover:underline" to="/login">
                Sign in
              </Link>
            </h2>
          </div>
        </div>
      </div>
      {/* bg */}

      <div
        style={{
          backgroundImage: `url(${chair})`,
        }}
        className="hidden lg:flex justify-center items-center bg-cover bg-center bg-no-repeat lg:w-1/2 h-screen object-cover"
      >
        <div className="flex flex-col items-center w-2/4 mx-auto">
          <img src={logo} alt="logo" className="w-12" />
          <h1 className="text-3xl text-white font-bold">
            Furni<span className="text-[#1E99F5]">Flex</span>
          </h1>
          <p className="text-[#C8C4C4] text-center">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
