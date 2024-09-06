import React, { useContext } from "react";
import google from "../../../src/assets/google-icon.png";
import apple from "../../../src/assets/apple-icon.png";
import { AuthContext } from "../../Provider/AuthProvider";
const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section>
      <div className="flex justify-between flex-col gap-3 md:flex-row md:gap-0">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 border border-gray-800 rounded-md bg-white font-semibold px-5 py-3"
        >
          <img src={google} alt="" />
          <span>Sign in with Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 border border-gray-800 rounded-md bg-white font-semibold px-5 py-3">
          <img src={apple} alt="" />
          <span>Sign in with Apple</span>
        </button>
      </div>
    </section>
  );
};

export default SocialLogin;
