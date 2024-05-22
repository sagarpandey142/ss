'use client';
import React, { useState } from 'react';
import { UpdatePassword } from "../../../Services/operations/ProfileHandler";
import { useDispatch,useSelector } from 'react-redux';
import { updateSignupData } from '@/GlobalRedux/Features/Counter/signupReducer';
import { RootState } from '@/GlobalRedux/store';
import { useRouter } from 'next/navigation';


const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const signupData = useSelector((state:RootState) => state.signup.data);
  
  const email = signupData.email;
 
  const dispatch = useDispatch();
  const router = useRouter();
 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
   
    e.preventDefault();

    // Check if passwords match
    console.log("first", password,confirmPassword)
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }


    dispatch(updateSignupData(password));

    try {
      // Call UpdatePassword function to update the password
      const response = await UpdatePassword(email,password);
      if(response){
        // router.push("")
      }
     console.log("response", response)
      // Handle response
    } catch (error) {
      setError(error.message || 'An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-3xl dark:border-neutral-700 p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800">Reset Password</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            Please enter your new password.
          </p>
        </div>

        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="new-password" className="block text-sm mb-2">New Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="new-password"
                    name="new-password"
                    placeholder="Enter New Password"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    required
                    aria-describedby="new-password-error"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="new-password-error">8+ characters required</p>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm mb-2">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Confirm New Password"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    required
                    aria-describedby="confirm-password-error"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">Passwords do not match</p>
              </div>

              {error && <p className="text-xs text-red-600 mt-2">{error}</p>}

              <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
