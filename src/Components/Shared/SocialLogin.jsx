import React from "react";
import google from "../../../src/assets/google-icon.png"
import apple from "../../../src/assets/apple-icon.png"
const SocialLogin = () => {
  return (
    <section>
      <div className="flex justify-between flex-col gap-3 md:flex-row md:gap-0">
        <button className="flex items-center justify-center gap-2 border border-gray-800 rounded-md bg-white font-semibold px-5 py-3">
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
