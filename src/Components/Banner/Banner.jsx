import banner from '../../assets/assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Banner = () => {
    return (
        <div className='bg-[#FFF]'>
            <div className="hero max-w-7xl mx-auto min-h-[80vh]  bg-[#FFF]">
  <div className="flex justify-between items-center p-6  flex-col lg:gap-8  lg:flex-row-reverse">
    <img src={banner} className="lg:max-w-sm  rounded-lg" />
    <div className='lg:w-1/2'>
      <h1 className="lg:text-5xl text-3xl sh font-bold">BEAUTY SALON <br />
      FOR EVERY WOMEN</h1>
      <p className="py-6 pr-12 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
      <button className="btn btn-wide bg-[#F63E7B] text-white">Get an Appointment</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;