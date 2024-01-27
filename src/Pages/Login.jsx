import logo from '../assets/assets/logo.png';
import logo2 from '../assets/assets/Google__G__Logo 1.png';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <div className='flex mt-14 flex-col items-center gap-6 mx-auto'>
                <img src={logo} className='w-40 h-14' alt="" />
                <h1 className='font-bold text-2xl'>Login with </h1>
                <button className="btn btn-wide bg-[pink] rounded-full text-base font-medium"><img src={logo2} alt="" />  Continue with Google</button>
                <p>Don’t have an account? <Link to='/signup'><span className='text-[#F63E7B]'>Create an account</span> </Link> </p>
            </div>
        </div>
    );
};

export default Login;