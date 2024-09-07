import React, { useContext } from "react";
import google from "../../../src/assets/google-icon.png";
import apple from "../../../src/assets/apple-icon.png";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaFacebook } from "react-icons/fa";
const SocialLogin = () => {
  const { googleLogin, facebookLogin } = useContext(AuthContext);
  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("login successfully");
        setTimeout(() => {
          navigate("/products");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.message);
      });
  };
  // facebook login
  const handleFacebookLogin = () => {
    facebookLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("login successfully");
        setTimeout(() => {
          navigate("/products");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.message);
      });
  };
  return (
    <section>
      <div className="flex justify-between flex-col gap-3 md:flex-row md:gap-0">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 border border-gray-800 rounded-md bg-white font-semibold px-4 py-2"
        >
          <img src={google} alt="" />
          <span>Sign in with Google</span>
        </button>
        <button
          onClick={handleFacebookLogin}
          className="flex items-center justify-center gap-2 border border-gray-800 rounded-md bg-white font-semibold px-4 py-2"
        >
          <FaFacebook className="text-xl text-[#0866FF]"/>
          <span>Sign in with Facebook</span>
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default SocialLogin;
