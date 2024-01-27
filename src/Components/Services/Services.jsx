import serviceimg from '../../assets/assets/icons/Group 1372.png';
import serviceimg2 from '../../assets/assets/icons/Group 1373.png';
import serviceimg3 from '../../assets/assets/icons/Group 1374.png';

const Services = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl text-center py-5">Our Awesome <span className="text-[#F63E7B]">Services</span></h1>
            <div className='grid  grid-cols-1 pb-5 lg:grid-cols-3 md:grid-cols-2 '>

                {/* Card number 1 */}
                <div className="card m-6 w-70 border-2  lg:w-[22rem] bg-base-100 ">
  <figure className="px-10 pt-10">
    <img src={serviceimg2} alt="Shoes" className="rounded-xl w-20" />
  </figure>
  <div className="card-body items-center text-center text-xl">
    <h2 className="card-title">Anti Age Face Treatment</h2>
    <p className="text-[#F63E7B] text-xl font-medium">$199</p>
    <p className='text-[#000000B2]'>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
   
  </div>
</div>
                {/* Card number 2 */}
                <div className="card m-6 w-70 border-2  lg:w-[22rem] bg-base-100 ">
  <figure className="px-10 pt-10">
    <img src={serviceimg3} alt="Shoes" className="rounded-xl w-20" />
  </figure>
  <div className="card-body items-center text-center text-xl">
    <h2 className="card-title">Skin Care Treatment</h2>
    <p className="text-[#F63E7B] text-xl font-medium">$299</p>
    <p className='text-[#000000B2]'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
   
  </div>
</div>
                {/* Card number 3 */}
                <div className="card m-6 w-70 border-2  lg:w-[22rem] bg-base-100 ">
  <figure className="px-10 pt-10">
    <img src={serviceimg} alt="Shoes" className="rounded-xl w-20" />
  </figure>
  <div className="card-body items-center text-center text-xl">
    <h2 className="card-title">Hair Color & Styleing</h2>
    <p className="text-[#F63E7B] text-xl font-medium">$99</p>
    <p className='text-[#000000B2]'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
   
  </div>
</div>
          
            </div>
            <div className='flex justify-center mb-4'>
            <a className="btn w-32 h-11 bg-[#F63E7B] rounded-md text-white">Explore more</a>
            </div>
            
        </div>
    );
};

export default Services;