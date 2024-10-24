import React, { useState } from 'react';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState('Sign Up');

    // Handle Submit
    const onSubmitHandler = async (e) => {
        e.preventDefault();
    };
    return (
        <React.Fragment>
            <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
                <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
                    <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
                    <p>Please {state === 'Sign Up' ? 'Sign Up' : 'Sign In'} To Book Appointment</p>
                    {
                        state === 'Sign Up' && <div className='w-full'>
                            <p>Full Name</p>
                            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e) => setName(e.target.name)} value={name} required />
                        </div>
                    }
                    <div className='w-full'>
                        <p>Email</p>
                        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='email' onChange={(e) => setEmail(e.target.name)} value={email} required />
                    </div>
                    <div className='w-full'>
                        <p>Password</p>
                        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='password' onChange={(e) => setPassword(e.target.name)} value={password} required />
                    </div>
                    <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
                    {
                        state === 'Sign Up' ? <p>Already Have An Account? <span onClick={() => setState('Sign In')} className='text-primary underline cursor-pointer'>Login</span></p> : <p>Create An New Account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Register</span></p>
                    }
                </div>
            </form>
        </React.Fragment>
    )
}

export default Login;