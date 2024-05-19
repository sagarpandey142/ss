'use client';
import React, { useState } from 'react';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
          <form>
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
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  >
                    {showPassword ? (
                      <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12m0 6a6 6 0 110-12 6 6 0 010 12zM2.458 12C3.732 7.943 7.728 5 12 5c4.272 0 8.268 2.943 9.542 7-.5 1.58-1.5 3.16-2.292 4.125m-7.25-2.125A4 4 0 0012 16m0-8a4 4 0 00-4 4"></path>
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12m6-6a6 6 0 1112 0M4.5 19.5 19.5 4.5M9.172 9.172a4 4 0 005.656 5.656m1.414-1.414a4 4 0 01-5.656-5.656"></path>
                      </svg>
                    )}
                  </button>
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
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  >
                    {showConfirmPassword ? (
                      <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12m0 6a6 6 0 110-12 6 6 0 010 12zM2.458 12C3.732 7.943 7.728 5 12 5c4.272 0 8.268 2.943 9.542 7-.5 1.58-1.5 3.16-2.292 4.125m-7.25-2.125A4 4 0 0012 16m0-8a4 4 0 00-4 4"></path>
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12m6-6a6 6 0 1112 0M4.5 19.5 19.5 4.5M9.172 9.172a4 4 0 005.656 5.656m1.414-1.414a4 4 0 01-5.656-5.656"></path>
                      </svg>
                    )}
                  </button>
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">Passwords do not match</p>
              </div>

              <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
