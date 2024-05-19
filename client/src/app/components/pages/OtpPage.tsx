'use client'
import React from 'react';
// pages/otp.js
const OtpPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white border border-gray-200 shadow-sm p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">OTP Verification</h1>
            <p className="mt-2 text-sm text-gray-600">Please enter the OTP sent to your email.</p>
          </div>
          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="otp" className="block text-sm mb-2">OTP</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      required
                    />
                  </div>
                </div>
  
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Verify OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default OtpPage;
  
