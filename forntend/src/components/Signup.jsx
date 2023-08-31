import React,{ useState } from 'react';
import logo from '../assets/logo.png';
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'; 
const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async () => {
        const data = { username: username, password: password }
        const res = await axios.post('http://localhost:5098/api/User/signup', data)
        if (res.data.statusCode === 200) {
            navigate("/home")
        }
    }
    return (
        <div className='grid w-full h-screen grid-cols-1 sm:grid-cols-2'>
            <div className='hidden sm:block'>
                <img className='object-cover w-full h-full' src={logo} alt="" />
            </div>
            <div className='flex flex-col justify-center bg-gray-800'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl font-bold text-center dark:text-white'>SIGIN UP</h2>
                    <div className='flex flex-col py-2 text-gray-400'>
                        <label >Username</label>
                        <input value={username} onChange={e => setUsername(e.target.value)} className='p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                    </div>
                    <div className='flex flex-col py-2 text-gray-400'>
                        <label >Email</label>
                        <input  value={email} onChange={e => setEmail(e.target.value)}  className='p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                    </div>
                    <div className='flex flex-col py-2 text-gray-400'>
                        <label >Password</label>
                        <input  value={password} onChange={e => setPassword(e.target.value)}  className='p-2 mt-2 bg-gray-700 rounded-lg focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                    </div>
                    <button type='button' onClick={handleSubmit} className='w-full py-2 my-5 bg-teal-500 shadow-lg shadow-teal-500/50'>Sign Up</button>
                    <div className='flex'>
                        <p className='text-gray-400'>Don't have an account yet? </p>
                        <Link className='flex justify-end text-white' to="/"> Sign In</Link>
                    </div>

                </form>
            </div>

        </div>
    );
}

export default Signup;
