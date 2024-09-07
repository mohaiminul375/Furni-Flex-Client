import logo from '../../../src/assets/icon.png'

const Home = () => {
    return (
        <section className='flex justify-center items-center h-screen'>
            <div className=''>
          <h2 className='text-5xl font-bold mb-5 text-center'>Welcome To</h2>
          <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="logo" className="w-12" />
          <h1 className="md:text-3xl font-bold">
            Furni<span className="text-[#1E99F5] font-inter">Flex</span>
          </h1>
        </div>
          
            <p className='md:w-2/3 mt-3 font-semibold mx-auto text-center'>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
            </div>
        </section>
    );
};

export default Home;