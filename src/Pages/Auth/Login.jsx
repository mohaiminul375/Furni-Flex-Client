import { Link } from "react-router-dom";
import chair from "../../../src/assets/Chair.png";
import logo from "../../assets/icon.png"
import SocialLogin from "../../Components/Shared/SocialLogin";
const Login = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="w-full lg:w-1/2">
        <div className="bg-[#FAFAFA] md:w-3/4 md:mx-auto rounded-lg py-10 px-8">
          <div className="">
            <h2 className="text-3xl font-semibold">Welcome Back!</h2>
            <p className="text-[#707070] text-lg">
              Enter Your Credential to Access your Account
            </p>
            {/* form */}
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your Password"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div>
                    <input type="checkbox" /> <span className="font-semibold">I agree to the <Link to='' className="underline">Terms&Policy</Link></span>
                </div>
                <button className="bg-black text-white font-bold rounded-md py-4 w-full">Sign In</button>
            </form>
            <div className="divider">or</div>
            {/* social login */}
            <SocialLogin></SocialLogin>
            <h2 className="text-center font-semibold mt-5">Have an account? <Link className="text-[#0F3DDE] hover:underline" to='/signUp'>SignUp</Link></h2>
          </div>
        </div>
      </div>
      {/* bg */}
     
      <div
        style={{
          backgroundImage: `url(${chair})`,
        }}
        className="hidden lg:flex justify-center items-center bg-cover bg-center bg-no-repeat lg:w-1/2 h-screen"
      >
        <div className="flex flex-col items-center w-2/4 mx-auto">
            <img src={logo} alt="logo" className="w-12"/>
            <h1 className="text-3xl text-white font-bold">
            Furni<span className="text-[#1E99F5]">Flex</span></h1>
            <p className="text-[#C8C4C4] text-center">Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
