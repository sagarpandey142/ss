"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FindIfEmailExists } from '../../../Services/operations/ProfileHandler';
import { useDispatch } from 'react-redux';
import { updateSignupData } from '@/GlobalRedux/Features/Counter/signupReducer';


const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log("first", email)
      const response = await FindIfEmailExists(email);
      console.log("response", response)

      if (response?.data.success == true) {
        // If email exists, navigate to the reset password page
        dispatch(updateSignupData({email}));
        router.push("/components/pages/ResetPassword");

          
      } else {
        setError('Email does not exist. Please enter a valid email address.');
      }
    } catch (error) {
      setError(error.message || 'An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="bg-white flex justify-between items-center border-gray-200 rounded-xl shadow-3xl  dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 ">Forgot password?</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Remember your password?
              <a className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="../examples/html/signin.html">
                Sign in here
              </a>
            </p>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email address</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder='Enter Email Address'
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                      aria-describedby="email-error"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600  hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Reset password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
