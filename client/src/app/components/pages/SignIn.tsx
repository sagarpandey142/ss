"use client";
import React, { useState } from 'react';
import { login } from '@/app/Services/operations/generateAndVerifyOTP';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { updateSignupData, updateToken } from '@/GlobalRedux/Features/Counter/signupReducer';


const SignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    
    if (!email || !password) {
      toast.error('All fields are required');
      return;
    }

    try {
      const response = await login(email, password);

      if (response?.data?.token) {
        const token = response.data.token;
        dispatch(updateToken(token));
        dispatch(updateSignupData(email));
        localStorage.setItem('token', token);
        toast.success('Login successful');
       

        // router.push('/dashboard'); // Redirect to a desired route after login
      } else {
        toast.error(response?.message || 'Login failed');
      }
    } catch (error) {
      toast.error('An error occurred during login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your Email Address"
              required
              className="mt-1 p-3 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Please Enter Password"
              autoComplete="current-password"
              required
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm" onClick={() => router.push("/components/pages/RecoverAcc")}>
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
